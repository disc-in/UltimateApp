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
  return (
    <View style={styles.playbookPage}>
      <FlatList
        data={props.customPlays}
        keyExtractor={(item) => item.title}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>{I18n.t('playbookPage.empty')}</Text>
          </View>
        )}
        ListFooterComponent={() => (
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
        )}
        renderItem={({ item }) => (
          <PlayTitle
            play={item}
            onPress={() => {
              props.navigation.navigate('PlayEditorPage', { currentPlay: item });
            }}
          />
        )}
      />
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
  },
  footer: {
    height: 50,
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: theme.MAIN_COLOR,
    borderWidth: StyleSheet.hairlineWidth,
  },
  createIcon: {
    fontSize: 40,
    fontWeight: 'bold',
    color: theme.MAIN_COLOR,
  },
});
