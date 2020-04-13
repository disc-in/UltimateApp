import 'react-native-gesture-handler';
import React from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { Navigation } from './src/Navigation';
import Store from './src/Store/configureStore';

enableScreens();

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = props => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);

        setInitialState(state);
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <Provider store={Store}>
      <NavigationContainer
        initialState={initialState}
        onStateChange={state => AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))}
      >
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
