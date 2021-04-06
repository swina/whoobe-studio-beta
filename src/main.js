import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/tailwind.css'
import '@/assets/fonts/fonts.css'

import './plugins'
import api from "./plugins/api";

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

window.localStorage.setItem('moka-strapiurl','http://localhost:3030/')

import WhoobeStore from './components/plugins/store/nuxpresso/custom'
Vue.customElement ( 'whoobe-store' , WhoobeStore )

//import MokaPluginWrapper from '@/components/Plugins.Wrapper'
//Vue.component('moka-plugins-wrapper',MokaPluginWrapper)

import VueUploadComponent from 'vue-upload-component'
Vue.component('file-upload', VueUploadComponent)

import LoadingSpinner from '@/components/loading'
Vue.component('moka-loading',LoadingSpinner)

import MokaModal from '@/components/modal'
Vue.component ( 'moka-modal' , MokaModal )

api.defaults.timeout = 10000;
Vue.prototype.$http = api 

import VueBlobJsonCsv from 'vue-blob-json-csv'
Vue.use(VueBlobJsonCsv)


import VueDraggableResizable from 'vue-draggable-resizable'
// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)



import MokaMedia from '@/components/media/media'
Vue.component('MokaMedia', MokaMedia )

import MokaMediaCloudinary from '@/components/plugins/cloudinary/cloudinary.widget'
Vue.component ( 'MokaCloudinary' , MokaMediaCloudinary)

import VueHtml2Canvas from "vue-html2canvas";
Vue.use(VueHtml2Canvas);

import {SimpleSVG} from 'vue-simple-svg'
Vue.component('simple-svg', SimpleSVG)

import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';
Vue.use ( VueFileAgent )
//import './registerServiceWorker'

console.log ( 'Using Whoobe-CMS => ' , window.localStorage.getItem ( 'moka-strapiurl') || process.env.VUE_APP_API_URL )

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
