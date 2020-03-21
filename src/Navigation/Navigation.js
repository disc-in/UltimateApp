import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Components/HomePage';
import DrillListPage from '../Components/DrillListPage';
import DrillPage from '../Components/DrillPage';

const Stack = createStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen
        name="DrillListPage"
        component={DrillListPage}
        options={({ route }) => ({
          title: route.params.type.substr(0, 1).toUpperCase() + route.params.type.substr(1) + ' Drill List',
        })}
      />
      <Stack.Screen name="DrillPage" component={DrillPage} options={{ title: 'Drill Page' }} />
    </Stack.Navigator>
  </NavigationContainer>
);
