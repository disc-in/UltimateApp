import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableHighlight } from 'react-native';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import fitness from '../../assets/HomePage/fitness.png';
import frisbeeGlove from '../../assets/HomePage/frisbeeglove.png';
import huddle from '../../assets/HomePage/huddle.png';
import { DrillTypes } from '../Fixtures/config';
import Button from './shared/Button';

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('DrillListPage', { type: DrillTypes.FRISBEE })}
          style={styles.menuItem}
        >
          <ImageBackground source={frisbeeGlove} style={styles.image}>
            <View style={styles.wrapper}>
              <Text style={styles.text}>{I18n.t('homePage.frisbeeDrills')}</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('DrillListPage', { type: DrillTypes.FITNESS })}
          style={styles.menuItem}
        >
          <ImageBackground source={fitness} style={styles.image}>
            <View style={styles.wrapper}>
              <Text style={styles.text}>{I18n.t('homePage.fitnessDrills')}</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProgramListPage')} style={styles.menuItem}>
          <ImageBackground source={huddle} style={styles.image}>
            <View style={styles.wrapper}>
              <Text style={styles.text}>{I18n.t('homePage.programs')}</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
        <View style={styles.editorLink}>
          <Button
            onPress={() => this.props.navigation.navigate('AnimationEditorPage')}
            text={I18n.t('homePage.editor')}
            buttonLight="true"
          />
          <Button onPress={() => this.props.navigation.navigate('TheoryPage')} text="Theory" buttonLight="true" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingTop: 7,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  menuItem: {
    flexBasis: '25%',
    flexGrow: 1,
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
  editorLink: {
    alignItems: 'center',
    width: '100%',
    paddingBottom: 5,
  },
});
