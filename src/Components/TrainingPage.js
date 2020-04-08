import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import theme from '../styles/theme.style';

const mapStateToProps = state => {
  return {
    drills: state.drills,
  };
};

export const TrainingPage = props => {
  return (
    <View style={styles.trainingPage}>
      <Text>This will be a training page</Text>
    </View>
  );
};

export default connect(mapStateToProps)(TrainingPage);

const styles = StyleSheet.create({
  trainingPage: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
});
