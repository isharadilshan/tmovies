import axios from 'axios';

const ENDPOINT = 'https://api.themoviedb.org/3';

export const Axios = axios.create({baseURL: ENDPOINT});
