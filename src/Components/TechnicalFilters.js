import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, Slider } from 'react-native';
import filterStyle from '../styles/filters.style';
import { Levels } from '../Fixtures';

const Button = props => {
  const activeStyle = props.active ? filterStyle.activeButton : {};
  return (
    <TouchableOpacity style={{ ...filterStyle.button, ...activeStyle }} key={props.title} onPress={props.onPress}>
      <Text style={filterStyle.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const HeaderButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} testID="validateButton">
      <Text style={filterStyle.headerButtonText}>✓</Text>
    </TouchableOpacity>
  );
};

class TechnicalFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLevel: undefined,
      selectedGoal: undefined,
      numberOfPlayers: undefined,
      displayedDrills: this.props.route.params.initialData,
    };

    this.onNumberOfPlayersChange = this.onInputChange.bind(this, 'numberOfPlayers');
  }

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
    this.props.navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() => {
            this.props.navigation.navigate(this.props.route.params.previousScreen, {
              filteredDrills: this.state.displayedDrills,
              type: this.props.route.params.previousType,
            });
          }}
        />
      ),
    });
  }

  render() {
    const { selectedLevel, selectedGoal, numberOfPlayers } = this.state;
    return (
      <View style={filterStyle.wrapper}>
        <Text style={filterStyle.counter}>{this.state.displayedDrills.length} drills available</Text>
        <ScrollView contentContainerStyle={filterStyle.filters}>
          <Text style={filterStyle.filterTitle}>Level</Text>
          <View style={filterStyle.filter}>
            {Object.values(Levels).map(level => (
              <Button
                title={level}
                onPress={() => this.onPressedChange('selectedLevel', level)}
                key={level}
                active={selectedLevel === level}
              />
            ))}
          </View>
          <Text style={filterStyle.filterTitle}>Goals</Text>
          <View style={filterStyle.filter}>
            {this.props.route.params.initialData
              .map(drill => drill.goals)
              .reduce((x, y) => x.concat(y), [])
              .filter((goal, index, array) => array.indexOf(goal) === index)
              .map(goal => (
                <Button
                  title={goal}
                  onPress={() => this.onPressedChange('selectedGoal', goal)}
                  key={goal}
                  active={selectedGoal === goal}
                />
              ))}
          </View>
          <Text style={filterStyle.filterTitle}>Number of players: {numberOfPlayers || '-'}</Text>
          <Slider
            minimumValue={1}
            maximumValue={30}
            step={1}
            value={numberOfPlayers}
            onValueChange={this.onNumberOfPlayersChange}
            style={filterStyle.slider}
            testID="numberOfPlayersSlider"
          />
        </ScrollView>
      </View>
    );
  }
}

export default TechnicalFilters;
