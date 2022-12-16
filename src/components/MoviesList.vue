<template>
    <div id="movie-list" class="container w-full px-4 mx-auto">
        <div class="flex justify-between">
            <h3 class="text-4xl mb-6 mt-4 text-white">
                IMDB Top 100
            </h3>
            <vue-awesome-paginate class="self-center" v-model="movieStore.currentPage"
                :items-per-page="movieStore.moviesPerPage" :total-items="movieStore.moviesLength"
                :on-click="onPageChanged" />
        </div>

        <div class="grid gap-4 grid-cols-5 grid-rows-2">
            <template v-if="isExist">
                <MovieItem v-for="(movie, key) in moviesStore.movies" :key="key" :movie="movie"
                    @mouseover.native="onMouseOver(movie.Poster)" @mouseout.native="onMouseOut('')" />
            </template>
            <template v-else>
                <div>
                    Empty List
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { useMovieStore } from '../stores/movies.js'
import { computed, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import MovieItem from './MovieItem.vue';

const moviesStore = useMovieStore()

const emits = defineEmits(['changePoster', 'changeOutPoster'])

const movieStore = useMovieStore()
const router = useRouter()
const route = useRoute()

const isExist = computed(() => Boolean(Object.keys(moviesStore.movies).length))

function onPageQueryChange({ page = 1 }) {
    movieStore.changeCurrentPage(Number(page))
}

function onPageChanged(page) {
    router.push({ query: { page } })
}

function onMouseOver(poster) {
    emits('changePoster', poster)
}

function onMouseOut(poster) {
    emits('changeOutPoster', poster)
}

watchEffect(() => {
    if (route.query) {
        onPageQueryChange(route.query)
    }
})

</script>

<style>
.pagination-container {
    display: flex;
    column-gap: 10px;
}

.paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
}

.paginate-buttons:hover {
    background-color: rgb(55 65 81);
    border: 1px solid rgb(55 65 81);
    color: white;
}

.active-page {
    background-color: rgb(55 65 81);
    border: 1px solid rgb(55 65 81);
    color: white;
}

.active-page:hover {
    background-color: rgb(55 65 81);
}
</style>