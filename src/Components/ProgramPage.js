import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import theme from '../styles/theme.style';

export const ProgramPage = props => {
  const { navigation, route } = props;
  const { program } = route.params;

  return <View style={styles.programPage} />;
};

export default ProgramPage;

const styles = StyleSheet.create({
  programPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
    padding: 20,
  },
});
