import { createStore } from 'redux';
import rootReducer from './Reducers';
import testFixtures from '../Fixtures/TestFixtures';

export default createStore(rootReducer, testFixtures);
