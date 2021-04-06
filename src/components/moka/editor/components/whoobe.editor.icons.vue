<template>
    <div :data="init" class="p-2">
        <!-- material icons -->
        <div v-if="icon.type === 'icon'" class="flex flex-col">

            <i class="material-icons m-auto p-2 border" v-if="icon.content">{{ icon.content }}</i>
            
            <div class="text-xs text-center">{{ icon.content }}</div>

            <input type="text" class="w-full" v-model="search" @keyup="iconSearch" placeholder="search icon"/>
            
            <label v-if="!search">Icon Category</label>
            <select class="w-full" v-if="!search"  v-model="groupicon">
                <option v-for="(group,i) in iconsGroups" :value="group">{{ group }}</option>
            </select> 
            <div class="flex flex-row flex-wrap overflow-y-auto" style="height:10rem;min-height:10rem;max-height:10rem" v-if="!search && groupicon">
                <i v-for="(icon,n) in allIcons[groupicon]" class="flex flex-row flex-wrap material-icons cursor-pointer m-2" @click="insertIcon(icon)" :title="icon">{{ icon }}</i>
            </div>
            <div v-if="search.length > 2 && searchIcons" class="flex flex-row flex-wrap overflow-y-auto" style="height:10rem;min-height:10rem;max-height:10rem">
                <i v-for="(icon,n) in searchIcons" class="flex flex-row flex-wrap material-icons cursor-pointer m-2" @click="$emit('input',icon)">{{ icon }}</i>
            </div>
        </div> 

        <!-- bootstrap icons -->
        <div v-if="icon.type === 'icon_bootstrap'" class="flex flex-col">
            
            <div class="flex flex-row">
            <input type="text" placeholder="search icon" v-model="bt_icon_search"/>
                <i class="bi-caret-left-fill" @click="bt_start=bt_start-100" v-if="bt_start>0"></i>
                <i class="bi-caret-right-fill" @click="bt_start=bt_start+100"></i>
            </div>
            <div class="flex mt-2 h-48 flex-row px-1 bg-white items-start flex-wrap overflow-y-auto" style="" v-if="bt_icons">
                <template v-for="icon in bt_icons_found">
                    <i :class="'bi-' + icon + ' text-xl m-1 float-left'" :title="icon" @click="insertIcon(icon)"></i>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import booticons from '@/plugins/bootstrap.icons'
import icons from '@/plugins/icons'

export default {
    name: 'WhoobeSelectIcon',
    data:()=>({
        groupicon:'',
        iconsGroups: null,
        allIcons: null,
        search: '',
        searchIcons: null,
        bt_icons: null,
        bt_icon_search:'',
        bt_icons_found:null,
        bt_start: 0
    }),
    mounted(){
        //this.bt_icons = booticons
        //this.bt_icon_search = this.$attrs.value 
        //this.populateIcons()
    },
    computed:{
        ...mapState( ['moka'] ),
        icon(){
            return this.$mapState().editor.element
        },
        editor(){
            return this.$mapState().editor
        },
        init(){
            this.bt_icons = booticons
            let ico = icons.icons
            this.iconsGroups = Object.keys(ico) 
            this.allIcons = icons.icons
        }
    },
    watch:{
        search(v){
            this.iconSearch()
        },
        bt_icon_search(v){
            if ( v ){
                this.bt_icons_found = this.bt_icons.filter ( icon => icon.includes(v) )
            } else {
                this.bt_start = 0 
                this.populateIcons()
            }
        },
        bt_start(v){
            this.populateIcons()
        }
    },
    methods:{
        insertIcon(icon){
            if ( this.icon.type === 'icon' ){
                //material icons
                if ( this.editor.current.tag === 'icon' ){
                    this.editor.current.content = icon
                    this.editor.current.icon = icon
                } else {
                    this.editor.element.content = icon
                    this.editor.element.icon = icon
                    this.editor.element.id = this.$randomID()
                    this.editor.current.blocks.push ( this.editor.element )
                    this.$action()
                }
            } else {
                //bootstrap icons
                let newIcon = {
                        "css": "",
                        "tag": "icon_bt",
                        "icon": "crop_original",
                        "link": "",
                        "type": "media",
                        "label": "Icon",
                        "style": "",
                        "content": icon,
                        "element": "icon",
                        "id": 'moka-' + Math.random().toString(36).substr(2, 5)
                }
                this.editor.current.blocks.push ( newIcon )
                this.$action()
            }
        },
        populateIcons(){
            this.bt_icons_found = []
            for ( var n = this.bt_start ; n < (this.bt_start+100) ; n++){
                this.bt_icons_found.push ( this.bt_icons[n] )
            }
        },
        iconSearch(){
            let allmicons = Object.values(this.allIcons).join(',').split(',')
            if ( this.search.length > 1 ){
                this.searchIcons = allmicons.filter( icon => icon.indexOf( this.search ) > -1 )
            }
        }
    }
}
</script>
