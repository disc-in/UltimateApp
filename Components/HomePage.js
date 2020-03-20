import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

export default class HomePage extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <Button title='DrillList' onPress={() => this.props.navigation.navigate('DrillListPage')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
