import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

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
  const [numberOfPlayers, setNumberOfPlayers] = useState();

  const onLevelChange = pressedLevel => {
    const newLevel = pressedLevel === selectedLevel ? undefined : pressedLevel;
    setLevel(newLevel);
  };
  const onGoalChange = pressedGoal => {
    const newGoal = pressedGoal === selectedGoal ? undefined : pressedGoal;
    setGoal(newGoal);
  };
  const onNumberOfPlayersChange = value => {
    setNumberOfPlayers(value);
  };

  useEffect(() => {
    let newData = props.initialData;
    if (selectedLevel) newData = newData.filter(drill => drill.level === selectedLevel);
    if (selectedGoal) newData = newData.filter(drill => drill.goals.includes(selectedGoal));
    if (numberOfPlayers) newData = newData.filter(drill => drill.minimalPlayersNumber <= numberOfPlayers);
    props.onFiltered(newData);
  }, [selectedLevel, selectedGoal, numberOfPlayers]);

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
      <Text style={styles.filterTitle}>Number of players</Text>
      <TextInput
        style={styles.input}
        placeholder="How many players do you have?"
        onChangeText={onNumberOfPlayersChange}
        value={numberOfPlayers}
        keyboardType="numeric"
      />
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
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
  },
});

export default Filters;
