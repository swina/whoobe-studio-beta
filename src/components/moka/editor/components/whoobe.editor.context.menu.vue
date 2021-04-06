<template>
    <div v-if="editor.current">
        <div class="border-b border-t p-1 border-gray-700 text-gray-600 flex flex-row items-center">
            <i class="material-icons">{{ editor.current.icon }}</i> {{ editor.current.type }}
        </div>
        <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('addcomponent')">
            <i class="material-icons mr-4">north</i>Move up
        </div>
        <div v-if="editor.current.type==='grid' || editor.current.type==='flex'" class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('addcomponent')">
            <i class="material-icons mr-4">add</i>Add element
        </div>
        <div v-if="editor.current.type==='grid' || editor.current.type==='flex'" class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('media')">
            <i class="material-icons mr-4">photo</i>Background image
        </div>
        <div v-if="editor.current.type==='element' || editor.current.type==='button'" class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('block_edit')">
            <i class="material-icons mr-4">edit</i>Edit content
        </div>
        <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('customize')">
            <i class="material-icons mr-4">brush</i>Customize element
        </div>
        <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$block_duplicate()">
            <i class="material-icons mr-4">file_copy</i>Duplicate
        </div>
        <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('addreusable')">
            <i class="material-icons mr-4">widgets</i>Add reusable component
        </div>

        <div v-if="editor.current.type==='grid' || editor.current.type==='flex'" class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('addplugin')">
            <i class="material-icons mr-4">settings_input_component</i>Add plugin
        </div>
        <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$block_copy()">
            <i class="material-icons mr-4">content_copy</i>Copy to clipboard
        </div>
        <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$block_paste()">
            <i class="material-icons mr-4">content_paste</i>Paste from clipboard
        </div>
        <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('animation')">
            <i class="material-icons mr-4">motion_photos_on</i>Animation ...
        </div>

        <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('edit_css')">
            <i class="material-icons mr-4">style</i>Edit CSS / Style
        </div>
        
        <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('saveasreusable')">
            <i class="material-icons mr-4">archive</i>Save as component
        </div>
        <div v-if="editor.current.hasOwnProperty('blocks')" class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('tree')">
            <i class="material-icons mr-4">account_tree</i>Block tree
        </div>
        <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('delete')">
            <i class="material-icons mr-4">delete</i>Remove element
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'WhoobeEditorContextMenu',
   
    computed: {
        editor(){
            return this.$mapState().editor
        }
    },
}
</script>