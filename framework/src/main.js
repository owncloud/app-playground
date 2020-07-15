import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

function init (plugin) {
  // Call install function from within the plugin
  plugin.default.install(Vue)

  new Vue({
    render: h => h(App),
  }).$mount('#app')
}

(async function () {
  try {
    requirejs(['./js/plugin.umd.js'], init)
  } catch (err) {
    throw new Error(err)
  }
})()