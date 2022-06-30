import {SET_TOP_RATED_MOVIES} from '../../action-types';

export const movieInitialState = {
  topRatedMovies: [],
};

const movieReducer = (state = movieInitialState, action) => {
  switch (action.type) {
    case SET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
