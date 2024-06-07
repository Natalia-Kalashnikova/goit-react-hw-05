import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const TOKEN_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjIzMzZhMzdiZjliY2Q5MDkzZTRlNTAyMDMxMjE2NSIsInN1YiI6IjY2MGRlMzdmZTE4ZTNmMDE3ZGEzMWQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ljPXTd22NVryB8OPioCic_twlGMPbptn8mOodFGkUAE';

export const getTrendingMovies = async () => {
  const response = await axios.get('/3/trending/movie/day?language=en-US', {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });

  return response.data;
};

export const getMovieById = async movie_id => {
  const response = await axios.get(`/3/movie/${movie_id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });

  return response.data;
};

export const getMovies = async (searchWord, currentPage) => {
  const response = await axios.get('/3/search/movie', {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
    params: {
      query: searchWord,
      // page: currentPage,
    },
  });

  return response.data;
};

export const getCastById = async movie_id => {
  const response = await axios.get(`/3/movie/${movie_id}/credits`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });

  return response.data;
};

export const getReviewsById = async movie_id => {
  const response = await axios.get(`/3/movie/${movie_id}/reviews`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN_KEY}`,
    },
  });

  return response.data;
};