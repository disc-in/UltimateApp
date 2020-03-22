import { createStore } from 'redux';
import fixtures from '../Fixtures';

const noreducer = x => x;

export default createStore(noreducer, fixtures);
