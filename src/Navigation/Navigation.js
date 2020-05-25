import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../Components/HomePage';
import DrillListPage from '../Components/DrillListPage';
import DrillPage from '../Components/DrillPage';
import DrillPageMinimal from '../Components/DrillPageMinimal';
import FrisbeeFilters from '../Components/FrisbeeFilters';
import FitnessFilters from '../Components/FitnessFilters';
import TrainingListPage from '../Components/TrainingListPage';
import TrainingPage from '../Components/TrainingPage';
import ProgramListPage from '../Components/ProgramListPage';
import ProgramPage from '../Components/ProgramPage';
import AnimationEditorPage from '../Components/AnimationEditorPage';

const Stack = createStackNavigator();

export const Navigation = () => (
  <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Disc In' }} />
    <Stack.Screen
      name="DrillListPage"
      component={DrillListPage}
      options={({ route }) => ({
        title: route.params.type.substr(0, 1).toUpperCase() + route.params.type.substr(1) + ' drills',
      })}
    />
    <Stack.Screen name="FrisbeeFilters" component={FrisbeeFilters} options={{ title: 'Filters' }} />
    <Stack.Screen name="FitnessFilters" component={FitnessFilters} options={{ title: 'Filters' }} />
    <Stack.Screen
      name="DrillPage"
      component={DrillPage}
      options={({ route }) => ({ title: route.params.drill.title })}
    />
    <Stack.Screen name="TrainingListPage" component={TrainingListPage} options={{ title: 'Training sessions' }} />
    <Stack.Screen name="ProgramListPage" component={ProgramListPage} options={{ title: 'Choose a program' }} />
    <Stack.Screen
      name="ProgramPage"
      component={ProgramPage}
      options={({ route }) => ({ title: route.params.program.title })}
    />
    <Stack.Screen
      name="TrainingPage"
      component={TrainingPage}
      options={({ route }) => ({
        title: (route.params.program && route.params.program.title) || route.params.training.title,
      })}
    />
    <Stack.Screen
      name="DrillPageMinimal"
      component={DrillPageMinimal}
      options={({ route }) => ({
        title: route.params.training.title + ' Drill',
      })}
    />
    <Stack.Screen
      name="AnimationEditorPage"
      component={AnimationEditorPage}
      options={() => ({
        title: 'New Drill',
      })}
    />
  </Stack.Navigator>
);
