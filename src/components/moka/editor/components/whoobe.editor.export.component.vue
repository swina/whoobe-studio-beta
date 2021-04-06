<template>
    <div class="flex flex-col bg-gray-300 p-2 rounded">
        <vue-blob-json-csv
            file-type="json"
            :file-name="$mapState().editor.component.name"
            :data="[jsonToExport]"
            confirm="Do you want to download it?"
        >
        <button class="my-2">Download {{$mapState().editor.component.name}}</button>
        </vue-blob-json-csv>
    </div>
</template>

<script>
export default {
    name: 'WhoobeExportComponent',
    computed:{
        jsonToExport(){
            return JSON.stringify(this.$mapState().editor.component.json)
        }
    }
}
</script>