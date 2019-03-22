<template>
  <div class="c-flexbox-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlexItem'
}
</script>

<style lang="scss" scoped>
$flexPrefixCls: c-flexbox;

.#{$flexPrefixCls}-item {
  box-sizing: border-box;
  flex: 1;
}
</style>
