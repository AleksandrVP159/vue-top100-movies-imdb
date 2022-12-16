<template>
    <PosterBg :poster="posterBg" />
    <MoviesList @change-poster="onChangePoster" @change-out-poster="onChangeOutPoster" />
    <Auth v-if="modalStore.isOpen === true" />
</template>

<script setup>
import { useModalStore } from '../stores/modal';
import MoviesList from '../components/MoviesList.vue';
import PosterBg from '../components/PosterBg.vue';
import Auth from '../components/Auth.vue';

import { ref } from 'vue';

const posterBg = ref('')

const modalStore = useModalStore()

function onChangePoster(poster) {
    posterBg.value = poster
}

function onChangeOutPoster(poster) {
    posterBg.value = poster
}
</script>