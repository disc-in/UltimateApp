import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

class DrillPage extends React.Component {
  render() {
    const drill = this.props.route.params.drill;
    const { navigation } = this.props;

    return (
      <View style={styles.DrillPage}>
        <ImageBackground source={{ uri: drill.image }} style={styles.image}>
          <Text style={styles.title}>{drill.title}</Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.info}>{drill.durationInMinutes} minutes</Text>
            <Text style={styles.info}>{drill.nbPlayers} players</Text>
            <Text style={styles.info}>{drill.level} level</Text>
          </View>
          <TouchableOpacity
            style={styles.videoLink}
            onPress={() => navigation.navigate('DrillAnimationPage', { drill: drill })}
          >
            <Text style={styles.videoLinkText}>Video</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.description}>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionTitle}>Goals</Text>
            {drill.goals.map((goal, index) => (
              <Text key={index} style={styles.descriptionText}>
                {goal}
              </Text>
            ))}
          </View>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionTitle}>Equipment</Text>
            <Text style={styles.descriptionText}>{drill.equipment}</Text>
          </View>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{drill.description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  DrillPage: {
    backgroundColor: '#fff',
  },
  image: {
    height: 400,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    paddingTop: 100,
    paddingBottom: 100,
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  info: {
    color: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    borderRightWidth: 1,
    borderRightColor: '#fff',
  },
  videoLink: {
    margin: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoLinkText: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  description: {
    backgroundColor: '#fff',
  },
  descriptionItem: {
    marginBottom: 10,
  },
  descriptionTitle: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
  descriptionText: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15,
  },
});

export default DrillPage;
