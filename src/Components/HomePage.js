import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Button
          title="DrillList"
          onPress={() => this.props.navigation.navigate('DrillListPage')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
