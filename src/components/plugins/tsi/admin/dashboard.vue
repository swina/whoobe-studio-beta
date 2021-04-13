<template>
    <div class="grid grid-cols-1 w-full text-sm ml-8">
        <div :class="'grid grid-cols-' + (Object.keys(schema.questionario).length)" v-if="!login">
            <template v-for="field in Object.keys(schema.questionario)">
                    <div v-if="field!='_id' && schema.questionario[field].list" class="font-bold">{{ field  }}</div>
                </template>
            <div class=""></div>
        </div>
        <template v-for="questionario in questionari">
            <div :class="'cursor-pointer grid grid-cols-' + (Object.keys(schema.questionario).length)">
                <template v-for="field in Object.keys(schema.questionario)">
                    <div v-if="field!='_id' && schema.questionario[field].list">{{ schema.questionario[field].format(questionario[field]) }}</div>
                </template>
                <div class="flex flex-row">
                    <button  @click="record=questionario,edit=!edit">Modifica</button>
                    
                    <button  @click="getDomande(questionario),record=questionario,updateDomande=!updateDomande">Domande</button>
                    
                    <button  @click="getDomande(questionario),record=questionario,simulation=!simulation">Simula</button>
                </div>
            </div>
        </template>
        <transition name="fade">
            <moka-modal
                v-if="questionario && domande && updateDomande"
                size="lg"
                position="modal"
                buttons="save"
                @close="updateDomande=!updateDomande"
                @click_0="updateDomante=!updateDomande"
                @click_1="save">
                <div slot="title">{{ questionario.progetto }}</div>
                <div slot="content">
                    <v-domande :domande="domande"/>
                </div>
            </moka-modal>
        </transition>
        <transition name="fade">
        <moka-modal
            v-if="domande && simulation"
            size="lg"
            position="modal"
            buttons="none"
            @close="simulationEnd=!simulationEnd">
            <div slot="title">{{ record.progetto }}</div>
            <div slot="content" class="mx-10 p-10 my-6 relative">
                <div class="absolute top-0 right-0 m-1">{{ elapsed }}</div>
                <transition name="fade"><h4>{{index+1}}. {{ domande.questions[index+1].domanda }}</h4></transition>
                <div class="flex flex-col p-4">
                    <template v-for="(risposta,r) in questionario.risposte">
                        <div class="flex flex-row items-center text-base my-2">
                            <input type="radio" name="risposta" class="mr-2 w-5 h-5" :value="(r+1)" v-model="userRisposta[index+1]" @input="errore=null"/> {{ risposta }}
                        </div>
                    </template>
                </div>
                <button @click="next">Prossima</button>
                <div :class="errore?'opacity-100':'opacity-0'" class="mt-2 bg-red-200 w-full p-1 h-8">{{ errore }}</div>
                <div :class="incompleto?'opacity-100':'opacity-0'" class="mt-2 bg-red-200 w-full p-1 h-8">{{ incompleto }} <button class="danger" @click="userRisposta= {},incompleto='',simulation=!simulation">Esci</button></div>
            </div>
        </moka-modal>
        </transition>
        <transition name="fade">
        <moka-modal
            v-if="edit"
            size="lg"
            position="modal"
            @close="edit=!edit"
            @click_0="edit=!edit"
            @click_1="save">
            <div slot="title">{{ record.progetto }}</div>
            <v-questionario slot="content" v-if="edit" v-model="record"/>
        </moka-modal>
        </transition>
        <transition name="fade">
            <moka-modal 
                size="sm"
                position="modal"
                v-if="login"
                @close="login=!login"
                @click_0="login=!login"
                @click_1="doLogin">
                <div slot="title">Login</div>
                <div slot="content" class="flex flex-col p-4">
                    <label>Email</label>
                    <input type="email" v-model="user.email"/>
                    <label>Password</label>
                    <input type="password" v-model="user.password"/>
                </div>
            </moka-modal>
        </transition>
    </div>
</template>
<script>

import schema from '@/components/plugins/tsi/admin/schema.js'
import VQuestionario from './questionario'
import VDomande from './domande'

export default {
    name: 'TSIPluginDashboard',
    components: { VQuestionario , VDomande },
    data:()=>({
        login: false,
        user: {
            email:'',
            password:''
        },
        questionari: null,
        questionario: null,
        record: null,
        domande: null,
        updateDomande: false,
        simulation: false,
        simulationEnd: false,
        errore: '',
        incompleto: '',
        edit: false,
        index: 0,
        total: 0,
        seconds: 0,
        userRisposta:{},
        questionStartedAt: 0
    }),
    computed:{
        schema(){
            return schema
        },
       
        elapsed(){
            // Pad to 2 or 3 digits, default is 2
            function pad(n, z) {
                z = z || 2;
                return ('00' + n).slice(-z);
            }
            let s = this.seconds * 1000
            var ms = s % 1000 ;
            s = (s - ms) / 1000;
            var secs = s % 60;
            s = (s - secs) / 60;
            var mins = s % 60;
            var hrs = (s - mins) / 60;

            return pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
        }
    },
    watch:{
        simulation(v){
            if ( v ){
                window.setInterval(()=>{
                    this.seconds +=1
                },1000)
            }
        },
        simulationEnd(v){
            if ( v ){
                console.log ( Object.keys(this.userRisposta).length  )
                if ( Object.keys(this.userRisposta).length < Object.keys(this.domande.questions).length ){
                    this.incompleto = 'Non hai completato il questionario. Vuoi comunque interrompere?'
                }
            }
        }
    },
    methods:{
        next(){
            if (  !this.userRisposta[this.index+1] ) {
                this.errore = 'Indicare una scelta'
                return
            }
            this.errore = ''
            let risposta = {
                risposta : this.userRisposta[this.index+1] ,
                elapsed : parseInt(this.seconds) - parseInt ( this.questionStartedAt )  
            }
            this.userRisposta[this.index+1] = risposta
            this.questionStartedAt = this.seconds
            this.index = this.index + 1
        },
        getDomande(questionario){
            this.questionario = questionario
            this.$apiwhoobe.service('questions').find ( {
                query: {
                    id: questionario.id
                }
            }).then ( res => {
                //this.total = Object.keys(res.data[0].questions).length
                this.domande = res.data[0] 
                this.total = Object.keys(this.domande.questions).length 
            })
        },
        save(){
            this.$apiwhoobe.service('questionari').patch ( this.record._id , this.record ).then ( res=> {
                console.log ( res )
                this.$message ( 'Questionario salvato')
            })
        },
        loadData(){
            this.$apiwhoobe.service('questionari').find().then ( res => {
                console.log ( res )
                this.$store.dispatch('dataset',{table: 'tsi_questionari' , data: res.data })
                this.questionari = res.data
            })
        },
        doLogin(){
            this.$apiwhoobe.authenticate({
                email: this.user.email,
                password: this.user.password,
                strategy: 'local'
            }).then ( user => {
                console.log ( user )
                this.login = false
                this.loadData()
            }).catch ( err => {
                console.log ( err )
                this.$message ( 'Email o password errati!')
            })
        }
    },
    mounted(){
        this.$apiwhoobe.authenticate().then ( resp => {
            console.log ( 'authenticated')
            this.loadData()
        }).catch ( err => {
            this.login = true
        })
    }
}
</script>
