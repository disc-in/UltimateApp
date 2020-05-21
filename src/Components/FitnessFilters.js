import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import filterStyle from '../styles/filters.style';
import { Levels, Intensities, EquipmentLabels, SeasonTimings } from '../Fixtures';
import Button from './filters/FilterButton';
import Checkbox from './filters/Checkbox';
import Slider from './filters/Slider';
import HeaderButton from './shared/HeaderButton';

export class FitnessFilters extends React.Component {
  constructor(props) {
    super(props);

    const { filters, initialData } = props.route.params;
    this.state = {
      selectedFavorites: filters?.selectedFavorites || false,
      selectedLevels: filters?.selectedLevels || [],
      selectedIntensities: filters?.selectedIntensities || [],
      selectedEquipmentLabels: filters?.selectedEquipmentLabels || [],
      selectedSeasonTimings: filters?.selectedSeasonTimings || [],
      selectedGoals: filters?.selectedGoals || [],
      durationInMinutes: filters?.durationInMinutes || undefined,
      displayedDrills: filters?.displayedDrills || initialData,
    };

    this.onDurationInMinutesChange = this.onSliderChange.bind(this, 'durationInMinutes');
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

  onFavoritesChange() {
    this.setState(
      prevState => ({
        selectedFavorites: !prevState.selectedFavorites,
      }),
      this.applyFilters,
    );
  }
  onSliderChange(target, value) {
    this.setState({ [target]: value }, this.applyFilters);
  }

  applyFilters() {
    const { favoriteDrills } = this.props;
    const {
      selectedFavorites,
      selectedLevels,
      selectedIntensities,
      selectedEquipmentLabels,
      selectedSeasonTimings,
      selectedGoals,
      durationInMinutes,
    } = this.state;
    let newData = this.props.route.params.initialData;

    if (selectedFavorites) {
      const favoriteIds = favoriteDrills.map(favorite => favorite.id);
      newData = newData.filter(drill => favoriteIds.includes(drill.id));
    }
    if (selectedLevels.length > 0) newData = newData.filter(drill => selectedLevels.includes(drill.level));
    if (selectedIntensities.length > 0)
      newData = newData.filter(drill => selectedIntensities.includes(drill.intensity));
    if (selectedEquipmentLabels.length > 0)
      newData = newData.filter(drill => selectedEquipmentLabels.includes(drill.equipmentLabel));
    if (selectedSeasonTimings.length > 0)
      newData = newData.filter(drill => selectedSeasonTimings.includes(drill.seasonTiming));
    if (selectedGoals.length > 0)
      newData = newData.filter(drill => drill.goals.filter(goal => selectedGoals.includes(goal)).length > 0);
    if (durationInMinutes) newData = newData.filter(drill => drill.durationInMinutes <= durationInMinutes);

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
              filters: this.state,
            });
          }}
        />
      ),
    });
  }

  render() {
    const {
      selectedFavorites,
      selectedLevels,
      selectedIntensities,
      selectedEquipmentLabels,
      selectedSeasonTimings,
      selectedGoals,
      durationInMinutes,
    } = this.state;

    return (
      <View style={filterStyle.wrapper}>
        <Text style={filterStyle.counter}>{this.state.displayedDrills.length} drills available</Text>
        <ScrollView contentContainerStyle={filterStyle.filters}>
          <View style={filterStyle.filter}>
            <Button title="Favorites only" onPress={() => this.onFavoritesChange()} active={selectedFavorites} />
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
          <Text style={filterStyle.filterTitle}>Intensity</Text>
          <View style={filterStyle.filter}>
            {Object.values(Intensities).map(intensity => (
              <Button
                title={intensity}
                onPress={() => this.onPressedChange('selectedIntensities', intensity)}
                key={intensity}
                active={selectedIntensities.includes(intensity)}
              />
            ))}
          </View>
          <Text style={filterStyle.filterTitle}>Equipment</Text>
          <View style={filterStyle.filter}>
            {Object.values(EquipmentLabels).map(equipmentLabel => (
              <Button
                title={equipmentLabel}
                onPress={() => this.onPressedChange('selectedEquipmentLabels', equipmentLabel)}
                key={equipmentLabel}
                active={selectedEquipmentLabels.includes(equipmentLabel)}
              />
            ))}
          </View>
          <Text style={filterStyle.filterTitle}>Season Timing</Text>
          <View style={filterStyle.filter}>
            {Object.values(SeasonTimings)
              .filter(value => value !== SeasonTimings.ANYTIME)
              .map(seasonTiming => (
                <Button
                  title={seasonTiming}
                  onPress={() => this.onPressedChange('selectedSeasonTimings', seasonTiming)}
                  key={seasonTiming}
                  active={selectedSeasonTimings.includes(seasonTiming)}
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
          <Text style={filterStyle.filterTitle}>Duration</Text>
          <Text>How much time do you have?   {durationInMinutes || '-'} mins</Text>
          <Slider
            minimumValue={5}
            maximumValue={60}
            step={1}
            value={durationInMinutes}
            onValueChange={this.onDurationInMinutesChange}
            testID="durationSlider"
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
export default connect(mapStateToProps)(FitnessFilters);
