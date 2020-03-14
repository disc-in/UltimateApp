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
    <View style={styles.main_container}>
      <FlatList
        data={drills}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.main_container}
            onPress={() => navigation.navigate('DrillPage', {drill: item})}>
            <Image
              style={styles.image}
              source={{uri: item.img}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{item.title}</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{item.description}</Text>
              </View>
              <View style={styles.date_container}>
                <Text style={styles.date_text}>Sorti le 13/12/2017</Text>
              </View>
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
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
  }
})