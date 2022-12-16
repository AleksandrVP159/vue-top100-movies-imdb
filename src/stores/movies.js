import { ref, computed } from "vue";
import { defineStore } from "pinia";

import IDs from "../stores/mock/imdb_top100.js";
import axios from "../axios";

function serializeResponse(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});
}

export const useMovieStore = defineStore("movie", () => {
  const top100IDs = ref(IDs);
  const moviesPerPage = ref(10);
  const currentPage = ref(1);
  const movies = ref({});
  const moviesAll = ref({});
  const searchValue = ref("");

  const moviesLength = computed(() => Object.keys(top100IDs.value).length);

  /*  const sliceIDs = computed((state) => {
    return (from, to) => state.top100IDs.value.slice(from, to);
  }); */

  function sliceIDs(from, to) {
    return top100IDs.value.slice(from, to);
  }

  async function fetchMovies() {
    try {
      const from =
        currentPage.value * moviesPerPage.value - moviesPerPage.value;
      const to = currentPage.value * moviesPerPage.value;
      /*   const moviesToFetch = sliceIDs(from, to); */

      const requests = sliceIDs(from, to).map((id) => axios.get(`/?i=${id}`));
      const response = await Promise.all(requests);
      const moviesfull = serializeResponse(response);

      movies.value = moviesfull;
    } catch (err) {
      console.log(err);
    }
  }

  function changeCurrentPage(page) {
    currentPage.value = page;
    fetchMovies();
  }

  function removeMovie(id) {
    const index = top100IDs.value.findIndex((item) => item === id);
    if (index !== -1) {
      top100IDs.value.splice(index, 1);
      fetchMovies();
    }
  }

  async function searchMovie(query) {
    try {
      const response = await axios.get(`/?s=${query}`);
      if (response.Error) {
        throw Error(response.Error);
      }
      const moviesfull = serializeResponse(response.Search);
      moviesAll.value = moviesfull;
    } catch (err) {
      console.log(err);
    }
  }

  /*   async function loadMoreSearchMovie() */

  return {
    top100IDs,
    movies,
    moviesAll,
    moviesLength,
    moviesPerPage,
    currentPage,
    searchValue,
    sliceIDs,
    fetchMovies,
    changeCurrentPage,
    searchMovie,
    removeMovie,
  };
});
