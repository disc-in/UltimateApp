import { createStore } from 'redux';
import rootReducer from './Reducers';
import fixtures from '../Fixtures';

export default createStore(
  rootReducer,
  fixtures,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
