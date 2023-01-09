import { legacy_createStore } from 'redux';
import rootReducer from './Reducers';
import testFixtures from '../Fixtures/TestFixtures';

export default legacy_createStore(rootReducer, testFixtures);
