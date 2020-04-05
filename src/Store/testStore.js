import { createStore } from 'redux';
import testFixtures from '../Fixtures/TestFixtures';
import toggleFavorite from './Reducers/favoriteReducer';

export default createStore(toggleFavorite, testFixtures);
