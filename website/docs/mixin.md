
# Mixin

SASS 和 LESS 拥有完全相同的 mixin.

1. `Clearfix`: 清除 float 的浮动;
2. `Ellipsis`: 单行文本超出显示`...`；
3. `Ellipsis-multiple`: 多行文本超出显示 `...`;
4. `Cell`: 在浮动布局中撑满剩余空间;
5. `Margins`: 同时创建四个方向的外间距 `margin-top` `margin-right` `margin-bottom` `margin-left`;
6: `Paddings`: 同时创建四个方向的内间距 `padding-top` `padding-right` `padding-bottom` `padding-left`;
7: `SACSS`: 辅助你快速创建 SACSS;
8: `_SACSS`: 执行这个方法会输出全部的 `index.css` 文件中的代码，目的是方便你为所有样式添加统一前缀（默认不加）;

![img](/img/demo.png)

``` less
@import 'sacss/mixin.less';

// custom units
// #SACSS(font-size; fs; 12, 16; 1/16 * 1rem); // .fs12{ fontsize: 12 * 1 /16 *1rem; } .fs16{ fontsize: 16 * 1 /16 *1rem; }
#SACSS(font-size; fs; 12, 16; 1px);        // .fs12, .fs16;

#SACSS(line-height; lh; 16, 20, 24; 1px);  // .lh16, .lh20;

#Margins(8, 16, 24; 1px);                  // .mt8, .mr8, .mb8, .ml8, .mt16, .mr16, .mb16, .ml16;
#Paddings(8, 16, 24; 1px);                 // .pt8, .pr8, .pb8, .pl8, .pt16, .pr16, .pb16, .pl16;

.clearfix{ #Clearfix;  }
.ellipsis{ #Ellipsis;  }
.cell{ #Cell; }
.ellipsis-mul{ #Ellipsis-multiple;  }
.ellipsis-mul._2row{ -webkit-line-clamp: 2; }
```

``` html
<div class="fs12 lh16 ellipsis">
    Life was like a box of chocolates. You never know what you're going to get.
</div>
<div class="fs12 lh16 ellipsis-mul _2row">
    Life was like a box of chocolates. You never know what you're going to get.
</div>
<div class="clearfix">
    <div class="fl mr16">float-left</div>
    <div class="cell">Life was like a box of chocolates. You never know what you're going to get.</div>
<div>
```
