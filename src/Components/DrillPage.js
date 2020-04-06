import React, { Component } from 'react';
import { Header } from 'react-navigation-stack';
import { ScrollView, StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import theme from '../styles/theme.style';
import { LinearGradient } from 'expo-linear-gradient';
import DrillAnimationPage from './DrillAnimationPage';

class DrillPage extends Component {
  _toggleFavorite() {
    const action = { type: 'TOGGLE_FAVORITE', value: this.state.drill };
    this.props.dispatch(action);
  }

  render() {
    const drill = this.props.route.params.drill;

    return (
      <ScrollView style={styles.DrillPage}>
        <ImageBackground source={{ uri: drill.image }} style={styles.image} imageStyle={styles.imageOpacity}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{drill.title}</Text>
            <Text style={styles.source}>{drill.source}</Text>
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.infoSubWrapper}>
              <Text style={styles.infoDrill}>{drill.durationInMinutes}</Text>
              <Text style={styles.info}> minutes</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.infoSubWrapper}>
              <Text style={styles.infoDrill}>{drill.nbPlayers}</Text>
              <Text style={styles.info}> players</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.infoSubWrapper}>
              <Text style={styles.infoDrill}>{drill.level}</Text>
              <Text style={styles.info}> level</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.videoLink}
            /*             onPress={() => navigation.navigate('DrillAnimationPage', { drill })}
             */
          >
            <LinearGradient
              style={styles.gradient}
              colors={['#08AEEA', '#2AF598']}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
            >
              <Text style={styles.videoLinkText}>Start</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.separator} />

        {/* <Button title="Favoris" onPress={() => this._toggleFavorite()} /> */}

        <View style={styles.description}>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionGoalsTitle}>Goals</Text>
            {drill.goals.map((goal, index) => (
              <Text key={index} style={styles.descriptionGoalsText}>
                {goal}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.lines} />
        <View style={styles.description}>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionTitle}>Equipment</Text>
            <Text style={styles.descriptionText}>{drill.equipment}</Text>
          </View>
        </View>
        <View style={styles.lines} />
        <View style={styles.description}>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{drill.description}</Text>
          </View>
        </View>
        <View style={styles.animation}>
          <DrillAnimationPage animation={drill.animation} video={drill.video} />
        </View>
      </ScrollView>
    );
  }
}

const screenDimension = Dimensions.get('window');

const sizeBackground = screenDimension.height - Header.HEIGHT;
const styles = StyleSheet.create({
  DrillPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  image: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(0,0,0)',
    height: sizeBackground,
  },
  imageOpacity: {
    opacity: 0.5,
  },
  title: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: 35,
    textAlign: 'center',
  },
  titleContainer: {
    height: (screenDimension.height * 2) / 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoWrapper: {
    height: (screenDimension.height * 1) / 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  info: {
    color: theme.COLOR_PRIMARY_LIGHT,
    paddingHorizontal: 30,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  separator: {
    height: 15,
    borderRightWidth: 1,
    borderRightColor: theme.COLOR_PRIMARY_LIGHT,
  },
  videoLink: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF933',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoLinkText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    padding: 20,
  },
  descriptionItem: {
    marginBottom: 15,
  },
  descriptionTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
  },
  descriptionText: {
    color: theme.COLOR_SECONDARY,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  infoDrill: {
    color: theme.COLOR_PRIMARY_LIGHT,
    paddingHorizontal: 30,
    fontSize: theme.FONT_SIZE_LARGE,
  },
  infoSubWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    flex: 1,
  },
  source: {
    color: theme.COLOR_PRIMARY_LIGHT,
    paddingHorizontal: 30,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  descriptionGoalsTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.COLOR_SECONDARY,
  },
  descriptionGoalsText: {
    color: theme.COLOR_PRIMARY,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
  },
  lines: {
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,
  },
});
const mapStateToProps = state => {
  return {
    favoritesDrill: state.favoritesDrill,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: action => {
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrillPage);
