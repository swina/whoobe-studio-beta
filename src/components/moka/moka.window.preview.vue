<template>
    <div>
        <i class="material-icons z-highest text-5xl fixed top-0 right-0 text-gray-400" @click="closeMe">close</i>
        <moka-editor-preview v-if="doc" :doc="doc" :preview="true" :loop="false" :develop="true" @save="$emit('save')"/>
        <moka-loading v-if="!doc"/>
    </div>
</template>

<script>
import MokaEditorPreview from '@/components/editor/preview/moka.preview'
import { mapState } from 'vuex'
export default {
    name: 'MokaWindowPreview',
    components: {
        MokaEditorPreview
    },
    computed: {
        ...mapState ( ['editor'] ),
        doc(){
            return JSON.parse(window.localStorage.getItem('moka-preview'))
        }
    },
    methods:{
        closeMe(){
            window.close()
        },
        size(s){
            console.log ( s )
            window.screen.width = s
        }
    },
    mounted(){
    
        document.title = 'whoobe'
    }
}
</script>