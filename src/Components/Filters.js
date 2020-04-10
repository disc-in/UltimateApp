import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import theme from '../styles/theme.style';
import { Levels } from '../Fixtures';

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
    displayedDrills: this.props.route.params.initialData,
  };

  onPressedChange(target, value) {
    this.setState(prevState => {
      const newValue = value === prevState[target] ? undefined : value;
      return {
        [target]: newValue,
      };
    }, this.applyFilters);
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

    this.setState({ displayedDrills: newData });
  }

  componentDidMount() {
    this.props.route.params.onFiltered(this.state.displayedDrills);
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            this.props.route.params.onFiltered(this.state.displayedDrills);
            this.props.navigation.goBack();
          }}
          testID="validateButton"
        >
          <Text style={styles.headerButtonText}>✓</Text>
        </TouchableOpacity>
      ),
    });
  }

  render() {
    const { selectedLevel, selectedGoal, numberOfPlayers } = this.state;
    return (
      <View style={styles.wrapper}>
        <Text testID="availableDrills" style={styles.counter}>
          {this.state.displayedDrills.length} drills available
        </Text>
        <View style={styles.filters}>
          <Text style={styles.filterTitle}>Level</Text>
          <View style={styles.filter}>
            {Object.values(Levels).map(level => (
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerButton: {
    paddingRight: 20,
  },
  headerButtonText: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
  wrapper: {
    height: '100%',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  filters: {
    alignItems: 'center',
  },
  counter: {
    paddingTop: 10,
    paddingLeft: 20,
    color: theme.COLOR_SECONDARY,
    marginBottom: 20,
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
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR_BUTTON,
    backgroundColor: theme.BACKGROUND_COLOR_BUTTON,
  },
});

export default Filters;
