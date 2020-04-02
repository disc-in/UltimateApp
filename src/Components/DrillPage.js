import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ic_favorite_border from '../Images/ic_favorite_border.png';
import ic_favorite from '../Images/ic_favorite.png';


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
        <TouchableOpacity style={styles.favoriteContainer} onPress={() => this.props.toggleFavorite(drill)}>
          {this._displayFavoriteImage()}
        </TouchableOpacity>


        <View style={styles.description}>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{drill.description}</Text>
          </View>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionTitle}>Equipment</Text>
            <Text style={styles.descriptionText}>{drill.equipment}</Text>
          </View>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionTitle}>Goals</Text>
            {drill.goals.map((goal, index) => (
              <Text key={index} style={styles.descriptionText}>
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
    backgroundColor: '#fff',
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
    color: '#fff',
    fontSize: 48,
    textAlign: 'center',
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  info: {
    color: '#fff',
    paddingHorizontal: 30,
    fontSize: 18,
  },
  separator: {
    height: 10,
    borderRightWidth: 1,
    borderRightColor: '#fff',
  },
  videoLink: {
    margin: 40,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
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
    fontSize: 20,
    color: '#000000',
  },
  descriptionText: {
    color: '#909090',
    textAlign: 'center',
    fontSize: 16,
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrillPage);
