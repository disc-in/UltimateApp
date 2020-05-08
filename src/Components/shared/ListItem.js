import React from 'react';
import { StyleSheet, View } from 'react-native';

import theme from '../../styles/theme.style';

const ListItem = props => {
  return <View style={styles.listItem}>{props.children}</View>;
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default ListItem;
