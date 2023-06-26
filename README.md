# Unofficial Enphase OpenAPI specification and clients

## The Enlighten Systems API

The Enlighten Systems API is a JSON-based API that provides access to performance data for a PV system. By using the Enlighten Systems API, you agree to the Enphase Energy API License Agreement.

Please note that the Enlighten Systems API does not provide performance data at a panel or microinverter level.

### Provided clients

- [Bash](bash/enlighten/README.md)
- [C#](csharp-netcore/enlighten/README.md)
- [Go](go/enlighten/README.md)
- [Javascript](javascript/enlighten/README.md)
- [PHP](php/enlighten/README.md)
- [Python](python/enlighten/README.md)

These API clients were generated by the [OpenAPI Generator](https://openapi-generator.tech) project version 6.6.0.

### Additional clients

Clients in other OpenAPI Generator supported languages can be created as follows:

```shell
LANG=java
make ./bin/openapi-generator-cli
./bin/openapi-generator-cli generate \
    -i ./enlighten.yaml \
    -g $LANG \
    -o ./$LANG/enlighten \
    --package-name enlighten \
    --http-user-agent EnphaseOpenAPI/$LANG
```
