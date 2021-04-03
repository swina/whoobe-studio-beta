<template>
    <div :id="$randomID()" class="p-2 flex flex-col" :data="dataload">
        <div class="grid grid-cols-2 grid-flow-row items-center">
            <!--<h3 class="">Blocks <span v-if="filter||$attrs.filter"><span class="capitalize">{{ $attrs.filter || filter }}s</span></span></h3> -->
            <div class="flex justify-start">
                <button @click="create=!create" class="mr-2">Create New</button>
                <button @click="importJSON=!importJSON" class="mr-2">Import</button>
                <button @click="exportComponent=!exportComponent" class="mr-2">Export Category</button>
                <button v-if="moka.library && moka.library.length" @click="exportLibrary=!exportLibrary">Export Selected [{{moka.library.length}}]</button>
                <button @click="saveLocal()">Save</button>
            </div> 
            <div class="flex flex-row justify-end">
                <i class="material-icons" @click="refresh">refresh</i>
                <i class="material-icons" v-if="!gallery" @click="gallery=!gallery">grid_on</i>
                <i class="material-icons" v-if="gallery" @click="gallery=!gallery">list</i>
            </div>
        </div>
        <div v-if="datastore.dataset.elements" class="py-2 flex flex-row flex-wrap">
            <button class="light w-20 mr-2" @click="type='',types=false">all</button>
            <button v-if="$attrs.filter!='slider'" class="light" @click="types=!types,type=''"><i class="material-icons">filter_alt</i></button>
            <transition name="fade">
                <div v-if="types && $attrs.filter!='slider'" class="flex flex-row justify-between">
                    <template v-for="tipo in datastore.dataset.elements[0].types.types">
                        <button class="light mx-1 capitalize" @click="type=tipo">{{ tipo }}</button>
                    </template>
                </div>
            </transition>
        </div>
        

        <moka-gallery
            :id="$randomID()"
            :gallery="gallery"
            :filter="filter" 
            :type="type"
            @component="setComponent" 
            @preview="setPreview"  
            @remove="remove" 
            @duplicate="duplicate"/>

        <transition name="fade">
            <moka-modal
                :id="$randomID()"
                v-if="create"
                buttons="save"
                :close="true"
                @click_0="create=!create"
                @click_1="saveNewComponent"
                @close="create=!create">
                <div slot="title">Create new block</div>
                <div slot="content">
                    <label>Name*</label>
                    <input class="w-full" type="text" v-model="newComponent.name"/>
                    <label>Category</label>
                    <select class="w-full" v-model="newComponent.category">
                        <option value="component">component</option>
                        <option value="widget">widget</option>
                        <option value="template">template</option>
                        <option value="page">page</option>
                        <option value="slider">slider</option>
                        <option value="gallery">gallery</option> 
                    </select>
                    <label>Description</label>
                    <textarea class="w-full" v-model="newComponent.description"/>
                </div>
            </moka-modal>
            <!--
            <div class="nuxpresso-modal w-1/3 bg-gray-800 text-gray-500 p-4 flex flex-col text-sm" v-if="create">
                <i class="material-icons absolute top-0 right-0 cursor-pointer" @click="create=!create">close</i>
                <h4>New block</h4>
                <label>Name*</label>
                <input class="w-full dark" type="text" v-model="newComponent.name"/>
                <label>Category</label>
                <select class="w-full dark" v-model="newComponent.category">
                    <option value="component">component</option>
                    <option value="widget">widget</option>
                    <option value="template">template</option>
                    <option value="page">page</option>
                    <option value="slider">slider</option>
                    <option value="gallery">gallery</option> 
                </select>
                <label>Description</label>
                <textarea class="w-full dark" v-model="newComponent.description"/>
                <button @click="saveNewComponent" class="my-2">Save</button>
            </div>
            -->
        </transition>
        <transition name="fade">
            <div class="absolute top-0 left-0 min-h-screen w-screen bg-white" v-if="preview">
                
                <moka-preview :id="$randomID()" :category="component.category" :doc="doc" v-if="!doc.hasOwnProperty('slider')" @close="preview=!preview" :dashboard="true"/>

                <moka-slider :id="$randomID()" v-if="doc.hasOwnProperty('slider')" :embeded="true" :doc="doc" @close="preview=!preview"/>
            </div>
        </transition>
        <!-- IMPORT BLOCKS -->
        <transition name="fade">
            <moka-modal
                :id="$randomID()"
                v-if="importJSON"
                buttons="close"
                :close="true"
                @click_0="importJSON=!importJSON"
                @close="importJSON=!importJSON">
                <div slot="title">Import Block</div>
                <div slot="content">
                    <moka-upload @close="importJSON=!importJSON" @imported="reloadData"/>
                </div>
            </moka-modal>
            <!--
            <div v-if="importJSON" class="nuxpresso-modal w-full md:w-1/3 bg-gray-800 rounded border-4 border-gray-500  shadow-xl p-2 text-gray-600 text-sm">
                <moka-upload @close="importJSON=!importJSON"/>
            </div>
            -->
        </transition>
        
        <!-- EXPORT COMPONENT -->
        <transition name="fade">
            
            
            <moka-modal
                :id="$randomID()"
                v-if="exportComponent"
                :close="true"
                buttons="close"
                @click_0="exportComponent=!exportComponent"
                @close="exportComponent=!exportComponent">
                <div slot="title" class="capitalize">Export Blocks Category {{ filter }}</div>
                <div slot="content">
                     <div>
                        <label>Save as</label><br/>
                        <input class="w-3/4" type="text" v-model="filename"/>.json
                    </div>
                    <vue-blob-json-csv
                        file-type="json"
                        :file-name="filename"
                        :data="blocks_dump">
                        <button class="my-2 success" @click="exportComponent=!exportComponent">Download Library</button>
                        Blocks: {{ blocks_dump.length }}
                    </vue-blob-json-csv>
                </div>
            </moka-modal>
            <!-- <div v-if="exportComponent" class="nuxpresso-modal w-full  border-4 border-gray-500 md:w-1/3 bg-gray-800 rounded shadow-xl p-2 text-gray-600 text-sm z-2xtop">
                <i class="material-icons absolute top-0 right-0 m-1 cursor-pointer" @click="exportComponent=!exportComponent">close</i> -->
                <!--<h4>Export Category</h4>
                <div>
                    <label>Save as</label><br/>
                    <input class="dark" type="text" v-model="filename"/>.json
                </div>
                <vue-blob-json-csv
                    file-type="json"
                    :file-name="filename"
                    :data="blocks_dump"
                    
                >
                <button class="my-2 success" @click="exportComponent=!exportComponent">Download Library</button>
                Blocks: {{ blocks_dump.length }}
                </vue-blob-json-csv>-->
            <!-- </div> -->
        </transition>
        <!-- EXPORT SELECTED -->
        <transition name="fade">
            <div v-if="exportLibrary && moka.library && moka.library.length" class="nuxpresso-modal w-full  border-4 border-gray-500 md:w-1/3 bg-gray-800 rounded shadow-xl p-2 text-gray-600 text-sm z-2xtop">
                <i class="material-icons absolute top-0 right-0 m-1 cursor-pointer" @click="exportLibrary=!exportLibrary">close</i>
                <h4>Export Selected</h4>
                <div class="w-full flex flex-row">
                    <select size="10" class="w-3/4 h-32" v-model="libraryComponent">
                        <option v-for="(block,index) in moka.library" :value="index">{{ block.category }} - {{ block.name }}</option>
                    </select>
                    <div class="text-center w-1/4">
                        <button @click="moka.library.splice(libraryComponent,1)">Remove</button>
                    </div>
                </div>
                <div>
                    <label>Save as</label><br/>
                    <input class="dark" type="text" v-model="filename"/>.json
                </div>
                <vue-blob-json-csv
                    :id="$randomID()"
                    file-type="json"
                    :file-name="filename"
                    :data="moka.library"
                >
                <button class="my-2 success" @click="exportLibrary=!exportLibrary,moka.library=[]">Download Library</button>
                Blocks: {{ moka.library.length }}
                </vue-blob-json-csv>
            </div>
        </transition>
    </div>
</template>

<script>
import MokaTable from '@/components/table'
import MokaGallery from '@/components/moka/moka.gallery'
import MokaPreview from '@/components/editor/preview/moka.preview'
import MokaSlider from '@/components/editor/preview/moka.slider'
import MokaUpload from '@/components/moka/moka.import.json'
import { mapState } from 'vuex'
export default {
    name: 'MokaComponents',
    components: { MokaTable , MokaGallery , MokaPreview , MokaSlider, MokaUpload },
    props:['filter'],
    data:()=>({
        create:false,
        importJSON:false,
        component: null,
        exportComponent: false,
        exportLibrary: false,
        newComponent: {
            category:'component',
            name: 'New component',
            description: 'A new Moka component'
        },
        allObjects: null,
        doc: null,
        preview: false,
        gallery: true,
        objects: null,
        types: false,
        type: '',
        filename: '',
        skip: 0,
        limit: 50,
        libraryComponent: null
    }),
    watch: {
        filter(v){
            
            if ( !this.datastore.dataset[this.filter] ) {
                this.$http.get ( 'components?category=' + this.filter  ).then ( res => {
                    let dataset = {
                        table: this.filter,
                        data: res.data.data
                    }
                    this.$store.dispatch ( 'dataset' , dataset )
                    this.objects = res.data.data
                })
            }
        }
    },
    /*watch:{
        type(v){
            if ( v ){
                this.objects = this.filter ? this.moka.components.filter(comp=>{ 
                    return comp.category === this.filter } ) : this.moka.components
                this.objects = this.objects.filter ( obj => { return obj.tags === v } )
            } else {
                this.objects = this.allObjects
                this.objects = this.filter ? this.moka.components.filter(comp=>{ 
                    return comp.category === this.filter } ) : this.moka.components
            }
        }
    },*/
    beforeMount(){ 
        /*this.$api.service('components').find({ query: { category: this.filter , $limit: this.limit , $skip: this.skip , $sort : {updatedAt:-1}}}).then ( result => {
            this.objects = result.data
        })*/
       
    },
    computed:{
        ...mapState ( ['moka','user','datastore','desktop'] ),
        exportJSON(){
            let json = {
                objects : []
            }
            
            this.objects.forEach ( obj => {
                json.objects.push ( obj )
            })
            
            //this.$store.dispatch('loading')
            return json.objects
        },
        
        dataload (){
            /*
            this.$api.service('components').find ( {
                query : {
                    category: this.filter,
                    $sort: { updatedAt : -1 }
                }
            }).then ( result => {
                this.objects = result.data 
                })
            if ( this.datastore.dataset.components ){
                this.objects = this.filter ? this.datastore.dataset.components.filter(comp=>{ 
                    return comp.category === this.filter } ) : this.moka.components
            }    
            */
            this.filename = this.filter
            return true
        }
    },
    methods: {
        reloadData(){
            this.objects = this.filter ? this.datastore.dataset.components.filter(comp=>{ 
                    return comp.category === this.filter } ) : this.datastore.dataset.components
        },
        async saveLocal(){
            return null //saveFile ( 'test.json' , this.blocks_dump )
        },
        refresh(){
            //this.$store.dispatch('loading',true)
            this.$store.dispatch ( 'loadComponents' ).then ( () => {
                this.$store.dispatch ( 'loading' , false )
            })
        },
        setComponent(component){
            this.$store.dispatch ( 'loadComponent' , component )
            this.$store.dispatch ( 'loadMedia' )
            let tab = {
                name: component.name,
                component: () => import ( '@/components/moka/moka'),
                blocks: component,
                icon: 'edit',
                filter: '',
                ref: this.$randomID()
            }
            this.$store.dispatch ( 'add_tab' , tab )
            this.$emit('newtab')
            //this.$router.push ( '/moka' )
            //this.$router.push('/editor')
        },
        setPreview ( component ){
            this.doc = component.json
            window.localStorage.setItem('moka-preview',JSON.stringify(this.doc))
            let route = this.$router.resolve({path: '/preview'});
            // let route = this.$router.resolve('/link/to/page'); // This also works.
            var w = window.open(route.href, 'moka','width=' + window.screen.availWidth );
            w.focus()
            //this.component = component
            //this.preview =! this.preview
        },
        saveAsReusable(component){
            this.loading = true
            
        },
        duplicate(comp){
            let component = Object.assign ( {} , comp )
            component._id = this.$randomID()
            component.blocks_id = null
            component.name = comp.name + ' COPY'
            this.$api.service ( 'components' ).create ( component ).then ( result => {
            //this.$http.post ( 'components' , component ).then ( result => {
                this.objects.unshift ( result )
                this.$message('Blocks copied')
                this.loading = false
            }).catch ( error => {
                this.$message('An error occured. Check you console log.')
                console.log ( error )
                this.loading = false
            })
        },
        saveNewComponent(){
            this.create = false
            let component = {
                name: this.newComponent.name,
                description: this.newComponent.description,
                category: this.newComponent.category,
                enabled: true,
                json: {
                    id: null,
                    css: '',
                    image: null,
                    tag: 'document',
                    blocks: [
                        this.$grid(1)
                    ]
                }
            }
            
            this.newComponent.category === 'slider' ?
                component.json['slider'] = {
                    "animation" : "",
                    "delay" : 0,
                    "navigation": {
                    "enable" : false,
                    "icons" : ["chevron_left","chevron_right"],
                    "css" : ""
                    },
                    "dots": {
                    "enable" : false,
                    "css":""
                    }
                } : null
            this.$http.post ( 'components' , component ).then ( result => {
                this.$store.dispatch('loadComponents')
                this.$store.dispatch('message','New component saved')
                
                this.loading = false
            }).catch ( error => {
                this.$store.dispatch('message','An error occured. Check you console log.')
                console.log ( error )
                this.loading = false
            })
            return null
        },
        remove(id,index){
            this.loading = true
            this.$http.delete ( 'components/' + id ).then ( response => {
                this.$store.dispatch ( 'loadComponents' )
                this.$store.dispatch('message','Component has been deleted')
                this.loading = false
            }).catch ( error => {
                this.loading = false
                this.$store.dispatch('message','An error occured')
            })
        },
        message(message){
            this.$emit('message',message)
        }
    },
}
</script>