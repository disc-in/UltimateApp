import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';


export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Button
          title="DrillList"
          onPress={() => this.props.navigation.navigate('DrillListPage')}
        />
        
        <Button
          title="Fitness"
          onPress={() => this.props.navigation.navigate('DrillListPage')}
        />

        <Button
          title="Training"
          onPress={() => this.props.navigation.navigate('DrillListPage')}
        />
        {/*         <Video
        source={{ uri: 'https://www.youtube.com/embed?v=JmghDKkeiik&feature=youtu.be' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 500, height: 300 }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around'
  },
});
