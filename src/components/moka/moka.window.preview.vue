<template>
    <div class="z-highest" @contextmenu="showContext">
        <div class="opacity-0 cursor-pointer z-highest absolute bg-gray-800 text-gray-500 text-sm w-4/5 md:w-1/5 border border-gray-900 shadow-lg" ref="contextMenu" id="contextMenu" @mouseleave="hideContextMenu">
            <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="$action('savecomponent')">
                <i class="material-icons mr-4">save</i>Save
            </div>
            <div class="p-1 hover:bg-white hover:text-black flex flex-row items-center" @click="componentPrint">
                <i class="material-icons mr-4">photo</i>Print Screen
            </div>
            <div class="border-b border-t p-1 border-gray-700 text-gray-700">Preview</div>
            <div class="p-1 hover:bg-white hover:text-black  flex flex-row items-center divide-y divide-gray-200" @click="showHtml=!showHtml">
                <i class="material-icons mr-4">code</i>HTML
            </div>
            <div class="p-1 hover:bg-white hover:text-black  flex flex-row items-center" @click="resizeTo(365)">
                <i class="material-icons mr-4">phone_iphone</i>Phone
            </div>
            <div class="p-1 hover:bg-white hover:text-black  flex flex-row items-center" @click="resizeTo(1024,768)">
                <i class="material-icons mr-4">tablet</i>Tablet
            </div>
            <div class="p-1 hover:bg-white hover:text-black  flex flex-row items-center" @click="resizeTo(0)">
                <i class="material-icons mr-4">laptop_mac</i>Laptop
            </div>
        </div>
        <i class="material-icons z-highest text-5xl fixed top-0 right-0 text-gray-400" @click="closeMe">close</i>
        <moka-editor-preview v-if="doc" :doc="doc" :preview="true" :loop="false" :develop="true" @save="$emit('save')"/>
        <moka-loading v-if="!doc"/>
        <moka-modal size="lg" class="modal w-3/5" v-if="showHtml" @close="showHtml=!showHtml" buttons="none">
            <div slot="title">HTML</div>
            <div slot="content" class="h-2/5">
                <whoobe-preview-html/>
            </div>
        </moka-modal>
        <whoobe-preview-printscreen :print="printScreen" @printed="printScreen=false"/>
    </div>
</template>

<script>
import MokaEditorPreview from '@/components/editor/preview/moka.preview'
import WhoobePreviewHtml from '@/components/moka/editor/preview/whoobe.preview.html'
import WhoobePreviewPrintscreen from '@/components/moka/editor/preview/whoobe.preview.printscreen'
import { mapState } from 'vuex'
export default {
    name: 'MokaWindowPreview',
    data:()=>({
        showContextMenu: false,
        showHtml: false,
        printScreen: false
    }),
    components: {
        MokaEditorPreview , WhoobePreviewHtml , WhoobePreviewPrintscreen
    },
    computed: {
        ...mapState ( ['editor'] ),
        doc(){
            let mydoc = JSON.parse(window.localStorage.getItem('moka-preview'))
            this.$mapState().editor.current = mydoc
            this.$mapState().editor.component = JSON.parse(window.localStorage.getItem('whoobe-component'))
            return mydoc
        }
    },
    methods:{
        componentPrint(){
            this.$loading(true)
            this.showContext = false
            this.$message ( 'Print screen setup ...' )
            this.printScreen = true
        },
        hideContextMenu(){
            this.$refs.contextMenu.style.opacity = 0
        },
        showContext(e){
            console.log ( e.clientY , e.clientX , screen.availWidth )
            e.preventDefault()
            if ( e.clientX < (screen.availWidth - 300) ) {
                this.$refs.contextMenu.style.left = (e.clientX - 20) + 'px'
            } else {
                this.$refs.contextMenu.style.left = ( e.clientX - 300 - 20) + 'px'
            }
            this.$refs.contextMenu.style.top = (window.pageYOffset + e.clientY) + 'px'
            this.$refs.contextMenu.style.opacity = 1
        },
        closeMe(){
            window.close()
        },
        size(s){
            window.screen.width = s
        },
        resizeTo(width,height=null){
            let left = (window.screen.availWidth/2)-(width/2);
            window.resizeTo (width ? width : window.screen.availWidth , height?height:window.screen.availHeight)
            window.moveTo ( left , 0 )
            let sW = width ? width : window.screen.availWidth 
            let sH = height ? height : window.screen.availHeight
            let title = 'whoobe Preview ' + sW + 'x' + sH
            document.title = title
        },
    },
    mounted(){
        
        document.title = 'whoobe'
    }
}
</script>