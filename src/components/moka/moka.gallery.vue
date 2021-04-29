<template>
  <div v-if="init" :id="$randomID()" :key="galleryID">
    <div v-if="gallery" class="whoobe-components-gallery sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:gap-8">
      <!-- GALLERY -->
      <div v-for="(comp, c) in objects" class="whoobe-components-gallery-container" :title="comp.name + '-' + comp.description + ' ' + $moment(comp.updatedAt)" :key="comp._id">
        <div>
          <div class="whoobe-component-gallery-title">
            {{ comp.name.substring(0, 30) }}
          </div>

          <div class="whoobe-component-gallery-image" v-if="comp.image">
            <img
              :class="'image_' + comp._id"
              :src="background(comp.image, comp._id)"
              class="opacity-0"
              title="Click to preview"
              @load="autoSize($event)"
              @click="selectComponent(comp.id, 'preview', comp)"
              @mouseover="currImage = $imageURL(comp.image)"
              @mouseleave="currImage = null"
            />
          </div>

          <div
            v-else
            class="h-48"
            title="Click to preview"
            @click="$emit('preview', comp)"
          ></div>

          <!--ACTIONS-->
          <div class="whoobe-component-gallery-actions" @mouseleave="moreID = null">
            <div>
              <div v-if="moreID === comp._id" @mouseleave="moreID = null" class="menu">
                <div class="pl-1 hover:bg-white" @click="restoreAutosave(comp)" title="Restore from autosave">
                  Restore
                </div>
                <div class="pl-1 hover:bg-white" @click="addToLibrary(comp, 'library')" title="Export">
                  Add to export
                </div>
                <div class="pl-1 hover:bg-white" @click="selectComponent(comp.id, 'duplicate', comp)" title="Duplicate">
                  Duplicate
                </div>
                <div class="pl-1 hover:bg-white" @click="(index = c),(current = comp._id),(confirmModal = !confirmModal)">
                  Delete
                </div>
              </div>
              <div class="w-full p-1 flex flex-row justify-around">
                
                <i class="material-icons xs mr-2 hover:text-blue-500" title="Edit" @click="selectComponent(comp.id, 'component', comp)">edit</i>
                
                <i class="material-icons xs ml-2 hover:text-blue-500" title="Preview" @click="selectComponent(comp.id, 'preview', comp)">preview</i>

                <i class="material-icons" @click="moreID = comp._id">more_vert</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <moka-table
      v-if="!gallery"
      :components="objects"
      ctx="components"
      @component="selectComponentTable"
    />

    <transition name="fade">
      <moka-modal v-if="confirmModal"
        size="sm"
        position="modal"
        @close="confirmModal=!confirmModal"
        @click_0="confirmModal=!confirmModal"
        @click_1="confirm=true,confirmModal=!confirmModal,removeBlock()">
        <div slot="title">Delete object</div>
        <div slot="content" class="p-4">
          Delete this object ?
        </div>
      </moka-modal>
    </transition>

    <transition name="fade">
      <moka-modal
        v-if="autosave"
        @close="autosave = !autosave"
        @click_0="autosave = !autosave"
        @click_1="restoreBlockAutosave()"
      >
        <div slot="title">Restore Autosave</div>
        <div slot="content">
          We suggest to preview your autosaved blocks before to restore
          <button @click="setAutosavePreview()">Check preview</button>
        </div>
      </moka-modal>
    </transition>
    <!--
        <transition name="fade">
            <moka-modal
                position="top-left"
                :close="false"
                size="md"
                height="screen"
                v-if="currImage"
                buttons="none"
                >
                {{currImage}}
                <div slot="content" :style="'background-image:url(' + currImage + ');'" class="bg-cover bg-no-repeat h-full h-screen w-full bg-gray-200 object-contain"></div>
            </moka-modal>
        </transition>-->
  </div>
</template>

<script>
import MokaTable from "@/components/table";

import { mapState } from "vuex";
export default {
  name: "MokaBlocksGallery",
  components: { MokaTable },
  data: () => ({
    confirm: false,
    moreID: null,
    overID: null,
    confirmModal: false,
    current: null,
    currImage: null,
    index: null,
    allObjects: null,
    objects: null,
    components: null,
    galleryID: null,
    autosave: false,
    autosaveObject: null,
    autosaveID: null,
    gallery: true,
  }),
  props: ["type", "filter", "dataset"],
  computed: {
    ...mapState(["moka", "datastore"]),
    init() {
      return true;
    },
  },
  mounted() {
    this.loadData();
    this.galleryID = this.$randomID();
    let vm = this
    this.$api.service('components').on ( 'created' , (data)=>{
        this.$message ( 'A new blocks component has been created' )
        console.log ( 'created ========> ' , data )
        this.datastore.dataset.components.unshift(data)
        this.loadData()
        vm.selectComponent(data._id, 'component', data)
    })
    this.$api.service('components').on ( 'removed' , ( data )=>{
        console.log ( 'removed =======> ' , data )
        this.$message ( 'Blocks component has been removed' )
        let objects = this.objects.filter ( ( comp, i) => {
          return comp._id != data._id 
        })
        this.objects = objects
        this.$components()
    })
  },
  watch: {
    filter() {
      this.loadData();
    },
    type(v) {
      v
        ? (this.objects = this.allObjects.filter((comp) => {
            return comp.tags === v;
          }))
        : (this.objects = this.allObjects);
    },
  },
  methods: {
    loadData() {
      this.$loading(true)
      this.$api.service ( 'components' ).find ( {
        query: {
          $limit: 300,
          $skip: 0,
          category: this.filter
        }
      }).then ( res => {
        this.$store.dispatch ( 'dataset' , { table: 'components' , data: res.data })
        this.allObjects = this.datastore.dataset.components
        this.objects = this.allObjects.filter ( comp => {
          return comp.category === this.filter
        })
        this.$loading()
      })
      return true
    },
    showOptions(id) {
      if (id === this.overID) {
        return "";
      }
      return "opacity-0";
    },
    selectComponent(id, action, component) {
      console.log( id,action,component)
      this.$api.service('components').get ( component._id ).then ( res => {
        this.$emit(action, res );
      })
      //return;
      // this.$http.get("components/" + id).then((result) => {
      //   if (action === "duplicate") {
      //     this.duplicateBlock(result.data);
      //   } else {
      //     this.$emit(action, result.data);
      //   }
      // });
    },
    selectComponentTable(comp) {
      this.selectComponent(comp.id, "component");
    },
    addToLibrary(component) {
      this.$http.get("components/" + component.id).then((result) => {
        let block = result.data;
        block.image_uri = block.image && block.image.url ? block.image.url : "";
        block.image = null;
        this.$store.dispatch("addToLibrary", block);
        this.$store.dispatch("message", "Block added to library to export");
      });
    },
    background(comp, id) {
      let image = "";

      image = typeof comp === "string" ? this.$imageURL(comp) : "";
      return image;
    },
    autoSize(evt) {
      let cl = evt.path[0].classList.value;
      if (evt.path[0].naturalHeight > 400) {
        cl += " object-cover h-48 opacity-100";
        evt.path[0].classList.value = cl;
      } else {
        cl += " object-contain opacity-100";
        evt.path[0].classList.value = cl;
      }
    },
    duplicateBlock(comp) {
      let component = Object.assign({}, comp);
      //component.id = this.$randomID()
      component.blocks_id = null;
      component.name = comp.name + " COPY";
      delete component.id;
      this.$loading(true);
      //this.$http.post ( 'components' , component ).then ( result => {
      this.$api
        .service("components")
        .create(component)
        .then((result) => {
          this.objects.push(result);
          this.allObjects.push(result);
          this.datastore.dataset.components.push(result);
          this.$loading();
        })
        .catch((error) => {
          this.$action("error");
          this.$store.dispatch("error ", error);
          this.$loading();
        });
    },
    removeBlock() {
      console.log("removing block", this.current);
      //this.blocks.splice(this.index,1)
      this.$api
        .service("components")
        .remove(this.current)
        // .then((result) => {
        //   this.datastore.dataset.components.splice(this.index,1);
        //   console.log(result);
        // });
    },

    removeElement() {
      if (this.current && this.confirm) {
        this.datastore.dataset.components.splice(this.index, 1);
        this.$emit("remove", this.current);
      }
    },
    restoreAutosave(comp) {
      this.autosaveID = comp.id;
      this.$http.get("components/" + comp.id).then((res) => {
        this.autosaveObject = res.data.autosave.blocks;
        this.autosave = true;
      });
    },
    setAutosavePreview() {
      window.localStorage.setItem(
        "moka-preview",
        JSON.stringify(this.autosaveObject)
      );
      let route = this.$router.resolve({ path: "/preview" });
      // let route = this.$router.resolve('/link/to/page'); // This also works.
      var w = window.open(route.href, "moka",'width=' + window.screen.availWidth );
      w.focus()
    },
    restoreBlockAutosave() {
      if (this.autosaveObject && this.autosaveID) {
        let block = {
          json: this.autosaveObject,
        };
        this.$http.put("components/" + this.autosaveID, block).then((res) => {
          console.log(res);
          this.$message("Autosave restored");
        });
      }
    },
  },
};
</script>