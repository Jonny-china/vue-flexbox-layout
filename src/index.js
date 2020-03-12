import Flex from './components/Flex.vue'
import FlexItem from './components/FlexItem.vue'

const components = [Flex, FlexItem]

const install = (Vue, opts={}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$FLEX = opts.prefixCls || null
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {Flex, FlexItem}

export default { install, Flex, FlexItem }
