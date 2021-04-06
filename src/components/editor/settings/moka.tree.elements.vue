<template>
        <ul class="tree cursor-pointer" >
            <li class="border-0 pl-1 list-none hover:bg-gray-900 text-gray-200 flex py-1 items-center">
                <div class="w-9/12 flex items-center" @click="setCurrent(doc)"><i class="material-icons mr-2">{{icon(doc)}}</i> {{doc.type}} {{doc.tag}}</div>
                <i class="absolute right-0 mr-2 material-icons" @click="expand=!expand">expand_more</i></li>
            <transition name="fade">
            <draggable v-model="doc.blocks">
            <li v-if="expand" :class="'list-none pl-' + (parseInt($attrs.level)+1)" :key="block.id" v-for="(block,b) in doc.blocks">
                <moka-tree-elements :expand="expand" :level="$attrs.level+1" v-if="block && block.hasOwnProperty('blocks')" :doc="block"/>
                <div class="flex items-center mb-1 py-1 hover:bg-gray-600" v-if="block && !block.hasOwnProperty('blocks')" @click="setCurrent(block)">
                    
                    <i class="material-icons moka-icon-circle mx-2">{{block.icon}}</i> 
                    <span class="font-bold mr-1">{{block.element}} {{ block.hasOwnProperty('content') ? block.content.substring(0,10).replace(/(&lt;([^>]+)>)/gi, "") : '' }}</span>
                </div>
            </li>
            </draggable>
            </transition>
        </ul>
    
</template>

<script>
import draggable from 'vuedraggable'
export default {
    name: 'MokaTreeElements',
    components: { draggable },
    data:()=>({
        current: null,
        expand: false,
    }),
    props: [ 'doc' ],
    mounted(){
    },
    methods:{
        icon(el){
            return el.hasOwnProperty('icon') ? el.icon : 'select_all'
        },
        setCurrent ( el ){
            console.log ( el.id )
            this.current = el.id
            this.$store.dispatch('setCurrent',el)
            this.$store.dispatch( 'selected' , el.id )
            this.$emit('selected',el)
        }
    }

}
</script>

<style>
ul.tree { margin-left:0rem; }
ul.tree > li { margin-left:0rem; }
/*ul.tree { margin-left:.5rem; margin-bottom:2px; margin-top:2px;}
ul.tree > li { margin-left: .4rem; margin-bottom:2px; margin-top:2px; }
*/
</style>