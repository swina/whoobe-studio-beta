<template>
    <div>
        <div class="grid grid-cols-2 gap-4 p-8 border rounded" v-if="schema">
            <template v-for="field in Object.keys(schema)">
                <div class="flex flex-col">
                    <label class="capitalize">{{field}}</label>
                    <input v-if="schema[field].type==='string'" type="text" class="w-full" v-model="record[field]" @input="$emit($event.target.value)"/>
                    <input v-if="schema[field].type==='boolean'" type="checkbox" class="w-full" v-model="record[field]" @input="$emit($event.target.value)"/>
                    <textarea v-if="schema[field].type==='text'" class="w-full" v-model="record[field]"/>
                    <div v-if="schema[field].type==='array'">
                        <template v-for="(option,index) in $attrs.value[field]">
                            <div class="flex flex-row">
                                <input type="text" :value="option" class="w-full" @input="updateArray(index,field,$event.target.value)"/> <i class="material-icons ml-2" @click="deleteArray(index,field)">delete</i>
                            </div>
                        </template>
                    </div>
                    <!-- <select v-if="schema[field].type==='array'" size="8" readonly class="w-full" v-model="newOption[field]">
                        <option v-for="fvalue in $attrs.value[field]" :value="fvalue">
                            {{fvalue}}
                        </option>
                    </select>
                    <input v-if="schema[field].type==='array'" type="text" v-model="newOptionValue"> -->
                    <div v-if="schema[field].type==='date'">
                        <input type="text" :value="dateField(field,$attrs.value[field])" @blur="updateField(field,$event.target.value)" class="w-24"/>
                    </div>
                </div>
            </template>

        </div>
        
    </div>
</template>

<script>
import schema from '@/components/plugins/tsi/admin/schema.js'

export default {
    name: 'TSIPluginQuestionario',
    props: ['data'],
    data:()=>({
        record: {},
        domande: null,
        editDomande: false,
        total: 0,
        newOption: {},
        newOptionValue: ''
    }),
    computed:{
        schema(){
            return schema.questionario
        }
    },
    methods:{
        dateField(field,val){
            console.log ( val )
            let v = this.schema[field].format(val)
            return v
        },
        updateArray(index,field,val){
            this.$attrs.value[field][index] = val
            console.log ( index ,this.$attrs.value[field][index],val)
        },
        updateField(field,val){
            let data = val.split('/')
            data = data[2] + data[1] + data[0]
            this.$attrs.value[field] = data
       },
        getDomande(){
            this.$apiwhoobe.service('questions').find ( {
                query: {
                    id: this.$attrs.value.id
                }
            }).then ( res => {
                //this.total = Object.keys(res.data[0].questions).length
                this.domande = res.data[0] 
                this.total = Object.keys(this.domande.questions).length 
            })
        },
    },
    mounted(){
        this.record = this.$attrs.value
        this.getDomande()
    }
}
</script>