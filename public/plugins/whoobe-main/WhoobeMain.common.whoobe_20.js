((typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] || []).push([[7],{

/***/ "8197":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/store/custom.vue?vue&type=template&id=1f6c57b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative"},[_vm._m(0),_c('h3',{attrs:{"id":"storeTop"}},[_vm._v("Store")]),_c('p',[_vm._v("Prodotti "+_vm._s(_vm.total))]),_c('div',{staticClass:"w-full text-center cursor-pointer"},[(_vm.start > 0)?_c('i',{staticClass:"mr-4 bi-chevron-left",on:{"click":function($event){_vm.start=_vm.start-_vm.limit}}}):_vm._e(),_c('small',[_vm._v(_vm._s(_vm.start+1)+"-"+_vm._s(_vm.start+_vm.limit)+" di "+_vm._s(_vm.total))]),((_vm.start+_vm.limit)<=_vm.total)?_c('i',{staticClass:"ml-4 bi-chevron-right",on:{"click":function($event){_vm.start=_vm.start+_vm.limit}}}):_vm._e()]),_c('div',{staticClass:"flex flex-row flex-wrap items-center justify-center"},[_vm._l((_vm.products),function(product,index){return [_c('div',{staticClass:"flex flex-col w-64 h-64 m-8 shadow-md rounded-md relative border-4 border-gray-200"},[_c('img',{attrs:{"src":product.image_uri}}),_c('div',{staticClass:"p-4"},[_c('div',{staticClass:"text-sm"},[_vm._v(_vm._s(product.name))]),_c('div',[_vm._v("$ "+_vm._s(product.price)+"."),_c('small',[_vm._v("00")])])]),_c('div',{staticClass:"absolute items-center justify-center bg-gray-100 top-0 left-0 right-0 bottom-0 opacity-0 rounded-md bg-opacity-75 hover:opacity-100 animateme flex flex-row justify-between px-12"},[_c('i',{staticClass:"material-icons snipcart-add-item moka-icon-circle text-2xl",attrs:{"data-item-id":product.code,"data-item-price":product.price,"data-item-url":'/product/' + product.code,"data-item-description":product.name,"data-item-image":product.image_uri,"data-item-name":product.name,"title":"add to cart"}},[_vm._v("shopping_cart")]),_c('i',{staticClass:"material-icons moka-icon-circle text-2xl",attrs:{"title":"See more"},on:{"click":function($event){_vm.current=product}}},[_vm._v("search")]),(!product.price)?_c('button',{on:{"click":function($event){return _vm.setPrice(product.id,index)}}},[_vm._v("Set price")]):_vm._e()])])]})],2),_c('div',{staticClass:"w-full text-center cursor-pointer"},[(_vm.start > 0)?_c('i',{staticClass:"mr-4 bi-chevron-left",on:{"click":function($event){_vm.start=_vm.start-_vm.limit,_vm.scrollTop()}}}):_vm._e(),_c('small',[_vm._v(_vm._s(_vm.start+1)+"-"+_vm._s(_vm.start+_vm.limit)+" di "+_vm._s(_vm.total))]),((_vm.start+_vm.limit)<=_vm.total)?_c('i',{staticClass:"ml-4 bi-chevron-right",on:{"click":function($event){_vm.start=_vm.start+_vm.limit,_vm.scrollTop()}}}):_vm._e()]),_c('transition',{attrs:{"name":"animate-slideout"}},[(_vm.current && _vm.current.name)?_c('moka-modal',{attrs:{"size":"lg","buttons":"none"},on:{"close":function($event){_vm.current=!null}}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.current.name))]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('div',{staticClass:"grid grid-cols-3"},[_c('img',{staticClass:"col-span-2",attrs:{"src":_vm.current.image_uri}}),_c('div',{staticClass:"p-4"},[_c('div',{staticClass:"text-2xl"},[_vm._v(_vm._s(_vm.current.name))]),_c('div',{staticClass:"text-sm text-gray-400"},[_vm._v(_vm._s(_vm.current.code))]),_c('div',{staticClass:"text-2xl my-4"},[_vm._v("$ "+_vm._s(_vm.current.price)+"."),_c('small',[_vm._v("00")])]),_c('button',{staticClass:"snipcart-add-item px-2 py-2 success text-2xl",attrs:{"data-item-id":_vm.current.code,"data-item-price":_vm.current.price,"data-item-url":'/product/' + _vm.current.code,"data-item-description":_vm.current.name,"data-item-image":_vm.current.image_uri,"data-item-name":_vm.current.name,"title":"add to cart"}},[_vm._v("Acquista")])])])])]):_vm._e()],1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"absolute right-0 top-0 text-xs flex flex-row items-center snipcart-checkout"},[_c('span',{staticClass:"snipcart-items-count"}),_c('i',{staticClass:"material-icons"},[_vm._v("shopping_bag")]),_c('span',{staticClass:"snipcart-total-price"})])}]


// CONCATENATED MODULE: ./src/components/plugins/store/custom.vue?vue&type=template&id=1f6c57b0&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/store/custom.vue?vue&type=script&lang=js&


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
/* harmony default export */ var customvue_type_script_lang_js_ = ({
  name: 'NuxpressoProducts',
  data: function data() {
    return {
      start: 0,
      total: 0,
      current: null
    };
  },
  computed: {
    limit: function limit() {
      return parseInt(this.$attrs.el.plugin.config.rows);
    }
  },
  watch: {
    start: function start() {
      this.scrollTop();
    },
    current: function current(v) {
      if (v) {
        window.sessionStorage.setItem('moka-product-view', JSON.stringify(v));
      }
    }
  },
  methods: {
    randomImage: function randomImage(name) {
      return 'https://source.unsplash.com/600x400?fashion&' + name;
    },
    scrollTop: function scrollTop() {
      // element which needs to be scrolled to
      var element = document.querySelector("#storeTop"); // scroll to element

      element.scrollIntoView();
    },
    setPrice: function setPrice(id, i) {
      var _this = this;

      var price = {
        price: Number(Math.round(Math.random() * (80 - 40 + 1) + 40), 2) + '.00'
      };
      this.$http.put('products/' + id, price).then(function (res) {
        _this.products[i].price = price;
        console.log(res);
      });
    },
    deleteThis: function deleteThis(id, i) {
      var _this2 = this;

      this.$http.delete('products/' + id).then(function (res) {
        _this2.products.splice(i, 1);

        console.log(res);
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$http.get('products/count').then(function (res) {
      _this3.total = res.data;
    });
    this.$http.get('products').then(function (res) {
      console.log(res);
    });
  }
});
// CONCATENATED MODULE: ./src/components/plugins/store/custom.vue?vue&type=script&lang=js&
 /* harmony default export */ var store_customvue_type_script_lang_js_ = (customvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/plugins/store/custom.vue?vue&type=style&index=0&lang=css&
var customvue_type_style_index_0_lang_css_ = __webpack_require__("8aa9");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/plugins/store/custom.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  store_customvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var custom = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "8aa9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d4d4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d4d4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);