<template>
  <div class="c-flexbox-item" :style="[gutter, {flex: styleFlex}]">
    <slot></slot>
  </div>
</template>

<script>
function parseFlex(flex) {
  if (typeof flex === "number") {
    return `${flex} ${flex} auto`;
  }

  if (/^\d+(\.\d+)?(px|em|rem|vw|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }

  return flex;
}
export default {
  name: "FlexItem",
  props: {
    flex: [Number, String]
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      console.log(1, parent);
      while (parent && parent.$options.name !== "Flex") {
        parent = parent.$parent;
      }
      console.log(2, parent);

      if (!(parent && parent.gutter)) {
        console.log(111);
        return {};
      } else if (typeof parent.gutter === "number") {
        console.log(222);
        return parent.gutter > 0
          ? {
              paddingLeft: `${this.gutter / 2}px`,
              paddingRight: `${this.gutter / 2}px`
            }
          : {};
      } else if (typeof parent.gutter === "string") {
        console.log(333);
        const [num, unit] = parent.gutter
          .replace(/(^\d+(\.\d+)?)(px|em|rem|vw|%)?/gi, "$1,$3")
          .split(",");
        const gutter = parseInt(num || "0", 10);
        console.log(333, 'gutter', gutter, [num, unit]);
        return gutter > 0
          ? {
              paddingLeft: `${gutter / 2}${unit || 'px'}`,
              paddingRight: `${gutter / 2}${unit || 'px'}`
            }
          : {};
      }
      console.log(444);
      return {};
    },
    styleFlex() {
      return this.flex ? parseFlex(this.flex) : undefined;
    }
  }
};
</script>
