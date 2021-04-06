<template>
    <div>
        <textarea v-model="html" class="text-base w-full h-2/5"></textarea>
    </div>
</template>

<script>
export default {
    name: 'WhoobePreviewHtml',
    data:()=>({
        html: ''
    }),
    mounted(){
        let html = document.getElementById('content').outerHTML
        this.html = this.$beautify ( html.replaceAll('<!---->','').replaceAll('[object Object]','') )
    }
}
</script>