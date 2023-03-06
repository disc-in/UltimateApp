import React from 'react';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { Platform, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';

import { Navigation } from './Navigation';
import { store, persistor } from './Store/configureStore';
import FlashMessage from './utils/flashMessage';
import theme from './styles/theme.style';

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'transparent', // Sets bottom nav selected icon background
    onSecondaryContainer: theme.COLOR_PRIMARY_LIGHT, /// Sets bottom nav selected icon
    onSurface: theme.COLOR_PRIMARY_LIGHT, // Sets bottom nav selected label
    onSurfaceVariant: theme.COLOR_SECONDARY, // Sets bottom nav unselecte label
    elevation: {
      ...DefaultTheme.colors.elevation,
      level2: theme.COLOR_PRIMARY, // Sets bottom nav background color
    },
  },
};

const App = (props) => {
  const linking = {
    prefixes: [Linking.makeUrl('/'), Constants.expoConfig.extra.firebaseUrlPrefix],
    config: {
      initialRouteName: 'HomePage',
      screens: {
        PlayImporterPage: 'customPlays/:uuid', // Legacy, keeping it because there are generated URL out there
        DrillImporterPage: 'custom/:source/:uuid', // source can be drill or play
        DrillPage: 'drills/:id',
      },
    },
  };

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={paperTheme}>
          <NavigationContainer
            linking={linking}
            fallback={<ActivityIndicator animating color={theme.MAIN_COLOR} style={{ top: '45%' }} size="large" />}
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
