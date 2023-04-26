import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../styles/theme.style';
import I18n from '../utils/i18n';
import { generateUuid } from '../utils/random';
import { savePlay } from '../Store/Actions/playAction';
import Drill from '../Components/animation/Drill';
import PlayTitle from '../Components/editor/PlayTitle';

export const PlaybookPage = (props) => {
  const { navigation } = props;
  const isEmpty = props.customPlays.length === 0;

  const newPlay = () => {
    const defaultTitle = I18n.t('playbookPage.untitledPlay');
    let newTitle = defaultTitle;
    let counter = 1;
    while (props.customPlays.findIndex((item) => item.title === newTitle) !== -1) {
      newTitle = defaultTitle + ' (' + counter + ')';
      counter += 1;
    }
    const play = {
      uuid: generateUuid(),
      animation: new Drill(),
      title: newTitle,
    };
    props.savePlay(play);
    return play;
  };

  const behavior = Platform.select({
    ios: 'padding',
    android: 'height',
  });

  return (
    <KeyboardAvoidingView style={styles.playbookPage} behavior={behavior}>
      {isEmpty ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>{I18n.t('playbookPage.empty')}</Text>
        </View>
      ) : (
        <ScrollView>
          {props.customPlays.map((play) => (
            <PlayTitle
              play={play}
              key={play.title}
              style={styles.customPlay}
              onPress={() => {
                navigation.navigate('PlayEditorPage', { currentPlay: play });
              }}
            />
          ))}
        </ScrollView>
      )}
      <TouchableOpacity
        style={styles.footer}
        onPress={() => {
          navigation.navigate('PlayEditorPage', { currentPlay: newPlay() });
        }}
        testID="createPlay"
      >
        <View style={styles.createContainer}>
          <MaterialCommunityIcons style={styles.createIcon} name="plus" />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state) => {
  return {
    customPlays: state.customPlays,
  };
};

const mapDispatchToProps = { savePlay };

export default connect(mapStateToProps, mapDispatchToProps)(PlaybookPage);

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
    paddingBottom: 20,
    borderTopColor: theme.COLOR_SECONDARY_LIGHT,
    borderTopWidth: 1,
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
