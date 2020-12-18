import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Platform, AsyncStorage, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Linking from 'expo-linking';

import { Navigation } from './src/Navigation';
import { store, persistor } from './src/Store/configureStore';
import FlashMessage from './src/utils/flashMessage';

if (Platform.OS !== 'web') enableScreens();

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = (props) => {
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

  const linking = {
    prefixes: [Linking.makeUrl('/')],
    config: {
      screens: {
        ImporterPage: 'customPlays/:uuid',
      },
    },
  };

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer
            initialState={initialState}
            linking={linking}
            fallback={<Text>Loading...</Text>}
            onStateChange={(state) => AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))}
          >
            <Navigation />
          </NavigationContainer>
          <FlashMessage position="bottom" />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
