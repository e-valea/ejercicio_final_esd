<template>
    <div :class="`flex justify-center items-center px-4 py-2 rounded-xl ${colors}`">
        <slot />
    </div>
</template>


<script setup>
const props = defineProps({
    typeB: String,
})
let colors = ""

if (props.typeB=='primary') {
    colors = 'bg-primary text-blacko primaryHover'
} else if (props.typeB == 'gray') {
    colors = 'bg-g100 text-blacko grayHover'
} else if (props.typeB == 'transparent') {
    colors = 'bg-none text-white border-white border-2 '
}

</script>


<style lang="postcss" scoped>
    .primaryHover:hover{
        background-color: #3cd89f;
    }
    .grayHover:hover{
        background-color: #E5E4E4;
    }  
   

</style>