import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Slider } from 'react-native';
import theme from '../styles/theme.style';
import { Levels, Intensities } from '../Fixtures';

const Button = props => {
  const activeStyle = props.active ? styles.activeButton : {};
  return (
    <TouchableOpacity style={{ ...styles.button, ...activeStyle }} key={props.title} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const HeaderButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} testID="validateButton">
      <Text style={styles.headerButtonText}>✓</Text>
    </TouchableOpacity>
  );
};

// equipement
// season timing

class FitnessFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLevel: undefined,
      selectedIntensity: undefined,
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
    const { selectedLevel, selectedIntensity, selectedGoal, durationInMinutes } = this.state;
    let newData = this.props.route.params.initialData;

    if (selectedLevel) newData = newData.filter(drill => drill.level === selectedLevel);
    if (selectedIntensity) newData = newData.filter(drill => drill.intensity === selectedIntensity);
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
    const { selectedLevel, selectedIntensity, selectedGoal, durationInMinutes } = this.state;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.counter}>{this.state.displayedDrills.length} drills available</Text>
        <View style={styles.filters}>
          <Text style={styles.filterTitle}>Level</Text>
          <View style={styles.filter}>
            {Object.values(Levels).map(level => (
              <Button
                title={level}
                onPress={() => this.onPressedChange('selectedLevel', level)}
                key={level}
                active={selectedLevel === level}
              />
            ))}
          </View>
          <Text style={styles.filterTitle}>Intensity</Text>
          <View style={styles.filter}>
            {Object.values(Intensities).map(intensity => (
              <Button
                title={intensity}
                onPress={() => this.onPressedChange('selectedIntensity', intensity)}
                key={intensity}
                active={selectedIntensity === intensity}
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
                  title={goal}
                  onPress={() => this.onPressedChange('selectedGoal', goal)}
                  key={goal}
                  active={selectedGoal === goal}
                />
              ))}
          </View>
          <Text style={styles.filterTitle}>Duration: {durationInMinutes || '-'} mins</Text>
          <Slider
            minimumValue={1}
            maximumValue={60}
            step={1}
            value={durationInMinutes}
            onValueChange={this.onDurationInMinutesChange}
            style={styles.slider}
            testID="durationSlider"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerButtonText: {
    paddingRight: 20,
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
  slider: {
    marginTop: 10,
    marginBottom: 30,
    width: '80%',
  },
});

export default FitnessFilters;
