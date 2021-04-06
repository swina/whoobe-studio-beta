<template>
    <div>
        <!-- image -->
        <div class="bg-gray-200 text-sm cursor-pointer border-b hover:bg-black hover:text-white text-gray-800 px-1" v-if="editor.current && editor.current.hasOwnProperty('image')" @click="setOpt('image'),image=!image">
            Media
        </div>
        <div class="p-4 text-center" v-if="editor.current && editor.current.hasOwnProperty('image')">
            <moka-image-placeholder 
                v-if="editor.current" 
                size="sm" 
                :image="editor.current.image" 
                @noimage="editor.current.image=null,editor.current.link=''" 
                @media="$action('media')"/> 
        </div>
    </div>
</template>


<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState ( ['editor'] )
    }
}
</script>