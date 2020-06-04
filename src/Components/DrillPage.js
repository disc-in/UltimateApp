import React, { useRef, useLayoutEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  findNodeHandle,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { useHeaderHeight } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import I18n from '../utils/i18n';
import GradientButton from './shared/GradientButton';
import { toggleFavorite } from '../Store/Actions/favoriteAction';

import theme from '../styles/theme.style';

import FitnessDrillIllustration from './drills/FitnessDrillIllustration';
import FrisbeeDrillIllustration from './drills/FrisbeeDrillIllustration';
import { DrillTypes } from '../Fixtures/config';

export const DrillPage = props => {
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

  const onPressStartButton = () => {
    firstDrill.current.measureLayout(findNodeHandle(drillScrollView.current), (x, y) => {
      drillScrollView.current.scrollTo({ x: 0, y, animated: true });
    });
  };

  const displayFavoriteButton = () => {
    let icon = 'heart-outline';
    if (props.favoriteDrills.findIndex(item => item.id === props.route.params.drill.id) !== -1) {
      icon = 'heart';
    }

    return (
      <TouchableOpacity
        style={styles.favoriteContainer}
        onPress={() => props.toggleFavorite(drill)}
        testID="favoriteButton"
      >
        <MaterialCommunityIcons name={icon} color={theme.COLOR_PRIMARY} size={26} />
      </TouchableOpacity>
    );
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
            <Text style={styles.infoDrill}>{drill.durationInMinutes}</Text>
            <Text style={styles.info}>{I18n.t('drillPage.minutes')}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoSubWrapper}>
            <Text style={styles.infoDrill}>{drill.minimalPlayersNumber}+</Text>
            <Text style={styles.info}>{I18n.t('drillPage.players')}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoSubWrapper}>
            <Text style={styles.infoDrill}>{I18n.t(`data.levels.${drill.level}`)}</Text>
            <Text style={styles.info}>{I18n.t('drillPage.level')}</Text>
          </View>
        </View>
        <GradientButton onPress={onPressStartButton} text={I18n.t('drillPage.start')} />
      </ImageBackground>
      <View style={styles.separator} />
      <View style={styles.description}>
        <View style={styles.descriptionItem}>
          <Text style={styles.descriptionTitle}>{I18n.t('drillPage.goal')}</Text>
          <Text style={styles.descriptionText}>{drill.goals ? drill.goals.join(' - ') : ''}</Text>
        </View>
      </View>
      <View style={styles.lines} />
      <View style={styles.description}>
        <View style={styles.descriptionItem}>
          <Text style={styles.descriptionTitle}>{I18n.t('drillPage.equipment')}</Text>
          <Text style={styles.descriptionText}>{drill.equipment}</Text>
        </View>
      </View>
      <View style={styles.lines} />
      <View style={styles.description}>
        <View style={styles.descriptionItem}>
          <Text style={styles.descriptionTitle}>{I18n.t('drillPage.description')}</Text>
          <Text style={styles.descriptionText}>{drill.description}</Text>
        </View>
      </View>
      <View ref={firstDrill} style={styles.animation}>
        {drill.type === DrillTypes.FRISBEE && <FrisbeeDrillIllustration drill={drill} />}
        {drill.type === DrillTypes.FITNESS && <FitnessDrillIllustration drill={drill} />}
      </View>
    </ScrollView>
  );
};

const screenDimension = Dimensions.get('window');
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
  info: {
    color: theme.COLOR_PRIMARY_LIGHT,
    paddingHorizontal: 30,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  separator: {
    height: 15,
    borderRightWidth: 0.5,
    borderRightColor: theme.COLOR_PRIMARY_LIGHT,
  },
  videoLink: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoLinkText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    padding: 20,
  },
  descriptionItem: {
    marginBottom: 15,
  },
  descriptionTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
  },
  descriptionText: {
    color: theme.COLOR_SECONDARY,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  infoDrill: {
    color: theme.COLOR_PRIMARY_LIGHT,
    paddingHorizontal: 30,
    fontSize: theme.FONT_SIZE_LARGE,
  },
  infoSubWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    flex: 1,
    height: screenDimension.height - 80,
  },
  author: {
    color: theme.COLOR_PRIMARY_LIGHT,
    paddingHorizontal: 30,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  lines: {
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 1,
  },
  favoriteContainer: {
    marginRight: 20,
  },
});

const mapStateToProps = state => {
  return {
    favoriteDrills: state.favoriteDrills,
  };
};

const mapDispatchToProps = { toggleFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(DrillPage);
