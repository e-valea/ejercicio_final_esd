<template>
    <div v-if="movie">
        <div class="movie-details">
            <div class="backdrop" :style="`background-image: url(${getBackdropUrl(movie.backdrop_path)})`"></div>
            <div class="details-container">
                <img :src="getPosterUrl(movie.poster_path)" alt="Movie Poster" class="movie-poster">
                <div class="info">
                    <h1>{{ movie.title }}</h1>
                    <p>{{ movie.overview }}</p>
                    <ul>
                        <li><strong>Release Date:</strong> {{ movie.release_date }}</li>
                        <li><strong>Rating:</strong> {{ movie.vote_average }}</li>
                        <li><strong>Runtime:</strong> {{ movie.runtime }} minutes</li>
                        <li><strong>Genres:</strong> {{ movie.genres.map(genre => genre.name).join(', ') }}</li>
                        <li><strong>Language:</strong> {{ movie.original_language }}</li>
                        <li><strong>Tagline:</strong> {{ movie.tagline }}</li>
                        <li><strong>Budget:</strong> {{ formatCurrency(movie.budget) }}</li>
                        <li><strong>Revenue:</strong> {{ formatCurrency(movie.revenue) }}</li>
                        <li><strong>Production Companies:</strong> {{ movie.production_companies.map(company =>
                            company.name).join(', ') }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const movie = ref(null);

onMounted(async () => {
    const movieId = route.params.id;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b80639b9f5a2e4e880b931dedbec575b`);
    movie.value = response.data;
});

const getPosterUrl = (path) => {
    return `https://image.tmdb.org/t/p/w500${path}`;
};

const getBackdropUrl = (path) => {
    return `https://image.tmdb.org/t/p/w1280${path}`;
};

const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value);
};
</script>

<style scoped>
.movie-details {
    position: relative;
    color: #fff;
}

.backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
    background-size: cover;
    background-position: center;
    filter: brightness(50%);
    z-index: -1;
}

.details-container {
    display: flex;
    padding: 20px;
    padding-bottom: 6rem;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    max-width: 60%;
}

.movie-poster {
    width: 30%;
    border-radius: 8px;
    margin-right: 20px;
    object-fit: cover;
}

.info {
    flex: 1;
    padding-left: 1.5rem;
}

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 0.5rem;
}

strong {
    font-weight: bold;
}
</style>
