import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Share } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import { generateUuid } from '../utils/uuid';
import theme from '../styles/theme.style';
import { savePlay, deletePlay, renamePlay } from '../Store/Actions/playAction';
import AnimationEditor from './editor/AnimationEditor';
import SavedPlaysList from './editor/SavedPlaysList';
import RenamePlayModal from './editor/RenamePlayModal';
import Drill from './animation/Drill';
import { upload } from '../utils/firebase';
import { showSuccess, showError } from '../utils/flashMessage';
import * as Linking from 'expo-linking';

const newPlay = {
  uuid: undefined,
  animation: new Drill(),
  title: I18n.t('playEditorPage.untitledPlay'),
};

export const PlayEditorPage = (props) => {
  const { navigation, route } = props;
  const [currentPlay, setCurrentPlay] = useState(route.params ? route.params.currentPlay : newPlay);

  // modalRenameVisible is true if the modal which enables to rename the current play is displayed
  const [modalRenameVisible, setModalRenameVisible] = useState(false);

  // isPlaySaved is true unless there are unsaved changes on the current play
  const [isPlaySaved, setIsPlaySaved] = useState(true);

  useLayoutEffect(() => {
    console.log('BRAVOOOOO LE CODE N A PAS BUGGE JUSQUA LA', props.customPlays);
    navigation.setOptions({
      headerRight: () => (
        <View>
          <TouchableOpacity onPress={() => setModalRenameVisible(true)} testID="shareButton">
            <MaterialCommunityIcons name="pencil" color={theme.COLOR_PRIMARY} size={28} style={{ marginRight: 20 }} />
          </TouchableOpacity>
        </View>
      ),
    }),
      [];
  });

  useEffect(() => {
    setTitle();
  }, [currentPlay, isPlaySaved]);

  const share = async () => {
    try {
      await upload(props.currentPlay);
      const url = Linking.makeUrl('customPlays/' + currentPlay.uuid);
      await Share.share({
        title: I18n.t('editor.currentPlayManager.shareTitle', { title: currentPlay.title }),
        message: I18n.t('editor.currentPlayManager.shareMessage', { url }),
        url,
      });
    } catch (error) {
      showError(I18n.t('editor.currentPlayManager.shareError'));
    }
  };

  const checkBeforeNewPlay = () => {
    if (isPlaySaved) {
      createNewPlay();
    } else {
      Alert.alert(
        I18n.t('editor.saveModificationsTitle'),
        I18n.t('editor.saveModificationsText', { title: currentPlay.title }),
        [
          {
            text: I18n.t('shared.cancel'),
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: I18n.t('shared.yes'),
            onPress: () => {
              saveCurrentPlay();
              showSuccess(I18n.t('editor.currentPlayManager.saveSuccess', { title: currentPlay.title }));
              createNewPlay();
            },
          },
          {
            text: I18n.t('shared.no'),
            onPress: () => {
              createNewPlay();
            },
          },
        ],
      );
    }
  };

  const setTitle = () => {
    const playTitle = currentPlay.title || I18n.t('playEditorPage.untitledPlay');
    const unsavedAsterisk = isPlaySaved ? '' : '* ';
    const displayedTitle = `${unsavedAsterisk}${playTitle}`;

    navigation.setOptions({ headerTitle: displayedTitle });
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
    props.deletePlay(play.uuid);

    if (play.title === currentPlay.title) createNewPlay();
  };
  return (
    <View style={styles.allPage}>
      <View style={styles.centeredView}>
        {modalRenameVisible ? (
          <RenamePlayModal currentPlay={currentPlay} onRename={setTitle} close={() => setModalRenameVisible(false)} />
        ) : null}
        <AnimationEditor
          onAnimationChange={onAnimationChange}
          animation={currentPlay.animation}
          currentPlay={currentPlay}
          isPlaySaved={isPlaySaved}
          save={saveCurrentPlay}
          new={createNewPlay}
          rename={() => setModalRenameVisible(true)}
        />
      </View>
      {/* <View style={styles.toolBar}>
        <SavedPlaysList
          savedPlays={props.customPlays}
          isPlaySaved={isPlaySaved}
          playTitle={currentPlay.title}
          onDelete={onDelete}
          onOpen={openPlay}
          saveCurrentPlay={saveCurrentPlay}
        />
        <TouchableOpacity onPress={() => checkBeforeNewPlay()} testID="plusButton">
          <MaterialCommunityIcons name="plus" color={theme.COLOR_PRIMARY_LIGHT} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            saveCurrentPlay();
            showSuccess(I18n.t('editor.currentPlayManager.saveSuccess', { title: currentPlay.title }));
          }}
          testID="saveButton"
        >
          <MaterialCommunityIcons name="content-save" color={theme.COLOR_PRIMARY_LIGHT} size={30} />
        </TouchableOpacity>

        <View style={styles.undo}>
          <TouchableOpacity onPress={() => saveCurrentPlay()} testID="shareButton">
            <MaterialCommunityIcons name="undo-variant" color={theme.COLOR_SECONDARY} size={30} />
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity onPress={() => saveCurrentPlay()} testID="shareButton">
            <MaterialCommunityIcons name="redo-variant" color={theme.COLOR_SECONDARY} size={30} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => share(currentPlay)} testID="shareButton">
          <Ionicons name="ios-share" color={theme.COLOR_PRIMARY_LIGHT} size={30} />
        </TouchableOpacity>
      </View> */}
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
  toolBar: {
    height: '8%',
    width: '100%',
    backgroundColor: theme.COLOR_PRIMARY,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  allPage: {
    height: '100%',
  },
  undo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    height: 35,
    borderRightWidth: 2,
    borderRightColor: theme.COLOR_SECONDARY,
    marginHorizontal: 15,
  },
});
