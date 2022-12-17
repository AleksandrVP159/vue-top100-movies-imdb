<template>
    <div class="self-center">
        <input v-model="movieStore.searchValue" ref="inputRef" @change="onChangeInput"
            class='self-center border-2 border-solid border-gray-900 py-3 px-5 pl-10 w-96 h-12 rounded-lg text-base'
            placeholder="Search all IMDb films...">
        <!--  <svg v-if="movieStore.searchValue" @click="onClickClear" class="w-4 h-4 cursor-pointer text-gray-900"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg> -->
    </div>
</template>

<script setup>
import { useMovieStore } from '../stores/movies';
import { ref } from 'vue';
import debounce from 'lodash.debounce'

const movieStore = useMovieStore()

const inputRef = ref(null)

/* const onClickClear = () => {
    movieStore.$patch((state) => {
        state.searchValue = ''
    })
    inputRef.value?.focus()
} */

const onChangeInput = (e) => {
    updateSearchValue(e.target.value)
}

const updateSearchValue = debounce((str) => {
    movieStore.searchMovie(str)
}, 1000)
</script>