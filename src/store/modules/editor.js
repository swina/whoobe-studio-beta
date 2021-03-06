const editor = {
    state: {
        current: null,
        component: null,
        action: null,
        subaction: null,
        level: null,
        parent: null,
        autosave: null,
        preview: null,
        fonts: process.env.VUE_APP_FONT_FAMILIES.split('|'),
        save: true,
    },
    mutations: {
        current ( state , current ){
            state.current = current
        },
        component ( state , component ){
            state.component = component
        },
        action ( state , action ){
            state.action = action
        },
        subaction ( state , action ){
            state.subaction = action
        },
        level ( state , level ){
            state.level = level
        },
        parent ( state , parent ){
            state.parent = parent
        },
        autosave ( state , blocks ){
            state.autosave = blocks
        },
        preview ( state , preview ){
            state.preview = preview
        },
        save ( state , save ){
            state.save = save
        }
    },
    actions: {
        setCurrent ( { commit } , current ){
            commit ( 'current' , current )
        },
        setComponent ( { commit } , component ){
            commit ( 'component' , component)
        },
        setAction ( { commit } , action ){
            commit ( 'action' , action )
        },
        setSubAction ( { commit } , action ){
            commit ( 'subaction' , action )
        },
        setLevel ( { commit } , level ){
            commit ( 'level' , level )
        },
        setParent ( { commit } , parent ){
            commit ( 'parent' , parent)
        },
        autoSave ( { commit } , blocks ){
            commit ( 'autosave' , blocks )
        },
        setPreview ( { commit } , preview ){
            commit ( 'preview' , preview )
        },
        save( { commit } , save ){
            commit ( 'save' , save )
        }
    }

}

export default editor