import { createStore } from 'redux';
import rootReducer from './Reducers';
import fixtures from '../Fixtures';

export default createStore(rootReducer, fixtures);
