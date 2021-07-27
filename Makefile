OPENAPICLI := ./bin/openapi-generator-cli

export OPENAPI_GENERATOR_VERSION = 5.2.0
export JAVA_OPTS = -Dlog.level=warn

.SILENT:

generate: validate $(shell grep -o "^generate/[a-z-]\+" ./Makefile | tr '\n' ' ')

validate:
	$(OPENAPICLI) validate -i ./enlighten.yaml --recommend

define clean
	echo Removing previously generated $(1) files
	sed -e 's|^|./$(1)/enlighten/|' ./$(1)/enlighten/.openapi-generator/FILES | xargs rm -rf
	rm -rf ./$(1)/enlighten/.openapi-generator | true
	find ./$(1)/enlighten -type d -empty -delete | true
endef

clean/go:
	$(call clean,go)

clean/csharp-netcore:
	$(call clean,csharp-netcore)

clean/php:
	$(call clean,php)

clean/python:
	$(call clean,python)

clean/javascript:
	$(call clean,javascript)

clean/bash:
	$(call clean,bash)

clean/html:
	$(call clean,html)

define generate
	$(OPENAPICLI) generate -i ./enlighten.yaml -g $(1) -o ./$(1)/enlighten --package-name $(2) --git-user-id NathanBaulch --git-repo-id EnphaseOpenAPI --http-user-agent EnphaseOpenAPI/$(1) $(foreach n,3 4 5,$(if $($(n)),-p $($(n))))
	dos2unix -o ./$(1)/enlighten/.openapi-generator/FILES
endef

generate/go: clean/go $(OPENAPICLI)
	$(call generate,go,enlighten)
	echo Updating go dependencies
	cd ./go/enlighten; go get -u -v ./...; go mod tidy

generate/csharp-netcore: clean/csharp-netcore $(OPENAPICLI)
	$(call generate,csharp-netcore,EnphaseOpenAPI.Enlighten,useDateTimeOffset=true)
	cd ./csharp-netcore/enlighten; dotnet outdated -u; dotnet build

generate/php: clean/php $(OPENAPICLI)
	$(call generate,php,enlighten)
	cd ./php/enlighten; composer require spatie/guzzle-rate-limiter-middleware; composer update

generate/python: clean/python $(OPENAPICLI)
	$(call generate,python,enlighten)
	cd ./python/enlighten; source ./venv/scripts/activate; pip install --upgrade -r requirements.txt; pip freeze > requirements.txt; dos2unix -o requirements.txt

generate/javascript: clean/javascript $(OPENAPICLI)
	$(call generate,javascript,enlighten,usePromises=true)
	cd ./javascript/enlighten; npm update; npm run build
	cd ./javascript/enlighten/selftest; npm update

generate/bash: clean/bash $(OPENAPICLI)
	$(call generate,bash,enlighten)

generate/html: clean/html $(OPENAPICLI)
	$(call generate,html,enlighten)
	dos2unix -o ./html/enlighten/index.html

$(OPENAPICLI):
	mkdir -p ./bin
	curl -o $(OPENAPICLI) https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/bin/utils/openapi-generator-cli.sh
	chmod +x $(OPENAPICLI)
