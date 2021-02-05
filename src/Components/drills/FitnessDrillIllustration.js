import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import I18n from '../../utils/i18n';
import Animation from '../animation/Animation';
import VimeoVideo from '../shared/VimeoVideo';
import theme from '../../styles/theme.style';
import Drill from '../animation/Drill';

const FitnessDrillIllustration = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const opacityUnchecked = useRef(new Animated.Value(1)).current;
  const opacityChecked = opacityUnchecked.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  const currentStep = props.drill.steps[activeIndex];
  const stepsCount = props.drill.steps.length;

  const carouselRef = useRef(null);
  const flatListRef = useRef(null);

  const checkAnimation = () => {
    Animated.sequence([
      Animated.timing(opacityUnchecked, {
        toValue: 0,
        duration: 800,
        easing: Easing.easeOutQuint,
        useNativeDriver: false,
      }),
      Animated.timing(opacityUnchecked, {
        toValue: 1,
        duration: 10,
        useNativeDriver: false,
      }),
    ]).start(() => {
      const newIndex = (activeIndex + 1) % (stepsCount + 1);
      setActiveIndex(newIndex);
      flatListRef.current?.scrollToIndex({ animated: true, index: newIndex, viewPosition: 0.5 });
    });
  };

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

    return (
      <TouchableOpacity style={styles.step} onPress={() => setActiveIndex(index)}>
        <View style={styles.subWrapper}>
          <Text style={[styles.stepTitle, doneStyle, currentStyle]}>
            {item.repetition} {item.title}
          </Text>
        </View>
        {isCurrent && (
          <TouchableOpacity style={styles.doneAnimation} onPress={() => checkAnimation()} testID="doneIcon">
            <Animated.View style={{ opacity: opacityUnchecked }}>
              <MaterialCommunityIcons
                style={styles.buttonNext}
                name="check-circle-outline"
                color={theme.COLOR_SECONDARY}
                size={26}
              />
            </Animated.View>
            <Animated.View style={{ opacity: opacityChecked }}>
              <MaterialCommunityIcons
                style={styles.buttonNext}
                name="check-circle"
                color={theme.MAIN_COLOR}
                size={26}
              />
            </Animated.View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const renderVimeo = ({ vimeoId, sounds }) => {
    const isUniqueStep = stepsCount === 1;
    return (
      <>
        <View style={[{ height: 250 }, isUniqueStep && styles.videoAlone]}>
          <VimeoVideo vimeoId={vimeoId} sounds={sounds} shouldPlay />
        </View>
        {!isUniqueStep && (
          <FlatList
            nestedScrollEnabled
            ref={flatListRef}
            data={props.drill.steps}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderStep}
          />
        )}
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
  step: {
    flexDirection: 'row',
    padding: 20,
  },
  doneAnimation: {
    flex: 1,
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
    marginLeft: 20,
  },
  subWrapper: {
    flexGrow: 0,
    flexShrink: 0,
    alignItems: 'center',
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
  videoAlone: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
});

export default FitnessDrillIllustration;
