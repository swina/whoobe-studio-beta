<template>
    <div class="p-2">
        <div>CSS</div>
        <textarea v-if="editor.current && !editor.current.css.hasOwnProperty('css')" class="w-full h-24 text-gray-800" v-model="editor.current.css"/>
        <textarea v-else class="w-full h-24 text-gray-800 outline-none border-none" v-model="editor.current.css.css"/>
        <div v-if="editor.current && editor.current.css.hasOwnProperty('css')" @>Container CSS</div>
        <textarea v-if="editor.current && editor.current.css.hasOwnProperty('css')" class="w-full h-24 text-gray-800" v-model="editor.current.css.container"/>

        <div>Style</div>
        <textarea class="w-full h-24 text-gray-800" v-model="editor.current.style"/>
    </div>
</template>

<script>
export default {
    name: 'WhoobeEditorCSS',
    computed:{
        editor(){
            return this.$mapState().editor
        }
    }
}
</script>