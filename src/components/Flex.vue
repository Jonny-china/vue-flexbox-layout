<template>
  <div :class="classNames" :style="getGutter">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Flex",
  props: {
    gutter: {
      type: [String, Number],
      default: ""
    },
    direction: {
      type: String,
      default: ""
    },
    wrap: {
      type: String,
      default: ""
    },
    justify: {
      type: String,
      default: ""
    },
    align: {
      type: String,
      default: ""
    },
    alignContent: {
      type: String,
      default: ""
    }
  },
  computed: {
    getGutter() {
      if (!this.gutter) {
        return {};
      } else if (typeof this.gutter === "number") {
        return this.gutter > 0
          ? {
              marginLeft: `${this.gutter / -2}px`,
              marginRight: `${this.gutter / -2}px`
            }
          : {};
      } else if (typeof this.gutter === "string") {
        const [num, unit] = this.gutter
          .replace(/(^\d+(\.\d+)?)(\w+)?/gi, "$1,$3")
          .split(",");
        const gutter = parseInt(num || "0", 10);
        return gutter > 0
          ? {
              marginLeft: `${gutter / -2}${unit || 'px'}`,
              marginRight: `${gutter / -2}${unit || 'px'}`
            }
          : {};
      }
      return {};
    },

    classNames() {
      const prefixCls = (this.$FLEX && this.$FLEX.prefixCls) || "c-flexbox";
      const { direction, wrap, justify, align, alignContent } = this;
      return {
        [prefixCls]: true,

        [`${prefixCls}-dir-row`]: direction === "row",
        [`${prefixCls}-dir-row-reverse`]: direction === "row-reverse",
        [`${prefixCls}-dir-column`]: direction === "column",
        [`${prefixCls}-dir-column-reverse`]: direction === "column-reverse",

        [`${prefixCls}-nowrap`]: wrap === "nowrap",
        [`${prefixCls}-wrap`]: wrap === "wrap",
        [`${prefixCls}-wrap-reverse`]: wrap === "wrap-reverse",

        [`${prefixCls}-justify-start`]: justify === "start",
        [`${prefixCls}-justify-end`]: justify === "end",
        [`${prefixCls}-justify-center`]: justify === "center",
        [`${prefixCls}-justify-between`]: justify === "between",
        [`${prefixCls}-justify-around`]: justify === "around",

        [`${prefixCls}-align-start`]: align === "start",
        [`${prefixCls}-align-center`]: align === "center",
        [`${prefixCls}-align-end`]: align === "end",
        [`${prefixCls}-align-baseline`]: align === "baseline",
        [`${prefixCls}-align-stretch`]: align === "stretch",

        [`${prefixCls}-align-content-start`]: alignContent === "start",
        [`${prefixCls}-align-content-end`]: alignContent === "end",
        [`${prefixCls}-align-content-center`]: alignContent === "center",
        [`${prefixCls}-align-content-between`]: alignContent === "between",
        [`${prefixCls}-align-content-around`]: alignContent === "around",
        [`${prefixCls}-align-content-stretch`]: alignContent === "stretch"
      };
    }
  }
};
</script>
