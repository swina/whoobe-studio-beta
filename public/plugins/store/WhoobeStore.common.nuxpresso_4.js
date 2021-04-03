((typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeStore"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeStore"] || []).push([[13],{

/***/ "7204":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/collections/collection.vue?vue&type=template&id=23213678&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mr-20"},[_vm._m(0),_c('div',{staticClass:"absolute right-0 top-0 m-1 mr-20 text-sm"},[_vm._v(" New collection "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.new_collection),expression:"new_collection"}],attrs:{"type":"text","placeholder":"name of the new collection"},domProps:{"value":(_vm.new_collection)},on:{"input":function($event){if($event.target.composing){ return; }_vm.new_collection=$event.target.value}}}),_c('button',{staticClass:"ml-2",on:{"click":_vm.createCollection}},[_vm._v("Create")])]),_c('div',{staticClass:"grid grid-cols-2 text-sm"},[(_vm.collections)?_c('div',{staticClass:"flex flex-col relative"},[_vm._l((_vm.collections),function(collection){return [_c('div',{staticClass:"flex flex-row w-1/2 border-b justify-between"},[_vm._v(" "+_vm._s(collection.collection)+" "),_c('div',{staticClass:"relative",on:{"click":function($event){_vm.current=collection}}},[_c('input',{staticClass:"btn absolute top-0 left-0 right-0 bottom-0 opacity-0",attrs:{"type":"file","id":collection._id},on:{"change":_vm.loadTextFromFile}}),_c('button',{staticClass:"h-full"},[_vm._v("Import data")]),(_vm.loading)?_c('span',[_vm._v("Loading data ... please wait")]):_vm._e()])])]}),(_vm.modal)?_c('moka-modal',{on:{"close":function($event){_vm.modal=!_vm.modal},"click_0":function($event){_vm.modal=!_vm.modal},"click_1":_vm.saveFields}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_vm._v("Import data - "+_vm._s(_vm.data.data.length-1)+" records found!")]),_c('div',{staticClass:"grid grid-cols-2 p-4",attrs:{"slot":"content"},slot:"content"},[(_vm.data)?_c('div',{staticClass:"flex flex-col"},[_vm._v(" Import Fields "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.field),expression:"field"}],on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.field=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_vm._l((_vm.data.meta),function(field){return [_c('option',{domProps:{"value":field}},[_vm._v(_vm._s(field))])]})],2),(_vm.field && _vm.data.data)?_c('div',[_c('div',{staticClass:"text-xs text-gray-500"},[_vm._v("First row: "+_vm._s(_vm.field)+" => "+_vm._s(_vm.data.data[1][_vm.field])+" ")]),_vm._v(" "),_c('button',{on:{"click":function($event){return _vm.fields.push(_vm.field)}}},[_vm._v("Import field")])]):_vm._e(),(_vm.importing)?_c('div',[_vm._v("Importing record "+_vm._s(_vm.importing)+" of "+_vm._s(_vm.data.data.length-1))]):_vm._e(),(_vm.errors)?_c('div',[_vm._v("Errors: "+_vm._s(_vm.error))]):_vm._e()]):_vm._e(),(_vm.fields.length)?_c('div',[_vm._v(" Following fields will be imported "),_c('draggable',[_vm._l((_vm.fields),function(f,i){return [_c('div',{staticClass:"grid grid-cols-2 border mb-1 p-1 text-xs items-center"},[_c('div',[_vm._v(_vm._s(f))]),_c('div',{staticClass:"justify-end"},[_c('i',{staticClass:"material-icons text-sm",on:{"click":function($event){return _vm.fields.splice(i,1)}}},[_vm._v("delete")])])])]})],2)],1):_vm._e()])]):_vm._e()],2):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-sm pmr-20"},[_c('h5',[_vm._v("Registered collections")]),_vm._v(" Collections are a way to create your own datasets in the system and importing external data."),_c('br'),_vm._v(" Any registered collection will be available in whoobe to create content based on collection data. ")])}]


// CONCATENATED MODULE: ./src/components/plugins/collections/collection.vue?vue&type=template&id=23213678&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/vuedraggable/dist/vuedraggable.umd.js
var vuedraggable_umd = __webpack_require__("b76a");
var vuedraggable_umd_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_umd);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/plugins/collections/collection.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import  Papa  from 'papaparse'

/* harmony default export */ var collectionvue_type_script_lang_js_ = ({
  name: 'MokaCollections',
  components: {
    draggable: vuedraggable_umd_default.a
  },
  data: function data() {
    return {
      collections: null,
      current: null,
      new_collection: '',
      key: '0299ka@@as000122212',
      data: null,
      meta: null,
      loading: false,
      field: null,
      fields: [],
      modal: false,
      importing: 0,
      errors: [],
      error: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$api.service('collections').find().then(function (result) {
      _this.collections = result.data;
    });
  },
  methods: {
    getData: function getData(name) {
      this.current = this.$api.service('collection/' + name).find().then(function (result) {
        console.log(result.data);
      });
    },
    createCollection: function createCollection() {
      var _this2 = this;

      var data = {
        collection: this.new_collection,
        key: this.key
      };
      this.$api.service('collections').create(data).then(function (res) {
        _this2.collections.push(res);
      });
    },
    loadTextFromFile: function loadTextFromFile(ev) {
      var file = ev.target.files[0];
      var reader = new FileReader();
      reader.readAsText(file);
      var vm = this;

      reader.onload = function () {
        vm.data = vm.$csvjson(reader.result, ';');
        vm.modal = true;
      };
    },
    saveFields: function saveFields() {
      var _this3 = this;

      this.current['fields'] = this.fields;
      console.log(this.current);
      this.$api.service('collections').patch(this.current._id, this.current).then(function (result) {
        console.log(result);
        var importData = _this3.data.data;
        importData.forEach(function (record) {
          var row = {};

          _this3.fields.forEach(function (f) {
            row[f] = record[f];
          });

          _this3.$api.service('datastore/' + _this3.current.collection).create(row).then(function (res) {
            _this3.importing++;
          }).catch(function (error) {
            _this3.errors.push(row);

            _this3.error++;
          });
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/plugins/collections/collection.vue?vue&type=script&lang=js&
 /* harmony default export */ var collections_collectionvue_type_script_lang_js_ = (collectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/plugins/collections/collection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  collections_collectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var collection = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);