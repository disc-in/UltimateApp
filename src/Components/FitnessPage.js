import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Platform, View, StyleSheet, Text, TouchableOpacity, FlatList, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import VimeoVideo from '../Components/shared/VimeoVideo';
import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import { createLink } from '../utils/firebase';

const FitnessPage = (props) => {
  const { route, navigation } = props;

  const drill = props.route.params.drill;

  const share = async (drill) => {
    const url = await createLink(
      'drills/' + drill.id,
      drill.title,
      I18n.t('drillPage.description', { description: drill.description.slice(0, 70) }),
    );

    const youtubeVideos = drill.steps.reduce((total, step) => {
      const stepvideo = step.youtube ? `${step.title} - ${step.youtube}\n` : '';
      return total + stepvideo;
    }, '');

    Share.share({
      title: I18n.t('drillPage.shareTitle', { drillTitle: drill.title }),
      message: I18n.t('drillPage.shareContent', { url, youtubeVideos, count: youtubeVideos.length }),
      url,
    }).catch((e) => console.log(e));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: drill.title,
      headerTintColor: theme.COLOR_PRIMARY_LIGHT,
      headerStyle: { backgroundColor: theme.COLOR_PRIMARY },
      headerRight: () => (
        <TouchableOpacity onPress={() => share(drill)} testID="shareButton">
          <Ionicons
            name={Platform.select({
              ios: 'ios-share-outline',
              default: 'share-social',
            })}
            style={styles.iconShare}
          />
        </TouchableOpacity>
      ),
    });
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const currentStep = drill.steps[activeIndex];

  const flatListRef = useRef(null);

  const setIndex = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    flatListRef.current?.scrollToIndex({ animated: true, index: activeIndex, viewPosition: 0.5 });
  }, [activeIndex]);

  const renderStep = ({ index, item }) => {
    const isCurrent = index == activeIndex;

    const doneStyle = index < activeIndex ? styles.stepTitleDone : {};
    const currentStyle = isCurrent ? styles.stepTitleCurrent : {};
    const currentStep = isCurrent ? styles.stepCurrent : {};

    return (
      <TouchableOpacity style={[styles.step, currentStep]} onPress={() => setIndex(index)}>
        <Text style={[styles.stepTitle, doneStyle, currentStyle]}>
          {item.repetition} {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const isUniqueStep = drill.steps.length === 1;
  return (
    <View style={styles.fitnessPage}>
      <View style={styles.video}>
        <VimeoVideo vimeoId={currentStep.vimeoId} sounds={currentStep.sounds} shouldPlay />
      </View>
      {!isUniqueStep && (
        <FlatList
          ref={flatListRef}
          data={drill.steps}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderStep}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fitnessPage: {
    height: '100%',
    backgroundColor: theme.COLOR_PRIMARY,
  },
  step: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: theme.COLOR_PRIMARY,
  },
  stepCurrent: {
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
  },
  stepTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY_LIGHT,
  },
  stepTitleCurrent: {
    fontWeight: 'bold',
    color: theme.COLOR_PRIMARY,
  },
  stepTitleDone: {
    color: theme.COLOR_SECONDARY,
  },
  video: {
    height: 250,
  },
  iconShare: {
    fontSize: 28,
    marginRight: 20,
    color: theme.COLOR_PRIMARY_LIGHT,
  },
});

export default FitnessPage;
