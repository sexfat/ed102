# Sass環境安裝
不要做重複的工作，重複的工作讓機器做
<br>
<br>
## Install node.js

Install  [ Node.js ](https://nodejs.org/en/)

#### If you use Node.js, you can also install Sass using npm 


**1. Windows user**  
     Open your  "終端機"  CMD

```
npm install -g sass
```

  輸入 ` sass --version`  看是否有灌成功  
  如果有成功 會 return  `Sass`  版本

  
**2. Mac user**

Open the Mac's  Terminal.app / 終端機

```  
sudo npm install -g sass
```

  輸入 ` sass --version`  看是否有灌成功  
  如果有成功 會 return  `Sass`  版本


# sass 與 scss 差異

- 副檔名不同，寫法都不同，兩者不能兼容
- scss 可以兼容css的寫法
<br> 


# sass 資源
[Sass online 工具](http://www.sassmeister.com/)
[Sass 英文官網](http://www.sassmeister.com/)
[Sass 中文官網](https://sass.bootcss.com/)
<br>
<br> 

# VsCode  必安裝套件
[Live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
<br> 
<br> 

### Vscode setting
```json
"liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/css/"
        }
    ],
```
<br> 
<br> 



# Variables 變數


**變數型態**

```scss
// 變數型態
$font_size-h1 : 50px; //數值
$font_color: rgb(255, 81, 0); // 顏色
$margin : 10px 20px 30px 40px; //  list
$null : null; //空值
$bg-color : (
  'blue' : #0059ff,
  'yellow' : #ffd900,
  'green' : #73ff00
); // map 數值
```

-----
1. 數值 (Number)：12、100px (可能有或沒有單位)
2. 字串 (String)：Microsoft JhengHei (可能有或沒有引號)
3. 顏色 (Color)：blue、#4cb5fc、hsl(204, 97%, 64%)
4. 列表 (List)：0 0.5rem 1rem #0000ff、Helvetica, Arial, sans-serif
5. 地圖 (Maps)：(primary: blue, danger: red)
6. 布林 (Boolean)：true、false
7. 空值 (Null)：null
8. 函式參考 (Function references)：可參考 官方文檔 說明
-----





**字串 / 變數**

如果你想在一个字串是使用一个變數，而你又不想讓這個變數直接變成了字串，那就得使用到一個被稱為變數，簡單來说，就是使用#{}来包裹這個變數。
> 只要在 url路徑 / class 名稱  / 屬性名稱 都需要使用 `字串轉變數 `

```
$i : 1 ;

.wrapper_#{$i} {

font-size: $i*10px;

}
```

#### 延伸思考

- 變數的命名方式
- 變數的設計

#### _變數命名方式 naming rule_

良好的css架構

- 可預測
- 可重複利用
- 好維護
- 延展性高

> **會根據架構來做命名**
>關鍵字 : SMACSS / OOCSS / BEM

<br> <br> 
# Nesting 巢狀

#### 讓 `css` 可讀性更高

```css
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

```



#### 偽元素寫法

```scss
//a 標籤
a {
   color : blue;
   &:hover {
        color : #000083;
   }
}

// before / after

div {




}


```



<br> <br> 
# Partials / Import 

##### 檔名前 +  下底線 _ 是為了讓 scss 不轉譯過去

#### _files.scss

```css
@import '檔案名稱'  //可以省略掉副檔名
```

<br> <br> 
# mixin 函式


- #### 不帶值

```css
@mixin margins() {   
    margin: 20px;
}

@mixin marginAuto(){
    .marginAuto {
       margin: 0 auto; 
    }
}

@mixin paddings() {
    padding: 20px;
}

```
- #### 帶值 / 多值

```css
@mixin rect($width , $height, $bgc) {
    width: $width;
    height: $height;
    background-color: $bgc;
}
.box{
  @include rect(100px, 30px , #fff)
} 
```


- #### 空值 Null

```css
@mixin borderline($width, $borderColor:null) {
    width: $width;
    height: $width * 0.5;
    border: 1px solid $borderColor;
}

.borderline {
    @include borderline(100px);
}
```


- #### 預設值
```scss
@mixin rect($width:400px, $height:300px, $bgc:#fff) {
    width: $width;
    height: $height;
    background-color: $bgc;
    border: 1px solid $bgc;
}
```

<br> <br> 
# 擴展 @extend


- #### Html
```html
<div class="error error--serious">
  Oh no! You've been hacked!
</div>
```
<br>

- #### Scss

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error;
    border-width: 3px;
  }
}
```


- #### btn
```scss
.btn-default {
    width: 100px;
    height: 30px;

  &--danger {
    color: #f20;
    @extend .btn-default
  }
}
```


- #### 占位符號

```scss
// %佔位符號
 %box_200 {
    width: 200px;
    border: 1px solid #000;
  }  

 .box_danger {
   @extend %box_200 ;
   background-color: rgb(49, 228, 225);
 }
```


<br><br>

# 運算子

- #### 運算

```scss
//操作符號
.operator {
    width: 100px + 100;
    height: 100px - 10;
    padding: 100px - 10px * 5;
    font: (10px / 2 ); //要()
    color: #010203 + #040506; 
}
```

- #### 數值運算函式
```scss
.operator1 {
    width: floor(100px / 3);//無條件捨去
    height: round(100px / 8);//四捨五入
    padding: ceil(100px / 7);//無條件進位
}
```
<br>

- #### nth 函式
  List 的初始值即為 1，並不像一般語言中的 Array 初始值為 0

```scss
$sizes: 10px 20px 10px 20px;

.pt-5 {
  padding-top: nth($sizes, 1);
}

```

1. append($list, $value)：在 List 副本最後位置新增項目並返回
2. join($list1, $list2)：將 List 副本進行合併並返回
3. length($list)：計算 List 長度並返回
列出幾個比較常用到的函式，其它函式可在至官方的 [Built-In Modules](https://sass-lang.com/documentation/modules/list) 進行查看
<br>

- #### Map 函式

使用`map-get` 取值

```scss
$theme-colors: (
  primary: blue,
  danger: red,
);

.bg-primary {
  background-color: map-get($theme-colors, primary);
}
```
<br>


- #### 顏色函式


 ```scss
 $primary: #0084ff;

.btn-primary {
  color: #fff;
  background-color: $primary;
  border-color: $primary;

  &:hover {
    background-color: darken($primary, 10%);
    border-color: darken($primary, 10%);
  }

  &:active {
    background-color: lighten($primary, 10%);
    border: lighten($primary, 10%);
  }
}
 ```

1. darken($color, $amount)：暗化指定顏色並返回
2. lighten($color, $amount)：亮化指定顏色並返回
3. invert($color)：反轉指定顏色並返回



<br>



- #### 判斷式 

只有 `>= , <=  , == `  
並沒有 `===`

```scss
$num : 110;

@if $num <=100 {
    .num {
        width: 100px;
    }
}

@else if $num==80 {
    .num {
        width: 80px;
    }
}

@else {
    .num {
        width: 0px;
    }
}
```

# 迴圈

```css
@for $var from 1 to 3 {
  .mt-#{$var} {
    margin-top: $var * 10px;
  }
}
```

start：迴圈的起始值，這裡為 1
end：迴圈的結束值，這裡為 3
to：處理方式為 start < end，不包含迴圈的結束值
through：處理方式為 start <= end，包含迴圈的結束值

# Grid 

```css
//  grid-col
@mixin grids($key, $num) {
    @for $i from 1 through $num {
        .col-#{$key}-#{$i} {
            width: floor(($i / $num) * 100%);
            @content
        }
    }
};
```

# 字體大小使用模組

- #### 使用方式

`@include titleH(16px);`

```css
@mixin titleH($font-size) {
    h1 {
        font-size: round($font-size * 4.5);
    }

    h2 {
        font-size: round($font-size * 3);
    }

    h3 {
        font-size: round($font-size * 2.8);
    }


    h4 {
        font-size: round($font-size * 1.8);
    }

    h5 {
        font-size: round($font-size * 1.1);
    }
}
```


# @each

@each 指令的格式是 $var in <list> 
$var 可以是任何變量名，比如 $length 或者 $name，而 <list> 是一連串的值，也就是值列表。

- ####  使用 @each map 數值型態，要使用each 去撈裡面值


```css
  $titles : (
    h1 : 40px,
    h2 : 35px,
    h3: 28px,
    h4: 20px,
    h5: 16px); // map數值型態
```

```css
///=======  h1 - h5 font-size
@mixin  title_module($titles){
  @each $title, $value in $titles {
    #{$title} {
        font-size: $value;
    }
   }
 };

 @include title_module($titles);
```



- ####  使用 @each map 數值型態，要使用each 去撈裡顏色值


```scss
//變數
$btnColor :(primary: #428bca, // #337ab7
    success: #5cb85c,
    info: #5bc0de,
    warning: #f0ad4e,
    danger: #d9534f);

```


```scss
@mixin btnColor($btnColor) {
    @each $key,
    $color_val in $btnColor {
        .btn-#{$key} {
            background-color: $color_val;
        }
    }
}
```


- #### 使用each 寫圖片路徑


- 使用時機
```scss
@include img_bg(jpg, b1 b2 b3) {
    display: inline;
    border: 1px solid #333;
}

```

```scss
.bg-image {
    width: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}


@mixin img_bg($files, $list) {
    @each $img in $list {
        .#{$img}-img {
            @if $files == jpg {
                background-image:url(./img/#{$img}.jpg);
            }
            @else if $files == png {
                background-image:url(./img/#{$img}.png);
            }
        }
        @extend .bg-image;//繼承圖片屬性
        @content; //放擴增屬性
    }
}
```


- #### @each 進階

多組數值使用  in @each $var1, $var2,

```scss
@each $animal, $color, $cursor in (puma, black, default),
                                  (sea-slug, blue, pointer),
                                  (egret, white, move) {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
    border: 2px solid $color;
    cursor: $cursor;
  }
}
```


























