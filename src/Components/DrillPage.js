//@refresh reset
import React, { useRef, useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, ImageBackground, Dimensions, findNodeHandle, LogBox } from 'react-native';
import { connect } from 'react-redux';
import { useHeaderHeight } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import I18n from '../utils/i18n';
import { toggleFavorite } from '../Store/Actions/favoriteAction';
import { DrillTypes } from '../Fixtures/config';
import theme from '../styles/theme.style';

import Description from './drills/Description';
import FitnessDrillIllustration from './drills/FitnessDrillIllustration';
import FrisbeeDrillIllustration from './drills/FrisbeeDrillIllustration';
import StartButton from './drills/StartButton';
import HeaderButton from './shared/HeaderButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as firebase from 'firebase';
import firebaseConfig from '../../firebaseKeys';

export const DrillPage = (props) => {
  const { route, navigation } = props;

  // Create Component refs
  const drillScrollView = useRef(null);
  const firstDrill = useRef(null);

  // Get Header Height
  const headerHeight = useHeaderHeight();
  const screenDimension = Dimensions.get('window');
  const sizeBackground = screenDimension.height - headerHeight;
  const imageStyles = { ...styles.image, height: sizeBackground };

  const drill = route.params.drill;
  const drillID = drill.id;

  //Initialize Firebase
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  LogBox.ignoreLogs(['Setting a timer']);

  const onPressStartButton = () => {
    firstDrill.current.measureLayout(findNodeHandle(drillScrollView.current), (x, y) => {
      drillScrollView.current.scrollTo({ x: 0, y, animated: true });
    });
  };

  const uploadAndShare = (drill, drillID) => {
    firebase
      .database()
      .ref('drills/' + drillID)
      .set({
        savedDrill: drill,
      });
  };

  const inDB = () => {
    var databaseRef = firebase.database().ref('drills/' + drillID);
    databaseRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  };

  const displayFavoriteButton = () => {
    let icon = 'heart-outline';
    if (props.favoriteDrills.findIndex((item) => item.id === props.route.params.drill.id) !== -1) {
      icon = 'heart';
    }

    return <HeaderButton icon={icon} onPress={() => props.toggleFavorite(drill)} testID="favoriteButton" />;
  };

  useLayoutEffect(() =>
    navigation.setOptions({
      headerRight: () => displayFavoriteButton(),
    }),
  );

  return (
    <ScrollView ref={drillScrollView} style={styles.drillPage}>
      <ImageBackground source={{ uri: drill.image }} style={imageStyles} imageStyle={styles.imageOpacity}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{drill.title}</Text>
          <Text style={styles.author}>{drill.author}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoSubWrapper}>
            <Text style={styles.info}>{drill.durationInMinutes}</Text>
            <Text style={styles.info}>{I18n.t('drillPage.minutes')}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoSubWrapper}>
            <Text style={styles.info}>{drill.minimalPlayersNumber}+</Text>
            <Text style={styles.info}>{I18n.t('drillPage.players')}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoSubWrapper}>
            <Text style={styles.info}>{I18n.t(`data.levels.${drill.level}`)}</Text>
            <Text style={styles.info}>{I18n.t('drillPage.level')}</Text>
          </View>
        </View>
        <View style={styles.pink}>
          <View style={styles.startButton}>
            <StartButton onPress={onPressStartButton} text={I18n.t('drillPage.start')} />
            <View style={styles.share}>
              <TouchableOpacity
                onPress={() => {
                  uploadAndShare(drill, drillID);
                }}
              >
                <Ionicons name="md-share" color={theme.COLOR_PRIMARY_LIGHT} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.db}>
        <TouchableOpacity
          onPress={() => {
            inDB();
          }}
        >
          <Text> What is in the DB !! </Text>
        </TouchableOpacity>
      </View>
      <View ref={firstDrill}>
        <Description drill={drill} />
      </View>
      <View style={styles.animation}>
        {drill.type === DrillTypes.FRISBEE && <FrisbeeDrillIllustration drill={drill} />}
        {drill.type === DrillTypes.FITNESS && <FitnessDrillIllustration drill={drill} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  drillPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  image: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(0,0,0)',
    height: Dimensions.get('window').height, // will be overwritten
  },
  imageOpacity: {
    opacity: 0.5,
  },
  title: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: 35,
    textAlign: 'center',
  },
  author: {
    color: theme.COLOR_PRIMARY_LIGHT,
    paddingHorizontal: 30,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  titleContainer: {
    height: (Dimensions.get('window').height * 2) / 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoWrapper: {
    height: (Dimensions.get('window').height * 1) / 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  infoSubWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexBasis: '33%',
  },
  info: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  separator: {
    height: 15,
    borderRightWidth: 0.5,
    borderRightColor: theme.COLOR_PRIMARY_LIGHT,
  },
  animation: {
    flex: 1,
  },
  db: {
    height: 50,
    width: 200,
    backgroundColor: 'gray',
    alignContent: 'center',
    justifyContent: 'center',
  },
  share: {
    position: 'absolute',
    right: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
  },
  pink: {
    width: Dimensions.get('window').width,
  },
  startButton: {
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    favoriteDrills: state.favoriteDrills,
  };
};

const mapDispatchToProps = { toggleFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(DrillPage);
