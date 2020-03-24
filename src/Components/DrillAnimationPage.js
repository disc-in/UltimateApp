import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Animation from './Animation';
import { WebView } from 'react-native-webview';

class DrillPage extends React.Component {
  render() {
    const drill = this.props.route.params.drill;

    return (
      <View style={styles.DrillAnimationPage}>
        {drill.animation ? (
          <Animation animation={drill.animation} />
        ) : drill.video ? (
          <WebView source={{ uri: 'https://www.youtube.com/embed/oN1bzPCKkGE' }} style={{ marginTop: 20 }} />
        ) : (
          <Text>No visual content for this drill</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  DrillAnimationPage: {
    height: '100%',
  },
});

export default DrillPage;
