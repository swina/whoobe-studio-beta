<template>
    <div class="ml-10">
        <h3>Generate and publish website</h3>
        <div class="grid grid-cols-3 border-b w-64 text-xs">
            <template v-for="setting in Object.keys(project)">
                <div class="border-t border-r border-l"> {{ setting }} </div>
                <div class="border-t border-r col-span-2"> {{ project[setting] }}</div>
            </template>
        </div> 
        <button @click="generate">Generate</button>
        <!--<vue-command v-if="generate" title="Site generator" prompt="whoobe-studio:#/ " :commands="commands" />-->
        <div class="grid grid-cols-2 gap-10">
            <textarea id="generated" v-model="output" class="w-full h-64 bg-black text-lime-400">
            </textarea>
            <textarea id="generated_errors" v-model="errors" class="w-full h-64 bg-black text-red-500">
            </textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhoobeGenerate',
    data: () =>  ({
        output: '',
        errors: ''
    }),
    computed:{
        cmsurl(){
            return window.localStorage.getItem('moka-strapiurl')
        },
        project(){
            return JSON.parse(window.localStorage.getItem('whoobe-project'))
        }
    },
    mounted(){
        this.$api.service('generate').on ( 'created' , (data) => {
            
            if ( data.data ){
                this.output += data.data 
                term.write ( data.data + '\n' )
            } 
            if ( data.error ){
                this.errors += data.error
            }
            document.getElementById("generated").scrollTop = document.getElementById("generated").scrollHeight 
            document.getElementById("generated_errors").scrollTop = document.getElementById("generated_errors").scrollHeight 
        })
    },
    methods: {
        generate(){
            this.output = 'Starting generation ...'
            this.errors = ''
            this.$api.service('whoobe/build').create({project:this.project.name}).then ( res =>{
                this.output += res.data
            })
        }
    }
}
</script>