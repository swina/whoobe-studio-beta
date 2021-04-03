((typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] || []).push([[5],{

/***/ "cdd4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/snipcart/snipcart.vue?vue&type=template&id=54b6dfe1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.cart)?_c('div',{attrs:{"id":"snipcart","data-config-modal-style":"side","data-api-key":_vm.apiKey,"hidden":""}}):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/snipcart/snipcart.vue?vue&type=template&id=54b6dfe1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/snipcart/snipcart.vue?vue&type=script&lang=js&
//
//
//
//
function injectScript() {
  var target = document.querySelector('body');
  var snipcartCSS = document.createElement('link');
  snipcartCSS.setAttribute('rel', 'stylesheet');
  snipcartCSS.setAttribute('href', 'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css');
  var snipcartScript = document.createElement("script");
  snipcartScript.setAttribute("type", "application/javascript");
  snipcartScript.setAttribute("charset", "utf-8");
  snipcartScript.setAttribute("data-cfasync", "false");
  snipcartScript.setAttribute("src", "https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js");
  target.appendChild(snipcartCSS);
  target.appendChild(snipcartScript);
}

/* harmony default export */ var snipcartvue_type_script_lang_js_ = ({
  name: 'MokaSnipcart',
  data: function data() {
    return {
      apiKey: '',
      cart: false
    };
  },
  computed: {
    now: function now() {
      return new Date();
    }
  },
  beforeMount: function beforeMount() {
    var target = document.querySelector('body');
    var snipcartCSS = document.createElement('link');
    snipcartCSS.setAttribute('rel', 'stylesheet');
    snipcartCSS.setAttribute('href', 'https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.css');
    var snipcartScript = document.createElement("script");
    snipcartScript.setAttribute("type", "application/javascript");
    snipcartScript.setAttribute("charset", "utf-8");
    snipcartScript.setAttribute("data-cfasync", "false");
    snipcartScript.setAttribute("src", "https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js");
    target.appendChild(snipcartCSS);
    target.appendChild(snipcartScript);
    console.log('is loaded ???? ', target);
    this.cart = true;
  },
  mounted: function mounted() {
    this.apiKey = this.$attrs.settings['apikey']; //this.$attrs.plugin.config.apiKey
    //injectScript()
  }
});
// CONCATENATED MODULE: ./src/components/plugins/snipcart/snipcart.vue?vue&type=script&lang=js&
 /* harmony default export */ var snipcart_snipcartvue_type_script_lang_js_ = (snipcartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/plugins/snipcart/snipcart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  snipcart_snipcartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var snipcart = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);