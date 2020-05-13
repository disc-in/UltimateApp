import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import theme from '../../styles/theme.style';
import ListItem from '../shared/ListItem';

export const Program = props => {
  const { title, trainings } = props.program;

  const completeTrainingsCount = props.completeTrainings
    .filter(({ training, program }) => program.id === props.program.id)
    .map(({ training, program }) => training).length;

  const width = `${(completeTrainingsCount * 100) / trainings.length}%`;
  return (
    <ListItem style={styles.program}>
      <View style={styles.program}>
        <View style={styles.presentationContainer}>
          <Text style={styles.programTitle}>{title}</Text>
          <Text style={styles.completion}>
            {completeTrainingsCount}/{trainings.length}
            {completeTrainingsCount === trainings.length && ' 👍🎉'}
          </Text>
          <View style={styles.progressBar}>
            <View style={[StyleSheet.absoluteFill, styles.fillProgressBar, { width }]} />
          </View>
        </View>
      </View>
    </ListItem>
  );
};

const mapStateToProps = state => {
  return {
    completeTrainings: state.completeTrainings,
  };
};

export default connect(mapStateToProps)(Program);

const styles = StyleSheet.create({
  program: {
    paddingTop: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  presentationContainer: {
    flexBasis: '80%',
  },
  programTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
  completion: {
    textAlign: 'right',
  },
  progressBar: {
    marginTop: 5,
    height: 3,
    width: '100%',
    backgroundColor: theme.BACKGROUND_COLOR,
    borderRadius: 2,
  },
  fillProgressBar: {
    width: '50%',
    borderRadius: 5,
    backgroundColor: theme.COLOR_PRIMARY,
  },
  ctaContainer: {
    flexBasis: '10%',
    paddingLeft: 20,
  },
  cta: {
    height: 20,
    aspectRatio: 109 / 239,
  },
});
