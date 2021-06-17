OPENAPICLI := ./bin/openapi-generator-cli

export OPENAPI_GENERATOR_VERSION = 5.1.1
export JAVA_OPTS = -Dlog.level=warn

all: validate $(shell grep -o "^generate/[a-z-]\+" ./Makefile | tr '\n' ' ')

validate:
	$(OPENAPICLI) validate -i ./enlighten.yaml --recommend

define clean
	sed -e 's|^|./$(1)/enlighten/|' ./$(1)/enlighten/.openapi-generator/FILES | xargs -r rm
	rm -r ./$(1)/enlighten/.openapi-generator | true
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
	$(OPENAPICLI) generate -i ./enlighten.yaml -g $(1) -o ./$(1)/enlighten --package-name $(2) --git-user-id NathanBaulch --git-repo-id EnphaseOpenAPI --http-user-agent EnphaseOpenAPI/$(1)
	dos2unix -o ./$(1)/enlighten/.openapi-generator/FILES
endef

generate/go: clean/go $(OPENAPICLI)
	$(call generate,go,enlighten)

generate/csharp-netcore: clean/csharp-netcore $(OPENAPICLI)
	$(call generate,csharp-netcore,EnphaseOpenAPI.Enlighten)

generate/php: clean/php $(OPENAPICLI)
	$(call generate,php,enlighten)

generate/python: clean/python $(OPENAPICLI)
	$(call generate,python,enlighten)

generate/javascript: clean/javascript $(OPENAPICLI)
	$(call generate,javascript,enlighten)

generate/bash: clean/bash $(OPENAPICLI)
	$(call generate,bash,enlighten)

generate/html: clean/html $(OPENAPICLI)
	$(call generate,html,enlighten)
	dos2unix -o ./html/enlighten/index.html

$(OPENAPICLI):
	mkdir -p ./bin
	curl -o $(OPENAPICLI) https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/bin/utils/openapi-generator-cli.sh
	chmod +x $(OPENAPICLI)
