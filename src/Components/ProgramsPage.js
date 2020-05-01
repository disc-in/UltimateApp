import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import theme from '../styles/theme.style';
import Program from './programs/Program';

export const ProgramsPage = props => {
  const { programs, navigation } = props;

  return (
    <View style={styles.programPage}>
      <FlatList
        data={programs}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Program program={item} navigation={navigation} />}
      />
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
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
});
