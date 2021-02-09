import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import I18n from '../../utils/i18n';
import Animation from '../animation/Animation';
import VimeoVideo from '../shared/VimeoVideo';
import theme from '../../styles/theme.style';
import Drill from '../animation/Drill';

const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

const FitnessDrillIllustration = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStep = props.drill.steps[activeIndex];
  const stepsCount = props.drill.steps.length;

  const carouselRef = useRef(null);
  const flatListRef = useRef(null);

  const [checkAnimation, setCheckAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.sequence([
      Animated.timing(checkAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.easeOutQuint,
        useNativeDriver: false,
      }),
      Animated.timing(checkAnimation, {
        toValue: 0,
        duration: 1,
        useNativeDriver: false,
      }),
    ]).start(() => {
      const newIndex = (activeIndex + 1) % (stepsCount + 1);
      setActiveIndex(newIndex);
      flatListRef.current?.scrollToIndex({ animated: true, index: newIndex, viewPosition: 0.5 });
    });
  };
  const checkColorInterpolation = checkAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.COLOR_SECONDARY, theme.MAIN_COLOR],
  });

  // back to 0 when drill changes
  useEffect(() => {
    setActiveIndex(0);
  }, [props.drill]);

  const renderFinish = () => {
    return (
      <View style={styles.containerFinish}>
        <Text style={styles.redoMessage}>{I18n.t('drills.fitnessDrillIllustration.redoMessage')}</Text>
        <TouchableOpacity style={styles.redoButton} onPress={() => setActiveIndex(0)}>
          <MaterialCommunityIcons name="restart" color={theme.COLOR_PRIMARY} size={50} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderStep = ({ index, item }) => {
    const isCurrent = index == activeIndex;

    const doneStyle = index < activeIndex ? styles.stepTitleDone : {};
    const currentStyle = isCurrent ? styles.stepTitleCurrent : {};
    const currentStep = isCurrent ? styles.stepCurrent : {};

    return (
      <TouchableOpacity style={[styles.step, currentStep]} onPress={() => setActiveIndex(index)}>
        <View style={styles.subWrapper}>
          <Text style={[styles.stepTitle, doneStyle, currentStyle]}>{item.repetition} </Text>
          <Text style={[styles.stepTitle, doneStyle, currentStyle]}>{item.title}</Text>
        </View>
        {isCurrent && (
          <TouchableOpacity style={styles.doneAnimation} onPress={() => handleAnimation()} testID="doneIcon">
            <AnimatedIcon name="check-circle" size={26} style={{ color: checkColorInterpolation }} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const renderVimeo = ({ vimeoId, sounds }) => {
    const isUniqueStep = stepsCount === 1;
    return (
      <>
        <View style={styles.allPage}>
          <View style={[styles.videoMultiple, isUniqueStep && styles.videoAlone]}>
            <VimeoVideo vimeoId={vimeoId} sounds={sounds} />
          </View>
          <ScrollView style={styles.scrollList}>
            {!isUniqueStep && (
              <FlatList
                nestedScrollEnabled
                ref={flatListRef}
                data={props.drill.steps}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderStep}
              />
            )}
          </ScrollView>
        </View>
      </>
    );
  };

  const renderAnimation = ({ animation, title, instruction }, index) => {
    const isFirstStep = index === 0;
    const isLastStep = index === stepsCount - 1;
    return (
      <>
        <View style={styles.line}>
          <View>
            {!isFirstStep && (
              <TouchableOpacity
                onPress={() => {
                  carouselRef.current.snapToPrev();
                }}
              >
                <MaterialCommunityIcons name="chevron-double-left" color={theme.COLOR_PRIMARY} size={26} />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.title}>{title}</Text>
          <View>
            {!isLastStep && (
              <TouchableOpacity
                onPress={() => {
                  carouselRef.current.snapToNext();
                }}
              >
                <MaterialCommunityIcons name="chevron-double-right" color={theme.COLOR_PRIMARY} size={26} />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.animation}>
          <Animation widthRatio={1} heightRatio={1 / 2} animation={new Drill(animation)} />
        </View>
        <Text style={styles.instruction}>{instruction}</Text>
      </>
    );
  };

  return (
    <View style={styles.container}>
      {activeIndex === props.drill.steps.length && renderFinish()}
      {currentStep?.animation && !currentStep?.vimeoId && renderAnimation(currentStep)}
      {currentStep?.vimeoId && renderVimeo(currentStep)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFinish: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  redoMessage: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  redoButton: {
    width: 80,
    height: 80,
  },
  videoAlone: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  step: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  titleWrapper: {
    flexShrink: 1,
  },
  stepTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
  },
  stepTitleCurrent: {
    fontWeight: 'bold',
  },
  stepTitleDone: {
    color: theme.COLOR_SECONDARY,
  },
  separator: {
    height: 15,
    borderRightWidth: 1,
    borderRightColor: theme.COLOR_PRIMARY_LIGHT,
  },
  buttonNext: {
    position: 'absolute',
    right: 0,
  },
  subWrapper: {
    flexGrow: 0,
    flexShrink: 0.7,
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: '10%',
  },
  instruction: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  animation: { flex: 9 },
  videoMultiple: {
    height: 250,
  },
  scrollList: {
    height: '100%',
  },
  allPage: {
    height: '100%',
  },
  stepCurrent: {
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
  },
});

export default FitnessDrillIllustration;
