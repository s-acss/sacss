# 对比


### tailwindcss
[tailwindcss](https://tailwindcss.com/) 提供了一套有类似 `flex`, `pt-4`, `text-center` 这样命名的 CSS 的类库。
 
### Atomic css 
[Atomic css](https://acss.io/) 提供了一套严格 class 的命名规则。基于 [Atomizer](https://github.com/acss-io/atomizer) 这个构建工具，你在 HTML 中每写一个符合这套命名规则的 class，CSS 文件中会自动添加对应的 CSS 样式。


### SACSS
[SACSS](https://ziven27.github.io/sacss) 提供了一套 class 的命名规则，和一些能覆盖大部分样式的 CSS 类库（同样基于这套命名规则）。同时还提供了一些常用复杂样式的 SASS 和 LESS 的 mixin，你可以使用自己的命名规则去使用这些 mixin。



## 命名规则

| Declarations         | SACSS     | ACSS       | Tailwind CSS      | Blowdrycss           | Basscss          | Tachyons   |
| -------------------- | -------- | ----------- | ----------------- | -------------------- | ---------------- | ---------- |
| `margin: 12px;`      | `.m12`   | `.M(12px)`  | `.m-4`            | `.margin-12`         | `.m2`            | `.ma3`     |
| `text-align: center` | `.tac`   | `.Ta(c)`    | `.text-center`    | `.text-align-center` | `.center`        | `.tc`      |
| `margin: -12px`      | `.m-12`  | `.M(-12px)` | `.-m-4`           | `.margin-n12`        | `.mxn2`          | `.na3`     |
| `font-size: 25px`    | `.fs25`  | `.Fz(25px)` | `.text-2xl`       | `.font-size-25`      | `.h2`            | `.f3`      |
| `width: 50%`         | `.w50%`  | `.W(50%)`   | `.w-1/2`          | `.width-50p`         | `.col-6`         | `.w-50`    |
| `line-height: 1.5`   | `.lh1.5` | `.Lh(1.5)`  | `.leading-normal` | `.line-height-1_5`   | `.line-height-4` | `.lh-copy` |


1. 只取首字母: `.db{ display:block; }`;
2. 有数字直接连接: `.mb10{ margin-bottom:10px; }`;
3. 符号直接用 `\` 转义:  `.w100\%{ width:100%; } .lh1\.2{ line-height:1.2 }`;
4. 其它，或自定义样式，用 `_`分割 `.c_fff{ color:#fff; }`
5. hover 样式，用 `\:h`分割 `.fs12{ font-size:12px; } .fs12\:h:hover{ font-size:12px; }`
