import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableHighlight } from 'react-native';

import theme from '../styles/theme.style';
import frisbeeGlove from '../../assets/HomePage/frisbeeglove.jpg';
import bodyweight from '../../assets/HomePage/bodyweight.jpg';
import gymstrong from '../../assets/HomePage/gymstrong.jpg';
import leanfit from '../../assets/HomePage/leanfit.jpg';
import simulator from '../../assets/HomePage/simulator.jpg';
import huddle from '../../assets/HomePage/huddle.png';
import { DrillTypes } from '../Fixtures';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = props => {
  return (
    <View style={styles.mainContainer}>
      <TouchableHighlight onPress={() => props.navigation.navigate('AnimationEditorPage')} style={styles.menuItem}>
        <ImageBackground source={simulator} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>Theory</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => props.navigation.navigate('DrillListPage', { type: DrillTypes.FRISBEE })}
        style={styles.menuItem}
      >
        <ImageBackground source={frisbeeGlove} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>Drills</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate('ProgramListPage')} style={styles.menuItem}>
        <ImageBackground source={huddle} style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.text}>Practices programs</Text>
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
            <Text style={styles.titleCenter}>LEAN FIT</Text>
            <View style={styles.description}>
              <Text style={styles.textFitness}>
                Get lean and fit over 6 weeks with a balanced plan that builds endurance
              </Text>
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
            <Text style={styles.titleCenter}>BODYWEIGHT ONLY</Text>
            <View style={styles.description}>
              <Text style={styles.textFitness}>
                Push your strenght and improve muscle tone over the season - all without weights
              </Text>
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
            <Text style={styles.titleCenter}>GYM STRONG</Text>
            <View style={styles.description}>
              <Text style={styles.textFitness}>
                Build full-body strenght with a focus on weight training over the season
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
};

export default function HomePage(props) {
  return (
    <Tab.Navigator
      initialRouteName="Frisbee"
      activeColor={theme.COLOR_PRIMARY}
      inactiveColor={theme.COLOR_SECONDARY}
      barStyle={{ backgroundColor: theme.BACKGROUND_COLOR }}
    >
      <Tab.Screen
        name="Frisbee"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Fitness"
        component={Fitness}
        options={{
          tabBarLabel: 'Fitness',
          tabBarIcon: ({ color }) => <Ionicons name="ios-fitness" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

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
  menuTeam: {
    flex: 1,
    marginBottom: 5,
  },
  imageTeam: {
    height: 180,
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
  teamDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    paddingTop: 30,
    paddingBottom: 15,
  },
  teamName: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
    paddingLeft: 10,
    flex: 2,
  },
  bottomPage: {
    height: 105,
  },
});
