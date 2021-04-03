<template>
<div v-if="current">
    
     <div style="transition:height .5s linear;" :class="'fixed z-2xtop left-0 cursor-pointer border-t mt-10 bg-gray-800 w-10 transform flex flex-col items-center justify-between ' + height">
        <div class="text-xs text-black bg-lime-400 h-10 mb-2 items-center justify-center flex flex-col w-full" @click="opened=!opened">
            <i class="material-icons">menu</i>
        </div>
        <div v-if="opened" class="text-xs text-white">Editor</div>
        <!--<i class="material-icons text-white-400 text-2xl my-2 bg-orange-800 hover:text-blue-400" @click="opened=!opened" title="Open options">expand_more</i>-->
        <div v-if="opened && editor.current.tag != 'document'" class="bg-gray-800 h-full flex flex-col w-full justify-around items-center">
            
            <i class="material-icons text-gray-400 bg-gray-800 hover:text-blue-400" :title="current.tag +  '-' + current.label">{{ current.icon }}</i>

            <i v-if="current.type === 'flex'" class="material-icons text-lime-400 hover:text-blue-400" @click="$action('addcomponent')" title="Add block/element">add</i>
            

            <i v-if="current.type != 'grid'  && current.type != 'flex'" class="material-icons text-lime-400 hover:text-blue-400" @click="$emit('edit',current),$action('edit')" title="Edit content">edit</i>


            <i class="material-icons text-lime-400 hover:text-blue-400" @click="$emit('customize'),$action('customize')" title="Edit component">brush</i>
            
            
            <i v-if="current.type==='grid' || current.type === 'flex'" class="material-icons text-lime-400 hover:text-blue-400" title="Add reusable block" @click="$action('addreusable')">widgets</i> 
            
            <i v-if="current.type === 'flex'" class="material-icons text-lime-400 hover:text-blue-400" @click="$action('addplugin')" title="Add plugin">settings_input_component</i>
            
            <i class="material-icons text-lime-400 hover:text-blue-400" @click="copiedElement=current,$emit('copy',current)" title="Copy element">content_copy</i>

            <i v-if="copiedElement && current.type==='grid' || current.type === 'flex'" class="material-icons text-lime-400 hover:text-blue-400" @click="$emit('paste')" title="Paste element">content_paste</i>

            <i class="material-icons text-lime-400 hover:text-blue-400" @click="$emit('duplicate')" title="Duplicate element">file_copy</i>

            <!--$emit('animations')-->
            <i class="material-icons text-lime-400 hover:text-blue-400" @click="$action('animation')" title="Animation">motion_photos_on</i>

            <i class="material-icons text-lime-400 hover:text-blue-400" v-if="editor.current" @click="$emit('saveblock')" title="Save block as component">archive</i>

            <!--$emit('tree')-->
            <i class="material-icons text-lime-400 hover:text-blue-400" title="Elements tree" @click="$action('tree')">account_tree</i>

            <i class="material-icons text-lime-400 hover:text-blue-400" @click="$emit('delete')" title="Delete element">delete</i>

        </div>
    </div>
</div>
</template>

<script>
import  { mapState } from 'vuex'
export default {
    name: 'MokaEditorToolbar',
    data:()=>({
        copiedElement: null,
        opened: true
    }),
    props: [ 'component' ],
    computed:{
        ...mapState ( ['moka','editor'] ),
        current (){
            return this.editor.current
        },
        height(){
            return this.opened ? 'top-0 h-full -mt-1' : 'top-0 -mt-1'
        }   
    },
}
</script>