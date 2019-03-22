import Flex from './components/Flex.vue'
import FlexItem from './components/FlexItem.vue'

const components = [Flex, FlexItem]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install, Flex, FlexItem }
