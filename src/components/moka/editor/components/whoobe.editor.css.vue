<template>
    <div class="p-2">
        <div>CSS</div>
        <textarea v-if="editor.current" class="w-full h-40 text-gray-800" v-model="css"/>
        <!-- <textarea v-else class="w-full h-24 text-gray-800 outline-none border-none" v-model="css.css"/> -->
        <div v-if="editor.current && isContainer" @>Container CSS</div>
        <textarea v-if="editor.current && isContainer" class="w-full h-24 text-gray-800" v-model="container"/>

        <div>Style</div>
        <textarea class="w-full h-24 text-gray-800" v-model="stile"/>
    </div>
</template>

<script>
export default {
    name: 'WhoobeEditorCSS',
    data:()=>({
        css: '',
        cssContainer: '',
        container: '',
        stile : '',
        isContainer: false
    }),
    computed:{
        editor(){
            return this.$mapState().editor
        }
    },
    watch:{
        css(v){
            !this.isContainer ?
                this.$mapState().editor.current.css = this.css.replaceAll('\n',' ') : 
                this.$mapState().editor.current.css.css = v ? v.replaceAll('\n',' ') : ''
        },
        container(v){
            this.isContainer ?
                this.$mapState().editor.current.css.container = v.replaceAll('\n',' ') : null
        },
        stile(v){
            this.$mapState().editor.current.style = v.replaceAll('\n',' ')
        }
    },
    mounted(){
        this.$mapState().editor.current.css.hasOwnProperty ( 'css' ) ?
            this.css = this.$clean(this.$mapState().editor.current.css.css.replaceAll(' ','\n')) : 
            this.css = this.$clean(this.$mapState().editor.current.css.replaceAll(' ','\n'))
        
        this.$mapState().editor.current.css.hasOwnProperty('container') ? 
            this.container = this.$clean(this.$mapState().editor.current.css.container.replaceAll(' ','\n')) : 
            this.container = null
        
        this.stile = this.$clean(this.$mapState().editor.current.style.replaceAll(' ','\n'))
        
        this.$mapState().editor.current.css.hasOwnProperty('container') ?
            this.isContainer = true :
                this.isContainer = false
    }

}
</script>