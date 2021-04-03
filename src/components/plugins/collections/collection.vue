<template>
    <div class="mr-20">
        <div class="text-sm pmr-20">
        <h5>Registered collections</h5>
        Collections are a way to create your own datasets in the system and importing external data.<br/>
        Any registered collection will be available in whoobe to create content based on collection data. 
        </div>
        <div  class="absolute right-0 top-0 m-1 mr-20 text-sm">
            New collection <input type="text" placeholder="name of the new collection" v-model="new_collection"/>
            <button @click="createCollection" class="ml-2">Create</button>
        </div>
        <div class="grid grid-cols-2 text-sm">
            <div class="flex flex-col relative" v-if="collections">
                <template v-for="collection in collections">
                    <div class="flex flex-row w-1/2 border-b justify-between">
                        {{ collection.collection }} 
                        <div class="relative" @click="current=collection">
                            <input type="file" :id="collection._id" class="btn absolute top-0 left-0 right-0 bottom-0 opacity-0" @change="loadTextFromFile"/>
                            <button class="h-full">Import data</button><span v-if="loading">Loading data ... please wait</span>
                        </div>
                    </div>
                </template>
                <moka-modal 
                    v-if="modal"
                    @close="modal=!modal"
                    @click_0="modal=!modal"
                    @click_1="saveFields">
                    <div slot="title">Import data - {{ data.data.length-1 }} records found!</div>
                    <div slot="content" class="grid grid-cols-2 p-4">
                        <div v-if="data" class="flex flex-col">
                            Import Fields
                            <select v-model="field">
                            <template v-for="field in data.meta">
                                <option :value="field">{{field}}</option>
                                <!--<div><input type="checkbox" v-model="fields[field]"/> {{ field }}</div>-->
                            </template>
                            </select>
                            <div v-if="field && data.data">
                                <div class="text-xs text-gray-500">First row: {{field}} => {{ data.data[1][field] }} </div> <button @click="fields.push(field)">Import field</button>
                            </div>
                            <div v-if="importing">Importing record {{importing}} of {{ data.data.length-1 }}</div>
                            <div v-if="errors">Errors: {{error}}</div>
                        </div>

                        <div v-if="fields.length">
                            
                            Following fields will be imported
                            <draggable>
                                <template v-for="(f,i) in fields">
                                    <div class="grid grid-cols-2 border mb-1 p-1 text-xs items-center">
                                        <div>{{ f }}</div>
                                        <div class="justify-end">
                                            <i class="material-icons text-sm" @click="fields.splice(i,1)">delete</i>
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                </moka-modal>

            </div>
            
        </div>
    </div>

</template>

<script>
//import  Papa  from 'papaparse'
import draggable from 'vuedraggable'
export default {
    name: 'MokaCollections',
    components: { draggable },
    data:()=>({
        collections: null,
        current: null,
        new_collection: '',
        key: '0299ka@@as000122212',
        data: null,
        meta: null,
        loading: false,
        field: null,
        fields: [],
        modal: false,
        importing: 0,
        errors:[],
        error:0
    }),
    mounted(){
        this.$api.service ( 'collections' ).find ().then ( result => {
            this.collections = result.data
        })
    },
    methods:{
        getData(name){
            this.current = 
            this.$api.service( 'collection/' + name ).find().then ( result => {
                console.log ( result.data )
            })
        },
        createCollection(){
            const data = {
                collection: this.new_collection,
                key: this.key
            }
            this.$api.service ( 'collections' ).create ( data ).then ( res => {
                this.collections.push ( res )
            })
        },
        loadTextFromFile(ev) {
            const file = ev.target.files[0];
            let reader = new FileReader();
            reader.readAsText(file);
            let vm = this
            reader.onload = function() {
                vm.data = vm.$csvjson(reader.result,';')
                vm.modal = true
            };
        },
        saveFields(){
            this.current['fields'] = this.fields
            console.log ( this.current )
            this.$api.service ( 'collections' ).patch ( this.current._id , this.current  ).then ( result => {
                console.log ( result )
                let importData = this.data.data
                importData.forEach ( (record) => {
                    let row = {}
                    this.fields.forEach ( f => {
                        row[f] = record[f]
                    })
                   
                    this.$api.service ( 'datastore/' + this.current.collection ).create ( row ).then ( res => {
                        this.importing++
                    }).catch ( error => {
                        this.errors.push ( row )
                        this.error++
                    })
                })
            })
        }
    }

}
</script>