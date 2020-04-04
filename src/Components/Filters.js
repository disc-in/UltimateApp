import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import theme from '../styles/theme.style';

const Button = props => {
  const activeStyle = props.active ? styles.activeButton : {};
  return (
    <TouchableOpacity style={{ ...styles.button, ...activeStyle }} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

class Filters extends React.Component {
  state = {
    selectedLevel: undefined,
    selectedGoal: undefined,
    numberOfPlayers: undefined,
  };

  onPressedChange(target, value) {
    const newValue = value === this.state[target] ? undefined : value;
    this.setState({ [target]: newValue }, this.applyFilters);
  }

  onInputChange(target, value) {
    this.setState({ [target]: value }, this.applyFilters);
  }

  applyFilters() {
    const { selectedLevel, selectedGoal, numberOfPlayers } = this.state;
    let newData = this.props.route.params.initialData;

    if (selectedLevel) newData = newData.filter(drill => drill.level === selectedLevel);
    if (selectedGoal) newData = newData.filter(drill => drill.goals.includes(selectedGoal));
    if (numberOfPlayers) newData = newData.filter(drill => drill.minimalPlayersNumber <= numberOfPlayers);

    this.props.route.params.onFiltered(newData);
  }

  render() {
    const { selectedLevel, selectedGoal, numberOfPlayers } = this.state;
    return (
      <View style={styles.filters}>
        <Text style={styles.filterTitle}>Level</Text>
        <View style={styles.filter}>
          {['beginner', 'intermediate', 'advanced'].map(level => (
            <Button
              key={level}
              title={level}
              onPress={this.onPressedChange.bind(this, 'selectedLevel', level)}
              active={selectedLevel === level}
            />
          ))}
        </View>
        <Text style={styles.filterTitle}>Goals</Text>
        <View style={styles.filter}>
          {this.props.route.params.initialData
            .map(drill => drill.goals)
            .reduce((x, y) => x.concat(y), [])
            .filter((goal, index, array) => array.indexOf(goal) === index)
            .map(goal => (
              <Button
                key={goal}
                title={goal}
                onPress={this.onPressedChange.bind(this, 'selectedGoal', goal)}
                active={selectedGoal === goal}
              />
            ))}
        </View>
        <Text style={styles.filterTitle}>Number of players</Text>
        <TextInput
          style={styles.input}
          placeholder="How many players do you have?"
          onChangeText={this.onInputChange.bind(this, 'numberOfPlayers')}
          value={numberOfPlayers}
          keyboardType="numeric"
        />
        <Button title="Validate" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

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
    borderColor: theme.BORDER_COLOR_BUTTON,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON,
    borderWidth: 1,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeButton: {
    borderColor: theme.BORDER_COLOR_BUTTON_ACTIVE,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON_ACTIVE,
  },
  buttonText: {
    textTransform: 'capitalize',
  },
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR_BUTTON,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON,
  },
});

export default Filters;
