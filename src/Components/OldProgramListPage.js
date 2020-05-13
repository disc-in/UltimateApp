import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import theme from '../styles/theme.style';
import Program from './programs/Program';
import Button from './shared/Button';

export const ProgramListPage = props => {
  const { programs, navigation } = props;

  return (
    <View style={styles.programPage}>
      <FlatList
        data={programs}
        contentContainerStyle={styles.listContainer}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Program program={item} navigation={navigation} />}
      />
      <View style={styles.seeAllContainer}>
        <Button
          onPress={() => props.navigation.navigate('TrainingListPage')}
          text="See all trainings"
          buttonLight="true"
          style={styles.allTrainings}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    programs: state.programs,
    completeTrainings: state.completeTrainings,
  };
};

export default connect(mapStateToProps)(ProgramListPage);

const styles = StyleSheet.create({
  programPage: {
    backgroundColor: theme.BACKGROUND_COLOR,
    height: '100%',
  },
  listContainer: {
    paddingVertical: 10,
    paddingBottom: 50,
  },
  allTrainings: {
    fontSize: theme.FONT_SIZE_SMALL,
    alignSelf: 'center',
    width: 'auto',
    marginTop: 10,
  },
  seeAllContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(241, 241, 241, 0.2)',
    bottom: 10,
    width: '100%',
  },
});
