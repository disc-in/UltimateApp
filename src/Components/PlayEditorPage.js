import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import { generateUuid } from '../utils/uuid';
import theme from '../styles/theme.style';
import { savePlay, deletePlay } from '../Store/Actions/playAction';
import AnimationEditor from './editor/AnimationEditor';
import CurrentPlayManager from './editor/CurrentPlayManager';
import SavedPlaysList from './editor/SavedPlaysList';
import RenamePlayModal from './editor/RenamePlayModal';

const newPlay = {
  uuid: undefined,
  animation: {
    positions: [[], []],
    ids: [],
    texts: [],
    background: 'endzone',
  },
  title: I18n.t('playEditorPage.untitledPlay'),
};

export const PlayEditorPage = (props) => {
  const [currentPlay, setCurrentPlay] = useState(newPlay);

  // modalRenameVisible is true if the modal which enables to rename the current play is displayed
  const [modalRenameVisible, setModalRenameVisible] = useState(false);

  // isPlaySaved is true unless there are unsaved changes on the current play
  const [isPlaySaved, setIsPlaySaved] = useState(true);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <SavedPlaysList
            savedPlays={props.customPlays}
            isPlaySaved={isPlaySaved}
            playTitle={currentPlay.title}
            onDelete={onDelete}
            onOpen={openPlay}
            saveCurrentPlay={saveCurrentPlay}
          />
          <CurrentPlayManager
            currentPlay={currentPlay}
            isPlaySaved={isPlaySaved}
            save={saveCurrentPlay}
            new={createNewPlay}
            rename={() => setModalRenameVisible(true)}
          />
        </View>
      ),
    }),
      [];
  });

  useEffect(() => {
    setTitle();
  }, [currentPlay, isPlaySaved]);

  const setTitle = () => {
    const playTitle = currentPlay.title || I18n.t('playEditorPage.untitledPlay');
    const unsavedAsterisk = isPlaySaved ? '' : '* ';
    const displayedTitle = `${unsavedAsterisk}${playTitle}`;

    props.navigation.setOptions({ headerTitle: displayedTitle });
  };

  const onAnimationChange = (animation) => {
    setCurrentPlay({ ...currentPlay, animation });
    setIsPlaySaved(false);
  };

  const saveCurrentPlay = () => {
    const defaultTitle = I18n.t('playEditorPage.untitledPlay');
    if (currentPlay.title == I18n.t('playEditorPage.untitledPlay')) {
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

  const openPlay = (play) => {
    setCurrentPlay(play);
    setIsPlaySaved(true);
  };

  const createNewPlay = () => {
    setCurrentPlay(newPlay);
    setIsPlaySaved(true);
  };

  const onDelete = (play) => {
    props.deletePlay(play.title);

    if (play.title === currentPlay.title) createNewPlay();
  };

  return (
    <View style={styles.centeredView}>
      {modalRenameVisible ? (
        <RenamePlayModal currentPlay={currentPlay} onRename={setTitle} close={() => setModalRenameVisible(false)} />
      ) : null}

      <AnimationEditor onAnimationChange={onAnimationChange} animation={currentPlay.animation} />
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
  centeredView: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flex: 1,
  },
});
