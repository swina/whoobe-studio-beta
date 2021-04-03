<template>
  <div class="bg-gray-400 min-h-screen h-screen flex flex-col justify-center items-center">
    <div class="m-auto w-64">
       
      <div class="m-auto text-center font-thin" @click="$router.push('desktop')">
        <img src="../assets/whoobe-logo-2-colors.svg" class="w-64 grayscale m-auto"/>
        <div class="text-gray-700 text-sm -mt-4w-64 text-right font-hairline">S T U D I O</div>
      </div>
      <div v-if="firstRun" class="text-sm text-gray-500 my-4 border p-2 border-gray-600 rounded">
        <p>Welcome to MOKAStudio</p>
        <p>Looks like this the first time you are running MOKAStudio.</p>
        <p>A user is needed in order to work with MOKAStudio.</p>
      </div>
      <div class="flex flex-row m-auto justify-around">
        <div v-if="!firstRun">
          <!--<div class="m-auto"><button class="w-24" @click="$router.push('dashboard')">Guest</button></div>-->
          <!--<div class="m-auto" v-if="!logged && !loginOK">
            <button class="w-24" @click="showLogin=!showLogin">Login</button>
          </div>-->
        </div>
        <div class="m-auto" v-if="firstRun"><button class="w-24" @click="createUser">Create user</button></div>
      </div>
      
      <div class="flex flex-col w-full text-sm text-gray-500" v-if="showLogin">
        <label>User</label>
        <input type="email" v-model="email" class="w-full dark"/>
        <label>Password</label>
        <input type="password" v-model="password" class="w-full dark"/>
        <button class="mt-2" @click="login">Login</button>
      </div>
    </div>
    <div class="absolute bottom-0 right-0 m-3 text-gray-500 flex flex-row items-center" @click="$router.push('/desktop')">
      <i class="material-icons text-gray-500 mr-2" v-if="logged">lock</i>
      <span class="text-sm" v-if="user && user.user && user.user.username">User: {{ user.user.username }}</span>
      <span class="text-sm" v-else>User: Guest</span>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  name: 'Main',
  components: {
  },
  data:()=>({
    showLogin: false,
    email: '',
    password: '',
    loginOK: false,
    firstRun: false
  }),
  computed:{
    ...mapState ( [ 'moka' , 'user'] ),
    logged(){
      if ( process.env.NODE_ENV === 'development' ) {
        this.user.login = true
        return true
      }
      if ( !this.user.login || !window.localStorage.getItem('nuxpresso-jwt') ){
        this.user.login = false
        return false
      } else {
        return true
      }
    }

  },
 
  beforeMount(){
    let vm = this
    this.$http.get ( 'elements' ).then ( res => {
      let dataset = {
        table: 'elements',
        data: res.data.data
      }
      this.$store.dispatch( 'dataset' , dataset )
    })
    if ( process.env.NODE_ENV === 'development' && process.env.VUE_APP_LOCAL ) {
      let user = {
        "id":4,
        "username":"moka",
        "email":"moka@moka.test",
        "provider":"local",
        "confirmed":true,
        "blocked":null,
        "role":{
          "id":1,
          "name":"Authenticated",
          "description":
          "Default role given to authenticated user.",
          "type":"authenticated"
        },
        "created_at":"2021-01-16T17:06:41.814Z",
        "updated_at":"2021-01-16T17:06:41.832Z"
      }
      vm.$store.dispatch('login',true)
      vm.$store.dispatch('user',user)
      vm.loginOK = true
      vm.firstRun = false
      return
    }
    if ( !this.user.login || !window.localStorage.getItem('nuxpresso-jwt') ){
      if ( process.env.NODE_ENV === 'development' ){
        this.$http.post('auth/local' , {
          identifier: process.env.VUE_APP_DEV_USER,
          password: process.env.VUE_APP_DEV_PASSWORD
        }).then ( response => {
          let authenticated = {
              user : response.data.user,
              jwt : response.data.jwt
          }
          vm.$store.dispatch('login',true)
          vm.$store.dispatch('user',response.data.user)
          vm.loginOK = true
          vm.firstRun = false
          //vm.$store.dispatch ( 'authenticatedUser' , authenticated )
          //vm.$axios.defaults.headers.common = {'Authorization': 'Bearer ' + response.jwt};
          window.localStorage.setItem ( 'nuxpresso-jwt' , "Bearer " + response.data.jwt )
          window.localStorage.setItem ( 'nuxpresso-user' , JSON.stringify(response.data.user) )
          vm.viewForm = false
          vm.enabled = true
          vm.responseClass = 'text-green-500'
          vm.response = 'Welcome ! You are authenticated'
        }).catch ( error => {
          this.firstRun = true
          this.user.login = false
        })
      } else {
        this.firstRun = false
        this.user.login = false
      }  
    }
  },
  methods:{
    createUser(){
      
        this.$http.post('auth/local/register' , {
          username: process.env.VUE_APP_DEV_USER,
          password: process.env.VUE_APP_DEV_PASSWORD,
          email: process.env.VUE_APP_DEV_EMAIL,
          firstname: 'nuxpresso',
          lastname: 'moka'
        }).then ( response => {
          console.log ( response )
        })
    },
    login(){
      let vm = this
      this.$http.post(
          'auth/local', {
          identifier: process.env.VUE_APP_DEV_USER,//this.email,
          password: process.env.VUE_APP_DEV_PASSWORD,
      })
      .then(response => {
          // Handle success.
          console.log ( response )
          let authenticated = {
              user : response.data.user,
              jwt : response.data.jwt
          }
          vm.$store.dispatch('login',true)
          vm.$store.dispatch('user',response.data.user)
          vm.loginOK = true
          //vm.$store.dispatch ( 'authenticatedUser' , authenticated )
          //vm.$axios.defaults.headers.common = {'Authorization': 'Bearer ' + response.jwt};
          window.localStorage.setItem ( 'nuxpresso-jwt' , "Bearer " + response.data.jwt )
          window.localStorage.setItem ( 'nuxpresso-user' , JSON.stringify(response.data.user) )
          vm.viewForm = false
          vm.enabled = true
          vm.responseClass = 'text-green-500'
          vm.response = 'Welcome ! You are authenticated'
      })
      .catch(error => {
          console.log ( error )
          vm.response = 'Login error. Please retry later'
          vm.responseClass = 'text-red-500'
          
      }); 
    }
  },
  
}
</script>
<style>
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
            background:rgb(45, 45, 72);
        }
        50% {
            opacity: .5;
            background:rgb(5, 223, 23);
        }
    }
</style>