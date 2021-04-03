<template>
    <div>
        <pre>
        {{ projects}}
        </pre>
    </div>
</template>

<script>
export default {
    name: 'WhoobeProjects',
    data:()=>({
        projects : null
    }),
    mounted(){
        this.$api.service ( 'projects' ).find ( ).then ( res => {
            this.projects = res.data
        })
    }
}
</script>