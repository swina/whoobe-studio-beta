<template>
  <div class="p-2">
    <p>This image has a different formats. Select one.</p>

    <div class="flex flex-row text-xs">
      <div class="w-1/2 p-2">
        <img
          :src="$imageURL(selectedImage)"
          class="border-2 border-black w-full object-fit"
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
            v-for="(format, index) in Object.keys(selectedImage.formats).sort()"
          >
            <div v-if="format != 'thumbnail'" class="mx-2" :title="format">
              
              <img
                :src="$imageURL(selectedImage.formats[format])"
                :class="'border-2 border-black h-auto ' + autoSize(index)"
                @click="assignImg(selectedImage.formats[format], selectedImage)"
              />
              <div
                class="text-xs"
                v-if="selectedImage.formats[format].hasOwnProperty('width')"
              >
                {{ selectedImage.formats[format].width }} x
                {{ selectedImage.formats[format].height }} -
                {{ parseInt(selectedImage.formats[format].size / 1000000) }}
                KB
              </div>
            </div>
            <div v-else class="absolute bottom-0 right-0 m-2" title="thumbnail">
              <img
                :src="$imageURL(selectedImage.formats[format])"
                class="border w-12 h-auto"
                @click="assignImg(selectedImage.formats[format], selectedImage)"
              />
              <div
                class="text-xs"
                v-if="selectedImage.formats[format].hasOwnProperty('width')"
              >
                {{ selectedImage.formats[format].width }} x
                {{ selectedImage.formats[format].height }} -
                {{ parseInt(selectedImage.formats[format].size / 1000) }}
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
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'MediaSelectFormat',
    props:['selectedImage'],
    computed:{
      ...mapState ( ['editor'] )
    },
    methods:{
        autoSize(index) {
            let w = 40 - (index + 1) * 8;
            return "w-" + w;
        },
        assignImg(image) {
            if (!image) return;
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
            this.$emit("image", img);
            this.$emit("close");
        },
    }
}
</script>