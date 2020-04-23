import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

import Animation from './Animation';
import VimeoVideo from './VimeoVideo';
import GradientButton from './shared/GradientButton';
import { Sources } from '../Fixtures';
import theme from '../styles/theme.style';

const DrillAnimation = props => {
  const [currentStepIndex, setStepIndex] = useState(0);

  const incrementStepIndex = () => {
    setStepIndex((currentStepIndex + 1) % (props.drill.steps.length + 1));
  };

  const displayNextStep = () => {
    if (currentStepIndex + 1 === props.drill.steps.length) {
      return (
        <View>
          <View style={styles.description}>
            <View style={styles.wrapperFinish}>
              <Text style={styles.fitnessNext}>Finish</Text>
            </View>
          </View>
          <View style={styles.lines} />
        </View>
      );
    } else {
      return (
        <View>
          <View style={styles.description}>
            <View style={styles.subWrapper}>
              <Text style={styles.fitnessNext}>{props.drill.steps[currentStepIndex + 1].repetition}</Text>
            </View>
            <View style={styles.subSubWrapper}>
              <Text style={styles.fitnessNext}>{props.drill.steps[currentStepIndex + 1].title}</Text>
            </View>
            <View style={styles.fakeWrapper} />
          </View>
          <View style={styles.lines} />
        </View>
      );
    }
  };

  const checkSwitch = () => {
    if (props.drill.steps && currentStepIndex === props.drill.steps.length) {
      return displayFinish();
    } else {
      switch (props.drill.steps && props.drill.steps[currentStepIndex].source) {
        case Sources.ANIMATION:
          return displayAnimation(props.drill.steps[currentStepIndex]);
        case Sources.YOUTUBE:
          return displayYoutube(props.drill.steps[currentStepIndex]);
        case Sources.VIMEO:
          return displayVimeo(props.drill.steps[currentStepIndex]);
        default:
          return <Text>No visual content for this drill</Text>;
      }
    }
  };

  const displayFinish = () => {
    return (
      <View>
        <View style={styles.containerFinish}>
          <View>
            <GradientButton onPress={() => incrementStepIndex()} text="Do it again" />
          </View>
        </View>
      </View>
    );
  };

  const displayAnimation = ({ link, repetition, instruction }) => {
    return (
      <ScrollView>
        <View style={styles.pageAnimation}>
          <Animation animation={link} />
        </View>
        <View style={styles.containerAnimation}>
          <Text style={styles.fitness}>{repetition}</Text>
          <TouchableOpacity style={styles.buttonNext} onPress={() => incrementStepIndex()} />
        </View>
        <View style={styles.subSubWrapper}>
          <Text style={styles.instruction}>{instruction}</Text>
        </View>
      </ScrollView>
    );
  };

  const displayYoutube = ({ link }) => {
    return (
      <WebView
        source={{
          uri: link,
        }}
        style={styles.drillAnimationPage}
      />
    );
  };

  const displayVimeo = ({ link, repetition, title }) => {
    return (
      <View style={styles.drillAnimationPage}>
        <VimeoVideo vimeoId={link} screenWidth={screenDimension.width} />
        <View>
          <View style={styles.description}>
            <View style={styles.subWrapper}>
              <Text style={styles.fitness}>{repetition}</Text>
            </View>
            <View style={styles.subSubWrapper}>
              <Text style={styles.fitness}>{title}</Text>
            </View>
            <TouchableOpacity style={styles.buttonNext} onPress={() => incrementStepIndex()} />
          </View>
          <View style={styles.lines} />
        </View>
        <View style={styles.container}>{displayNextStep()}</View>
      </View>
    );
  };

  return <View style={styles.container}>{checkSwitch()}</View>;
};

const screenDimension = Dimensions.get('window');
const styles = StyleSheet.create({
  drillAnimationPage: {
    flex: 1,
    height: screenDimension.height - 80,
  },
  container: {
    flex: 1,
  },
  containerFinish: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: screenDimension.height - 80,
  },
  containerAnimation: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  description: {
    flexDirection: 'row',
  },
  pageAnimation: {
    flex: 1,
    height: screenDimension.height - 160,
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
    margin: 22.5,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON,
    borderWidth: 2,
    borderColor: theme.BORDER_COLOR_BUTTON_ACTIVE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subWrapper: {
    flex: 1,
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
});

export default DrillAnimation;
