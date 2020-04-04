import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomePage from '../Components/HomePage';
import DrillListPage from '../Components/DrillListPage';
import DrillPage from '../Components/DrillPage';
import DrillAnimationPage from '../Components/DrillAnimationPage';
import Filters from '../Components/Filters';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainNavigation = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="HomePage" component={HomePage} options={{ title: 'Ultimate Coaching app' }} />
    <MainStack.Screen
      name="DrillListPage"
      component={DrillListPage}
      options={({ route }) => ({
        title: route.params.type.substr(0, 1).toUpperCase() + route.params.type.substr(1) + ' drills',
      })}
    />
    <MainStack.Screen
      name="DrillPage"
      component={DrillPage}
      options={({ route }) => ({ title: route.params.drill.title })}
    />
    <MainStack.Screen
      name="DrillAnimationPage"
      component={DrillAnimationPage}
      options={({ route }) => ({ title: route.params.drill.title })}
    />
  </MainStack.Navigator>
);

export const Navigation = () => (
  <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
      mode="modal"
    >
      <RootStack.Screen name="Main" component={MainNavigation} options={{ headerShown: false }} />
      <RootStack.Screen name="Filters" component={Filters} />
    </RootStack.Navigator>
  </NavigationContainer>
);
