
const questionario = {
        progetto : {
            type: 'string',
            edit: true,
            list: true,
            format: (value)=>{
                return value
            }
        },
        data: {
            type: 'date',
            format: (value)=>{
                return value.slice(-2) + '/' + value.substr(4,2) + '/' + value.substr(0,4)
            },
            edit: true,
            list: true
        },
        coach: {
            type: 'string',
            edit: true,
            list: true,
            format: (value)=> { return value }
        },
        descrizione: {
            type: 'text',
            edit: true,
            list: false,
            format: (value)=>{
                return value.substring(0,25)
            }
        },
        note: {
            type: 'text',
            edit: true,
            list: false,
            format: (value)=>{
                return value.substring(0,25)
            }
        },
        risposte: {
            type: 'array',
            edit: true,
            list: false,
            format: (value)=>{
                return value.join('\n')
            }
        },
        active: {
            type: 'boolean',
            edit: true,
            list: true,
            format:(value)=>{
                return value
            }
        }
    }

const schema = {
    questionario : questionario 
}

export default schema 
