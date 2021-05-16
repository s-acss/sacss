
# 使用

[![npm package][npm-badge]][npm-url]
[![jsdelivr][jsdelivr-badge]][jsdelivr-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/sacss.svg
[npm-url]: https://www.npmjs.org/package/sacss
[npm-downloads]: https://img.shields.io/npm/dw/sacss
[git-url]: https://github.com/ziven27/SACSS
[git-badge]: https://img.shields.io/github/stars/ziven27/SACSS.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/sacss/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/sacss

## 安装

```bash
$ npm i sacss;
```

## 目录结构

```bash
.
├── mixin.less   // less Mixin
├── mixin.scss   // sass Mixin
└── index.css    // core css package
```

## 核心代码

1. `sacss/index.css`: 所有项目基本相同的核心代码（只推荐定制，命名前缀）;
2. `sacss/mixin.(less|scss)`: LESS 和 SACSS 的辅助 Mixin 帮助定制属于自己项目的 **Utility First CSS** 代码;

