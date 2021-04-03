((typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] || []).push([[6],{

/***/ "03fd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "88f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/cloudinary/cloudinary.widget.vue?vue&type=template&id=72980244&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"modal z-highest",attrs:{"id":"loadCloudinary"}},[_c('textarea',{staticClass:"opacity-100 h-0 w-0",attrs:{"id":"myUpload"},on:{"input":_vm.emitImage}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/cloudinary/cloudinary.widget.vue?vue&type=template&id=72980244&

// EXTERNAL MODULE: ./src/components/editor/render/moka.editor.container.vue + 24 modules
var moka_editor_container = __webpack_require__("b195");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/cloudinary/cloudinary.widget.vue?vue&type=script&lang=js&
//
//
//
//
//
//

var widget, cloudinary_widgetvue_type_script_lang_js_image;

function injectScript(params) {
  console.log(params);
  var pluginScript = document.createElement("script");
  pluginScript.setAttribute("type", "text/javascript");
  pluginScript.setAttribute("charset", "utf-8");
  pluginScript.setAttribute("data-cfasync", "false");
  pluginScript.setAttribute("src", "https://widget.cloudinary.com/v2.0/global/all.js");
  var target = document.querySelector('#loadCloudinary');
  target.appendChild(pluginScript);
  var imageUploaded = document.querySelector('#myUpload');

  pluginScript.onload = function () {
    widget = cloudinary.createUploadWidget({
      cloudName: "".concat(params.cloudName),
      uploadPreset: "".concat(params.uploadPreset)
    }, function (error, result) {
      if (!error && result && result.event === "success") {
        imageUploaded.focus();
        imageUploaded.value = JSON.stringify(result.info);
        imageUploaded.blur(); //image = result.info
      }
    });
    widget.open();
  };
}

/* harmony default export */ var cloudinary_widgetvue_type_script_lang_js_ = ({
  components: {
    mokaEditorContainer: moka_editor_container["a" /* default */]
  },
  name: 'MokaCloudinaryWidget',
  data: function data() {
    return {
      cloudName: 'moodgiver',
      uploadedImage: ''
    };
  },
  props: ['config'],
  computed: {
    now: function now() {
      return new Date();
    },
    uploaded: function uploaded() {
      console.log(cloudinary_widgetvue_type_script_lang_js_image);
      this.$action('cloudinary_image');
      this.$store.dispatch('cloudinary_image', cloudinary_widgetvue_type_script_lang_js_image);
      cloudinary_widgetvue_type_script_lang_js_image ? this.$emit('cloudinary', cloudinary_widgetvue_type_script_lang_js_image) : null;
      cloudinary_widgetvue_type_script_lang_js_image = null;
      return cloudinary_widgetvue_type_script_lang_js_image;
    }
  },
  methods: {
    emitImage: function emitImage(event) {
      /*
      console.log ( event )
      event.target.value ? 
          console.log ( JSON.parse ( event.target.value ) ) : null
      image = null
      */
      return null; //document.querySelector('#myUpload').value = ''
    },
    openWidget: function openWidget() {
      widget.open();
    }
  },
  mounted: function mounted() {
    var _this = this;

    document.querySelector('#myUpload').addEventListener('blur', function (el) {
      if (el.target.value) {
        var _image = JSON.parse(el.target.value);

        var newImage = {
          name: _image.original_filename + '.' + _image.format,
          size: _image.bytes / 1000,
          width: _image.width,
          height: _image.height,
          url: _image.url,
          ext: _image.format,
          previewUrl: _image.thumbnail_url,
          mime: 'image/' + _image.format,
          formats: null
        };

        _this.$api.service('media').create(newImage).then(function (result) {
          console.log(result);
          el.target.value = '';

          _this.$action();

          _this.$store.dispatch('add_media', result);
        }); //this.$store.dispatch('cloudinary_image' , JSON.parse ( el.target.value ))
        //this.$emit ( 'cloudinary' , JSON.parse(el.target.value) )
        //el.target.value 

      }
    }); //this.cloudName = this.$attrs.el.plugin.config.cloudName || 'moodgiver'

    injectScript(this.config);
  }
});
// CONCATENATED MODULE: ./src/components/plugins/cloudinary/cloudinary.widget.vue?vue&type=script&lang=js&
 /* harmony default export */ var cloudinary_cloudinary_widgetvue_type_script_lang_js_ = (cloudinary_widgetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/plugins/cloudinary/cloudinary.widget.vue?vue&type=style&index=0&lang=css&
var cloudinary_widgetvue_type_style_index_0_lang_css_ = __webpack_require__("c6a8");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/plugins/cloudinary/cloudinary.widget.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cloudinary_cloudinary_widgetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var cloudinary_widget = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c6a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cloudinary_widget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("03fd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cloudinary_widget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cloudinary_widget_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);