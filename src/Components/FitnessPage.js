import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { View, StyleSheet, Platform, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import VimeoVideo from './shared/VimeoVideo';
import ShareDrill from './drills/ShareDrill';
import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import { createLink } from '../utils/firebase';

const FitnessPage = (props) => {
  const { route, navigation } = props;
  const drill = props.route.params.drill;

  const [activeIndex, setActiveIndex] = useState(0);
  const currentStep = drill.steps[activeIndex];
  const flatListRef = useRef(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: drill.title,
      headerRight: () => <ShareDrill drill={drill} light />,
      headerTintColor: theme.COLOR_PRIMARY_LIGHT,
      headerStyle: { backgroundColor: theme.COLOR_PRIMARY },
      headerTitleContainerStyle: {
        ...Platform.select({
          ios: {
            marginRight: 50,
          },
        }),
      },
    });
  });

  useEffect(() => {
    flatListRef.current?.scrollToIndex({ index: activeIndex, viewPosition: 0.5 });
  }, [activeIndex]);

  const renderStep = ({ index, item }) => {
    const isCurrent = index == activeIndex;

    const doneStyle = index < activeIndex ? styles.stepTitleDone : {};
    const currentStyle = isCurrent ? styles.stepTitleCurrent : {};
    const currentStep = isCurrent ? styles.stepCurrent : {};

    return (
      <TouchableOpacity style={[styles.step, currentStep]} onPress={() => setActiveIndex(index)}>
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
});

export default FitnessPage;
