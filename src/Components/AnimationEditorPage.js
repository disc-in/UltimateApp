import React, { useState, useLayoutEffect } from 'react';
import { Share, StyleSheet, View, Alert } from 'react-native';
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
  // Current drill opened in the editor
  const [currentDrill, setCurrentDrill] = useState(null);

  // modalRenameVisible is true if the modal which enables to rename the current drill is displayed
  const [modalRenameVisible, setModalRenameVisible] = useState(false);

  // Name of the current drill (correspond to its name in redux)
  const [drillTitle, setDrillTitle] = useState(I18n.t('drillEditor.untitledDrill'));

  // drillTempTitle contains the temporary name of the title. If the drill is saved it will be assigned this new name if it is different from drillTitle
  const [drillTempTitle, setDrillTempTitle] = useState('');

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
            drillTitle={drillTitle}
            onDelete={onDelete}
            onOpen={openDrill}
            saveCurrentDrill={saveCurrentDrill}
          />
          <CurrentDrillManager
            save={saveLocally}
            rename={() => setModalRenameVisible(true)}
            contribute={doShare}
            new={checkModificationsBeforeCreatingNewDrill}
          />
        </View>
      ),
    });
  });

  const drillChangedInEditor = (drill) => {
    setCurrentDrill(drill);
    setIsDrillSaved(false);

    navigation.setOptions({ headerTitle: drillTitle + ' *' });
  };

  // Called when the user choose for the drill a title which is already used by another drill
  const askOverwriteDrill = () => {
    Alert.alert(I18n.t('drillEditor.drillManager.alreadyUsedTitle'), I18n.t('drillEditor.drillManager.askOverwrite'), [
      {
        text: I18n.t('drillEditor.drillManager.cancel'),
        style: 'cancel',
        onPress: () => {
          setModalRenameVisible(true);
        },
      },
      {
        text: I18n.t('drillEditor.drillManager.overwrite'),
        onPress: () => {
          props.saveDrill({ title: drillTempTitle, oldTitle: drillTitle, value: currentDrill });
          setDrillTitle(drillTempTitle);
          setIsDrillSaved(true);
          navigation.setOptions({ headerTitle: drillTempTitle });
        },
      },
    ]);
  };

  const updateTitle = () => {
    // If the title has changed
    if (drillTempTitle !== drillTitle) {
      const drillIndex = props.customDrills.findIndex((item) => item.title === drillTempTitle);

      // If the new title is already given to another drill
      if (drillIndex !== -1) askOverwriteDrill();
      // Otherwise, send the updated drill to the store
      else {
        props.saveDrill({ title: drillTempTitle, oldTitle: drillTitle, drill: currentDrill });
        setDrillTitle(drillTempTitle);
        setIsDrillSaved(true);
        navigation.setOptions({ headerTitle: drillTempTitle });
      }
    }
  };

  const saveLocally = (title) => {
    props.saveDrill({ title: drillTitle, drill: currentDrill });
    setIsDrillSaved(true);
    navigation.setOptions({ headerTitle: drillTitle });
  };

  const doShare = () => {
    Share.share({
      title: I18n.t('drillEditor.sharePlaceholder'),
      message: '----- ENCODED DRILL -------\n' + JSON.stringify(currentDrill) + '\n---------------------------',
    }).catch((err) => console.log(err));
  };

  const saveCurrentDrill = () => {
    props.saveDrill({ title: drillTitle, drill: currentDrill });
  };

  const openDrill = (drill) => {
    setDrillTitle(drill.title);
    navigation.setOptions({ headerTitle: drill.title });
    setDrillTempTitle(drill.title);
    setCurrentDrill(drill.drill);
    setIsDrillSaved(true);
  };

  // Called when the user wants to create a new drill
  const checkModificationsBeforeCreatingNewDrill = () => {
    if (isDrillSaved) createNewDrill();
    else {
      Alert.alert(
        I18n.t('drillEditor.drillManager.saveModificationsTitle'),
        I18n.t('drillEditor.drillManager.saveModificationsText', { title: drillTitle }),
        [
          {
            text: I18n.t('drillEditor.drillManager.cancel'),
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: I18n.t('drillEditor.drillManager.yes'),
            onPress: () => {
              props.saveDrill({ title: drillTitle, drill: currentDrill });
              createNewDrill();
            },
          },
          {
            text: I18n.t('drillEditor.drillManager.no'),
            onPress: () => {
              createNewDrill();
            },
          },
        ],
      );
    }
  };

  const createNewDrill = () => {
    const emptyDrill = {
      positions: [[], []],
      ids: [],
      texts: [],
      background: 'endzone',
    };

    // Create the title of the new drill
    const defaultTitle = I18n.t('drillEditor.untitledDrill');
    let newTitle = defaultTitle;

    const titleId = props.customDrills.findIndex((item) => item.title === newTitle);

    // If a saved drill already has the default title
    if (titleId !== -1) {
      let counter = 1;

      do {
        newTitle = defaultTitle + ' (' + counter + ')';
        counter += 1;
      } while (props.customDrills.findIndex((item) => item.title === newTitle) !== -1);
    }

    setCurrentDrill(emptyDrill);
    setIsDrillSaved(true);
    setDrillTitle(newTitle);
    setDrillTempTitle(newTitle);
    navigation.setOptions({ headerTitle: newTitle });
  };

  const onDelete = (drill) => {
    props.deleteDrill(drill.title);

    if (drill.title === drillTitle) createNewDrill();
  };

  return (
    <Provider>
      <View style={styles.centeredView}>
        {modalRenameVisible ? (
          <RenameDrillModal
            drillTitle={drillTitle}
            textModified={(title) => setDrillTempTitle(title)}
            confirmNewName={() => updateTitle()}
            close={() => setModalRenameVisible(false)}
          />
        ) : null}

        <AnimationEditor onAnimationChange={drillChangedInEditor} animation={currentDrill} />
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
