import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { connect } from 'react-redux';
import theme from '../styles/theme.style';

export const ProgramsPage = props => {
  const { programs, navigation } = props;

  const renderProgram = ({ item }) => {
    const { id, title, trainings } = item;
    return (
      <View>
        <Text>
          {id} - {title}
        </Text>
        <Text>Includes {trainings.length} trainings</Text>
      </View>
    );
  };

  return (
    <View style={styles.programPage}>
      <FlatList data={programs} keyExtractor={item => item.id.toString()} renderItem={renderProgram} />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    programs: state.programs,
  };
};

export default connect(mapStateToProps)(ProgramsPage);

const styles = StyleSheet.create({
  programPage: {
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
});
