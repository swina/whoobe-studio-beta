<template>
    <div v-if="current">
        <template v-for="(field,index) in Object.keys(datastore.schema.plugins)">
                    
            <details v-if="current.hasOwnProperty(field)">
                <summary  class="bg-gray-200 p-1 mt-1 text-lime-600 text-lg outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold" @click="summary=field">{{ field }}</summary>
                <div v-if="summary.includes(field)">
                    <template v-for="f in Object.keys(current[field]).sort()">
                        
                        <div v-if="current[field].hasOwnProperty(f) && typeof current[field][f] === 'object'" class="p-2 bg-gray-300">
                            
                            <details> 
                                <summary class="outline-none border-0 focus:outline-none cursor-pointer  capitalize font-bold" @click="summary=field+f">{{ f }}</summary>
                                <div  v-if="summary===(field+f)">
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
                            <textarea class="w-full" v-if="f==='config'" v-model="current[field][f]"></textarea>
                        </div>
                    
                    </template>
                </div>
            </details>
            
        </template>
    </div>
</template>

<script>
/*
class plugin {
    constructor ( general , component , editor ){
        this.general = {
            name : general.name,
        }
        this.component = {
            config: general.config,
            path: general.path
        },
        this.editor = {
            settings : settings
        }
    }
}
*/
import { mapState } from 'vuex'
export default {
    name: 'MokaPluginConfigurator',
    data:()=>({
        summary: '',
        plugin : null,
    }),
    computed: {
        ...mapState ( ['datastore'] )
    },
    props: [ 'current' ]
}
</script>