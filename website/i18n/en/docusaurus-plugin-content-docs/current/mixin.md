
# Mixin

SASS and LESS got the same name mixin.

1. `Clearfix`: clear float;
2. `Ellipsis`: Single line text overflow with ellipsis.
3. `Ellipsis-multiple`: Multiple line text overflow with ellipsis.
4. `Cell`: Fill the left space
5. `Margins`: Create `margin-top` `margin-right` `margin-bottom` `margin-left` at same time;
6: `Paddings`: Create `padding-top` `padding-right` `padding-bottom` `padding-left` at same time;
7: `SACSS`: create SACSS in short hand;
8: `_SACSS`: mixin of all css style in `index.css`, you can use this to add prefix for each rules;

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
