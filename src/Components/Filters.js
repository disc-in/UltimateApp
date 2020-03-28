import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Button = props => {
  const activeStyle = props.active ? styles.activeButton : {};
  return (
    <TouchableOpacity style={{ ...styles.button, ...activeStyle }} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const Filters = props => {
  const [selectedLevel, setLevel] = useState();
  const [selectedGoal, setGoal] = useState();

  const onLevelChange = pressedLevel => {
    const newLevel = pressedLevel === selectedLevel ? undefined : pressedLevel;
    setLevel(newLevel);
  };
  const onGoalChange = pressedGoal => {
    const newGoal = pressedGoal === selectedGoal ? undefined : pressedGoal;
    setGoal(newGoal);
  };

  useEffect(() => {
    const newData = selectedLevel
      ? props.initialData.filter(drill => drill.level === selectedLevel)
      : props.initialData;
    props.onFiltered(newData);
  }, [selectedLevel]);

  useEffect(() => {
    const newData = selectedGoal
      ? props.initialData.filter(drill => drill.goals.includes(selectedGoal))
      : props.initialData;
    props.onFiltered(newData);
  }, [selectedGoal]);

  return (
    <View style={styles.filters}>
      <Text style={styles.filterTitle}>Level</Text>
      <View style={styles.filter}>
        <Button title="Beginner" onPress={() => onLevelChange('beginner')} active={selectedLevel === 'beginner'} />
        <Button
          title="Intermediate"
          onPress={() => onLevelChange('intermediate')}
          active={selectedLevel === 'intermediate'}
        />
        <Button title="Advanced" onPress={() => onLevelChange('advanced')} active={selectedLevel === 'advanced'} />
      </View>
      <Text style={styles.filterTitle}>Goals</Text>
      <View style={styles.filter}>
        {props.initialData
          .flatMap(drill => drill.goals)
          .filter((goal, index, array) => array.indexOf(goal) === index)
          .map(goal => (
            <Button key={goal} title={goal} onPress={() => onGoalChange(goal)} active={selectedGoal === goal} />
          ))}
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
    marginTop: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  filter: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    borderColor: '#e5e5e5',
    borderWidth: 1,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeButton: {
    backgroundColor: '#eee',
    borderColor: '#d5d5d5',
  },
});

export default Filters;
