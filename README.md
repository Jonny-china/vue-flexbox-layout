# vue-flexbox-layout

> flex 布局的 vue 插件

## Installation

```bash
npm install vue-flexbox-layout
//or
yarn add vue-flexbox-layout
```

## Usage

```js
import Vue from 'vue'
import VueFlexboxLayout from 'vue-flexbox-layout'
import 'vue-flexbox-layout/lib/vue-flexbox-layout.css' //2.0+将css分离为单个文件

Vue.use(VueFlexboxLayout)
```

```html
<flex>
  <flex-item></flex-item>
  <div></div>
</flex>
```

## Api

### flex

| Prop         | Value                                                         | Type   | Default   |
| ------------ | ------------------------------------------------------------- | ------ | --------- |
| direction    | `row` , `row-reverse` , `column` , `column-reverse`           | string | `row`     |
| wrap         | `nowrap` , `wrap` , `wrap-reverse`                            | string | `nowrap`  |
| justify      | `start` , `end` , `center` , `between` , `around`             | string | `start`   |
| align        | `start` , `end` , `center` , `baseline` , `stretch`           | string | `center`  |
| alignContent | `start` , `end` , `center` , `between` , `around` , `stretch` | string | `stretch` |

### flex-item

flex-item 组件默认加上了样式 flex:1, 保证所有 item 平均分宽度, flex 容器的 children 不一定是 flex-item
