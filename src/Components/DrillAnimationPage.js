import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Animation from './Animation';
import { WebView } from 'react-native-webview';
import { Video } from 'expo-av';
import theme from '../styles/theme.style';
import undoArrow from '../Images/undo_arrow.png';

class DrillAnimationPage extends Component {
  constructor() {
    super();

    this.state = {
      TextInput_Data: '',
      count: 0,
    };
  }

  _incrementCount = () => {
    this.setState(prevState => ({ count: (prevState.count + 1) % (this.props.drill.steps.length + 1) }));
  };

  displayNextStep() {
    if (this.state.count + 1 === this.props.drill.steps.length) {
      return (
        <View style={styles.infoWrapper}>
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
        <View style={styles.infoWrapper}>
          <View style={styles.description}>
            <View style={styles.subWrapper}>
              <Text style={styles.fitnessNext}>{this.props.drill.steps[this.state.count + 1].count}</Text>
            </View>
            <View style={styles.subSubWrapper}>
              <Text style={styles.fitnessNext}>{this.props.drill.steps[this.state.count + 1].title}</Text>
            </View>
            <View style={styles.fakeWrapper} />
          </View>
          <View style={styles.lines} />
        </View>
      );
    }
  }

  checkSwitch() {
    if (this.state.count === this.props.drill.steps.length) {
      return <Text>Congratulation </Text>;
    } else {
      switch (this.props.drill.steps[this.state.count].source) {
        case 'animation':
          return this.displayAnimation();

        case 'youtube':
          return this.displayYoutube();

        case 'vimeo':
          return this.displayVimeo();

        default:
          return <Text>No visual content for this drill</Text>;
      }
    }
  }

  displayFinish() {
    <View>
      <Text>Congratulation tu es dans la méthode</Text>
    </View>;
  }

  displayAnimation() {
    return <Animation animation={this.props.drill.steps[this.state.count].link} />;
  }

  displayYoutube() {
    return (
      <WebView
        source={{
          uri: this.props.drill.steps[this.state.count].link,
        }}
      />
    );
  }

  displayVimeo() {
    return (
      <View style={styles.container}>
        <Video
          source={{
            uri: this.props.drill.steps[this.state.count].link,
          }}
          rate={1.0}
          volume={1.0}
          isMuted
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: screenDimension.width, height: 300 }}
        />
        <View style={styles.infoWrapper}>
          <View style={styles.description}>
            <View style={styles.subWrapper}>
              <Text style={styles.fitness}>{this.props.drill.steps[this.state.count].count}</Text>
            </View>
            <View style={styles.subSubWrapper}>
              <Text style={styles.fitness}>{this.props.drill.steps[this.state.count].title}</Text>
            </View>
            <TouchableOpacity style={styles.buttonNext} onPress={() => this._incrementCount()}></TouchableOpacity>
          </View>
          <View style={styles.lines} />
        </View>
        <View style={styles.container}>{this.displayNextStep()}</View>
      </View>
    );
  }

  render() {
    return <View style={styles.drillAnimationPage}>{this.checkSwitch()}</View>;
  }
}

const screenDimension = Dimensions.get('window');
const styles = StyleSheet.create({
  drillAnimationPage: {
    flex: 1,
    height: screenDimension.height - 80,
  },
  container: { flex: 1 },
  description: { flexDirection: 'row' },
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
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoWrapper: {},
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
});

export default DrillAnimationPage;
