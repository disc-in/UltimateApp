import React, { useRef, useLayoutEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Dimensions,
  findNodeHandle,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { useHeaderHeight } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import I18n from '../utils/i18n';
import { createLink } from '../utils/firebase';
import { toggleFavorite } from '../Store/Actions/favoriteAction';
import { DrillTypes } from '../Fixtures/config';
import theme from '../styles/theme.style';

import ShareDrill from './drills/ShareDrill';
import Description from './drills/Description';
import FitnessDrillIllustration from './drills/FitnessDrillIllustration';
import FrisbeeDrillIllustration from './drills/FrisbeeDrillIllustration';
import StartButton from './drills/StartButton';
import customDrillsImage from '../../assets/customDrills.jpg';

export const DrillPage = (props) => {
  const { route, navigation } = props;

  // Create Component refs
  const drillScrollView = useRef(null);
  const descriptionRef = useRef(null);

  // Get Header Height
  const headerHeight = useHeaderHeight();
  const screenDimension = Dimensions.get('window');
  const sizeBackground = screenDimension.height - headerHeight;
  const imageStyles = { ...styles.image, height: sizeBackground };

  const drillId = route.params.id;
  const drill = props.drills.find((drill) => drill.id == drillId);

  const startFitness = () => {
    navigation.navigate('FitnessPage', { drill });
  };

  const onPressStartButton = () => {
    if (drill.type === DrillTypes.FITNESS) {
      startFitness();
    } else {
      descriptionRef.current.measureLayout(findNodeHandle(drillScrollView.current), (x, y) => {
        drillScrollView.current.scrollTo({ x: 0, y, animated: true });
      });
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: drill.title,
      headerRight: () => <ShareDrill drill={drill} />,
      headerTitleContainerStyle: {
        ...Platform.select({
          ios: {
            marginRight: 50,
          },
        }),
      },
    });
  });

  let favoriteIcon = 'heart-outline';
  if (props.favoriteDrills.findIndex((item) => item.id === props.route.params.id) !== -1) {
    favoriteIcon = 'heart';
  }
  const imageSource = drill.custom && drill.image === undefined ? customDrillsImage : { uri: drill.image };

  return (
    <ScrollView ref={drillScrollView} style={styles.drillPage}>
      <ImageBackground source={imageSource} style={imageStyles} imageStyle={styles.imageOpacity}>
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
        <View style={styles.startButton}>
          <StartButton onPress={onPressStartButton} text={I18n.t('drillPage.start')} />
          <View style={styles.favoriteButton}>
            <TouchableOpacity onPress={() => props.toggleFavorite(drill)} testID="favoriteButton">
              <Ionicons name={favoriteIcon} color={theme.COLOR_PRIMARY_LIGHT} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View ref={descriptionRef}>
        <Description drill={drill} />
      </View>
      <View style={styles.animation}>
        {drill.type === DrillTypes.FRISBEE && <FrisbeeDrillIllustration drill={drill} />}
        {drill.type === DrillTypes.FITNESS && <FitnessDrillIllustration drill={drill} startFitness={startFitness} />}
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
    paddingHorizontal: 5,
    flexBasis: '33%',
  },
  info: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  separator: {
    height: 15,
    borderRightWidth: 0.5,
    borderRightColor: theme.COLOR_PRIMARY_LIGHT,
  },
  animation: {
    flex: 1,
  },
  startButton: {
    width: '100%',
    alignItems: 'center',
  },
  favoriteButton: {
    position: 'absolute',
    right: '15%',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
  },
});

const mapStateToProps = (state) => {
  return {
    favoriteDrills: state.favoriteDrills,
    drills: [...state.drills, ...state.customDrills],
  };
};

const mapDispatchToProps = { toggleFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(DrillPage);
