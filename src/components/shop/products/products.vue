<template>
<div>

    <button @click="importFile=!importFile">Import</button>
    <button @click="exportFile=!exportFile">Export</button>
    <div class="flex flex-col text-sm p-4" v-if="products">
        
        <div :class="'w-full bg-gray-400 grid grid-cols-' + cols">
        <template v-for="field in Object.keys(schema)">
            <div class="capitalize font-bold p-2" v-if="schema[field].list">
                {{ field }}
            </div>
        </template>
        </div>
        <template v-for="product in products">
            <div :class="'w-full p-1 border-b border-l border-r grid grid-cols-' + cols" v-if="product.name">
                <template v-for="field in Object.keys(schema)">
                    <div v-if="schema[field].list">
                        <span v-if="schema[field].type==='string'">{{ product[field] }}</span>
                        <img :src="product[field]" v-if="schema[field].type==='image'" class="w-24"/>
                        <span v-if="schema[field].type==='array'">
                            {{ product[field].length ? product.field.join(',') : '' }}
                        </span>
                        <span v-if="schema[field].type==='currency'">
                            {{ product[field] && parseInt(product[field]) ? Number(product[field]).toFixed(schema[field].precision) : '-' }}
                        </span>
                    </div>
                </template>
            </div>
        </template>

    </div>
    <moka-modal
        size="lg"
        v-if="importFile"
        @close="importFile=!importFile"
        @click_0="importFile=!importFile"
        @click_1="importData">
        <div slot="title">Import Products</div>
        <moka-products-import slot="content"/>
    </moka-modal>
    <moka-modal
        size="lg"
        v-if="exportFile"
        @close="exportFile=!exportFile"
        @click_0="exportFile=!exportFile"
        @click_1="exportData">
        <div slot="title">Export Products</div>
        <moka-products-export slot="content"/>
    </moka-modal>

</div>
</template>

<script>
import MokaProductsImport from './products.import'
import MokaProductsExport from './products.export'
import { mapState } from 'vuex'
export default {
    name: 'MokaProducts',
    data:()=>({
        importFile: false,
        exportFile: false,
        products: null,
        cols: 0
    }),
    components:{
        MokaProductsImport , MokaProductsExport
    },
    computed:{
        ...mapState ( [ 'datastore'] ),
        schema(){
            let schema = this.datastore.schema.products
            
            Object.keys(schema).map ( field => {
                if ( schema[field].list ) this.cols++
            })
            return schema
            
        }
    },
    methods: {
        importData(){
            return 
        },
        exportData(){
            return
        }
    },
    mounted(){
        this.$api.service('products').find( { query: { $limit: this.limit , $skip: this.start }}).then ( res => {
            this.products = res.data
        })
        /*this.$http.get ( 'content-type-builder/content-types' ).then ( res => {
            const uid = res.data.data.filter ( ct => {
                return ct.schema.name === 'Product'
            })
            return uid[0].uid
        }).then ( uid => {
            this.$http.get ( 'content-type-builder/content-types/' + uid ).then ( res => {
                this.schema = res.data.data.schema.attributes
            })
        })
        */
    }
}
</script>