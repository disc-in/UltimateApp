import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import filterStyle from '../styles/filters.style';
import { Levels, Intensities, EquipmentLabels, SeasonTimings } from '../Fixtures';
import Button from './filters/FilterButton';
import Checkbox from './filters/Checkbox';
import Slider from './filters/Slider';
import HeaderButton from './shared/HeaderButton';

class FitnessFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLevel: undefined,
      selectedIntensity: undefined,
      selectedEquipmentLabel: undefined,
      selectedSeasonTiming: undefined,
      selectedGoal: undefined,
      durationInMinutes: undefined,
      displayedDrills: this.props.route.params.initialData,
    };

    this.onDurationInMinutesChange = this.onInputChange.bind(this, 'durationInMinutes');
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
    const {
      selectedLevel,
      selectedIntensity,
      selectedEquipmentLabel,
      selectedSeasonTiming,
      selectedGoal,
      durationInMinutes,
    } = this.state;
    let newData = this.props.route.params.initialData;

    if (selectedLevel) newData = newData.filter(drill => drill.level === selectedLevel);
    if (selectedIntensity) newData = newData.filter(drill => drill.intensity === selectedIntensity);
    if (selectedEquipmentLabel) newData = newData.filter(drill => drill.equipmentLabel === selectedEquipmentLabel);
    if (selectedSeasonTiming) newData = newData.filter(drill => drill.seasonTiming === selectedSeasonTiming);
    if (selectedGoal) newData = newData.filter(drill => drill.goals.includes(selectedGoal));
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
            });
          }}
        />
      ),
    });
  }

  render() {
    const {
      selectedLevel,
      selectedIntensity,
      selectedEquipmentLabel,
      selectedSeasonTiming,
      selectedGoal,
      durationInMinutes,
    } = this.state;
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
          <Text style={filterStyle.filterTitle}>Intensity</Text>
          <View style={filterStyle.filter}>
            {Object.values(Intensities).map(intensity => (
              <Button
                title={intensity}
                onPress={() => this.onPressedChange('selectedIntensity', intensity)}
                key={intensity}
                active={selectedIntensity === intensity}
              />
            ))}
          </View>
          <Text style={filterStyle.filterTitle}>Equipment</Text>
          <View style={filterStyle.filter}>
            {Object.values(EquipmentLabels).map(equipmentLabel => (
              <Button
                title={equipmentLabel}
                onPress={() => this.onPressedChange('selectedEquipmentLabel', equipmentLabel)}
                key={equipmentLabel}
                active={selectedEquipmentLabel === equipmentLabel}
              />
            ))}
          </View>
          <Text style={filterStyle.filterTitle}>Season Timing</Text>
          <View style={filterStyle.filter}>
            {Object.values(SeasonTimings).map(seasonTiming => (
              <Button
                title={seasonTiming}
                onPress={() => this.onPressedChange('selectedSeasonTiming', seasonTiming)}
                key={seasonTiming}
                active={selectedSeasonTiming === seasonTiming}
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
                  onPress={() => this.onPressedChange('selectedGoal', goal)}
                  key={goal}
                  active={selectedGoal === goal}
                />
              ))}
          </View>
          <Text style={filterStyle.filterTitle}>Duration: {durationInMinutes || '-'} mins</Text>
          <Slider
            minimumValue={10}
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

export default FitnessFilters;
