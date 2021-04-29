<template>
    <div>
        <!-- {{ images.length }} -->
    </div>
</template>

<script>
import jp from 'jsonpath'
export default {
    name: 'WhoobeUsedImages',
    data:()=>({
        images: []
    }),
    mounted(){
        this.$api.service('articles').find ( 
            {
                query : {
                    $limit: 100,
                    $skip:0
                }
            }
        ).then ( result => {
            console.log ( result )
            result.data.forEach ( page => {
                
                let json = page.blocks.json 
                let images = jp.query ( json , '$..blocks..image.url' )
                images.forEach(img=>
                    !img.includes('http') ?
                        this.images.push(img) : null
                )
                this.$emit('images',this.images)
            })
        })
    }
}
</script>