# Comparison

### tailwindcss
[tailwindcss](https://tailwindcss.com/) give you a CSS package with classes like `flex`, `pt-4`, `text-center`.
 
### Atomic css 
[Atomic css](https://acss.io/) give you a set of naming rules to write class. Base on a builder [Atomizer](https://github.com/acss-io/atomizer), the CSS file is created automatically.


### SACSS
[SACSS](https://ziven27.github.io/sacss) give you a CSS package for quick start. A set of naming rules (easier Atomic CSS ) to extend the package. SASS and LESS mixin provide aliases for most properties that can name in your own way.


## Name

| Declarations         | SACSS     | ACSS       | Tailwind CSS      | Blowdrycss           | Basscss          | Tachyons   |
| -------------------- | -------- | ----------- | ----------------- | -------------------- | ---------------- | ---------- |
| `margin: 12px;`      | `.m12`   | `.M(12px)`  | `.m-4`            | `.margin-12`         | `.m2`            | `.ma3`     |
| `text-align: center` | `.tac`   | `.Ta(c)`    | `.text-center`    | `.text-align-center` | `.center`        | `.tc`      |
| `margin: -12px`      | `.m-12`  | `.M(-12px)` | `.-m-4`           | `.margin-n12`        | `.mxn2`          | `.na3`     |
| `font-size: 25px`    | `.fs25`  | `.Fz(25px)` | `.text-2xl`       | `.font-size-25`      | `.h2`            | `.f3`      |
| `width: 50%`         | `.w50%`  | `.W(50%)`   | `.w-1/2`          | `.width-50p`         | `.col-6`         | `.w-50`    |
| `line-height: 1.5`   | `.lh1.5` | `.Lh(1.5)`  | `.leading-normal` | `.line-height-1_5`   | `.line-height-4` | `.lh-copy` |


1. Just take the first letter: `.db{ display:block; }`;
2. Direct link number: `.mb10{ margin-bottom:10px; }`;
3. Symbol use it self with `\` : `.w100\%{ width:100%; } .lh1\.2{ line-height:1.2 }`;
4. custom values split with `_` : `.c_fff{ color:#fff; }`
5. hover split with  `\:h`, `.fs12{ font-size:12px; } .fs12\:h:hover{ font-size:12px; }`
