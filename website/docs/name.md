# 命名

如果你觉得默认的 CSS 样式会造成全局污染，可以通过 `_SACSS` 这个方法去为每一条样式添加统一前缀

> 为了更好的开发体验, 我门还是推荐使用不带前缀的 `index.css` 文件.

```less
@import 'sacss/mixin.less';

@prefix:'acss_';
#_SACSS(@prefix); // 所有的默认的样式都会添加统一的前缀（其它Mixin需要手动添加前缀）

// .acss_fs12, .acss_fs16;
#SACSS(font-size; escape('@{prefix}fs'); 12, 16; 1px); // 其它Mixin需要手动添加前缀 

// ...其它代码
```

```sass
@import 'sacss/mixin.scss';

$prefix:'acss_';
@inclued _SACSS($prefix); // 所有的默认的样式都会添加统一的前缀

// .acss_fs12, .acss_fs16
@inclued SACSS(font-size; #{$prefix}fs; 12, 16; 1px); // 其它Mixin需要手动添加前缀

// ...其它代码
```

## 推荐的命名规则

只有 `bc_fff`, `bc_000`, `c_000`,`c_fff` 这四个颜色相关样式内置在 `sacss/index.css` 文件中。

其它的样式只是推荐约定，并未内置在 `sacss/index.css` 文件中。

```css
.bc_fff { background-color: #fff;}
.bc_000 { background-color: #000; }
.c_000 { color: #000; }
.c_fff { color: #fff; }
```

## 颜色

```css
/*!
 *  rules  '.c_{custome name}{ color: value; }}'
 */
.c_xl { color: #111; }
.c_l { color: #333; }
.c_m { color: #666; }
.c_s { color: #999; }
.c_xs { color: #ddd; }
.c_primary { color: blue; }
.c_secondary { color: gray; }
.c_danger { color: red; }
.c_warning { color: yellow; }
.c_success { color: green; }
.c_info { color: cadetblue; }
.c_light { color: #f8f9fa; }
.c_dark { color: #343a40; }
```

