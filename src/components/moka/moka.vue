<template>
    <div editor-container class="w-screen relative" :init="loadComponent" :key="$randomID()">
        <div class="w-full" v-if="!preview">
            <whoobe-editor v-if="component" 
                :id="$randomID()"
                :key="$randomID()"
                :component="component" 
                :blocks="$attrs.blocks ? $attrs.blocks : component.json" 
                @save="save"  
                @savecopy="saveAsNew=!saveAsNew" 
                @preview="preview=!preview" 
                @saveasreusable="saveAsReusable"
                @createpage="createPage"/>

            <!--<moka-editor v-if="component" 

                :component="component" 
                :blocks="$attrs.blocks ? $attrs.blocks : component.json" 
                @save="save"  
                @savecopy="saveAsNew=!saveAsNew" 
                @preview="preview=!preview" 
                @saveasreusable="saveAsReusable"
                @createpage="createPage"/>-->
        </div>

        
        <transition name="fade">
        <div v-if="saveAsNew" class="nuxpresso-modal rounded w-full md:w-1/4 p-2 flex flex-col bg-white z-2xtop border-t-8 border-gray-700">
            <i class="material-icons absolute top-0 right-0 cursor-pointer" @click="saveAsNew=!saveAsNew">close</i>
            <h4>Duplicate</h4>
            <div class="flex flex-col bg-gray-300 p-2 rounded">
                <label>Name*</label>
                <input class="w-full" type="text" v-model="newComponent.name"/>
                <label>Category</label>
                <select class="w-full" v-model="newComponent.category">
                    <option v-for="category in $categories()">{{ category }}</option>
                    
                </select>
                <label>Description</label>
                <textarea class="w-full" v-model="newComponent.description"/>
                <button @click="saveNewComponent" class="my-2">Save</button>
            </div>
        </div>
    </transition>
    <transition name="fade">
        <div v-if="preview" class="fixed top-0 left-0 h-screen m-auto w-screen z-max bg-white border shadow overflow-x-hidden overflow-y-auto">
            <moka-preview v-if="component" :category="component.category" :blocks="component.json.blocks" @close="preview=!preview" @save="savePrint"/>
        </div>
    </transition>
        <!--<div class="fixed top-0 bg-black bg-opacity-50 left-0 z-max h-screen w-screen flex flex-col justify-center items-center" v-if="loading">
            <div class="flex  lds-ring" v-if="loading || moka.loading"><div></div><div></div><div></div><div></div></div>
        </div>-->
    </div>
</template>

<script>
//import MokaEditor from '@/components/editor/render/moka.editor.main'
import WhoobeEditor from './editor/whoobe.editor'
import MokaPreview from '@/components/editor/preview/moka.preview'
import { mapState } from 'vuex'
export default {
    name: 'WhoobeMain',
    //components: { MokaEditor, MokaPreview  },
    components: { WhoobeEditor , MokaPreview },
    data:()=>({
        loaded: false,
        loading: false,
        component: null,
        preview: false,
        highlight: false,
        message: '',
        saveAsNew: false,
        newComponent: {
            name: 'A new component',
            description: 'A new component created with Moka',
            category: 'component'
        },
    }),
    computed: {
        ...mapState ( ['moka','editor'] ),
        loadComponent(){
            console.log ( this.$mapState().desktop.currentTab )
            if ( parseInt(this.$attrs.tab) === parseInt(this.$mapState().desktop.currentTab) && !this.loaded ){
                this.component = this.$attrs.blocks
                this.$store.dispatch ( 'setComponent' , this.component )
                console.log ( this.editor.component.name )
                this.loaded = true
            }
            return true
        },
        devMode(){
             if ( typeof webpackHotUpdate === 'undefined' ) {
                 
                 return true //false
             }
             return true
        },
    },
    mounted(){
        this.$mapState().editor.component = this.$attrs.blocks
        //this.$store.getters.component
        //if ( process.env.NODE_ENV === 'development' ){
        //    this.$http.defaults.headers.common = {
        //        'Authorization': window.localStorage.getItem('nuxpresso-jwt')
        //    }
        //}
        //this.$http.get('upload/files').then ( response => {
        //    this.$store.dispatch ( 'loadMedia' , response.data )
        //})
    },
    methods: {
        async templateArticles(){
            return null
        },
        save(){
            let st = new Date()
            let time = st.getTime()
            window.localStorage.setItem ( 'moka-save' , time )
            this.loading = true
            this.component.loop ?
                this.templateArticles().then ( resp => {
                    this.component.autosave = resp
                    this.saveMe()
                }) : this.saveMe()
        },
        saveMe(){   
            if ( this.editor.save ){
                this.$action ( 'savecomponent' )
            } else {
                this.$message ( 'Save is disabled! You are using an invalid license!')
            }
        },
        saveAsReusable(component){
            this.loading = true
            //this.$http.post ( 'components' , component ).then ( result => {
            this.$api.service ( 'components' ).create ( component ).then ( result => {
            //this.$store.dispatch('loadComponents')
                this.$message('New reusable component saved')
                this.loading = false
            }).catch ( error => {
                this.$message('An error occured. Check you console log.')
                console.log ( error )
                this.loading = false
            })
            return null
        },
        savePrint(screenshot){
            
            this.component.image_uri = screenshot
            this.save()
        },
        saveNewComponent(){
            this.loading = true
            let newComponent = Object.assign({},this.component)
            newComponent.name = this.newComponent.name
            newComponent.description = this.newComponent.description
            newComponent.category = this.newComponent.category
            //this.$http.post ( 'components' , newComponent ).then ( response => {
            this.$api.service ( 'components' ).create ( newComponent ).then ( result => {
                this.message = 'Component created'
                this.$message( this.message )
                //this.$store.dispatch ( 'loadComponents' )
                this.loading = false
                this.saveAsNew = false
            }).catch ( error => {
                this.$message('An error occured. Check you console log.')
                console.log ( error )
                this.loading = false
                this.saveAsNew = false
            })
            return null
        },
        createPage(page){
            page.SEO = {
                title : page.title,
                description: page.title + ' is another page'
            }
            //this.$http.post ( 'articles' , page ).then ( result => {
                this.$api.service ( 'articles' ).create ( page => { 
                this.$message ( 'The new article ' + page.title + ' has been created')
            }).catch ( error => {
                this.$message ('An error occured. Please check your console log')
                console.log ( error )
            })
        }

    }
}
</script>