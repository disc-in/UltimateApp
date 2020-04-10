import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { Navigation } from './src/Navigation';
import Store from './src/Store/configureStore';

enableScreens();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}
