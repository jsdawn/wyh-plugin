import walert from './walert'

const myPugin = {
  install (Vue, options) {
    Vue.component(walert.name, walert)
  }
}

export default myPugin
