// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    drills: state.drills
  }
}

const DrillListPage = (props) => {

  const {drills, navigation} = props

  return (
    <View style={styles.drillListPage}>
      <Text style={styles.counter}>{drills.length} Frisbee drills</Text>
      <FlatList
        data={drills}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.drill}
            onPress={() => navigation.navigate('DrillPage', {drill: item})}>
            <Image
              style={styles.image}
              source={{uri: item.img}}
            />
            <View style={styles.content_container}>
              <View style={styles.drillSource}>
                <Text style={styles.source_text}>{item.source}</Text>
              </View>
              <Text style={styles.title_text}>{item.title}</Text>
              <Text style={styles.players_text}>Duration: {item.duration} - min players: {item.nbPlayers}</Text>
            </View>
          </TouchableOpacity>
        )}
        onEndReachedThreshold={0.5}
        onEndReached={() => {}}
      />
    </View>
  )
}

export default connect(mapStateToProps)(DrillListPage)

const styles = StyleSheet.create({
  drillListPage: {
    padding: 16,
    backgroundColor: '#fff',
    height: '100%'
  },
  drill: {
    height: 140,
    flexDirection: 'row'
  },
  counter: {
    color: '#767676',
    marginBottom: 16,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 5
  },
  content_container: {
    padding: 16,
  },
  drillSource: {
    flex: 2
  },
  title_text: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 20,
    flexWrap: 'wrap',
  },
  source_text: {
    color: '#A6A6A6'
  },
  players_text: {
    flex: 2,
    color: '#AFAFAF',
    fontSize: 14
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
  }
})
