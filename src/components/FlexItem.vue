<template>
  <div class="c-flexbox-item" :style="[gutter, styleFlex]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FlexItem",
  props: {
    flex: [Number, String]
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      if (parent && parent.$options.name !== "Flex") return {};

      if (!(parent && parent.gutter)) {
        return {};
      } else if (typeof parent.gutter === "number") {
        return parent.gutter > 0
          ? {
              paddingLeft: `${parent.gutter / 2}px`,
              paddingRight: `${parent.gutter / 2}px`
            }
          : {};
      } else if (typeof parent.gutter === "string") {
        const [num, unit] = parent.gutter
          .replace(/(^\d+(\.\d+)?)(px|em|rem|vw|%)?/gi, "$1,$3")
          .split(",");
        const gutter = parseInt(num || "0", 10);
        return gutter > 0
          ? {
              paddingLeft: `${gutter / 2}${unit || "px"}`,
              paddingRight: `${gutter / 2}${unit || "px"}`
            }
          : {};
      }
      return {};
    },
    styleFlex() {
      const flex = this.flex;

      if (!flex) return {};

      if (typeof flex === "number" || flex === "1") {
        const parent = this.$parent;
        if (
          parent &&
          parent.$options.name === "Flex" &&
          (parent.direction === "column" ||
            parent.direction === "column-reverse")
        ) {
          return {
            flex: `${flex} ${flex} auto`
          };
        }
        return {
          flex: `${flex} ${flex} auto`,
          width: 0
        };
      }

      if (/^\d+(\.\d+)?(px|em|rem|vw|%)$/.test(flex)) {
        return { flex: `0 0 ${flex}` };
      }

      return { flex };
    }
  }
};
</script>
