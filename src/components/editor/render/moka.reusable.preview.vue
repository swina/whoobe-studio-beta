<template>
<div class="w-full overflow-y-auto border-l z-2xtop h-screen bg-white p-1 flex flex-col">
    <!--<i class="material-icons z-2xtop absolute top-0 right-0 m-1" @click="$emit('close')">close</i>-->
    <div v-if="components" class="mb-10 flex flex-row flex-wrap justify-around p-1">
        
        <template v-for="(template,index) in components">
            <div class="w-1/2 flex flex-col mb-4 h-36 cursor-pointer relative p-1 justify-center items-center" @click="$emit('add',template)" :title="template.name">
                <span class="text-sm p-1">{{ template.name.substring(0,20) }}</span>
                <div v-if="template.image" :style="'background-image:url(' + $imageURL(template.image) + ')'" class="w-full h-24 bg-top bg-no-repeat bg-cover shadow" ></div>
                <div v-if="template.image_uri && !template.image" :style="'background-image:url(' + $imageURL(template.image_uri) + ')'" class="w-full h-24 bg-top bg-no-repeat bg-cover shadow" ></div>
                <div v-if="!template.image && !template.image_uri" class="h-24 w-full shadow flex flex-col items-center justify-center"><div class="w-16 h-16 flex flex-col items-center justify-center  rounded-full bg-gray-300 text-gray-100">whoobe</div></div>
            </div>
        </template>
    </div>
    <div class="fixed bottom-0 w-1/3 border-t bg-white p-2 flex flex-row justify-around items-center text-center">
        <i class="material-icons mx-2 text-2xl" @click="prev">chevron_left</i>
        <select v-model="filter">
            <option v-for="cat in $categories()" :value="cat">{{ cat }}</option>
        </select>
        <i class="material-icons" @click="search=!search">search</i>
        <i class="material-icons mx-2 text-2xl" @click="next">chevron_right</i>
    </div>
    <transition name="fade">
        <div v-if="search" class="fixed z-2xtop bottom-0 mb-10 w-1/3 bg-white p-2 flex flex-row flex-wrap">
             <button class="mr-2 mt-1 capitalize w-24 border hover:bg-blue-400 hover:text-white border-blue-400 bg-white text-blue-400 focus:bg-gray-600 focus:text-white focus:outline-none rounded-none" @click="start=0,tags=''">all</button>
            <template v-for="tipo in datastore.dataset.elements[0].types.types">
                <button class="mr-2 mt-1 capitalize w-24 border hover:bg-blue-400 hover:text-white border-blue-400 bg-white text-blue-400 focus:bg-gray-600 focus:text-white focus:outline-none rounded-none" @click="tags=tipo">{{ tipo }}</button>
            </template>
        </div>
    </transition>
</div>
</template>

<script>
import { mapState } from 'vuex' 
export default {
    name: 'NuxpressoMokaTemplates',
    props:['templates'],
    data:()=>({
        start: 0,
        limit: 8,
        filter: 'widget',
        tags: '',
        search: false,
        categories: [
            'component',
            'slider',
            'widget',
            'page',
            'template',
            'archive',
            'starred'
        ],
        loadedComponents: null,
        components: null
    }),
    mounted(){
        this.$api.service('components').find( { query : { category: this.filter , $skip:0 , $limit:50 } } ).then ( result => {
            this.loadedComponents = result.data
            this.components = result.data
        })
        //this.tags = this.datastore.dataset.elements[0].types.types
    },
    computed: {
        ...mapState ( ['moka','datastore'] ),
        
        /*categories(){
            let arr = this.$arrayGroup ( this.mokacomponents , 'category' , 'id' )
            return arr.keys
        },
        mokatemplates(){
            //this.start = 0
            //this.limit = 8
            return this.mokacomponents.filter(comp=>{ return comp.category === this.filter || comp.tags === this.filter } )
        }
        */
    },
    watch:{
        filter(v){
            this.reusables()
            this.tags = ''
            this.search = false
        },
        tags(v){
            console.log ( v )
            if ( v ){
                this.components = this.loadedComponents.filter ( comp => { return comp.tags === v } )
            } else {
                this.components = this.loadedComponents
            }
        }
    },
    methods: {
        reusables(){
            this.$api.service('components').find( { query : { category: this.filter , $skip:0 , $limit:50 } } ).then ( result => {
                this.components = result.data
            })
        },
        next(){
            //if ( this.start < ( this.mokatemplates.length - this.limit ) ){
                this.start += this.limit
            //}
        },
        prev(){
            if ( this.start > 0 ){
                this.start -= this.limit
            }
            
        }
    },
}
</script>