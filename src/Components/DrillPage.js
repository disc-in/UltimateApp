import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ic_favorite_border from '../Images/ic_favorite_border.png';
import ic_favorite from '../Images/ic_favorite.png';
import theme from '../styles/theme.style';

class DrillPage extends React.Component {
  state = {
    drill: this.props.drill,
  };
  _displayFavoriteImage() {
    var sourceImage = ic_favorite_border;
    if (this.props.favoritesDrill.findIndex(item => item.id === this.props.route.params.drill.id) !== -1) {
      sourceImage = ic_favorite;
    }
    return <Image style={styles.favoriteImage} source={sourceImage} />;
  }

  render() {
    const drill = this.props.route.params.drill;
    const { navigation } = this.props;
    const {
      title,
      infoWrapper,
      DrillPage,
      separator,
      videoLinkText,
      favoriteContainer,
      image,
      imageOpacity,
      info,
      videoLink,
      description,
      descriptionItem,
      descriptionText,
      descriptionTitle,
    } = styles;

    return (
      <ScrollView style={DrillPage}>
        <ImageBackground source={{ uri: drill.image }} style={image} imageStyle={imageOpacity}>
          <Text style={title}>{drill.title}</Text>
          <View style={infoWrapper}>
            <Text style={info}>{drill.durationInMinutes} minutes</Text>
            <View style={separator} />
            <Text style={info}>{drill.nbPlayers} players</Text>
            <View style={separator} />
            <Text style={info}>{drill.level} level</Text>
          </View>
          <TouchableOpacity style={videoLink} onPress={() => navigation.navigate('DrillAnimationPage', { drill })}>
            <Text style={videoLinkText}>Video</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={separator} />
        <TouchableOpacity style={favoriteContainer} onPress={() => this.props.toggleFavorite(drill)}>
          {this._displayFavoriteImage()}
        </TouchableOpacity>

        <View style={description}>
          <View style={descriptionItem}>
            <Text style={descriptionTitle}>Description</Text>
            <Text style={descriptionText}>{drill.description}</Text>
          </View>
          <View style={descriptionItem}>
            <Text style={descriptionTitle}>Equipment</Text>
            <Text style={descriptionText}>{drill.equipment}</Text>
          </View>
          <View style={descriptionItem}>
            <Text style={descriptionTitle}>Goals</Text>
            {drill.goals.map((goal, index) => (
              <Text key={index} style={descriptionText}>
                {goal}
              </Text>
            ))}
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
  favoriteContainer: {
    alignItems: 'center',
  },
  favoriteImage: {
    width: 25.5,
    height: 30,
  },
});

const mapStateToProps = state => {
  return {
    favoritesDrill: state.favoritesDrill,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFavorite: drill => dispatch({ type: 'TOGGLE_FAVORITE', value: drill }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrillPage);
