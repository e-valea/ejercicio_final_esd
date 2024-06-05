<template>
    <div class="carousel-container">
        <h2>
            <slot></slot>
        </h2>
        <div class="carousel flex gap-1 overflow-hidden relative">
            <button @click="prevImage" class="carousel-button left">&#10094;</button>
            <div ref="carouselContainer" class="carousel-images-container flex overflow-x-scroll">
                <CardPelicula v-for="peli in movies" :key="peli.id" :peli="peli"
                    :img="`https://image.tmdb.org/t/p/w500${peli.poster_path}`" :horizontal="false" />
            </div>
            <button @click="nextImage" class="carousel-button right">&#10095;</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';
import CardPelicula from '~/components/CardPelicula.vue';

const movies = ref([]);

onMounted(async () => {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=b80639b9f5a2e4e880b931dedbec575b&sort_by=popularity.desc');
    movies.value = response.data.results;

    await nextTick();

    if (carouselContainer.value) {
        const card = carouselContainer.value.querySelector('.p-1');
        if (card) {
            cardWidth.value = card.offsetWidth;
        }
    }
});

const carouselContainer = ref(null);
const cardWidth = ref(0);

const prevImage = () => {
    if (carouselContainer.value) {
        carouselContainer.value.scrollLeft -= cardWidth.value;
    }
};

const nextImage = () => {
    if (carouselContainer.value) {
        carouselContainer.value.scrollLeft += cardWidth.value;
    }
};
</script>


<style lang="postcss" scoped>

.carousel-container {
    position: relative;
    width: 100%;
    gap: 1rem;
}

.carousel {
    display: flex;
    align-items: center;
}

.carousel-images-container {
    width: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;

}

.carousel-images {
    display: flex;
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
    z-index: 10;
}

.carousel-button.left {
    left: 0;
}

.carousel-button.right {
    right: 0;
}
</style>
