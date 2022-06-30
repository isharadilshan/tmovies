import Config from 'react-native-config';
import {TOP_RATED_MOVIES} from '../endpoints';
import {Axios} from '../rest-client';

export const getTopRatedMovies = page => {
  return Axios.get(TOP_RATED_MOVIES(Config.API_KEY, page));
};
