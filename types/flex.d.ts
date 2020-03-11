import Vue from 'vue'
import { Component as Tsc } from 'vue-tsx-support';

declare class FlexComponent<P> extends Tsc<P> {
  static install (vue: typeof Vue): void
}

export interface FlexProps {
    /**
   * item的间隔
   */
  gutter?: string | number

  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'

  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'

  justify?: 'start' | 'end' | 'center' | 'between' | 'around'

  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'

  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
}

export declare class Flex extends FlexComponent<FlexProps> {
  /**
   * item的间隔
   */
  gutter?: string | number

  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'

  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'

  justify?: 'start' | 'end' | 'center' | 'between' | 'around'

  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch'

  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
}

export interface FlexItemProps {
  flex?: number | string
}

export declare class FlexItem extends FlexComponent<FlexItemProps> {
  flex?: number | string
}

export function install (vue: typeof Vue, options: {prefixCls: string}): void
