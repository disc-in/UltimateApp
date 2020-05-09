import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import filterStyle from '../styles/filters.style';
import { Levels } from '../Fixtures';
import Button from './filters/FilterButton';
import Checkbox from './filters/Checkbox';
import Slider from './filters/Slider';
import HeaderButton from './shared/HeaderButton';

class FrisbeeFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFavorites: false,
      selectedLevels: [],
      selectedGoals: [],
      numberOfPlayers: undefined,
      displayedDrills: this.props.route.params.initialData,
      favoriteDrills: this.props.favoriteDrills,
    };

    this.onNumberOfPlayersChange = this.onSliderChange.bind(this, 'numberOfPlayers');
  }

  onFavoritesChange() {
    this.setState(
      prevState => ({
        selectedFavorites: !prevState.selectedFavorites,
      }),
      this.applyFilters,
    );
  }
  onPressedChange(target, value) {
    this.setState(prevState => {
      const newValue = prevState[target].includes(value)
        ? prevState[target].filter(v => v !== value)
        : prevState[target].concat([value]);
      return {
        [target]: newValue,
      };
    }, this.applyFilters);
  }

  onSliderChange(target, value) {
    this.setState({ [target]: value }, this.applyFilters);
  }

  applyFilters() {
    const { selectedFavorites, selectedLevels, selectedGoals, numberOfPlayers, favoriteDrills } = this.state;
    let newData = this.props.route.params.initialData;

    if (selectedFavorites)
      newData = newData.filter(drill => favoriteDrills.map(favorite => favorite.id).includes(drill.id));
    if (selectedLevels.length > 0) newData = newData.filter(drill => selectedLevels.includes(drill.level));
    if (selectedGoals.length > 0)
      newData = newData.filter(drill => drill.goals.filter(goal => selectedGoals.includes(goal)).length > 0);
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
    const { selectedFavorites, selectedLevels, selectedGoals, numberOfPlayers } = this.state;
    return (
      <View style={filterStyle.wrapper}>
        <Text style={filterStyle.counter}>{this.state.displayedDrills.length} drills available</Text>
        <ScrollView contentContainerStyle={filterStyle.filters}>
          <View style={filterStyle.filter}>
            <Button title="Favorite Drills" onPress={() => this.onFavoritesChange()} active={selectedFavorites} />
          </View>
          <Text style={filterStyle.filterTitle}>Level</Text>
          <View style={filterStyle.filter}>
            {Object.values(Levels).map(level => (
              <Button
                title={level}
                onPress={() => this.onPressedChange('selectedLevels', level)}
                key={level}
                active={selectedLevels.includes(level)}
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
                <Checkbox
                  title={goal}
                  onPress={() => this.onPressedChange('selectedGoals', goal)}
                  key={goal}
                  active={selectedGoals.includes(goal)}
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
            testID="numberOfPlayersSlider"
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    favoriteDrills: state.favoriteDrills,
  };
};
export default connect(mapStateToProps)(FrisbeeFilters);
