<template>
    <button @click="goBack">
        Go Back
    </button>
    <h2>
        {{ movieDetail.Plot }}
    </h2>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useMovieStore } from '../stores/movies.js'

const movieStore = useMovieStore()
const route = useRoute()
const router = useRouter()

const movieDetail = computed(() => movieStore.movieDetail)

function goBack() {
    router.go(-1)
}

onMounted(() => {
    movieStore.movieDetails(route)
})
</script>