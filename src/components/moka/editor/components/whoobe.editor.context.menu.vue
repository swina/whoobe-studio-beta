<template>
    <div v-if="editor.current" class="z-highest" :key="$randomID()" :id="$randomID()">
        <div class="editor-context-menu-item bg-black hover:bg-black border-l-0 border-b hover:border-gray-600 border-gray-600 capitalize">
            <i class="material-icons mr-2">{{ editor.current.icon }}</i> {{ editor.current.type }}
            <div class="absolute right-0 top-0 m-1 flex flex-row items-center">
                <i class="material-icons mr-1">north</i>Move up
            </div>
        </div>
        <!-- <div class="editor-context-menu-item" @click="$block_moveup()">
            <i class="material-icons mr-4">north</i>Move up
        </div> -->
        <div v-if="editor.current.type==='plugin'" class="editor-context-menu-item" @click="$action('pluginsetting')">
            <i class="material-icons mr-4">settings</i>Plugin Settings
        </div>
       
        <div v-if="editor.current.type==='grid' || editor.current.type==='flex'" class="editor-context-menu-item" @click="$action('addcomponent')">
            <i class="material-icons mr-4">add</i>Add element <span class="text-right ml-4">(Alt + i)</span>
        </div>
        <div v-if="editor.current.type==='grid' || editor.current.type==='flex'" class="editor-context-menu-item" @click="$action('media')">
            <i class="material-icons mr-4">photo</i>Background image
        </div>
        <div v-if="editor.current.hasOwnProperty('gallery') && editor.current.gallery.images" class="editor-context-menu-item" @click="$action('slidersettings')">
            <i class="material-icons mr-4">photo</i>Carousel settings
        </div>
        <div v-if="editor.current.type==='element' || editor.current.type==='button'" class="editor-context-menu-item" @click="$action('block_edit')">
            <i class="material-icons mr-4">edit</i>Edit content <span class="text-right ml-4">(Alt + w)</span>
        </div>

        <div v-if="editor.current.tag==='menu'" class="editor-context-menu-item" @click="$action('block_menu')">
            <i class="material-icons mr-4">menu</i>Menu Editor<span class="text-right ml-4"></span>
        </div>

        <div class="editor-context-menu-item" @click="$action('customize')">
            <i class="material-icons mr-4">brush</i>Customize element  <span class="text-right ml-4">(Alt + z)</span>
        </div>
        <div class="editor-context-menu-item" @click="$block_duplicate($attrs.component,$attrs.current)">
            <i class="material-icons mr-4">file_copy</i>Duplicate  <span class="text-right ml-4">(Alt + d)</span>
        </div>
        <div class="editor-context-menu-item" @click="$block_copy()">
            <i class="material-icons mr-4">content_copy</i>Copy to clipboard  <span class="text-right ml-4">(Alt + c)</span>
        </div>
        <div class="editor-context-menu-item" @click="$block_paste()">
            <i class="material-icons mr-4">content_paste</i>Paste from clipboard  <span class="text-right ml-4">(Alt + v)</span>
        </div>
        <div class="editor-context-menu-item" @click="$action('addreusable')">
            <i class="material-icons mr-4">widgets</i>Add reusable component  <span class="text-right ml-4">(Alt + u)</span>
        </div>
        <div v-if="editor.current.type==='grid' || editor.current.type==='flex'" class="editor-context-menu-item" @click="$action('addplugin')">
            <i class="material-icons mr-4">settings_input_component</i>Add plugin
        </div>
        
        <div class="editor-context-menu-item" @click="$action('animation')">
            <i class="material-icons mr-4">motion_photos_on</i>Animation ...  <span class="text-right ml-4">(Alt + a)</span>
        </div>

        <div class="editor-context-menu-item" @click="$action('edit_css')">
            <i class="material-icons mr-4">style</i>Edit CSS / Style
        </div>
        
        <div class="editor-context-menu-item" @click="$action('saveasreusable')">
            <i class="material-icons mr-4">archive</i>Save as component
        </div>
        <div v-if="editor.current.hasOwnProperty('blocks')" class="editor-context-menu-item" @click="$action('tree')">
            <i class="material-icons mr-4">account_tree</i>Block tree  <span class="text-right ml-4">(Alt + t)</span>
        </div>
        <div class="editor-context-menu-item" @click="$emit('delete')">
            <i class="material-icons mr-4">delete</i>Remove element  <span class="text-right ml-4">(Alt + r)</span>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'WhoobeEditorContextMenu',
    data:()=>({
        group: ''
    }),
    computed: {
        editor(){
            return this.$mapState().editor
        }
    },
}
</script>