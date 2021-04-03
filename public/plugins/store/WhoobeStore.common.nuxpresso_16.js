((typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeStore"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeStore"] || []).push([[6,5],{

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "dec2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/plugins.configuration.vue?vue&type=template&id=47e088d6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.current)?_c('div',[_vm._l((Object.keys(_vm.datastore.schema.plugins)),function(field,index){return [(_vm.current.hasOwnProperty(field))?_c('details',[_c('summary',{staticClass:"bg-gray-200 p-1 mt-1 text-lime-600 text-lg outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold",on:{"click":function($event){_vm.summary=field}}},[_vm._v(_vm._s(field))]),(_vm.summary.includes(field))?_c('div',[_vm._l((Object.keys(_vm.current[field]).sort()),function(f){return [(_vm.current[field].hasOwnProperty(f) && typeof _vm.current[field][f] === 'object')?_c('div',{staticClass:"p-2 bg-gray-300"},[_c('details',[_c('summary',{staticClass:"outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold",on:{"click":function($event){_vm.summary=field+f}}},[_vm._v(_vm._s(f))]),(_vm.summary===(field+f))?_c('div',[_vm._l((Object.keys(_vm.current[field][f])),function(ff){return [(_vm.current[field][f].hasOwnProperty(ff))?_c('div',{key:field+f+ff},[_c('label',[_vm._v(_vm._s(ff))]),(typeof _vm.current[field][f][ff]==='string' && ff != 'config')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f][ff]),expression:"current[field][f][ff]"}],staticClass:"w-full",attrs:{"type":"text"},domProps:{"value":(_vm.current[field][f][ff])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.current[field][f], ff, $event.target.value)}}}):_vm._e(),(typeof _vm.current[field][f][ff]==='number' && ff != 'config')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f][ff]),expression:"current[field][f][ff]"}],staticClass:"w-full",attrs:{"type":"number"},domProps:{"value":(_vm.current[field][f][ff])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.current[field][f], ff, $event.target.value)}}}):_vm._e(),(typeof _vm.current[field][f][ff]==='boolean')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f][ff]),expression:"current[field][f][ff]"}],staticClass:"float-left",attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.current[field][f][ff])?_vm._i(_vm.current[field][f][ff],null)>-1:(_vm.current[field][f][ff])},on:{"change":function($event){var $$a=_vm.current[field][f][ff],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.current[field][f], ff, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.current[field][f], ff, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.current[field][f], ff, $$c)}}}}):_vm._e()]):_vm._e()]}),_vm._m(0,true)],2):_vm._e()])]):_c('div',{staticClass:"p-2"},[_c('label',{staticClass:"capitalize"},[_vm._v(_vm._s(f))]),(typeof _vm.current[field][f]==='string' && f != 'config')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f]),expression:"current[field][f]"}],staticClass:"w-full",attrs:{"type":"text"},domProps:{"value":(_vm.current[field][f])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.current[field], f, $event.target.value)}}}):_vm._e(),(typeof _vm.current[field][f]==='boolean')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f]),expression:"current[field][f]"}],staticClass:"float-left",attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.current[field][f])?_vm._i(_vm.current[field][f],null)>-1:(_vm.current[field][f])},on:{"change":function($event){var $$a=_vm.current[field][f],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.current[field], f, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.current[field], f, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.current[field], f, $$c)}}}}):_vm._e(),(typeof _vm.current[field][f] === 'object')?_c('div',[_vm._v(" "+_vm._s(_vm.current[field][f])+" ")]):_vm._e(),(f==='config')?_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.current[field][f]),expression:"current[field][f]"}],staticClass:"w-full",domProps:{"value":(_vm.current[field][f])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.current[field], f, $event.target.value)}}}):_vm._e()])]})],2):_vm._e()]):_vm._e()]})],2):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('button',{staticClass:"sm"},[_vm._v("Add key")])])}]


// CONCATENATED MODULE: ./src/components/plugins/plugins.configuration.vue?vue&type=template&id=47e088d6&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
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

/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "ebca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/plugins.vue?vue&type=template&id=acf3bd92&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-2 flex flex-col"},[_c('div',{staticClass:"grid grid-cols-3 grid-flow-row items-center",staticStyle:{"grid-template-columns":"1fr 2fr 1fr"}},[_c('button',{on:{"click":_vm.addPlugin}},[_vm._v("Add plugin")])]),(_vm.plugins)?_c('div',{staticClass:"grid grid-cols-4 gap-4"},[_vm._l((_vm.plugins),function(plugin){return [_c('div',{staticClass:"p-4 relative shadow border rounded justify-center items-center flex flex-col"},[(!plugin.general.enabled)?_c('i',{staticClass:"material-icons text-5xl bg-gray-300 p-2 rounded-full"},[_vm._v("settings_input_component")]):_vm._e(),(plugin.general.enabled)?_c('i',{staticClass:"material-icons text-5xl bg-lime-500 p-2 rounded-full"},[_vm._v("settings_input_component")]):_vm._e(),_c('div',[_vm._v(_vm._s(plugin.general.name))]),_c('div',{staticClass:"text-sm text-center"},[_vm._v(_vm._s(plugin.general.description || ' '))]),_c('button',{class:plugin.general.enabled?'danger':'success'},[_vm._v(_vm._s(plugin.general.enabled ? 'Disable' : 'Enable'))]),_c('i',{staticClass:"absolute top-0 right-0 m-1 material-icons my-2",on:{"click":function($event){_vm.current=plugin,_vm.pluginSettings=!_vm.pluginSettings}}},[_vm._v("build")])])]})],2):_vm._e(),(_vm.pluginSettings)?_c('moka-modal',{attrs:{"size":"lg","position":""},on:{"close":function($event){_vm.pluginSettings=!_vm.pluginSettings},"click_0":function($event){_vm.pluginSettings=!_vm.pluginSettings},"click_1":function($event){return _vm.savePlugin()}}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_vm._v(_vm._s(_vm.current.general.name || 'New Plugin')+" settings")]),_c('div',{staticClass:"relative h-3/5 p-2 w-full ",attrs:{"slot":"content"},slot:"content"},[_c('div',{staticClass:"absolute overflow-y-auto h-full w-11/12 m-2 bg-white"},[_c('moka-plugin-configurator',{attrs:{"current":_vm.current}})],1)]),_c('div',{staticClass:"p-4 bg-red-100 text-center",attrs:{"slot":"footer"},slot:"footer"},[_c('i',[_vm._v("Please read the documentation before to enable/install a plugin")])])]):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/plugins/plugins.vue?vue&type=template&id=acf3bd92&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./src/components/plugins/plugins.configuration.vue + 4 modules
var plugins_configuration = __webpack_require__("dec2");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/plugins.vue?vue&type=script&lang=js&






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


/* harmony default export */ var pluginsvue_type_script_lang_js_ = ({
  name: 'MokaPlugins',
  components: {
    MokaPluginConfigurator: plugins_configuration["default"]
  },
  data: function data() {
    return {
      plugins: null,
      current: null,
      config: '',
      pluginSettings: false,
      pluginNew: false,
      configStr: {},
      configField: '{}'
    };
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['moka', 'datastore'])),
  watch: {
    pluginSettings: function pluginSettings(v) {
      return;

      if (v) {
        return null; //this.configField = JSON.stringify(this.current.config)
      }
    }
  },
  methods: {
    addPlugin: function addPlugin() {
      var _this = this;

      var plugin = Object.assign({}, this.datastore.schema.plugins); //this.plugins[1] )

      Object.keys(plugin).map(function (key) {
        if (typeof plugin[key] === 'string') {
          plugin[key] = '';
        }

        if (typeof plugin[key] === 'boolean') {
          plugin[key] = false;
        }

        if (_typeof(plugin[key]) === 'object') {
          _this.configStr[key] = '';
        }
      });
      plugin.id = this.$randomID();
      this.current = plugin;
      this.pluginSettings = true;
      this.pluginNew = true;
    },
    savePlugin: function savePlugin() {
      var _this2 = this;

      /*let updates = this.plugins.map ( plugin => {
          if ( plugin.id === this.current.id ){
              return this.current
          } else {
              return plugin
          }
      })
      */
      //this.current.component.config = this.configField ? JSON.parse(this.configField) : ''
      if (this.pluginNew) {
        this.$api.service('plugins').create(this.current).then(function (res) {
          console.log('created=>', res);

          _this2.plugins.push(_this2.current); //this.$store.dispatch ( 'dataset' , { table: 'plugins' , data: res })

        });
        this.pluginNew = false;
      } else {
        this.$api.service('plugins').patch(this.current._id, this.current).then(function (res) {
          console.log('patched=>', res); //this.$store.dispatch ( 'dataset' , { table: 'plugins' , data: res })
        });
      }

      return;
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$api.service('plugins').find().then(function (response) {
      _this3.plugins = response.data;
    }); //this.plugins = this.datastore.dataset.plugins ? this.datastore.dataset.plugins : null
  }
});
// CONCATENATED MODULE: ./src/components/plugins/plugins.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_pluginsvue_type_script_lang_js_ = (pluginsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/plugins/plugins.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_pluginsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var plugins = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);