import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../utils/i18n';
import { saveDrill, deleteDrill } from '../Store/Actions/drillAction';
import AnimationEditor from './editor/AnimationEditor';
import CurrentDrillManager from './editor/CurrentDrillManager';
import SavedDrillsList from './editor/SavedDrillsList';
import RenameDrillModal from './editor/RenameDrillModal';

const newDrill = {
  drill: {
    positions: [[], []],
    ids: [],
    texts: [],
    background: 'endzone',
  },
  title: I18n.t('animationEditorPage.untitledDrill'),
};

export const AnimationEditorPage = (props) => {
  const [currentDrill, setCurrentDrill] = useState(newDrill);

  // modalRenameVisible is true if the modal which enables to rename the current drill is displayed
  const [modalRenameVisible, setModalRenameVisible] = useState(false);

  // isDrillSaved is true unless there are unsaved changes on the current drill
  const [isDrillSaved, setIsDrillSaved] = useState(true);

  useLayoutEffect(() => {
    props.navigation.setOptions({
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
            isDrillSaved={isDrillSaved}
            save={saveCurrentDrill}
            new={createNewDrill}
            rename={() => setModalRenameVisible(true)}
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

    props.navigation.setOptions({ headerTitle: displayedTitle });
  };

  const drillChangedInEditor = (drill) => {
    setCurrentDrill({ drill, title: currentDrill.title });
    setIsDrillSaved(false);
  };

  const saveCurrentDrill = () => {
    const defaultTitle = I18n.t('animationEditorPage.untitledDrill');
    if (currentDrill.title == I18n.t('animationEditorPage.untitledDrill')) {
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

  const createNewDrill = () => {
    setCurrentDrill(newDrill);
    setIsDrillSaved(true);
  };

  const onDelete = (drill) => {
    props.deleteDrill(drill.title);

    if (drill.title === currentDrill.title) createNewDrill();
  };

  return (
    <View style={styles.centeredView}>
      {modalRenameVisible ? (
        <RenameDrillModal currentDrill={currentDrill} onRename={setTitle} close={() => setModalRenameVisible(false)} />
      ) : null}

      <AnimationEditor onAnimationChange={drillChangedInEditor} animation={currentDrill.drill} />
    </View>
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
