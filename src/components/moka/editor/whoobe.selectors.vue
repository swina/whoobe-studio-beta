<template>
<!-- MAIN CONTAINER -->
<div class="w-full h-auto pb-10 mb-10 top-0 left-0 relative" data="init">
     
    <div v-if="$attrs.category!='element' && !doc.hasOwnProperty('slider')" @contextmenu="showContext">
          
        <div :class="'relative shadow-inner border-2 border-dashed p-10 text-black ' + docCss" :style="stile(doc,true) + ' ' + background(doc)" id="content">
            <template v-for="(block,b) in doc.blocks">
                
                <whoobe-container 
                    v-if="block && !block.hasOwnProperty('slider')"
                    :key="block.id" 
                    :doc="block"
                    :component="doc" 
                    :level="b"
                    :index="b"
                    :slide="false"
                    :top="true" 
                    :pos="[0,b]"
                    :coords="[0,b]" 
                    :zi="b+1"
                    @selected="selected"/>
                
                
                    <!--
                    @customize="customize" 
                    @animations="animation=!animation"
                        @copy="copy"
                        @edit="edit"
                        :dropdown="dropdownView"
                    -->
                
                <div v-if="block && block.hasOwnProperty('slider')" class="border p-1">
                    <div class="p-2 bg-gray-300">SLIDER <button class="danger" @click="removeSlider(block)">Remove</button></div>
                    <moka-editor-selectors 
                        :doc="block"
                        :component="current"
                        :develop="true"
                        category="slider"
                        :root="true"
                        />  
                </div>
            </template>
        </div>
        
    </div> 

    <whoobe-editor-slides
        v-if="doc && doc.hasOwnProperty('slider')"
        :key="doc.id"
        :doc="doc"
        :component="doc"/>

    <whoobe-status-bar :component="component"/>

    <!-- context menu -->
    <div class="editor-context-menu" ref="contextMenu" id="contextMenu" style="left:-1000px" @mouseleave="hideContextMenu" @click="hideContextMenu">
        <component :is="contextMenuComponent" @delete="confirmModal=!confirmModal" :current="current" :component="component" :id="$randomID()" :key="$randomID()" @click="hideContextMenu"/>
    </div>
    <!--- ELEMENTS EDITOR -->

    <!-- <div v-else>
         <moka-element  
            :key="element.id"
            data-trigger="scroller"
            :element="element"
            v-for="(element,e) in doc.blocks" 
            v-if="doc && $attrs.category != 'slider' && element.type!='grid' && element.type != 'flex' && !doc.hasOwnProperty('slider')" 
            :coords="[e]"
            :develop="true"
            @selected="selected"
            @animation="animations=!animations"
            @customize="customize"
            @delete="confirmModal=!confirmModal"
            @edit="editContent=!editContent"/>
        
        <div v-if="doc && doc.hasOwnProperty('slider')" :data="getSlider">
            <div class="flex flex-row items-center p-1">
                <i title="Slider settings" class="material-icons mx-2" @click="$store.dispatch('setCurrent',doc),$action('slidersettings')">settings</i>
                <button class="mx-2" @click="addSlide()">Add slide</button>
                <button class="danger mx-2" v-if="!slideDelete && slideIndex > -1" @click="slideDelete=!slideDelete">Delete slide</button>
                <button class="danger" v-if="slideDelete" @click="doc.blocks.splice(slideIndex,1),slideIndex=0,slideDelete=!slideDelete">Confirm to delete this slide?</button>
                <button class="rounded-none mx-2" v-if="currentSlide" @click="$emit('duplicate',editor.current)">Duplicate</button>
            </div>
            
                <draggable :list="doc.blocks" class="flex flex-row mb-4">
                    <div v-for="(slide,index) in doc.blocks" :class="'w-auto px-1 h-8 border justify-center items-center flex flex-col mr-4 ' + slideSelected(index)" @click="slideDelete=false,currentSlide=slide,slideIndex=index,$store.dispatch('setCurrent',slide),$store.dispatch('selected',slide.id)">
                        {{ 'Slide ' + (index+1) }}
                    </div>
                </draggable>
                <label class="text-sm">Slide title </label> 
                <input type="text" class="my-1" v-model="doc.blocks[slideIndex].name"/>
            <div v-if="currentSlide" :class="doc.css + ' relative border-2 border-dashed p-4 text-black '" :style="stile(doc,true) + ' ' + background(doc)" id="content">
            
                <moka-container
                    :key="currentSlide.id" 
                    :doc="currentSlide"
                    :component="doc" 
                    level="0"
                    index="0"
                    :slide="true"
                    :top="true" 
                    :pos="[0,0]"
                    :coords="[0,0]" 
                    zi="1"
                    :dropdown="dropdownView"
                    @copy="copy"
                    @selected="selected"
                    @customize="customize" 
                    
                    @animations="$action('animation')"
                    @edit="edit"/>
            
            </div>
        </div>
    </div> -->
    
    <!-- STATUS BAR -->

    <!--
    <div editorstatus class="fixed bg-gray-800 z-top border-t border-gray-800 text-gray-400 bottom-0 left-0 pl-10 p-1 border-t w-full flex flex-row items-center text-sm bg-white z-max uppercase h-10 divide-x divide-gray-600">
        
        <i class="material-icons text-gray-500 hover:bg-black hover:text-blue-400 mx-2" @click="help=!help" title="Hotkeys">keyboard</i>
        
        <div v-if="editor.current" class="pl-1 w-full flex text-sm flex-row items-center" :title="editor.current.id">
            
            <i class="material-icons text-sm mx-1" v-if="editor.current.icon">{{editor.current.icon}}</i>

            <span v-else>CONTAINER <i class="material-icons text-sm mx-1">select_all</i></span>

            <span class="capitalize ml-2">CSS class</span>
            
            <input v-if="editor.current && !editor.current.css.hasOwnProperty('css')" type="text" class="ml-2 w-2/5 border-0 text-white rounded-none bg-gray-600" v-model="editor.current.css"/>
            
            <input v-else type="text" class="ml-2 w-2/5 text-white border-0 rounded-none bg-gray-600" v-model="editor.current.css.css"/>

            <i class="material-icons moka-icons ml-2" title="Edit CSS classes" @click="$action('edit_css')">edit</i>

            
        </div>
        
    </div>
    -->

    <!-- edit CSS -->
    <!--
    <transition name="slideright">
        
        <moka-modal
            v-if="editCSS"
            position="bottom-right"
            size="md"
            height="3/5"
            @close="editCSS=!editCSS"
            buttons="none">
            <div slot="title">Edit CSS / Style</div>
            <div slot="content" class="bg-gray-300 p-2">
            <div>CSS</div>
            <textarea v-if="editor.current && !editor.current.css.hasOwnProperty('css')" class="w-full h-24 text-gray-800" v-model="editor.current.css"/>
            <textarea v-else class="w-full h-24 text-gray-800 outline-none border-none" v-model="editor.current.css.css"/>
            <div v-if="editor.current && editor.current.css.hasOwnProperty('css')" @>Container CSS</div>
            <textarea v-if="editor.current && editor.current.css.hasOwnProperty('css')" class="w-full h-24 text-gray-800" v-model="editor.current.css.container"/>

            <div>Style</div>
            <textarea class="w-full h-24 text-gray-800" v-model="editor.current.style"/>
            </div>
        </moka-modal>
    </transition>
    -->
    <!--<div v-if="current && current.entity" class="fixed bottom-0 left-0 p-1">{{ current.tag }} <i class="material-icons">{{ current.icon }}</i></div>-->

    <!-- TOOLBAR -->
    
    <transition name="fade">
        <!-- <whoobe-side-bar 
            :current="editor.current"
            :component="doc"
            />  -->
            <!-- @tree="tree=!tree"
            @customize="customize=!customize"
            @edit="$emit('edit',current)"
            @animations="animations=!animations"
            @reusable="$emit('reusable',current)"
            @copy="copy"
            @paste="$emit('paste')"
            @duplicate="$emit('duplicate',current)"
            @preview="$emit('preview')"
            @slider="$emit('slider')"
            @save="$emit('save')"
            @saveblock="$emit('saveblock',current)"
            @import="$emit('import')"
            @delete="confirmModal=!confirmModal"
            @help="help=!help"/> -->

    </transition>
    
    
    <!-- Customizer -->
    <!--
    <transition name="slideright">
        <div v-if="editor.action==='customize'" :class="'fixed right-0 top-0 w-1/5 z-2xtop min-h-screen bg-gray-100 text-xs text-gray-800 ' + customizePos" ref="aContainer">
             <moka-customize-drawer
                :position="customizeSwitch"
                class=""
                :id="customizerID"
                :element="editor.current"
                :component="moka.component"
                @media="media=!media"
                @close="$action()"
                @switch="customizeSwitch=!customizeSwitch"
                @dropwdown="dropdown"/>
        </div>
    </transition>
    -->
    <!-- EDIT CONTENT INLINE -->

    <!--
    <transition name="fade">
        <div v-if="editor.action==='edit' && editor.current && editor.current.type != 'image' && editor.current.type != 'video' && editor.current.type != 'audio' && editor.current.tag != 'menu'" draggable="true" :class="'border shadow-lg text-sm z-2xtop ' + isFullScreen"> 

            <div class="bg-gray-700 text-white p-1 flex items-center">Edit 
                <i class="material-icons ml-2 absolute right-0 mr-12 text-sm" title="Customize" @click="$action('customize')">brush</i>

                <i class="material-icons absolute  right-0  text-white mr-6 cursor-pointer" @click="fullscreen=!fullscreen" :title="fullscreen?'close fullscreen':'fullscreen'">{{fullscreen?'close_fullscreen':'fullscreen'}}</i>

                <i class="material-icons absolute  right-0  text-white mr-1 cursor-pointer" @click="$action(),editContent=!editContent">close</i></div>
            <div class="p-4">
                
                <textarea class="w-full text-base" v-if="editor.current && ( editor.current.type === 'element' || editor.current.element === 'button' ) && editor.current.element != 'p'" v-model="editor.current.content"></textarea>
                
                <moka-text-editor v-if="editor.current && editor.current.tag === 'element' && editor.current.element === 'p'"  v-model="editor.current.content" @close="editContent=!editContent"/>

                <moka-edit-icon v-if="editor.current && ( editor.current.tag === 'icon' || editor.current.tag === 'icon_bt')" :tag="editor.current.tag" v-model="editor.current.content"/>

                
                
            </div>
            
        </div>

        <div class="fixed left-0 top-0 w-1/5 z-2xtop min-h-screen bg-gray-800" v-if="editor.action==='edit' && editor.current && editor.current.tag === 'menu'">
            
            <i class="material-icons absolute top-0 right-0 mt-1 mr-1 cursor-pointer" 
            @click="editContent=!editContent,$action()">close</i>
            
            <moka-edit-menu  :menu="editor.current" @menu="setMenuItems"/>
        </div>

        <div v-if="editor.action === 'edit' && editor.current && (editor.current.type === 'image'||editor.current.type==='video' || editor.current.type === 'audio')" class="nuxpresso-modal md:h-3/5 m-auto md:w-full lg:w-10/12 border shadow-lg text-sm z-top">

            <div class="m-auto p-10 flex flex-col" v-if="editor.current && editor.current.element === 'iframe'" >
                <label>{{editor.current.label}} - Video ID</label>
                <input type="text" class="w-3/4 text-base"v-model="editor.current.content"/>
                <button @click="editor.action = null">OK</button>
            </div>

           
        </div>
    </transition>
    -->

    <!--
    <transition name="fade">
        <moka-editor-actions :action="editor.action"/>
    </transition>    
    -->
    <!--
     <moka-modal 
        size="full"
        v-if="editor.current && editor.current.element && editor.action==='edit' && (editor.current.type === 'image'||editor.current.type==='video' || editor.current.type === 'audio')" 
        @close="editContent=!editContent,$action()">    
        <div slot="title">Select Media</div>
        <div slot="content">
            <moka-edit-media v-if="editor.current.element!='iframe'" class="z-top" @newimage="setImage" :modal="true" @close="editContent=!editContent,$action()"/>
        </div>
    </moka-modal>
    -->
    <!-- PLUGIN SETTINGS -->

    <!--
    <transition name="fade">
        <moka-modal
            position="bottom" 
            size="sm"
            buttons="close"
            v-if="editor.action==='pluginsettings' && editor.current && editor.current.type==='plugin'"
            @close="$action()"
            @click_0="$action()"
            >
            <div slot="title">{{editor.current.plugin.name}} Settings</div>
            <div slot="content">
                <moka-plugin-settings  :id="editor.current.id"/>
            </div>
        </moka-modal>
    </transition>
    -->
    <!-- DELETE OBJECT MODAL -->
    <transition name="fade">
        <moka-modal
            :fixed="true"
            size="sm"
            position="modal" 
            :close="true"
            v-if="confirmModal||editor.action==='delete'"
            @close="confirm=false,confirmModal=false,$action()"
            @click_0="confirm=false,confirmModal=false,$action()"
            @click_1="confirm=true,confirmModal=!confirmModal,removeElement()">
            <div slot="title">Delete object</div>
            <div slot="content" class="p-4">
                Remove the selected object?
            </div>
        </moka-modal>
    </transition>
    
    <!-- MEDIA --->
    <!--
    <transition name="fade">
            <moka-modal
                v-if="media"
                size="full"
                @close="media=!media"
                buttons="none">
                <div slot="title">Select Media</div>
                <div slot="content">
                    <moka-edit-media class="z-max" @newimage="setImage" :modal="true" @close="media=!media"/>
                </div>
            </moka-modal>
    </transition>
    -->

    <!-- TREE -->
    <!--
    <transition name="slideright">
        <div v-if="tree" class="fixed h-screen top-0 right-0 w-3/12 border-l shadow bg-white p-2 z-2xtop overflow-y-auto">
            <div class="relative w-full">
                <moka-tree :doc="editor.current && editor.current.hasOwnProperty('blocks')?editor.current:doc" @close="tree=!tree" @treeselect="treeselect"/>
            </div>
        </div>
    </transition>

    <transition name="fade">
        <div class="fixed z-2xtop top-0 left-0 w-1/3 bg-white" v-if="help">
            <moka-hotkeys @close="help=!help"/>
        </div>
    </transition>
    -->
</div>
</template>

<script>
import WhoobeEditorActions from '@/components/moka/editor/whoobe.editor.actions'
import WhoobeSideBar from '@/components/moka/editor/components/whoobe.editor.side.bar'
import WhoobeStatusBar from '@/components/moka/editor/components/whoobe.editor.status.bar'
import WhoobeContainer from '@/components/moka/editor/components/whoobe.editor.container'
import WhoobeEditorContextMenu from '@/components/moka/editor/components/whoobe.editor.context.menu'
import WhoobeEditorSlides from '@/components/editor/render/moka.editor.slides'
import gsap from 'gsap'
import gsapEffects from '@/plugins/animations'
import { mapState } from 'vuex' 
import jp from 'jsonpath'

export default {
    name: 'WhoobeSelectors',
    data:()=>({
        customizerID: 0,
        //customizePos: 'right-0',
        //customizeSwitch: false,
        //dropdownView: false,
        confirm: false,
        confirmModal: false,
        //printScreen: null,
        current: null,
        toolbar: false, 
        customize: false,
        editContent: false,
        fullscreen: false,
        editCSS: false,
        animations:false,
        media: false,
        breakpoint: 'md',
        tree: false,
        copiedCSS: '',
        currentSlide: null,
        slideIndex: 0,
        slideDelete: false,
        help: false,
        position: {
            x: null,
            y: null
        }
    }),
    components: { 
        WhoobeEditorActions,
        WhoobeContainer,
        WhoobeSideBar,
        WhoobeStatusBar,
        WhoobeEditorContextMenu,
        WhoobeEditorSlides
    },
    props: [ 'doc' , 'component' ],
    
    computed: {
        ...mapState ( ['moka','editor'] ),
        contextMenuComponent(){
            return WhoobeEditorContextMenu
        },
        init(){
            this.current = this.editor.current

            return true
        },
        docCss(){
            return this.doc.id === this.moka.selected ? 'border-orange-300' : ''
        },
        gsapAnimations(){
            return gsapEffects
        },
        coords(){
            return this.current.coords
        },
        
    },
    watch: {
        component(c){
            return null
        },

    },
    methods: {
        selected(el){
            this.current = el 
            this.$store.dispatch('current',el)
        },
        stile(block,doc){
            if ( !block ) return 
            let stile = ''
            if ( block.hasOwnProperty('fontFamily')){
                stile += 'font-family:\"' + block.fontFamily + '\"; '
            }
            return block.hasOwnProperty('style') ? block.style + stile : stile
        },
        background(block){
            if ( !block ) return 
            return block.hasOwnProperty('image') ?
                block.image && block.image.url ? 
                    block.image.previewUrl ? 
                        ' background-image:url(' + block.image.previewUrl + ');background-size:cover;background-repeat:no-repeat;' :
                            ' background-image:url(' + block.image.url + ');' : ''  : ''        
        },
        removeElement(){
            this.$emit ( 'delete' )
            this.$action()
            this.confirmModal = false
            return
        },
        removeSlider(block){
            this.$store.dispatch('setCurrent',block)
            this.$store.dispatch('selected',block.id)
            this.removeElement()
        },
        
        openPreview(){
            window.localStorage.setItem('moka-preview',JSON.stringify(this.doc))
            window.localStorage.setItem('moka-settings', JSON.stringify(this.moka.settings))
            window.localStorage.setItem('whoobe-component',JSON.stringify(this.editor.component))
            let route = this.$router.resolve({path: '/preview'});
            let w = window.open(route.href, 'moka','width=' + window.screen.availWidth );
            w.focus()
        },
        hideContextMenu(){
            this.$refs.contextMenu.style.opacity = 0
            this.$refs.contextMenu.style.left = "-1000px"
        },
        showContext(e){
            e.preventDefault()
            console.log ( window.pageYOffset )
            if ( e.clientX < (window.innerWidth - 300) ) {
                 this.$refs.contextMenu.style.left = (e.clientX - 20) + 'px'
            } else {
                if ( e.clientX < 200 ){
                    this.$refs.contextMenu.style.left = '20px'
                } else {
                    this.$refs.contextMenu.style.left = ( e.clientX - 300 - 20) + 'px'
                }
            }
            if ( e.clientY < 250 ){
                this.$refs.contextMenu.style.top = window.pageYOffset ? window.pageYOffset + 50  + 'px': 50  + 'px'    
            } else {
                this.$refs.contextMenu.style.top = (window.pageYOffset + e.clientY-200) + 'px'
            }
            this.$refs.contextMenu.style.opacity = 1
        },
        duplicateElement(){
            let current = this.current
            delete current.parent  

            var parent = jp.parent ( this.component.json , '$..blocks[?(@.id=="' + current.id + '")]' )
            let i 
            if ( parent ){
                parent.forEach ( (p,index) => {
                    if ( p.id === current.id ){
                        i = index
                    }
                })
                let el = JSON.parse(JSON.stringify(current))
                let obj = this.$clone ( el )
                
                //obj.id = randomID()
                parent.splice ( i+1 , 0 , obj )
                this.$message('Element duplicated')
            }
        },
    },
    mounted(){  
        let vm = this 
        this.current = this.doc.blocks[0].blocks[0]
        this.$store.dispatch('setCurrent',this.current)
        window.addEventListener("keydown", e => {
            if ( e.altKey && e.code === 'KeyB' ){
                this.doc && !this.doc.hasOwnProperty('slider') ?
                    vm.$emit('preview') :
                        vm.$emit('slider')
            }
            if ( e.altKey && e.code === 'KeyN' ){
                vm.openPreview()
            }

            if ( e.altKey && e.code === 'KeyL' ){
                if (window.CustomEvent) {
                    document.getElementById(this.$mapState().editor.current.id).dispatchEvent(new CustomEvent('contextmenu'))
                }
            }
            if ( e.altKey && e.code === 'KeyZ' ){
                if ( this.editor.current  ){
                    this.$action()
                    this.$action('customize')
                    //this.$emit('customize')
                    //this.customize =! this.customize
                }
            }
            if ( e.altKey && e.code === 'KeyW' ){
                if ( this.editor.current  ){
                    this.$action()
                    this.$action('block_edit')
                    this.$emit('edit',this.current)
                }
            }
            if ( e.altKey && e.code === 'KeyA' ){
                if ( this.editor.current  ){
                    this.$action ( 'animation' )
                }
            }
            if ( e.altKey && e.code === 'KeyG' ){
                if ( this.editor.current  ){
                    this.editor.current.css.hasOwnProperty('css') ?
                        this.copiedCSS = this.editor.current.css.css :
                            this.copiedCSS = this.editor.current.css
                }
            }
            if ( e.altKey && e.code === 'KeyH' ){
                if ( this.editor.current  && this.copiedCSS ){
                    this.editor.current.css.hasOwnProperty('css') ?
                        this.editor.current.css.css = this.copiedCSS :  
                            this.editor.current.css = this.copiedCSS
                }
            }
            if ( e.altKey && e.code === 'KeyC' ){
                if ( this.editor.current ){
                    this.$store.dispatch('message','Element copied')
                    this.$emit('copy',this.editor.current)
                }
            }
            if ( e.altKey && e.code === 'KeyV' ){
                if ( this.editor.current  ){
                    this.$emit('paste')
                }
            }
            if ( e.altKey && e.code === 'KeyD' ){
                if ( this.current  ){
                    //this.$emit('duplicate',this.current)
                    this.$emit('duplicate',this.$mapState().editor.component,this.$mapState().editor.current)
                    //this.$block_duplicate(this.$mapState().editor.component,this.$mapState().editor.current)
                    //this.$emit('duplicate',this.editor.current)
                }
            }

            if ( e.altKey && e.code === 'KeyQ' ){
                if ( this.editor.current && this.editor.current.type === 'flex'  ){
                    this.$action('addcomponent')
                    //this.$store.dispatch ( 'setAction' , 'addcomponent' )
                }
            }
            if ( e.altKey && e.code === 'KeyO' ){
                if ( this.editor.current ){
                    this.$action('snapshot')
                    //this.$store.dispatch ( 'setAction' , 'snapshot' )
                }
            }
            if ( e.altKey && e.code === 'KeyR' ){
                if ( this.editor.current  ){
                    this.confirmModal =! this.confirmModal
                }
            }
           
            if ( e.altKey && e.code === 'KeyT' ){
                this.$action('tree')
                //this.tree =! this.tree
            }

           
            if ( e.altKey && e.code === 'KeyI' ){
                this.$action ( 'addcomponent' )
                //this.$store.dispatch ( 'setAction' , 'addcomponent' )
            }
            if ( e.altKey && e.code === 'KeyU' ){
                this.$action ( 'addreusable' )
                //this.$store.dispatch ( 'setAction' , 'addreusable' )
            }
            if ( e.altKey && e.code === 'KeyS' ){
                this.$emit('save')
            }
        })

    }

}
</script>
