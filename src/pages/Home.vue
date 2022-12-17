<template>
    <PosterBg :poster="posterBg" />
    <MoviesList v-if="!isExistAll" @change-poster="onChangePoster" @change-out-poster="onChangeOutPoster" />
    <MovieListAll v-else @change-poster="onChangePoster" @change-out-poster="onChangeOutPoster" />
    <Auth v-if="modalStore.isOpen === true" />
</template>

<script setup>
import { useModalStore } from '../stores/modal';
import { useMovieStore } from '../stores/movies';
import MoviesList from '../components/MoviesList.vue';
import MovieListAll from '../components/MovieListAll.vue'
/* import Search from '../components/Search.vue'; */
import PosterBg from '../components/PosterBg.vue';
import Auth from '../components/Auth.vue';

import { ref, computed } from 'vue';

const posterBg = ref('')

const modalStore = useModalStore()
const movieStore = useMovieStore()

const isExistAll = computed(() => Boolean(Object.keys(movieStore.moviesAll).length))

function onChangePoster(poster) {
    posterBg.value = poster
}

function onChangeOutPoster(poster) {
    posterBg.value = poster
}
</script>
