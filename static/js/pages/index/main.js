global.webpackJsonp([3],{

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(93);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(96);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5eca2e54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5eca2e54_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5eca2e54", Component.options)
  } else {
    hotAPI.reload("data-v-5eca2e54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      motto: 'Hello World',
      tabs: ['关注', '推荐', '榜单'],
      activeIndex: 1,
      userInfo: {}
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },

    tabClick: function tabClick(key) {
      var that = this;
      that.activeIndex = key;
    }
    /*clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }*/
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "tabs"
  }, [_c('ul', _vm._l((_vm.tabs), function(value, key) {
    return _c('li', {
      key: _vm.index,
      class: _vm.activeIndex == key ? 'active' : '',
      attrs: {
        "eventid": '0-' + key
      },
      on: {
        "click": function($event) {
          _vm.tabClick(key)
        }
      }
    }, [_vm._v(_vm._s(value))])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "quest_item"
  }, [_c('div', {
    staticClass: "wrap"
  }, [_c('p', {
    staticClass: "header"
  }, [_vm._v("xj赞同了该答案")]), _vm._v(" "), _c('p', {
    staticClass: "content"
  }, [_vm._v("如何评价刘昊然出演的广告?")]), _vm._v(" "), _c('p', {
    staticClass: "main"
  }, [_vm._v("\n        94赞同-3评论-3关注问题\n      ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "quest_item"
  }, [_c('div', {
    staticClass: "wrap"
  }, [_c('p', {
    staticClass: "header"
  }, [_vm._v("xj赞同了该答案")]), _vm._v(" "), _c('p', {
    staticClass: "content"
  }, [_vm._v("如何评价刘昊然出演的广告?")]), _vm._v(" "), _c('p', {
    staticClass: "main"
  }, [_vm._v("\n        94赞同-3评论-3关注问题\n      ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "quest_item"
  }, [_c('div', {
    staticClass: "wrap"
  }, [_c('p', {
    staticClass: "header"
  }, [_vm._v("xj赞同了该答案")]), _vm._v(" "), _c('p', {
    staticClass: "content"
  }, [_vm._v("如何评价刘昊然出演的广告?")]), _vm._v(" "), _c('p', {
    staticClass: "main"
  }, [_vm._v("\n        94赞同-3评论-3关注问题\n      ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "quest_item"
  }, [_c('div', {
    staticClass: "wrap"
  }, [_c('p', {
    staticClass: "header"
  }, [_vm._v("xj赞同了该答案")]), _vm._v(" "), _c('p', {
    staticClass: "content"
  }, [_vm._v("如何评价刘昊然出演的广告?")]), _vm._v(" "), _c('p', {
    staticClass: "main"
  }, [_vm._v("\n        94赞同-3评论-3关注问题\n      ")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5eca2e54", esExports)
  }
}

/***/ })

},[92]);
//# sourceMappingURL=main.js.map