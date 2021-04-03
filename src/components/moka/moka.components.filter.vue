<template>
    <div class="flex justify-center">
        <button @click="$emit('create')" class="mr-2">Create New</button>
        <button @click="$emit('import')" class="mr-2">Import</button>
        <button @click="$emit('export')" class="mr-2">Export Category</button>
        <button v-if="moka.library && moka.library.length" @click="$emit('exportLibrary')">Export Selected [{{moka.library.length}}]</button>
        <button @click="$emit('saveLocal')">Save</button>
    </div>
</template>

<script>
export default {
    name: 'MokaComponentsFilter'
}
</script> 

