<template>
    <moka-preview v-if="blocks && blocks[index]" class="float-left border -ml-24" style="transform: scale(.6)"  :doc="blocks[index].blocks"/>
</template>

<script>
import MokaPreview from '@/components/editor/preview/moka.preview'

export default {
    name: 'WhoobeBlocksViewer',
    components:{ MokaPreview },
    data:()=>({
        blocks: null,
        index:0,
    }),
    mounted(){
        this.$api.service ( 'blocks' ).find ().then ( result => {
            this.blocks = result.data
        })
    }
}
</script>