import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import DrillList from './DrillList';
import theme from '../styles/theme.style';

const mapStateToProps = state => {
  return {
    drills: state.drills,
  };
};

class TrainingPage extends Component {
  render() {
    const { navigation } = this.props;
    const training = this.props.route.params.training;
    const drills = this.props.drills.filter(drill => training.drills.includes(drill.id));

    return (
      <ScrollView style={styles.trainingPage}>
        <Text style={styles.descriptionText}>{training.description}</Text>
        <DrillList navigation={navigation} drillsToDisplay={drills} type="technical" />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(TrainingPage);

const styles = StyleSheet.create({
  trainingPage: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
  descriptionText: {
    padding: 20,
    color: theme.COLOR_SECONDARY,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
