import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import frisbeeGlove from '../../assets/HomePage/frisbeeglove.jpg';
import bodyweight from '../../assets/HomePage/bodyweight.jpg';
import gymstrong from '../../assets/HomePage/gymstrong.jpg';
import leanfit from '../../assets/HomePage/leanfit.jpg';
import simulator from '../../assets/HomePage/simulator.jpg';
import dictionary from '../../assets/HomePage/dictionary.jpg';
import ourPlays from '../../assets/HomePage/ourplays.jpg';
import essential from '../../assets/HomePage/essential.jpg';
import huddle from '../../assets/HomePage/huddle.jpg';
import FeedbackButton from './home/FeedbackButton';
import { DrillTypes, EquipmentLabels } from '../Fixtures/config';

const Tab = createMaterialBottomTabNavigator();

const FrisbeeTab = (props) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('DrillListPage', { type: DrillTypes.FRISBEE })}
        style={styles.menuItem}
      >
        <ImageBackground source={frisbeeGlove} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{I18n.t('homePage.drills')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('ProgramListPage', { type: DrillTypes.FRISBEE })}
        style={styles.menuItem}
      >
        <ImageBackground source={huddle} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{I18n.t('homePage.programs')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <View style={[styles.menuItem, styles.menuItemWrapper]}>
        <TouchableHighlight
          onPress={() => props.navigation.navigate('DrillEditorPage')}
          style={[styles.innerMenuItem, styles.firstInnerMenuItem]}
        >
          <ImageBackground source={ourPlays} style={styles.image}>
            <View style={styles.wrapper}>
              <Text style={styles.title}>{I18n.t('homePage.drillEditor')}</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => props.navigation.navigate('PlayEditorPage')} style={styles.innerMenuItem}>
          <ImageBackground source={ourPlays} style={styles.image}>
            <View style={styles.wrapper}>
              <Text style={styles.title}>{I18n.t('homePage.playEditor')}</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const FitnessTab = (props) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('DrillListPage', { type: DrillTypes.FITNESS })}
        style={styles.menuItem}
      >
        <ImageBackground source={leanfit} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{I18n.t('homePage.leanTitle')}</Text>
            <Text style={styles.subtitle}>{I18n.t('homePage.leanSubtitle')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() =>
          props.navigation.navigate('ProgramListPage', {
            type: DrillTypes.FITNESS,
            equipmentLabel: EquipmentLabels.NONE,
          })
        }
        style={styles.menuItem}
      >
        <ImageBackground source={bodyweight} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{I18n.t('homePage.bodyweightTitle')}</Text>
            <Text style={styles.subtitle}>{I18n.t('homePage.bodyweightSubtitle')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() =>
          props.navigation.navigate('ProgramListPage', {
            type: DrillTypes.FITNESS,
            equipmentLabel: EquipmentLabels.FULL,
          })
        }
        style={styles.menuItem}
      >
        <ImageBackground source={gymstrong} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{I18n.t('homePage.gymTitle')}</Text>
            <Text style={styles.subtitle}>{I18n.t('homePage.gymSubtitle')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
};

const TheoryTab = (props) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableHighlight onPress={() => props.navigation.navigate('DictionaryPage')} style={styles.menuItem}>
        <ImageBackground source={dictionary} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{I18n.t('homePage.dictionary')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('EssentialPage', { type: DrillTypes.FRISBEE })}
        style={styles.menuItem}
      >
        <ImageBackground source={essential} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{I18n.t('homePage.essential')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate('TacticsPage')} style={styles.menuItem}>
        <ImageBackground source={simulator} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>{I18n.t('homePage.tactics')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
};

export default HomePage = (props) => {
  const { navigation } = props;

  useLayoutEffect(() =>
    navigation.setOptions({
      headerRight: () => <FeedbackButton />,
    }),
  );

  return (
    <Tab.Navigator
      initialRouteName="Frisbee"
      activeColor={theme.COLOR_PRIMARY_LIGHT}
      inactiveColor={theme.COLOR_SECONDARY}
      barStyle={{ backgroundColor: theme.COLOR_PRIMARY }}
    >
      <Tab.Screen
        name="Frisbee"
        component={FrisbeeTab}
        options={{
          tabBarLabel: I18n.t('homePage.frisbeeTab'),
          tabBarIcon: ({ color }) => <Ionicons name="ios-disc" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Fitness"
        component={FitnessTab}
        options={{
          tabBarLabel: I18n.t('homePage.fitnessTab'),
          tabBarIcon: ({ color }) => <Ionicons name="ios-fitness" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Theory"
        component={TheoryTab}
        options={{
          tabBarLabel: I18n.t('homePage.theoryTab'),
          tabBarIcon: ({ color }) => <Ionicons name="md-clipboard" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingTop: 5,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  imageContainer: {
    paddingTop: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  menuItem: {
    flexBasis: '33%',
    marginBottom: 2,
  },
  menuItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerMenuItem: {
    flexGrow: 1,
  },
  firstInnerMenuItem: {
    marginRight: 2,
  },
  image: {
    height: '100%',
  },
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  title: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
