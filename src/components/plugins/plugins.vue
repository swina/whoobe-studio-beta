<template>
    <div class="p-2 flex flex-col">
        <div class="grid grid-cols-3 grid-flow-row items-center" style="grid-template-columns:1fr 2fr 1fr;">
            <button @click="addPlugin">Add plugin</button> 
        </div>
        <div class="grid grid-cols-4 gap-4" v-if="plugins">
            <template v-for="plugin in plugins">
            <div class="p-4 relative shadow border rounded justify-center items-center flex flex-col">
                <i v-if="!plugin.general.enabled" class="material-icons text-5xl bg-gray-300 p-2 rounded-full">settings_input_component</i>
                <i v-if="plugin.general.enabled" class="material-icons text-5xl bg-lime-500 p-2 rounded-full">settings_input_component</i>
                <div>{{ plugin.general.name }}</div>
                <div class="text-sm text-center">{{ plugin.general.description || '   '}}</div>
                <button :class="plugin.general.enabled?'danger':'success'">{{ plugin.general.enabled ? 'Disable' : 'Enable' }}</button>
                <i class="material-icons absolute right-0 top-0 m-1 cursor-pointer text-gray-300" @click="removePlugin(plugin)">delete</i>
                <i class="absolute bottom-0 right-0 m-1 material-icons my-2" @click="current=plugin,pluginSettings=!pluginSettings">build</i>
            </div>
            </template>
        </div>
        <moka-modal
            size="lg"
            position="modal"
            v-if="pluginSettings"
            @close="pluginSettings=!pluginSettings"
            @click_0="pluginSettings=!pluginSettings"
            @click_1="savePlugin(),pluginSettings=!pluginSettings">
            <div slot="title">{{ current.general.name || 'New Plugin' }} settings</div>
            <div slot="content" class="relative h-3/5 p-2 w-full ">
                <div class="absolute overflow-y-auto h-full w-11/12 m-2 bg-white">
                <moka-plugin-configurator :current="current"/>
                <!--
                <template v-for="(field,index) in Object.keys(datastore.schema.plugins)">
                    
                    <details v-if="current.hasOwnProperty(field)">
                        <summary  class="bg-gray-200 p-1 mt-1 text-lime-600 text-lg outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold">{{ field }}</summary>
                        
                        <template v-for="f in Object.keys(current[field]).sort()">
                            
                            <div v-if="current[field].hasOwnProperty(f) && typeof current[field][f] === 'object'" class="p-2 bg-gray-300">
                                
                                <details> 
                                    <summary class="outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold">{{ f }}</summary>
                                    
                                    <template v-for="ff in Object.keys(current[field][f])">
                                        <div v-if="current[field][f].hasOwnProperty(ff)" :key="field+f+ff">
                                            <label>{{ ff }}</label>
                                            <input type="text" v-if="typeof current[field][f][ff]==='string' && ff != 'config'" class="w-full" v-model="current[field][f][ff]"/>
                                            <input type="number" v-if="typeof current[field][f][ff]==='number' && ff != 'config'" class="w-full" v-model="current[field][f][ff]"/>
                                            <input class="float-left" type="checkbox" v-if="typeof current[field][f][ff]==='boolean'" v-model="current[field][f][ff]">
                                        </div>
                                    </template>
                                    <div>
                                        <button class="sm">Add key</button>
                                    </div>
                                </details>
                                
                            </div>
                            <div v-else class="p-2">
                           
                                <label class="capitalize">{{ f }}</label>
                                <input type="text" v-if="typeof current[field][f]==='string' && f != 'config'" class="w-full" v-model="current[field][f]"/>
                                <input class="float-left" type="checkbox" v-if="typeof current[field][f]==='boolean'" v-model="current[field][f]">
                                <div v-if="typeof current[field][f] === 'object'">
                                    {{ current[field][f] }}
                                </div>
                                <textarea class="w-full" v-if="f==='config'" v-model="JSON.stringify(current[field][f])"></textarea>
                            </div>
                        
                        </template>
                    </details>
                    
                </template>
                -->
                </div>
                <!--        
                <div class="absolute overflow-y-auto h-full w-full bg-white">
                    <div class="grid grid-cols-2 gap-1 p-4 ">
                        <template v-for="(field,index) in Object.keys(datastore.schema.plugins)">
                            {{ field }}
                        </template



                            <div class="p-2 bg-gray-200 col-span-2" v-if="typeof current[field] === 'object' && Object.keys(current[field])">
                                <transition name="fade">
                                <details>
                                <summary class="text-lime-600 text-lg outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold">{{ field }}</summary>
                                <template v-for="f in Object.keys(current[field])"> 
                                    <div class="flex flex-col" v-if="typeof current[field][f] === 'object' && Object.keys(current[field][f])">
                                        <details>
                                        <summary class="outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold">{{ f }}</summary>
                                        <div class="p-2 flex flex-col bg-gray-100">
                                            <template v-for="ff in Object.keys ( current[field][f] ) ">
                                                <label class="capitalize">{{ff}}</label>
                                                
                                                <input type="text" v-if="typeof current[field][f][ff]==='string' && ff!='id' && ff!='config'" class="w-full" v-model="current[field][f][ff]"/>
                                                
                                                <input type="checkbox" v-if="typeof current[field][f][ff]==='boolean'" v-model="current[field][f][ff]">

                                                <textarea class="w-full" v-if="ff==='config'" v-model="configField"></textarea>
                                            </template>
                                        </div>
                                        </details>
                                    </div>
                                    <div v-else>
                                    <label class="capitalize font-bold">{{ f }}</label>
                                      
                                    <input type="text" v-if="typeof current[field][f]==='string' && f!='id' && f!='config'" class="w-full" v-model="current[field][f]"/>
                                    <input class="float-left" type="checkbox" v-if="typeof current[field][f]==='boolean'" v-model="current[field][f]">
                                    <textarea class="w-full" v-if="f==='config'" v-model="configField"></textarea>
                                    </div>

                                </template>
                                </details>
                                </transition>
                            </div>
                            <div v-else>
                                <label class="capitalize w-24" v-if="field!='id'">{{field}}</label>
                                <div class="flex flex-col">
                                    
                                    <input type="text" v-if="typeof current[field]==='string' && field!='id'" class="w-full" v-model="current[field]"/>
                                    <input type="checkbox" v-if="typeof current[field]==='boolean'" v-model="current[field]">
                                    
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                -->
            </div>
            <div slot="footer" class="p-4 bg-red-100 text-center">
                <i>Please read the documentation before to enable/install a plugin</i>
            </div>
        </moka-modal>
    </div>
</template>

<script>
import MokaPluginConfigurator from './plugins.configuration'
import { mapState } from 'vuex'
export default {
    name: 'MokaPlugins',
    components: {
        MokaPluginConfigurator
    },
    data:()=>({
        plugins: null,
        current: null,
        config: '',
        pluginSettings: false,
        pluginNew: false,
        configStr: {},
        configField: '{}'
    }),
    computed:{
        ...mapState ( ['moka','datastore'] )
    },
    watch:{
        pluginSettings(v){
            return
            if ( v ){
                return null //this.configField = JSON.stringify(this.current.config)
            }
        }
    },
    methods: {
        addPlugin(){
            let plugin = Object.assign ( {} , this.datastore.schema.plugins ) //this.plugins[1] )
            
            Object.keys(plugin).map ( key => {
                if ( typeof plugin[key] === 'string' ) {
                    plugin[key] = ''
                } 
                if ( typeof plugin[key] === 'boolean' ) {
                    plugin[key] = false
                }
                if ( typeof plugin[key] === 'object' ) {
                    this.configStr[key] = ''
                }
                    
            }) 
            plugin.id = this.$randomID()
            this.current = plugin

            this.pluginSettings = true
            this.pluginNew = true
            
        },
        savePlugin(){
            /*let updates = this.plugins.map ( plugin => {
                if ( plugin.id === this.current.id ){
                    return this.current
                } else {
                    return plugin
                }
            })
            */

            //this.current.component.config = this.configField ? JSON.parse(this.configField) : ''
            if ( this.pluginNew ){
                this.$api.service ( 'plugins' ).create ( this.current ).then ( res => {
                    console.log ( 'created=>',res )
                    this.plugins.push ( this.current )
                    //this.$store.dispatch ( 'dataset' , { table: 'plugins' , data: res })
                })
                this.pluginNew = false
            } else {
                this.$api.service ( 'plugins' ).patch ( this.current._id  , this.current ).then ( res => {
                    console.log ( 'patched=>',res )
                    //this.$store.dispatch ( 'dataset' , { table: 'plugins' , data: res })
                })
            }
            return 
        },
        removePlugin(plugin){
            this.$api.service('plugins').remove(plugin._id).then ( res => {
                this.$api.service('plugins').find ().then ( response=> {
                    this.plugins = response.data
                })
            })
        }
    },
    mounted(){
        this.$api.service('plugins').find ().then ( response=> {
            this.plugins = response.data
        })
        //this.plugins = this.datastore.dataset.plugins ? this.datastore.dataset.plugins : null
    }
}
</script>