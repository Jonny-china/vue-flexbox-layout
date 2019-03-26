<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'c-flexbox'

export default {
  name: 'Flex',
  props: {
    direction: {
      type: String,
      default: ''
    },
    wrap: {
      type: String,
      default: ''
    },
    justify: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: ''
    },
    alignContent: {
      type: String,
      default: ''
    }
  },
  computed: {
    classNames() {
      const { direction, wrap, justify, align, alignContent } = this
      return {
        [prefixCls]: true,

        [`${prefixCls}-dir-row`]: direction === 'row',
        [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
        [`${prefixCls}-dir-column`]: direction === 'column',
        [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

        [`${prefixCls}-nowrap`]: wrap === 'nowrap',
        [`${prefixCls}-wrap`]: wrap === 'wrap',
        [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

        [`${prefixCls}-justify-start`]: justify === 'start',
        [`${prefixCls}-justify-end`]: justify === 'end',
        [`${prefixCls}-justify-center`]: justify === 'center',
        [`${prefixCls}-justify-between`]: justify === 'between',
        [`${prefixCls}-justify-around`]: justify === 'around',

        [`${prefixCls}-align-start`]: align === 'start',
        [`${prefixCls}-align-center`]: align === 'center',
        [`${prefixCls}-align-end`]: align === 'end',
        [`${prefixCls}-align-baseline`]: align === 'baseline',
        [`${prefixCls}-align-stretch`]: align === 'stretch',

        [`${prefixCls}-align-content-start`]: alignContent === 'start',
        [`${prefixCls}-align-content-end`]: alignContent === 'end',
        [`${prefixCls}-align-content-center`]: alignContent === 'center',
        [`${prefixCls}-align-content-between`]: alignContent === 'between',
        [`${prefixCls}-align-content-around`]: alignContent === 'around',
        [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$flexPrefixCls: c-flexbox;

/* flexbox */
.#{$flexPrefixCls} {
  overflow: hidden;
  display: flex;
  align-items: center;

  &-dir-row {
    flex-direction: row;
  }

  &-dir-row-reverse {
    flex-direction: row-reverse;
  }

  &-dir-column {
    flex-direction: column;
  }

  &-dir-column-reverse {
    flex-direction: column-reverse;
  }

  &-nowrap {
    flex-wrap: nowrap;
  }

  &-wrap {
    flex-wrap: wrap;
  }

  &-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  &-justify-start {
    justify-content: flex-start;
  }

  &-justify-end {
    justify-content: flex-end;
  }

  &-justify-center {
    justify-content: center;
  }

  &-justify-between {
    justify-content: space-between;
  }

  &-justify-around {
    justify-content: space-around;
  }

  &-align-start {
    align-items: flex-start;
  }

  &-align-end {
    align-items: flex-end;
  }

  &-align-center {
    align-items: center;
  }

  &-align-stretch {
    align-items: stretch;
  }

  &-align-baseline {
    align-items: baseline;
  }

  &-align-content-start {
    align-content: flex-start;
  }

  &-align-content-end {
    align-content: flex-end;
  }

  &-align-content-center {
    align-content: center;
  }

  &-align-content-between {
    align-content: space-between;
  }

  &-align-content-around {
    align-content: space-around;
  }

  &-align-content-stretch {
    align-content: stretch;
  }
}
</style>
