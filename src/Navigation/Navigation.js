import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import HomePage from '../Components/HomePage';
import DrillListPage from '../Components/DrillListPage';
import DrillPage from '../Components/DrillPage';
import DrillPageMinimal from '../Components/DrillPageMinimal';
import FrisbeeFilters from '../Components/FrisbeeFilters';
import FitnessFilters from '../Components/FitnessFilters';
import TrainingPage from '../Components/TrainingPage';
import ProgramListPage from '../Components/ProgramListPage';

import AnimationEditorPage from '../Components/AnimationEditorPage';

import EssentialPage from '../Components/EssentialPage';
import DictionaryPage from '../Components/DictionaryPage';
import TacticsPage from '../Components/TacticsPage';
import VideoPage from '../Components/VideoPage';

import I18n from '../utils/i18n';
import { DrillTypes, EquipmentLabels } from '../Fixtures/config';

const Stack = createStackNavigator();

export const Navigation = () => (
  <Stack.Navigator screenOptions={{ headerBackTitleVisible: false, gestureEnabled: false }}>
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
      name="ProgramListPage"
      component={ProgramListPage}
      options={({ route }) => {
        if (route.params.type === DrillTypes.FRISBEE) return { title: I18n.t('navigation.programListPage.frisbee') };
        return {
          title:
            route.params.equipmentLabel === EquipmentLabels.NONE
              ? I18n.t('navigation.programListPage.noEquipment')
              : I18n.t('navigation.programListPage.fullEquipment'),
        };
      }}
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
      options={({ route }) => ({ title: route.params.training.title })}
    />
    <Stack.Screen
      name="AnimationEditorPage"
      component={AnimationEditorPage}
      options={() => ({
        title: I18n.t('navigation.animationEditorPage'),
        headerTitleContainerStyle: {
          ...Platform.select({
            ios: {
              left: -45,
            },
            default: {
              right: 100, // Matches the 2 icons width, and margin
            },
          }),
        },
      })}
    />
    <Stack.Screen
      name="DictionaryPage"
      component={DictionaryPage}
      options={{ title: I18n.t('navigation.dictionaryPage') }}
    />
    <Stack.Screen
      name="EssentialPage"
      component={EssentialPage}
      options={{ title: I18n.t('navigation.essentialPage') }}
    />
    <Stack.Screen name="TacticsPage" component={TacticsPage} options={{ title: I18n.t('navigation.tacticsPage') }} />
    <Stack.Screen
      name="VideoPage"
      component={VideoPage}
      options={({ route }) => ({ title: route.params.video.title })}
    />
  </Stack.Navigator>
);
