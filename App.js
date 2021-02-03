import React from 'react';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { Platform, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Linking from 'expo-linking';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Navigation } from './src/Navigation';
import { store, persistor } from './src/Store/configureStore';
import FlashMessage from './src/utils/flashMessage';
import { EXPO_FIREBASE_URL_PREFIX } from '@env';

if (Platform.OS !== 'web') enableScreens();

const App = (props) => {
  const linking = {
    prefixes: [Linking.makeUrl('/'), EXPO_FIREBASE_URL_PREFIX],
    config: {
      initialRouteName: 'HomePage',
      screens: {
        ImporterPage: 'customPlays/:uuid',
        DrillPage: 'drills/:id',
      },
    },
  };

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <SafeAreaProvider>
            <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
              <Navigation />
            </NavigationContainer>
            <FlashMessage position="bottom" />
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
