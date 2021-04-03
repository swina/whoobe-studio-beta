((typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] || []).push([[9],{

/***/ "829f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/store/ecwid.vue?vue&type=template&id=5c0f147c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{key:_vm.$randomID(),ref:_vm.$randomID(),attrs:{"id":"loadShop","date":_vm.now}},[_c('div',{attrs:{"id":'my-store-' + _vm.shopID}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/store/ecwid.vue?vue&type=template&id=5c0f147c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/store/ecwid.vue?vue&type=script&lang=js&


//
//
//
//
//
//
function injectEcwidScript(storeId) {
  var ecwidScript = document.createElement("script");
  ecwidScript.setAttribute("type", "text/javascript");
  ecwidScript.setAttribute("charset", "utf-8");
  ecwidScript.setAttribute("data-cfasync", "false");
  ecwidScript.setAttribute("src", "https://app.ecwid.com/script.js?".concat(storeId, "&data_platform=code&data_date=").concat(new Date()));
  ecwidScript.onload = injectEcwidProductBrowser(storeId);
  var target = document.querySelector('#loadShop');
  target.appendChild(ecwidScript);
}

function injectEcwidProductBrowser(storeId) {
  return function () {
    console.log('loading shop ...');
    var ecwidBrowserScript = document.createElement("script");
    ecwidBrowserScript.setAttribute("type", "text/javascript");
    ecwidBrowserScript.setAttribute("charset", "utf-8");
    ecwidBrowserScript.text = "xProductBrowser(\"categoriesPerRow=3\",\"views=grid(20,3) list(60) table(60)\",\"categoryView=grid\",\"searchView=list\",\"id=my-store-".concat(storeId, "\");");
    var target = document.querySelector('#loadShop');
    target.appendChild(ecwidBrowserScript);
  };
}

function removeScript() {
  var target = document.querySelector('#loadShop');
  console.log(target);
}

/* harmony default export */ var ecwidvue_type_script_lang_js_ = ({
  name: 'MokaEcwidshop',
  data: function data() {
    return {
      shopID: ''
    };
  },
  computed: {
    now: function now() {
      return new Date();
    }
  },
  mounted: function mounted() {
    this.shopID = this.$attrs.config.storeId;
    injectEcwidScript(this.shopID);
  },
  beforeDestroy: function beforeDestroy() {
    removeScript();
  }
});
// CONCATENATED MODULE: ./src/components/plugins/store/ecwid.vue?vue&type=script&lang=js&
 /* harmony default export */ var store_ecwidvue_type_script_lang_js_ = (ecwidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/plugins/store/ecwid.vue?vue&type=style&index=0&lang=css&
var ecwidvue_type_style_index_0_lang_css_ = __webpack_require__("8e4c");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/plugins/store/ecwid.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  store_ecwidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ecwid = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "8e4c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ecwid_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b9f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ecwid_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ecwid_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b9f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);