import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Modal, TouchableHighlight, FlatList, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';

const screenDimension = Dimensions.get('window');

const TacticsPage = ({ props, tactics }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [theorySubject, setTheorySubject] = useState('Vertical Stack');
  const [modalVisible, setModalVisible] = useState(false);

  console.log('PROPS Tactics', props);

  // const onImagePress = item => navigation.navigate('VideoPage');

  const renderContent = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.containerImage}>
          <View style={styles.container}>
            {/* <TouchableHighlight onPress={() => onImagePress(item)}> */}
            <ImageBackground source={{ uri: item.illustration }} style={styles.image}>
              <View style={styles.timer}>
                <Text style={styles.textTimer}>{item.time}</Text>
              </View>
            </ImageBackground>
            {/* </TouchableHighlight> */}
          </View>
          <View style={styles.instructionContainer}>
            <Text style={styles.instruction}>{item.text}</Text>
          </View>
          <View style={styles.lines} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalViewTheory}>
            {tactics.map((topic, index) => (
              <TouchableHighlight
                style={styles.subjectButton}
                key={index}
                onPress={() => {
                  setSelectedIndex(index);
                  setTheorySubject(topic.title);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.subjectText}>{topic.title}</Text>
              </TouchableHighlight>
            ))}
            <TouchableHighlight
              style={styles.returnButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>{I18n.t('shared.back')}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View style={styles.displayTheory}>
        <TouchableHighlight
          style={styles.subjectModal}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View>
            <View style={styles.dropdown}>
              <Text style={{ ...styles.textStyle, color: theme.COLOR_PRIMARY }}>{theorySubject}</Text>
              <MaterialCommunityIcons name="chevron-down" color={theme.COLOR_PRIMARY} size={26} />
            </View>
            <View style={styles.lines} />
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.displayTheory}>
        <FlatList
          {...props}
          data={tactics[selectedIndex].pages}
          contentContainerStyle={styles.listContainer}
          keyExtractor={item => item.id.toString()}
          renderItem={renderContent}
        />
      </View>
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
  container: {
    flex: 1,
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
  },
  title: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  lines: {
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 1,
  },
  titleContainer: {
    paddingVertical: 15,
  },
  instructionContainer: {
    paddingVertical: 15,
    textAlign: 'center',
    alignItems: 'center',
  },
  instruction: {
    fontSize: theme.FONT_SIZE_SMALL,
    paddingLeft: 10,
  },
  listContainer: {
    paddingVertical: 10,
    paddingBottom: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalViewTheory: {
    width: '80%',
    height: '70%',
    justifyContent: 'space-around',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  returnButton: {
    backgroundColor: theme.COLOR_PRIMARY,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
    width: 120,
  },
  displayTheory: {
    alignItems: 'center',
    paddingTop: 20,
  },
  subjectModal: {
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    borderRadius: 5,
    padding: 10,
    width: '50%',
    paddingVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subjectButton: {
    backgroundColor: theme.COLOR_SECONDARY_LIGHT,
    width: '100%',
    borderRadius: 2,
    padding: 10,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderWidth: 1,
    borderColor: theme.COLOR_PRIMARY,
  },
  subjectText: {
    color: theme.COLOR_PRIMARY,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_LARGE,
  },
  image: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'rgb(0,0,0)',
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
    textAlign: 'center',
  },
  containerImage: {
    width: screenDimension.width,
  },
});
