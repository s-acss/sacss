# sacss

Static Atomic CSS.

[ACSS](http://acss.io/) / utility-first CSS / Functional CSS 的轻量级解决方案。

[![npm package][npm-badge]][npm-url] 
[![github][git-badge]][git-url] 

[npm-badge]: https://img.shields.io/npm/v/sacss.svg
[npm-url]: https://www.npmjs.org/package/sacss
[npm-downloads]: https://img.shields.io/npm/dw/sacss
[git-url]: https://github.com/ziven27/static-acss
[git-badge]: https://img.shields.io/github/stars/ziven27/static-acss.svg?style=social
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/ziven27/static-acss/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/ziven27/static-acss

## 目录结构

```bash
.
├── mixin.less   // less Mixin
├── mixin.scss   // sass Mixin
└── index.css    // core css file
```

## 安装

```bash
$ npm i sacss;
```


## CDN

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sacss">
```

## SACSS 命名规则

| Declarations         | This     | ACSS.io     | Tailwind CSS      | Blowdrycss           | Basscss          | Tachyons   |
| -------------------- | -------- | ----------- | ----------------- | -------------------- | ---------------- | ---------- |
| `margin: 12px;`      | `.m12`   | `.M(12px)`  | `.m-4`            | `.margin-12`         | `.m2`            | `.ma3`     |
| `text-align: center` | `.tac`   | `.Ta(c)`    | `.text-center`    | `.text-align-center` | `.center`        | `.tc`      |
| `margin: -12px`      | `.m-12`  | `.M(-12px)` | `.-m-4`           | `.margin-n12`        | `.mxn2`          | `.na3`     |
| `font-size: 25px`    | `.fs25`  | `.Fz(25px)` | `.text-2xl`       | `.font-size-25`      | `.h2`            | `.f3`      |
| `width: 50%`         | `.w50%`  | `.W(50%)`   | `.w-1/2`          | `.width-50p`         | `.col-6`         | `.w-50`    |
| `line-height: 1.5`   | `.lh1.5` | `.Lh(1.5)`  | `.leading-normal` | `.line-height-1_5`   | `.line-height-4` | `.lh-copy` |

1. 只取首字母 `.db{ display:block; }`;
2. 有数字直接连接 `.mb10{ margin-bottom:10px; }`;
3. 百分号用 `%` 表示 `.w100\%{ width:100%; }`;
4. 小数点用 `.` 表示 `.lh1\.2{ line-height:1.2 }`;
5. 有想要自定义的样式，用 `\:`分割 `.c\:fff{ color:#fff; }`
6. hover 样式，用 `\:`分割 `.db\:h:hover{ display:block; }`

> 第六个只是一个推荐的写法(beta)，目前代码库中并没有这个代码

## Mixin

| 名称              | 作用                               |
| ----------------- | ---------------------------------- |
| Clearfix          | 清除浮动                           |
| Ellipsis          | 单行文本省略                       |
| Ellipsis-multiple | 多行文本点点点(移动端)             |
| Margins           | 用表格的方式撑满浮动之后的剩余空间 |
| Paddings          | 用表格的方式撑满浮动之后的剩余空间 |
| ACSS              | 用表格的方式撑满浮动之后的剩余空间 |

因为不同的项目，设计规范是不一样的。所以在 `lib/index.css` 里面只提供了，`.m0{ margin:0; } .p0{ padding:0; }` 这两个通用的间距样式。

其它需要自己使用 mixin 方法 创建 `Margins, Paddings, ACSS`。

```SCSS
// scss
@import 'sacss';
@import 'sacss/mixin.scss';

@include Margins((8,16), 1px);                // .mt8, .mr8, .mb8, .ml8, .mt16, .mr16, .mb16, .ml16;
@include Paddings((8,16), 1px);               // .pt8, .pr8, .pb8, .pl8, .pt16, .pr16, .pb16, .pl16;
@include ACSS(font-size, fs, (12,16), 1px);   // .fs12, .fs16
@include ACSS(line-height, lh, (8,16), 1px);  // .lh16, .lh24
@include ACSS(font-weight, fw, (300,500));    // .fw300, .fw500

.clearfix{ @include Clearfix; }
.ell{ @include Ellipsis; }
.ells { @include Ellipsis-multiple; }
.cell{ @include Cell; }
```

```less
// less
@import 'sacss';
@import 'sacss/mixin.less';

#Margins(8, 16; 1px);                // .mt8, .mr8, .mb8, .ml8, .mt16, .mr16, .mb16, .ml16;
#Paddings(8, 16; 1px);               // .pt8, .pr8, .pb8, .pl8, .pt16, .pr16, .pb16, .pl16;
#ACSS(font-size; fs; 12, 16; 1px);   // .fs12, .fs16;
#ACSS(line-height; lh; 16, 20; 1px); // .lh16, .lh20;
#ACSS(font-weight; fw; 300, 500);    // .fw400, fw700;

.clearfix { #Clearfix; }
.ell { #Ellipsis; }
.ells { #Ellipsis-multiple; }
.cell { #Cell;}
```

```HTML
<style>
    .c\:main{ color: #333; }
    .bc\:fff{ background-color: #fff; }
    .ells._2{ -webkit-line-clamp: 2; }
    .ells._2.lh16{ max-height: 32px; }
</style>

<section class="bc:fff c:main fs12 pt16 pr16 pb16 pl16 mt16 mr16 ml16 mb16">
  <p class="ell">几乎每天我都会光临这样一家咖啡店，当我点了一杯咖啡，他们通常会在咖啡上做一些艺术工作。某一天可能是一个有想象力的树叶，接下来的一天可能是旋涡状的天鹅。这些泡沫上的图案并不会让咖啡更好喝，但是却会让我会心一笑。</p>
  <p class="ells _2 lh20">几乎每天我都会光临这样一家咖啡店，当我点了一杯咖啡，他们通常会在咖啡上做一些艺术工作。某一天可能是一个有想象力的树叶，接下来的一天可能是旋涡状的天鹅。这些泡沫上的图案并不会让咖啡更好喝，但是却会让我会心一笑。</p>
  <div class="clearfix">
    <div class="fl mr8">你好</div>
    <p class="cell">几乎每天我都会光临这样一家咖啡店，当我点了一杯咖啡，他们通常会在咖啡上做一些艺术工作。某一天可能是一个有想象力的树叶，接下来的一天可能是旋涡状的天鹅。这些泡沫上的图案并不会让咖啡更好喝，但是却会让我会心一笑。</p>
  </div>
</section>
```

## 其它约定

```css
/*!
 * 管理颜色 .c\:{*}
 */
.c\:xl { color: #111; }
.c\:l { color: #333; }
.c\:m { color: #666; }
.c\:s { color: #999; }
.c\:xs { color: #ddd; }
.c\:primary { color: blue; }
.c\:secondary { color: gray; }
.c\:danger { color: red; }
.c\:warning { color: yellow; }
.c\:success { color: green; }
.c\:info { color: cadetblue; }
.c\:light { color: #f8f9fa; }
.c\:dark { color: #343a40; }
```

> 以上内容只是约定，并未内置在代码中, 你可以定义其中任意颜色值
