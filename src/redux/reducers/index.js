import {combineReducers} from 'redux';
import movieReducer, {movieInitialState} from './movie';

export const rootReducer = combineReducers({
  movie: movieReducer,
});

export const getInitialState = () => ({
  movie: movieInitialState,
});
