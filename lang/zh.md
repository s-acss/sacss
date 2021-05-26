# SACSS

> SACSS: Static Atomic CSS

SACSS 目标在于帮助你更**快**更**简单**的创建属于自己项目的 **Utility First CSS** 类库。

[![npm package][npm-badge]][npm-url]
[![jsdelivr][jsdelivr-badge]][jsdelivr-url]
[![github][git-badge]][git-url]

[npm-badge]: https://img.shields.io/npm/v/sacss.svg
[npm-url]: https://www.npmjs.org/package/sacss
[npm-downloads]: https://img.shields.io/npm/dw/sacss
[git-url]: https://github.com/s-acss/sacss
[git-badge]: https://img.shields.io/github/stars/s-acss/sacss.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/sacss/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/sacss

[English](../README.md) | 简体中文

## Why Utility First CSS?

> **命名** 是 CSS 中最难的问题没有之一

基于内容的**语义化**命名能够让你创建艺术品。

然而在一个多人协作的项目，自认为**语义化**的命名往往会成为被人的噩梦。

**BEM** 虽能规范团队中大家的命名方式，然而每个人还是需要基于自己的理解去命名。

在流行的 CSS 解决方案中，**Utility First CSS** 能够比较有效地解决这个问题。

因为它已经预制好需要构建的 UI 的一系列 CSS 类名，既然没有命名那么自然也就解决了命名这个核心痛点。


### Utility First CSS

```html
<style>
/* 以下 CSS 代码初始阶段已经创建，开发阶段只需要使用 */
.fs16{ font-size: 16px; }
.lh24{ line-height: 24px; }
.fw400{ font-weight: 400; }
.fw900{ font-weight: 900; }
</style>

<h1 class="fs16 lh24 fw900">Hello world</h1>
<p class="fs16 lh24 fw400">Utility First CSS</p>
```

### Semantic CSS

```html
<style>
.h1{
  font-size:16px;
  line-height:24px;
  font-weight:900;
}
.paragraph{
  font-size:16px;
  line-height:24px;
  font-weight:400;
}
</style>
<h1 class="h1">Hello world</h1>
<p class="paragraph">Semantic CSS</p>
```

理想状态下（实现方案相同），我们不需要**创建**任何 CSS Class。只需要通过**组合**（拼凑多个 Class ）的形式既可以完成 UI。

当然 **Utility First CSS** 在解决命名这一核心痛点的同时。

还能够明显的提升 CSS 编写**效率**，以及最大限度的控制 CSS 代码**膨胀率**。

> 功能越单一的 Class 复用率越高

## Why Not Tailwind CSS?

> Tailwind CSS 非常优秀，但不一定适合。

基于 **Utility First CSS** 的 CSS 方案有很多，最有名的是 [Tailwind CSS](https://tailwindcss.com/) 它也是目前所有 CSS 解决方案中 ![github](https://img.shields.io/github/stars/tailwindlabs/tailwindcss.svg?style=social) 数最高的类库。

Tailwind CSS 类库提供了**丰富**且**全面**的 CSS 类名，方便我们专注在 HTML 中就可以快速的实现 UI。

可正因为**大而全**，以至于**上手**和**记忆**成本都相对较高，总有一种**杀鸡用牛刀**的感觉。

而 SACSS 则是侧重在告诉你创建 **Utility First CSS** 的方法（[命名规则](./guides.name)）。

比如想要实现文本**水平居中对齐** `text-align:center;` 这个效果。

在使用 Tailwind CSS 时我们需要在整个上百的 Class Name 类库中，搜寻与 **水平居中对齐** 对应的 Class Name 是什么（`.text-center`）。

而在使用 SACSS 时，你的思考路径是：你先知道 **水平居中对齐** 的代码是 `text-align:center;` 然后基于只取**首字母**的命名规则公式，你就能得到了 `.tac`。

也就是说你看到 Style 属性，你就知道与之对应的 Class Name 是什么，完全不用记忆，并且这个模式会大大的增加**开发体验**。

```html
<!-- Tailwind CSS -->
<style>
.text-center{ text-align: center; }
</style>
<h1 class="text-center">hello world</h1>

<!-- SACSS -->
<style>
.tac{ text-align: center; }
</style>
<h1 class="tac">hello world</h1>
```

我们还为这套命名规则创建了 [Figma 插件](./intro.design)，使用这个插件你甚至你只需要从设计工具中**拷贝**和**粘贴**项目代码。

> 授人以鱼不如授人以渔

## 命名对比

| Declarations         | SACSS     | ACSS       | Tailwind CSS      | Basscss          | Tachyons   |
| -------------------- | -------- | ----------- | ----------------- | ---------------- | ---------- |
| `margin: 12px;`      | `.m12`   | `.M(12px)`  | `.m-4`            | `.m2`            | `.ma3`     |
| `text-align: center` | `.tac`   | `.Ta(c)`    | `.text-center`    | `.center`        | `.tc`      |
| `margin: -12px`      | `.m-12`  | `.M(-12px)` | `.-m-4`           | `.mxn2`          | `.na3`     |
| `font-size: 25px`    | `.fs25`  | `.Fz(25px)` | `.text-2xl`       | `.h2`            | `.f3`      |
| `width: 50%`         | `.w50%`  | `.W(50%)`   | `.w-1/2`          | `.col-6`         | `.w-50`    |
| `line-height: 1.5`   | `.lh1.5` | `.Lh(1.5)`  | `.leading-normal` | `.line-height-4` | `.lh-copy` |
| - | - | [了解更多](https://acss.io/) | [了解更多](https://tailwindcss.com/) |[了解更多](https://basscss.com/) |[了解更多](http://tachyons.io/) |

可以很明显的看到，同其它类型项目相比，SACSS 的命名更加的**规范**和**简单**。

## 灵感

- [Tailwind CSS](https://tailwindcss.com/)：最流行的 **Utility First CSS** 类库；
- [Atomic CSS](https://acss.io/): 核心理念（雅虎）；
- [Fower](https://fower.vercel.app/)： An utility-first CSS in JS library for rapid UI development (文档灵感);
- [Emmet](https://www.emmet.io/): 命名规则灵感来自 Emmet，很多 IDE 内置这个规则;
