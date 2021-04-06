<template>
    <div class="w-full flex flex-col">


        <component :is="component"/>
        <!-- image -->
        
        <div class="bg-gray-200 text-sm cursor-pointer border-b hover:bg-black hover:text-white text-gray-800 px-1" v-if="editor.current && editor.current.hasOwnProperty('image')" @click="setOpt('image'),image=!image">
            Media
        </div>
        <div class="p-4 text-center" v-if="editor.current && editor.current.hasOwnProperty('image')">
            <whoobe-image-placeholder 
                v-if="editor.current" 
                size="sm" 
                :image="editor.current.image" 
                @noimage="editor.current.image=null,editor.current.link=''" 
                @media="$action('media')"/> 
        </div>

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

       
        <!-- link and anchor -->
        <!-- <div class="cursor-pointer border-b hover:bg-black hover:text-white text-gray-800 px-1" :class="label==='link'?'bg-orange-400 text-white ':' bg-gray-200'" @click="setOpt('link')">
            Link / Anchor
        </div>
        <transition name="fade">
            <div v-if="label==='link'" class="p-2 flex flex-col">
                <label>Link</label>
                <input class="w-full" type="text" v-model="editor.current.link"/>
                <label>Article/Page</label>
                <select class="w-full" v-model="editor.current.link">
                    <option v-for="(opt,o) in moka.articles" :value="'/' + opt.slug">{{ opt.title }}</option>
                </select>
                <label>Anchor</label>
                <input class="w-full" type="text" v-model="editor.current.anchor"/>
            </div>

            <div class="flex flex-col my-1 text-left" v-if="$attrs.component.category==='slider'">
                <label>Slide name</label>
                <input type="text" class="w-full" v-model="editor.current.name"/>
                <label>Slider Action</label>
                <select class="w-full" v-model="editor.current.action">
                    <option value=""></option>
                    <option value="slider_next">Next</option>
                    <option value="slider_prev">Prev</option>
                </select>
            </div>
        </transition> -->

        <!-- icon options -->
        <div class="bg-gray-200 cursor-pointer border-b hover:bg-black hover:text-white text-gray-800 px-1 mb-0" v-if="editor.current.tag==='icon' || editor.current.tag === 'icon_bt'" @click="setOpt('icon')">
            Icon
        </div>
        <!-- icon settings -->
        <moka-icons 
            v-if="label==='icon'" 
            :tag="editor.current.tag" 
            :icon="editor.current.content" 
            v-model="editor.current.content"/>
        
        <!-- popup -->
        <div v-if="editor.current.hasOwnProperty('popup')" class="flex flex-col">
            <div class="bg-gray-200 cursor-pointer border-b hover:bg-black hover:text-white text-gray-900 px-1" @click="setOpt('popup')"><label>Modal Popup</label></div>
            <div class="flex flex-col" v-if="label==='popup'">
                <div>
                    <input class="mr-2" type="checkbox" v-model="editor.current.popup.close"/>
                    <label>Close icon</label>
                </div>
                <div>
                    <input class="mr-2" type="checkbox" v-model="editor.current.popup.cookie"/>
                    <label>Cookie enable</label>
                </div>
                <label>Cookie name</label>
                <input class="" type="text" v-model="editor.current.popup.cookie_name"/>
                <label>Delay</label>
                <input class="" type="number" min="0" max="1000" v-model="editor.current.popup.delay"/>
                <label>Anchor trigger</label>
                <input type="text" v-model="editor.current.popup.trigger"/>
            </div>
        </div>

        <!-- form field -->
        <div v-if="editor.current.tag === 'input'" class="flex flex-col">
            <div class="bg-gray-200 cursor-pointer border-b hover:bg-black hover:text-white mb-1 text-gray-800 px-0" @click="setOpt('formfield')"><label>Field/Button</label></div>
            <div class="flex flex-col" v-if="label==='formfield'">
                <label>Default value</label>
                <input class="w-full" type="text" v-model="editor.current.content"/>
                <label>Field name</label>
                <input class="w-full" type="text" v-model="editor.current.name"/>
                <label>Placeholder</label>
                <input class="w-full" type="text" v-model="editor.current.placeholder"/>
                <label>Required</label>
                <input type="checkbox" v-model="editor.current.required"/>
                <!-- button action -->
                <div v-if="editor.current.element === 'button'" class="flex flex-col">
                    <label>Action</label>
                    <input class="w-full" type="text" v-model="editor.current.action"/>
                </div>
            </div>
        </div>

        <!-- <div class="bg-gray-200 cursor-pointer border-b hover:bg-black hover:text-white text-gray-800 px-1 mt-0" v-if="editor.current && editor.current.tag != 'document'" @click="setOpt('semantic'),semantic=!semantic">
            HTML Semantic
        </div>
        <moka-options 
            class="mb-0" 
            v-if="label==='semantic'" 
            attr="semantics" 
            v-model="editor.current.entity.semantic" 
            :css="editor.current.entity.semantic"/> -->
        

       
    </div>
</template>

<script>
import MokaImagePlaceholder from '@/components/editor/render/moka.editor.image.placeholder'
import WhoobeImagePlaceholder from '@/components/moka/editor/components/whoobe.editor.image.placeholder'
import MokaIcons from '@/components/editor/render/moka.customize.icon'
import MokaOptions from '@/components/editor/tailwind/tailwind.options'
import { mapState }  from 'vuex'
export default {
    name: 'MokaEditContent',
    data:()=>({
        semantic: false,
        image: false,
        video: false,
        link: false,
        icon: false,
        formfield: false,
        popup:false,
        label: '',
    }),
    components: { MokaImagePlaceholder , WhoobeImagePlaceholder , MokaIcons , MokaOptions },
    computed:{
        ...mapState ( ['moka','editor'] ),
        component(){
            return this.editor.current.hasOwnProperty('image') ? 
                this.$action('media') :
                    null
        }
    },
    methods:{
        setOpt(label){
            this.label===label ? this.label = '' : this.label = label
        }
    }

}
</script>