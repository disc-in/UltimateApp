// Store/configureStore.js

import { createStore } from 'redux';
import fixtures from './Fixtures/index'

console.log('THERE', fixtures)

const noreducer = (x) => x

export default createStore(noreducer, fixtures)
