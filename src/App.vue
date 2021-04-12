<template>
  <div id="app">
    
    <router-view/>
    <!-- Global message display -->
    <transition name="fade">
        <div style="transform: translateX(-50%);left:50%;" class="border-l-4 border-blue-500 fixed bottom-0 m-auto shadow-xl mb-2 bg-gray-800 text-gray-200 text-left p-4 w-1/2  z-highest" v-if="message">   
        {{ message }}
        </div>
    </transition>
    <moka-loading v-if="moka.loading"/>

    <whoobe-actions></whoobe-actions>

    <moka-cloudinary :data="iscloudinary" class="mx-2" v-if="editor.action==='cloudinary'" :config="cloudinary.config" @cloudinary="$action('cloudinaryImage')"/>
    <!--<moka-modal v-if="editor.action && components.hasOwnProperty(editor.action)" @close="$action()">
      <component :is="component" :component="component"/>
    </moka-modal>-->
    <!--<i class="material-icons snipcart-checkout">shopping_bag</i>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VuexPersistence from 'vuex-persist'
import __components from './plugins/components'
import WhoobeActions from '@/components/moka/editor/whoobe.editor.actions'
//import SnipCart from './plugins/test' /**TEST FOR EXTERNAL SCRIPT**/

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default {
  name: 'App',
  components: { WhoobeActions },
  data:()=>({
    message: '',
    firstRun: false,
    cloudinary: null
  }),
  computed:{
    ...mapState ( ['moka','editor','datastore'] ),
    iscloudinary(){
      this.datastore.dataset.plugins ? 
            this.cloudinary = this.datastore.dataset.plugins[0].plugins.filter ( plugin => {
                return plugin.component === 'cloudinary/cloudinary.widget'
            })[0] : null
      return true
    },
    components(){
      return __components
    }
  },
  watch: {
    //when a new message diplay 
    '$store.state.moka.message':function(msg){
      this.setMessage ( msg )
    },
    
    message(v){
        //display message, if null or empty close 
        if ( v ){
            window.setTimeout(()=>{ 
              this.message = ''
              this.$store.dispatch('message','') 
            }, 4000)
        }
    },
  },
  methods: {
    setMessage(msg){
      this.message = msg
    },
    component(){
      let component_path = this.components.actions[this.editor.action].component
      console.log ( '@/components/' + component_path )
      return null
      return () => import ( '@/components/' + component_path )
    }
  },
  beforeMount(){
    this.$api.service('workspace').find().then ( result => {
      this.workspace = result 
      this.$store.dispatch ( 'workspace' , result )
    })
    //this.$find('elements')

    this.$find('settings')
    this.$find('media')
    this.$find('plugins') 
    this.$find('setup')
    this.$api.service('elements').find().then ( result => {
      this.$store.dispatch ( 'dataset' , { table: 'elements' , data: result.data })
    })

    this.$api.service('articles').find ( 
      { 
        query : 
        {
          $select : ['_id', 'title' , 'slug' ] 
        }
      }
    ).then ( result => {
      this.$store.dispatch ( 'dataset' , { table: 'articles' , data: result.data })
    })
    this.$api.service('components').find ( 
      { 
        query : 
        {
          $limit : 100,
          $skip: 0,
          $select : ['_id', 'name' , 'category' , 'image' , 'image_uri' , 'blocks_id' ] 
        }
      }
    ).then ( result => {
      this.$store.dispatch ( 'dataset' , { table: 'components' , data: result.data })
    })
  },
  mounted(){
    /**
     * !test for external script 
     * var sc = new SnipCart ( 'YjMzMzgxZDQtNzJhNi00YjQwLWFlNjMtYzQzZDk0MWRlNThjNjM3NDk4Mzk1Mjg2MzM2NDg1' )
     * */
    if ( process.env.VUE_APP_LOCAL ) {
      // local development Strapi on localhost
      if ( window.localStorage.getItem('nuxpresso-jwt') ){
        window.localStorage.removeItem('nuxpresso-jwt')
        window.localStorage.removeItem('nuxpresso-user')
        return
      }
    }
    // Strapi not local authentication
    if ( window.localStorage.getItem('nuxpresso-jwt') ){
      this.$http.defaults.headers.common = {
          'Authorization': window.localStorage.getItem('nuxpresso-jwt')
      }
      this.$http.get('users/me').then ( resp => {
        this.$message ( 'Welcome back ' + resp.data.username )
        this.$store.dispatch('login',true)
        this.$store.dispatch('user',JSON.parse(JSON.stringify(window.localStorage.getItem('nuxpresso-user'))))   
      }).catch ( error => {
        this.firstRun = true
        console.log ( error )
      })
      this.$store.dispatch('loadElements')
    }
  }
}
</script>

<style>

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #739eb0;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ::-webkit-scrollbar-track {
    background: #ededed;
    border: 0px none #ffffff;
    border-radius: 40px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #ebebeb;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
</style>