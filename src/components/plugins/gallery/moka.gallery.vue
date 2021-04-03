<template>
    <!--<div imagegallery :class="block.plugin.editor.css.css + ' '  + block.plugin.editor.css.css.container">
        {{ block.plugin.editor.css.container }}-->
    <div>
        <moka-container 
            level="9"
            :coords="[0]"
            :doc="block.plugin.editor"></moka-container>
            {{ block.plugin.editor }}
    </div>
        <!--<template v-for="(image,i) in block.plugin.editor.blocks">
            <div :class="slide(i) + ' absolute top-0 left-0 bottom-0 right-0 bg-cover bg-no-repeat bg-top  gallery-image-' + i + ' ' + 'border'" :style="'background-image:url(' + $imageURL(image.image) + ');'">
            </div>
        </template>
        -->
    <!-- </div> -->
</template>

<script>
import MokaContainer from '@/components/editor/render/moka.single.container'
export default {
    name: 'MokaGalleryPlugin',
    components: { MokaContainer },
    data:()=>({
        index: 0,
        timer: null
    }),
    props: [ 'plugin' , 'block' , 'settings' ],
    computed:{
        animation(){
            let el = this.block.plugin.editor.blocks[this.index]

            el.gsap.animation ?
                this.$animationElement(el , '.gallery-image-' + this.index )
                 : null
            return el
        },
       
    },
    methods:{
        slide(i){
            if ( i != this.index ){
                return 'slideout' 
            } 
            return 'slidein'
        }
    },
    mounted(){
        let autoplay = false
        if ( autoplay ){
            let vm = this
            if ( block.plugins.editor.blocks.length ){
                this.timer = window.setInterval( ()=> {
                    vm.index < vm.block.plugins.editor.blocks.length-1 ?
                        vm.index++ : vm.index = 0
                },autoplay*1000)
            }
        } else {
            this.index = 0
        }
    },
    beforeDestroy(){
        window.clearInterval()
        this.timer = null
    }

}
</script>
<style>
.slideout {
    transform: scaleX(0);
    opacity:.5;
    transition: transform .4s linear;
    transform-origin: top left;
    transform-style: preserve-3D;
}
.slidein {
    transform: scaleX(1);
    transition: transform .4s linear;
    transform-origin: top right;
    transform-style: preserve-3D;
}
</style>