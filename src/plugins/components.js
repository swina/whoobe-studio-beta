const __components = {
    actions: {
        editor: null,
        addcomponent: null,
        replaceelement: null,
        error: {
            action: 'error',
            title: 'Error',
            component: 'error'
        },
        media : {
            action: 'media',
            title: 'Media',
            component: 'media/media',
            size: 'full'
        },
        //save current component 
        savecomponent: {
            action: 'savecomponent',
            title: 'Save Component',
            component: 'moka/moka.save.component'
        },
        //save current block as component
        saveasreusable: {
            action: 'saveasreusable',
            title: 'Save Blocks as Reusable',
            component: 'editor/actions/editor.save.as.reusable'
        },
        //create a new article from the blocks editor
        createpage: {
            action: 'createpage',
            title: 'Create article',
            component: 'editor/actions/editor.create.page'
            
        },
        editslides: {
            action: 'editslides',
            title: 'Slider Editor',
            size: 'lg',
            component: 'editor/render/moka.editor.slides'
        },
        addplugin: {
            action: 'addplugin',
            title: 'Add Plugin',
            component: 'editor/render/moka.plugins',
            size: 'lg'
        },
        animation: {
            action: 'animation',
            title: 'Animation',
            component: 'editor/settings/moka.editor.animation.settings',
            size: 'sm',
            position: 'bottom-left',
            height: ''
        },
        formsetting: {
            action: 'formsetting',
            title: 'Form settings',
            component: 'editor/settings/moka.editor.form.settings',
            size: 'sm',
            position: '',
            height: ''
        },
        loopcontrol: {
            action: 'loopcontrol',
            title: 'Collection loop settings',
            component: 'editor/settings/moka.editor.loop.settings'
        },
        pluginsetting: {
            action: 'pluginsetting',
            title: 'Plugin settings',
            component: 'editor/settings/moka.editor.plugin.settings'
        },
        popupsettings: {
            action: 'popupsettings',
            title: 'Modal/Popup settings',
            component: 'editor/settings/moka.editor.popup.settings',
        },
        slidersettings: {
            action: 'slidersettings',
            title: 'Slider settings',
            component: 'moka.editor.slider.settings'
        },
        tree: {
            action: 'tree',
            title: 'Blocks tree',
            component: 'editor/settings/moka.tree.draggable',
            size: 'sm',
            position: 'top-right',
            height: 'screen'
        }

    }
}

export default __components