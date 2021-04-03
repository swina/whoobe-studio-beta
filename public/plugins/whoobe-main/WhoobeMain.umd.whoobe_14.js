((typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeMain"] || []).push([[3],{

/***/ "dec2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/plugins.configuration.vue?vue&type=template&id=47e088d6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.current)?_c('div',[_vm._l((Object.keys(_vm.datastore.schema.plugins)),function(field,index){return [(_vm.current.hasOwnProperty(field))?_c('details',[_c('summary',{staticClass:"bg-gray-200 p-1 mt-1 text-lime-600 text-lg outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold",on:{"click":function($event){_vm.summary=field}}},[_vm._v(_vm._s(field))]),(_vm.summary.includes(field))?_c('div',[_vm._l((Object.keys(_vm.current[field]).sort()),function(f){return [(_vm.current[field].hasOwnProperty(f) && typeof _vm.current[field][f] === 'object')?_c('div',{staticClass:"p-2 bg-gray-300"},[_c('details',[_c('summary',{staticClass:"outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold",on:{"click":function($event){_vm.summary=field+f}}},[_vm._v(_vm._s(f))]),(_vm.summary===(field+f))?_c('div',[_vm._l((Object.keys(_vm.current[field][f])),function(ff){return [(_vm.current[field][f].hasOwnProperty(ff))?_c('div',{key:field+f+ff},[_c('label',[_vm._v(_vm._s(ff))]),(typeof _vm.current[field][f][ff]==='string' && ff != 'config')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f][ff]),expression:"current[field][f][ff]"}],staticClass:"w-full",attrs:{"type":"text"},domProps:{"value":(_vm.current[field][f][ff])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.current[field][f], ff, $event.target.value)}}}):_vm._e(),(typeof _vm.current[field][f][ff]==='number' && ff != 'config')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f][ff]),expression:"current[field][f][ff]"}],staticClass:"w-full",attrs:{"type":"number"},domProps:{"value":(_vm.current[field][f][ff])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.current[field][f], ff, $event.target.value)}}}):_vm._e(),(typeof _vm.current[field][f][ff]==='boolean')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f][ff]),expression:"current[field][f][ff]"}],staticClass:"float-left",attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.current[field][f][ff])?_vm._i(_vm.current[field][f][ff],null)>-1:(_vm.current[field][f][ff])},on:{"change":function($event){var $$a=_vm.current[field][f][ff],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.current[field][f], ff, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.current[field][f], ff, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.current[field][f], ff, $$c)}}}}):_vm._e()]):_vm._e()]}),_vm._m(0,true)],2):_vm._e()])]):_c('div',{staticClass:"p-2"},[_c('label',{staticClass:"capitalize"},[_vm._v(_vm._s(f))]),(typeof _vm.current[field][f]==='string' && f != 'config')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f]),expression:"current[field][f]"}],staticClass:"w-full",attrs:{"type":"text"},domProps:{"value":(_vm.current[field][f])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.current[field], f, $event.target.value)}}}):_vm._e(),(typeof _vm.current[field][f]==='boolean')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f]),expression:"current[field][f]"}],staticClass:"float-left",attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.current[field][f])?_vm._i(_vm.current[field][f],null)>-1:(_vm.current[field][f])},on:{"change":function($event){var $$a=_vm.current[field][f],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.current[field], f, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.current[field], f, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.current[field], f, $$c)}}}}):_vm._e(),(typeof _vm.current[field][f] === 'object')?_c('div',[_vm._v(" "+_vm._s(_vm.current[field][f])+" ")]):_vm._e(),(f==='config')?_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f]),expression:"current[field][f]"}],staticClass:"w-full",domProps:{"value":(_vm.current[field][f])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.current[field], f, $event.target.value)}}}):_vm._e()])]})],2):_vm._e()]):_vm._e()]})],2):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('button',{staticClass:"sm"},[_vm._v("Add key")])])}]


// CONCATENATED MODULE: ./src/components/plugins/plugins.configuration.vue?vue&type=template&id=47e088d6&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/plugins.configuration.vue?vue&type=script&lang=js&

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

/*
class plugin {
    constructor ( general , component , editor ){
        this.general = {
            name : general.name,
        }
        this.component = {
            config: general.config,
            path: general.path
        },
        this.editor = {
            settings : settings
        }
    }
}
*/

/* harmony default export */ var plugins_configurationvue_type_script_lang_js_ = ({
  name: 'MokaPluginConfigurator',
  data: function data() {
    return {
      summary: '',
      plugin: null
    };
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['datastore'])),
  props: ['current']
});
// CONCATENATED MODULE: ./src/components/plugins/plugins.configuration.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_plugins_configurationvue_type_script_lang_js_ = (plugins_configurationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/plugins/plugins.configuration.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_plugins_configurationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var plugins_configuration = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);