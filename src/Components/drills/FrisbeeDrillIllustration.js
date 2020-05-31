import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Animation from '../animation/Animation';
import VimeoVideo from '../VimeoVideo';
import { IllustrationType } from '../../Fixtures/config';
import theme from '../../styles/theme.style';

const screenDimension = Dimensions.get('window');

const FrisbeeDrillIllustration = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStep = props.drill.steps[activeIndex];

  const carouselRef = useRef(null);

  // back to 0 when drill changes
  useEffect(() => {
    setActiveIndex(0);
  }, [props.drill]);

  const renderTitle = (title, index) => {
    const isFirstStep = index === 0;
    const isLastStep = index === props.drill.steps.length - 1;
    return (
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
    );
  };

  const displayYoutube = ({ illustrationSource }) => {
    return (
      <>
        <View style={styles.contentWrapper}>
          <View style={{ height: 250 }}>
            <WebView
              source={{
                uri: illustrationSource,
              }}
            />
          </View>
        </View>
      </>
    );
  };

  const displayVimeo = ({ illustrationSource, sounds }) => {
    return (
      <>
        <View style={styles.contentWrapper}>
          <View style={[{ height: 250 }, styles.videoAlone]}>
            <VimeoVideo vimeoId={illustrationSource} screenWidth={screenDimension.width} sounds={sounds} />
          </View>
        </View>
      </>
    );
  };

  const displayAnimation = ({ illustrationSource, instruction }) => {
    return (
      <>
        <View style={styles.contentWrapper}>
          <Animation widthRatio={1} heightRatio={props.minimal ? 2 / 5 : 1 / 2} animation={illustrationSource} />
        </View>
        <Text style={styles.instruction}>{instruction}</Text>
      </>
    );
  };

  const renderStep = ({ item, index }) => {
    return (
      <>
        {renderTitle(item.title, index)}
        <View style={styles.pagination}>{renderPagination()}</View>
        {item.illustrationType === IllustrationType.ANIMATION && displayAnimation(item)}
        {item.illustrationType === IllustrationType.YOUTUBE && displayYoutube(item)}
        {item.illustrationType === IllustrationType.VIMEO && displayVimeo(item)}
      </>
    );
  };

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={props.drill.steps.length}
        activeDotIndex={activeIndex}
        containerStyle={{
          backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
          paddingVertical: 0,
        }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 5,
          backgroundColor: theme.GRADIENT_FIRST_COLOR,
        }}
        inactiveDotStyle={{
          backgroundColor: theme.COLOR_SECONDARY,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots
        carouselRef={carouselRef}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Carousel
          layout="default"
          ref={carouselRef}
          data={props.drill.steps}
          sliderWidth={screenDimension.width}
          itemWidth={screenDimension.width}
          renderItem={renderStep}
          onSnapToItem={index => setActiveIndex(index)}
        />
      </SafeAreaView>
    </View>
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
  contentWrapper: { flex: 9 },
});

export default FrisbeeDrillIllustration;
