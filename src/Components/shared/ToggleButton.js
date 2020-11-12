import React, { useState } from 'react';
import { ToggleButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  const [value, setValue] = useState('animation');
  console.log('Value ToggleButton', value);

  return (
    <ToggleButton.Row style={styles.row} onValueChange={(value) => setValue(value)} value={value}>
      <ToggleButton
        icon={() => (
          <Ionicons
            name="md-clipboard"
            size={24}
            color={value === 'animation' ? theme.MAIN_COLOR : theme.COLOR_SECONDARY}
          />
        )}
        value="animation"
        color={value === 'animation' ? theme.MAIN_COLOR : theme.BACKGROUND_COLOR}
      />
      <ToggleButton
        icon={() => (
          <Ionicons
            name="ios-videocam"
            size={24}
            color={value === 'video' ? theme.MAIN_COLOR : theme.COLOR_SECONDARY}
          />
        )}
        value="video"
        color={value === 'video' ? theme.MAIN_COLOR : theme.BACKGROUND_COLOR}
      />
    </ToggleButton.Row>
  );
};

const styles = StyleSheet.create({
  row: { paddingLeft: 10 },
  mapToggle: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    height: 48,
    borderWidth: 2,
    borderColor: 'white',
  },
  listToggle: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    height: 48,
    borderWidth: 2,
    borderColor: 'white',
  },
});
