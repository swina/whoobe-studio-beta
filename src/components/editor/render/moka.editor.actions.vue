<template>
    <moka-modal 
        :size="modal.size||''"
        :position="modal.position||''"
        :height="modal.height||''"
        buttons="none" 
        v-if="component && editor.action && editor.action === modal.action" 
        @close="$action(),name=null" @click_0="$action(),name=null">
        <div slot="title">{{ title }}</div>
        <div slot="content">
        <transition name="fade">
            <component :is="component" :component="component"/>
        </transition>
        </div>
    </moka-modal>
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
import { mapState } from 'vuex'
export default {
    name: 'MokaEditorActions',
    props: ['action'],
    data:()=>({
        name: '',
        title: 'settings',
        modal: null
    }),
    computed:{
        ...mapState ( ['editor'] ),
        component(){
            if ( this.name ){
                return () =>  import( '@/components/' + this.name )
            }
        },
    },
    watch:{
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
    },
    mounted(){
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
</script>