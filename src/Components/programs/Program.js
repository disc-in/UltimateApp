import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../../utils/i18n';
import theme from '../../styles/theme.style';
import ListItem from '../shared/ListItem';

export const Program = props => {
  const { title, trainings } = props.program;

  const completeTrainingsCount = props.completeTrainings
    .filter(({ training, program }) => program.id === props.program.id)
    .map(({ training, program }) => training).length;

  const width = `${(completeTrainingsCount * 100) / trainings.length}%`;
  return (
    <ListItem>
      <View style={styles.program}>
        <Text style={styles.programTitle}>{title}</Text>
        <Text style={styles.completion}>
          {I18n.t('programs.program.completion', { done: completeTrainingsCount, total: trainings.length })}
          {completeTrainingsCount === trainings.length && ' 👍🎉'}
        </Text>
        <View style={styles.progressBar}>
          <View style={[StyleSheet.absoluteFill, styles.fillProgressBar, { width }]} />
        </View>
      </View>
    </ListItem>
  );
};

const mapStateToProps = state => ({
  completeTrainings: state.completeTrainings,
});

export default connect(mapStateToProps)(Program);

const styles = StyleSheet.create({
  program: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    width: '100%',
  },
  programTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
  },
  completion: {
    textAlign: 'right',
    width: '100%',
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_SMALL,
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
    backgroundColor: theme.MAIN_COLOR,
  },
});
