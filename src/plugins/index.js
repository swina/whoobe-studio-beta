import Vue from 'vue'
import api from './feathers.js'
import utils from './utils.js'
import editor from './editor.js'
import classes from './tw.classes.js'
import animator from './gsap.js'
import components from './components'

Vue.use(api)
Vue.use(utils)
Vue.use(animator)
Vue.use(editor)
Vue.use(classes)
Vue.use(components)