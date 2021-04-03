<template>
        <div class="flex flex-col bg-gray-300 p-2 rounded">
                <label>Name*</label>
                <input class="w-full" type="text" v-model="newComponent.name"/>
                <label>Category</label>
                <select class="w-full" v-model="newComponent.category">
                    <option v-for="category in datastore.dataset.setup[0].categories.components">{{ category }}</option>
                </select>
                <label>Type</label>
                <select class="w-full" v-model="newComponent.tags">
                    <option value=""></option>
                    <option v-for="tipo in datastore.dataset.setup[0].types.components" :value="tipo">{{ tipo }}</option>
                </select>
                <label>Description</label>
                <textarea class="w-full" v-model="newComponent.description"/>
                <button @click="saveBlockAsNewComponent" class="my-2">Save</button>
            </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'WhoobeSaveAsReusable',
    data:()=>({
        newComponent: {
            name: 'New Component',
            category: '',
            tags: '',
            description: ''
        }
    }),
    computed: {
        ...mapState ( ['editor','datastore'] )
    },
    methods:{
        saveBlockAsNewComponent(){
            let id = this.$randomID()
            let newComponent = {
                blocks_id : id,
                name: this.newComponent.name,
                description: this.newComponent.description,
                category: this.newComponent.category,
                enabled: true,
                json: this.editor.saveAsReusable,
                loop: null,
                loop_limit: null,
                loop_type: null                
            }
            this.$api.service ( 'components' ).create ( newComponent ).then ( result => {
                this.$message ( 'Blocks saved as reusable')
                this.$action()
            }).catch ( error => {
                this.$message ( 'Error !')
                this.$action()
            })
        }
    }
}
</script>