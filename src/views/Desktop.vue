<template>
    <div class="w-screen min-w-screen">
        
        <nav :class="'desktop-nav ' + size" style="transition:all .4s linear;">
            <img src="logo.svg" class="pl-2 my-2 animate-pulse" title="whoobe codes!" @click="navOpen=!navOpen"/>
            <template v-if="menu && menu.items" v-for="item in menu.items">
                <div @click="newTab(item,null)" @mouseenter="submenu=item.label">
                    <i class="material-icons mr-2" :title="item.label">{{ item.icon }}</i>
                    
                        <div v-if="navOpen" >{{ item.label }}</div>
                        <div v-else>
                            
                            
                            <div class="desktop-nav-submenu capitalize" v-if="item.hasOwnProperty('items') && submenu === item.label && item.items.length" @mouseleave="submenu=''">
                                <div style="border:0;background:black;color:white">{{ item.label }}</div> 
                                <template v-for="sub in item.items">
                                    <div style="transition: all .5s linear;" @click="newTab(sub,item),submenu=''">{{ sub.label }}</div>
                                </template>
                            </div>
                            <div class="desktop-nav-submenu capitalize" v-if="item.hasOwnProperty('function') && submenu===item.label" @mouseleave="submenu=''">
                                <div style="border:0;background:black;color:white">{{ item.label }}</div> 
                                <template v-for="sub in datastore[item.function]">
                                    <div style="transition: all .5s linear;" @click="newTab(sub,item),submenu=''">{{ sub.label }}</div>
                                </template>
                            </div>
                            
                            
                        </div>
                </div>
            </template>
        </nav>
        <div class="flex flex-col w-screen">
            <!-- TABS -->
            <div class="desktop-tabs h-9 capitalize" v-if="desktop.tabs.length > 0">
                <template v-for="(tab,i) in desktop.tabs">
                    <div :key="'tab' + i" :class="'relative desktop-tab ' + active(i)" @click="desktop.currentTab=i,currentTab=i,$action()" :title="tab.name">
                        <span>
                            <i v-if="tab.icon" class="material-icons text-sm mr-1 text-orange-500">{{tab.icon}}</i> {{ tab.name }}
                        </span> 
                        <i class="desktop-tab-close material-icons" @click="removeTab(i)">close</i>
                        <div class="desktop-tab-point"></div>
                    </div> 
                        
                </template>
                
            </div>
            <div class="desktop-container" v-if="desktop.tabs.length > 0 && currentTab > -1">
                <div :class="activeTab(currentTab)">
                    
                    <div class="pb-16 mr-16">
                        
                        <component 
                            :id="$randomID()" 
                            v-if="desktop.tabs[currentTab]" 
                            :is="desktop.tabs[currentTab].component" 
                            :component="desktop.tabs[currentTab].component" 
                            :filter="desktop.tabs[currentTab].filter" 
                            :blocks="desktop.tabs[currentTab].blocks" 
                            @newtab="currentTab=desktop.tabs.length-1" 
                            :tab="currentTab"/>
                    </div>
                </div>
            </div>
            <div v-if="desktop.tabs.length === 0" class="desktop">
                <div>
                    <img src="../assets/whoobe-logo-2-colors.svg" class="w-64 m-auto grayscale opacity-25"/>
                    <div class="text-gray-400 text-sm -mt-4 text-right font-hairline">S T U D I O</div>
                    <div class="z-2xtop text-sm">Current CMS is : {{ server }} <button class="sm">Change</button></div>
                    <div class="absolute top-0 left-0 bottom-0 right-0 p-10"><quickstart></quickstart></div>
                </div>
                
            </div>
            
        </div>
    </div>
</template>
<script>
import Menu from '../plugins/app'
import Quickstart from './Quickstart'
import { mapState } from 'vuex'
export default {
    name: 'Desktop',
    components: { Quickstart },
    data:()=>({
        navOpen: false,
        tabGroup: null,
        tabs: [],
        currentTab:0,
        submenu: '',
        menu: {}
    }),
     watch:{
        //tabs(v){
        //    !this.tabs.length ? currentTab = -1 : null 
        //},
        currentTab(v){
            this.currentTab > 0 && this.desktop.tabs.length === 1 ?
                this.currentTab = 0 : null
            
            // this.currentTab < 0 && this.desktop.tabs.length > 0 ?
            //     this.currentTab = 0 : null
            // this.desktop.currentTab = this.currentTab
        },
        
    },
    computed: {
        ...mapState ( [ 'desktop','datastore'] ),
        server(){
            return window.localStorage.getItem ( 'moka-strapiurl' )
        },
        size(){
            return this.navOpen ? 'w-full md:w-1/4 lg:w-1/5' : 'w-10'
        },
        
    },
    methods:{
        active(index){
            return index === this.currentTab ? 'bg-gray-900 text-white' : ''
        },
        activeTab(index){
            return index === this.currentTab ? '' : 'hidden'
        },
        newTab ( item , parent ){
            if ( !item.path ) return 
            let compName = item.path
            this.$store.dispatch ( 'filter' , item.filter )
            this.$store.dispatch ( 'setCurrent' , null )
            this.desktop.tabs.push ( {
                component: () => import ( '@/components/' + compName ) ,
                name: item.label ,
                icon: item.icon ? item.icon : parent ? parent.icon : null,
                filter: item.filter,
                mode: item.label.toLowerCase(),
                ref: this.$randomID(),
                resumeAction: null,
                blocks: null,
            })
            this.currentTab = this.desktop.tabs.length -1
            //this.desktop.currentTab = this.desktop.tabs.length - 1
            //this.component = () => import ( '@/components/' + compName )
            
            
        },
        removeTab(index){       
            this.currentTab = index-1
            this.desktop.tabs.splice(index,1)
            this.desktop.currentTab = index-1
            console.log ( '>>>>>' , this.currentTab )
            //if ( this.desktop.tabs.length > 1 ){
            //}   
        },
        dropwdownMenu ( label ){
            this.submenu = label
        },
    },
    mounted(){
        this.menu = Menu
    }
}
</script>
