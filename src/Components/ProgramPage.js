import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import theme from '../styles/theme.style';
import ListItem from './shared/ListItem';
import doneImage from '../../assets/button_validation_dark_theme.png';
import toDoImage from '../../assets/button_validation_ultra_light.png';
import arrowDark from '../../assets/arrow_dark.png';

export const ProgramPage = props => {
  const { navigation, route } = props;
  const { program } = route.params;

  const renderTraining = ({ item }) => {
    const training = item;
    const onTrainingPress = () => navigation.navigate('TrainingPage', { training, program });

    const isDone =
      props.completeTrainings.find(
        complete => program.id === complete.program.id && training.id === complete.training.id,
      ) !== undefined;
    return (
      <ListItem>
        <TouchableOpacity style={styles.training} onPress={onTrainingPress}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{training.title}</Text>
          </View>
          <View style={styles.container}>
            <Image style={styles.todoState} source={isDone ? doneImage : toDoImage} />
          </View>
          <View style={styles.container}>
            <Image style={styles.cta} source={arrowDark} />
          </View>
        </TouchableOpacity>
      </ListItem>
    );
  };

  return (
    <View style={styles.programPage}>
      <FlatList data={program.trainings} keyExtractor={item => item.id.toString()} renderItem={renderTraining} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    completeTrainings: state.completeTrainings,
  };
};

export default connect(mapStateToProps)(ProgramPage);

const styles = StyleSheet.create({
  programPage: {
    backgroundColor: theme.BACKGROUND_COLOR,
    height: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
  },
  training: {
    padding: 10,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexBasis: '70%',
  },
  container: {
    flexBasis: '20%',
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
  todoState: {
    height: 30,
    aspectRatio: 1 / 1,
  },
  cta: {
    height: 20,
    aspectRatio: 109 / 239,
  },
});
