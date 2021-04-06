<template>
    <div>
        <!-- video options -->
        <div class="cursor-pointer border-b hover:bg-black hover:text-white text-gray-800 px-1 mb-1" v-if="editor.current.type==='video' || editor.current.type === 'audio'" @click="setOpt('video')">
            Audio/Video Options
        </div>
        <transition name="fade">
            <div class="flex flex-col my-1 text-left" v-if="label==='video'">
                
                <div class="w-full flex flex-row justify-around">
                    <div>
                        <input type="checkbox" v-model="editor.current.options.autoplay"/> autoplay
                    </div>
                    <div>   
                        <input type="checkbox" v-model="editor.current.options.loop"/> loop 
                    </div>
                    <div>
                        <input type="checkbox" v-model="editor.current.options.controls"/> controls
                    </div>
                </div>
            </div> 
        </transition>
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