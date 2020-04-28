import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Components/HomePage';
import DrillListPage from '../Components/DrillListPage';
import DrillPage from '../Components/DrillPage';
import DrillPageMinimal from '../Components/DrillPageMinimal';
import TechnicalFilters from '../Components/TechnicalFilters';
import FitnessFilters from '../Components/FitnessFilters';
import TrainingListPage from '../Components/TrainingListPage';
import TrainingPage from '../Components/TrainingPage';

const Stack = createStackNavigator();

export const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Ultimate Coaching app' }} />
    <Stack.Screen
      name="DrillListPage"
      component={DrillListPage}
      options={({ route }) => ({
        title: route.params.type.substr(0, 1).toUpperCase() + route.params.type.substr(1) + ' drills',
      })}
    />
    <Stack.Screen name="TechnicalFilters" component={TechnicalFilters} options={{ title: 'Filters' }} />
    <Stack.Screen name="FitnessFilters" component={FitnessFilters} options={{ title: 'Filters' }} />
    <Stack.Screen
      name="DrillPage"
      component={DrillPage}
      options={({ route }) => ({ title: route.params.drill.title })}
    />
    <Stack.Screen name="TrainingListPage" component={TrainingListPage} options={{ title: 'Training sessions' }} />
    <Stack.Screen
      name="TrainingPage"
      component={TrainingPage}
      options={({ route }) => ({ title: route.params.training.title })}
    />
    <Stack.Screen
      name="DrillPageMinimal"
      component={DrillPageMinimal}
      options={({ route }) => ({
        title: route.params.training.title + ' Drill',
      })}
    />
  </Stack.Navigator>
);
