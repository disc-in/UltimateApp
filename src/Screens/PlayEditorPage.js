import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import { savePlay } from '../Store/Actions/playAction';
import Drill from '../Components/animation/Drill';
import PlayTitle from '../Components/editor/PlayTitle';
import AnimationEditor from '../Components/editor/AnimationEditor';
import AnimationHistory from '../Components/editor/toolbar/AnimationHistory';
import SharePlay from '../Components/editor/toolbar/SharePlay';

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
    setIsPlaySaved(false);
    const newPlay = { ...currentPlay, animation };
    setCurrentPlay(newPlay);
    props.savePlay(newPlay);
    setTimeout(() => setIsPlaySaved(true), 1000);
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
        <View style={styles.toolBarItem}>
          <AnimationHistory animation={currentPlay.animation} onAnimationHistoryChange={onAnimationChange} />
        </View>
        <View style={styles.separator} />
        <View style={styles.toolBarItem}>
          <SharePlay currentPlay={currentPlay} />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    customPlays: state.customPlays,
  };
};

const mapDispatchToProps = { savePlay };

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
  toolBarItem: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  separator: {
    height: '70%',
    borderRightWidth: 0.5,
    borderRightColor: theme.COLOR_SECONDARY,
  },
});
