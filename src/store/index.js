import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import moka from './modules/components'
import editor from './modules/editor'
import desktop from './modules/desktop'
import user from './modules/user'
import themes from './modules/themes'
import datastore from './modules/datastore'

Vue.use(Vuex)
export default new Vuex.Store({
  getters: getters,
  modules: {
    moka,
    editor,
    desktop,
    user,
    themes, 
    datastore
  }
})
