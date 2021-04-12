<template>
<div v-if="el">
    <nav v-if="el.element === 'menu'" :class="menu_responsive(el) + ' z-top ' + el.css.align +  background(el)"> 
        <div menu_item v-for="(item,i) in el.items" :class="el.css.css  + ' cursor-pointer relative '" :key="el.id + '_' + i"> 

            <a :class="el.css.items" v-if="!item.submenu && !$attrs.develop && item.link && !item.link.includes('http')" :href="item.link" @mouseover="menuover=null">
                <span v-if="!item.icon">{{ item.label }}</span>
                <span v-else><i :class="'bi-' + item.icon"></i></span> 
            </a>
            
            <span v-else @mouseover="menuover=i" :class="el.css.items" @click="menuover=i">
                <span v-if="!item.icon">{{ item.label }}</span>
                <span v-else><i :class="'bi-' + item.icon"></i></span>
            </span>
            
            
            <div submenu v-if="item.submenu && item.submenu.length" :class="isOver(i) + ' ' + el.css.submenu + ' fixed flex flex-col z-highest'" @mouseleave="menuover=-1">
                
                <div v-if="item.submenu[0].blocks" :class="Object.values(item.submenu[0].blocks.css).join(' ')" :style="background(item.submenu[0].blocks)">
                    
                    <template v-for="block in item.submenu[0].blocks.blocks">
                        <moka-element
                        v-if="block && !block.hasOwnProperty('blocks') && !block.hasOwnProperty('blocks')"
                        :key="block.id"
                        :el="block"
                        :data="$attrs.data||null"
                        :currency="$attrs.currency||null"
                        :develop="false"/>

                        <moka-preview-single-container 
                            v-if="block.hasOwnProperty('blocks')"
                            :key="block.id" 
                            :doc="block" 
                            level="1" 
                        />
                    </template>
                </div>
                <div v-else>
                    <template v-for="sub in item.submenu">
                            
                        <div :class="el.css.submenu_items">
                            {{sub.label}}
                            <img v-if="sub.hasOwnProperty('image')" :src="$imageURL(sub.image)" class="w-1/2"/>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        

    </nav>
    
    <!-- responsive -->
    
    <i :class="'bi-list z-max fixed md:hidden top-0 left-0 m-1 text-5xl font-bold ' + el.css.css " v-if="el.element === 'menu' && el.responsive" @click="menu_show=!menu_show"></i>
    <nav class="md:hidden fixed z-2xtop flex flex-col top-0 left-0 right-0 bottom-0 h-screen"  :class="responsive()" style="transition:all 1s linear;"> 
        <i :class="'bi-arrow-left moka-icons z-max mb-2 text-3xl ' + itemsCSS" v-if="el.element === 'menu' && el.responsive" @click="showmenu"></i>
        <div>
            <div v-for="(item,i) in el.items" class="cursor-pointer relative p-1'"> 
                
                <a :class="itemsCSS" :href="item.link">{{ item.label }}</a>
                
                
                <div v-if="item.submenu && item.submenu.length" class="ml-2 flex flex-col"> 
                    <div v-for="sub in item.submenu">
                        <a :class="itemsCSS" :href="sub.link">{{ sub.label }}</a>
                        <img v-if="sub.hasOwnProperty('image')" :src="$imageURL(sub.image)" class="w-24"/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
</div>
</template>

<script>
import { mapState } from 'vuex'

import MokaElement from '@/components/editor/preview/moka.element.component'
import MokaPreviewSingleContainer from '@/components/editor/preview/moka.menu.container'
var gsap
export default {
    name: 'MokaMenu',
    props: ['el'],
    components: { MokaPreviewSingleContainer },
    data:()=>({
        opacity: 'opacity-0',
        menuover: -1,
        menu_show: false
    }),
    computed:{
        ...mapState ( ['moka'] ),
        itemsCSS(){
            if ( !this.el.css.responsive ) return ''
            let classi = this.el.css.responsive.split ( ' ' )
            let cls = classi.filter ( cl => {
                            return cl.includes ( 'linkcss' ) ? cl : null 
                                
            })
            let cl = cls.length ? 
                        cls[0].split(':')[1] : ''
            return cl
        }
    },
    methods:{
        responsive(){
            let cl = this.menu_show ? '' : 'transform -translate-x-full'
            cl += ' ' + this.el.css.responsive
            return cl
        },
        showmenu(){
            this.menu_show =! this.menu_show
        },
        isOver(i){
            return i < 0 ? 'opacity-0' : this.menuover === i ? 'opacity-100 height-grow' : 'opacity-0 height-grow-out'
        },
        menu_responsive(menu){
            if ( menu.type === 'horizontal' && menu.responsive ) return 'hidden flex flex-col md:flex md:flex-row' 
            if ( menu.type === 'horizontal' && !menu.responsive ) return menu.css.container
            if ( menu.type === 'vertical' ) return 'flex flex-col'
        },
        background(block){
            if ( !block ) return ''
            return block.hasOwnProperty('image') ?
                //'background-image:url(' + this.$imageURL(block.image) + ')' : ''
                block.image && block.image.url ? 
                        ' background-image:url(' + this.$imageURL(block.image) + ');' :
                             ''  : ''
        },

    },
    mounted(){
        gsap = this.$animation(this.el,this.el.id,this.$refs)
    },
    beforeDestroy(){
        if ( gsap ) gsap.timeline().kill()
    }
}
</script>