<template>
    <div v-if="actions[editor.action] || actions[editor.subaction]">

        <whoobe-modal-fullscreen 
            v-if="modal.size==='full' || modal.size==='fullscreen'" :position="modal.position" 
            @close="$action()">
            <div slot="title">{{ actions[editor.action].title }}</div>
            <div slot="content">
                <component :is="component" :component="component"/>
            </div>
        </whoobe-modal-fullscreen>
    
        <moka-modal 
            v-if="modal.size!='full' && modal.size != 'fullscreen'" 
            :modal="modal"
            :size="modal.size||''"
            :position="modal.position||'modal'"
            :height="modal.height||''"
            buttons="none"
            :resize="true"
            :move="true"
            @close="$action(),name=null" @click_0="$action(),name=null">
            <div slot="title">{{ modal.title || title }}</div>
            <div slot="content">
            <transition name="fade">
                <component :is="component" :component="component"/>
            </transition>
            </div>
        </moka-modal>
    </div>
</template>

<script>
/**
 * * Actions controller
 * Loads relative component dynamically in a modal window components 
 * defined in ./plugins/components.js
 * !props
 *  @action
 */
import __components from '@/plugins/components'
import WhoobeModalFullscreen from '@/components/modals/modal.fullscreen'
//import { mapState } from 'vuex'
export default {
    name: 'WhoobeEditorActions',
    components: {
        WhoobeModalFullscreen
    },
    data:()=>({
        name: '',
        title: 'settings',
        
    }),
    computed:{
        //...mapState ( ['editor'] ),
        modal(){
            return this.actions[this.editor.action]
        },
        editor(){
            return this.$mapState().editor
        },
        actions(){
            return __components.actions
        },
        component(){
            if ( !this.actions[this.editor.action] ) return 
            if ( !this.editor.action ) return null
            //let comp = this.actions[this.editor.action].component
            //return () =>  import( '@/components/' + comp )  
            let comp

            let current = this.editor.current
            //this.$mapState().desktop.tabs[ this.$mapState().desktop.currentTab ].resumeAction = this.editor.action
            
            // this.modal = {
            //     size: this.actions[this.editor.action].size || '',
            //     title: this.actions[this.editor.action].title || 'Settings'
            // }
            if ( this.editor.action === 'block_edit' ){
                if ( this.editor.action === 'block_edit' && this.editor.current.hasOwnProperty('image') ){
                    // this.modal = {
                    //     size: this.actions.media.size,
                    //     title: this.actions.media.title
                    // }
                    comp = this.actions.media.component
                }
                if ( this.editor.action === 'block_edit' && current.tag === 'element' && ( current.element === 'div' || current.element === 'p' || current.element === 'h' || current.element === 'span' ) ){
                    comp = 'blocks/editor/components/editing/whoobe.editor.multi.editing'
                    // this.modal.size = 'lg'
                    // this.modal.title = 'Edit content'
                }
                if ( current && ( current.tag === 'icon' || current.tag === 'icon_bt') ) {
                    comp = 'blocks/editor/components/editing/whoobe.editor.multi.editing'
                    // this.modal.size = 'md'
                    // this.modal.title = 'Edit Icon'
                }
            } else {
                comp = this.actions[this.editor.action].component
            }
            
            return () =>  import( '@/components/' + comp )
            
        },
    },
    methods: {
        noResumeAction(){
            this.$mapState().desktop.tabs[ this.$mapState().desktop.currentTab ].resumeAction = null
        }
    },
    watch:{
        /*
        action(v){
            if ( v ){
                let name, component
                if ( !__components.actions.hasOwnProperty(this.action) ) return
                if ( !__components.actions[this.action] ) return
                component = __components.actions[this.action]
                this.modal = {
                    action: component.action,
                    height: component.height || '',
                    size: component.size || '',
                    position: component.position || ''
                }
                this.name = __components.actions[this.action].component 
                this.title = __components.actions[this.action].title || 'Settings'
            }
        }
        */
    },
    mounted(){
        /*
        let name, component
        this.editor.action === 'block_edit' && this.editor.current.hasOwnProperty('image') ? console.log ( 'open media ') : null
        if ( !__components.actions.hasOwnProperty(this.action) ) return
        if ( !__components.actions[this.action] ) return
        component = __components.actions[this.action]
        this.modal = {
            action: component.action,
            height: component.height || '',
            size: component.size || '',
            position: component.position || ''
        }
        this.name = __components.actions[this.action].component 
        this.title = __components.actions[this.action].title || 'Settings'
        */
    }
}
</script>