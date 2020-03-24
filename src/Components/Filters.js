import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Filters = props => {
  return (
    <View style={styles.Filters}>
      <Text>Filters here</Text>
      <Button title="OK" onPress={props.onConfirm} />
    </View>
  );
};

const styles = StyleSheet.create({
  Filters: {
    height: '100%',
  },
});

export default Filters;
