# SACSS

> SACSS: Static Atomic CSS

SACSS is attempt to help you create **Utility First CSS** class library for your project more **fast** and **easy**.

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

## Why Utility First CSS?

> **Naming** is one of the most difficult problems in CSS bar none

Content-based **semantic** naming enables you to create artwork.

However, in a multi-person collaborative project, naming that you think is **semantic** can often be a nightmare to be around.

While **BEM** can standardize the way everyone on the team names things, however everyone still needs to name things based on their own understanding.

Among the popular CSS solutions, **Utility First CSS** solves this problem relatively effectively.

Because it already has a series of CSS class names for the UI that needs to be built, the core pain point of naming is naturally solved since there is no naming.

Translated with www.DeepL.com/Translator (free version)


### Utility First CSS

```html
<style>
/* The following CSS code has already been created in the initial phase, and only needs to be used in the development phase */
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

Ideally, we don't need to **create** any CSS Classes, we just need to **combine** (piece together multiple Classes) to complete the UI.

Of course, **Utility First CSS** solves the core pain point of naming.

It also significantly improves CSS writing **efficiency** and minimizes CSS code **bulk**.

> The more functional a Class is, the higher the reuse rate

## Why Not Tailwind CSS?

> Tailwind CSS is very good, but not always suitable.

There are many CSS solutions based on **Utility First CSS**, the most famous one is [Tailwind CSS](https://tailwindcss.com/) which is also the ! [github](https://img.shields.io/github/stars/tailwindlabs/tailwindcss.svg?style=social) has the highest number of libraries.

Tailwind CSS class library provides **rich** and **comprehensive** CSS class names, so that we can quickly implement UI by focusing on HTML.

However, because it is **big and comprehensive**, it is relatively expensive to **get started** and **remember**, and there is always a feeling of **killing a chicken with a bull**.

SACSS is focused on showing you how to create **Utility First CSS** ([naming convention](. /guides.name)).

For example, if you want to achieve the text **horizontally centered** `text-align:center;` effect.

When using Tailwind CSS, we need to search through the entire library of hundreds of Class Name classes to find the Class Name (`.text-center`) that corresponds to **horizontally centered**.

When using SACSS, your path is this: you first know that the code for **horizontally centered** is `.text-align:center;` and then you get `.tac` based on the formula for naming rules that only take **initial letters**.

That means you see the Style property and you know what the corresponding Class Name is, no need to remember it at all, and this pattern will greatly increase the **development experience**.

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

We also created the [Figma plugin] for this set of naming rules (. /intro.design), with this plugin you even you only need to **copy** and **paste** the project code from the design tool.

> It is better to give a man a fish than to teach him how to fish.

## Different

| Declarations         | SACSS     | ACSS       | Tailwind CSS      | Basscss          | Tachyons   |
| -------------------- | -------- | ----------- | ----------------- | ---------------- | ---------- |
| `margin: 12px;`      | `.m12`   | `.M(12px)`  | `.m-4`            | `.m2`            | `.ma3`     |
| `text-align: center` | `.tac`   | `.Ta(c)`    | `.text-center`    | `.center`        | `.tc`      |
| `margin: -12px`      | `.m-12`  | `.M(-12px)` | `.-m-4`           | `.mxn2`          | `.na3`     |
| `font-size: 25px`    | `.fs25`  | `.Fz(25px)` | `.text-2xl`       | `.h2`            | `.f3`      |
| `width: 50%`         | `.w50%`  | `.W(50%)`   | `.w-1/2`          | `.col-6`         | `.w-50`    |
| `line-height: 1.5`   | `.lh1.5` | `.Lh(1.5)`  | `.leading-normal` | `.line-height-4` | `.lh-copy` |
| - | - | [More](https://acss.io/) | [More](https://tailwindcss.com/) |[More](https://basscss.com/) |[More](http://tachyons.io/) |

It is clear that the naming of SACSS is more **standard** and **simple** than other types of projects.

## Inspiration

- [Tailwind CSS](https://tailwindcss.com/): the most popular **Utility First CSS** class library.
- [Atomic CSS](https://acss.io/): The core idea (Yahoo!).
- [Fower](https://fower.vercel.app/): An utility-first CSS in JS library for rapid UI development (Documentation Inspiration);
- [Emmet](https://www.emmet.io/): Naming rules inspired by Emmet, many IDEs have this rule built in;
