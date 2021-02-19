import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../styles/theme.style';
import I18n from '../utils/i18n';
import Drill from './animation/Drill';
import PlayTitle from './editor/PlayTitle';

const newPlay = {
  uuid: undefined,
  animation: new Drill(),
  title: I18n.t('playEditorPage.untitledPlay'),
};

export const PlaybookPage = (props) => {
  const isEmpty = props.customPlays.length === 0;

  const createPlay = () => (
    <TouchableOpacity
      style={styles.footer}
      onPress={() => {
        props.navigation.navigate('PlayEditorPage', { currentPlay: newPlay });
      }}
    >
      <View style={styles.createContainer}>
        <MaterialCommunityIcons style={styles.createIcon} name="plus" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.playbookPage}>
      <FlatList
        data={props.customPlays}
        keyExtractor={(item) => item.title}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>{I18n.t('playbookPage.empty')}</Text>
            {isEmpty && createPlay()}
          </View>
        )}
        renderItem={({ item }) => (
          <PlayTitle
            play={item}
            style={styles.customPlay}
            onPress={() => {
              props.navigation.navigate('PlayEditorPage', { currentPlay: item });
            }}
          />
        )}
      />
      {!isEmpty && createPlay()}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    customPlays: state.customPlays,
  };
};

export default connect(mapStateToProps)(PlaybookPage);

const styles = StyleSheet.create({
  playbookPage: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  empty: {
    marginTop: '30%',
    padding: 30,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginBottom: 50,
  },
  customPlay: {
    paddingLeft: 20,
    height: 60,
  },
  footer: {
    paddingTop: 10,
    borderTopColor: theme.COLOR_SECONDARY_LIGHT,
    borderTopWidth: 1,
    marginBottom: 20,
    alignItems: 'center',
  },
  createContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.MAIN_COLOR,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createIcon: {
    fontSize: 40,
    fontWeight: 'bold',
    color: theme.MAIN_COLOR,
  },
});