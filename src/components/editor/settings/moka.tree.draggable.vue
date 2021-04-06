<template>
    <div class="relative bg-gray-700 max-h-screen pb-20 text-gray-500 cursor-pointer text-xs font-sans w-full overflow-y-auto p-2">
        <!--<i class="material-icons absolute top-0 right-0 m-1" @click="$emit('close')">close</i>-->
        <div class="items-center flex flex-row" @click="doc=editor.component.json">
            <i class="material-icons" @click="doc=editor.component.json">web</i> Root
        </div>
        <moka-tree-elements v-if="doc && doc.hasOwnProperty('blocks')" :expand="false" :level="0" :doc="doc" @selected="selected"/>
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
    computed:{
        ...mapState ( [ 'editor'] ),
       
    },
    mounted(){
        this.doc = this.editor.current ? this.editor.current : this.editor.component.json 
        //this.doc = this.editor.current
    },
    //props: [ 'doc' ],
    methods:{
        selected ( el ){
            this.doc = this.editor.current 
            this.$emit ( 'treeselect' , [0] , el )
        }
    }

}
</script>

<style>
ul.tree { margin-left:0rem; }
ul.tree > li { margin-left:0rem; }
</style>