<template>
    <div class="h-3/5">
        <img :src="imageURL" class="w-full h-3/5 object-cover object-top"
            />
            <!-- <div v-if="editor.current && editor.current.image" class="text-xs">
              {{ editor.current.image.width }} x
              {{ editor.current.image.height }}
              <span class="px-1 bg-gray-300 text-black rounded uppercase">{{
                editor.current.image.ext
              }}</span>
            </div> -->
        <button class="rounded-full success" v-if="editor.current && editor.current.hasOwnProperty('image')" @click="setImage(imageURL)">
            OK
        </button>
    </div>
</template>

<script>
export default {
    name: 'WhoobeMediaFromUrl',
    computed:{
        editor(){
            return this.$mapState().editor
        },
        imageURL(){
            return window.localStorage.getItem('whoobe-image-url')
        }
    },
    methods:{
        setImage(image){
            this.editor.current.image = {
                url : image
            }
            this.$action()
        }
    }
}
</script>