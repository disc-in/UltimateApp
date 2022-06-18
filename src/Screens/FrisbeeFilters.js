import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import filterStyle from '../styles/filters.style';
import { Levels } from '../Fixtures/config';
import Button from '../Components/filters/FilterButton';
import Checkbox from '../Components/filters/Checkbox';
import Slider from '../Components/filters/Slider';
import HeaderButton from '../Components/shared/HeaderButton';
import CtaButton from '../Components/shared/Button';

export class FrisbeeFilters extends React.Component {
  constructor(props) {
    super(props);

    const { filters, initialData } = props.route.params;
    this.state = {
      selectedFavorites: filters?.selectedFavorites || false,
      selectedCustomDrills: filters?.selectedCustomDrills || false,
      selectedLevels: filters?.selectedLevels || [],
      selectedGoals: filters?.selectedGoals || [],
      numberOfPlayers: filters?.numberOfPlayers || undefined,
      displayedDrills: filters?.displayedDrills || initialData,
    };

    this.onNumberOfPlayersChange = this.onSliderChange.bind(this, 'numberOfPlayers');
  }

  resetFilters() {
    this.setState(
      {
        selectedFavorites: false,
        selectedCustomDrills: false,
        selectedLevels: [],
        selectedGoals: [],
        numberOfPlayers: undefined,
      },
      () => {
        this.applyFilters();
      },
    );
  }

  onBooleanChange(target) {
    this.setState(
      (prevState) => ({
        [target]: !prevState[target],
      }),
      this.applyFilters,
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

  onSliderChange(target, value) {
    this.setState({ [target]: value }, this.applyFilters);
  }

  applyFilters(callback = () => {}) {
    const { favoriteDrills } = this.props;
    const { selectedFavorites, selectedCustomDrills, selectedLevels, selectedGoals, numberOfPlayers } = this.state;
    let newData = this.props.route.params.initialData;

    if (selectedFavorites) {
      const favoriteIds = favoriteDrills.map((favorite) => favorite.id);
      newData = newData.filter((drill) => favoriteIds.includes(drill.id));
    }
    if (selectedCustomDrills) {
      newData = newData.filter((drill) => drill.custom);
    }
    if (selectedLevels.length > 0) newData = newData.filter((drill) => selectedLevels.includes(drill.level));
    if (selectedGoals.length > 0) {
      newData = newData.filter((drill) => drill.goals.filter((goal) => selectedGoals.includes(goal)).length > 0);
    }
    if (numberOfPlayers) newData = newData.filter((drill) => drill.minimalPlayersNumber <= numberOfPlayers);

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
    const { selectedFavorites, selectedCustomDrills, selectedLevels, selectedGoals, numberOfPlayers } = this.state;
    return (
      <View style={filterStyle.wrapper}>
        <ScrollView contentContainerStyle={filterStyle.filters}>
          <View style={filterStyle.filter}>
            <Button
              title={I18n.t('fitnessFilters.favorites')}
              onPress={() => this.onBooleanChange('selectedFavorites')}
              active={selectedFavorites}
            />
          </View>
          <View style={filterStyle.filter}>
            <Button
              title={I18n.t('fitnessFilters.custom')}
              onPress={() => this.onBooleanChange('selectedCustomDrills')}
              active={selectedCustomDrills}
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
          <Text style={filterStyle.filterTitle}>{I18n.t('fitnessFilters.goals')}</Text>
          <View style={filterStyle.filter}>
            {this.props.route.params.initialData
              .map((drill) => drill.goals)
              .reduce((x, y) => x.concat(y), [])
              .filter((goal, index, array) => array.indexOf(goal) === index)
              .map((goal) => (
                <Checkbox
                  title={I18n.t(`data.frisbeeGoals.${goal}`)}
                  onPress={() => this.onPressedChange('selectedGoals', goal)}
                  key={goal}
                  active={selectedGoals.includes(goal)}
                />
              ))}
          </View>
          <Text style={filterStyle.filterTitle}>
            {I18n.t('frisbeeFilters.numberOfPlayersLabel', { number: numberOfPlayers || '-' })}
          </Text>
          <Slider
            minimumValue={1}
            maximumValue={30}
            step={1}
            value={numberOfPlayers}
            onValueChange={this.onNumberOfPlayersChange}
            testID="numberOfPlayersSlider"
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
export default connect(mapStateToProps)(FrisbeeFilters);
