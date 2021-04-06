<template>
    <div>
        <img :src="imageURL" class="w-full object-contain"
            />
            <!-- <div v-if="editor.current && editor.current.image" class="text-xs">
              {{ editor.current.image.width }} x
              {{ editor.current.image.height }}
              <span class="px-1 bg-gray-300 text-black rounded uppercase">{{
                editor.current.image.ext
              }}</span>
            </div> -->
        <button v-if="editor.current && editor.current.hasOwnProperty('image')" @click="editor.current.image.url = imageURL,$action()">
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
    }
}
</script>