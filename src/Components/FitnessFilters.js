import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import filterStyle from '../styles/filters.style';
import { Levels, Intensities, EquipmentLabels, SeasonTimings } from '../Fixtures/config';
import Button from './filters/FilterButton';
import Checkbox from './filters/Checkbox';
import Slider from './filters/Slider';
import HeaderButton from './shared/HeaderButton';
import CtaButton from './shared/Button';

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

  resetFilters() {
    this.setState(
      {
        selectedFavorites: false,
        selectedLevels: [],
        selectedIntensities: [],
        selectedEquipmentLabels: [],
        selectedSeasonTimings: [],
        selectedGoals: [],
        durationInMinutes: undefined,
      },
      () => {
        this.applyFilters();
      },
    );
  }

  onPressedChange(target, value) {
    this.setState((prevState) => {
      const newValue = prevState[target].includes(value)
        ? prevState[target].filter((v) => v !== value)
        : prevState[target].concat([value]);
      return {
        [target]: newValue,
      };
    }, this.applyFilters);
  }

  onFavoritesChange() {
    this.setState(
      (prevState) => ({
        selectedFavorites: !prevState.selectedFavorites,
      }),
      this.applyFilters,
    );
  }

  onSliderChange(target, value) {
    this.setState({ [target]: value }, this.applyFilters);
  }

  applyFilters(callback = () => {}) {
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
      const favoriteIds = favoriteDrills.map((favorite) => favorite.id);
      newData = newData.filter((drill) => favoriteIds.includes(drill.id));
    }
    if (selectedLevels.length > 0) newData = newData.filter((drill) => selectedLevels.includes(drill.level));
    if (selectedIntensities.length > 0) {
      newData = newData.filter((drill) => selectedIntensities.includes(drill.intensity));
    }
    if (selectedEquipmentLabels.length > 0) {
      newData = newData.filter((drill) => selectedEquipmentLabels.includes(drill.equipmentLabel));
    }
    if (selectedSeasonTimings.length > 0) {
      newData = newData.filter((drill) => selectedSeasonTimings.includes(drill.seasonTiming));
    }
    if (selectedGoals.length > 0) {
      newData = newData.filter((drill) => drill.goals.filter((goal) => selectedGoals.includes(goal)).length > 0);
    }
    if (durationInMinutes) newData = newData.filter((drill) => drill.durationInMinutes <= durationInMinutes);

    this.setState({ displayedDrills: newData }, callback);
  }

  validateFilters() {
    this.props.navigation.navigate(this.props.route.params.previousScreen, {
      type: this.props.route.params.previousType,
      currentFilters: this.state,
    });
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => <HeaderButton icon="restart" onPress={() => this.resetFilters()} testID="resetButton" />,
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
        <ScrollView contentContainerStyle={filterStyle.filters}>
          <View style={filterStyle.filter}>
            <Button
              title={I18n.t('fitnessFilters.favorites')}
              onPress={() => this.onFavoritesChange()}
              active={selectedFavorites}
            />
          </View>
          <Text style={filterStyle.filterTitle}>{I18n.t('fitnessFilters.level')}</Text>
          <View style={filterStyle.filter}>
            {Object.values(Levels).map((level) => (
              <Button
                title={I18n.t(`data.levels.${level}`)}
                onPress={() => this.onPressedChange('selectedLevels', level)}
                key={level}
                active={selectedLevels.includes(level)}
              />
            ))}
          </View>
          <Text style={filterStyle.filterTitle}>{I18n.t('fitnessFilters.intensity')}</Text>
          <View style={filterStyle.filter}>
            {Object.values(Intensities).map((intensity) => (
              <Button
                title={I18n.t(`data.intensities.${intensity}`)}
                onPress={() => this.onPressedChange('selectedIntensities', intensity)}
                key={intensity}
                active={selectedIntensities.includes(intensity)}
              />
            ))}
          </View>
          <Text style={filterStyle.filterTitle}>{I18n.t('fitnessFilters.equipment')}</Text>
          <View style={filterStyle.filter}>
            {Object.values(EquipmentLabels).map((equipmentLabel) => (
              <Button
                title={I18n.t(`data.equipmentLabels.${equipmentLabel}`)}
                onPress={() => this.onPressedChange('selectedEquipmentLabels', equipmentLabel)}
                key={equipmentLabel}
                active={selectedEquipmentLabels.includes(equipmentLabel)}
              />
            ))}
          </View>
          <Text style={filterStyle.filterTitle}>{I18n.t('fitnessFilters.seasonTiming')}</Text>
          <View style={filterStyle.filter}>
            {Object.values(SeasonTimings)
              .filter((value) => value !== SeasonTimings.ANYTIME)
              .map((seasonTiming) => (
                <Button
                  title={I18n.t(`data.seasonTimings.${seasonTiming}`)}
                  onPress={() => this.onPressedChange('selectedSeasonTimings', seasonTiming)}
                  key={seasonTiming}
                  active={selectedSeasonTimings.includes(seasonTiming)}
                />
              ))}
          </View>
          <Text style={filterStyle.filterTitle}>{I18n.t('fitnessFilters.goals')}</Text>
          <View style={filterStyle.filter}>
            {this.props.route.params.initialData
              .map((drill) => drill.goals)
              .reduce((x, y) => x.concat(y), [])
              .filter((goal, index, array) => array.indexOf(goal) === index)
              .map((goal) => (
                <Checkbox
                  title={I18n.t(`data.fitnessGoals.${goal}`)}
                  onPress={() => this.onPressedChange('selectedGoals', goal)}
                  key={goal}
                  active={selectedGoals.includes(goal)}
                />
              ))}
          </View>
          <Text style={filterStyle.filterTitle}>{I18n.t('fitnessFilters.duration')}</Text>
          <Text>{I18n.t('fitnessFilters.durationLabel', { duration: durationInMinutes || '-' })}</Text>
          <Slider
            minimumValue={5}
            maximumValue={60}
            step={1}
            value={durationInMinutes}
            onValueChange={this.onDurationInMinutesChange}
            testID="durationSlider"
          />
        </ScrollView>
        <View style={filterStyle.footer}>
          <CtaButton
            onPress={() => this.validateFilters()}
            text={I18n.t('fitnessFilters.cta', { count: this.state.displayedDrills.length })}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteDrills: state.favoriteDrills,
  };
};
export default connect(mapStateToProps)(FitnessFilters);
