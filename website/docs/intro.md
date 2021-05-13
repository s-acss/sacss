
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

静态的 Atomic CSS，是一套具有严格命名规则的 CSS 解决方案，目标是希望让你只需要在 HTML 中就可以快速实现设计原型，而不需要在 HTML 和 CSS 之间来回切换。

这和 [tailwindcss](https://tailwindcss.com/) 要解决的问题是一样的，但不同的是以 [Atomic css](https://acss.io/) 的方式。




## 最佳实践

SACSS 并不能覆盖所有的场景，最佳实践是对接设计物料和 CSS 样式布局.

[Figma token to code](https://www.figma.com/community/plugin/759651077059504375/Token--%3E-Code) 这个插件能自动帮你从 Figma 设计稿中，获取 SACSS 代码。


## 例子

![img](/img/thumb.png)

```less
// less
@import 'sacss';
@import 'sacss/mixin.less';

#Margins(8, 16; 1px);                // .mt8, .mr8, .mb8, .ml8, .mt16, .mr16, .mb16, .ml16;
#Paddings(16, 24; 1px);              // .pt16, .pr16, .pb16, .pl16, .pt24, .pr24, .pb24, .pl24;
#SACSS(font-size; fs; 16, 18; 1px);   // .fs16, .fs18;
#SACSS(line-height; lh; 24, 28; 1px); // .lh24, .lh28;
#SACSS(font-weight; fw; 500, 700);    // .fw500, fw700;
```

```HTML
<style>
    .c_m{ color: #000; }
    .c_s{ color: #71717a; }
    .c_info{ color:#0891b2; }
</style>

<figure class="bc_fff tac pt24 pb24 pl24 pr24">
    <img class="w128 h128 br100% db mla mra mb24" src="./avatar.jpg" alt="avatar" width="128" height="128" />
    <blockquote class="mb16 fs18 fw700 lh28 c_m">
      <p class="mb8">“Tailwind CSS is the only framework that I've seen scale on large teams.</p>
      <p>It’s easy to customize, adapts to any design, and the build size is tiny.”</p>
    </blockquote>
    <figcaption class="fs16 lh24">
      <em class="db c_info fsn fw500">Sarah Dayan</em>
      <strong class="db c_s fw500">Staff Engineer, Algolia</strong>
    </figcaption>
</figure>
```


![img](/img/tailwindcss.jpg)

这个示例图片是仿照 [tailwindcss](https://tailwindcss.com/) 官网做的，可以很明显的看到，实现相同的效果我们用了更少的代码。
