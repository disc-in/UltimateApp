import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Animation from '../animation/Animation';
import VimeoVideo from '../shared/VimeoVideo';
import { IllustrationType } from '../../Fixtures/config';
import theme from '../../styles/theme.style';
import Drill from '../animation/Drill';

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
      <View style={styles.contentWrapper}>
        <View style={{ height: 250 }}>
          <WebView
            source={{
              uri: illustrationSource,
            }}
          />
        </View>
      </View>
    );
  };

  const displayVimeo = ({ illustrationSource, sounds }) => {
    return (
      <View style={styles.contentWrapper}>
        <View style={[{ height: 250 }, styles.videoAlone]}>
          <VimeoVideo vimeoId={illustrationSource} screenWidth={screenDimension.width} sounds={sounds} />
        </View>
      </View>
    );
  };

  const displayAnimation = ({ illustrationSource, instruction }) => {
    return (
      <>
        <View style={styles.contentWrapper}>
          <Animation widthRatio={1} heightRatio={1 / 2} animation={new Drill(illustrationSource)} />
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
          backgroundColor: theme.MAIN_COLOR,
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  instruction: {
    marginBottom: 10,
    marginHorizontal: 10,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_PRIMARY,
  },
  videoAlone: {
    flex: 1,
  },
  pagination: {
    paddingVertical: 10,
  },
  line: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_PRIMARY,
    textAlign: 'center',
  },
  contentWrapper: { minHeight: 375 },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default FrisbeeDrillIllustration;
