<template>
    <div class="p-4">
        <textarea class="w-full text-base" 
            v-if="editor.current && ( editor.current.type === 'element' || editor.current.element === 'button' ) && editor.current.element != 'p'" 
            v-model="editor.current.content"></textarea>

        
        <whoobe-quill-editor v-if="editor.current && editor.current.tag === 'element' && editor.current.element === 'p'"  v-model="editor.current.content" @close="editContent=!editContent"/>
        

        <whoobe-icon-editor v-if="editor.current && ( editor.current.tag === 'icon' || editor.current.tag === 'icon_bt')" :tag="editor.current.tag" v-model="editor.current.content"/>

    </div>
</template>

<script>
import WhoobeQuillEditor from '@/components/editor/render/moka.text.editor' //moka/editor/editing/whoobe.editor.quill.editor'
import WhoobeIconEditor from '@/components/editor/render/moka.customize.icon'
export default {
    components: {
        WhoobeQuillEditor, WhoobeIconEditor
    },
    computed:{
        editor(){
            return this.$mapState().editor
        }
    }

}
</script>