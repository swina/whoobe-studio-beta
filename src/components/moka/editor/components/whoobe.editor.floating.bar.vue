<template>
    
    <div class="z-highest absolute top-0 right-0 -ml-4 p-1 -mt-6  h-6 w-auto bg-gray-800 text-gray-300 text-xs rounded-2xl items-center flex flex-row justify-around">
        
        <i class="material-icons text-lime-400 hover:text-red-500  text-sm mr-2" v-if="doc.icon">{{doc.icon}}</i>
        
        <i class="material-icons text-lime-400 hover:text-red-500 text-sm mr-2" v-if="!doc.icon">select_all</i>
        
        <i class="material-icons hover:text-blue-500  text-base mr-2" @click="$emit('moveup')" title="Move up">expand_less</i>
        
        <i v-if="doc.hasOwnProperty('popup')" class="material-icons hover:text-blue-500  text-base mr-2" @click="$action('popupsettings')" title="Popup settings">settings</i>

        <i v-if="doc.type==='element' || doc.type==='button'" class="material-icons hover:text-blue-500  text-base mr-2" @click="$action('block_edit')" title="Edit">edit</i>

        <i v-if="doc.type==='image'" class="material-icons hover:text-blue-500  text-base mr-2" @click="$action('media')" title="Add image">photo</i>

        <i v-if="doc.hasOwnProperty('plugin')" class="transform scale-100 material-icons hover:text-blue-500  text-base mr-2" @click="$action('pluginsettings')" :title="doc.label + ' settings'">settings</i>

        <i v-if="doc.hasOwnProperty('collection')" class="mr-2 material-icons hover:text-blue-500 text-sm leading-4" @click="editor.action?$action():$action('loopcontrol')" title="Settings">settings</i>


        <i v-if="doc.type==='flex' || doc.type==='grid'" class="mr-2 material-icons hover:text-blue-500 text-sm leading-4" @click="$action('addcomponent')" title="Add element">add</i>

        <i v-if="doc.type==='plugin'" class="mr-2 material-icons hover:text-blue-500 text-sm leading-4" @click="$action('addcomponent')" title="Add element">add</i>


        <i v-if="doc.tag==='form'" class="mr-2 material-icons hover:text-blue-500 text-sm leading-4" @click="$action('formsetting')" title="Settings">settings</i> 
        
        <i class="mr-2 material-icons hover:text-blue-500 text-sm leading-4 " @click="$action('customize')" title="Customize">brush</i>
        
        <i v-if="doc.type==='flex' || doc.type==='grid'" class="mr-2 material-icons hover:text-blue-500 text-sm leading-4" @click="editor.current=doc,$action('media')" title="Background image">photo</i>


        <i v-if="doc.type === 'flex' || doc.type==='grid'" class="material-icons text-gray-400 hover:text-blue-400 mr-2" title="Add block" @click="$action('addreusable')">widgets</i> 
        
        <i class="mr-2 material-icons hover:text-blue-500 text-sm leading-4 " @click="$action('delete')" title="Delete">delete</i>

    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'WhoobeEditorFloatingBar',
    props: [ 'doc' ],
    computed:{
        ...mapState ( ['editor'] )
    },
    mounted(){
    window.addEventListener("keydown", e => {
        if ( e.altKey && e.code === 'KeyM' ){
                this.$emit('moveup')
            }
        })
    }
}
</script>