<template>
    <div id="movie-list" class="container w-full px-4 mx-auto">
        <div class="flex justify-between">
            <h3 class="text-4xl mb-6 mt-4 text-white">
                IMDB All Films
            </h3>
            <Search />
            <h3 class="text-4xl mb-6 mt-4 text-white">
                Films with the title: {{ moviesStore.searchValue }}
            </h3>
        </div>
        <div class="grid gap-4 grid-cols-5">
            <MovieItem v-for="(movie, key) in moviesStore.moviesAll" :key="key" :movie="movie"
                @mouseover.native="onMouseOver(movie.Poster)" @mouseout.native="onMouseOut('')" />
        </div>
    </div>
</template>

<script setup>
import { useMovieStore } from '../stores/movies.js'
import { computed } from 'vue';
import MovieItem from './MovieItem.vue';
import Search from './Search.vue';

const moviesStore = useMovieStore()

const emits = defineEmits(['changePoster', 'changeOutPoster'])

function onMouseOver(poster) {
    emits('changePoster', poster)
}

function onMouseOut(poster) {
    emits('changeOutPoster', poster)
}

</script>