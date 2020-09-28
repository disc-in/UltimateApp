import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox as NativeCheckbox } from 'react-native-elements';
import theme from '../../styles/theme.style';

const Checkbox = (props) => {
  return (
    <View style={styles.container}>
      <NativeCheckbox
        checked={props.active}
        onPress={props.onPress}
        key={props.title}
        title={props.title}
        containerStyle={styles.containerStyle}
        textStyle={styles.textStyle}
        checkedColor={theme.MAIN_COLOR}
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
    padding: 0,
  },
  textStyle: {
    textTransform: 'capitalize',
    fontWeight: 'normal',
  },
});

export default Checkbox;
