import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import theme from '../styles/theme.style';
import ListItem from './shared/ListItem';

export const ProgramPage = props => {
  const { navigation, route } = props;
  const { program } = route.params;

  const renderTraining = ({ item }) => {
    const { title } = item;
    const onTrainingPress = training => navigation.navigate('TrainingPage', { training, program });

    const isDone =
      props.completeTrainings.find(
        complete => program.id === complete.program.id && training.id === complete.training.id,
      ) !== undefined;
    return (
      <ListItem>
        <TouchableOpacity style={styles.training} onPress={() => onTrainingPress(item)}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.container}>
            <Text>Beginner</Text>
          </View>
          <View style={styles.container}>
            <Text>{isDone ? 'Done' : 'Todo'}</Text>
          </View>
          <View style={styles.container}>
            <Text>></Text>
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
    marginBottom: 10,
    padding: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexBasis: '50%',
  },
  container: {
    flexBasis: '20%',
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
});
