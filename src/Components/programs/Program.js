import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../shared/ListItem';

import theme from '../../styles/theme.style';

export const Program = props => {
  const { title, trainings } = props.program;

  const completeTrainingsCount = props.completeTrainings
    .filter(({ training, program }) => program.id === props.program.id)
    .map(({ training, program }) => training).length;

  const width = `${(completeTrainingsCount * 100) / trainings.length}%`;
  return (
    <ListItem>
      <View style={styles.program}>
        <View style={styles.image}>
          <View style={styles.wrapper}>
            <Text style={styles.programTitle}>{title}</Text>
          </View>
          <View style={styles.presentationContainer}>
            <Text style={styles.completion}>
              {completeTrainingsCount}/{trainings.length}
            </Text>
            <View style={styles.progressBar}>
              <View style={[StyleSheet.absoluteFill, styles.fillProgressBar, { width }]} />
            </View>
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
    paddingTop: 3,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  presentationContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  image: {
    alignItems: 'center',
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    height: 60,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  programTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
  },
  completion: {
    textAlign: 'right',
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
    backgroundColor: theme.GRADIENT_FIRST_COLOR,
  },
  ctaContainer: {
    flexBasis: '10%',
    paddingLeft: 20,
  },
  cta: {
    height: 20,
    aspectRatio: 109 / 239,
  },
  imageOpacity: {
    opacity: 0.4,
  },
  wrapper: {
    position: 'absolute',
    top: -10,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
});
