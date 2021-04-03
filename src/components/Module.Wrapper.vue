<template>
    
    <div class="whoobe-module"></div>
    
</template>

<script>

function injectScript(url) {
    var target = document.querySelector('head')
    const moduleScript = document.createElement("script");
    moduleScript.setAttribute("type", "text/javascript");
    moduleScript.setAttribute("charset", "utf-8");
    moduleScript.setAttribute("data-cfasync", "false");
    moduleScript.setAttribute(
        "src",
        `${url}`
    );
    target.appendChild(moduleScript);
}

function injectCSS(url){
    var target = document.querySelector('head')
    const cssLink = document.createElement("link");
    cssLink.setAttribute("ref", "stylesheet");
    cssLink.setAttribute(
        "href",
        `${url}`
    );
    target.appendChild ( cssLink )
}

function injectComponent(name,settings){
    var target = document.querySelector('whoobe-module') 
    //const tagName = document.createElement(name)
    //target.appendChild ( tagName )
    //addTagAttributes( target , settings )
}

function addTagAttributes ( tag , settings ){
    console.log ( settings )
    Object.keys ( settings ).forEach ( setting => {
        tag.setAttribute ( setting , settings[setting] )
    })
    console.log ( tag )
}
export default {
    name: 'WhoobeModuleWrapper',
    data:()=>({}),
    props: ['component','settings'],
    computed:{
      randomID(){
        return this.$randomID()
      },
      id(){
          return this.settings.id
      }
    },
    beforeMount(){
        
    },
    mounted(){
        //injectComponent( this.component.module.name , this.settings )
        injectScript ( this.component.module.url )
        this.component.module.css ?
            injectCSS ( this.component.module.css ) : null
        if ( this.component.module.hasOwnProperty('external') ){
            this.component.module.external.url ? 
                injectScript ( this.component.module.external.url ) :  null
            this.component.module.external.css ?
                injectCSS ( this.component.module.external.css ) : null
        }
        let element = document.querySelector ( '.whoobe-module' )
        let plugin = document.createElement(this.component.module.name)
        plugin.setAttribute ( 'id' , this.component.module.name )
        Object.keys ( this.settings ).forEach ( setting => {
            if ( setting != 'id' )
            plugin.setAttribute( setting ,  this.settings[setting] )
        })
        element.appendChild ( plugin )
        
    }
}
</script>