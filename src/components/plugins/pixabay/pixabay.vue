<template>
    <div class="p-4">
        <div class="flex flex-row items-center my-2">
            <img src="https://pixabay.com/static/img/logo.png" class="w-32 opacity-50 mr-2"/>
            <input type="text" v-model="search" placeholder="search"/>
            <button @click="page++,pixabay(search)" class="mx-2">{{ images? 'Next' : 'Search' }}</button>
            <input type="radio" class="mx-2" name="type" v-model="type" value="all"> All
            <input type="radio" class="mx-2" name="type" v-model="type" value="photo"> Photo
            <input type="radio" class="mx-2" name="type" v-model="type" value="illustration"> Illustration
            <input type="radio" class="mx-2" name="type" v-model="type" value="vector"> Vector
        </div>
        <div class="flex flex-row flex-wrap" v-if="images">
            <section v-for="(image,i) in images.hits">
                <div class="flex mb-2 mx-1">
                    <img :src="image.previewURL" class="object-cover w-48 h-32" @click="preview=image,index=i"/>
                </div>
            </section>
        </div>
        <div class="absolute bottom-0" v-if="images">
            <button @click="page++,pixabay(search)">Next</button>
        </div>
        <whoobe-fullscreen
            size="full"
            position="ml-6"
            v-if="preview"
            @close="preview=null">
            <div slot="title">Preview</div>
            <div slot="content" class="flex flex-col items-end justify-end">
                <img :src="preview.largeImageURL" class="h-4/5 mx-auto" @click="preview=null,$loading(true),index<10?index++:index=0,preview=images.hits[index]"/>
                <div class="absolute justify-center w-full bottom-0 p-2 flex flex-row">
                    <input type="text" v-model="preview.name" placeholder="save as " class="mr-2"/>
                    <button @click="downloadImage">Save</button>
                </div>
            </div>
        </whoobe-fullscreen>
    </div>
</template>

<script>
import axios from 'axios'
import WhoobeFullscreen from '@/components/modals/modal.fullscreen'
export default {
    name: 'WhoobePixabayPlugin',
    components: { WhoobeFullscreen },
    data:()=>({
        search: '',
        images: null,
        apikey: '',
        page: 0,
        preview: null,
        index: null,
        type: 'all'
    }),
    watch:{
        search(v){
            if ( v && v.length > 2) {
                if (this.page === 0 ) {
                    this.page = 1
                }
                this.pixabay(v)
            }

        },
        preview(v){
            if ( v ) this.$loading()
        }
    },
    methods:{
        pixabay(search){
            this.$loading(true)
            axios.get ( 
                'https://pixabay.com/api/?key=' + this.apikey + 
                '&q=' + search + 
                '&image_type=' + this.type + 
                '&page=' + this.page).then ( res => {
                if ( res.data ){
                    this.images = res.data
                    
                }
                this.$loading()
            })
        },
        async downloadImage() {
            this.$api.service('upload/file').create({
                name: this.preview.name,
                url: this.preview.largeImageURL
            }).then ( response => {
                console.log ( response )
                this.preview = null
                this.$emit('close')
            })
            // const image = await fetch(this.preview.largeImageURL)
            // const imageBlob = await image.blob()
            // console.log ( imageBlob )
            // const imageURL = URL.createObjectURL(imageBlob)
            // console.log ( imageURL )
            // let formData = new FormData()
            // formData.append("file", image )
            // console.log ( formData )
            // return this.$http.post('upload/file', 
            //      formData ,
            //     const link = document.createElement('a')
            //     link.href = imageURL
            //     link.download = 'image file name here'
            //     document.body.appendChild(link)
            //     link.click()
            //     document.body.removeChild(link)
        }
    }
}
</script>
