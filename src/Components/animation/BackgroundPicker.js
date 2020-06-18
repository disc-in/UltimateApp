import React, { useState, Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

export default class BackgroundPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: props.type,
    };

    this.props.onBackgroundChange(props.type);

    console.log('selectevalue: ' + this.state.selectedValue);
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.selectedValue}
          style={{ position: 'absolute', right: 10, height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => {
            this.props.onBackgroundChange(itemValue);
          }}
        >
          <Picker.Item label="Endzone" value="zone" />
          <Picker.Item label="3/4 field" value="3/4 field" />
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
    paddingTop: 40,
    alignItems: 'center',
  },
});
