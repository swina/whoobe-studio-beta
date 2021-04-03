<template>
    <div class="grid grid-cols-1 h-full gap-1 bg-gray-200 rounded" v-if="image">
        <transition name="fade">
        <div :class="'flex cursor-pointer flex-col items-center justify-center p-1 bg-black bg-no-repeat bg-center ' + isfullscreen" :style="'transition:all .5s linear;background-image:url(' +
         $imageURL(image) + ')'" @click="$emit('fullscreen'),fullscreen=!fullscreen">
            <!-- <ima :src="$imageURL(image)" class="flex h-1/3 w-full  object-cover object-top"/> -->
            <i v-if="image.mime.indexOf('image') < 0" class="material-icons text-gray-400 m-auto text-10xl">insert_drive_file</i>
            <!-- <img :src="image.url" class="h-full w-auto"/> -->
            <i v-if="fullscreen" class="material-icons fixed z-2xtop top-0 right-0 text-5xl text-white">close</i>
        </div>  
        </transition>
        <div class="h-1/2 flex flex-col p-2" v-if="image">
            <!--<div class="text-right text-xs text-gray-500"># {{ image._id }}</div>-->
            <label>File</label>
            <input class="w-full" type="text" readonly :value="image.name"/>
            <label>Caption</label>
            <input class="w-full" type="text" v-model="image.caption"/>
            <label>Alternative text</label>
            <input class="w-full" type="text" v-model="image.alternativeText"/>
            <label>URL</label>
            <input class="w-full" type="text" readonly v-model="image.url"/>
            <div class="w-full text-right mt-4">
                <button class="danger mr-2 rounded-full" @click="$emit('delete',image._id),image=null,$emit('close')">Delete</button>
                <button class="success rounded-full" @click="save">Save</button>
            </div>
        <div class="w-full absolute bottom-0 flex justify-center items-center mb-2">
            <button class="bg-gray-300 text-gray-700 rounded-full m-auto" @click="$emit('close')">Close</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MokaEditMedia',
    data:()=>({
        image: null,
        fullscreen: false
    }),
    props: [ 'img' ],
    computed:{
        isfullscreen(){
            if ( this.fullscreen ){
                return 'fixed top-0 right-0 bg-cover w-screen h-screen'
            } else {
                return 'relative bg-contain w-full h-1/2'
            }
        }
    },
    methods:{
        save(){
            this.$api.service('media').patch ( this.image._id , this.image )
        }
    },
    watch:{
        img(v){
            this.image = v
        }
    },
    mounted(){
        this.image = this.img 
    }
}
</script>