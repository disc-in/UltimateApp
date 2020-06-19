import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';

export default class BackgroundPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: props.type,
    };

    this.props.onBackgroundChange(props.type);
  }

  render() {
    return (
      <View style={[{ position: 'absolute', left: 0, top: 0 }]} height="100%" width="100%">
        <Picker
          selectedValue={this.state.selectedValue}
          style={{ position: 'absolute', top: this.props.top - 10, right: 10, height: 50, width: 120 }}
          onValueChange={(itemValue, itemIndex) => {
            this.props.onBackgroundChange(itemValue);
          }}
        >
          <Picker.Item label="Endzone" value="zone" />
          <Picker.Item label="3/4 field" value="3/4 field" />
          <Picker.Item label="Rectangle" value="rectangle" />
          <Picker.Item label="Empty" value="empty" />
        </Picker>
      </View>
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (props.type !== state.selectedValue)
      return {
        selectedValue: props.type,
      };
    else return null;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
});
