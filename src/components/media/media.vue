<template>
  <div class="">
    <div class="p-4 relative h-full bg-white" v-if="files">
      <!--<i v-if="$attrs.filter" class="material-icons absolute right-0 top-0 m-1" @click="$emit('close')">close</i>-->
      <div class="grid grid-cols-5 grid-flow-row items-center">
        <div class="col-span-5 flex flex-row">
          <button @click="uploadFile = !uploadFile">Upload</button>

          <button
            class="ml-2 items-center"
            id="upload_widget"
            @click="$action('cloudinary')">
            <i class="material-icons">upload</i> <span>Cloudinary</span>
          </button>
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
      <!--<div class="bg-gray-200 h-full border-1 rounded-lg shadow p-8 relative overflow-y-auto">-->
      <!-- <i v-if="$attrs.modal" class="material-icons absolute top-0 right-0" @click="$emit('close')">highlight_off</i> -->
      <div :class="'flex flex-wrap border rounded p-4 h-3/4 overflow-y-auto grid ' + isEdit" v-if="files && !openCloudinary">
        <template v-for="(element, n) in files">

          <div :key="n" class="px-2 bg-white text-xs cursor-pointer mb-2"
            @click="setImage(element), (selected = element)"
            :title="element.name"
            v-if="element.hasOwnProperty('name')">
            <div :class="'mb-1 overflow-hidden border-4 border-transparent ' + active(element)">
              <div class="relative pt-32 bg-gray-700">
                <div class="flex items-center text-center h-full justify-center absolute h-48 top-0 left-0 right-0 bottom-0">
                  <img
                    v-if="element.url && element.mime.includes('image')"
                    :src="$imageURL(element)"
                    class="w-auto h-auto block m-auto"
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
      </div>
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
        <!--
        <div
          v-if="selectThumbnail"
          class="nuxpresso-modal w-3/4 p-2 z-2xtop max-h-screen"
        >
          <i
            class="material-icons absolute right-0 top-0 m-1"
            @click="selectThumbnail = !selectThumbnail"
            >close</i
          >
          <p>This image has a different formats. Select one.</p>

          <div class="flex flex-row text-xs">
            <div class="w-1/2 p-2">
              <img
                :src="$imageURL(selectedImage)"
                class="border w-full object-fit"
                @click="assignImg(selectedImage)"
              />
              <div v-if="selectedImage.hasOwnProperty('width')">
                {{ selectedImage.width }} x {{ selectedImage.height }} -
                {{ parseInt(selectedImage.size / 1000) }} KB
              </div>
            </div>
            <div class="w-1/2 p-2">
              <div
                v-if="Object.keys(selectedImage.formats)"
                class="flex flex-row flex-wrap text-xs"
              >
                <template
                  v-for="(format, index) in Object.keys(
                    selectedImage.formats
                  ).sort()"
                >
                  <div v-if="format != 'thumbnail'" class="mx-2">
                    {{ format }}
                    <img
                      :src="$imageURL(selectedImage.formats[format])"
                      :class="'border h-auto ' + autoSize(index)"
                      @click="
                        assignImg(selectedImage.formats[format], selectedImage)
                      "
                    />
                    <div
                      class="text-xs"
                      v-if="
                        selectedImage.formats[format].hasOwnProperty('width')
                      "
                    >
                      {{ selectedImage.formats[format].width }} x
                      {{ selectedImage.formats[format].height }} -
                      {{
                        parseInt(selectedImage.formats[format].size / 1000000)
                      }}
                      KB
                    </div>
                  </div>
                  <div v-else class="absolute bottom-0 right-0 m-2">
                    Thumb
                    <img
                      :src="$imageURL(selectedImage.formats[format])"
                      class="border w-12 h-auto"
                      @click="
                        assignImg(selectedImage.formats[format], selectedImage)
                      "
                    />
                    <div
                      class="text-xs"
                      v-if="
                        selectedImage.formats[format].hasOwnProperty('width')
                      "
                    >
                      {{ selectedImage.formats[format].width }} x
                      {{ selectedImage.formats[format].height }} -
                      {{
                        parseInt(selectedImage.formats[format].size / 1000)
                      }}
                      KB
                    </div>
                  </div>
                </template>
              </div>
              <div v-else>
                <img
                  :src="$imageURL(selectedImage)"
                  class="border w-full h-auto"
                  @click="assignImg('thumb')"
                />
                {{ selectedImage.formats.thumbnail.width }} x
                {{ selectedImage.formats.thumbnail.height }} -
                {{ selectedImage.formats.thumbnail.size }} KB
              </div>
            </div>
          </div>
        </div>
        -->
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
      <!-- IMAGE FROM URL -->
<!--       
      <transition name="fade">
        <moka-modal
          size="md"
          v-if="imageURL || unsplash"
          @close="(imageURL = ''), (unsplash = '')"
          @click_0="(imageURL = ''), (unsplash = '')"
          @click_1="setImageByURL()"
        >
          <div slot="title">Image URL</div>
          <div slot="content" class="p-2">
            <img
              :src="imageURL || 'https://source.unsplash.com/' + unsplash"
              class="w-full object-contain"
            />
            <div v-if="editor.current && editor.current.image" class="text-xs">
              {{ editor.current.image.width }} x
              {{ editor.current.image.height }}
              <span class="px-1 bg-gray-300 text-black rounded uppercase">{{
                editor.current.image.ext
              }}</span>
            </div>
          </div>
        </moka-modal>
      </transition> -->
      <!--<template v-for="img in images">
            <img :src="'/img/' + img.name" class="w-24"/>
        </template>-->

      <!-- <moka-modal v-if="openCloudinary" @close="openCloudinary=!openCloudinary">
            <div slot="content" id="cloudinary">
                <moka-cloudinary-upload class="mx-2" v-if="cloudinary" :config="cloudinary.config" @cloudinary="addImageCloudinary"/>
            </div>

        </moka-modal> -->
      <textarea
        class="opacity-100 h-20 w-40"
        id="myUpload"
        @input="emitImage"
      />
    </div>
    
  </div>
</template>

<script>
import MokaUpload from "@/components/media/media.upload"
import MokaEditMedia from "@/components/media/media.edit"
import MokaMediaFormat from './media.select.format'
import WhoobeEditorActions from '@/components/moka/editor/whoobe.editor.actions'
//import MokaCloudinaryUpload from '@/components/plugins/cloudinary/cloudinary.widget'
import { mapState } from "vuex";
export default {
  name: "MokaMedia",
  components: { MokaUpload, MokaEditMedia , MokaMediaFormat , WhoobeEditorActions }, //, MokaCloudinaryUpload },
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
    extImage: null,
    cloudinary: null,
    openCloudinary: false,
    files: null,
    allFiles: null,
    fullscreen: false,
  }),
  computed: {
    ...mapState(["moka", "editor", "datastore"]),
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
      let vm= this
      console.log ( vm.search )
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
          console.log ( response )
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
          this.selectThumbnail = false
          this.selectedImage = img;
          this.assignImg(this.selectedImage);
        }
      }
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
      if ( this.editor.current.hasOwnProperty('image') ){
        this.editor.current.image = image
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
    this.$api.service("media").on("deleted", (data) => {
      this.allFiles.filter ( image => {
        return image._id != data._id
      })
      this.files.filter ( image => {
        return image._id != data._id
      })
      this.$message("Media deleted");
    });
    
    //new media created
    this.$api.service('media').on('created', (data) => {
      this.allFiles.unshift ( data )
      this.total = this.total+1
    })
    /*
        this.datastore.dataset.plugins ? 
            this.cloudinary = this.datastore.dataset.plugins[0].plugins.filter ( plugin => {
                console.log ( plugin.component )
                return plugin.component === 'cloudinary/cloudinary.widget'
            })[0] : null
        */
    /*
        this.$http.get ( 'plugins' ).then ( response => {
            let plugins = response.data.plugins
            plugins.forEach ( plugin => {
                if ( plugin.component === 'cloudinary/cloudinary.widget' ){
                    this.cloudinary = plugin.config
                }
            })
        })
        */

    /*this.$http.get ( 'upload/files/count?' ).then ( response => {
            this.total = response.data
        })
        if ( this.editor && this.editor.current && this.editor.current.image && this.editor.current.image.url.includes('http') ){
                this.imageURL = this.editor.current.image.url
        }
        */
  },
};
</script>