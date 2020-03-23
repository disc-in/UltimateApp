import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

class DrillPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: props.route.params.drill.steps[0],
    };
  }

  render() {
    const drill = this.props.route.params.drill;
    const currentStep = this.state.currentStep;
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
        </ImageBackground>
        <TouchableOpacity
          style={styles.drill}
          onPress={() => navigation.navigate('DrillAnimationPage', { drill: drill })}
        >
          <Text style={styles.title_text}>Video</Text>
        </TouchableOpacity>

        <View style={styles.steps_list}>
          <FlatList
            data={drill.steps}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.step, currentStep == item ? styles.current_step : styles.other_step]}
                onPress={() => this.setState({ currentStep: item })}
              >
                <Text style={styles.title_text}>{item.title}</Text>
                <Text style={styles.description_text}>{item.subtitle}</Text>
              </TouchableOpacity>
            )}
            onEndReachedThreshold={0.5}
            onEndReached={() => {}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  DrillPage: {
    backgroundColor: '#fff',
    height: '100%',
  },
  image: {
    height: 400,
    padding: 20,
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

  steps_list: {
    flex: 4,
    backgroundColor: 'lightgrey',
  },
  current_step: {
    backgroundColor: 'white',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15,
  },
});

export default DrillPage;
