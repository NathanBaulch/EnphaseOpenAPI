langs := $(notdir $(patsubst %/,%,$(wildcard ./*/)))

.PHONY: all
all: $(langs)

.PHONY: $(langs)
$(langs): %:
	$(MAKE) -C $*
