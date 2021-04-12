<template>
    <div class="w-full">
        <template v-for="project in $mapState().datastore.workspace">
            <div :class="'bg-gray-200 p-1 mt-1 ' + active(project)" @click="getProject(project)">{{ project }}</div>
            <div v-if="selected && selected.name === project" class="w-full bg-gray-400 p-2 grid grid-cols-2 gap-10">
                <template v-for="field in Object.keys(schema)">
                    <div class="flex flex-col">
                    <label>{{schema[field].label}}</label>
                    <input class="w-full" type="text" v-if="schema[field].type==='string'" v-model="selected[field]"/>
                    <input type="checkbox" v-if="schema[field].type==='boolean'" v-model="selected[field]"/>
                    <textarea class="w-full h-24" v-model="selected[field].split('|').join('\n')" v-if="schema[field].type==='array'"/>
                    </div>
                </template>
                <div class="col-span-2 text-center">
                    <button class="success m-auto" @click="saveProject">Save</button>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'WhoobeProjects',
    data:()=>({
        selected : null,
        
    }),
    computed:{
        schema(){
            return this.$mapState().datastore.schema.projects
        }
    },

    methods:{
        active(name){
            return this.selected && this.selected.name === name && this.selected.url === window.localStorage.getItem ( 'moka-strapiurl' ) ?
                'bg-blue-400 text-white' : ''
        },
        getProject(name){
            this.$api.service ( 'workspace' ).get ( name ).then ( res => {
                this.selected = res
                this.selected.name = name
            })

        },
        saveProject(){
            console.log ( this.selected )
            this.$api.service ( 'workspace' ).patch ( this.selected.name , this.selected ).then ( res => {
                console.log ( res )
            })
            return null
        }

    }

}
</script>