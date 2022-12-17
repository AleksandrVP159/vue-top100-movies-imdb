<template>
    <div class="flex justify-center h-screen bg-repeat bg-contain" :style="backgroundImage">
        <div class="bg-gray-700 max-w-3xl h-3/4 self-center rounded-2xl">
            <button
                class="px-3 py-2 rounded border-2 text-gray-700 border-white bg-white hover:bg-gray-300 transition-colors"
                @click="goBack">
                Go Back
            </button>
            <article class="text-white">
                Description: <br>{{ movieDetail.Plot }}
            </article>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useMovieStore } from '../stores/movies.js'

const movieStore = useMovieStore()
const route = useRoute()
const router = useRouter()

const movieDetail = computed(() => movieStore.movieDetail)
const backgroundImage = computed(() => {
    return {
        "background-image": `url(${movieDetail.value.Poster})`,
    }
})

function goBack() {
    router.go(-1)
}

onMounted(() => {
    movieStore.movieDetails(route)
})
</script>