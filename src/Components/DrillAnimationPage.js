import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animation from './Animation';
import { WebView } from 'react-native-webview';

class DrillPage extends Component {
  render() {
    const drill = this.props.route.params.drill;

    return (
      <View style={styles.drillAnimationPage}>
        {drill.animation ? (
          <Animation animation={drill.animation} />
        ) : drill.video ? (
          <WebView source={{ uri: drill.video }} style={styles.videoPresentation} />
        ) : (
          <Text>No visual content for this drill</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drillAnimationPage: {
    height: '100%',
  },
  videoPresentation: {
    marginTop: 20,
  },
});

export default DrillPage;
