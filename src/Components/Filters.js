import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const Filters = props => {
  const [level, setLevel] = useState();

  const onLevelChange = level => {
    setLevel(level);
    const newData = props.initialData.filter(drill => drill.level === level);
    props.onFiltered(newData);
  };

  return (
    <View style={styles.filters}>
      <Text style={styles.filterTitle}>Level</Text>
      <View style={styles.filter}>
        <Button title="Beginner" onPress={() => onLevelChange('beginner')} />
        <Button title="Intermediate" onPress={() => onLevelChange('intermediate')} />
        <Button title="Advanced" onPress={() => onLevelChange('advanced')} />
      </View>
      <Button title="Validate" onPress={props.onConfirm} />
    </View>
  );
};

const styles = StyleSheet.create({
  filters: {
    height: '100%',
    alignItems: 'center',
  },
  filterTitle: {
    marginTop: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  filter: {
    flexDirection: 'row',
  },
  button: {
    borderColor: '#e5e5e5',
    borderWidth: 1,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Filters;
