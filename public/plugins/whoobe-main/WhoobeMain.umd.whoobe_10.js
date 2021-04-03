((typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] || []).push([[1],{

/***/ "5035":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/gallery/moka.images.gallery.editor.vue?vue&type=template&id=6c1f4676&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:_vm.$attrs.plugin.css.css + ' ' + _vm.$attrs.plugin.css.container},[_vm._v(" Images Gallery Editor "),_c('button',{staticClass:"z-2xtop",on:{"click":_vm.addImage}},[_vm._v("Add image")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/gallery/moka.images.gallery.editor.vue?vue&type=template&id=6c1f4676&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/gallery/moka.images.gallery.editor.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//

/* harmony default export */ var moka_images_gallery_editorvue_type_script_lang_js_ = ({
  name: 'MokaGalleryEditor',
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['moka'])), {}, {
    tag: function tag() {
      return this.$attrs.plugin.element;
    }
  }),
  methods: {
    addImage: function addImage() {
      var imgObject = this.moka.elements.moka.media.filter(function (el) {
        return el.element === 'img';
      })[0];
      this.$attrs.plugin.gallery.push(imgObject);
      return;
    }
  }
});
// CONCATENATED MODULE: ./src/components/plugins/gallery/moka.images.gallery.editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var gallery_moka_images_gallery_editorvue_type_script_lang_js_ = (moka_images_gallery_editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/plugins/gallery/moka.images.gallery.editor.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  gallery_moka_images_gallery_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moka_images_gallery_editor = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);