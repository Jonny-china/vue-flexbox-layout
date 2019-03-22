# vue-flexbox-layout

> Vue plugin based on flexbox layout

## Installation

```bash
npm install vue-flexbo-layout
or
yarn add vue-flexbo-layout
```

## Usage

```js
import Vue from 'vue'
import VueFlexboxLayout from 'vue-flexbox-layout'

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
