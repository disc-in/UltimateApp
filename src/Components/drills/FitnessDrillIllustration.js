import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { WebView } from 'react-native-webview';
import { Easing } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import I18n from '../../utils/i18n';
import Animation from '../animation/Animation';
import VimeoVideo from '../VimeoVideo';
import { IllustrationType } from '../../Fixtures/config';
import theme from '../../styles/theme.style';
import { swipeConfig } from '../../styles/config';
import iconRedo from '../../../assets/redo_arrow.png';
import buttonValidation from '../../../assets/button_validation_ultra_light.png';
import buttonValidationGradient from '../../../assets/button_validation_gradient.png';

const screenDimension = Dimensions.get('window');

const FitnessDrillIllustration = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const opacityUnchecked = useRef(new Animated.Value(1)).current;
  const opacityChecked = opacityUnchecked.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  const currentStep = props.drill.steps[activeIndex];
  const stepsCount = props.drill.steps.length;

  const carouselRef = useRef(null);

  const checkAnimation = () => {
    Animated.sequence([
      Animated.timing(opacityUnchecked, {
        toValue: 0,
        duration: 800,
        easing: Easing.easeOutQuint,
      }),
      Animated.timing(opacityUnchecked, {
        toValue: 1,
        duration: 10,
      }),
    ]).start(() => incrementStepIndex());
  };

  const checkAnimationFast = () => {
    Animated.sequence([
      Animated.timing(opacityUnchecked, {
        toValue: 0,
        duration: 200,
        easing: Easing.easeOutQuint,
      }),
      Animated.timing(opacityUnchecked, {
        toValue: 1,
        duration: 10,
      }),
    ]).start(() => incrementStepIndex());
  };

  // back to 0 when drill changes
  useEffect(() => {
    setActiveIndex(0);
  }, [props.drill]);

  const incrementStepIndex = () => {
    setActiveIndex((activeIndex + 1) % (stepsCount + 1));
  };

  const renderFinish = () => {
    return (
      <>
        <View style={styles.containerFinish}>
          <Text style={styles.redoMessage}>{I18n.t('fitnessDrillIllustration.redoMessage')}</Text>
          <TouchableOpacity style={styles.redoButton} onPress={() => incrementStepIndex()}>
            <Image style={styles.redoImage} source={iconRedo} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderYoutube = ({ illustrationSource, title, instruction }) => {
    return (
      <>
        <View style={{ height: 250 }}>
          <WebView
            source={{
              uri: illustrationSource,
            }}
          />
        </View>
        {stepsCount > 1 && (
          <>
            <View style={styles.description}>
              <View style={styles.containerAnimation}>
                <View style={styles.descriptionAnimation}>
                  <View style={styles.subSubWrapper}>
                    <Text style={styles.fitness}>{title}</Text>
                  </View>
                  <TouchableOpacity style={styles.container} onPress={() => checkAnimation()}>
                    <Animated.View
                      style={[
                        {
                          opacity: opacityUnchecked,
                        },
                      ]}
                    >
                      <Image style={styles.buttonNext} source={buttonValidation} />
                    </Animated.View>
                    <Animated.View
                      style={[
                        {
                          opacity: opacityChecked,
                        },
                      ]}
                    >
                      <Image style={styles.buttonNext} source={buttonValidationGradient} />
                    </Animated.View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.lines} />
            <Text style={styles.instruction}>{instruction}</Text>
          </>
        )}
      </>
    );
  };

  const renderStep = ({ index, item }) => {
    const isCurrent = index == activeIndex;

    const doneStyle = index < activeIndex ? styles.fitnessDone : {};
    const currentStyle = isCurrent ? styles.fitnessCurrent : {};

    return (
      <>
        <View style={styles.description}>
          <View style={styles.subWrapper}>
            <Text style={[styles.fitness, doneStyle, currentStyle]}>
              {item.repetition} {item.title}
            </Text>
          </View>
          {isCurrent && (
            <TouchableOpacity style={styles.container} onPress={() => checkAnimation()}>
              <Animated.View
                style={[
                  {
                    opacity: opacityUnchecked,
                  },
                ]}
              >
                <Image style={styles.buttonNext} source={buttonValidation} />
              </Animated.View>
              <Animated.View
                style={[
                  {
                    opacity: opacityChecked,
                  },
                ]}
              >
                <Image style={styles.buttonNext} source={buttonValidationGradient} />
              </Animated.View>
            </TouchableOpacity>
          )}
        </View>
      </>
    );
  };

  const renderVimeo = ({ illustrationSource, repetition, title, sounds }) => {
    const isUniqueStep = stepsCount === 1;
    return (
      <>
        <View style={[{ height: 250 }, isUniqueStep && styles.videoAlone]}>
          <VimeoVideo vimeoId={illustrationSource} screenWidth={screenDimension.width} sounds={sounds} />
        </View>
        {!isUniqueStep && (
          <FlatList data={props.drill.steps} keyExtractor={item => item.id.toString()} renderItem={renderStep} />
        )}
      </>
    );
  };

  const renderAnimation = ({ illustrationSource, title, instruction }, index) => {
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
          <Animation widthRatio={1} heightRatio={props.minimal ? 2 / 5 : 1 / 2} animation={illustrationSource} />
        </View>
        <Text style={styles.instruction}>{instruction}</Text>
      </>
    );
  };

  return (
    <GestureRecognizer style={styles.container} onSwipeLeft={checkAnimation} config={swipeConfig}>
      {activeIndex === props.drill.steps.length && renderFinish()}
      {currentStep?.illustrationType === IllustrationType.ANIMATION && renderAnimation(currentStep)}
      {currentStep?.illustrationType === IllustrationType.YOUTUBE && renderYoutube(currentStep)}
      {currentStep?.illustrationType === IllustrationType.VIMEO && renderVimeo(currentStep)}
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFinish: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  redoMessage: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  containerAnimation: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  description: {
    flexDirection: 'row',
    paddingBottom: 2,
  },
  descriptionAnimation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageAnimation: {
    flex: 1,
  },
  fitness: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
  },
  fitnessCurrent: {
    fontWeight: 'bold',
  },
  fitnessDone: {
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
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON,
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR_BUTTON_ACTIVE,
    alignItems: 'center',
  },
  subWrapper: {
    flexGrow: 0,
    flexShrink: 0,
    alignItems: 'center',
  },
  subSubWrapper: {
    flex: 6,
  },
  lines: {
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
  },
  wrapperFinish: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishMessage: {
    marginTop: 150,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
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
  redoButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  redoImage: {
    width: 60,
    height: 60,
  },
  videoAlone: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  pagination: {
    paddingVertical: 15,
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
