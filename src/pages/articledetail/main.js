import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()


export default {
  config: {
    "usingComponents": {
         "i-card": "../../../static/iview/action-sheet/index",
         "i-button": "../../../static/iview/button/index",
         "i-input": "../../../static/iview/input/index",
         "i-panel": "../../../static/iview/panel/index",
       }
  }
}
