import {TOP_RATED_MOVIES} from '../endpoints';
import {Axios} from '../rest-client';

export const getTopRatedMovies = page => {
  return Axios.get(TOP_RATED_MOVIES('9618b5cf6ae9661f92fff553c697bed4', page));
};
