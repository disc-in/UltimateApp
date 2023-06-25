import React from 'react';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={paperTheme}>
          <NavigationContainer
            fallback={<ActivityIndicator animating color={theme.MAIN_COLOR} style={{ top: '45%' }} size="large" />}
          >
            <Navigation />
          </NavigationContainer>
          <FlashMessage position="bottom" duration={3000} />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
