import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { WebView } from 'react-native-webview';
import { Easing } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    setActiveIndex(activeIndex + 1);
  };

  const displayNextStep = () => {
    if (activeIndex + 1 === props.drill.steps.length) {
      return (
        <>
          <View style={styles.description}>
            <View style={styles.wrapperFinish}>
              <Text style={styles.fitnessNext}>{I18n.t('FitnessDrillIllustration.finish')}</Text>
            </View>
          </View>
          <View style={styles.lines} />
        </>
      );
    } else {
      return (
        <>
          <View style={styles.description}>
            <View style={styles.subWrapper}>
              <Text style={styles.fitnessNext}>{props.drill.steps[activeIndex + 1].repetition}</Text>
            </View>
            <View style={styles.subSubWrapper}>
              <Text style={styles.fitnessNext}>{props.drill.steps[activeIndex + 1].title}</Text>
            </View>
            <View style={styles.fakeWrapper} />
          </View>
          <View style={styles.lines} />
        </>
      );
    }
  };

  const displayFinish = () => {
    return (
      <>
        <View style={styles.containerFinish}>
          <Text style={styles.redoMessage}>{I18n.t('FitnessDrillIllustration.redoMessage')}</Text>
          <TouchableOpacity style={styles.redoButton} onPress={() => incrementStepIndex()}>
            <Image style={styles.redoImage} source={iconRedo} />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const displayYoutube = ({ illustrationSource, title, instruction }) => {
    return (
      <>
        <View style={{ height: 250 }}>
          <WebView
            source={{
              uri: illustrationSource,
            }}
          />
        </View>
        {props.drill.steps.length > 1 && (
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

  const displayVimeo = ({ illustrationSource, repetition, title, sounds }) => {
    const isUniqueStep = props.drill.steps.length === 1;
    return (
      <>
        <View style={[{ height: 250 }, isUniqueStep && styles.videoAlone]}>
          <VimeoVideo vimeoId={illustrationSource} screenWidth={screenDimension.width} sounds={sounds} />
        </View>
        {!isUniqueStep && (
          <>
            <View style={styles.description}>
              <View style={styles.subWrapper}>
                <Text style={styles.fitness}>{repetition}</Text>
              </View>
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

            <View style={styles.lines} />
            <View style={styles.containerAnimation}>
              <View style={styles.container}>{displayNextStep()}</View>
            </View>
          </>
        )}
      </>
    );
  };

  const checkSwitch = () => {
    if (activeIndex === props.drill.steps.length) {
      return displayFinish();
    } else if (!currentStep) {
      return <View />; // bad state, but let's not crash
    } else {
      switch (props.drill.steps[activeIndex].illustrationType) {
        case IllustrationType.ANIMATION:
          return displayAnimation(props.drill.steps[activeIndex]);
        case IllustrationType.YOUTUBE:
          return displayYoutube(props.drill.steps[activeIndex]);
        case IllustrationType.VIMEO:
          return displayVimeo(props.drill.steps[activeIndex]);
        default:
          return <Text>No visual content for this drill</Text>;
      }
    }
  };

  const displayAnimation = ({ illustrationSource, title, instruction }, index) => {
    const isFirstStep = index === 0;
    const isLastStep = index === props.drill.steps.length - 1;
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
    <GestureRecognizer style={styles.container} onSwipeLeft={checkAnimationFast} config={swipeConfig}>
      {checkSwitch()}
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
    fontWeight: 'bold',
  },
  fitnessNext: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: theme.FONT_SIZE_LARGE,
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
  fakeWrapper: {
    width: 70,
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
