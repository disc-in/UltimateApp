// Navigation/Navigation.js

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator} from 'react-navigation-stack';
import React from 'react'
import HomePage from '../Components/HomePage'
import DrillListPage from '../Components/DrillListPage'
import DrillPage from '../Components/DrillPage'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DrillListPage" component={DrillListPage} options={{ title: 'Drill List' }} />
        <Stack.Screen name="DrillPage" component={DrillPage} options={{ title: 'Drill Page' }} />
      </Stack.Navigator>
    </NavigationContainer>
)
