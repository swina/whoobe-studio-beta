<template>
<div class="z-2xtop" v-if="schema && schema.keys">

        <div class="absolute w-full cursor-pointer h-screen pb-20 border-l shadow overflow-y-auto bg-white">
           
            <!--<i v-if="!$attrs.importReusable" class="material-icons z-top absolute right-0 m-2 cursor-pointer text-gray-500" @click="$emit('close')">close</i>-->
            <template v-if="schema && schema.keys && !$attrs.importReusable"  v-for="(group,g) in schema.keys">
                
                <div class="p-1 bg-gray-200 capitalize" v-if="!$attrs.newblock||group==='container'" :key="group">
                    {{ group }}
                </div>
                <div class="w-full flex flex-row flex-wrap p-1 justify-around" :key="group + '_' + g">
                    <div v-for="(component,c) in schema[group]" class="flex flex-col p-1" :key="'component_' + c">
                        <div class="hover:bg-blue-200 hover:text-black flex-auto flex flex-col justify-center  p-1 text-center text-xs w-16 h-16 cursor-pointer"  v-if="!$attrs.newblock||component.tag==='container'" @click="setComponent(group,component,schema[group],c)">
                            <span v-if="group==='products'">{{ schema[group] }}</span>
                            <i class="material-icons text-blue-800">{{component.icon}}</i>
                            <div class="leading-4">{{ component.label }}</div>
                        </div>
                    </div>
                </div>
            </template>
            <div><button @click="setCollectionFields('Product')">Product</button></div>
            <transition name="fade">
                <div class="nuxpresso-modal text-xs p-4 z-50 w-1/3 border relative" v-if="columns" @click="columns=!columns">
                    
                    <h3>Columns</h3>
                    Number of columns<br/>
                    <input type="number" min="1" max="5" v-model="cols"/> <button @click="createColumns">OK</button>
                </div>
            </transition>
            <transition name="fade">
                <moka-modal
                    v-if="grids"
                    size="lg"
                    @close="grids=!grids"
                    buttons="none">
                    <div slot="title">Grid Templates</div>
                    <div slot="content">
                        <moka-grids @grid="addGrid" :element="selected" :loop="isloop"/>
                    </div>
                </moka-modal>
                <!-- <div class="nuxpresso-modal text-xs p-4 z-50 w-1/3 border" v-if="grids">
                    <i class="material-icons absolute right-0 top-0" @click="grids=!grids">close</i>
                    <moka-grids @grid="addGrid" :element="selected" :loop="isloop"/>
                    
                </div> -->
            </transition>
            
        <transition name="fade">
            <div class="nuxpresso-modal w-1/3 text-xs p-4 z-50 border max-h-64 overflow-y-auto" v-if="headings">
                Select Heading
                <select v-model="selected.level" class="mr-2">
                    <option v-for="n in 6" :value="n">H{{n}}</option>
                </select>
                <button class="sm w-12" @click="$emit('add',selected),heading=false">OK</button>
            </div>
        </transition>

        <transition name="fade">
            <div class="nuxpresso-modal w-1/3 text-xs p-4 z-50 border max-h-64 overflow-y-auto" v-if="svgSelect">
                Select SVG
                <select v-model="selected.content" class="mr-2">
                    <option v-for="wave in svgs" :value="wave.src">{{wave.label}}</option>
                </select>
                <button class="sm w-12" @click="$emit('add',selected)">OK</button>
            </div>
        </transition>
       
        <transition name="fade">
            <div class="nuxpresso-modal w-1/4 text-xs p-4 z-50 border max-h-64 overflow-y-auto" v-if="icons">
                Icon Category
                <select v-model="groupicon">
                    <option v-for="(group,i) in Object.keys(moka.icons)" :value="group">{{ group }}</option>
                </select> 
                <div class="flex flex-row flex-wrap overflow-y-auto" style="height:30rem;min-height:30rem;max-height:30rem" v-if="groupicon">
                    <i v-for="(icon,n) in moka.icons[groupicon]" class="flex flex-row flex-wrap material-icons cursor-pointer m-2" @click="createIcon(icon)">{{ icon }}</i>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div class="nuxpresso-modal w-1/4 text-xs p-4 z-50 border h-1/2 overflow-y-auto" v-if="bootstrap_icons">
                <i class="material-icons absolute top-0 right-0 m-1" @click="bootstrap_icons=!bootstrap_icons">close</i>
                Icon Search
                <input type="text" v-model="bt_icon_search"/>
                <div class="absolute flex mt-6 max-h-64 h-64 flex-row flex-wrap overflow-y-auto" style="" v-if="bt_icons">
                    <template v-for="icon in bt_icons_found">
                        <i :class="'bi-' + icon + ' text-2xl m-1'" :title="icon" @click="createBTIcon(icon)"></i>
                        <!--<b-icon :icon="icon.split('.')[0]" class="border p-1 rounded text-2xl float-left mx-1 my-1"/>-->
                    </template>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <moka-modal 
                size="lg"
                v-if="isCollectionField && collectionName"
                @close="isCollectionField=!isCollectionField"
                @click_0="isCollectionField=!isCollectionField"
                @click_1="addProductElement">
                <div slot="title">Add a {{collectionName}} field</div>
                
                <div slot="content">
                    Element 
                    <div class="flex flex-row flex-wrap justify-around">
                        <template v-for="element in schema.text">
                            <div class="flex flex-col m-4 h-16 w-16 hover:bg-gray-300 items-center justify-center" @click="current=Object.assign({},element)">
                                <i class="material-icons">{{ element.icon }}</i>
                                <label class="text-xs">{{ element.label }}</label>
                            </div>
                        </template>
                    </div>
                    <div class="flex flex-row flex-wrap justify-around">
                        <template v-for="element in schema.media">
                            <div class="flex flex-col m-4 h-16 w-16 items-center hover:bg-gray-300 justify-center" @click="current = current=Object.assign({},element)">
                                <i class="material-icons">{{ element.icon }}</i>
                                <label class="text-xs">{{ element.label }}</label>
                            </div>
                        </template>
                    </div>
                    Select a field 
                    <select v-model="selectedField.field">
                        <option v-for="field in Object.keys(collection)" :value="field">{{field}}</option>
                    </select>
                    <div>
                    
                    <pre class="h-48 overflow-y-auto">{{ current }}</pre>
                    </div>
                </div>
                <div slot="footer" v-if="selectedField.element && selectedField.field">
                    {{ collectionName}} field : <span class="font-bold">{{ selectedField.field }}</span>
                    <div class="flex flex-row items-center">
                       Element <i class="material-icons mr-2" v-if="current.icon">{{ current.icon }}</i> {{ current.label }}
                       <button @click="addCollectionField()">Add</button>
                    </div>
                </div>
                    
                
            </moka-modal>
        </transition>
    </div>
        <!-- media -->
        <transition name="fade" v-if="media">
            <moka-media v-if="media" @close="media=!media" @newimage="setImage"/> 
        </transition>
    </div>
</template>


<script>
import MokaGrids from '@/components/editor/render/moka.grids'
import waves from '@/plugins/svg' 
import booticons from '@/plugins/bootstrap.icons'
import { mapState } from 'vuex'
export default {
    name: 'MokaReusable',
    components: {
        MokaGrids
    },
    data:()=>({
        elements: [
            { label: 'Columns' , element: 'grid' , tag: 'grid' , css: '' , content : '' , link: '' , type: 'grid' , icon: 'view_column' },
            { label: 'Heading' , element: 'h' , tag: 'element' ,css: 'text-xl md:text-3xl lg:text-5xl' , content: 'Heading 1' , link:'' , type:'element' , icon: 'title' },
            { label: 'Rich Text' , element: 'p' , tag: 'element' , css: '' , content: 'paragraph' , link: '' , type: 'element' , icon: 'subject' },
            { label: 'Text' , element: 'div' , tag: 'element' , css: 'w-full' , content: 'Some text' , link: '' , type: 'element' , icon: 'text_format'},
            { label: 'Button' , element: 'button' , tag: 'element' , css: '' , content: 'button' , link: '#' , type: 'element' , icon : 'smart_button'},
            { label: 'Image' , element: 'image' , tag: 'element' , css: '' , content: '' , image: null , link: '#' , type: 'image', icon: 'insert_photo' },
            { label: 'Icon' , element: 'icon' , tag: 'icon' , css: '' , content:'', link: '' , type: 'icon', icon: 'crop_original' },
            //{ label: 'Columns' , element: 'column' , tag: 'columns' ,css: '' , content : '' , link: '' , type: 'columns' , icon: 'view_column' },

        ],
        form :[
            { label: 'Input' , element: 'input' , tag: 'element' , css: '' , content: 'Input' , type: 'text', required: true , icon: 'input' },
            { label: 'Email' , element: 'input' , tag: 'element' , css: '' , content: 'Email' , type: 'email' , required: true , icon: 'email' },
            { label: 'Textarea' , element : 'textarea' , tag: 'element' , css: '' , content: 'textarea', type: 'textarea' , required: true, icon: 'subject' },
            { label: 'Checkbox' , element : 'input' , tag: 'element' , css: '' , content: 'Checkbox' , type: 'checkbox' , required: true , icon: 'checkbox' }
        ],
        menus: [

            { 
                label: 'Horizontal Menu' , 
                element: 'menu' , 
                responsive: false,
                css: {
                    container: 'hidden flex flex-col md:flex md:flex-row' , 
                    css: '',
                    submenu: '',
                    align: 'justify-start'
                }, 
                items: [{
                    label : 'Home',
                    link: '/',
                    title: 'Home'
                }] ,
                tag: 'menu' ,
                type: 'horizontal' , 
                submenu: null , icon: 'menu' 
            },
            { 
                label: 'Vertical Menu' , 
                element: 'menu' , 
                responsive: false,
                css: {
                    container: 'flex flex-col' , 
                    css: '',
                    submenu: '',
                    align: 'justify-start'
                },
                items: [{
                    label : 'Home',
                    link: '/',
                    title: 'Home'
                }] , 
                tag: 'menu' ,
                type: 'vertical' , 
                submenu: null , 
                icon: 'menu' 
            },
            { 
                label: 'Dropdown Menu' , 
                element: 'menu' , 
                responsive: false,
                css: {
                    container: 'flex flex-col' , 
                    css: '',
                    submenu: '',
                    align: 'justify-start'
                },
                items: [{
                    label : 'Item 1',
                    link: '#',
                    title: 'Item 1'
                }] , 
                tag: 'menu' ,
                type: 'dropdown' , 
                submenu: null , 
                icon: 'menu' 
            },
        ],
        article : [
            'title' ,
            'excerpt',
            'content',
            'category',
            'tags',
            'image',
            'author',
            'date',
            'gallery',
            'related'
        ],
        //components:null,
        media: false,
        columns: false,
        headings:false,
        heading_level: '1',
        icons: false,
        groupicon: '',
        bootstrap_icons:false,
        bt_icons: null,
        bt_icon_search:'',
        bt_icons_found:null,
        cols: 2,
        grids: false,
        grid: {
            rows: 1,
            cols: 2
        },
        selected: null,
        svgSelect: false,
        components:null,
        isloop: false,
        collection:null,
        collectionName: '',
        isCollectionField: false,
        collectionFields:[],
        current: null,
        selectedField: {
            field: '',
            element: {
                label:'',
                icon: ''
            }
        },

    }),
    mounted(){
        this.bt_icons = booticons
    },
    computed:{
        ...mapState(['moka','datastore']), 
        setcomponents(){
            console.clear()
            return true
        },
        schema(){
            //if ( this.datastore.dataset.elements ){
                //this.components = this.$arrayGroup ( this.datastore.dataset.elements[0].moka , 'category' , 'id' )
                console.log ( this.datastore.dataset.elements[0].moka )
                return this.datastore.dataset.elements[0].moka
            //}
        },
        svgs(){
            return waves
        }
    },
    watch:{
        bt_icon_search(v){
            if ( v ){
                this.bt_icons_found = this.bt_icons.filter ( icon => icon.includes(v) )
            }
        }
    },
    methods:{
        createComponent ( type , component ){
            console.log ( 'element =>  ' , component )
            if ( component.element === 'grid' ){
                this.selected = component
                component.label === 'Articles Grid' || component.hasOwnProperty('collection')  ? this.isloop = true : this.isloop = false
                this.grids = true
                return
            }
            if ( component.element === 'flex-row' ){
                this.selected = component
                this.grids = true
                return
            }
            if ( component.element === 'icon' && component.type === 'icon' ){
                this.icons = true
                return
            }
            if ( component.element === 'icon' && component.type === 'icon_bootstrap' ){
                this.bootstrap_icons = true
                return
            }
            if ( component.element === 'h' ){
                this.headings = true
                return
            }
            if ( component.element === 'svg' ){
                this.svgSelect = true
                return
            }
            if ( component.type === 'popup' ){
                console.log ( 'popup' )
                let obj = thi.$clone ( component )
                this.$emit('add',obj)
            }
            if ( component.element === 'column' ){
                this.columns = true
            } else {
                let comp = []
                if ( type === 'common' ){
                    if ( component.element != 'image' ){
                        comp = [  {
                                css: 'w-full',
                                elements: [
                                    {
                                        element: component.element,
                                        css: component.css,
                                        content: component.content,
                                        icon: component.icon,
                                        image: null,
                                        type: component.type,
                                        link: '',
                                        action: '',
                                        style: '',
                                        required: component.required || false
                                    }
                                ],
                                tag: component.tag,
                                type: component.element,
                                style:'',
                                image: null
                            }]
                            this.$emit ( 'add' , comp[0] )
                    } else {
                        
                        this.media = true
                        //this.$emit ( 'add' , comp )
                    }
                }
                if ( type === 'article' ){
                    comp = {
                        css: 'w-full',
                        elements: [
                            {
                                element: 'article',
                                field: component,
                                css: '',
                                content: 'Article [' + component + ']',
                                icon: 'article',
                                image: null,
                                type: 'article',
                                link: '',
                                action: '',
                                style: '',
                                required: component.required || false
                            }
                        ],
                        tag: 'article',
                        type: 'article',
                        style:'',
                        image: null
                    }
                    this.$emit ( 'add' , comp )
                }
                if ( type === 'menu' ){
                    comp = 
                        {
                            css: 'w-full',
                            elements: [{
                                element: 'menu',
                                menu: component,
                                content: 'Menu ' + component.name,
                                icon: component.icon,
                                css: component.css,
                                type: 'menu'
                            }],
                            tag: component.tag,
                            style:'',
                            image: null
                        }
                    this.$emit ( 'add' , comp )
                }
                if ( type === 'component' ){
                    let reusable = {}
                    reusable['id'] = component.id
                    reusable['tag'] = 'reusable',
                    //reusable['rows'] = component.json.blocks[0].block.rows
                    reusable['reusable'] = true
                    reusable['type'] = 'component'
                    reusable['component'] = component
                    this.$emit ( 'add' , reusable )
                }
            }
            
        },
        addGrid(obj){
            this.grids = false
            this.$emit('grid',obj)
        },
        createColumns ( ){
            let comp = 
                {
                    columns: true,
                    css:{
                        container: 'w-full flex flex-col md:flex-row items-center', 
                        css: ''
                    },
                    image: null,
                    tag: 'columns',
                    style:'',
                    elements:[]
                }
            
            
            for ( var n=0 ; n < parseInt(this.cols) ; n++ ) {

                comp.elements.push ( 
                    { 
                        
                        css: 'w-full md:w-1/' + this.cols ,
                        element: 
                            {
                                element: 'div',
                                css: '',
                                content: 'Lore ipsum',
                                icon: 'text_format',
                                link: ''
                            }
                        ,
                        image: null
                    }
                )
            } 
            this.$emit ( 'add' , comp )
        },
        createGrid(){
            let comp = 
                {
                    grid: true,
                    gridCols : parseInt(this.grid.cols),
                    gridElements : parseInt(this.grid.cols),
                    css: {
                        container: 'flex flex-col md:grid md:grid-cols-' + this.grid.cols + ' md:grid-flow-row' , 
                        css: ''
                    },
                    style: '',
                    tag:'grid',
                    type: 'grid',
                    image: null,
                    cols:[]
                }
            
            
                for ( var n=0 ; n < parseInt(this.grid.cols); n++ ) {

                    comp.cols.push ( 
                        { 
                            "css":{
                                "css":"p-2",
                                "container":""
                            },
                            "style":"",
                            tag: 'element',
                            "image":null,
                            "elements":[
                                {
                                    element: 'div',
                                    css: '',
                                    content: 'some text ...',
                                    icon: 'text_format',
                                    image: null,
                                    type: 'element',
                                    link: '',
                                    action: '',
                                    style: '',
                                    required: false
                                }
                            ]
                        }
                    )
                } 
            this.$emit ( 'add' , comp )
        },
        createIcon(icon){
            let comp = {
                        "css": "",
                        "tag": "icon",
                        "icon": "crop_original",
                        "link": "",
                        "type": "media",
                        "label": "Icon",
                        "style": "",
                        "content": icon,
                        "element": "icon",
                        "id": 'moka-' + Math.random().toString(36).substr(2, 5)
                        }
                
            
            this.$emit('add',comp)
        },
        createBTIcon(icon){
            let comp = {
                        "css": "",
                        "tag": "icon_bt",
                        "icon": "crop_original",
                        "link": "",
                        "type": "media",
                        "label": "Icon",
                        "style": "",
                        "content": icon,
                        "element": "icon",
                        "id": 'moka-' + Math.random().toString(36).substr(2, 5)
                        }
                
            
            this.$emit('add',comp)
        },
        createHeading(){
            let comp = 
                 {
                                css: 'w-full',
                                elements: [
                                    {
                                        element: 'h',
                                        css: '',
                                        content: 'Title',
                                        icon: 'title',
                                        image: null,
                                        type: 'element',
                                        link: '',
                                        action: '',
                                        style: '',
                                        required: false,
                                        level: this.heading_level
                                    }
                                ],
                                tag: 'element',
                                type: 'element',
                                style:'',
                                image: null
                            }  
            
            this.headings = false
            this.$emit ( 'add' , comp )
        },
        setImage(img){
            let comp =  
                {
                    css: 'w-full',
                    elements: [
                        {
                            element: 'image',
                            css: 'm-auto',
                            content: '',
                            image: this.$cleanImage(img),
                            icon: 'image',
                            link: '',
                            action: '',
                            style: '',
                            required: false,
                            type: 'image'
                        }
                    ],
                    tag: 'element',
                    style:'',
                    image: this.$cleanImage(img)
                }
            
            this.$emit ( 'add' , comp )
        },
        setCollectionFields(collection){
            this.getCollectionFields ( collection ) 
            this.isCollectionField = true
            this.collectionName = collection 
        },
        setComponent ( group , component  ){
            let obj = JSON.parse(JSON.stringify(component) )
            obj.id = this.$randomID()
            this.selected = obj
            /*if ( obj.hasOwnProperty('collection') ){
                this.selectedField = { element : { label: '' , field: '' } , field: '' }
                this.getCollectionFields ( obj.collection) 
                this.isCollectionField = true
                return
            }*/
            if ( obj.element === 'flex-row' || obj.element === 'grid' ){
                component.label === 'Articles Grid' || component.hasOwnProperty('collection') ? this.isloop = true : this.isloop = false
                this.grids = true
                return
            } 
            //else {
                if ( obj.tag === 'icon' && obj.type === 'icon' ) {
                    this.icons = true
                    return
                }
                if ( obj.tag === 'icon' && obj.type === 'icon_bootstrap' ) {
                    this.bootstrap_icons = true
                    return
                }
                if ( obj.element === 'h' ) {
                    this.selected = obj
                    this.selected.id = this.$randomID()
                    this.selected.content = 'Heading'
                    this.headings = true
                    return
                }
                if ( obj.tag === 'svg' ){
                    this.svgSelect = true
                    return
                }

                if ( obj.type === 'image' ){
                    obj.image = null
                }
                
                //component['id'] = this.$randomID()
                if ( !obj.css.hasOwnProperty('css') ){
                    obj.css = ''
                }
                if ( obj.hasOwnProperty('popup') ){
                    obj.blocks.push( this.schema.text[2] )
                    obj.blocks[0].content = 'Modal/Popup'
                }
                if ( obj ){
                    obj.content = component.content //'Add your content here'
                    let reusable = this.$clone ( obj )
                    this.selected = reusable
                    console.log ( 'element => ' , reusable )
                    this.$emit( 'add' , reusable )
                }
            //}
        },
        /*
         "slider": {
    "dots": {
      "css": "",
      "enable": true
    },
    "delay": "5",
    "navigation": {
      "css": "",
      "icons": [
        "chevron_left",
        "chevron_right"
      ],
      "enable": true
    }
  }*/
        createGridNew ( ){
            let obj = JSON.parse(JSON.stringify(this.selected))
            //let obj = Object.assign ( {} , this.selected )
            console.log ( 'from reusables => ' , obj )
            obj['blocks'] = []
            obj.id = this.$randomID()
            obj.css.container = "flex flex-col md:grid md:grid-cols-" + this.grid.cols
            obj.css.css = ''
            let content 
            for ( var n = 0 ; n < this.grid.cols ; n++ ){
                content = JSON.parse(JSON.stringify(this.schema.text[2]))
                content.id = this.$randomID()
                let el = {
                    id: this.$randomID(),
                    blocks: [ content ],
                    image: null,
                    css: {
                        css: 'flex-col',
                        container: 'flex'
                    },
                    style: '',
                    type:'flex',
                    tag:'blocks'
                }
                obj.blocks[n] = el
            }
            this.$emit ( 'add' , obj )
        },
        getCollectionFields(collection){
            console.log ( collection )
            this.$http.get ( 'content-type-builder/content-types' ).then ( res => {
                const uid = res.data.data.filter ( ct => {
                    return ct.schema.name === collection
                })
                return uid[0].uid
            }).then ( uid => {
                this.$http.get ( 'content-type-builder/content-types/' + uid ).then ( res => {
                    this.collection = res.data.data.schema.attributes 
                    this.isCollectionField = true
                    this.collectionName = collection
                })
            })
        },
        addCollectionField(){
            
            this.current.label = this.selectedField.field
            this.current.content = this.collectionName + '-' + this.selectedField.field
            delete this.current.parent 
            this.current.id = this.$randomID()
            console.log ( this.current )
            this.collectionFields.push ( this.current )
            this.current = null
            this.selectedField.field = ''
            this.$message ('Field added')
        },
        addProductElement(){
            this.collectionFields.forEach ( element => {
                this.$emit( 'add' , element )
            })
            /*
            this.selectedField.element['id'] = this.$randomID()
            this.selectedField.label = this.selectedField.field
            this.selectedField.element.content = 'Product [' + this.selectedField.field + ']'
            this.selectedField.element['product'] = { field: this.selectedField.field }
            this.collectionFields.push ( this.selectedField.element )
            //this.$emit('add',this.selectedField.element )
            //this.collectionField = false
            //this.selectedField.element = null
            //return
            //this.createComponent ( this.selectedField.element.type , this.selectedField.element )
            */
        }

    },
}
</script>