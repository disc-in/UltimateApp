import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class DrillPage extends React.Component {
  _toggleFavorite() {
    console.log('TOGGLE FAVORITE function ', this.state.drill);
    const action = { type: 'TOGGLE_FAVORITE', value: this.state.drill };
    this.props.dispatch(action);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate : ');
    console.log(this.props.favoritesDrill);
  }

  _displayFavoriteImage() {
    var sourceImage = require('../Images/ic_favorite_border.png');
    if (this.props.favoritesDrill.findIndex(item => item.id === this.state.drill.id) !== -1) {
      // Film dans nos favoris
      sourceImage = require('../Images/ic_favorite.png');
    }
    return <Image style={styles.favorite_image} source={sourceImage} />;
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
            onPress={() => navigation.navigate('DrillAnimationPage', { drill: drill })}
          >
            <Text style={styles.videoLinkText}>Video</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.separator} />
        {/* 
        <Button title="Favoris" onPress={() => this.props.toggleFavorite(drill)}/>
        <Button title="Favoris" onPress={() => this._toggleFavorite()}/> */}
        <TouchableOpacity style={styles.favorite_container} onPress={() => this.props.toggleFavorite(drill)}>
          {this._displayFavoriteImage()}
        </TouchableOpacity>

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
  favorite_container: {
    alignItems: 'center', // Alignement des components enfants sur l'axe secondaire, X ici
  },
  favorite_image: {
    width: 40,
    height: 40,
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
