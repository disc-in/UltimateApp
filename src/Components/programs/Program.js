import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import theme from '../../styles/theme.style';
import ListItem from '../shared/ListItem';

export const Program = props => {
  const { title, trainings, image } = props.program;

  const completeTrainingsCount = props.completeTrainings
    .filter(({ training, program }) => program.id === props.program.id)
    .map(({ training, program }) => training).length;

  const width = `${(completeTrainingsCount * 100) / trainings.length}%`;
  return (
    <View style={styles.program}>
      <ImageBackground source={{ uri: image }} style={styles.image} imageStyle={styles.imageOpacity}>
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
      </ImageBackground>
    </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  presentationContainer: {
    flexBasis: '90%',
  },
  programTitle: {
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.COLOR_PRIMARY_LIGHT,
  },
  completion: {
    textAlign: 'right',
    color: theme.COLOR_PRIMARY_LIGHT,
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
  image: {
    alignItems: 'center',
    backgroundColor: 'rgb(0,0,0)',
    height: 150,
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageOpacity: {
    opacity: 0.4,
  },
});

600;
350;
