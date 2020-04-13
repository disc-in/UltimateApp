import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Animation from './Animation';
import { WebView } from 'react-native-webview';
import { Video } from 'expo-av';

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
        console.log(this.props.data);
        return this.displayVimeo();

      default:
        return <Text>No visual content for this drill</Text>;
    }
  }

  displayAnimation() {
    return <Animation animation={this.props.data} />;
  }

  displayYoutube() {
    return <WebView source={{ uri: this.props.data }} />;
  }

  displayVimeo() {
    return (
      <Video
        source={{
          uri: this.props.data,
        }}
        rate={1.0}
        volume={1.0}
        isMuted
        resizeMode="cover"
        shouldPlay
        isLooping
        useNativeControls
        style={{ width: screenDimension.width, height: 300 }}
      />
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
    height: screenDimension.height,
  },
});

export default DrillAnimationPage;
