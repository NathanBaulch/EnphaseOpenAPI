OPENAPICLI := ./.bin/openapi-generator-cli

langs := $(notdir $(patsubst %/,%,$(wildcard ./*/)))
specs := $(basename $(notdir $(wildcard ./*.yaml)))

.PHONY: all
all: validate $(langs)

.PHONY: validate
validate: $(addprefix validate/, $(specs))

validate/%: $(OPENAPICLI)
	$(OPENAPICLI) validate -i ./$*.yaml --recommend

.PHONY: $(langs)
$(langs): %:
	$(MAKE) -C $*

$(OPENAPICLI):
	mkdir -p $(dir $(OPENAPICLI))
	curl -o $(OPENAPICLI) https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/bin/utils/openapi-generator-cli.sh
	chmod +x $(OPENAPICLI)
