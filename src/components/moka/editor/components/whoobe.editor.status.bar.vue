<template>
    <div class="fixed bottom-0 left-0 ml-10 w-full bg-gray-800 flex flex-row items-center h-10 text-gray-300 p-1 z-highest flex flex-row items-center justify-around ">
        <div class="lg:w-1/3 w-1/2 flex justify-around flex-row items-center border-r">
        
        <i class="material-icons text-orange-400 mx-2" title="Options" 
        @click="docOptions=!docOptions">more_vert</i>
        
        <!-- <i class="material-icons text-orange-400" title="Document">description</i> -->


        <!-- CLEAR SELECTION -->
        <i class="material-icons moka-icons nuxpresso-icon-circle text-gray-300 ml-2" @click="$store.dispatch('setCurrent',doc),$store.dispatch('selected',doc.id)"
title="Select document">border_clear</i>


        <!-- ADD EMPTY BLOCK (GRID) -->
        <i v-if="editor.current && editor.current.tag==='document'" class="material-icons moka-icons nuxpresso-icon-circle text-gray-300 ml-2" @click="$action('grids')" title="Add Grid">grid_on</i>

        <!-- ADD ELEMENT -->
        <i v-if="editor.current && editor.current.tag==='document'" class="material-icons moka-icons nuxpresso-icon-circle text-gray-300 ml-2" @click="$action('addcomponent')" title="Add block">add</i>

        <!-- IMPORT A BLOCK -->
        <i v-if="editor.current && editor.current.tag==='document'" class="material-icons moka-icons nuxpresso-icon-circle text-gray-300 ml-2" @click="$action('addreusable'),addBlock=true" title="Add reusable block">widgets</i>

        <!-- PREVIEW IN A NEW WINDOW -->
        <i class="material-icons moka-icons nuxpresso-icon-circle text-gray-300 ml-2" title="Preview in new window" @click="openPreview()">remove_red_eye</i>                 
        
        <!-- PREVIEW DOCUMENT -->
        <!--<i class="material-icons moka-icons nuxpresso-icon-circle text-gray-300 ml-2" v-if="component && component.category!='slider'" title="Preview" @click="$action('component_preview')">remove_red_eye</i> 
        -->

        <!-- PREVIEW SLIDER -->
        <i class="material-icons nuxpresso-icon-circle ml-2 text-gray-300 bg-green-400 " v-if="component && component.category==='slider'" title="Preview" @click="slider=!slider,disable=false">remove_red_eye</i>
        
        <!-- SAVE DOCUMENT -->
        <i class="material-icons moka-icons nuxpresso-icon-circle text-gray-300 ml-2 divide-x divide-gray-200" @click="$action('savecomponent')"
title="Save document">save</i>
        </div>
        <!-- MENU OPTIONS -->
        
        

        <!-- <i class="material-icons text-gray-500 hover:bg-black hover:text-blue-400 mx-2" @click="help=!help" title="Hotkeys">keyboard</i> -->
        
        <div v-if="editor.current" class="lg:w-2/3 w-1/2 pl-1 mr-10 w-full flex text-sm flex-row items-center" :title="editor.current.id">
            
            <i class="material-icons text-sm mx-1" v-if="editor.current.icon">{{editor.current.icon}}</i>

            <span v-else>CONTAINER <i class="material-icons text-sm mx-1">select_all</i></span>

            <span class="capitalize ml-2">CSS class</span>
            
            <input v-if="editor.current && !editor.current.css.hasOwnProperty('css')" type="text" class="ml-2 w-3/5 border-0 text-white rounded-none bg-gray-600" v-model="editor.current.css"/>
            
            <input v-else type="text" class="ml-2 w-3/5 text-white border-0 rounded-none bg-gray-600" v-model="editor.current.css.css"/>

            <i class="material-icons moka-icons ml-2" title="Edit CSS classes" @click="$action('edit_css')">edit</i>

            <!--
            <i class="material-icons moka-icons ml-2" title="Customize" @click="$action('customize')">brush</i>
            <i class="material-icons moka-icon-circle ml-2" title="Preview in new window" @click="openPreview()">preview</i>
            -->
        </div>

        <div class="flex flex-col fixed bottom-0 left-0 ml-10 mb-10 text-sm bg-gray-200 text-gray-700 w-1/3 lg:w-1/4 p-2 cursor-pointer z-2xtop opacity-100" v-if="docOptions" @mouseleave="docOptions=!docOptions">
                <!-- createPage=!createPage -->
            <div class="p-1 hover:bg-white" @click="$action('createpage')">Create article</div>
            <div class="p-1 hover:bg-white" @click="$store.dispatch('loading'),$action('component_export')">Export</div>
            <div class="p-1 hover:bg-white" @click="$action('component_settings')">Settings</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhoobeEditorStatusBar',
    data:()=>({
        docOptions: false
    }),
    computed:{
        doc(){
            return this.$mapState().editor.component.json
        },
        component(){
            this.$mapState().editor.component = this.$attrs.component 
            return this.$attrs.component //this.$mapState().editor.component.json
        },
        editor(){
            return this.$mapState().editor
        }
    },
    methods:{
        saveComponent(){
            return
        },
        openPreview(){
            window.localStorage.setItem('moka-preview',JSON.stringify(this.doc))
            window.localStorage.setItem('moka-settings', JSON.stringify(this.$mapState().moka.settings))
            window.localStorage.setItem('whoobe-component',JSON.stringify(this.editor.component))
            let route = this.$router.resolve({path: '/preview'});
            let w = window.open(route.href, 'moka','width=' + window.screen.availWidth );
            w.focus()
        }

    }
}
</script>