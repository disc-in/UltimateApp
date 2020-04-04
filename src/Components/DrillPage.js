import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import theme from '../styles/theme.style';

export class DrillPage extends Component {
  render() {
    const drill = this.props.route.params.drill;
    const { navigation } = this.props;

    return (
      <ScrollView style={styles.DrillPage}>
        <ImageBackground source={{ uri: drill.image }} style={styles.image} imageStyle={styles.imageOpacity}>
          <Text style={styles.title}>{drill.title}</Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.info}>{drill.durationInMinutes} minutes</Text>
            <View style={styles.separator} />
            <Text style={styles.info}>{drill.nbPlayers} players</Text>
            <View style={styles.separator} />
            <Text style={styles.info}>{drill.level} level</Text>
          </View>
          <TouchableOpacity
            style={styles.videoLink}
            onPress={() => navigation.navigate('DrillAnimationPage', { drill })}
          >
            <Text style={styles.videoLinkText}>Video</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.separator} />

        <Button title="Favoris" onPress={() => this._toggleFavorite()} />

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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  DrillPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  image: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgb(0,0,0)',
  },
  imageOpacity: {
    opacity: 0.5,
  },
  title: {
    marginTop: 100,
    marginBottom: 100,
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: 48,
    textAlign: 'center',
  },
  infoWrapper: {
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
    height: 10,
    borderRightWidth: 1,
    borderRightColor: theme.COLOR_PRIMARY_LIGHT,
  },
  videoLink: {
    margin: 40,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoLinkText: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  description: {
    padding: 20,
  },
  descriptionItem: {
    marginBottom: 30,
  },
  descriptionTitle: {
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
  },
  descriptionText: {
    color: theme.COLOR_SECONDARY,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
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
