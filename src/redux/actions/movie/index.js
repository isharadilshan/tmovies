import {SET_TOP_RATED_MOVIES} from '../../action-types';

export const setTopMovies = payload => {
  return {type: SET_TOP_RATED_MOVIES, payload};
};
