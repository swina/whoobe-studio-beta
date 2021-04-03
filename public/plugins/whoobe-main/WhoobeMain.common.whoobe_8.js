((typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] || []).push([[15],{

/***/ "0ccb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1681":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/gallery/moka.gallery.vue?vue&type=template&id=1107d540&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('moka-container',{attrs:{"level":"9","doc":_vm.block.plugin.editor}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/gallery/moka.gallery.vue?vue&type=template&id=1107d540&

// EXTERNAL MODULE: ./src/components/editor/render/moka.single.container.vue + 4 modules
var moka_single_container = __webpack_require__("78d3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/gallery/moka.gallery.vue?vue&type=script&lang=js&
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

/* harmony default export */ var moka_galleryvue_type_script_lang_js_ = ({
  name: 'MokaGalleryPlugin',
  components: {
    MokaContainer: moka_single_container["a" /* default */]
  },
  data: function data() {
    return {
      index: 0,
      timer: null
    };
  },
  props: ['plugin', 'block', 'settings'],
  computed: {
    animation: function animation() {
      var el = this.block.plugin.editor.blocks[this.index];
      el.gsap.animation ? this.$animationElement(el, '.gallery-image-' + this.index) : null;
      return el;
    }
  },
  methods: {
    slide: function slide(i) {
      if (i != this.index) {
        return 'slideout';
      }

      return 'slidein';
    }
  },
  mounted: function mounted() {
    var autoplay = false;

    if (autoplay) {
      var vm = this;

      if (block.plugins.editor.blocks.length) {
        this.timer = window.setInterval(function () {
          vm.index < vm.block.plugins.editor.blocks.length - 1 ? vm.index++ : vm.index = 0;
        }, autoplay * 1000);
      }
    } else {
      this.index = 0;
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.clearInterval();
    this.timer = null;
  }
});
// CONCATENATED MODULE: ./src/components/plugins/gallery/moka.gallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var gallery_moka_galleryvue_type_script_lang_js_ = (moka_galleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/plugins/gallery/moka.gallery.vue?vue&type=style&index=0&lang=css&
var moka_galleryvue_type_style_index_0_lang_css_ = __webpack_require__("d8c0");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/plugins/gallery/moka.gallery.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  gallery_moka_galleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moka_gallery = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "d8c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moka_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0ccb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moka_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moka_gallery_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);