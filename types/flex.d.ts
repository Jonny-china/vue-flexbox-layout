import Vue from 'vue'

export declare class FlexComponent extends Vue {
  static install (vue: typeof Vue): void
}

export declare class Flex extends FlexComponent {
  /**
   * item的间隔
   */
  gutter: string | number

  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse'

  wrap: 'nowrap' | 'wrap' | 'wrap-reverse'

  justify: 'start' | 'end' | 'center' | 'between' | 'around'

  align: 'start' | 'center' | 'end' | 'baseline' | 'stretch'

  alignContent: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
}

export declare class FlexItem extends FlexComponent {
  flex: number | string
}

export function install (vue: typeof Vue, options: {prefixCls: string}): void
