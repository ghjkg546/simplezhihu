global.webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(104);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c12ed31a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(107);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c12ed31a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c12ed31a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\product\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c12ed31a", Component.options)
  } else {
    hotAPI.reload("data-v-c12ed31a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


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
            userInfo: {},
            productlist: []
        };
    },

    methods: {
        clickHandle1: function clickHandle1(msg, ev) {
            var _this = this;

            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var that, res;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                that = _this;

                                console.log('fun');
                                _context.next = 4;
                                return _this.$post('product', { name: 'aa' });

                            case 4:
                                res = _context.sent;

                                that.productlist = res;
                                console.log(that.productlist);

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        }
    },
    created: function created() {
        // 调用应用实例的方法获取全局数据

    }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "quest_item"
  }, [_c('div', {
    staticClass: "wrap"
  }, [_c('p', {
    staticClass: "header"
  }, [_vm._v("如何看待日本清理垃圾的新闻？")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('p', {
    staticClass: "author"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": "",
      "alt": ""
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "info"
  }, [_c('li', [_vm._v("培根")]), _vm._v(" "), _c('li', {
    staticClass: "short"
  }, [_vm._v("lying in the sun/不迎合/不作恶")])], 1), _vm._v(" "), _c('button', {
    staticClass: "fr"
  }, [_vm._v("关注")])], 1), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _c('p', {
    staticClass: "para"
  }, [_vm._v("\n        2018年4月，女子张某到秦州区人民法院起诉，希望能结束自己荒唐的婚姻生活。她表示，自己的丈夫何某原是自己二姐的男朋友，两人订婚后确定了婚期，但其二姐却在婚礼前无故逃婚。看到没过门的媳妇儿不见了踪影，何某几次上门吵闹，为了平息家庭矛盾，给何某一个交代，当时年仅16岁的张某同意了自己替其二姐与何某结婚。\n      ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "vote_btn"
  }, [_vm._v("\n      赞同12\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "right_area"
  }, [_c('ul', [_c('li', [_vm._v("感谢")]), _vm._v(" "), _c('li', [_vm._v("收藏")]), _vm._v(" "), _c('li', [_vm._v("评论")])], 1)], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "bg"
  }, [_c('span', [_vm._v("写回答")])]), _vm._v(" "), _c('div', {
    staticClass: "fr"
  }, [_c('span', {
    staticClass: "fr"
  }, [_vm._v("查看全部813个回答>")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c12ed31a", esExports)
  }
}

/***/ })

},[103]);
//# sourceMappingURL=main.js.map