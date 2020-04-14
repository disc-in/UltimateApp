import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Animation from './Animation';
import { WebView } from 'react-native-webview';
import { Video } from 'expo-av';
import theme from '../styles/theme.style';
import { LinearGradient } from 'expo-linear-gradient';

class DrillAnimationPage extends Component {
  constructor() {
    super();

    this.state = {
      TextInput_Data: '',
    };
  }

  checkSwitch() {
    switch (this.props.source) {
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

  displayAnimation() {
    return <Animation animation={this.props.link} />;
  }

  displayYoutube() {
    console.log(this.props.link);
    return (
      <WebView
        source={{
          uri: this.props.link,
        }}
      />
    );
  }

  displayVimeo() {
    return (
      <View style={styles.container}>
        <Video
          source={{
            uri: this.props.link,
          }}
          rate={1.0}
          volume={1.0}
          isMuted
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: screenDimension.width, height: 300 }}
        />
        <View style={styles.description}>
          <Text style={styles.fitness}>{this.props.count}</Text>
          <Text style={styles.fitness}>{this.props.title}</Text>
          <TouchableOpacity style={styles.nextVideo} onPress={''}></TouchableOpacity>
        </View>
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
  container: { flex: 6, justifyContent: 'center' },
  description: { flexDirection: 'row', justifyContent: 'space-around' },
  fitness: {
    margin: 20,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
  },
  separator: {
    height: 15,
    borderRightWidth: 1,
    borderRightColor: theme.COLOR_PRIMARY_LIGHT,
  },
  nextVideo: {
    margin: 22.5,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: theme.COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrillAnimationPage;
