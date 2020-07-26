import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Picker,
  TouchableHighlight,
  FlatList,
  ImageBackground,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';

const screenDimension = Dimensions.get('window');

const TacticsPage = props => {
  // Default is second choice so that it is clear we use a picker on iOS
  const [selectedIndex, setSelectedIndex] = useState(1);

  const onImagePress = item => props.navigation.navigate('VideoPage', { video: item });

  const renderContent = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => onImagePress(item)}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <ImageBackground source={{ uri: item.illustration }} style={styles.image}>
            <View style={styles.timer}>
              <Text style={styles.textTimer}>{item.time}</Text>
            </View>
          </ImageBackground>
          <Text style={styles.author}>{item.text}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.tacticsPage}>
      <View style={styles.pickerContainer}>
        <Text style={styles.topic}>Choose a topic: </Text>
        <Picker
          selectedValue={selectedIndex}
          style={styles.picker}
          itemStyle={styles.pickerItemStyle}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedIndex(itemIndex);
          }}
        >
          {props.tactics.map((topic, index) => (
            <Picker.Item key={index} label={topic.title} value={index} />
          ))}
        </Picker>
      </View>
      <FlatList
        style={styles.tacticsList}
        data={props.tactics[selectedIndex].pages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderContent}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    tactics: state.theory.tactics,
  };
};

export default connect(mapStateToProps)(TacticsPage);

const styles = StyleSheet.create({
  tacticsPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    height: '100%',
  },
  pickerContainer: {
    height: 70,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 2,
  },
  topic: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
  picker: {
    flex: 1,
    marginHorizontal: 20,
  },
  pickerItemStyle: {
    fontSize: theme.FONT_SIZE_SMALL,
  },
  tacticsList: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  itemContainer: {
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 1,
  },
  title: {
    paddingVertical: 15,
    paddingLeft: 10,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
  author: {
    paddingVertical: 15,
    paddingLeft: 10,
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_SMALL,
  },
  image: {
    height: 250,
  },
  timer: {
    backgroundColor: theme.COLOR_PRIMARY,
    paddingHorizontal: 5,
    position: 'absolute',
    right: 5,
    bottom: 10,
  },
  textTimer: {
    color: theme.COLOR_PRIMARY_LIGHT,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
