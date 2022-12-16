<template>
    <div class="poster-page-bg" :style="posterStyle"></div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    poster: {
        type: String,
        default: ''
    }
})

const defaultPosterBg = ref("linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%)")

const posterStyle = computed(() => {
    return {
        "background-image": posterBg.value,
    }
})

const posterBg = computed(() => props.poster ? `url(${props.poster})` : defaultPosterBg.value)

</script>

<style scoped>
.poster-page-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -20;
    background-size: cover;
    background-position: center;
    transition: all 0.2s ease;
}

.poster-page-bg ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    background-image: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
}
</style>