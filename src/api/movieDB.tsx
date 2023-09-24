import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '9b7806761e5253b39009f78a580917e4',
    language: 'es-ES',
  },
});

export default movieDB;
