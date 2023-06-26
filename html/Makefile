OPENAPICLI := ../bin/openapi-generator-cli

export OPENAPI_GENERATOR_VERSION = 6.6.0
export JAVA_OPTS = -Dlog.level=warn --add-opens java.base/java.util=ALL-UNNAMED --add-opens java.base/java.lang=ALL-UNNAMED

author := NathanBaulch
proj := EnphaseOpenAPI
lang := $(notdir $(patsubst %/,%,$(dir $(abspath $(lastword $(MAKEFILE_LIST))))))
specs := $(basename $(notdir $(wildcard ../*.yaml)))

.SILENT:
.ONESHELL:

.PHONY: all
all: $(specs)

.PHONY: $(specs)
$(specs): %: $(OPENAPICLI)
	$(call clean,$*)
	$(call generate,$*)

.PHONY: clean
clean: $(addprefix clean/, $(specs))

clean/%:
	$(call clean,$*)

define clean
	echo Removing previously generated $(1) files
	sed -e 's|^|./$(1)/|' ./$(1)/.openapi-generator/FILES | xargs rm -rf
	rm -rf ./$(1)/.openapi-generator | true
	find ./$(1) -type d -empty -delete | true
endef

.PHONY: generate
generate: $(addprefix generate/, $(specs))

generate/%: $(OPENAPICLI)
	$(call generate,$*)

define generate
	$(OPENAPICLI) generate -i ../$(1).yaml -g $(lang) -o ./$(1) --package-name $(1) --git-user-id $(author) --git-repo-id $(proj) --http-user-agent $(proj)/$(lang)
	dos2unix -o ./$(1)/.openapi-generator/FILES ./$(1)/index.html
endef

$(OPENAPICLI):
	mkdir -p $(dir $(OPENAPICLI))
	curl -o $(OPENAPICLI) https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/bin/utils/openapi-generator-cli.sh
	chmod +x $(OPENAPICLI)
