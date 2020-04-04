import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import theme from '../styles/theme.style';
import fitness from '../../assets/HomePage/fitness.png';
import frisbeeGlove from '../../assets/HomePage/frisbeeglove.png';
import huddle from '../../assets/HomePage/huddle.png';

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('DrillListPage', { type: 'technical' })}
          style={styles.menuItem}
        >
          <ImageBackground source={frisbeeGlove} style={styles.image}>
            <View style={styles.wrapper}>
              <Text style={styles.text}>Frisbee</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('DrillListPage', { type: 'fitness' })}
          style={styles.menuItem}
        >
          <ImageBackground source={fitness} style={styles.image}>
            <View style={styles.wrapper}>
              <Text style={styles.text}>Fitness</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('TrainingListPage')} style={styles.menuItem}>
          <ImageBackground source={huddle} style={styles.image}>
            <View style={styles.wrapper}>
              <Text style={styles.text}>Trainings</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingTop: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  menuItem: {
    height: '30%',
    marginBottom: 5,
  },
  image: {
    height: '100%',
  },
  text: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: 28,
    fontWeight: 'bold',
  },
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
});
