import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Animation from '../animation/Animation';
import VimeoVideo from '../shared/VimeoVideo';
import ToggleButton from '../shared/ToggleButton';
import theme from '../../styles/theme.style';
import Drill from '../animation/Drill';

const screenDimension = Dimensions.get('window');

export const IllustrationField = {
  ANIMATION: 'animation',
  VIMEO: 'vimeoId',
};

const FrisbeeDrillIllustration = (props) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [illustrationPreference, setIllustrationPreference] = useState(IllustrationField.ANIMATION);

  useEffect(() => {
    setActiveIndex(0);
  }, [props.drill]);

  const renderTitle = (title, index) => {
    const isFirstStep = index === 0;
    const isLastStep = index === props.drill.steps.length - 1;
    return (
      <View style={styles.titleContainer}>
        <View>
          {!isFirstStep && (
            <TouchableOpacity
              onPress={() => {
                carouselRef.current.snapToPrev();
              }}
            >
              <MaterialCommunityIcons name="arrow-left-bold" color={theme.COLOR_PRIMARY} size={26} />
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
              <MaterialCommunityIcons name="arrow-right-bold" color={theme.COLOR_PRIMARY} size={26} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const displayVimeo = ({ vimeoId, sounds }) => {
    return (
      <View style={styles.video}>
        <VimeoVideo vimeoId={vimeoId} sounds={sounds} />
      </View>
    );
  };

  const displayAnimation = ({ animation }) => {
    return (
      <View style={styles.animation}>
        <Animation widthRatio={1} heightRatio={1 / 2} animation={new Drill(animation)} />
      </View>
    );
  };

  const renderStep = ({ item, index }) => {
    let illustrationUniqueField;
    if (item.vimeoId && !item.animation) illustrationUniqueField = IllustrationField.VIMEO;
    if (!item.vimeoId && item.animation) illustrationUniqueField = IllustrationField.ANIMATION;

    return (
      <View>
        {renderTitle(item.title, index)}
        <View style={styles.pagination}>{renderPagination()}</View>
        <View>
          {(illustrationUniqueField || illustrationPreference) === IllustrationField.ANIMATION &&
            displayAnimation(item)}
          {(illustrationUniqueField || illustrationPreference) === IllustrationField.VIMEO && displayVimeo(item)}
          {!illustrationUniqueField && (
            <ToggleButton
              value={illustrationPreference}
              onValueChange={(value) => setIllustrationPreference(value)}
              possibleValues={Object.values(IllustrationField)}
              icons={['clipboard-outline', 'video']}
            />
          )}
          <Text style={styles.instruction}>{item.instruction}</Text>
        </View>
      </View>
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
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5,
          backgroundColor: theme.MAIN_COLOR,
        }}
        inactiveDotStyle={{
          backgroundColor: theme.COLOR_SECONDARY,
        }}
        inactiveDotScale={0.6}
        tappableDots
        carouselRef={carouselRef}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        onSnapToItem={(index) => setActiveIndex(index)}
        layout="default"
        ref={carouselRef}
        data={props.drill.steps}
        sliderWidth={screenDimension.width}
        itemWidth={screenDimension.width}
        renderItem={renderStep}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
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
  pagination: {
    paddingVertical: 10,
  },
  video: {
    height: 250,
  },
  animation: {
    marginTop: 10,
    minHeight: 375,
  },
  instruction: {
    margin: 10,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_PRIMARY,
  },
});

export default FrisbeeDrillIllustration;
