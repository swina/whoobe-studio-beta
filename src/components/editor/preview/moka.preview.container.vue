<template>
    <component
        :data="$attrs.data?$attrs.data:null"
        :is="semantic"
        :id="doc.hasOwnProperty('anchor')? doc.anchor : doc.id"
        v-if="doc"
        :key="randomID"
        :class="classe(doc.css) + ' relative '" :style="doc.style + ' ' +  background(doc)" :ref="doc.id" >
        <div videobg v-if="doc.image && (doc.image.ext==='.mp4' || doc.image.ext==='webm' || doc.image.url.indexOf('.mp4') > -1)" :class="'fixed z-0 ' + doc.css.css">  
            <video playsinline :poster="doc.image.previewUrl" class="object-cover h-full w-full" autoplay loop>
                <source :src="doc.image.url"/>
            </video>
        </div>

        <whoobe-carousel v-if="doc.hasOwnProperty('gallery') && doc.gallery.images" :block="doc"/>
        <template v-for="(block,b) in doc.blocks">
            <moka-element
                @click="elementAction"
                v-if="block && !block.hasOwnProperty('blocks') && !block.hasOwnProperty('items')"
                :key="block.id"
                :data="$attrs.data||''"
                :currency="$attrs.currency||null"
                :el="block"
                :coords="[b]"
                :develop="false"/> 

            <moka-preview-container
                :key="block.id"
                v-if="block && !block.hasOwnProperty('slider') && block.hasOwnProperty('blocks') && !block.hasOwnProperty('items') && !block.hasOwnProperty('image_flip') && !block.hasOwnProperty('popup') && block.type!='plugin' && !block.hasOwnProperty('collection') && block.tag != 'menu'" @action="elementAction" 
                :data="$attrs.data||null"
                :currency="$attrs.currency||null"
                :doc="block" :animation="$attrs.animation"/>

            <moka-menu
                :key="block.id"
                :el="block"
                v-if="block.tag === 'menu'"/>

            <moka-slider 
                :key="block.id" 
                :ref="block.id" 
                v-if="block && block.hasOwnProperty('slider')" 
                :develop="true" 
                :embeded="true" 
                :doc="block" 
                :editor="true"/>

            <moka-flipbox
                :key="block.id" 
                :ref="block.id" 
                v-if="block && block.hasOwnProperty('image_flip')" 
                :develop="true" 
                :embeded="true"
                :currency="$attrs.currency||null" 
                :doc="block" 
                :editor="true"/>
               
            <moka-popup
                :key="block.id" 
                :ref="block.id" 
                v-if="block && block.hasOwnProperty('popup')" 
                :develop="true" 
                :embeded="true" 
                :doc="block" 
                :editor="true"/>

            <moka-loop 
                     :key="block.id" 
                    v-if="block.hasOwnProperty('collection')"
                    :doc="block" 
                    :level="b+1" 
                    :coords="b" 
                    />
            <moka-plugins-wrapper 
                :key="block.id"
                v-if="block && block.type==='plugin' && block.hasOwnProperty('blocks')" 
                :settings="block.plugin.editor.settings"  
                :block="block"  
                :plugin="block" 
                :component="block.plugin.component"/>


        </template>
    </component>

</template>

<script>
//import MokaElement from '@/components/editor/preview/moka.element'
import MokaElement from '@/components/editor/preview/moka.element.component'
import draggable from 'vuedraggable'
import MokaSlider from '@/components/editor/preview/moka.slider'
import MokaFlipbox from './moka.flipbox'
import MokaPopup from './moka.popup'
import MokaPluginsWrapper from '@/components/Plugins.Wrapper'
import MokaLoop from './moka.preview.loop'
import MokaMenu from './elements/moka.menu'
import WhoobeCarousel from '@/components/moka/editor/preview/whoobe.preview.gallery'

import { mapState } from 'vuex'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin ( ScrollTrigger )
const plugins = [ScrollTrigger];
import js from 'jsonpath' 

export default {
    name: 'MokaPreviewContainer',
    components: { MokaElement , MokaSlider , draggable , MokaFlipbox , MokaPopup , MokaPluginsWrapper , MokaLoop , MokaMenu , WhoobeCarousel },
    props: { 
        doc : { type: Object }  
    },
    data:()=>({
        modal: true,
        animation: null,
        randomID: null,
        timer: null,
        index: 0,
    }),
    computed:{
        ...mapState(['moka']),
        animations(){
            return gsapEffects
        },
        semantic(){
            return this.doc.semantic ? this.doc.semantic : 'div'
        },
        /*
        popup(){
            if ( this.doc.hasOwnProperty('popup')  ){
                if ( this.doc.popup.trigger ){
                    if ( this.doc.popup.trigger === this.moka.popup ){
                        this.modal = true
                        
                    } else {
                        this.modal = false
                    }
                }
            }
        },
        popupCSS(){

            return this.doc.hasOwnProperty ( 'popup' ) ? 'moka-popup-' + this.randomID : ''
        }
        */
    },
    
    methods:{
        
        classe(css){
            return css.hasOwnProperty('css') ? css.css + ' ' + css.container : css 
        },
        stile(block,doc){
            if ( !block || !doc ) return 
            let stile = ''
            if ( block.hasOwnProperty('fontFamily')){
                stile += 'font-family:\"' + block.fontFamily + '\"; '
            }
            return block.hasOwnProperty('style') ? block.style + stile : stile
        },
        background(block){
            if ( !block ) return ''

            // if ( block.hasOwnProperty('gallery') && block.gallery.images ) {
            //     let el = document.querySelector('#' + block.id )
            //     let bgContainer = document.createElement('div')
            //     console.log ( bgContainer )
            //     if ( el ){
            //         el.appendChild(bgContainer)
            //         bgContainer.classList.add('absolute','bgcontainer','top-0','left-0','bottom-0','right-0','z-1')
            //         var timing = (parseFloat(block.gallery.delay)* block.gallery.images.length) + 's'
            //         console.log ( timing )
            //         var animation = 'imageFade'
            //         block.gallery.hasOwnProperty('animation') ? 
            //             animation = block.gallery.animation : null
            //         //bgContainer.style.animation = 'imageAnimation 12s linear infinite 0s'
            //         block.gallery.images.forEach( (image,i) => {
            //                 let container = document.createElement('div')
            //                 container.classList.add('absolute','top-0','left-0','right-0','bottom-0','bg-cover','bg-no-repeat','bg-center','opacity-0')
            //                 container.style.animation = animation + ' ' + timing + ' linear infinite 0s'
            //                 container.style.animationDelay = (parseInt(block.gallery.delay)*(i))+'s'
            //                 bgContainer.appendChild ( container )
            //                 bgContainer.childNodes[i].style.backgroundImage = 'url(' + this.$imageURL(image) + ')'
            //                 //bgContainer.childNodes[i].style.animation = 'imageAnimation 12s linear infinite 0s'
            //                 //bgContainer.childNodes[i].style.animationDelay = (parseInt(block.gallery.delay)*(i))+'s'
            //         })
                    
            //         //bgContainer.classList.add('animateBg')
            //     }
            // } else {
            if ( !block.hasOwnProperty('gallery') ){     
            return block.hasOwnProperty('image') ?
                //'background-image:url(' + this.$imageURL(block.image) + ')' : ''
                block.image && block.image.url && block.image.url.indexOf('.mp4') < 0 ? 
                        ' background-image:url(' + this.$imageURL(block.image) + ');' :
                             ''  : ''
            }
        },
        nextCarousel(i,block){
            console.log ( i , block.gallery.images[i].url )
            document.querySelector('#' + block.id ).style.backgroundImage = 'url(' + this.$imageURL(block.gallery.images[i])  + ');' 
        },
        elementAction(action){
            this.$emit('action',action)
        },
        animate(element,id){
            let vm = this
            //if ( this.$refs && element.hasOwnProperty('gsap') && element.gsap.animation && !this.doc.hasOwnProperty('popup') ){
                let ani = gsap.effects[element.gsap.animation]( this.$refs[id] ,{
                    trigger: this.$refs[id],
                    duration: parseFloat(element.gsap.duration),
                    delay: parseFloat(element.gsap.delay),
                    ease: element.gsap.ease
                })
                ScrollTrigger.create({
                    id: id,
                    start: "center 99%",
                    trigger: this.$refs[id],
                    toggleActions: "play pause restart none",
                    animation:ani,
                    onEnter: ()=>{ 
                        if ( element.gsap.delay ){
                            ani.play()
                        } else {
                            ani.play(0)
                        }
                    },
                    
                });
                
                    
            //}
        }
    },
    mounted(){
        //this.randomID = this.$randomID()
        window.scrollTo(0,0)
        //if ( !this.doc && !this.doc.hasOwnProperty('gsap') && !this.doc.gsap && !this.doc.gsap.animation ) return 
        if ( this.doc.hasOwnProperty('gsap') && this.doc.gsap.animation  ){
            if ( this.doc.hasOwnProperty ( 'popup') && this.doc.popup.trigger ) return
                this.$animation( this.doc , this.doc.id , this.$refs )
        }
        return
        
    }
}
</script>
<style>
.animateBg {
    animation : imageAnimation 12s linear infinite 0s;
}
@keyframes imageFade { 
    0% { opacity: 0; animation-timing-function: ease-in; }
    8% { opacity: 1; animation-timing-function: ease-out; }
    25% { opacity: 1 }
    50% { opacity: 0 }
    100% { opacity: 0 }
}

@keyframes imageSlider {
    0% {opacity:1;visibility: visible}
    99% {opacity:1;visibility: hidden}
}  
@keyframes imageSlide { 
    0% { opacity:0 ; background-position-x: 0%; animation-timing-function: linear; }
    2% { opacity:1 ; background-position-x: 0%;  animation-timing-function: linear; }
    25% { opacity: 1 }
    95% { opacity: 0 ; }
    100% { opacity: 0;background-position-x: 100%}
}
</style>