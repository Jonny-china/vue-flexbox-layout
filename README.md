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
// or
import 'vue-flexbox-layout/lib/vue-flexbox-layout.scss' //3.0+


Vue.use(VueFlexboxLayout)
```

```vue
<Flex justify="center" :gutter="10">
  <FlexItem>固定</FlexItem>
  <FlexItem :flex="1">撑开</FlexItem>
</Flex>
```

## Api

### flex

| Prop         | Value                                                         | Type   | Default   |
| :----------- | :------------------------------------------------------------ | :----- | --------- |
| direction    | `row` , `row-reverse` , `column` , `column-reverse`           | string | `row`     |
| wrap         | `nowrap` , `wrap` , `wrap-reverse`                            | string | `nowrap`  |
| justify      | `start` , `end` , `center` , `between` , `around`             | string | `start`   |
| align        | `start` , `end` , `center` , `baseline` , `stretch`           | string | `center`  |
| alignContent | `start` , `end` , `center` , `between` , `around` , `stretch` | string | `stretch` |
| gutter       | `0`, 可以是带单位的长度值（px\|em\|rem\|vw\|%）                         | string \| number | `0`       |

### flex-item
| Prop         | Value                                                         | Default   |
| ------------ | ------------------------------------------------------------- | --------- |
| flex         | `string` `number` `flex 属性` | `0 1 auto` |


