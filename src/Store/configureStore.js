import { createStore } from 'redux';
import fixtures from '../Fixtures';
import toggleFavorite from './Reducers/favoriteReducer'

const noreducer = x => x;

export default createStore(toggleFavorite, fixtures);

