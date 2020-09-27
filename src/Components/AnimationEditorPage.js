import React, { useState, useLayoutEffect } from 'react';
import { Share, StyleSheet, View, Alert } from 'react-native';

import { Provider } from 'react-native-paper';

import I18n from '../utils/i18n';
import AnimationEditor from './animation/AnimationEditor';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import CurrentDrillManager from './animation/CurrentDrillManager';
import SavedDrillModal from './animation/SavedDrillModal';
import RenameDrillModal from './animation/RenameDrillModal';

import theme from '../styles/theme.style';

import { connect } from 'react-redux';
import { saveDrill, deleteDrill } from '../Store/Actions/drillAction';

export const AnimationEditorPage = props => {
  // Current drill opened in the editor
  const [currentDrillState, setDrillState] = useState(null);

  // modalRenameVisible is true if the modal which enables to rename the current drill is displayed
  const [modalRenameVisible, setModalRenameVisible] = useState(false);

  // modalOpenVisible is true if the modal which enables to open or delete saved drills is displayed
  const [modalOpenVisible, setModalOpenVisible] = useState(false);

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
          {/* Display the button to open drills only if there is at least one saved drill */}
          {props.customeDrills.length > 0 ? (
            <Ionicons
              style={{ paddingRight: 10 }}
              name="md-clipboard"
              size={26}
              onPress={() => setModalOpenVisible(true)}
            />
          ) : null}
          <MaterialCommunityIcons
            name="plus"
            color={theme.COLOR_PRIMARY}
            size={26}
            onPress={() => checkModificationsBeforeCreatingNewDrill()}
          />
          <CurrentDrillManager save={saveLocally} rename={() => setModalRenameVisible(true)} contribute={doShare} />
        </View>
      ),
    });
  });

  const drillChangedInEditor = drill => {
    setDrillState(drill);
    setIsDrillSaved(false);

    navigation.setOptions({ headerTitle: drillTitle + ' *' });
  };

  // Called when the user choose for the drill a title which is already used by another drill
  const askOverwriteDrill = () => {
    Alert.alert(
      I18n.t('drillEditor.drillManager.alreadyUsedTitle'),
      I18n.t('drillEditor.drillManager.askOverwrite'),
      [
        {
          text: I18n.t('drillEditor.drillManager.cancel'),
          style: 'cancel',
          onPress: () => {
            setModalRenameVisible(true);
          },
        },
        {
          text: I18n.t('drillEditor.drillManager.validate'),
          onPress: () => {
            props.saveDrill({ title: drillTempTitle, oldTitle: drillTitle, value: currentDrillState });
            setDrillTitle(drillTempTitle);
            setIsDrillSaved(true);
            navigation.setOptions({ headerTitle: drillTempTitle });
          },
        },
      ],
      'secure-text',
    );
  };

  const updateTitle = () => {
    // If the title has changed
    if (drillTempTitle !== drillTitle) {
      const drillIndex = props.customeDrills.findIndex(item => item.title === drillTempTitle);

      // If the new title is already given to another drill
      if (drillIndex !== -1) askOverwriteDrill();
      // Otherwise, send the updated drill to the store
      else {
        props.saveDrill({ title: drillTempTitle, oldTitle: drillTitle, drill: currentDrillState });
        setDrillTitle(drillTempTitle);
        setIsDrillSaved(true);
        navigation.setOptions({ headerTitle: drillTempTitle });
      }
    }
  };

  // Called when the user choose for the drill a title which is already used by another drill
  const askConfirmationToDelete = drill => {
    Alert.alert(
      drill.title,
      I18n.t('drillEditor.drillManager.deleteConfirmation'),
      [
        {
          text: I18n.t('drillEditor.drillManager.cancel'),
          style: 'cancel',
          onPress: () => {
            setModalOpenVisible(true);
          },
        },
        {
          text: I18n.t('drillEditor.drillManager.validate'),
          onPress: () => {
            deleteDrill(drill);
          },
        },
      ],
      'secure-text',
    );
  };

  const saveLocally = title => {
    props.saveDrill({ title: drillTitle, drill: currentDrillState });
    setIsDrillSaved(true);
    navigation.setOptions({ headerTitle: drillTitle });
  };

  const doShare = () => {
    Share.share({
      title: I18n.t('drillEditor.sharePlaceholder'),
      message: '----- ENCODED DRILL -------\n' + JSON.stringify(currentDrillState) + '\n---------------------------',
    }).catch(err => console.log(err));
  };

  // Called when the user wants to open a drill
  const checkModificationsBeforeOpening = drill => {
    if (isDrillSaved) openDrill(drill);
    else {
      Alert.alert(
        I18n.t('drillEditor.drillManager.saveModifications'),
        I18n.t('drillEditor.drillManager.saveModifications2') +
          drillTitle +
          I18n.t('drillEditor.drillManager.saveModifications3'),
        [
          {
            text: I18n.t('drillEditor.drillManager.cancel'),
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: I18n.t('drillEditor.drillManager.saveAndOpen'),
            onPress: () => {
              props.saveDrill({ title: drillTitle, drill: currentDrillState });
              openDrill(drill);
            },
          },
          {
            text: I18n.t('drillEditor.drillManager.openWithoutSaving'),
            onPress: () => {
              openDrill(drill);
            },
          },
        ],
        'secure-text',
      );
    }
  };

  const openDrill = drill => {
    setDrillTitle(drill.title);
    navigation.setOptions({ headerTitle: drill.title });
    setDrillTempTitle(drill.title);
    setDrillState(drill.drill);
    setIsDrillSaved(true);
  };

  // Called when the user wants to create a new drill
  const checkModificationsBeforeCreatingNewDrill = () => {
    if (isDrillSaved) createNewDrill();
    else {
      Alert.alert(
        I18n.t('drillEditor.drillManager.saveModifications'),
        I18n.t('drillEditor.drillManager.saveModifications2') +
          drillTitle +
          I18n.t('drillEditor.drillManager.saveModifications3'),
        [
          {
            text: I18n.t('drillEditor.drillManager.cancel'),
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: I18n.t('drillEditor.drillManager.saveAndCreate'),
            onPress: () => {
              props.saveDrill({ title: drillTitle, drill: currentDrillState });
              createNewDrill();
            },
          },
          {
            text: I18n.t('drillEditor.drillManager.createWithoutSaving'),
            onPress: () => {
              createNewDrill();
            },
          },
        ],
        'secure-text',
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

    const titleId = props.customeDrills.findIndex(item => item.title === newTitle);

    // If a saved drill already has the default title
    if (titleId !== -1) {
      let counter = 1;

      do {
        newTitle = defaultTitle + ' (' + counter + ')';
        counter += 1;
      } while (props.customeDrills.findIndex(item => item.title === newTitle) !== -1);
    }

    setDrillState(emptyDrill);
    setIsDrillSaved(true);
    setDrillTitle(newTitle);
    setDrillTempTitle(newTitle);
    navigation.setOptions({ headerTitle: newTitle });
  };

  const deleteDrill = item => {
    // Envoyer l'action de suppression
    props.deleteDrill(item.title);

    if (item.title === drillTitle) createNewDrill();
  };

  return (
    <Provider>
      <View style={styles.centeredView}>
        {modalOpenVisible ? (
          <SavedDrillModal
            savedDrills={props.customeDrills}
            openDrill={drill => checkModificationsBeforeOpening(drill)}
            deleteDrill={item => askConfirmationToDelete(item)}
            close={() => setModalOpenVisible(false)}
          />
        ) : null}
        {modalRenameVisible ? (
          <RenameDrillModal
            drillTitle={drillTitle}
            textModified={title => setDrillTempTitle(title)}
            confirmNewName={() => updateTitle()}
            close={() => setModalRenameVisible(false)}
          />
        ) : null}

        <AnimationEditor onAnimationChange={drillChangedInEditor} animation={currentDrillState} />
      </View>
    </Provider>
  );
};

const mapStateToProps = state => {
  return {
    customeDrills: state.customeDrills,
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
