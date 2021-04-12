<template>
    <div v-if="current" class="p-2">
        <div class="grid grid-cols-2 gap-2">
            <template v-for="field in Object.keys(schema)">
                <div v-if="schema[field].edit" class="flex flex-col">
                    <label class="capitalize">{{ field }}</label>
                    <input type="text" v-if="schema[field].type==='string'" v-model="current[field]"/>
                    <input type="checkbox" v-if="schema[field].type==='boolean'" v-model="current[field]"/>
                    <textarea v-if="schema[field].type==='text'" v-model="current[field]"/>
                    <input type="number" v-if="schema[field].type==='currency'" min="0" v-model="current[field]"/>
                    <img :src="current[field]" v-if="schema[field].type==='image'" class="h-64 object-cover object-top"/>
                </div>
            </template>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'WhoobeProductEdit',
    computed:{
        current(){
            return this.$mapState().datastore.currentProduct
        },
        schema(){
            return this.$mapState().datastore.schema.products
        }
    }
}
</script>