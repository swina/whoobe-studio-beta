<template>
    <div class="grid grid-cols-2 h-4/5 gap-1 bg-gray-200 rounded" v-if="image">
        <div class="fixed z-highest top-0 left-0 right-0 bottom-0 w-screen h-screen bg-cover bg-no-repeat bg-center" v-if="fullscreen" :style="'transition:all .5s linear;background-image:url(' +
            $imageURL(image) + ')'" @click="fullscreen=!fullscreen">
        </div>
        <transition name="fade">
            <div v-if="!fullscreen" :class="'flex cursor-pointer flex-col z-highest items-center h-full justify-center p-1 bg-no-repeat bg-center relative bg-contain ' + isfullscreen"  :style="'transition:all .5s linear;background-image:url(' +
            $imageURL(image) + ')'" @click="fullscreen=!fullscreen">
                <!-- <ima :src="$imageURL(image)" class="flex h-1/3 w-full  object-cover object-top"/> -->
                <i v-if="image.mime.indexOf('image') < 0" class="material-icons text-gray-400 m-auto text-10xl">insert_drive_file</i>
                <!-- <img :src="image.url" class="h-full w-auto"/> -->
                <i v-if="fullscreen" class="material-icons fixed z-2xtop top-0 right-0 text-5xl text-white">close</i>
            </div>  
        </transition>
        <div class="relative overflow-x-hidden flex flex-col justify-start p-2" v-if="image && !fullscreen">
            <!--<div class="text-right text-xs text-gray-500"># {{ image._id }}</div>-->
            <label>File</label>
            <input class="w-full" type="text" readonly :value="image.name"/>
            <label class="mt-4">Dim</label>
            <div class="flex text-base pl-2 py-1">
                <div>{{image.width}}</div>x<div>{{image.height}}px - {{parseInt(image.size/1000)}}KB</div>
            </div>
            <label class="mt-4">Caption</label>
            <input class="w-full" type="text" v-model="image.caption"/>
            <label class="mt-4">Alternative text</label>
            <input class="w-full" type="text" v-model="image.alternativeText"/>
            <label class="mt-4">URL</label>
            <input class="w-full" type="text" readonly v-model="image.url"/>
            <div class="w-full text-right mt-4">
                <button class="danger mr-2 rounded-full" @click="removeImage(image._id)">Delete</button>
                <button class="warning mr-2 rounded-full" @click="filerobot()">Image Editor</button>
                <button class="success rounded-full" @click="save">Save</button>
            </div>
            <div class="w-full absolute bottom-0 flex justify-center items-center mb-2">
                <button class="bg-gray-300 text-gray-700 rounded-full m-auto" @click="$action()">Close</button>
            </div>
        </div>
        

    </div>
</template>

<script>
export default {
    name: 'WhoobeEditMedia',
    data:()=>({
        fullscreen: false
    }),
    props: [ 'img' ],
    computed:{
        isfullscreen(){
            if ( this.fullscreen ){
                return 'fixed top-0 right-0 bg-cover w-screen h-screen'
            } else {
                return 'relative bg-contain w-full'
            }
        },
        image(){
            console.log ( JSON.parse(window.localStorage.getItem('whoome-media-image')) )
            return JSON.parse(window.localStorage.getItem('whoome-media-image'))
        }
    },
    methods:{
        save(){
            this.$api.service('media').patch ( this.image._id , this.image )
        },
        removeImage(){
            this.$api.service('media').remove( this.image._id ).then ( res => {
                this.$action()
            })
        },
        filerobot(){
            window.localStorage.setItem('whoobe-image-url',this.$imageURL(this.image.url))
            this.$action ( 'filerobot' )
        }
    },
    // mounted(){
    //     console.log ( this.$mapState().editor )
    //     this.image = this.$mapState().editor.image //this.img 
    //}
}
</script>