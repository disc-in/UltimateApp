import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Animation from './Animation';
import { WebView } from 'react-native-webview';

class DrillAnimation extends Component {
  render() {
    return (
      <View style={styles.drillAnimation}>
        {this.props.animation ? (
		<Animation widthRatio={1} heightRatio={1/2} animation={this.props.animation} />
        ) : this.props.video ? (
          <WebView source={{ uri: this.props.video }} />
        ) : (
          <Text>No visual content for this drill</Text>
        )}
      </View>
    );
  }
}

const screenDimension = Dimensions.get('window');
const styles = StyleSheet.create({
  drillAnimation: {
    flex: 1,
    height: screenDimension.height,
  },
});

export default DrillAnimation;
