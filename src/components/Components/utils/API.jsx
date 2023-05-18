import axios from 'axios';
const AUTH_KEY = 'e88eb452a05a2e0e5aee8e4233a13d99';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = AUTH_KEY;

export const fetchMovieByPopular = async () => {
  const options = {
    params: {
      api_key: AUTH_KEY,
      page: 1,
    },
  };

  const { data } = await axios(`/movie/popular`, options);
  return data;
};
export const fetchMovieById = async id => {
  const options = {
    params: {
      api_key: AUTH_KEY,
    },
  };

  const { data } = await axios(`/movie/${id}`, options);
  return data;
};
export const fetchMovieByCredits = async id => {
  const options = {
    params: {
      api_key: AUTH_KEY,
    },
  };

  const { data } = await axios(`/movie/${id}/credits`, options);
  return data;
};
export const fetchMovieByReviews = async id => {
  const options = {
    params: {
      api_key: AUTH_KEY,
    },
  };

  const { data } = await axios(`/movie/${id}/reviews`, options);
  return data;
};
export const fetchMovieByName = async name => {
  const options = {
    params: {
      api_key: AUTH_KEY,
    },
  };

  const { data } = await axios(`/search/movie?query=${name}`, options);
  return data;
};
