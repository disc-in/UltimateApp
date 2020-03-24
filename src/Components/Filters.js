import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Filters = props => {
  const [level, setLevel] = useState();

  const onLevelChange = level => {
    setLevel(level);
    const newData = props.initialData.filter(drill => drill.level === level);
    props.onFiltered(newData);
  };

  return (
    <View style={styles.Filters}>
      <Text>Level</Text>
      <Button title="Beginner" onPress={() => onLevelChange('beginner')} />
      <Button title="Intermediate" onPress={() => onLevelChange('intermediate')} />
      <Button title="Advanced" onPress={() => onLevelChange('advanced')} />
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
