import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

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
import adultPrograms from '../../assets/HomePage/adultPrograms.png';
import juniorPrograms from '../../assets/HomePage/juniorPrograms.png';
import HeaderButton from '../Components/shared/HeaderButton';
import { AgeCategory, DrillTypes, EquipmentLabels } from '../Fixtures/config';

const Tab = createMaterialBottomTabNavigator();

const Frisbee = (props) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('DrillListPage', { type: DrillTypes.FRISBEE })}
        style={styles.menuItem}
      >
        <ImageBackground source={frisbeeGlove} style={styles.image}>
          <View style={[styles.wrapper, styles.iconWrapper]}>
            <Text style={styles.title}>{I18n.t('homePage.drills')}</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('DrillImporterPage', { source: 'customDrills' })}
            >
              <MaterialCommunityIcons name="import" style={styles.importIcon} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableHighlight>

      <View style={styles.containerGrow}>
        <TouchableHighlight
          onPress={() =>
            props.navigation.navigate('ProgramListPage', { type: DrillTypes.FRISBEE, ageCategory: AgeCategory.JUNIOR })
          }
          style={styles.menuItemSplitLeft}
        >
          <ImageBackground source={juniorPrograms} style={styles.image}>
            <View style={styles.wrapper}>
              <Text style={styles.title}>{I18n.t('homePage.junior')}</Text>
              <Text style={styles.subtitle}>{I18n.t('homePage.programs')}</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            props.navigation.navigate('ProgramListPage', { type: DrillTypes.FRISBEE, ageCategory: AgeCategory.SENIOR })
          }
          style={styles.menuItemSplitRight}
        >
          <ImageBackground source={adultPrograms} style={styles.image}>
            <View style={styles.wrapperRight}>
              <Text style={styles.titleRight}>{I18n.t('homePage.adult')}</Text>
              <Text style={styles.subtitleRight}>{I18n.t('homePage.programs')}</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </View>

      <TouchableHighlight onPress={() => props.navigation.navigate('PlaybookPage')} style={styles.menuItem}>
        <ImageBackground source={ourPlays} style={styles.image}>
          <View style={[styles.wrapper, styles.iconWrapper]}>
            <Text style={styles.title}>{I18n.t('homePage.playbook')}</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('PlayImporterPage', { source: 'customPlays' })}>
              <MaterialCommunityIcons name="import" style={styles.importIcon} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
};

const Fitness = (props) => {
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

const Theory = (props) => {
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
      headerRight: () => (
        <HeaderButton
          icon="information-outline"
          onPress={() => props.navigation.navigate('AboutPage')}
          testID="aboutButton"
        />
      ),
    }),
  );

  return (
    <Tab.Navigator initialRouteName="Frisbee">
      <Tab.Screen
        name="Frisbee"
        component={Frisbee}
        options={{
          tabBarLabel: I18n.t('homePage.frisbeeTab'),
          tabBarIcon: ({ color }) => <Ionicons name="disc" color={color} size={22} />,
        }}
      />
      <Tab.Screen
        name="Fitness"
        component={Fitness}
        options={{
          tabBarLabel: I18n.t('homePage.fitnessTab'),
          tabBarIcon: ({ color }) => <Ionicons name="fitness" color={color} size={22} />,
        }}
      />
      <Tab.Screen
        name="Theory"
        component={Theory}
        options={{
          tabBarLabel: I18n.t('homePage.theoryTab'),
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bookshelf" color={color} size={22} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  imageContainer: {
    paddingTop: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  menuItem: {
    flexBasis: '25%',
    flexGrow: 1,
    marginBottom: 5,
  },
  menuItemSplitLeft: {
    flexBasis: '25%',
    flexGrow: 1,
    marginBottom: 5,
    marginRight: 5,
    width: '50%',
  },
  menuItemSplitRight: {
    flexBasis: '25%',
    flexGrow: 1,
    marginBottom: 5,
    width: '50%',
  },
  containerGrow: {
    flexBasis: '25%',
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    height: '100%',
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
  wrapperRight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleRight: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  subtitleRight: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_MEDIUM,
    textAlign: 'right',
  },
  importIcon: {
    fontSize: 32,
    padding: 20,
    color: theme.COLOR_PRIMARY_LIGHT,
  },
});
