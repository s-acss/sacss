# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
yarn start -- --locale en
```

## Deploy

在根目录 `sacss` 运行 `sh ./deploy-website.sh`

## Translate 

```console
yarn write-translations
yarn write-translations -- --locale en
```

```console
mkdir -p i18n/en/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/en/docusaurus-plugin-content-docs/current
```
