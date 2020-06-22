import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';

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
import huddle from '../../assets/HomePage/huddle.png';
import { DrillTypes } from '../Fixtures/config';
import * as MailComposer from 'expo-mail-composer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('DrillListPage', { type: DrillTypes.FRISBEE })}
        style={styles.menuItem}
      >
        <ImageBackground source={frisbeeGlove} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>{I18n.t('homePage.drills')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate('ProgramListPage')} style={styles.menuItem}>
        <ImageBackground source={huddle} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>{I18n.t('homePage.programs')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate('AnimationEditorPage')} style={styles.menuItem}>
        <ImageBackground source={ourPlays} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>{I18n.t('homePage.editor')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
};

const Fitness = props => {
  return (
    <View style={styles.mainContainer}>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('DrillListPage', { type: DrillTypes.FITNESS })}
        style={styles.menuItem}
      >
        <ImageBackground source={leanfit} style={styles.image}>
          <View style={styles.wrapperCenter}>
            <Text style={styles.titleCenter}>{I18n.t('homePage.leanTitle')}</Text>
            <View style={styles.description}>
              <Text style={styles.textFitness}>{I18n.t('homePage.leanSubtitle')}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('DrillListPage', { type: DrillTypes.FITNESS })}
        style={styles.menuItem}
      >
        <ImageBackground source={bodyweight} style={styles.image}>
          <View style={styles.wrapperCenter}>
            <Text style={styles.titleCenter}>{I18n.t('homePage.bodyweightTitle')}</Text>
            <View style={styles.description}>
              <Text style={styles.textFitness}>{I18n.t('homePage.bodyweightSubtitle')}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('DrillListPage', { type: DrillTypes.FITNESS })}
        style={styles.menuItem}
      >
        <ImageBackground source={gymstrong} style={styles.image}>
          <View style={styles.wrapperCenter}>
            <Text style={styles.titleCenter}>{I18n.t('homePage.gymTitle')}</Text>
            <View style={styles.description}>
              <Text style={styles.textFitness}>{I18n.t('homePage.gymSubtitle')}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
};

const Theory = props => {
  return (
    <View style={styles.mainContainer}>
      <TouchableHighlight onPress={() => props.navigation.navigate('DictionaryPage')} style={styles.menuItem}>
        <ImageBackground source={dictionary} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>{I18n.t('homePage.dictionary')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('EssentialPage', { type: DrillTypes.FRISBEE })}
        style={styles.menuItem}
      >
        <ImageBackground source={essential} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>{I18n.t('homePage.essential')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate('TacticsPage')} style={styles.menuItem}>
        <ImageBackground source={simulator} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>{I18n.t('homePage.tactics')}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
};

export default HomePage = props => {
  const { navigation } = props;

  const feedback = () => {
    Alert.alert(
      I18n.t('feedback.contact.title'),
      I18n.t('feedback.contact.content'),
      [
        { text: I18n.t('feedback.contact.cancel'), style: 'cancel' },
        { text: I18n.t('feedback.contact.cta'), onPress: sendEmailAsync },
      ],
      { cancelable: true },
    );
  };

  const sendEmailAsync = () => {
    let result = MailComposer.composeAsync({
      recipients: ['ultimate.discin@gmail.com'],
      subject: 'Feedback Disc In',
      body: '',
    });

    alert(result.status);
  };

  const displayFeedbackButton = () => {
    return (
      <TouchableOpacity style={styles.feedbackContainer} onPress={() => feedback()} testID="feedbackButton">
        <MaterialCommunityIcons name="email-outline" color={theme.COLOR_PRIMARY} size={26} />
      </TouchableOpacity>
    );
  };

  useLayoutEffect(() =>
    navigation.setOptions({
      headerRight: () => displayFeedbackButton(),
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
        component={HomeScreen}
        options={{
          tabBarLabel: I18n.t('homePage.frisbeeTab'),
          tabBarIcon: ({ color }) => <Ionicons name="ios-disc" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Fitness"
        component={Fitness}
        options={{
          tabBarLabel: I18n.t('homePage.fitnessTab'),
          tabBarIcon: ({ color }) => <Ionicons name="ios-fitness" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Theory"
        component={Theory}
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
    paddingTop: 7,
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
  image: {
    height: '100%',
  },
  text: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: 28,
    fontWeight: 'bold',
  },
  titleCenter: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: 28,
  },
  textFitness: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_SMALL,
    textAlign: 'center',
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
  wrapperCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editorLink: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
    paddingRight: 10,
  },
  description: {
    alignItems: 'center',
    width: '70%',
  },
  bottomPage: {
    height: 105,
  },
  headerContainer: {
    marginRight: 20,
  },
  feedbackContainer: {
    marginRight: 20,
  },
});
