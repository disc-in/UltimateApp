import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Button
          title="Technical Drill List"
          onPress={() => this.props.navigation.navigate('DrillListPage', { type: 'technical' })}
        />
        <Button
          title="Fitness Drill List"
          onPress={() => this.props.navigation.navigate('DrillListPage', { type: 'fitness' })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
  },
});
