import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-native-paper';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import { saveDrill, deleteDrill } from '../Store/Actions/drillAction';
import AnimationEditor from './editor/AnimationEditor';
import CurrentDrillManager from './editor/CurrentDrillManager';
import SavedDrillsList from './editor/SavedDrillsList';
import RenameDrillModal from './editor/RenameDrillModal';

export const AnimationEditorPage = (props) => {
  const emptyDrill = {
    positions: [[], []],
    ids: [],
    texts: [],
    background: 'endzone',
  };

  // Current drill opened in the editor
  const [currentDrill, setCurrentDrill] = useState({
    drill: emptyDrill,
    title: undefined,
  });

  // modalRenameVisible is true if the modal which enables to rename the current drill is displayed
  const [modalRenameVisible, setModalRenameVisible] = useState(false);

  const navigation = props.navigation;

  // isDrillSaved is true if the current drill opened in the editor is:
  // - a new one which has not yet been edited;
  // - saved as is in redux (i.e., the latest modifications have been saved)
  const [isDrillSaved, setIsDrillSaved] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
          <SavedDrillsList
            savedDrills={props.customDrills}
            isDrillSaved={isDrillSaved}
            drillTitle={currentDrill.title}
            onDelete={onDelete}
            onOpen={openDrill}
            saveCurrentDrill={saveCurrentDrill}
          />
          <CurrentDrillManager
            currentDrill={currentDrill}
            save={saveCurrentDrill}
            rename={() => setModalRenameVisible(true)}
            new={checkModificationsBeforeCreatingNewDrill}
          />
        </View>
      ),
    }),
      [];
  });

  useEffect(() => {
    setTitle();
  }, [currentDrill, isDrillSaved]);

  const setTitle = () => {
    const drillTitle = currentDrill.title || I18n.t('animationEditorPage.untitledDrill');
    const unsavedAsterisk = isDrillSaved ? '' : ' *';
    const displayedTitle = `${drillTitle} ${unsavedAsterisk}`;

    navigation.setOptions({ headerTitle: displayedTitle });
  };

  const drillChangedInEditor = (drill) => {
    setCurrentDrill({ drill, title: currentDrill.title });
    setIsDrillSaved(false);
  };

  const saveCurrentDrill = () => {
    if (!currentDrill.title) {
      const defaultTitle = I18n.t('animationEditorPage.untitledDrill');
      let newTitle = defaultTitle;

      let counter = 1;
      while (props.customDrills.findIndex((item) => item.title === newTitle) !== -1) {
        newTitle = defaultTitle + ' (' + counter + ')';
        counter += 1;
      }
      currentDrill.title = newTitle;
    }
    props.saveDrill(currentDrill);
    setIsDrillSaved(true);
  };

  const openDrill = (drill) => {
    setCurrentDrill(drill);
    setIsDrillSaved(true);
  };

  // Called when the user wants to create a new drill
  const checkModificationsBeforeCreatingNewDrill = () => {
    if (isDrillSaved) createNewDrill();
    else {
      Alert.alert(
        I18n.t('editor.saveModificationsTitle'),
        I18n.t('editor.saveModificationsText', { title: currentDrill.title }),
        [
          {
            text: I18n.t('shared.cancel'),
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: I18n.t('shared.yes'),
            onPress: () => {
              saveCurrentDrill();
              createNewDrill();
            },
          },
          {
            text: I18n.t('shared.no'),
            onPress: () => {
              createNewDrill();
            },
          },
        ],
      );
    }
  };

  const createNewDrill = () => {
    setCurrentDrill({ drill: emptyDrill, title: undefined });
    setIsDrillSaved(true);
  };

  const onDelete = (drill) => {
    props.deleteDrill(drill.title);

    if (drill.title === currentDrill.title) createNewDrill();
  };

  return (
    <Provider>
      <View style={styles.centeredView}>
        {modalRenameVisible ? (
          <RenameDrillModal
            currentDrill={currentDrill}
            onRename={setTitle}
            close={() => setModalRenameVisible(false)}
          />
        ) : null}

        <AnimationEditor onAnimationChange={drillChangedInEditor} animation={currentDrill.drill} />
      </View>
    </Provider>
  );
};

const mapStateToProps = (state) => {
  return {
    customDrills: state.customDrills,
  };
};

const mapDispatchToProps = { saveDrill, deleteDrill };

export default connect(mapStateToProps, mapDispatchToProps)(AnimationEditorPage);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
