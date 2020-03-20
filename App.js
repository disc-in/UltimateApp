// App.js

import 'react-native-gesture-handler';

import React from 'react';
import { Navigation } from './src/Navigation';
import { Provider } from 'react-redux';
import Store from './src/Store/configureStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}
