import React, { useState, useRef } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ToggleButton } from 'react-native-paper';

import Animation from '../animation/Animation';
import VimeoVideo from '../shared/VimeoVideo';
import theme from '../../styles/theme.style';
import Drill from '../animation/Drill';

const screenDimension = Dimensions.get('window');

export const IllustrationField = {
  ANIMATION: 'animation',
  VIMEO: 'vimeoId',
};

const FrisbeeDrillIllustration = (props) => {
  const carouselRef = useRef(null);
  const [illustrationPreference, setIllustrationPreference] = useState(IllustrationField.ANIMATION);

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

  const displayVimeo = ({ vimeoId, sounds, instruction }) => {
    return (
      <View style={styles.contentWrapper}>
        <View style={[{ height: 250 }, styles.videoAlone]}>
          <VimeoVideo vimeoId={vimeoId} sounds={sounds} />
        </View>
        <Text style={styles.instruction}>{instruction}</Text>
      </View>
    );
  };

  const displayAnimation = ({ animation, instruction }) => {
    return (
      <>
        <View style={styles.contentWrapper}>
          <Animation widthRatio={1} heightRatio={1 / 2} animation={new Drill(animation)} />
        </View>
        <Text style={styles.instruction}>{instruction}</Text>
      </>
    );
  };

  const renderStep = ({ item, index }) => {
    let illustrationField;
    if (item.vimeoId && !item.animation) illustrationField = IllustrationField.VIMEO;
    if (!item.vimeoId && item.animation) illustrationField = IllustrationField.ANIMATION;

    return (
      <View>
        {renderTitle(item.title, index)}
        <View style={styles.pagination}>{renderPagination(index)}</View>
        {!illustrationField && (
          <ToggleButton.Row
            style={{ justifyContent: 'center' }}
            value={illustrationPreference}
            onValueChange={(value) => setIllustrationPreference(value)}
          >
            <ToggleButton
              icon="clipboard-outline"
              value={IllustrationField.ANIMATION}
              disabled={illustrationPreference === IllustrationField.ANIMATION}
            />
            <ToggleButton
              icon="video"
              value={IllustrationField.VIMEO}
              disabled={illustrationPreference === IllustrationField.VIMEO}
            />
          </ToggleButton.Row>
        )}
        <ScrollView>
          {(illustrationField || illustrationPreference) === IllustrationField.ANIMATION && displayAnimation(item)}
          {(illustrationField || illustrationPreference) === IllustrationField.VIMEO && displayVimeo(item)}
        </ScrollView>
      </View>
    );
  };

  const renderPagination = (index) => {
    return (
      <Pagination
        dotsLength={props.drill.steps.length}
        activeDotIndex={index}
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
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  instruction: {
    margin: 10,
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
});

export default FrisbeeDrillIllustration;
