<template>
    <RouterLink :to="{ name: 'movieDetail', params: { id: movie.imdbID } }">
        <div
            class="movie-item relative cursor-pointer rounded-md overflow-hidden transition-all duration-2000 ease-in h-64">
            <div class="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10" :style="posterBg">
            </div>
            <div
                class="movie-info-wrap flex flex-col justify-between p-2 h-full opacity-0 transition-all duration-200 ease-in">
                <div class="movie-item-info rounded-lg bg-gray-700">
                    <h3 class="movie-title text-center text-white">
                        {{ movie.Title }},
                    </h3>
                    <p class="movie-year text-center text-white">
                        {{ movie.Year }},
                    </p>
                    <p class="movie-year text-center text-white">
                        {{ movie.Runtime }}
                    </p>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    movie: {
        type: Object,
        required: true
    }
})

/* const emits = defineEmits(['removeItem', { id, title }]) */

const posterBg = computed(() => {
    return {
        "background-image": `url(${props.movie.Poster})`,
    }
})

/* function removeEvent() {
    emits('removeItem', {
        id: props.movie.imdbID,
        title: props.movie.Title
    })
} */
</script>

<style scoped>
.movie-item:hover {
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
    transform: scale(1.02);
}

.movie-item:hover .movie-info-wrap {
    opacity: 1;
}
</style>