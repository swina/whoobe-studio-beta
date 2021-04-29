<template>
  <div class="">
    <div class="p-4 relative h-full bg-white" v-if="files">
      <!--<i v-if="$attrs.filter" class="material-icons absolute right-0 top-0 m-1" @click="$emit('close')">close</i>-->
      <div class="grid grid-cols-5 grid-flow-row items-center">
        <div class="col-span-5 flex flex-row">
          <button @click="uploadFile = !uploadFile">Upload</button>

          <button
            class="mx-2 items-center flex flex-row"
            id="upload_widget"
            @click="$action('cloudinary')">
            <i class="material-icons">upload</i> <span>Cloudinary</span>
          </button>
          <button v-if="pixabayPlugin" @click="pixabay=!pixabay">Download from Pixabay</button>
          <button @click="gallery=!gallery" class="mx-2">Carousel</button>
          <button @click="componentsPreview=!componentsPreview" class="mx-2">Components</button>
          <!-- <moka-cloudinary-upload class="mx-2" v-if="cloudinary" :config="cloudinary.config" @cloudinary="addImageCloudinary"/> -->
        </div>

        <!--<a href="#" @click="gallery=!gallery" class="text-right"><i class="material-icons" v-if="!gallery">grid_on</i><i class="material-icons" v-if="gallery">list</i></a>-->
      </div>
      <div class="text-sm justify-start items-center grid grid-cols-7 mt-1 bg-gray-200 py-1">
        <div class="col-span-3">
          <label class="text-sm">Import from URL</label>
          <input type="text" class="w-3/4" v-model="imageURL" />
        </div>
        <div class="col-span-2">
          <label class="text-sm ml-2">Unsplash</label>
          <input
            type="text"
            class="w-3/4"
            v-model="unsplash"
            placeholder="unsplash => type a keyword"/>
        </div>
        <div class="col-span-2">
          <label class="ml-2">Search</label>
          <input
            type="text"
            v-model="search"
            placeholder="search"
            class="mr-2 w-2/3"/>
        </div>
      </div>
      
        
        <draggable v-if="gallery || galleryImages.length" class="mt-2 border border-dashed border-white rounded bg-gray-200 h-40 w-full p-4 flex flex-row flex-wrap items-center justify-start relative">
          <template v-for="(img,i) in galleryImages">
              <img
                  :src="$imageURL(img)"
                  class="h-24 w-32 object-cover mx-2 shadow object-center cursor-move" 
                  @dblclick="galleryImages.splice(i,1)" title="drag to reorder, dblckick to remove"/> 

          </template>
          <div class="w-full absolute bottom-0 text-center">
            <button class="mx-2" v-if="galleryImages" @click="clearGallery()">Clear</button>
            <button @click="((setImage(galleryImages)),(selected=galleryImages))">Set Carousel</button>
          </div>
        </draggable>
      <draggable :list="galleryImages" group="gallery" v-if="gallery || galleryImages.length"  class="border-4 border-dashed flex flex-row h-10 justify-center items-center mb-4">
        Drag here or click on the image to add to carousel
      </draggable>
    
        <draggable  :list="files" :group="{ name: 'gallery', pull: 'clone', put: false }" item=".draggable-img"  :class="'flex flex-wrap border rounded p-4 h-3/4 overflow-y-auto grid ' + isEdit" v-if="files && !openCloudinary">
        <template v-for="(element, n) in files">

          <div :key="n" class="px-2 bg-white text-xs cursor-pointer mb-2"
            @click="!gallery ? ( setImage(element) , (selected = element) ) : galleryImages.push ( element )"
            :title="element.name"
            v-if="element.hasOwnProperty('name')">
            <div :class="'mb-1 overflow-hidden border-4 border-transparent ' + active(element)">
              <div class="relative pt-32 bg-gray-700">
                <div class="flex items-center text-center h-full justify-center absolute h-48 top-0 left-0 right-0 bottom-0">
                  <img
                    v-if="element.url && element.mime.includes('image')"
                    :src="$imageURL(element)"
                    class="w-auto h-auto block m-auto draggable-img"
                  />
                  <!--<i v-if="!element.mime.includes('image')" class="material-icons text-gray-400 text-5xl">insert_drive_file</i>-->
                </div>
              </div>
            </div>

            <div class="leading-tight">
              {{ element.name.split(".")[0].substring(0, 30) }}
            </div>
            <div>
              {{ element.width }}x{{ element.height }} -
              {{ parseInt(element.size / 1000) }}KB
              <span class="px-1 bg-gray-300 text-black rounded uppercase">{{
                element.ext.replace(".", "")
              }}</span>
            </div>
          </div>
        </template>
        </draggable>
      <!-- </div> -->
      <div class="w-full text-center my-4 grid grid-cols-3 grid-cols-auto">
        <div class="text-left flex flex-row items-center">
          <span class="text-xs">[{{ total }} files]</span>
          <i
            class="material-icons cursor-pointer text-2xl ml-2 border rounded-full"
            title="Refresh"
            @click="refresh()"
            >cached</i
          >
        </div>
        <div class="grid grid-cols-3">
          <i
            @click="start > 0 ? (start = start - limit) : null"
            class="material-icons mr-2 text-3xl cursor-pointer"
            >chevron_left</i
          >
          <div class="text-sm">
            {{ start + 1 }} -
            {{ start + limit <= total ? start + limit : total }}
          </div>
          <i
            @click="start + limit <= total ? (start = start + limit) : null"
            class="material-icons text-3xl cursor-pointer"
            >chevron_right</i
          >
        </div>
        <!--<div><button @click="uploadFile=!uploadFile">Upload</button></div>-->
      </div>
      <!--</div>-->
      <transition name="fade">
        <div
          class="nuxpresso-modal w-2/3 shadow border rounded p-4"
          v-if="uploadFile"
        >
          <moka-upload
            @uploaded="refresh(), (uploadFile = !uploadFile)"
            @close="uploadFile = !uploadFile"
          />
        </div>
      </transition>
      <transition name="slideright">
        <moka-modal
          v-if="edit"
          type="vertical"
          :size="modalSize"
          height="screen"
          position="modal-top-right"
          :fixed="true"
          buttons="none"
          @close="(edit = !edit), (fullscreen = false)"
        >
          <div slot="title" class="text-gray-400 items-center flex flex-row">
            <i class="material-icons text-sm mr-2 text-orange-500">photo</i>
            <!-- <span class=""> {{selected.name}}</span> -->
            <span
              class="ml-10 text-xs px-1"
              v-if="selected.mime.includes('image')"
            >
              {{ selected.width }}x{{ selected.height }}px</span
            >
            <span class="ml-10 text-xs px-1"
              >{{ parseInt(selected.size / 1000) }}KB</span
            >
          </div>
          <div slot="content">
            <moka-edit-media
              :img="selected"
              @close="edit = !edit"
              @delete="deleteImage"
              @fullscreen="fullscreen = !fullscreen"
            />
          </div>

        </moka-modal>
        <!-- </div> -->
      </transition>
      


      <transition name="fade">
          <moka-modal
            size="lg"
            :fixed="true"
            position="modal"
            buttons="none"
            v-if="selectThumbnail"
            @close="selectThumbnail=!selectThumbnail">
            <div slot="title">{{selectedImage.name}}</div>
            <div slot="content">
                <moka-media-format :selectedImage="selectedImage" @image="assignImg" @close="$action()"></moka-media-format>
            </div>
          </moka-modal>
        
      </transition>
      <!-- DELETE OBJECT MODAL -->
      <transition name="fade">
        <div
          class="nuxpresso-modal bg-white border shadow p-4 z-2xtop"
          v-if="editor && editor.action === 'deleteMedia'"
        >
          <h5>Delete this object ?</h5>
          <button @click="$store.dispatch('setAction', null)">No</button>
          <button class="ml-2 danger" @click="deleteMedia">Yes, delete</button>
        </div>
      </transition>
     
      <textarea
        class="opacity-100 h-20 w-40"
        id="myUpload"
        @input="emitImage"
      />
    </div>
    <moka-cloudinary :data="iscloudinary" class="mx-2" v-if="editor.action==='cloudinary'" :config="cloudinary.component.config" @cloudinary="$action('cloudinaryImage')"/>
    <moka-modal
      v-if="pixabay"
      @close="pixabay=!pixabay"
      size="full">
      <div slot="title">Pixabay Search</div>
      <div slot="content">
        <whoobe-pixabay @close="pixabay=!pixabay"/>
      </div>
    </moka-modal>
    <moka-modal
      size="lg"
      position="modal"
      v-if="componentsPreview"
      @close="componentsPreview=!componentsPreview"
      buttons="none">
      <div slot="title">Previews</div>
      <div slot="content" class="flex flex-row justify-around p-4">
        <template v-for="component in $mapState().datastore.dataset.components">
          <img v-if="component.image" :src="$imageURL(component.image)" class="cursor-pointer w-48 h-24 object-cover object-top mx-2" @click="setComponentsPreviewImage(component.image),componentsPreview=!componentsPreview" :title="component.name"/>
        </template>
      </div>
    </moka-modal>
  </div>
</template>

<script>
import MokaUpload from "@/components/media/media.upload"
import MokaEditMedia from "@/components/media/media.edit"
import MokaMediaFormat from './media.select.format'
import WhoobeEditorActions from '@/components/moka/editor/whoobe.editor.actions'
import WhoobePixabay from '@/components/plugins/pixabay/pixabay'
import draggable from 'vuedraggable'
import { mapState } from "vuex";
export default {
  name: "MokaMedia",
  components: { MokaUpload, MokaEditMedia , MokaMediaFormat , WhoobeEditorActions,  WhoobePixabay , draggable }, //, MokaCloudinaryUpload },
  data: () => ({
    selected: null,
    search: "",
    start: 0,
    limit: 300,
    gallery: true,
    uploadFile: false,
    edit: false,
    selectThumbnail: false,
    selectedImage: null,
    total: 0,
    imageURL: "",
    unsplash: "",
    gallery: false,
    galleryImages: [],
    extImage: null,
    cloudinary: null,
    openCloudinary: false,
    files: null,
    allFiles: null,
    fullscreen: false,
    pixabay: false,
    pixabayPlugin: false,
    componentsPreview: false
  }),
  computed: {
    ...mapState(["moka", "desktop" , "editor", "datastore"]),
    modalSize() {
      return this.fullscreen ? "full" : "md";
    },
    media() {
      return this.files;
    },
    images() {
      return this.moka.e_data.uploads;
    },
    isEdit() {
      return this.edit ? "w-2/3 grid-cols-3" : "grid-cols-5";
    },
    iscloudinary(){
      this.datastore.dataset.plugins ? 
            this.cloudinary = this.datastore.dataset.plugins.filter ( plugin => {
                return plugin.component.path === 'cloudinary/cloudinary.widget'
            })[0] : null
      return true
    },
  },
  watch: {
    imageURL(v){
        window.localStorage.setItem('whoobe-image-url',v)
        v ? this.$action('media_from_url') : null
    },
    unsplash(v){
        window.localStorage.setItem('whoobe-image-url','https://source.unsplash.com/' + v)
        v ? this.$action('media_from_url') : null
    },
    start(v) {
      this.$api
        .service("media")
        .find({ query: { 
          $limit: this.limit, $skip: v , $sort: { updatedAt: -1 } , name: { $gte: this.search } } 
        })
        .then((response) => {
          this.files = response.data;
          this.total = response.total;
        });
    },
    search(v){
      if ( v && v.length > 2 ) { 
         this.files = this.datastore.dataset.media.filter ( f => {
           return f.name.includes(v)
         })
      } else {
         this.files = this.datastore.dataset.media
      }
    }
  },
  methods: {
    
    query(){
      this.$loading(true)
      let vm= this
       this.$api
        .service("media")
        .find(
          { query: 
            { 
              $limit: this.limit, 
              $skip: this.start , 
              $sort: { updatedAt: -1 }
            } 
          })
        .then((response) => {
          this.$loading()
          this.files = response.data;
          this.allFiles = response.data
          this.total = response.total;
          this.$store.dispatch('dataset' , { table: 'media' , data: response.data })
        });
    },
    autoSize(index) {
      let w = 40 - (index + 1) * 8;
      return "w-" + w;
    },
    active(item) {
      return this.selected
        ? parseInt(this.selected.id) === parseInt(item.id)
          ? "border-blue-500"
          : ""
        : "";
    },
    getImageURL(image) {
      let url = "";
      image.url.includes("http")
        ? (url = image.url)
        : (url = process.env.VUE_APP_API_URL + image.url.replace("/", ""));
      return url;
    },
    setImage(img) {
      if (this.$attrs.filter && this.$attrs.filter === "manager") {
        //this.edit = true;
        window.localStorage.setItem('whoome-media-image',JSON.stringify(img))
        this.$action('media_edit')
        return;
      } else {
        if (img.formats && img.formats.thumbnail) {
          this.selectThumbnail = true;
          this.selectedImage = img;
        } else {
          console.log ( 'assign image => ' , img )
          this.selectThumbnail = false
          this.selectedImage = img;
          this.assignImg(this.selectedImage);
        }
      }
    },
    clearGallery(){
      this.editor.current.gallery = null
      this.editor.current.image = null
      this.gallery = false
      this.galleryImages = []
      this.$action()
    },
    setImageByURL() {
      var imgURL = new Image();
      imgURL.src = this.imageURL;
      let name = this.imageURL.split(".");

      let ext = name[name.length - 1];
      name = "external";
      let width, height;
      imgURL.onload = () => {
        this.extImage = {
          url: this.imageURL,
          size: null,
          width: imgURL.width,
          height: imgURL.height,
          ext: name,
          name: name,
          caption: "",
          alternativeText: "",
        };
        this.$emit("newimage", this.extImage);
        this.$emit("close");
      };
    },
    setComponentsPreviewImage(img) {
      var imgURL = new Image();
      imgURL.src = this.$imageURL(img);
      let name = this.imageURL.split(".");
      let ext = name[name.length - 1];
      name = "external";
      let width, height;
      imgURL.onload = () => {
        this.extImage = {
          url: img,
          size: imgURL.size,
          width: imgURL.width,
          height: imgURL.height,
          ext: name,
          name: name,
          caption: "",
          alternativeText: "",
        };
        console.log ( this.extImage )
        this.assignImg ( this.extImage )
      };
    },
    assignImg(image) {
      if (!image) return;
      /*
      let img = Object.assign({}, this.selected);
      if (image.hasOwnProperty("width")) {
        img.width = image.width;
        img.height = image.height;
        img.size = image.size;
        img.mime = image.mime;
        img.ext = image.ext;
        img.url = image.url;
      }
      delete img.formats;
      console.log(img);
      */
      alert ( this.desktop.tabs[this.desktop.currentTab].mode )
      if ( this.desktop.tabs[this.desktop.currentTab].mode === 'articles' ){
        this.datastore.currentArticle.image = image 
        this.$action()
        return 
      }
      if ( this.desktop.tabs[this.desktop.currentTab].mode === 'block' && this.editor.current.hasOwnProperty('image') ){
        if ( Array.isArray(image) ){
          if ( this.editor.current.hasOwnProperty('gallery') && this.editor.current.gallery.hasOwnProperty('navigation') ) {
            this.editor.current.gallery.images = image 
          } else {

            this.editor.current.gallery = { 
              images: image ,
              "animation":'',
              "delay":1,
              "navigation":{
                "enable":false,
                  "icons":["chevron_left","chevron_right"],
                  "css":"",
                  "hover":false,
                  "position":"justify-center"
              },
              "dots":{"enable":false,"css":""}
            }
          }
          this.editor.current.image = image[0]
        } else {
          this.editor.current.image = image
        }
        this.$action()
        return
      }
      //this.$emit("newimage", image);
      this.$emit("close");
    },
    next() {
      this.selected = null;
      this.start = this.start + this.limit;
    },
    prev() {
      this.selected = null;
      this.start = this.start - this.limit;
    },
    refresh() {
      this.total++;
    },
    deleteMedia() {
      return null;
      this.$http.delete("upload/files/" + this.selected.id).then((resp) => {
        this.total--;
        this.selected = null;
        this.edit = false;
        this.$store.dispatch("setAction", null);
      });
    },
    addImageCloudinary(image) {
      let newImage = {
        name: image.original_filename + "." + image.format,
        size: image.bytes,
        width: image.width,
        height: image.height,
        url: image.url,
        ext: image.format,
        previewUrl: image.thumbnail_url,
        mime: "image/" + image.format,
        formats: null,
      };
      this.files.unshift(newImage);
      this.$api.service("media").create(newImage);
    },
    deleteImage(id) {
      this.$api
        .service("uploads/delete")
        .find({ query: { image: this.selected } })
        .then((result) => {
          console.log("deleted file => ", result);
        });

      this.$api
        .service("media")
        .remove(id)
        .then((result) => {
          this.$api
            .service("media")
            .find({ query: { $limit: this.limit, $skip: this.start } })
            .then((result) => {
              this.files = result.data;
              this.total = result.total;
              this.$message("Media removed");
            });
        });
    },
    emitImage(img) {
      console.log(img);
    },
  },

  mounted() {
    
    this.query()
    
    //media deleted
    this.$api.service("media").on("removed", (data) => {
      this.allFiles = this.allFiles.filter ( image => {
        return image._id != data._id
      })
      this.files = this.files.filter ( image => {
        return image._id != data._id
      })
      this.$message("Media deleted");
    });
    
    //new media created
    this.$api.service('media').on('created', (data) => {
      this.allFiles.unshift ( data )
      this.total = this.total+1
    })


    //plugins 
    this.datastore.dataset.plugins.filter ( plugin => {
      if ( plugin.component.path === 'pixabay/pixabay' && plugin.component.config.apikey && plugin.general.enabled ){
        this.pixabayPlugin = true
      }
    })

    //is there a gallery when setting images for a component
    if ( this.$mapState().editor.current.hasOwnProperty('gallery') && this.$mapState().editor.current.gallery && this.$attrs.filter != 'manager' ){
      this.galleryImages = this.$mapState().editor.current.gallery.images
    }
  },
};
</script>