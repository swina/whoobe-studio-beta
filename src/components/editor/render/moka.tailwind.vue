<template>
    <div class="mt-0" :data="init">
         <!-- link and anchor -->
        <div key="itemLink" class="w-full pl-1 py-1 border-b border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-white text-gray-500 capitalize flex flex-row relative" :class="group === 'link' ? 'bg-orange-400 text-white' : ''" @click="toggle('link')">
                 <span class="text-sm">Link/Anchor</span>
                 <i class="material-icons absolute right-0 mr-2 text-gray-400" v-if="group!='link'">expand_more</i>
                 <i class="material-icons absolute right-0 mr-2 text-gray-400" v-else>expand_less</i>
        </div>
        <transition name="fade">
            <div v-if="group==='link'" class="p-2 flex flex-col text-gray-500">
                <label>Link</label>
                <input class="dark w-full" type="text" v-model="editor.current.link"/>
                <label>Article/Page</label>
                <select class="dark w-full" v-model="editor.current.link">
                    <option v-for="(opt,o) in $mapState().datastore.dataset.articles" :value="'/' + opt.slug">{{ opt.title }}</option>
                </select>
                <label>Anchor</label>
                <input class="dark w-full" type="text" v-model="editor.current.anchor"/>
            </div>

             <!-- slider link next prev -->
            <div class="flex flex-col my-1 text-left text-gray-500" v-if="editor.current.category==='slider'">
                <label>Slide name</label>
                <input type="text" class="w-full dark" v-model="editor.current.name"/>
                <label>Slider Action</label>
                <select class="w-full dark" v-model="editor.current.action">
                    <option value=""></option>
                    <option value="slider_next">Next</option>
                    <option value="slider_prev">Prev</option>
                </select>
            </div>
        </transition> 

        <!-- Semantic -->
        <div v-if="editor.current && editor.current.tag != 'document'" key="semantic" class="w-full pl-1 py-1 border-b border-gray-700 bg-gray-800 hover:bg-gray-700 hover:text-white text-gray-500 capitalize flex flex-row relative" :class="group === 'semantic' ? 'bg-orange-400 text-white' : ''" @click="toggle('semantic')">
                 <span class="text-sm">Semantic</span>
                 <i class="material-icons absolute right-0 mr-2 text-gray-400" v-if="group!='link'">expand_more</i>
                 <i class="material-icons absolute right-0 mr-2 text-gray-400" v-else>expand_less</i>
        </div>
        <moka-options 
            class="mb-0 p-2" 
            v-if="group==='semantic'" 
            attr="semantics"
            v-model="editor.current.semantic" 
            :css="editor.current.hasOwnProperty('semantic')?editor.current.semantic:''"/>

        <template v-for="g in groups">
             <div :key="g.attr" class="w-full pl-1 border-b border-gray-700 bg-gray-800 hover:bg-gray-600 hover:text-white text-gray-500 capitalize flex flex-row items-center relative py-1" :class="g === group ? 'bg-orange-400 text-white' : ''" @click="toggle(g)">
                 <span class="text-sm">{{ g.label }}</span>
                 <i class="material-icons absolute right-0 mr-2 text-gray-400" v-if="g!= group">chevron_right</i>
                 <i class="material-icons absolute right-0 mr-2 text-gray-400" v-else>expand_less</i>
             </div>
             <transition name="slideright">
             <div v-if="g === group" class="whoobe-editor-tw-options bg-gray-800 text-gray-500 border-b top-0 absolute w-full z-2xtop left-0 right-0 bottom-0">
                 <div class="bg-orange-400 text-black text-sm flex flex-row p-1 items-center capitalize" @click="group=''"><i class="material-icons absolute right-0">chevron_right</i> {{ g.label }}</div>
                 <div :key="$randomID()" v-for="component in g.components" class="mb-1 p-1">
                     <component 
                        :key="$randomID()"
                        :is="component.name" 
                        :component="component.name" 
                        :css="css" 
                        :stile="editor.current.style"
                        v-model="cssTw[component.attr]" 
                        :entity="editor.current"
                        :attr="component.attr" 
                        :icon="component.icon||null"
                        :classe="component.css||''"
                        :required="component.hasOwnProperty('required')? component.required :''"
                        :title="component.hasOwnProperty('title')?component.title:''"
                        :negative="component.hasOwnProperty('negative')?component.negative:false"
                        @stile="stile"
                        @clearstile="stile"
                        @blockcss="blockcss"
                        @css="update"/>
                        <!--:entity="$attrs.entity"-->
                 </div>
             </div>
             </transition>
        </template>
    </div>
</template>

<script>
import MokaBgcolor from '@/components/editor/tailwind/tailwind.bgcolor'
import MokaBgPosition from '@/components/editor/tailwind/tailwind.bgposition'
import MokaBorderColor from '@/components/editor/tailwind/tailwind.border.color'
import MokaBorderType from '@/components/editor/tailwind/tailwind.border.type'
import MokaButton from '@/components/editor/tailwind/tailwind.button'
import MokaCheckbox from '@/components/editor/tailwind/tailwind.checkbox'
import MokaColor from '@/components/editor/tailwind/tailwind.color'
import MokaGradient from '@/components/editor/tailwind/tailwind.gradient'
import MokaGrid from '@/components/editor/tailwind/tailwind.grid'
import MokaHeights from '@/components/editor/tailwind/tailwind.height'
import MokaOptions from '@/components/editor/tailwind/tailwind.options'
import MokaPosition from '@/components/editor/tailwind/tailwind.position'
import MokaRange from '@/components/editor/tailwind/tailwind.range'
//import MokaTextStyle from '@/components/editor/tailwind/tailwind.text.style'
import MokaTextFont from '@/components/editor/tailwind/tailwind.text.font'
import MokaWidths from '@/components/editor/tailwind/tailwind.width'
import { mapState } from 'vuex'
import twgroups from '@/plugins/tw.groups'
export default {
    name: 'MokaTailwind',
    components: {
        MokaBgcolor,
        MokaBgPosition,
        MokaBorderColor,
        MokaBorderType,
        MokaButton,
        MokaCheckbox,
        MokaColor,
        MokaGradient,
        MokaGrid,
        MokaPosition,
        MokaTextFont,
        //MokaTextStyle,
        MokaWidths,
        MokaHeights,
        MokaOptions,
        MokaRange,
    },
    data:()=>({
        cssTw:{},
        groups: null,
        group: '',
        allCss: '',
        allStyle: ''
    }),
    props: [ 'css'],
    computed: {
        ...mapState ( ['moka','editor'] ),
        init(){
            return true
        }
    },
    watch:{
        cssTw:{
            handler(old,changed){
                let css = this.allCss + ' ' + this.$clean(Object.values(changed).join(' ')) 
                if ( this.$attrs.submenu ){
                    this.$attrs.entity.css.submenu = this.allCss + ' ' + this.$clean(Object.values(changed).join(' '))
                    console.log ( 'submenu=>' , this.$attrs.entity.css.submenu )
                } else {
                    !this.$attrs.entity.css.hasOwnProperty('css') ?
                        this.$attrs.entity.css = this.allCss + ' ' + this.$clean(Object.values(changed).join(' ')) :
                            this.$attrs.entity.css.css = this.allCss + ' ' + this.$clean(Object.values(changed).join(' ')) 
                }
            },
            deep:true
        },
    },
    mounted(){
        this.groups = twgroups
        this.allCss = this.css
        this.allStyle = this.editor.current.style
        //this.allStyle = this.$attrs.entity.style
        let obj = []
        this.groups.forEach ( (g , i) => {
            if ( g.hasOwnProperty('filter') ){
                if ( g.filter.includes(this.$attrs.entity.type)){
                    obj.push ( g )
                }
            } else {
                obj.push ( g )
            }
        })
        this.groups = obj
        
    },
    methods:{
        toggle(group){
            this.group === group ? this.group = '' : this.group = group
        },
        update(classe){
            this.allCss = this.$clean(this.allCss.replace(this.$clean(classe),' '))
        },
        blockcss(classe){
            this.$attrs.entity.css.css = classe
        },
        stile(stile){
            this.$emit('stile',stile)
        },
        clearstile(stile){
            this.allStyle = this.$clean(this.allStyle.replace(this.$clean(style),''))

        }
    }
}
</script>
