import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import Drill from './animation/Drill';
import I18n from '../utils/i18n';
import { generateUuid } from '../utils/uuid';
import theme from '../styles/theme.style';
import { savePlay, deletePlay } from '../Store/Actions/playAction';
import AnimationEditor from './editor/AnimationEditor';
import SavePlay from './editor/toolbar/SavePlay';
import AnimationHistory from './editor/toolbar/AnimationHistory';
import SharePlay from './editor/toolbar/SharePlay';
import PlayTitle from './editor/PlayTitle';

export const PlayEditorPage = (props) => {
  const { navigation, route } = props;
  const [currentPlay, setCurrentPlay] = useState({
    ...route.params.currentPlay,
    animation: new Drill(route.params.currentPlay.animation),
  });

  // isPlaySaved is true unless there are unsaved changes on the current play
  const [isPlaySaved, setIsPlaySaved] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleContainerStyle: {
        ...Platform.select({
          ios: {
            marginLeft: 40,
            marginRight: 0,
            flexGrow: 1,
          },
        }),
      },
      headerTitle: () => <PlayTitle play={currentPlay} safe unsavedPlay={!isPlaySaved} onPress={() => {}} />,
    }),
      [];
  });

  const onAnimationChange = (animation) => {
    setCurrentPlay({ ...currentPlay, animation });
    setIsPlaySaved(false);
  };

  const saveCurrentPlay = () => {
    const defaultTitle = I18n.t('playEditorPage.untitledPlay');
    if (currentPlay.title === I18n.t('playEditorPage.untitledPlay')) {
      let newTitle = defaultTitle;

      let counter = 1;
      while (props.customPlays.findIndex((item) => item.title === newTitle) !== -1) {
        newTitle = defaultTitle + ' (' + counter + ')';
        counter += 1;
      }
      currentPlay.title = newTitle;
    }
    if (currentPlay.uuid === undefined) {
      currentPlay.uuid = generateUuid();
    }
    props.savePlay(currentPlay);
    setIsPlaySaved(true);
  };

  return (
    <View style={styles.playEditorPage}>
      <View style={styles.centeredView}>
        <AnimationEditor
          onAnimationChange={onAnimationChange}
          animation={currentPlay.animation}
          uuid={currentPlay.uuid}
        />
      </View>
      <View style={styles.toolBar}>
        <SavePlay currentPlay={currentPlay} saveCurrentPlay={saveCurrentPlay} />
        <AnimationHistory animation={currentPlay.animation} onAnimationHistoryChange={onAnimationChange} />
        <SharePlay currentPlay={currentPlay} />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    customPlays: state.customPlays,
  };
};

const mapDispatchToProps = { savePlay, deletePlay };

export default connect(mapStateToProps, mapDispatchToProps)(PlayEditorPage);

const styles = StyleSheet.create({
  playEditorPage: {
    flex: 1,
  },
  centeredView: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flex: 1,
  },
  toolBar: {
    height: '8%',
    minHeight: 40,
    width: '100%',
    backgroundColor: theme.COLOR_PRIMARY,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
