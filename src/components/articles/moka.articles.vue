<template>
    <div class="p-2 flex flex-col">
        <div class="grid grid-cols-2 grid-flow-row items-center" style="grid-template-columns:2fr 1fr;">
            <div class="flex flex-row items-center">
                <h3 class="">
                    <i class="material-icons text-3xl" v-if="editor" @click="editor=!editor">chevron_left</i>
                    <span v-if="!editor">Articles <i  class="material-icons">refresh</i></span>
                    
                </h3> 
                <button class="h-8 ml-4" @click="createPage=!createPage">Create New</button>
                <div v-if="editor" class="flex flex-row">
                    <button class="h-8 mx-2" @click="wordpress=!wordpress">WP page</button>
                    <button class="h-8" @click="exportPage=!exportPage">Export</button>
                    <button class="success h-8 mx-2 w-20" @click="save">Save</button>    
                </div>
            </div>
            <div v-if="!editor" class="text-right">Category 
                <select v-model="filter">
                    <option value="">all</option>
                    <option v-for="category in datastore.dataset.setup[0].categories.articles" :value="category.name">{{ category }}</option>
                </select>
            </div>

        </div>
            <table class="w-full border text-sm text-left p-1" v-if="!editor && articles">
                <thead class="bg-gray-200">
                    <template v-for="(col,c) in columns">
                        <th class="text-left p-2" v-if="col.list">
                            <div class="flex flex-row items-center"> 
                                <label>{{ col.label }}</label> 
                                <i class="material-icons pt-1" v-if="col.sortable" @click="sortArticles(col.field)">expand_more</i>
                            </div>
                        </th>
                    </template>
                    <th>Template</th>

                    <th></th>
                    <th></th>
                    
                </thead>
                <tr v-for="(article,a) in articles" class="h-16 cursor-pointer hover:bg-gray-100 p-1 border-b-2" @click="articleSlug=article._id,editor=!editor" v-if="isCategory(article)">
                    <template v-for="(col,c) in columns">
                        <td class="p-2" v-if="col.list">
                            <span v-if="!col.hasOwnProperty('date')">
                                <span v-if="col.field!='categories'">{{ article[col.field] }}</span>
                                <span v-else>{{ category(article[col.field]) }}</span>
                            </span>
                            <span v-else>{{ $moment ( article[col.field].split('T')[0] ) }}</span>
                        </td>
                    </template>
                   
                    <td class="w-20">
                        <img v-if="templatePreview(article.template_id)" :src="templatePreview(article.template_id)" class="h-16 w-24 object-cover object-top"/>
                        
                    </td>
                    <td></td>
                   
                </tr>    
            </table>
            <div class="flex flex-row justify-around text-center" v-if="!editor && !filter">
                <i class="material-icons mx-2 text-2xl" @click="prev">chevron_left</i>
                <div class="text-sm">
                </div>
                <i class="material-icons mx-2 text-2xl" @click="next">chevron_right</i>
            </div>

            <!-- /** 
            * !Edit article 
            */
            -->
            <transition name="fade">
                <div v-if="currentArticle && editor" class="flex flex-row border-t p-1">
                    
                    <section class="w-4/5 container relative text-sm" v-if="currentArticle && editor">
                        
                        <label>Title <span class="text-gray-400">#{{ currentArticle.id }}</span></label>
                        <input type="text" class="w-full text-2xl" v-model="currentArticle.title"/>
                        <label>Slug </label>
                        <input type="text" class="w-full text-2xl" v-model="currentArticle.slug" @blur="slugify()"/>
                        <label>Excerpt</label>
                        <textarea class="text-sm w-full" v-model="currentArticle.excerpt"></textarea>
                        <label>Content</label>
                        <moka-text-editor v-model="currentArticle.content" :embeded="true"/>
                        
                    </section>
                
                
                    <div class="w-1/5 ml-1 shadow p-2 text-sm bg-gray-200" v-if="currentArticle && editor">
                        <!--<button class="warning mr-2" @click="editor=!editor">Close</button>
                        <button class="success mr-2" @click="save">Save</button>    
                        <button @click="wordpress=!wordpress">WP page</button>
                        <button @click="exportPage=!exportPage">Export</button>-->
                        <div class="flex flex-col" v-if="currentArticle.blocks">
                            <div class="mb-2 flex flex-col">
                                <button class="sm mb-2" @click="$action('whoobe_templates')">Page / Template</button> 
                                <img v-if="templatePreview(currentArticle.template_id)" :src="templatePreview(currentArticle.template_id)" class="h-24 object-cover object-top cursor-pointer" @click="$action('whoobe_templates')"/>
                                <!--<img class="h-24 object-cover object-top cursor-pointer" :src="$imageURL(currentArticle.blocks.image_uri)"
                                v-if="currentArticle.blocks.image_uri" @click="selectTemplate=!selectTemplate"/>-->
                            </div>
                            <div class="mb-2 flex flex-col">
                                Category
                                <select class="w-full" v-model="currentArticle.categories">
                                    <option v-for="(category,c) in datastore.dataset.setup[0].categories.articles" :value="category"> {{ category }} </option>
                                </select>
                            </div>
                        </div>
                            <div>
                            <input type="checkbox" v-model="currentArticle.homepage"/> Homepage</div>
                            <div class="flex flex-col mb-2 h-32">
                                <label>Featured image</label>
                                <!--<img v-if="currentArticle.featured_image" :src="currentArticle.featured_image"/>
                            <button v-if="!currentArticle.featurd_image" @click="media=!media,editorImage=false">Featured Image</button>-->
                                <moka-image-placeholder :image="currentArticle.image" @click="media=!media" size="sm" @media="media=!media,editorImage=false" @noimage="currentArticle.image=null"/>
                            
                            </div>
                            
                            <label>Tags</label>
                            <textarea v-model="currentArticle.tags" class="h-16 w-full text-xs"></textarea>
                            <div class="text-xs text-gray-600">Set a tag per line</div>
                            <div class="flex flex-col">
                                <div class="text-xl">SEO</div>
                                <label>Title</label>
                                <input type="text" v-model="currentArticle.seo_title"/>
                                <label>Description</label>
                                <textarea class="text-sm w-full" v-model="currentArticle.seo_description"/>
                            </div>
                        
                    </div>
                    
                </div>
            </transition>
            <transition name="fade">
                <div v-if="media" class="fixed top-0 left-0 m-auto rounded-lg bg-white">
                    <moka-media :modal="true" @close="media=false" @newimage="setImage"/>
                </div>
            </transition>
            <div class="fixed top-0 bg-black bg-opacity-50 left-0 z-max h-screen w-screen flex flex-col justify-center items-center" v-if="loading">
                <div class="flex  lds-ring" v-if="loading"><div></div><div></div><div></div><div></div></div>
            </div>

            <transition name="fade">
                <div v-if="selectTemplate" class="nuxpresso-modal w-4/5 p-2 border rounded bg-white">
                <i class="material-icons absolute top-0 right-0 m-2 mr-8" @click="$action()">refresh</i>
                    <i class="material-icons absolute top-0 right-0 m-2" @click="selectTemplate=!selectTemplate">close</i>
                    <moka-templates 
                        :templates="templates" 
                        @set="setTemplate" 
                        @close="selectTemplate=!selectTemplate"/>
                </div>
            </transition>
            <transition name="fade">
                <div v-if="createPage" class="nuxpresso-modal border w-1/3 h-1/3 bg-white p-2 rounded shadow">
                    <i class="material-icons absolute top-0 right-0 m-1" @click="createPage=!createPage">close</i>
                    <div class="flex flex-col">
                        <label>Title</label>
                        <input type="text" v-model="newArticle.title"/>
                        <label>Category</label>
                        <select v-model="newArticle.category">
                            <option value=""></option>
                            <option v-for="(category,c) in categories" :value="category"> {{ category.name }} </option>
                        </select>
                        <div class="my-2">
                            <button class="bg-gray-300 mr-2" @click="createPage=!createPage">Cancel</button>
                            <button class="success" @click="create">Create</button>
                        </div>
                    </div>
                </div>
            </transition>
            
            <transition name="fade">
                <div v-if="wordpress" class="nuxpresso-modal p-4 z-2xtop rounded-lg bg-white">
                    <input type="text" v-model="wprestapi"/><button @click="importWPPage">Import</button>
                </div>
            </transition>
            <transition name="fade">
                <moka-export-article :article="currentArticle" :title="currentArticle.homepage?'homepage':currentArticle.slug" v-if="exportPage && currentArticle" @close="exportPage=!exportPage"/>
            </transition>
            <!-- <pre>{{ articles }}</pre> -->
    </div>
</template>

<script>
import MokaTextEditor from '@/components/editor/render/moka.text.editor'
import MokaImagePlaceholder from '@/components/editor/render/moka.editor.image.placeholder'
import MokaTemplates from '@/components/articles/moka.articles.templates'
import MokaMedia from '@/components/media/media'
import MokaExportArticle from '@/components/articles/moka.article.export'
import { mapState } from 'vuex'
var self = this

export default {
    name: 'MokaArticles',
    components: { MokaTextEditor , MokaImagePlaceholder , MokaMedia , MokaTemplates, MokaExportArticle  },
    data:()=>({
        wordpress: false,
        wprestapi:'',
        loading: false,
        filter: '',
        editor: false,
        slug:'',
        articleSlug: null,
        currentArticle: null,
        currentImage: null,
        editorImage: true,
        selectTemplate: false,
        media: false,
        widgets: false,
        start: 0,
        limit: 10,
        sortby: {
            title: 1
        },
        order: 'asc',
        columns: [
            { field: '_id' , label: '#'  , sortable: true , list: false },
            { field: 'title' , label: 'Title' , sortable: true , list: true},
            { field: 'categories' , label: 'Category' , sortable: false , list: true},
            { field: 'slug' , label: 'Slug' , sortable: false , list: true},
            { field: 'homepage' , label: 'Homepage' , sortable: false , list: true},
            { field: 'lang' , label: 'Language'  , sortable: true , list: true},
            { field: 'updatedAt' , label: 'Updated'  , sortable: true , list: true , date: true},
            { field: 'template_id' , label: 'Template' , sortable: false , list: false }
        ],
        createPage: false,
        newArticle: {
            title: 'A new page',
            SEO: {
                title: '',
                description: 'A new nuxpresso page'
            }
        },
        articles: null,
        template: null,
        exportPage: false
    }),
    computed : { 
        ...mapState ( ['moka' , 'datastore' ] ),
        
        templates (){
            return this.datastore.dataset.components.filter(comp=>{ return comp.category === 'template' || comp.category === 'page' } )
            return this.components.filter(comp=>{ return comp.category === 'template' || comp.category === 'page' } )
        },
       
        templateImage(){
            if ( !this.currentArticle.template_id ) return ''
            

            if ( this.currentArticle.template_id ){ 
                //let template = this.templates.filter ( templ => { return templ.blocks_id === this.currentArticle.template_id } )
                let template = this.templates.filter ( templ => { return parseInt(templ.id) === parseInt(this.currentArticle.component) } )

                if ( template.length && template[0].image && template[0].image.url ) {
                    return template[0].image.url.includes('http') 
                        ? template[0].image.url : process.env.VUE_APP_API_URL + template[0].image.url.substring(1)
                }
                if ( template.length && template[0].image_uri ) {
                    return template[0].image_uri.includes('http') 
                        ? template[0].image_uri : process.env.VUE_APP_API_URL + template[0].image_uri.substring(1)
                }
                return false
            }
            return false
        },
        categories(){ 
            return this.moka.categories
        }
    },
    
    watch:{
        articleSlug(id){
            this.$api.service ( 'articles').get ( id ).then ( response => {
                this.$store.dispatch('currentArticle', response )
                this.currentArticle = this.$mapState().datastore.currentArticle
                this.$api.service ( 'components' ).find ( 
                    {
                        query: {
                            blocks_id: response.template_id
                        }
                    }
                ).then ( component => {
                    console.log ( component )
                    this.template = component.data[0]
                })
                /*
                if ( this.currentArticle.component && !this.currentArticle.template_id ){
                    let template = this.moka.components.filter ( comp => {
                        return comp.id === this.currentArticle.component
                    })[0]
                    if ( template ){
                        this.currentArticle.template_id = template.json.id
                    }
                }*/
                this.slug = this.currentArticle.slug 
            })
        },
        /*articles(data){
            this.$store.dispatch('loading',true)
            this.$store.dispatch ( 'loadArticles' , data ).then ( resp => {
                this.$store.dispatch ( 'loading' , false)
            })
        },
        */
        filter(v){
            if ( v ){
                this.start = 0
                this.limit = 100
            } else {
                this.limit = 10
            }

        }
    },
    methods:{ 
        templatePreview( id ){
            let template = this.$mapState().datastore.dataset.components.filter ( template => {
                return template._id === id            
            })[0]
            return template && template.image ?
                this.$imageURL ( template.image ) : ''
            /*
            console.log ( 'template' , this.datastore.dataset.components.filter ( comp => { return comp.blocks_id === id }) )
            return this.datastore.dataset.components.filter ( comp => { return comp.blocks_id === id })[0]
            return null*/
        },
        sortArticles(field){
            if ( this.sortby[field] === 1 ){
                this.articles.sort( (a,b) => a[field] < b[field] ? 1 : -1   ) 
                this.sortby[field] = 0
            } else {
                this.articles.sort( (a,b) => a[field] > b[field] ? 1 : -1  ) 
                this.sortby[field] = 1
            }
            
        },
        background(template){
            let image = ''
            template.image && template.image.url ?
                image = template.image.url : 
                    template.image_uri ? image = template.image_uri : ''
            if ( !image.includes('http') ){
                image = process.env.VUE_APP_API_URL + image.substring(1)
            }
            console.log ( image )
            return image
        },
        getTemplatePreview(blocks_id){
            if ( !blocks_id ) return 'no image'
            this.templates.forEach ( templ => {
                if ( templ.blocks_id === blocks_id ){
                    //console.log ( templ.blocks_id , blocks_id )
                    return templ
                }
            })
            return false
        },
        importWPPage(){
            this.$http.get ( this.wprestapi ).then ( response => {
                this.currentArticle.content = response.data.content.rendered
                this.wordpress = false
            })
        },
        slugify(){
            //console.log ( 'slugify ...' , this.$slugify(this.currentArticle.slug) )
            return this.currentArticle.slug = this.$slugify(this.currentArticle.slug)
        },
        isCategory(article){
            if ( !this.filter ) return true
            //console.log ( article.categories.length )
            if ( article.categories.length ){
                //console.log ( article.categories[0].name , this.filter )
                if ( article.categories[0].name === this.filter ){
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        },
        category(cat){
            return null// cat.map(c => { return c.name} ).join(',')
        },
        setTemplate(id,blockID,template){
            console.log ( id )
            this.$api.service ( 'components' ).get ( id ).then ( result => {
                console.log ( result )
                this.currentArticle.blocks = result
                this.currentArticle.component = result._id
                this.currentArticle.template_id = result._id 
                this.selectTemplate =! this.selectTemplate
                this.articles.map ( article => {
                    if ( article._id === this.currentArticle._id ){
                        article.template_id = this.currentArticle.template_id
                    }
                })
            })
        },
        checkTemplate(){
            if ( this.currentArticle.component === '0' ){
                let template = this.templates.filter ( templ => {
                    return templ.default 
                })[0].id
                this.currentArticle.template_id = blockID
                this.currentArticle.component = template
            }
        },
        save(){
            let vm = this
            vm.currentArticle.slug === '' ? vm.currentArticle.slug = this.$slugify(vm.currentArticle.title) : null
            vm.currentArticle.featured_img = vm.currentArticle.image
            console.log ( vm.currentArticle.slug )
            this.$api.service ( 'articles' ).patch ( vm.currentArticle._id , vm.currentArticle ).then ( response => {
                //vm.currentArticle = response.data
                console.log ( response )

                this.createPage = false
                this.$store.dispatch('message','Article has been saved successfully')
            }).catch ( error => {
                this.$store.dispatch('message','An error occurred. Check you console log')
                console.log ( error )
                this.createPage = false
            })
            
        },
        create(){
            this.newArticle.slug = this.$slugify(this.newArticle.title)
            this.$api.service ( 'articles' ).create ( this.newArticle ).then ( res => {
                this.$mapState().datastore.dataset.articles.push ( res )
                this.articles.push ( res )
            })
        },
        addImage(){
            this.currentImage = null
            this.editorImage = true
            this.media = true 
        },
        addWidget(){
            this.widgets = true
        },
        setImage(img){
            //console.log ( img )
            if ( this.editorImage ){
                this.$refs['editor'].quill.focus()
                let range = this.$refs['editor'].quill.getSelection();
                range ? 
                    this.$refs['editor'].quill.insertEmbed(range.index, 'image', img.url ) :
                        this.$emit('message','Set a position in the editor to place the image')
            } else {
                this.currentArticle.featured_image = img.url
                this.currentArticle.image = this.$cleanImage(img)
                this.currentArticle.featured_img = this.$cleanImage(img)
            }
        }, 
        setWidget(widget){
            this.$refs['editor'].quill.focus()
            let range = this.$refs['editor'].quill.getSelection();
            let shortcode = '[[nuxpresso-widget id=' + widget.id + ']]'
            range ? 
                this.$refs['editor'].quill.insertText(range.index, shortcode ) :
                    this.$emit('message','Set a position in the editor to place the widget')
        },
        next(){
            this.start += this.limit
        },
        prev(){
            if ( this.start > 0 ){
                this.start -= this.limit
            }
            
        },
        updateSEO(){
            this.articles.forEach ( article => {
                article.seo_title = article.title
                article.seo_description = 'A nuxpresso article'
                this.$http.put ( 'articles/' + article.id , article ).then ( resp => {
                    console.log ( resp )
                }).catch ( error => {
                    this.$store.dispatch('message','An error occurred. Check you console log')
                    console.log ( error )
                })
            })
        },
        
    },
    mounted(){
            let schema = this.$mapState().datastore.schema.articles
            let article = {}
            Object.keys(schema).map ( field => {
                let fType = schema[field].type
                fType === 'string' ? article[field] = '' :
                    fType === 'object' ? article[field] = {} :
                        fType === 'null' ? article[field] = null :
                            fType === 'boolean' ? article[field] = false :
                                fType === 'array' ? article[field] = [] : null
            })
            delete article._id
            delete article.createdAt
            delete article.updatedAt
            this.newArticle = article

        let fields = this.columns.map ( col => {
            return col.field
        })
        this.$api.service('articles').find ({
            query : {
                $limit : 10,
                $skip: 0,
                $select: fields,
                $sort : this.sortby
            }
        }).then ( result => {
            console.log ( result.data )
            this.articles = result.data
        })
    }
}
</script>

<style>
#editor > .ql-container > .ql-editor {
    min-height:20rem;
}
#editor > .ql-toolbar {
    background: #f0f0f0;
}
</style>