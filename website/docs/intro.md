# 关于

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

SACSS 目标在于帮助你更**快**更**简单**的创建属于自己项目的 **Utility First CSS** 类库。

## Why Utility First CSS? 

**Utility First CSS** 能够明显的提升 CSS 编写效率，以及最大限度的控制 CSS 代码膨胀率。

我们也经常会在 CSS **最佳实践** 的文章中看到这个概念。 

基于这个理论的 CSS 方案有很多，最有名的是 [Tailwind CSS](https://tailwindcss.com/) 它是目前所有 CSS 解决方案中 ![github](https://img.shields.io/github/stars/tailwindlabs/tailwindcss.svg?style=social) 数最高的类库。

## Why not Tailwind CSS? 

Tailwind CSS 类库提供了非常全的 CSS 类名方便我们专注在 HTML 中就可以快速的实现 UI。 

可正因为大而全，以至于上手和记忆成本都相对较高。

## Try SACSS

> SACSS: Static Atomic CSS

与 Tailwind CSS 不同的是，使用 SACSS 你不用记住成百上千的 CSS 类名，取而代之的是屈指可数的几条**命名规则**。

比如想要实现文本居中对齐 `text-align:center;` 这个效果。

在 Tailwind CSS 中我们必须要记住与之对应的 Class Name 是 `.text-center` 才能实现样式。

而在 SACSS 中 `命名规则公式('text-align:center;') => .tac`，而这个公式基础规则是只取首字母。

也就是说你看到 style 属性，你就知道与之对应的 class 名是什么，完全不用记忆，这个模式会大大的增加**开发体验**。

并且基于这个**命名规则公式**，团队内的小伙伴都能自由的维护只属于你们自己项目的 **Utility First CSS** 类库。

## 设计工具

[Figma token to code](https://www.figma.com/community/plugin/759651077059504375/Token--%3E-Code) 这个插件能自动帮你从 Figma 设计稿中，获取 SACSS 代码。

进一步提升你的开发体验。

## 例子

![img](/img/thumb.png)

```less
// less 文件
@import 'sacss/index.css';
@import 'sacss/mixin.less';

// 自定义样式（基于命名规则）
#Margins(8, 16; 1px);                // .mt8, .mr8, .mb8, .ml8, .mt16, .mr16, .mb16, .ml16;
#Paddings(16, 24; 1px);              // .pt16, .pr16, .pb16, .pl16, .pt24, .pr24, .pb24, .pl24;
#SACSS(font-size; fs; 16, 18; 1px);   // .fs16, .fs18;
#SACSS(line-height; lh; 24, 28; 1px); // .lh24, .lh28;
#SACSS(font-weight; fw; 500, 700);    // .fw500, fw700;

// 自定义颜色（基于命名规则）
.c_m{ color: #000; }
.c_s{ color: #71717a; }
.c_info{ color:#0891b2; }
```

![img](/img/tailwindcss.jpg)

这个示例图片是仿照 [tailwindcss](https://tailwindcss.com/) 官网做的。



