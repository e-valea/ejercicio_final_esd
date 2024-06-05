<template>
    <NuxtLink :to="`/movie/${peli.id}`">
        <div class="">
            <div v-if="props.horizontal" class="h w-96 h-60 bg-cover rounded-lg cards"
                :style="`background-image: url('${props.img}');`">
            </div>
            <div v-else class="h w-60 h-80 bg-cover rounded-lg cards" :style="`background-image: url('${props.img}');`">
            </div>
        </div>
    </NuxtLink>
</template>


<script setup>

const props = defineProps({
    img: String,
    horizontal: Boolean,
    cardNueva: Boolean,
    peli: Object
})
</script>


<style lang="postcss" scoped>
.cards:hover{

    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
}


</style>
