<template>
    <div class="relative max-h-screen bg-gray-900 overflow-auto pb-48">
        <div class="absolute top-0 right-0 flex flex-row items-center text-xs">
            <button class="m-1 w-20 h-8 rounded-sm mt-2 bg-blue-500 default mr-2 text-xs px-4 z-highest" @click="preview">Preview</button>
            <button class="m-1 w-20 h-8 rounded-sm mt-2 mr-2 warning text-xs px-4 z-highest" @click="reload">Reload</button>
            <button class="m-1 w-20 h-8 rounded-sm mt-2 mr-2 success text-xs px-4 z-highest" @click="save">Save</button>
        </div>
        <div id="image-editor" :class="imageEditor?'max-h-screen opacity-100 pb-20':'opacity-0 pb-20 max-h-screen'">

        </div>
        <img :src="imageurl" class="absolute top-0 left-0 mt-12" v-if="!imageEditor && imageurl"/>
    </div>
</template>

<script>
export default {
    data:()=>({
        filerobot:null,
        imageEditor: true,
        imageurl: null
    }),
    computed:{
        image(){
            return window.localStorage.getItem('whoobe-image-url')
        }
    },
    mounted(){
        this.loadEditor()
    },
    methods:{
        loadEditor(){
            let vm = this
            this.filerobot = new FilerobotImageEditor({
                elementId: 'image-editor',
                showInModal: false,
                onBeforeComplete:  vm.onBeforeComplete
            });
            this.filerobot.open(this.image);
        },
        onBeforeComplete(props){
            console.log('data url=>' , props.canvas.toDataURL());
            return false
        },
        preview(){
            this.imageurl = document.getElementById('image-editor_filerobot-image-edit-box').toDataURL()
            this.imageEditor = false
        },
        reload(){
            this.imageurl = null
            this.imageEditor = true
            this.filerobot.unmount()

            this.filerobot = new FilerobotImageEditor({
                elementId: 'image-editor',
                showInModal: false
            });
            this.filerobot.open(this.image)
        },
        save(){
            this.$mapState().editor.current.image.uri = document.getElementById('image-editor_filerobot-image-edit-box').toDataURL()
            this.$action()
        }
    }
}
</script>