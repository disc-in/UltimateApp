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

import I18n from '../utils/i18n';

const Stack = createStackNavigator();

export const Navigation = () => (
  <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <Stack.Screen name="HomePage" component={HomePage} options={{ title: I18n.t('navigation.homePage') }} />
    <Stack.Screen
      name="DrillListPage"
      component={DrillListPage}
      options={({ route }) => ({
        title: I18n.t('navigation.drillListPage', {
          type: route.params.type.substr(0, 1).toUpperCase() + route.params.type.substr(1),
        }),
      })}
    />
    <Stack.Screen name="FrisbeeFilters" component={FrisbeeFilters} options={{ title: I18n.t('navigation.filters') }} />
    <Stack.Screen name="FitnessFilters" component={FitnessFilters} options={{ title: I18n.t('navigation.filters') }} />
    <Stack.Screen
      name="DrillPage"
      component={DrillPage}
      options={({ route }) => ({ title: route.params.drill.title })}
    />
    <Stack.Screen
      name="TrainingListPage"
      component={TrainingListPage}
      options={{ title: I18n.t('navigation.trainingListPage') }}
    />
    <Stack.Screen
      name="ProgramListPage"
      component={ProgramListPage}
      options={{ title: I18n.t('navigation.programListPage') }}
    />
    <Stack.Screen
      name="ProgramPage"
      component={ProgramPage}
      options={({ route }) => ({ title: route.params.program.title })}
    />
    <Stack.Screen
      name="TrainingPage"
      component={TrainingPage}
      options={({ route }) => ({
        title: route.params.program?.title || route.params.training.title,
      })}
    />
    <Stack.Screen
      name="DrillPageMinimal"
      component={DrillPageMinimal}
      options={({ route }) => ({
        title: I18n.t('navigation.drillPageMinimal', { training: route.params.training.title }),
      })}
    />
    <Stack.Screen
      name="AnimationEditorPage"
      component={AnimationEditorPage}
      options={() => ({ title: I18n.t('navigation.animationEditorPage') })}
    />
  </Stack.Navigator>
);
