<template>
    <div class="relative">
        <component :is="component"
            :config="$attrs.component.config" :settings="$attrs.settings" :plugin="$attrs.plugin" :block="$attrs.block" :el="$attrs.plugin"/>
        <!--
        <module-wrapper 
            v-if="isModule"
            :component="this.$attrs.component"
            :editor="this.$attrs.editor"
            :settings="this.$attrs.settings"/>
        -->
    </div>
</template>

<script>
import ModuleWrapper from './Module.Wrapper'
export default {
    components: { ModuleWrapper },
    data:()=>({
        component: null,
        enabled: false,
    }),
    computed:{
        //isModule(){
        //    return this.$attrs.component.module.url ? true : false
        //}
    },
    mounted(){
        //if ( !this.isModule ){
            let name = this.$attrs.component.path
            console.log ( 'Load component => ' , this.$attrs.component.path , name )
            this.component = () =>  import(/* webpackChunkName: 'whoobe_' */ '@/components/plugins/' + name )
        //}
    }
}
</script>