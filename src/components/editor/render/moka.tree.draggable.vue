<template>
    <div class="bg-gray-800 relative text-xs font-sans w-full overflow-y-auto">
        <i class="material-icons absolute top-0 right-0 m-1" @click="$emit('close')">close</i>
        <div class="items-center flex flex-row" @click="current=null,$emit('treeroot')">
            <i class="material-icons">web</i> Root
        </div>
        <moka-tree-elements v-if="doc.hasOwnProperty('blocks')" :expand="false" :level="0" :doc="doc" @selected="selected"/>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import MokaTreeElements from '@/components/editor/settings/moka.tree.elements'
import { mapState } from 'vuex'
export default {
    name: 'MokaTree',
    components: { draggable , MokaTreeElements },
    data:()=>({
        current: null,
        doc: null
    }),
    //props: [ 'doc' ],
    computed: {
        ...mapState ( ['editor'] )
    },
    mounted(){
        this.doc = this.editor.current
    },
    methods:{
        selected ( el ){
            this.$emit ( 'treeselect' , [0] , el )
        }
    }

}
</script>

<style>
ul.tree { margin-left:0rem; }
ul.tree > li { margin-left:0rem; }
</style>