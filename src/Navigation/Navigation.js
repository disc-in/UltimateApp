import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Components/HomePage';
import DrillListPage from '../Components/DrillListPage';
import DrillPage from '../Components/DrillPage';
import DrillAnimationPage from '../Components/DrillAnimationPage';
import TrainingListPage from '../Components/TrainingListPage';
import TrainingPage from '../Components/TrainingPage';

const Stack = createStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Ultimate Coaching app' }} />
      <Stack.Screen
        name="DrillListPage"
        component={DrillListPage}
        options={({ route }) => ({
          title: route.params.type.substr(0, 1).toUpperCase() + route.params.type.substr(1) + ' drills',
        })}
      />
      <Stack.Screen
        name="DrillPage"
        component={DrillPage}
        options={({ route }) => ({ title: route.params.drill.title })}
      />
      <Stack.Screen
        name="DrillAnimationPage"
        component={DrillAnimationPage}
        options={({ route }) => ({ title: route.params.drill.title })}
      />
      <Stack.Screen
        name="TrainingListPage"
        component={TrainingListPage}
        options={({ route }) => ({ title: 'Trainings' })}
      />
      <Stack.Screen
        name="TrainingPage"
        component={TrainingPage}
        options={({ route }) => ({ title: route.params.training.title })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
