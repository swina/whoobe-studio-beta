<template>
    <div class="ml-10">
        <h3>Generate and publish website</h3>
        <div class="grid grid-cols-3 border-b w-full text-xs">
            <template v-for="setting in Object.keys(project)">
                <div class="p-1 border-t border-r border-l capitalize"> {{ setting.replaceAll('/','\/') }} </div>
                <div class="p-1 border-t border-r col-span-2"> {{ project[setting] }}</div>
            </template>
            <div class="p-1 border-t border-r border-l">Images used as local asset</div>
            <div class="p-1 border-t border-r col-span-2"><whoobe-used-images @images="setImages" v-if="project.uploads"/><span v-if="uploads">{{uploads.length}}</span></div>
        </div> 
        <div class="p-2 text-center">
            <button class="success rounded py-2 text-xl mx-auto" @click="generate">Generate</button>
        </div>
        <div class="grid grid-cols-3 gap-10" v-if="output">
            <textarea id="generated" v-model="output" style="font-family:monospace" class="text-sm w-full h-64 bg-black text-green-500 font-light col-span-2">
            </textarea>
            <textarea id="generated_errors" v-model="errors" style="font-family:monospace" class="text-base w-full h-64 bg-black text-red-400"></textarea>
        </div>
        <!-- <div>
            <div id="terminal"></div>
        </div>     -->
        
    </div>
</template>

<script>
// import "xterm/css/xterm.css";
// import { Terminal } from "xterm";
import WhoobeUsedImages from './used.images'
// const term = new Terminal({
//   rows: 40,
// });
export default {
    name: 'WhoobeGenerate',
    components: { WhoobeUsedImages },
    data: () =>  ({
        output: '',
        errors: '',
        uploads: null 
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
        // term.open(document.getElementById("terminal"));
        this.$api.service('generate').on ( 'created' , (data) => {
            
            if ( data.data ){
                this.output += data.data 
                //term.write ( data.data + '\n')
            } 
            if ( data.error ){
                this.errors += data.error
            }
            document.getElementById("generated").scrollTop = document.getElementById("generated").scrollHeight 
            document.getElementById("generated_errors").scrollTop = document.getElementById("generated_errors").scrollHeight 
        })
    },
    methods: {
        setImages(images){
            this.uploads = [...new Set(images)];
        },
        generate(){
            this.output = 'Starting generation ...'
            this.errors = ''
            this.$api.service('whoobe/build').create({project:this.project.name,uploads:this.uploads}).then ( res =>{
                this.output += res.data
            })
        }
    }
}
</script>