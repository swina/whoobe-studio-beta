
/**
 * Main menu
 * @label       => Menu title
 * @icon        => Icon
 * @component   => Component invoked
 * @filter      => Default filter (if applicable)
 * @items       => Submenu items
 * Submenus
 * same as Main menu 
 */

const menu = {
    items : [
        { label: 'Home' , icon: 'home' , component: 'MokaHome' , path: 'Home' , filter: '' },
        { label: 'Blocks' , icon: 'widgets' , component: 'MokaList' , path: '' , filter: '' , 
            function : 'components_categories'
            // [
            //     { label: 'Pages' , icon: '' , component: 'MokaList' , path: 'moka/moka.list' , filter: 'page' },
            //     { label: 'Widgets' , icon: '' , component: 'MokaList' , path: 'moka/moka.list' , filter: 'widget' },
            //     { label: 'Templates' , icon: '' , component: 'MokaList' , path: 'moka/moka.list' , filter: 'template' },
            //     { label: 'Sliders' , icon: '' , component: 'MokaList' , path: 'moka/moka.list' , filter: 'slider' },
            //     { label: 'Components' , icon: '' , component: 'MokaList' , path: 'moka/moka.list' , filter: 'component' },
            //     { label: 'Archive' , icon: '' , component: 'MokaList' , path: 'moka/moka.list' , filter: 'archive' },
            //     { label: 'Favorites' , icon: '' , component: 'MokaList' , path: 'moka/moka.list' , filter: 'starred' },
            // ] 
        },
        { label: 'Themes' , icon: 'web' , component: 'MokaThemes' , path: 'moka/moka.themes' ,filter: ''},
        { label: 'Share'  , icon: 'share' , component: 'MokaMarketing' , path: 'tools/social/moka.social.post' , filter: '' },
        { label: 'CMS' , icon: 'article' , path: '', component: null , 
            items : [
                { label: 'Articles' , icon: 'article' , component: 'MokaArticles' , path:'articles/moka.articles' , filter: 'article' },
                { label: 'Categories' , icon: 'category' , component: 'MokaCategories' , path: 'articles/moka.categories', filter: 'category' }
            ]
        },
        { label: 'Media' , icon: 'photo' , component: 'MokaMedia' , path: 'media/media' , filter: 'manager' },
        { label: 'Shop' , icon: 'shopping_cart' , component: null , path: 'shop/products/products' , filter: 'manager' ,
            items: [
                { label: 'Products' , icon: 'article' , component: 'MokaProducts' , filter: 'products' },
                { label: 'Configuration' , icon: 'settings' , component: 'MokaShop' , filter: 'configure' },
            ]
        }, 
        { label: 'Plugins' , icon: 'settings_input_component' , component: 'MokaPlugins' , path: 'plugins/plugins' , filter: 'plugins' }, 
        { label: 'Collections' , icon: 'dynamic_feed' , component: 'MokaPlugins' , path: 'plugins/collections/collection.vue' , filter: 'collections' }, 
        { label: 'Settings' , icon: 'settings' , component: 'MokaSettings' , path: 'settings/settings' , filter: '' },
        /*
        { label: 'Remote' , icon: 'dynamic_form' , component: null , filter: 'remote' ,
            items: [
                { label: 'Staging' , icon: 'dns' , component: 'MokaStage' , filter: 'staging' },
                { label: 'Publish' , icon: 'dynamic_form' , component: 'MokaDeploy' , filter: 'publish' },

            ]
        },
        //{ label: 'Build' , icon: 'dynamic_form' , component: 'MokaBuild' , filter: '' },
        { label: 'Grid Templates' , icon: 'grid_on' , component: 'MokaGrid' , filter: 'demo' },
        */      
        
    ]
}

export default menu