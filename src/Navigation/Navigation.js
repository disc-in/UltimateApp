import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../Screens/HomePage';
import AboutPage from '../Screens/AboutPage';
import DrillListPage from '../Screens/DrillListPage';
import DrillPage from '../Screens/DrillPage';
import DrillPageMinimal from '../Screens/DrillPageMinimal';
import FitnessPage from '../Screens/FitnessPage';
import FrisbeeFilters from '../Screens/FrisbeeFilters';
import FitnessFilters from '../Screens/FitnessFilters';
import TrainingPage from '../Screens/TrainingPage';
import ProgramListPage from '../Screens/ProgramListPage';

import DrillEditorPage from '../Screens/DrillEditorPage';
import DrillEditorAnimationPage from '../Screens/DrillEditorAnimationPage';
import PlaybookPage from '../Screens/PlaybookPage';
import PlayEditorPage from '../Screens/PlayEditorPage';
import ImporterPage from '../Screens/ImporterPage';

import EssentialPage from '../Screens/EssentialPage';
import DictionaryPage from '../Screens/DictionaryPage';
import TacticsPage from '../Screens/TacticsPage';
import VideoPage from '../Screens/VideoPage';

import I18n from '../utils/i18n';
import { DrillTypes, EquipmentLabels } from '../Fixtures/config';

const Stack = createStackNavigator();

export const Navigation = () => (
  <Stack.Navigator screenOptions={{ headerBackTitleVisible: false, gestureEnabled: false }}>
    <Stack.Screen name="HomePage" component={HomePage} options={{ title: I18n.t('navigation.homePage') }} />
    <Stack.Screen name="AboutPage" component={AboutPage} options={{ title: I18n.t('navigation.aboutPage') }} />
    <Stack.Screen
      name="DrillListPage"
      component={DrillListPage}
      options={({ route }) => ({
        title: I18n.t('navigation.drillListPage', {
          type: route.params.type.substr(0, 1).toUpperCase() + route.params.type.substr(1),
        }),
      })}
    />
    <Stack.Screen
      name="DrillEditorPage"
      component={DrillEditorPage}
      options={{ title: I18n.t('navigation.drillEditorPage') }}
    />
    <Stack.Screen
      name="DrillEditorAnimationPage"
      component={DrillEditorAnimationPage}
      options={{ title: I18n.t('navigation.drillEditorAnimationPage') }}
    />
    <Stack.Screen name="FrisbeeFilters" component={FrisbeeFilters} options={{ title: I18n.t('navigation.filters') }} />
    <Stack.Screen name="FitnessFilters" component={FitnessFilters} options={{ title: I18n.t('navigation.filters') }} />
    <Stack.Screen name="DrillPage" component={DrillPage} options={{ title: I18n.t('navigation.drillPage') }} />
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
    <Stack.Screen name="DrillPageMinimal" component={DrillPageMinimal} />
    <Stack.Screen name="FitnessPage" component={FitnessPage} options={{ title: I18n.t('navigation.fitnessPage') }} />
    <Stack.Screen name="PlaybookPage" component={PlaybookPage} options={{ title: I18n.t('navigation.playbookPage') }} />
    <Stack.Screen
      name="PlayEditorPage"
      component={PlayEditorPage}
      options={{ title: I18n.t('navigation.playEditorPage') }}
    />
    <Stack.Screen
      name="DrillImporterPage"
      component={ImporterPage}
      options={{ title: I18n.t('navigation.drillImporterPage') }}
    />
    <Stack.Screen
      name="PlayImporterPage"
      component={ImporterPage}
      options={{ title: I18n.t('navigation.playImporterPage') }}
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
