import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox as NativeCheckbox } from 'react-native-elements';
import theme from '../../styles/theme.style';

const Checkbox = props => {
  return (
    <View style={styles.container}>
      <NativeCheckbox
        checked={props.active}
        onPress={props.onPress}
        key={props.title}
        title={props.title}
        containerStyle={styles.containerStyle}
        wrapperStyle={styles.wrapperStyle}
        textStyle={styles.textStyle}
        checkedColor={theme.FORM_ELEMENT_COLOR}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: '50%',
  },
  containerStyle: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    borderWidth: 0,
    margin: 0,
    padding: 0,
    marginRight: 5,
  },
  wrapperStyle: {
    margin: 0,
    padding: 0,
    borderWidth: 0,
  },
  textStyle: {
    textTransform: 'capitalize',
  },
});

export default Checkbox;
