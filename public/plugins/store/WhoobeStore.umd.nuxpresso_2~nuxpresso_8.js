((typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeStore"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpWhoobeStore"] || []).push([[0],{

/***/ "3d48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.element.vue?vue&type=template&id=dd2a255e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.element)?_c('div',{class:_vm.$attrs.develop ? 'relative ' : '',style:(_vm.element.style),attrs:{"editorelement":""},on:{"dblclick":function($event){return _vm.$emit('editinline',_vm.element)}}},[_c('span',{class:'text-xs ' + _vm.showid},[_vm._v(_vm._s(_vm.element.id))]),((_vm.el.tag==='element' || _vm.el.type==='button' || _vm.el.type==='download' || ( _vm.el.tag === 'article' && !_vm.el.hasOwnProperty('article') ) )  && _vm.el.element !='img' && _vm.el.type != 'video' && _vm.el.type != 'audio')?_c('moka-inline-editor',{attrs:{"element":_vm.el}}):_vm._e(),(_vm.el.tag === 'article' && _vm.el.hasOwnProperty('article'))?_c(_vm.tag,{tag:"component",domProps:{"innerHTML":_vm._s(_vm.el.article[_vm.el.label])}}):_vm._e(),(_vm.el.tag === 'svg')?_c('svg',{class:_vm.el.css + ' fill-current',attrs:{"viewBox":_vm.el.content.viewBox,"width":"100%","height":"100%"},domProps:{"innerHTML":_vm._s(_vm.el.content.g)}}):_vm._e(),(_vm.el.element === 'img' && _vm.el.image && _vm.el.image.url && _vm.el.image.ext != '.svg')?_c('img',{class:_vm.$cssResponsive(_vm.el.css) + _vm.imageCSSDefault,style:(_vm.el.css?'':''),attrs:{"src":_vm.$imageURL(_vm.el.image),"caption":_vm.el.image.caption,"alt":_vm.el.image.alternative_text},on:{"dblclick":function($event){return _vm.$emit('media')}}}):_vm._e(),((_vm.el.element === 'img')  && _vm.el.image && _vm.el.image.ext === '.svg')?_c('div',{class:_vm.el.css + ' fill-current'},[_c('simple-svg',{attrs:{"src":_vm.$imageURL(_vm.el.image),"width":"100%","height":"100%"}})],1):_vm._e(),(_vm.el.type==='video' && _vm.el.image && _vm.el.image.url && _vm.el.image.ext != '.svg')?_c('img',{ref:_vm.el.id,class:_vm.$cssResponsive(_vm.el.css) + _vm.imageCSSDefault,style:(_vm.el.css?'':'max-width:2rem;'),attrs:{"src":_vm.$imagePreviewURL(_vm.el.image)}}):_vm._e(),(_vm.el.type==='video' && !_vm.el.image)?_c('i',{class:'material-icons text-10xl m-auto ' + _vm.$cssResponsive(_vm.el.css),attrs:{"title":_vm.el.label}},[_vm._v("movie")]):_vm._e(),(_vm.el.type==='audio')?_c('i',{class:'material-icons text-4xl m-auto ' + _vm.$cssResponsive(_vm.el.css),attrs:{"title":_vm.el.label}},[_vm._v(" audiotrack")]):_vm._e(),(_vm.el.type==='image' && !_vm.el.image)?_c('i',{class:'material-icons text-10xl m-auto ' + _vm.$cssResponsive(_vm.el.css)},[_vm._v("photo")]):_vm._e(),(_vm.el.element!= 'textarea' && _vm.el.tag === 'input' && _vm.el.type!='button')?_c('input',{class:_vm.$cssResponsive(_vm.el.css),attrs:{"type":_vm.el.type,"placeholder":_vm.el.required?'required!':''},domProps:{"value":_vm.el.content}}):_vm._e(),(_vm.el.required)?_c('sup',{staticClass:"ml-1 nuxpresso-element-required"},[_vm._v("*")]):_vm._e(),(_vm.el.type==='file')?_c('button',{class:_vm.$cssResponsive(_vm.el.css)},[_vm._v(_vm._s(_vm.el.content))]):_vm._e(),(_vm.el.tag==='icon' && !_vm.el.link)?_c('i',{class:'material-icons moka-icons ' + _vm.$cssResponsive(_vm.el.css)},[_vm._v(_vm._s(_vm.el.content))]):_vm._e(),(_vm.el.tag==='icon_bt' && !_vm.el.link)?_c('i',{class:'bi-' + _vm.el.content + '  moka-icons ' + _vm.$cssResponsive(_vm.el.css)}):_vm._e(),(_vm.el.link && _vm.el.tag==='icon')?_c('a',{attrs:{"href":_vm.el.link}},[(_vm.el.tag==='icon')?_c('i',{class:'material-icons moka-icons ' + _vm.$cssResponsive(_vm.el.css)},[_vm._v(_vm._s(_vm.el.content))]):_vm._e()]):_vm._e(),(_vm.el.link && _vm.el.tag==='icon_bt')?_c('a',{attrs:{"href":_vm.el.link}},[_c('i',{class:'bi-' + _vm.el.content + ' ' + _vm.$cssResponsive(_vm.el.css)})]):_vm._e(),(_vm.el.type==='plugin' && typeof _vm.el.plugin === 'object')?_c('div',{class:_vm.el.css,style:(_vm.el.style)},[_c('i',{staticClass:"material-icons"},[_vm._v("settings_input_component")]),_vm._v(" Plugin "+_vm._s(_vm.element.name)+" "),(_vm.el.plugin.editor)?_c('moka-plugin-wrapper',{attrs:{"settings":_vm.el.plugin.editor.settings,"block":_vm.el,"plugin":_vm.el,"component":_vm.el.plugin.component}}):_vm._e()],1):_vm._e(),(_vm.el.element === 'textarea')?_c('textarea',{class:_vm.$cssResponsive(_vm.el.css)}):_vm._e(),(_vm.el.element === 'menu')?_c('nav',{class:_vm.el.css.container + ' ' + _vm.el.css.align},_vm._l((_vm.el.items),function(item,i){return _c('div',{key:_vm.el.id + '_' + i,class:_vm.el.css.css + ' cursor-pointer relative pr-4'},[(!item.submenu && !_vm.$attrs.develop && item.link && !item.link.includes('http'))?_c('a',{class:_vm.el.css.css,attrs:{"href":item.link}},[(!item.hasOwnProperty('icon') && !item.icon)?_c('span',[_vm._v(_vm._s(item.label))]):_c('span',[_c('i',{class:'bi-' + item.icon})]),(item.submenu)?_c('i',{staticClass:"material-icons moka-icons"},[_vm._v("arrow_drop_down")]):_vm._e()]):_c('div',{class:_vm.el.css.css,on:{"mouseover":function($event){_vm.menuover=i},"click":function($event){_vm.menuover=i}}},[(!item.hasOwnProperty('icon') && !item.icon)?_c('span',[_vm._v(_vm._s(item.label))]):_c('span',[_c('i',{class:'bi-' + item.icon})]),(item.submenu && item.submenu.length)?_c('i',{class:_vm.el.css.css + ' material-icons moka-icons text-sm'},[_vm._v("arrow_drop_down")]):_vm._e()]),(item.submenu && item.submenu.length && !_vm.$attrs.develop)?_c('div',{class:_vm.isOver(i) + ' ' + _vm.el.css.css + ' absolute w-48 p-1 flex flex-col z-max',on:{"mouseleave":function($event){_vm.menuover=-1}}},_vm._l((item.submenu),function(sub){return _c('div',[_c('div',{class:_vm.el.css.css},[_vm._v(_vm._s(sub.label))])])}),0):_vm._e()])}),0):_vm._e(),(_vm.el.element === 'menu' && _vm.el.responsive)?_c('i',{class:'material-icons moka-icons z-top fixed md:hidden top-0 left-0 m-1 ' + _vm.el.css.css,on:{"click":function($event){_vm.menu_show=!_vm.menu_show}}},[_vm._v("menu")]):_vm._e(),_c('transition',{attrs:{"name":"fade"}},[(_vm.el.element === 'menu' && _vm.menu_show)?_c('nav',{staticClass:"z-top flex flex-col p-1 my-2"},_vm._l((_vm.el.items),function(item,i){return _c('div',{class:_vm.el.css.css + ' cursor-pointer relative p-1'},[(!item.submenu && !_vm.$attrs.develop && item.link && !item.link.includes('http'))?_c('a',{class:_vm.el.css.css,attrs:{"href":item.link}},[_vm._v(_vm._s(item.label)+" "),(item.submenu)?_c('i',{staticClass:"material-icons moka-icons"},[_vm._v("arrow_drop_down")]):_vm._e()]):_c('div',{class:_vm.el.css.css,on:{"mouseover":function($event){_vm.menuover=i},"click":function($event){_vm.menuover=i}}},[_vm._v(_vm._s(item.label)+" "),(item.submenu && item.submenu.length)?_c('i',{class:_vm.el.css.css + ' material-icons moka-icons text-sm'},[_vm._v("arrow_drop_down")]):_vm._e()]),(item.submenu && item.submenu.length)?_c('div',{class:_vm.isOver(i) + ' ' + _vm.el.css.css + ' absolute w-48 p-1 flex flex-col z-40',on:{"mouseleave":function($event){_vm.menuover=-1}}},_vm._l((item.submenu),function(sub){return _c('div',[_c('div',{class:_vm.el.css.css},[_vm._v(_vm._s(sub.label))])])}),0):_vm._e()])}),0):_vm._e()]),(_vm.$attrs.develop )?_c('div',{class:'absolute border-dashed top-0 left-0 bottom-0 right-0 scale-x-100 scale-y-100 transform z-' + _vm.$attrs.level + ' ' + _vm.active(_vm.el.id,_vm.el.css) + ' bg-transparent',staticStyle:{"min-height":"2rem"},on:{"click":function($event){return _vm.select(_vm.el)},"contextmenu":function($event){return _vm.$contextMenu($event,_vm.el,_vm.el.element==='menu'?'edit':'customize')}}},[_c('div',{staticClass:"h-2 w-2 absolute top-0 right-0 bg-black rounded-full -m-1",on:{"click":function($event){return _vm.moveUp(_vm.el.id)}}}),_c('div',{staticClass:"h-2 w-2 absolute top-0 left-0 bg-black rounded-full -m-1"}),_c('div',{staticClass:"h-2 w-2 absolute bottom-0 right-0 bg-black rounded-full -m-1"}),_c('div',{staticClass:"h-2 w-2 absolute bottom-0 left-0 bg-black rounded-full -m-1"}),(_vm.el.gsap && _vm.el.gsap.animation)?_c('div',{staticClass:"absolute bottom-0 left-0 -mb-4 text-xs text-purple-500"},[_vm._v(_vm._s(_vm.el.gsap.animation))]):_vm._e()]):_vm._e(),(_vm.el.id===_vm.moka.selected)?_c('div',{staticClass:"z-top absolute top-0 left-0 -mt-6 h-6 bg-gray-800 text-gray-300 text-xs rounded-2xl items-center flex flex-row"},[_c('i',{staticClass:"material-icons text-sm text-lime-400 hover:text-red-500 leading-4 ml-2",attrs:{"title":"Replace element"},on:{"click":function($event){_vm.toolbar=!_vm.toolbar,_vm.$action('replaceelement'),_vm.$store.dispatch('setParent',_vm.$attrs.parent)}}},[_vm._v(_vm._s(_vm.el.icon))]),_c('i',{staticClass:"material-icons text-sm hover:text-blue-500 leading-4 ml-2",attrs:{"title":"Move up"},on:{"click":function($event){return _vm.moveUp(_vm.el.id)}}},[_vm._v("expand_less")]),(_vm.toolbar)?_c('i',{staticClass:"material-icons text-sm text-gray-600 hover:text-blue-500 leading-4 mr-2",on:{"click":function($event){_vm.toolbar=!_vm.toolbar}}},[_vm._v("arrow_left")]):_vm._e(),(_vm.toolbar||!_vm.toolbar)?_c('div',{staticClass:"flex flex-row items-center"},[(_vm.el.type==='plugin')?_c('i',{staticClass:"material-icons hover:text-blue-500 text-sm leading-4 mx-2",attrs:{"title":"Plugin Settings"},on:{"click":function($event){return _vm.$action('pluginsetting')}}},[_vm._v("settings")]):_vm._e(),_c('i',{staticClass:"material-icons hover:text-blue-500 text-sm leading-4 mx-2",attrs:{"title":"Edit content"},on:{"click":function($event){return _vm.$action('edit')}}},[_vm._v("edit")]),_c('i',{staticClass:"material-icons hover:text-blue-500 text-sm leading-4 mx-2",attrs:{"title":"Customize"},on:{"click":function($event){_vm.$action('customize'),_vm.toolbar=!_vm.toolbar}}},[_vm._v("brush")]),_c('i',{staticClass:"material-icons hover:text-blue-500 text-sm leading-4 mx-2",attrs:{"title":"Delete"},on:{"click":function($event){return _vm.$action('delete')}}},[_vm._v("delete")])]):_vm._e()]):_vm._e()],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.element.vue?vue&type=template&id=dd2a255e&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.text.editor.vue?vue&type=template&id=5fa43e25&
var moka_text_editorvue_type_template_id_5fa43e25_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative p-0 border-none max-h-screen",staticStyle:{"min-width":"30rem","min-height":"25rem"}},[_c('i',{staticClass:"material-icons text-sm nuxpresso-icon-btn text-black absolute top-0 right-0 m-1  cursor-pointer",attrs:{"title":"add image"},on:{"click":_vm.addImage}},[_vm._v("image")]),(_vm.hasContent)?_c('quill-editor',{ref:"editor",staticClass:"mt-2 overflow-y-auto",style:('' + _vm.stile()),attrs:{"id":"editor","options":_vm.$attrs.mode? _vm.editorOptionsHeading : _vm.editorOptions},on:{"input":function($event){return _vm.$emit('input',_vm.content)},"blur":function($event){return _vm.onEditorBlur($event)},"focus":function($event){return _vm.onEditorFocus($event)},"ready":function($event){return _vm.onEditorReady($event)}},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}}):_vm._e(),_c('transition',{attrs:{"name":"fade"}},[(_vm.media)?_c('div',{staticClass:"fixed top-0 left-0 m-auto rounded-lg bg-white"},[_c('moka-media',{on:{"close":function($event){_vm.media=false},"newimage":_vm.setEditorImage}})],1):_vm._e()])],1)}
var moka_text_editorvue_type_template_id_5fa43e25_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/editor/render/moka.text.editor.vue?vue&type=template&id=5fa43e25&

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.core.css
var quill_core = __webpack_require__("a753");

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.snow.css
var quill_snow = __webpack_require__("8096");

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.bubble.css
var quill_bubble = __webpack_require__("14e1");

// EXTERNAL MODULE: ./node_modules/vue-quill-editor/dist/vue-quill-editor.js
var vue_quill_editor = __webpack_require__("953d");

// EXTERNAL MODULE: ./node_modules/quill/dist/quill.js
var quill = __webpack_require__("9339");
var quill_default = /*#__PURE__*/__webpack_require__.n(quill);

// EXTERNAL MODULE: ./node_modules/quill-image-resize-module/image-resize.min.js
var image_resize_min = __webpack_require__("f318");
var image_resize_min_default = /*#__PURE__*/__webpack_require__.n(image_resize_min);

// CONCATENATED MODULE: ./src/plugins/typo.js
/**
 * Used by Quill editor to add custom colors
 * Fonts doesn't work yet
 */
var typo = {
  fonts: ['Barlow Condensed', 'Abel', 'Alice', 'Alegreya', 'Arial', 'Amethysta', 'Nunito Sans', 'Roboto', 'Quattrocento', 'Verdana'],
  colors: ['#000000', '#FFFFFF', '#F7FAFC', '#EDF2F7', '#E2E8F0', '#CBD5E0', '#A0AEC0', '#718096', '#4A5568', '#2D3748', '#1A202C', '#FFF5F5', '#FED7D7', '#FEB2B2', '#FC8181', '#F56565', '#E53E3E', '#C53030', '#9B2C2C', '#742A2A', '#FFFAF0', '#FEEBC8', '#FBD38D', '#F6AD55', '#ED8936', '#DD6B20', '#C05621', '#9C4221', '#7B341E', '#FFFFF0', '#FEFCBF', '#FAF089', '#F6E05E', '#ECC94B', '#D69E2E', '#B7791F', '#975A16', '#744210', '#F0FFF4', '#C6F6D5', '#9AE6B4', '#68D391', '#48BB78', '#38A169', '#2F855A', '#276749', '#22543D', '#E6FFFA', '#B2F5EA', '#81E6D9', '#4FD1C5', '#38B2AC', '#319795', '#2C7A7B', '#285E61', '#234E52', '#EBF8FF', '#BEE3F8', '#90CDF4', '#63B3ED', '#4299E1', '#3182CE', '#2B6CB0', '#2C5282', '#2A4365', '#EBF4FF', '#C3DAFE', '#A3BFFA', '#7F9CF5', '#667EEA', '#5A67D8', '#4C51BF', '#434190', '#3C366B', '#FAF5FF', '#E9D8FD', '#D6BCFA', '#B794F4', '#9F7AEA', '#805AD5', '#6B46C1', '#553C9A', '#44337A', '#FFF5F7', '#FED7E2', '#FBB6CE', '#F687B3', '#ED64A6', '#D53F8C', '#B83280', '#97266D', '#702459', '#F5F5F4', '#E7E5E4', '#D6D3D1', '#A8A29E', '#78716C', '#57534E', '#44403C', '#292524', '#1C1917', '#F1F5F9', '#E2E8F0', '#CBD5E1', '#94A3B8', '#64748B', '#475569', '#475569', '#475569', '#475569', '#ECFCCB', '#D9F99D', '#D9F99D', '#A3E635', '#84CC16', '#65A30D', '#4D7C0F', '#3F6212', '#365314']
};
/* harmony default export */ var plugins_typo = ({
  typo: typo
});
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.text.editor.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






quill_default.a.register('modules/imageResize', image_resize_min_default.a);


/* harmony default export */ var moka_text_editorvue_type_script_lang_js_ = ({
  name: 'MokaRichTextEditor',
  components: {
    quillEditor: vue_quill_editor["quillEditor"]
  },
  data: function data() {
    return {
      iseditor: false,
      media: false,
      content: '',
      font: "Barlow Condensed",

      /*
      editorOptions: {
          modules: {
              imageResize: true,
              toolbar: {
                  container: [['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                      ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                      [{ 'direction': 'rtl' }],                         // text direction
                        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                      [{ 'color' : typo.colors },{ 'background' : typo.colors }],
                      //[{ 'color': [ '#000000', '#FFFFFF' , '#F7FAFC' , '#EDF2F7' , '#E2E8F0', '#CBD5E0', '#A0AEC0', '#718096','#4A5568' , '#2D3748', '#1A202C', '#FFF5F5', '#FED7D7', '#FEB2B2' , '#FC8181', '#F56565','#E53E3E', '#C53030', '#9B2C2C', '#742A2A', '#FFFAF0', '#FEEBC8','#FBD38D', '#F6AD55','#ED8936','#DD6B20','#C05621','#9C4221','#7B341E','#FFFFF0','#FEFCBF','#FAF089','#F6E05E','#ECC94B','#D69E2E','#B7791F','#975A16','#744210','#F0FFF4','#C6F6D5','#9AE6B4','#68D391','#48BB78','#38A169','#2F855A','#276749','#22543D','#E6FFFA','#B2F5EA','#81E6D9','#4FD1C5','#38B2AC','#319795','#2C7A7B','#285E61','#234E52','#EBF8FF','#BEE3F8','#90CDF4','#63B3ED','#4299E1','#3182CE','#2B6CB0','#2C5282','#2A4365','#EBF4FF','#C3DAFE','#A3BFFA','#7F9CF5','#667EEA','#5A67D8','#4C51BF','#434190','#3C366B','#FAF5FF','#E9D8FD','#D6BCFA','#B794F4','#9F7AEA','#805AD5','#6B46C1','#553C9A','#44337A','#FFF5F7','#FED7E2','#FBB6CE','#F687B3','#ED64A6','#D53F8C','#B83280','#97266D','#702459'] }, { 'background': [ '#000000', '#FFFFFF' , '#F7FAFC' , '#EDF2F7' , '#E2E8F0', '#CBD5E0', '#A0AEC0', '#718096','#4A5568' , '#2D3748', '#1A202C', '#FFF5F5', '#FED7D7', '#FEB2B2' , '#FC8181', '#F56565','#E53E3E', '#C53030', '#9B2C2C', '#742A2A', '#FFFAF0', '#FEEBC8','#FBD38D', '#F6AD55','#ED8936','#DD6B20','#C05621','#9C4221','#7B341E','#FFFFF0','#FEFCBF','#FAF089','#F6E05E','#ECC94B','#D69E2E','#B7791F','#975A16','#744210','#F0FFF4','#C6F6D5','#9AE6B4','#68D391','#48BB78','#38A169','#2F855A','#276749','#22543D','#E6FFFA','#B2F5EA','#81E6D9','#4FD1C5','#38B2AC','#319795','#2C7A7B','#285E61','#234E52','#EBF8FF','#BEE3F8','#90CDF4','#63B3ED','#4299E1','#3182CE','#2B6CB0','#2C5282','#2A4365','#EBF4FF','#C3DAFE','#A3BFFA','#7F9CF5','#667EEA','#5A67D8','#4C51BF','#434190','#3C366B','#FAF5FF','#E9D8FD','#D6BCFA','#B794F4','#9F7AEA','#805AD5','#6B46C1','#553C9A','#44337A','#FFF5F7','#FED7E2','#FBB6CE','#F687B3','#ED64A6','#D53F8C','#B83280','#97266D','#702459'] }],          // dropdown with defaults from theme
                      //[{ 'font': ['Barlow Condensed','Abel','Alice','Alegreya','Arial','Amethysta','Nunito Sans','Roboto','Quattrocento','Verdana','sans-serif','serif'] }],
                      [{ 'align': [] }],
                      
                      ['clean']    
                  ],
                  
              },
              
              
          },
          placeholder: 'Add your content ...',
          theme: 'snow'
      },
      */
      editorOptionsHeading: {
        modules: {
          imageResize: true,
          toolbar: {
            container: [[{
              'header': 1
            }, {
              'header': 2
            }], // custom button values
            [{
              'header': [1, 2, 3, 4, 5, 6, false]
            }], [{
              'color': []
            }, {
              'background': []
            }], // dropdown with defaults from theme
            //[{ 'font': ['Barlow Condensed','Arial','Verdana','sans-serif','serif'] }],
            [{
              'align': []
            }], ['link'], ['clean']]
          }
        },
        placeholder: 'Add your content ...',
        theme: 'snow'
      }
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['moka', 'editor'])), {}, {
    hasContent: function hasContent() {
      this.$attrs.value ? this.content = this.$attrs.value : null;
      return true;
    },
    editorOptions: function editorOptions() {
      return {
        modules: {
          imageResize: true,
          toolbar: {
            container: [['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'], [{
              'header': 1
            }, {
              'header': 2
            }], // custom button values
            [{
              'list': 'ordered'
            }, {
              'list': 'bullet'
            }], [{
              'script': 'sub'
            }, {
              'script': 'super'
            }], // superscript/subscript
            [{
              'indent': '-1'
            }, {
              'indent': '+1'
            }], // outdent/indent
            [{
              'direction': 'rtl'
            }], // text direction
            [{
              'size': ['small', false, 'large', 'huge']
            }], // custom dropdown
            [{
              'header': [1, 2, 3, 4, 5, 6, false]
            }], [{
              'color': plugins_typo.typo.colors
            }, {
              'background': plugins_typo.typo.colors
            }], [{
              'align': []
            }], ['link'], ['image'], ['clean']]
          }
        },
        placeholder: 'Add your content ...',
        theme: 'snow'
      };
    }
  }),
  methods: {
    addImage: function addImage() {
      this.media = true;
    },
    onEditorBlur: function onEditorBlur(editor) {
      return null;
    },
    onEditorFocus: function onEditorFocus(editor) {
      return null;
    },
    onEditorReady: function onEditorReady(editor) {
      return null;
    },
    setEditorImage: function setEditorImage(img) {
      var image = this.$imageURL(img);
      this.$refs['editor'].quill.focus();
      var range = this.$refs['editor'].quill.getSelection();
      range ? this.$refs['editor'].quill.insertEmbed(range.index, 'image', image) : //img.url ) :
      this.$emit('message', 'Set a position in the editor to place the image');
    },
    stile: function stile() {
      if (!this.editor.current) return;
      var stile = '';

      if (this.editor.current.hasOwnProperty('fontFamily')) {
        stile += ''; //'font-size:1rem;font-family:\"' + block.fontFamily + '\"; '
      } else {
        //let ff = document.querySelector('.ql-editor') 
        //ff.style.fontFamily = '"\Barlow Condensed\",sans-serif'
        stile = ''; //'font-size:1rem;font-family:"\Barlow Condensed\",sans-serif;'
      }

      return this.editor.current.hasOwnProperty('style') ? this.editor.current.style + stile : stile;
    }
  },
  beforeMount: function beforeMount() {
    var Quill = __webpack_require__("9339");

    var _require = __webpack_require__("5dde"),
        container = _require.container,
        ImageExtend = _require.ImageExtend,
        QuillWatch = _require.QuillWatch;

    var _require2 = __webpack_require__("2a19"),
        ImageDrop = _require2.ImageDrop;

    var ImageResize = __webpack_require__("f318");

    Quill.register("modules/ImageExtend", ImageExtend);
    Quill.register("modules/ImageResize", ImageResize);
    Quill.register("modules/imageDrop", ImageDrop);
  }
});
// CONCATENATED MODULE: ./src/components/editor/render/moka.text.editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var render_moka_text_editorvue_type_script_lang_js_ = (moka_text_editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/editor/render/moka.text.editor.vue?vue&type=style&index=0&lang=css&
var moka_text_editorvue_type_style_index_0_lang_css_ = __webpack_require__("dcbe");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/editor/render/moka.text.editor.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  render_moka_text_editorvue_type_script_lang_js_,
  moka_text_editorvue_type_template_id_5fa43e25_render,
  moka_text_editorvue_type_template_id_5fa43e25_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moka_text_editor = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.inline.vue?vue&type=template&id=21b703f7&
var moka_editor_inlinevue_type_template_id_21b703f7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[(_vm.editor.current && _vm.editor.current.id === _vm.element.id)?_c(_vm.tag,{tag:"component",class:_vm.$cssResponsive(_vm.editor.current.css) + ' relative z-2xtop focus:p-2 cursor-text editor',attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(_vm.editor.current.content)},on:{"blur":_vm.handleInput,"contextmenu":_vm.openCustomizer}}):_c(_vm.tag,{tag:"component",class:_vm.$cssResponsive(_vm.element.css),domProps:{"innerHTML":_vm._s(_vm.element.content)},on:{"contextmenu":_vm.openCustomizer}})],1)}
var moka_editor_inlinevue_type_template_id_21b703f7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.inline.vue?vue&type=template&id=21b703f7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.inline.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//

/* harmony default export */ var moka_editor_inlinevue_type_script_lang_js_ = ({
  name: 'MokaInlineEditor',
  data: function data() {
    return {
      selection: '',
      start: 0,
      end: 0,
      content: ''
    };
  },
  props: ['element'],
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['editor'])), {}, {
    tag: function tag() {
      return this.element.element === 'h' ? 'h' + this.element.level : this.element.element;
    }
  }),
  methods: {
    openCustomizer: function openCustomizer(e) {
      e.preventDefault();
      this.$action('customize');
    },
    handleInput: function handleInput(e) {
      var text = e.target.innerHTML.replaceAll(/style=\".*"/gm, '');
      this.editor.current.content = text;
    }
  }
});
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.inline.vue?vue&type=script&lang=js&
 /* harmony default export */ var render_moka_editor_inlinevue_type_script_lang_js_ = (moka_editor_inlinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.inline.vue





/* normalize component */

var moka_editor_inline_component = Object(componentNormalizer["a" /* default */])(
  render_moka_editor_inlinevue_type_script_lang_js_,
  moka_editor_inlinevue_type_template_id_21b703f7_render,
  moka_editor_inlinevue_type_template_id_21b703f7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moka_editor_inline = (moka_editor_inline_component.exports);
// EXTERNAL MODULE: ./src/components/Plugins.Wrapper.vue + 9 modules
var Plugins_Wrapper = __webpack_require__("5323");

// EXTERNAL MODULE: ./node_modules/jsonpath/jsonpath.js
var jsonpath = __webpack_require__("52cd");
var jsonpath_default = /*#__PURE__*/__webpack_require__.n(jsonpath);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.element.vue?vue&type=script&lang=js&












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var moka_editor_elementvue_type_script_lang_js_ = ({
  name: 'MokaEditorElement',
  components: {
    MokaTextEditor: moka_text_editor,
    MokaInlineEditor: moka_editor_inline,
    MokaPluginWrapper: Plugins_Wrapper["a" /* default */]
  },
  data: function data() {
    return {
      el: null,
      article: 'article',
      opacity: 'opacity-0',
      menuover: -1,
      menu_show: false,
      toolbar: false
    };
  },
  props: ['current'],
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['moka', 'editor'])), {}, {
    showid: function showid() {
      return this.$attrs.debug ? '' : 'hidden';
    },
    element: function element() {
      //this.$attrs.element && this.$attrs.element.css ? this.$attrs.element.css = this.$clean(this.$attrs.element.css,'md:') : null
      return this.$attrs.element ? this.el = this.$attrs.element : false;
    },
    tag: function tag() {
      if (!this.editor.current) {
        return this.$attrs.element.element === 'h' ? 'h' + this.$attrs.element.level : this.$attrs.element.element;
      } else {
        return this.$attrs.element.id != this.editor.current.id ? this.$attrs.element.element === 'h' ? 'h' + this.$attrs.element.level : this.$attrs.element.element : moka_editor_inline;
      }
    },
    stile: function stile() {
      if (this.el.image) {
        return 'background-image:url(' + this.el.image.url + ');' + this.el.style;
      }

      return '';
    },
    imageCSSDefault: function imageCSSDefault() {
      if (!this.el.css) {
        return ' w-full h-auto';
      }
    },
    component: function component() {
      if (this.$attrs.element.plugin) {
        var name = this.el.plugin + '.editor';
        console.log(name);
        return function () {
          return __webpack_require__("cd88")("./" + name);
        }; //return () =>  import( name )
      }

      return false;
    }
  }),

  /*
  async asyncData({context}){
      const { data } = await this.$axios.$get('articles/2')
      console.log ( data )
      return { article: data.content }
  },
  */
  methods: {
    moveUp: function moveUp(id) {
      var parent = jsonpath_default.a.parent(this.$attrs.component, '$..blocks[?(@.id=="' + id + '")]');
      if (parent.length === 1) return;
      var i;
      parent.forEach(function (p, index) {
        if (p.id === id) {
          i = index;
        }
      });

      if (i > 0) {
        var obj = Object.assign({}, this.el);
        parent.splice(i, 1);
        parent.splice(i - 1, 0, this.el);
      }
    },
    select: function select(el) {
      this.$store.dispatch('selected', el.id);
      this.$emit('selected', el);
    },
    layer: function layer() {
      var classe = 'relative ';

      if (this.element.css.length) {
        var cl = this.element.css.split(' ');
        cl.forEach(function (z) {
          z.indexOf('z-') > -1 ? classe += z : null;
        });
        return classe;
      }

      classe += 'z-top';
      return classe;
    },
    responsiveCss: function responsiveCss(css) {
      return css; //this.$clean ( this.$cssResponsive ( css ) )
    },
    active: function active(id, css) {
      var translate = '';

      if (css && css.length) {
        var classi = css.split(' ');
        classi.forEach(function (classe) {
          if (classe.indexOf('translate') > -1) {
            translate += ' transform ' + classe;
          }

          if (classe.indexOf('w-') > -1) {
            translate += ' ';
          }

          if (classe.indexOf('h-') > -1) {
            translate += ' ';
          }
        });
      }

      this.$attrs.element.hasOwnProperty('plugin') ? translate += ' border-brown-400 border-4 ' : translate += ' border-green-500 border ';

      if (id === this.moka.selected) {
        return ' opacity-100 bg-transparent ' + translate;
      }

      return ' opacity-0 hover:opacity-100 bg-transparent ' + translate;
    },
    isOver: function isOver(i) {
      return i < 0 ? 'opacity-0' : this.menuover === i ? 'opacity-100' : 'opacity-0';
    },
    menu_responsive: function menu_responsive(menu) {
      if (menu.type === 'horizontal') return 'flex flex-row';
      if (menu.type === 'vertical') return 'flex flex-col';
      if (menu.responsive) return menu.css.container.replace('flex-row', 'h-0 opacity-0 md:h-auto md:opacity-100 flex-col md:flex-row');
    },
    handleInput: function handleInput(e) {
      var pippo = '<a style="pippo">'.replace(/style=\".*"/gm, '');
      console.log(pippo);
      var text = e.target.innerHTML.replaceAll(/style=\".*"/gm, '');
      console.log(text);
      this.editor.current.content = text; //e.target.innerHTML
      //this.editor.current.content = this.editor.current.content.replace(/<style.*?<\/style>/g, '')
    }
  }
});
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.element.vue?vue&type=script&lang=js&
 /* harmony default export */ var render_moka_editor_elementvue_type_script_lang_js_ = (moka_editor_elementvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.element.vue





/* normalize component */

var moka_editor_element_component = Object(componentNormalizer["a" /* default */])(
  render_moka_editor_elementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moka_editor_element = __webpack_exports__["a"] = (moka_editor_element_component.exports);

/***/ }),

/***/ "78d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.single.container.vue?vue&type=template&id=d8bce044&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.doc)?_c('div',{class:'p-2 fill-current ' + _vm.classe(_vm.doc.css),style:(_vm.doc.style + ' ' +  _vm.background(_vm.doc)),attrs:{"level":_vm.$attrs.level},on:{"dblclick":function($event){_vm.doc.blocks.length===0?_vm.$action('addcomponent'):null}}},[(_vm.doc.blocks && !_vm.doc.blocks.length && !_vm.doc.image)?_c('div',{staticClass:"text-xs"},[_vm._v("Dblclick here to add an element")]):_vm._e(),_vm._l((_vm.doc.blocks),function(block,b){return [(block && !block.hasOwnProperty('blocks') || block.hasOwnProperty('items') && !_vm.doc.hasOwnProperty('slider'))?_c('moka-element',{key:block.id,attrs:{"component":_vm.$attrs.component,"element":block,"coords":[b],"develop":true,"level":parseInt(_vm.$attrs.level)+1,"parent":[_vm.doc.blocks,b]},on:{"selected":function($event){_vm.setCurrent(block),_vm.$store.dispatch('setCurrent',block),_vm.$store.dispatch('selected',block.id)},"customize":_vm.customize,"copy":function($event){return _vm.$emit('copy')},"animation":function($event){return _vm.$emit('animations')},"delete":function($event){return _vm.$emit('delete')},"editinline":function($event){_vm.setCurrent(block),_vm.edit}}}):_vm._e(),(block && block.hasOwnProperty('blocks'))?_c('moka-single-container',{key:block.id,attrs:{"component":_vm.$attrs.component,"top":false,"root":_vm.$attrs.root||false,"coords":_vm.coords,"slide":_vm.$attrs.slide,"index":b,"level":parseInt(_vm.$attrs.level)+1,"zi":_vm.$attrs.zi + parseInt(_vm.$attrs.level),"doc":block}}):_vm._e()]}),(_vm.doc && !_vm.doc.hasOwnProperty('items'))?_c('div',{class:'absolute transform border-2 border-dashed top-0 left-0 bottom-0 right-0 z-' + _vm.zindex + ' scale-x-' + (105-_vm.root) + ' ' + _vm.active(_vm.doc.id,_vm.doc),on:{"click":function($event){return _vm.setCurrent(_vm.doc)},"contextmenu":function($event){return _vm.$contextMenu($event,_vm.doc)}}},[(_vm.doc && _vm.doc.hasOwnProperty('loop') && _vm.doc.loop)?_c('span',{staticClass:"text-xs"},[_c('i',{staticClass:"material-icons"},[_vm._v("article")]),_vm._v(" Article Loop")]):_vm._e(),(_vm.doc && _vm.doc.hasOwnProperty('blocks_flip'))?_c('span',{staticClass:"text-xs"},[_c('i',{staticClass:"material-icons"},[_vm._v("flip_camera_android")]),_vm._v(" Flipbox")]):_vm._e(),_c('div',{staticClass:"h-2 w-2 absolute top-0 right-0 bg-black rounded-full -m-1",on:{"click":function($event){return _vm.moveUp(_vm.doc.id)}}}),_c('div',{staticClass:"h-3 w-3 absolute top-0 left-0 bg-blue-500 rounded-full -m-2",attrs:{"title":"Dblclick to add an element"},on:{"dblclick":function($event){return _vm.$action('addcomponent')}}}),_c('div',{class:'h-2 w-2 absolute bottom-0 right-0 bg-black rounded-full -m-1 ' + _vm.side}),_c('div',{staticClass:"h-2 w-2 absolute bottom-0 left-0 bg-black rounded-full -m-1"}),(_vm.doc.id===_vm.moka.selected)?_c('div',{staticClass:"z-2xtop absolute top-0 left-0 ml-4 p-1 -mt-6  h-6 w-auto bg-gray-800 text-gray-300 text-xs rounded-2xl items-center flex flex-row justify-around"},[(_vm.doc.icon)?_c('i',{staticClass:"transform scale-100 material-icons text-lime-400 hover:text-red-500  text-sm mr-2"},[_vm._v(_vm._s(_vm.doc.icon))]):_vm._e(),(!_vm.doc.icon)?_c('i',{staticClass:"transform scale-100 material-icons text-lime-400 hover:text-red-500 text-sm mr-2"},[_vm._v("select_all")]):_vm._e(),_c('i',{staticClass:"transform scale-100 material-icons text-base mr-2",attrs:{"title":"Move up"},on:{"click":function($event){return _vm.moveUp(_vm.doc.id)}}},[_vm._v("expand_less")]),(_vm.doc.type==='flex' || _vm.doc.type==='grid')?_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4",attrs:{"title":"Add element"},on:{"click":function($event){return _vm.$action('addcomponent')}}},[_vm._v("add")]):_vm._e(),(_vm.doc.tag==='form')?_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4",attrs:{"title":"Settings"},on:{"click":function($event){return _vm.$action('formsetting')}}},[_vm._v("settings")]):_vm._e(),_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4 ",attrs:{"title":"Customize"},on:{"click":function($event){return _vm.$action('customize')}}},[_vm._v("brush")]),(_vm.doc.type === 'flex' || _vm.doc.type==='grid')?_c('i',{staticClass:"material-icons text-gray-400 hover:text-blue-400 mr-2",attrs:{"title":"Add block"},on:{"click":function($event){return _vm.$action('addreusable')}}},[_vm._v("widgets")]):_vm._e(),_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4 ",attrs:{"title":"Delete"},on:{"click":function($event){return _vm.$action('delete')}}},[_vm._v("delete")])]):_vm._e(),(_vm.doc && _vm.doc.hasOwnProperty('slider'))?_c('span',{staticClass:"px-4 py-1 rounded-xl text-sm bg-yellow-500"},[_vm._v("SLIDER")]):_vm._e(),(_vm.doc.type==='grid')?_c('div',{staticClass:"opacity-100 hover:opacity-100 border rounded-tl rounded-bl bg-gray-800 absolute left-0 top-0 -mx-5 text-black flex flex-col",staticStyle:{"top":"50%","transform":"translateY(-50%)"}},[_c('i',{staticClass:"material-icons hover:bg-blue-200 text-gray-200 hover:text-gray-700",on:{"click":function($event){return _vm.move(true)}}},[_vm._v("expand_less")]),_c('i',{staticClass:"material-icons hover:bg-blue-200 text-gray-200 hover:text-gray-700",on:{"click":function($event){return _vm.move(false)}}},[_vm._v("expand_more")])]):_vm._e()]):_vm._e()],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/editor/render/moka.single.container.vue?vue&type=template&id=d8bce044&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./src/components/editor/render/moka.editor.element.vue + 15 modules
var moka_editor_element = __webpack_require__("3d48");

// EXTERNAL MODULE: ./src/components/editor/render/moka.editor.container.vue + 24 modules
var moka_editor_container = __webpack_require__("b195");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/jsonpath/jsonpath.js
var jsonpath = __webpack_require__("52cd");
var jsonpath_default = /*#__PURE__*/__webpack_require__.n(jsonpath);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.single.container.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var moka_single_containervue_type_script_lang_js_ = ({
  name: 'MokaSingleContainer',
  components: {
    MokaElement: moka_editor_element["a" /* default */],
    MokaContainer: moka_editor_container["a" /* default */]
  },
  props: ['doc', 'coords', 'pos'],
  data: function data() {
    return {
      index: 0,
      position: null
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['moka', 'editor'])), {}, {
    zindex: function zindex() {
      return this.$attrs.level < 1 ? 'auto' : this.$attrs.level < 2 ? 1 : this.$attrs.level; //    this.$attrs.zi
    },
    root: function root() {
      return this.$attrs.top ? 0 : parseInt(this.$attrs.level);
    },
    side: function side() {
      return this.$attrs.flipside ? 'bg-red-500' : 'bg-lime-500';
    }
  }),
  methods: {
    moveUp: function moveUp(id) {
      var parent = jsonpath_default.a.parent(this.$attrs.component, '$..blocks[?(@.id=="' + id + '")]');
      if (parent.length === 1) return;
      var i;
      parent.forEach(function (p, index) {
        if (p.id === id) {
          i = index;
        }
      });

      if (i > 0) {
        var obj = Object.assign({}, this.doc);
        parent.splice(i, 1);
        parent.splice(i - 1, 0, this.doc);
      }
    },
    classe: function classe(css) {
      if (!css) return 'relative';
      var cl = css.hasOwnProperty('css') ? css.css + ' ' + css.container : css;
      cl.replace('z-', '');
      cl.indexOf('absolute') > -1 ? cl += ' absolute' : cl += ' relative';
      return cl.replace('modal', '');
    },
    setCurrent: function setCurrent(el) {
      var level = this.coords;
      level.push(this.$attrs.index);
      this.$store.dispatch('selected', el.id);
      this.$store.dispatch('setLevel', level);
      this.$store.dispatch('setCurrent', el);
      this.$emit('selected', el);
    },
    setCurrentElement: function setCurrentElement(el) {
      this.$store.dispatch('selected', el.id);
      this.$emit('selected', el);
    },
    arraySwap: function arraySwap(arr, from, to) {
      return arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
    },
    move: function move(flag) {
      var coord = [];
      coord = coord.concat(this.coords);
      coord.push(this.$attrs.index);
      var test = Object.assign({}, this.$attrs.component);
      var arr;
      !this.$attrs.top ? arr = test.blocks[coord[1]].blocks[0].blocks : arr = test.blocks;
      var source = arr[coord[coord.length - 1]];
      var pos = coord[coord.length - 1];

      if (flag) {
        if (pos > 0) {
          arr.splice(pos - 1, 0, source);
          arr.splice(pos + 1, 1);
        }
      } else {
        if (pos < arr.length - 1) {
          arr.splice(pos, 1, arr.splice(pos + 1, 1, arr[pos])[0]);
        }
      }

      !this.$attrs.top ? test.blocks[coord[1]].blocks[0].blocks = arr : test.blocks = arr;
      return;
    },

    /*
    blocksLen(obj,coord){
        let o = this.doc
        let len = 0
        coord.forEach ( index => {
            if ( o.hasOwnProperty ( 'blocks' ) ){
                o = o.blocks
                if ( o.length ) len = o.length
                o = getObj (o,index)
            }
        })
        return len
          function getObj(obj,index){
            return obj[index]
        }
    },
    */
    customize: function customize() {
      console.log('element customize');
      this.$emit('customize');
    },
    edit: function edit(block) {
      this.$store.dispatch('selected', block.id);
      this.$store.dispatch('current', block);
      this.$emit('selected', block);
      this.$emit('edit', block);
    },
    active: function active(id, doc) {
      if (!doc) return;
      var color = 'border-blue-500 ';
      doc && !doc.hasOwnProperty('type') ? color = 'border-red-500 ' : null;
      doc && doc.hasOwnProperty('slider') ? color = 'border-yellow-500 ' : null;
      doc && doc.hasOwnProperty('popup') ? color = 'border-teal-200 ' : null;
      doc.type === 'flex' ? doc.hasOwnProperty('popup') ? color = 'border-teal-200 border-2 ' : color = 'border-red-500 border-2 bg-gray-300 bg-opacity-25 ' : '';

      if (this.moka && this.moka.selected) {
        return this.moka.selected === id ? color + 'opacity-100 ' : color + 'opacity-0 hover:opacity-100';
      } else {
        return color + 'opacity-0 hover:opacity-100 ';
      }
    },
    stile: function stile(block, doc) {
      if (!block || !doc) return;
      var stile = '';

      if (block.hasOwnProperty('fontFamily')) {
        stile += 'font-family:\"' + block.fontFamily + '\"; ';
      }

      return block.hasOwnProperty('style') ? block.style + stile : stile;
    },
    background: function background(block) {
      if (!block) return;
      return block.hasOwnProperty('image') ? block.image && block.image.url ? this.setImageBackground(block.image) : '' : ''; //' background-image:url(' + block.image.previewUrl + ');background-size:cover;background-repeat:no-repeat;' + this.isSvg(block.image) :
      //    ' background-image:url(' + block.image.url + ');' : ''  : ''        
    },
    setImageBackground: function setImageBackground(image) {
      if (!image) return ''; //let theImg = image.hasOwnProperty('previewUrl')  && image.previewUrl ? image.previewUrl : image.url

      var response = ' background-image:url(' + this.$imageURL(image) + ')'; //theImg + ');'

      return response;
    }
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("keydown", function (e) {
      if (e.altKey && e.code === 'ArrowUp') {
        _this.editor.current && _this.editor.current.type === 'grid' ? _this.move(true) : null;
      }

      if (e.altKey && e.code === 'ArrowDown') {
        _this.editor.current && _this.editor.current.type === 'grid' ? _this.move(false) : null;
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/editor/render/moka.single.container.vue?vue&type=script&lang=js&
 /* harmony default export */ var render_moka_single_containervue_type_script_lang_js_ = (moka_single_containervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/editor/render/moka.single.container.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  render_moka_single_containervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moka_single_container = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "b195":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.container.vue?vue&type=template&id=4c38bb4b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.doc)?_c('div',{class:'p-2 fill-current ' + _vm.classe(_vm.doc.css),style:(_vm.doc.style + ' ' +  _vm.background(_vm.doc)),attrs:{"level":_vm.$attrs.level},on:{"dblclick":function($event){_vm.doc.blocks.length===0?_vm.$action('addcomponent'):null}}},[(_vm.doc.blocks && !_vm.doc.blocks.length && !_vm.doc.image)?_c('div',{staticClass:"text-xs"},[_vm._v("Dblclick here to add an element")]):_vm._e(),_vm._l((_vm.doc.blocks),function(block,b){return [(block && !block.hasOwnProperty('blocks') || ( block.hasOwnProperty('items') && !_vm.doc.hasOwnProperty('slider') && !block.hasOwnProperty('blocks_flip') && !block.hasOwnProperty('plugin') ))?_c('moka-element',{key:block.id,attrs:{"component":_vm.$attrs.component,"element":block,"coords":[b],"develop":true,"level":parseInt(_vm.$attrs.level)+1,"parent":[_vm.doc.blocks,b]},on:{"selected":function($event){_vm.setCurrent(block),_vm.$store.dispatch('setCurrent',block),_vm.$store.dispatch('selected',block.id)},"customize":_vm.customize,"copy":function($event){return _vm.$emit('copy')},"animation":function($event){return _vm.$emit('animations')},"delete":function($event){return _vm.$emit('delete')},"editinline":function($event){_vm.setCurrent(block),_vm.edit}}}):_vm._e(),(block && block.hasOwnProperty('blocks') && !block.hasOwnProperty('items')  && !block.hasOwnProperty('slider') && !block.hasOwnProperty('blocks_flip'))?_c('moka-container',{key:block.id,attrs:{"component":_vm.$attrs.component,"top":false,"root":_vm.$attrs.root||false,"coords":_vm.coords,"slide":_vm.$attrs.slide,"flipbox":_vm.doc.hasOwnProperty('blocks_flip')? true : false,"index":b,"level":parseInt(_vm.$attrs.level)+1,"zi":_vm.$attrs.zi + parseInt(_vm.$attrs.level),"doc":block},on:{"copy":function($event){return _vm.$emit('copy')}}}):_vm._e(),(block && block.hasOwnProperty('slider') && !block.hasOwnProperty('blocks_flip'))?_c('moka-slides-container',{key:block.id,attrs:{"component":_vm.$attrs.component,"top":false,"root":_vm.$attrs.root||false,"coords":_vm.coords,"slide":_vm.$attrs.slide,"index":b,"level":parseInt(_vm.$attrs.level)+1,"zi":_vm.$attrs.zi + parseInt(_vm.$attrs.level),"doc":block}}):_vm._e(),(block.hasOwnProperty('blocks_flip'))?_c('moka-editor-flipbox',{key:block.id,attrs:{"doc":block,"component":_vm.$attrs.component,"top":false,"root":_vm.$attrs.root||false,"coords":_vm.coords,"slide":_vm.$attrs.slide,"index":b,"level":parseInt(_vm.$attrs.level)+1,"zi":_vm.$attrs.zi + parseInt(_vm.$attrs.level)}}):_vm._e()]}),(_vm.doc && !_vm.doc.hasOwnProperty('items'))?_c('div',{class:'absolute transform border-2 border-dashed top-0 left-0 bottom-0 right-0 z-' + _vm.zindex + ' scale-x-' + (105-_vm.root) + ' ' + _vm.active(_vm.doc.id,_vm.doc),on:{"click":function($event){return _vm.setCurrent(_vm.doc)},"contextmenu":function($event){return _vm.$contextMenu($event,_vm.doc,'customize')}}},[(_vm.doc && _vm.doc.hasOwnProperty('loop') && _vm.doc.loop)?_c('span',{staticClass:"text-xs"},[_c('i',{staticClass:"material-icons"},[_vm._v("article")]),(!_vm.doc.hasOwnProperty('collection'))?_c('span',[_vm._v("Article Loop")]):_c('span',[_vm._v(_vm._s(_vm.doc.collection)+" Loop")])]):_vm._e(),(_vm.doc && _vm.doc.hasOwnProperty('blocks_flip'))?_c('span',{staticClass:"text-xs"},[_c('i',{staticClass:"material-icons"},[_vm._v("flip_camera_android")]),_vm._v(" Flipbox")]):_vm._e(),_c('div',{staticClass:"h-2 w-2 absolute top-0 right-0 bg-black rounded-full -m-1",on:{"click":function($event){return _vm.moveUp(_vm.doc.id)}}}),_c('div',{staticClass:"h-3 w-3 absolute top-0 left-0 bg-blue-500 rounded-full -m-2",attrs:{"title":"Dblclick to add an element"},on:{"dblclick":function($event){return _vm.$action('addcomponent')}}}),_c('div',{staticClass:"h-2 w-2 absolute bottom-0 right-0 bg-black rounded-full -m-1"}),_c('div',{staticClass:"h-2 w-2 absolute bottom-0 left-0 bg-black rounded-full -m-1"}),(_vm.doc.id===_vm.moka.selected)?_c('moka-floating-bar',{attrs:{"doc":_vm.doc},on:{"moveup":function($event){return _vm.moveUp(_vm.doc.id)}}}):_vm._e(),(_vm.doc && _vm.doc.hasOwnProperty('slider'))?_c('span',{staticClass:"px-4 py-1 rounded-xl text-sm bg-yellow-500"},[_vm._v("SLIDER")]):_vm._e(),(_vm.doc.type==='grid')?_c('div',{staticClass:"opacity-100 hover:opacity-100 border rounded-tl rounded-bl bg-gray-800 absolute left-0 top-0 -mx-5 text-black flex flex-col",staticStyle:{"top":"50%","transform":"translateY(-50%)"}},[_c('i',{staticClass:"material-icons hover:bg-blue-200 text-gray-200 hover:text-gray-700",on:{"click":function($event){return _vm.move(true)}}},[_vm._v("expand_less")]),_c('i',{staticClass:"material-icons hover:bg-blue-200 text-gray-200 hover:text-gray-700",on:{"click":function($event){return _vm.move(false)}}},[_vm._v("expand_more")])]):_vm._e()],1):_vm._e()],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.container.vue?vue&type=template&id=4c38bb4b&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./src/components/editor/render/moka.editor.element.vue + 15 modules
var moka_editor_element = __webpack_require__("3d48");

// EXTERNAL MODULE: ./src/components/editor/preview/moka.slider.vue + 24 modules
var moka_slider = __webpack_require__("a770");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.slides.vue?vue&type=template&id=4b3fd875&
var moka_editor_slidesvue_type_template_id_4b3fd875_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-top border bg-white",attrs:{"data":_vm.getSlider}},[_c('transition',{attrs:{"name":"fade"}},[(_vm.sliderTools && !_vm.$attrs.slide)?_c('div',{staticClass:"bg-gray-200 p-1 flex flex-row items-center"},[_vm._v(" SLIDER "),_c('i',{staticClass:"material-icons mx-2",attrs:{"title":"Slider settings"},on:{"click":function($event){_vm.$store.dispatch('setCurrent',_vm.doc),_vm.$action('slidersettings')}}},[_vm._v("settings")]),_c('button',{staticClass:"success",on:{"click":function($event){_vm.editor.saveAsReusable=_vm.doc,_vm.$action('saveasreusable')}}},[_vm._v("Save")]),_c('button',{staticClass:"danger",on:{"click":function($event){return _vm.$emit('remove')}}},[_vm._v("Remove")]),_c('div',{staticClass:"flex flex-row justify-end w-full"},[_c('button',{staticClass:"mx-2",on:{"click":function($event){return _vm.addSlide()}}},[_vm._v("Add slide")]),(!_vm.slideDelete && _vm.slideIndex > -1)?_c('button',{staticClass:"danger mx-2",on:{"click":function($event){_vm.slideDelete=!_vm.slideDelete}}},[_vm._v("Delete slide")]):_vm._e(),(_vm.slideDelete)?_c('button',{staticClass:"danger",on:{"click":function($event){_vm.doc.blocks.splice(_vm.slideIndex,1),_vm.slideIndex=0,_vm.slideDelete=!_vm.slideDelete}}},[_vm._v("Confirm to delete this slide?")]):_vm._e(),(_vm.currentSlide)?_c('button',{staticClass:"rounded-none mx-2",on:{"click":function($event){return _vm.$emit('duplicate')}}},[_vm._v("Duplicate")]):_vm._e()])]):_vm._e()]),(_vm.sliderTools)?_c('div',[_c('label',{staticClass:"text-sm"},[_vm._v("Slide title ")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.doc.blocks[_vm.slideIndex].name),expression:"doc.blocks[slideIndex].name"}],staticClass:"my-1",attrs:{"type":"text"},domProps:{"value":(_vm.doc.blocks[_vm.slideIndex].name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.doc.blocks[_vm.slideIndex], "name", $event.target.value)}}})]):_vm._e(),_c('div',{staticClass:"flex flex-row items-center"},[_c('div',{staticClass:"items-center bg-yellow-500 text-sm border rounded-tr rounded-tl px-2"},[_vm._v("Slider "),_c('i',{staticClass:"material-icons",on:{"click":function($event){_vm.sliderTools=!_vm.sliderTools}}},[_vm._v("build_circle")])]),_c('draggable',{staticClass:"flex flex-row text-sm",attrs:{"list":_vm.doc.blocks}},_vm._l((_vm.doc.blocks),function(slide,index){return _c('div',{class:'w-auto px-2 h-6 border justify-center items-center flex flex-col rounded-tr rounded-tl ' + _vm.slideSelected(index),on:{"click":function($event){_vm.slideDelete=false,_vm.currentSlide=slide,_vm.slideIndex=index,_vm.$store.dispatch('setCurrent',slide),_vm.$store.dispatch('selected',slide.id)}}},[_vm._v(" "+_vm._s('Slide ' + (index+1))+" ")])}),0)],1),_c('div',{class:_vm.doc.css + ' relative border-2 border-dashed p-4 text-black ',style:(_vm.stile(_vm.doc,true) + ' ' + _vm.background(_vm.doc)),attrs:{"id":"content"}},[_vm._l((_vm.doc.blocks),function(block,i){return [(_vm.slideIndex===i)?_c('moka-single-container',{key:block.id,attrs:{"doc":block,"component":_vm.doc,"level":"0","index":"0","slide":true,"top":true,"pos":[0,0],"coords":[0,0],"zi":"1"}}):_vm._e()]})],2)],1)}
var moka_editor_slidesvue_type_template_id_4b3fd875_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.slides.vue?vue&type=template&id=4b3fd875&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.single.slide.vue?vue&type=template&id=51306286&
var moka_editor_single_slidevue_type_template_id_51306286_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.doc)?_c('div',{class:'p-2 fill-current ' + _vm.classe(_vm.doc.css),style:(_vm.doc.style + ' ' +  _vm.background(_vm.doc)),attrs:{"level":_vm.$attrs.level},on:{"dblclick":function($event){_vm.doc.blocks.length===0?_vm.$action('addcomponent'):null}}},[(_vm.doc.blocks && !_vm.doc.blocks.length && !_vm.doc.image)?_c('div',{staticClass:"text-xs"},[_vm._v("Dblclick here to add an element")]):_vm._e(),_vm._l((_vm.doc.blocks),function(block,b){return [(block && !block.hasOwnProperty('blocks') || block.hasOwnProperty('items') && !_vm.doc.hasOwnProperty('slider'))?_c('moka-element',{key:block.id,attrs:{"component":_vm.$attrs.component,"element":block,"coords":[b],"develop":true,"level":parseInt(_vm.$attrs.level)+1,"parent":[_vm.doc.blocks,b]},on:{"selected":function($event){_vm.setCurrent(block),_vm.$store.dispatch('setCurrent',block),_vm.$store.dispatch('selected',block.id)},"customize":_vm.customize,"copy":function($event){return _vm.$emit('copy')},"animation":function($event){return _vm.$emit('animations')},"delete":function($event){return _vm.$emit('delete')},"editinline":function($event){_vm.setCurrent(block),_vm.edit}}}):_vm._e(),(block && block.hasOwnProperty('blocks') && !block.hasOwnProperty('blocks_flip'))?_c('moka-editor-single-slide',{key:block.id,attrs:{"component":_vm.$attrs.component,"top":false,"root":_vm.$attrs.root||false,"coords":_vm.coords,"slide":_vm.$attrs.slide,"index":b,"level":parseInt(_vm.$attrs.level)+1,"zi":_vm.$attrs.zi + parseInt(_vm.$attrs.level),"doc":block}}):_vm._e(),(block.hasOwnProperty('blocks_flip'))?_c('moka-editor-flipbox',{key:block.id,attrs:{"doc":block,"component":_vm.$attrs.component,"top":false,"root":_vm.$attrs.root||false,"coords":_vm.coords,"slide":_vm.$attrs.slide,"index":b,"level":parseInt(_vm.$attrs.level)+1,"zi":_vm.$attrs.zi + parseInt(_vm.$attrs.level)}}):_vm._e()]}),(_vm.doc && !_vm.doc.hasOwnProperty('items'))?_c('div',{class:'absolute transform border-2 border-dashed top-0 left-0 bottom-0 right-0 z-' + _vm.zindex + ' scale-x-' + (105-_vm.root) + ' ' + _vm.active(_vm.doc.id,_vm.doc),on:{"click":function($event){return _vm.setCurrent(_vm.doc)},"contextmenu":function($event){return _vm.$contextMenu($event,_vm.doc)}}},[_c('div',{staticClass:"h-2 w-2 absolute top-0 right-0 bg-black rounded-full -m-1",on:{"click":function($event){return _vm.moveUp(_vm.doc.id)}}}),_c('div',{staticClass:"h-3 w-3 absolute top-0 left-0 bg-blue-500 rounded-full -m-2",attrs:{"title":"Dblclick to add an element"},on:{"dblclick":function($event){return _vm.$action('addcomponent')}}}),_c('div',{class:'h-2 w-2 absolute bottom-0 right-0 bg-black rounded-full -m-1 ' + _vm.side}),_c('div',{staticClass:"h-2 w-2 absolute bottom-0 left-0 bg-black rounded-full -m-1"}),(_vm.doc.id===_vm.moka.selected)?_c('div',{staticClass:"z-2xtop absolute top-0 left-0 ml-4 p-1 -mt-6  h-6 w-auto bg-gray-800 text-gray-300 text-xs rounded-2xl items-center flex flex-row justify-around"},[_c('i',{staticClass:"transform scale-100 material-icons text-yellow-400 hover:text-red-500  text-sm mr-2",attrs:{"title":'Slide ' + _vm.index}},[_vm._v("collections")]),_c('i',{staticClass:"transform scale-100 material-icons text-base mr-2",attrs:{"title":"Move up"},on:{"click":function($event){return _vm.moveUp(_vm.doc.id)}}},[_vm._v("expand_less")]),(_vm.doc.type==='flex' || _vm.doc.type==='grid')?_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4",attrs:{"title":"Add element"},on:{"click":function($event){return _vm.$action('addcomponent')}}},[_vm._v("add")]):_vm._e(),(_vm.doc.tag==='form')?_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4",attrs:{"title":"Settings"},on:{"click":function($event){return _vm.$action('formsetting')}}},[_vm._v("settings")]):_vm._e(),_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4 ",attrs:{"title":"Customize"},on:{"click":function($event){return _vm.$action('customize')}}},[_vm._v("brush")]),(_vm.doc.type === 'flex' || _vm.doc.type==='grid')?_c('i',{staticClass:"material-icons text-gray-400 hover:text-blue-400 mr-2",attrs:{"title":"Add block"},on:{"click":function($event){return _vm.$action('addreusable')}}},[_vm._v("widgets")]):_vm._e(),_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4 ",attrs:{"title":"Delete"},on:{"click":function($event){return _vm.$action('delete')}}},[_vm._v("delete")])]):_vm._e(),(_vm.doc && _vm.doc.hasOwnProperty('slider'))?_c('span',{staticClass:"px-4 py-1 rounded-xl text-sm bg-yellow-500"},[_vm._v("SLIDER")]):_vm._e(),(_vm.doc.type==='grid')?_c('div',{staticClass:"opacity-100 hover:opacity-100 border rounded-tl rounded-bl bg-gray-800 absolute left-0 top-0 -mx-5 text-black flex flex-col",staticStyle:{"top":"50%","transform":"translateY(-50%)"}},[_c('i',{staticClass:"material-icons hover:bg-blue-200 text-gray-200 hover:text-gray-700",on:{"click":function($event){return _vm.move(true)}}},[_vm._v("expand_less")]),_c('i',{staticClass:"material-icons hover:bg-blue-200 text-gray-200 hover:text-gray-700",on:{"click":function($event){return _vm.move(false)}}},[_vm._v("expand_more")])]):_vm._e()]):_vm._e()],2):_vm._e()}
var moka_editor_single_slidevue_type_template_id_51306286_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.single.slide.vue?vue&type=template&id=51306286&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.flipbox.vue?vue&type=template&id=42777a00&
var moka_editor_flipboxvue_type_template_id_42777a00_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.doc)?_c('div',{class:'p-2 fill-current ' + _vm.classe(_vm.doc.css),style:(_vm.doc.style + ' ' +  _vm.background(_vm.doc)),attrs:{"level":_vm.$attrs.level},on:{"dblclick":function($event){_vm.doc.blocks.length===0?_vm.$action('addcomponent'):null}}},[(_vm.doc.blocks && !_vm.doc.blocks.length && !_vm.doc.image)?_c('div',{staticClass:"text-xs"},[_vm._v("Dblclick here to add an element")]):_vm._e(),_vm._l((_vm.doc.blocks),function(block,b){return [(_vm.index === b && block.hasOwnProperty('blocks'))?_c('moka-single-container',{key:block.id,attrs:{"doc":block,"component":_vm.$attrs.component,"top":false,"root":_vm.$attrs.root||false,"coords":_vm.coords,"flipside":b,"index":b,"level":parseInt(_vm.$attrs.level)+1,"zi":_vm.$attrs.zi + parseInt(_vm.$attrs.level)}}):_vm._e()]}),(_vm.doc && !_vm.doc.hasOwnProperty('items'))?_c('div',{class:'absolute transform border-2 border-dashed top-0 left-0 bottom-0 right-0 z-' + _vm.zindex + ' scale-x-' + (105-_vm.root) + ' ' + _vm.active(_vm.doc.id,_vm.doc),on:{"click":function($event){return _vm.setCurrent(_vm.doc)},"contextmenu":function($event){return _vm.$contextMenu($event,_vm.doc)}}},[(_vm.doc && _vm.doc.hasOwnProperty('loop') && _vm.doc.loop)?_c('span',{staticClass:"text-xs"},[_c('i',{staticClass:"material-icons"},[_vm._v("article")]),_vm._v(" Article Loop")]):_vm._e(),_c('div',{staticClass:"h-2 w-2 absolute top-0 right-0 bg-black rounded-full -m-1",on:{"click":function($event){return _vm.moveUp(_vm.doc.id)}}}),_c('div',{staticClass:"h-3 w-3 absolute top-0 left-0 bg-blue-500 rounded-full -m-2",attrs:{"title":"Dblclick to add an element"},on:{"dblclick":function($event){return _vm.$action('addcomponent')}}}),_c('div',{class:'h-2 w-2 absolute bottom-0 right-0 rounded-full -m-1 ' + _vm.side}),_c('div',{staticClass:"h-2 w-2 absolute bottom-0 left-0 bg-black rounded-full -m-1"}),(_vm.doc.id===_vm.moka.selected)?_c('div',{staticClass:"z-2xtop absolute top-0 left-0 ml-4 p-1 -mt-6  h-6 w-auto bg-gray-800 text-gray-300 text-xs rounded-2xl items-center flex flex-row justify-around"},[(_vm.doc.icon)?_c('i',{staticClass:"transform scale-100 material-icons text-purple-500 hover:text-red-500  text-sm mr-2"},[_vm._v(_vm._s(_vm.doc.icon))]):_vm._e(),(!_vm.doc.icon)?_c('i',{staticClass:"transform scale-100 material-icons text-lime-400 hover:text-red-500 text-sm mr-2"},[_vm._v("select_all")]):_vm._e(),_c('i',{staticClass:"transform scale-100 material-icons hover:text-blue-500 text-base mr-2",attrs:{"title":"Move up"},on:{"click":function($event){return _vm.moveUp(_vm.doc.id)}}},[_vm._v("expand_less")]),(_vm.doc.type==='flex' || _vm.doc.type==='grid')?_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4",attrs:{"title":"Add element"},on:{"click":function($event){return _vm.$action('addcomponent')}}},[_vm._v("add")]):_vm._e(),(_vm.doc.tag==='form')?_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4",attrs:{"title":"Settings"},on:{"click":function($event){return _vm.$action('formsetting')}}},[_vm._v("settings")]):_vm._e(),_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4 ",attrs:{"title":"Customize"},on:{"click":function($event){return _vm.$action('customize')}}},[_vm._v("brush")]),(_vm.doc.type === 'flex' || _vm.doc.type==='grid')?_c('i',{staticClass:"material-icons text-gray-400 hover:text-blue-400 mr-2",attrs:{"title":"Add block"},on:{"click":function($event){return _vm.$action('addreusable')}}},[_vm._v("widgets")]):_vm._e(),_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4 ",attrs:{"title":"Delete"},on:{"click":function($event){return _vm.$action('delete')}}},[_vm._v("delete")])]):_vm._e(),(_vm.doc && _vm.doc.hasOwnProperty('slider'))?_c('span',{staticClass:"px-4 py-1 rounded-xl text-sm bg-yellow-500"},[_vm._v("SLIDER")]):_vm._e(),(_vm.doc.type==='grid')?_c('div',{staticClass:"opacity-100 hover:opacity-100 border rounded-tl rounded-bl bg-gray-800 absolute left-0 top-0 -mx-5 text-black flex flex-col",staticStyle:{"top":"50%","transform":"translateY(-50%)"}},[_c('i',{staticClass:"material-icons hover:bg-blue-200 text-gray-200 hover:text-gray-700",on:{"click":function($event){return _vm.move(true)}}},[_vm._v("expand_less")]),_c('i',{staticClass:"material-icons hover:bg-blue-200 text-gray-200 hover:text-gray-700",on:{"click":function($event){return _vm.move(false)}}},[_vm._v("expand_more")])]):_vm._e()]):_vm._e(),_c('div',{staticClass:"absolute bottom-0 right-0 -mb-3 mr-1 text-xs"},[_c('span',{class:_vm.index?'text-red-400':'text-lime-400'},[_vm._v(_vm._s(_vm.index ? 'Backside' : 'Frontside'))])]),(_vm.doc.hasOwnProperty('blocks_flip') || (_vm.editor.current && _vm.editor.current.id === _vm.doc.id))?_c('div',{class:'opacity-0 hover:opacity-100 absolute left-0 bottom-0 mb-2 rounded-xl items-center flex text-sm z-top bg-gray-800 text-gray-300 px-2',on:{"click":function($event){_vm.index?_vm.index=0:_vm.index=1}}},[_c('i',{staticClass:"material-icons mr-2"},[_vm._v("flip_camera_android")]),_c('span',{class:_vm.index?'text-lime-400':'text-red-400'},[_vm._v(_vm._s(_vm.index ? 'Frontside' : 'Backside'))])]):_vm._e()],2):_vm._e()}
var moka_editor_flipboxvue_type_template_id_42777a00_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.flipbox.vue?vue&type=template&id=42777a00&

// EXTERNAL MODULE: ./src/components/editor/render/moka.single.container.vue + 4 modules
var moka_single_container = __webpack_require__("78d3");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/jsonpath/jsonpath.js
var jsonpath = __webpack_require__("52cd");
var jsonpath_default = /*#__PURE__*/__webpack_require__.n(jsonpath);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.flipbox.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var moka_editor_flipboxvue_type_script_lang_js_ = ({
  name: 'MokaEditorFlipbox',
  components: {
    MokaElement: moka_editor_element["a" /* default */],
    MokaSingleContainer: moka_single_container["a" /* default */]
  },
  props: ['doc', 'coords', 'pos'],
  data: function data() {
    return {
      index: 0,
      position: null
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['moka', 'editor'])), {}, {
    zindex: function zindex() {
      return this.$attrs.level < 1 ? 'auto' : this.$attrs.level < 2 ? 1 : this.$attrs.level; //    this.$attrs.zi
    },
    root: function root() {
      return this.$attrs.top ? 0 : parseInt(this.$attrs.level);
    },
    side: function side() {
      return this.index ? ' bg-red-500 ' : ' bg-lime-500 ';
    }
  }),
  methods: {
    moveUp: function moveUp(id) {
      var parent = jsonpath_default.a.parent(this.$attrs.component, '$..blocks[?(@.id=="' + id + '")]');
      if (parent.length === 1) return;
      var i;
      parent.forEach(function (p, index) {
        if (p.id === id) {
          i = index;
        }
      });

      if (i > 0) {
        var obj = Object.assign({}, this.doc);
        parent.splice(i, 1);
        parent.splice(i - 1, 0, this.doc);
      }
    },
    classe: function classe(css) {
      if (!css) return 'relative';
      var cl = css.hasOwnProperty('css') ? css.css + ' ' + css.container : css;
      cl.replace('z-', '');
      cl.indexOf('absolute') > -1 ? cl += ' absolute' : cl += ' relative';
      return cl.replace('modal', '');
    },
    setCurrent: function setCurrent(el) {
      var level = this.coords;
      level.push(this.$attrs.index);
      this.$store.dispatch('selected', el.id);
      this.$store.dispatch('setLevel', level);
      this.$store.dispatch('setCurrent', el);
      this.$emit('selected', el);
    },
    setCurrentElement: function setCurrentElement(el) {
      this.$store.dispatch('selected', el.id);
      this.$emit('selected', el);
    },
    arraySwap: function arraySwap(arr, from, to) {
      return arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
    },
    move: function move(flag) {
      var coord = [];
      coord = coord.concat(this.coords);
      coord.push(this.$attrs.index);
      var test = Object.assign({}, this.$attrs.component);
      var arr;
      !this.$attrs.top ? arr = test.blocks[coord[1]].blocks[0].blocks : arr = test.blocks;
      var source = arr[coord[coord.length - 1]];
      var pos = coord[coord.length - 1];

      if (flag) {
        if (pos > 0) {
          arr.splice(pos - 1, 0, source);
          arr.splice(pos + 1, 1);
        }
      } else {
        if (pos < arr.length - 1) {
          arr.splice(pos, 1, arr.splice(pos + 1, 1, arr[pos])[0]);
        }
      }

      !this.$attrs.top ? test.blocks[coord[1]].blocks[0].blocks = arr : test.blocks = arr;
      return;
    },
    customize: function customize() {
      this.$emit('customize');
    },
    edit: function edit(block) {
      this.$store.dispatch('selected', block.id);
      this.$store.dispatch('current', block);
      this.$emit('selected', block);
      this.$emit('edit', block);
    },
    active: function active(id, doc) {
      if (!doc) return;
      var color = ' border-purple-400 '; //doc && !doc.hasOwnProperty('type') ? color = 'border-red-500 ' : null
      //doc && doc.hasOwnProperty('slider') ? color = 'border-yellow-500 ' : null
      //doc && doc.hasOwnProperty('popup') ? color = 'border-teal-200 ' : null

      doc.type === 'flex' ? doc.hasOwnProperty('popup') ? color = 'border-teal-200 border-2 ' : color = color + ' border-2 bg-gray-300 bg-opacity-25 ' : '';

      if (this.editor && this.editor.current) {
        return this.editor.current.id === id ? color + 'opacity-100 ' : color + 'opacity-0 hover:opacity-100';
      } else {
        return color + 'opacity-0 hover:opacity-100 ';
      }
    },
    stile: function stile(block, doc) {
      if (!block || !doc) return;
      var stile = '';

      if (block.hasOwnProperty('fontFamily')) {
        stile += 'font-family:\"' + block.fontFamily + '\"; ';
      }

      return block.hasOwnProperty('style') ? block.style + stile : stile;
    },
    background: function background(block) {
      if (!block) return;
      return block.hasOwnProperty('image') ? block.image && block.image.url ? this.setImageBackground(block.image) : '' : ''; //' background-image:url(' + block.image.previewUrl + ');background-size:cover;background-repeat:no-repeat;' + this.isSvg(block.image) :
      //    ' background-image:url(' + block.image.url + ');' : ''  : ''        
    },
    setImageBackground: function setImageBackground(image) {
      if (!image) return ''; //let theImg = image.hasOwnProperty('previewUrl')  && image.previewUrl ? image.previewUrl : image.url

      var response = ' background-image:url(' + this.$imageURL(image) + ')'; //theImg + ');'

      return response;
    }
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("keydown", function (e) {
      if (e.altKey && e.code === 'ArrowUp') {
        _this.editor.current && _this.editor.current.type === 'grid' ? _this.move(true) : null;
      }

      if (e.altKey && e.code === 'ArrowDown') {
        _this.editor.current && _this.editor.current.type === 'grid' ? _this.move(false) : null;
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.flipbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var render_moka_editor_flipboxvue_type_script_lang_js_ = (moka_editor_flipboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.flipbox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  render_moka_editor_flipboxvue_type_script_lang_js_,
  moka_editor_flipboxvue_type_template_id_42777a00_render,
  moka_editor_flipboxvue_type_template_id_42777a00_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moka_editor_flipbox = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.single.slide.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import MokaContainer from '@/components/editor/render/moka.editor.container'




/* harmony default export */ var moka_editor_single_slidevue_type_script_lang_js_ = ({
  name: 'MokaEditorSingleSlide',
  components: {
    MokaElement: moka_editor_element["a" /* default */],
    MokaEditorFlipbox: moka_editor_flipbox
  },
  props: ['doc', 'coords', 'pos'],
  data: function data() {
    return {
      index: 0,
      position: null
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['moka', 'editor'])), {}, {
    zindex: function zindex() {
      return this.$attrs.level < 1 ? 'auto' : this.$attrs.level < 2 ? 1 : this.$attrs.level; //    this.$attrs.zi
    },
    root: function root() {
      return this.$attrs.top ? 0 : parseInt(this.$attrs.level);
    },
    side: function side() {
      return this.$attrs.flipside ? 'bg-red-500' : 'bg-lime-500';
    }
  }),
  methods: {
    moveUp: function moveUp(id) {
      var parent = jsonpath_default.a.parent(this.$attrs.component, '$..blocks[?(@.id=="' + id + '")]');
      if (parent.length === 1) return;
      var i;
      parent.forEach(function (p, index) {
        if (p.id === id) {
          i = index;
        }
      });

      if (i > 0) {
        var obj = Object.assign({}, this.doc);
        parent.splice(i, 1);
        parent.splice(i - 1, 0, this.doc);
      }
    },
    classe: function classe(css) {
      if (!css) return 'relative';
      var cl = css.hasOwnProperty('css') ? css.css + ' ' + css.container : css;
      cl.replace('z-', '');
      cl.indexOf('absolute') > -1 ? cl += ' absolute' : cl += ' relative';
      return cl.replace('modal', '');
    },
    setCurrent: function setCurrent(el) {
      var level = this.coords;
      level.push(this.$attrs.index);
      this.$store.dispatch('selected', el.id);
      this.$store.dispatch('setLevel', level);
      this.$store.dispatch('setCurrent', el);
      this.$emit('selected', el);
    },
    setCurrentElement: function setCurrentElement(el) {
      this.$store.dispatch('selected', el.id);
      this.$emit('selected', el);
    },
    arraySwap: function arraySwap(arr, from, to) {
      return arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
    },
    move: function move(flag) {
      var coord = [];
      coord = coord.concat(this.coords);
      coord.push(this.$attrs.index);
      var test = Object.assign({}, this.$attrs.component);
      var arr;
      !this.$attrs.top ? arr = test.blocks[coord[1]].blocks[0].blocks : arr = test.blocks;
      var source = arr[coord[coord.length - 1]];
      var pos = coord[coord.length - 1];

      if (flag) {
        if (pos > 0) {
          arr.splice(pos - 1, 0, source);
          arr.splice(pos + 1, 1);
        }
      } else {
        if (pos < arr.length - 1) {
          arr.splice(pos, 1, arr.splice(pos + 1, 1, arr[pos])[0]);
        }
      }

      !this.$attrs.top ? test.blocks[coord[1]].blocks[0].blocks = arr : test.blocks = arr;
      return;
    },
    customize: function customize() {
      this.$emit('customize');
    },
    edit: function edit(block) {
      this.$store.dispatch('selected', block.id);
      this.$store.dispatch('current', block);
      this.$emit('selected', block);
      this.$emit('edit', block);
    },
    active: function active(id, doc) {
      if (!doc) return;
      var color = 'border-blue-500 ';
      doc && !doc.hasOwnProperty('type') ? color = 'border-red-500 ' : null;
      doc && doc.hasOwnProperty('slider') ? color = 'border-yellow-500 ' : null;
      doc && doc.hasOwnProperty('popup') ? color = 'border-teal-200 ' : null;
      doc.type === 'flex' ? doc.hasOwnProperty('popup') ? color = 'border-teal-200 border-2 ' : color = 'border-red-500 border-2 bg-gray-300 bg-opacity-25 ' : '';

      if (this.moka && this.moka.selected) {
        return this.moka.selected === id ? color + 'opacity-100 ' : color + 'opacity-0 hover:opacity-100';
      } else {
        return color + 'opacity-0 hover:opacity-100 ';
      }
    },
    stile: function stile(block, doc) {
      if (!block || !doc) return;
      var stile = '';

      if (block.hasOwnProperty('fontFamily')) {
        stile += 'font-family:\"' + block.fontFamily + '\"; ';
      }

      return block.hasOwnProperty('style') ? block.style + stile : stile;
    },
    background: function background(block) {
      if (!block) return;
      return block.hasOwnProperty('image') ? block.image && block.image.url ? this.setImageBackground(block.image) : '' : ''; //' background-image:url(' + block.image.previewUrl + ');background-size:cover;background-repeat:no-repeat;' + this.isSvg(block.image) :
      //    ' background-image:url(' + block.image.url + ');' : ''  : ''        
    },
    setImageBackground: function setImageBackground(image) {
      if (!image) return ''; //let theImg = image.hasOwnProperty('previewUrl')  && image.previewUrl ? image.previewUrl : image.url

      var response = ' background-image:url(' + this.$imageURL(image) + ')'; //theImg + ');'

      return response;
    }
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("keydown", function (e) {
      if (e.altKey && e.code === 'ArrowUp') {
        _this.editor.current && _this.editor.current.type === 'grid' ? _this.move(true) : null;
      }

      if (e.altKey && e.code === 'ArrowDown') {
        _this.editor.current && _this.editor.current.type === 'grid' ? _this.move(false) : null;
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.single.slide.vue?vue&type=script&lang=js&
 /* harmony default export */ var render_moka_editor_single_slidevue_type_script_lang_js_ = (moka_editor_single_slidevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.single.slide.vue





/* normalize component */

var moka_editor_single_slide_component = Object(componentNormalizer["a" /* default */])(
  render_moka_editor_single_slidevue_type_script_lang_js_,
  moka_editor_single_slidevue_type_template_id_51306286_render,
  moka_editor_single_slidevue_type_template_id_51306286_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moka_editor_single_slide = (moka_editor_single_slide_component.exports);
// EXTERNAL MODULE: ./node_modules/vuedraggable/dist/vuedraggable.umd.js
var vuedraggable_umd = __webpack_require__("b76a");
var vuedraggable_umd_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_umd);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.slides.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var moka_editor_slidesvue_type_script_lang_js_ = ({
  name: 'MokaEditorSlides',
  components: {
    MokaSingleContainer: moka_editor_single_slide,
    draggable: vuedraggable_umd_default.a
  },
  props: ['doc'],
  data: function data() {
    return {
      sliderTools: false,
      currentSlide: 0,
      slideDelete: false,
      slideIndex: 0
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['editor'])), {}, {
    getSlider: function getSlider() {
      if (this.doc.hasOwnProperty('slider')) {
        this.currentSlide = this.doc.blocks[0];
      }

      return true;
    }
  }),
  methods: {
    addSlide: function addSlide() {
      this.doc.blocks.push(this.$grid(1));
    },
    slideSelected: function slideSelected(index) {
      return index === this.slideIndex ? 'bg-blue-400 text-white' : '';
    },
    stile: function stile() {
      return;
    },
    classe: function classe(css) {
      return;
    },
    background: function background(img) {
      return;
    }
  }
});
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.slides.vue?vue&type=script&lang=js&
 /* harmony default export */ var render_moka_editor_slidesvue_type_script_lang_js_ = (moka_editor_slidesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.slides.vue





/* normalize component */

var moka_editor_slides_component = Object(componentNormalizer["a" /* default */])(
  render_moka_editor_slidesvue_type_script_lang_js_,
  moka_editor_slidesvue_type_template_id_4b3fd875_render,
  moka_editor_slidesvue_type_template_id_4b3fd875_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moka_editor_slides = (moka_editor_slides_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3e4b0900-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.floating.bar.vue?vue&type=template&id=f8ebdd72&
var moka_editor_floating_barvue_type_template_id_f8ebdd72_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"z-highest absolute top-0 left-0 ml-2 p-1 -mt-4  h-6 w-auto bg-gray-800 text-gray-300 text-xs rounded-2xl items-center flex flex-row justify-around"},[(_vm.doc.icon)?_c('i',{staticClass:"transform scale-100 material-icons text-lime-400 hover:text-red-500  text-sm mr-2"},[_vm._v(_vm._s(_vm.doc.icon))]):_vm._e(),(!_vm.doc.icon)?_c('i',{staticClass:"transform scale-100 material-icons text-lime-400 hover:text-red-500 text-sm mr-2"},[_vm._v("select_all")]):_vm._e(),_c('i',{staticClass:"transform scale-100 material-icons hover:text-blue-500  text-base mr-2",attrs:{"title":"Move up"},on:{"click":function($event){return _vm.$emit('moveup')}}},[_vm._v("expand_less")]),(_vm.doc.hasOwnProperty('popup'))?_c('i',{staticClass:"transform scale-100 material-icons hover:text-blue-500  text-base mr-2",attrs:{"title":"Popup settings"},on:{"click":function($event){return _vm.$action('popupsettings')}}},[_vm._v("settings")]):_vm._e(),(_vm.doc.hasOwnProperty('plugin'))?_c('i',{staticClass:"transform scale-100 material-icons hover:text-blue-500  text-base mr-2",attrs:{"title":_vm.doc.label + ' settings'},on:{"click":function($event){return _vm.$action('pluginsettings')}}},[_vm._v("settings")]):_vm._e(),(_vm.doc.hasOwnProperty('collection'))?_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4",attrs:{"title":"Settings"},on:{"click":function($event){_vm.editor.action?_vm.$action():_vm.$action('loopcontrol')}}},[_vm._v("settings")]):_vm._e(),(_vm.doc.type==='flex' || _vm.doc.type==='grid')?_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4",attrs:{"title":"Add element"},on:{"click":function($event){return _vm.$action('addcomponent')}}},[_vm._v("add")]):_vm._e(),(_vm.doc.type==='plugin')?_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4",attrs:{"title":"Add element"},on:{"click":function($event){return _vm.$action('addcomponent')}}},[_vm._v("add")]):_vm._e(),(_vm.doc.tag==='form')?_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4",attrs:{"title":"Settings"},on:{"click":function($event){return _vm.$action('formsetting')}}},[_vm._v("settings")]):_vm._e(),_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4 ",attrs:{"title":"Customize"},on:{"click":function($event){return _vm.$action('customize')}}},[_vm._v("brush")]),(_vm.doc.type === 'flex' || _vm.doc.type==='grid')?_c('i',{staticClass:"material-icons text-gray-400 hover:text-blue-400 mr-2",attrs:{"title":"Add block"},on:{"click":function($event){return _vm.$action('addreusable')}}},[_vm._v("widgets")]):_vm._e(),_c('i',{staticClass:"mr-2 material-icons hover:text-blue-500 text-sm leading-4 ",attrs:{"title":"Delete"},on:{"click":function($event){return _vm.$action('delete')}}},[_vm._v("delete")])])}
var moka_editor_floating_barvue_type_template_id_f8ebdd72_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.floating.bar.vue?vue&type=template&id=f8ebdd72&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.floating.bar.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var moka_editor_floating_barvue_type_script_lang_js_ = ({
  name: 'MokaEditorFloatingBar',
  props: ['doc'],
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['editor'])),
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("keydown", function (e) {
      if (e.altKey && e.code === 'KeyM') {
        _this.$emit('moveup');
      }
    });
  }
});
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.floating.bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var render_moka_editor_floating_barvue_type_script_lang_js_ = (moka_editor_floating_barvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.floating.bar.vue





/* normalize component */

var moka_editor_floating_bar_component = Object(componentNormalizer["a" /* default */])(
  render_moka_editor_floating_barvue_type_script_lang_js_,
  moka_editor_floating_barvue_type_template_id_f8ebdd72_render,
  moka_editor_floating_barvue_type_template_id_f8ebdd72_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moka_editor_floating_bar = (moka_editor_floating_bar_component.exports);
// EXTERNAL MODULE: ./src/components/Plugins.Wrapper.vue + 9 modules
var Plugins_Wrapper = __webpack_require__("5323");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/render/moka.editor.container.vue?vue&type=script&lang=js&












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var moka_editor_containervue_type_script_lang_js_ = ({
  name: 'MokaContainer',
  components: {
    MokaElement: moka_editor_element["a" /* default */],
    MokaSlider: moka_slider["a" /* default */],
    MokaEditorSlides: moka_editor_slides,
    MokaEditorFlipbox: moka_editor_flipbox,
    MokaSlidesContainer: moka_editor_slides,
    MokaFloatingBar: moka_editor_floating_bar,
    MokaPluginsWrapper: Plugins_Wrapper["a" /* default */]
  },
  props: ['doc', 'coords', 'pos'],
  data: function data() {
    return {
      index: 0,
      position: null,
      view3D: false
    };
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapState */])(['moka', 'editor'])), {}, {
    zindex: function zindex() {
      return this.$attrs.level < 1 ? 'auto' : this.$attrs.level < 2 ? 1 : this.$attrs.level; //    this.$attrs.zi
    },
    root: function root() {
      return this.$attrs.top ? 0 : parseInt(this.$attrs.level);
    }
  }),
  methods: {
    moveUp: function moveUp(id) {
      var parent = jsonpath_default.a.parent(this.$attrs.component, '$..blocks[?(@.id=="' + id + '")]');
      console.log(parent, id);
      if (parent.length === 1) return;
      var i;
      parent.forEach(function (p, index) {
        if (p.id === id) {
          i = index;
        }
      });

      if (i > 0) {
        var obj = Object.assign({}, this.doc);
        parent.splice(i, 1);
        parent.splice(i - 1, 0, this.doc);
      }
    },
    classe: function classe(css) {
      if (!css) return 'relative';
      var cl = css.hasOwnProperty('css') ? css.css + ' ' + css.container : css;
      cl.replace('z-', '');
      cl.indexOf('absolute') > -1 ? cl += ' absolute' : cl += ' relative';
      return cl.replace('modal', '').replace('hidden', '');
    },
    setCurrent: function setCurrent(el) {
      var level = this.coords;
      level.push(this.$attrs.index);
      this.$store.dispatch('selected', el.id);
      this.$store.dispatch('setLevel', level);
      this.$store.dispatch('setCurrent', el);
      this.$emit('selected', el);
    },
    setCurrentElement: function setCurrentElement(el) {
      this.$store.dispatch('selected', el.id);
      this.$emit('selected', el);
    },
    arraySwap: function arraySwap(arr, from, to) {
      return arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
    },
    move: function move(flag) {
      var coord = [];
      coord = coord.concat(this.coords);
      coord.push(this.$attrs.index);
      var test = Object.assign({}, this.$attrs.component);
      var arr;
      !this.$attrs.top ? arr = test.blocks[coord[1]].blocks[0].blocks : arr = test.blocks;
      var source = arr[coord[coord.length - 1]];
      var pos = coord[coord.length - 1];

      if (flag) {
        if (pos > 0) {
          arr.splice(pos - 1, 0, source);
          arr.splice(pos + 1, 1);
        }
      } else {
        if (pos < arr.length - 1) {
          arr.splice(pos, 1, arr.splice(pos + 1, 1, arr[pos])[0]);
        }
      }

      !this.$attrs.top ? test.blocks[coord[1]].blocks[0].blocks = arr : test.blocks = arr;
      return;
    },

    /*
    blocksLen(obj,coord){
        let o = this.doc
        let len = 0
        coord.forEach ( index => {
            if ( o.hasOwnProperty ( 'blocks' ) ){
                o = o.blocks
                if ( o.length ) len = o.length
                o = getObj (o,index)
            }
        })
        return len
          function getObj(obj,index){
            return obj[index]
        }
    },
    */
    customize: function customize() {
      console.log('element customize');
      this.$emit('customize');
    },
    edit: function edit(block) {
      this.$store.dispatch('selected', block.id);
      this.$store.dispatch('current', block);
      this.$emit('selected', block);
      this.$emit('edit', block);
    },
    active: function active(id, doc) {
      if (!doc) return;

      if (!this.view3D) {//this.doc.style = this.doc.style.replace('transform:','')
      }

      var color = 'border-blue-500 ';
      doc && !doc.hasOwnProperty('type') ? color = 'border-red-500 ' : null;
      doc && doc.hasOwnProperty('slider') ? color = 'border-yellow-500 ' : null;
      doc && doc.hasOwnProperty('popup') ? color = 'border-teal-200 ' : null;
      doc && doc.hasOwnProperty('plugin') ? color = 'border-orange-600 ' : null;
      doc.type === 'flex' ? doc.hasOwnProperty('popup') ? color = 'border-teal-200 border-2 ' : color = 'border-red-500 border-2 bg-gray-300 bg-opacity-25 ' : '';

      if (this.moka && this.moka.selected) {
        return this.moka.selected === id ? color + 'opacity-100 ' : color + 'opacity-0 hover:opacity-100';
      } else {
        return color + 'opacity-0 hover:opacity-100 ';
      }
    },
    stile: function stile(block, doc) {
      if (!block || !doc) return;
      var stile = '';

      if (block.hasOwnProperty('fontFamily')) {
        stile += 'font-family:\"' + block.fontFamily + '\"; ';
      }

      return block.hasOwnProperty('style') ? block.style + stile : stile;
    },
    background: function background(block) {
      if (!block) return;
      return block.hasOwnProperty('image') ? block.image && block.image.url ? this.setImageBackground(block.image) : '' : ''; //' background-image:url(' + block.image.previewUrl + ');background-size:cover;background-repeat:no-repeat;' + this.isSvg(block.image) :
      //    ' background-image:url(' + block.image.url + ');' : ''  : ''        
    },
    setImageBackground: function setImageBackground(image) {
      if (!image) return ''; //let theImg = image.hasOwnProperty('previewUrl')  && image.previewUrl ? image.previewUrl : image.url

      var response = ' background-image:url(' + this.$imageURL(image) + ')'; //theImg + ');'

      return response;
    },
    pluginComponent: function pluginComponent(block) {
      if (block.plugin) {
        console.log(block);

        if (typeof block.plugin === 'string') {
          var name = block.plugin + '.editor';
          console.log('@/components/plugins/' + name);
          return MokaTest;
          var component = __webpack_require__("cd88")("./" + name);
          return component ? component : false; //return component
        }
      }

      return false;
    }
  },
  mounted: function mounted() {
    /*
    window.addEventListener("keydown", e => {
        
        if ( e.altKey && e.code === 'ArrowDown' ){
            this.editor.current && this.editor.current.type === 'grid' ?
                this.move(false) :
                    null
        }
    })
    */
  }
});
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.container.vue?vue&type=script&lang=js&
 /* harmony default export */ var render_moka_editor_containervue_type_script_lang_js_ = (moka_editor_containervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/editor/render/moka.editor.container.vue





/* normalize component */

var moka_editor_container_component = Object(componentNormalizer["a" /* default */])(
  render_moka_editor_containervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var moka_editor_container = __webpack_exports__["a"] = (moka_editor_container_component.exports);

/***/ }),

/***/ "bfd4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dcbe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moka_text_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bfd4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moka_text_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_moka_text_editor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);