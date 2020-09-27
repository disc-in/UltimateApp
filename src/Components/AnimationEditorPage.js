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
  // CurrentDrillState is an object which contains:
  // - String title: the current title of the drill
  // - Drill drill: an object which represents the drill (positions of the elements, their number, ...)
  // - String oldTitle: (optional) previous name of the drill (in case it must be renamed)
  const [currentDrillState, saveDrillState] = useState(null);

  // modalRenameVisible is true if the modal which enables to rename the current drill is displayed
  const [modalRenameVisible, setModalRenameVisible] = useState(false);

  // modalOpenVisible is true if the modal which enables to open or delete saved drills is displayed
  const [modalOpenVisible, setModalOpenVisible] = useState(false);

  // Name of the current drill (correspond to its name in redux)
  const [drillTitle, setDrillTitle] = useState(I18n.t('drillEditor.untitledDrill'));

  // drillTempTitle contains the temporary name of the title. If the drill is saved it will be assigned this new name if it is different from drillTitle
  const [drillTempTitle, setDrillTempTitle] = useState('');
  const navigation = props.navigation;

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
          <MaterialCommunityIcons name="plus" color={theme.COLOR_PRIMARY} size={26} onPress={() => createNewDrill()} />
          <CurrentDrillManager save={saveLocally} rename={() => setModalRenameVisible(true)} contribute={doShare} />
        </View>
      ),
    });
  });

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
        navigation.setOptions({ headerTitle: drillTempTitle });
      }
    }
  };

  const saveLocally = title => {
    props.saveDrill({ title: drillTitle, drill: currentDrillState });
  };

  const doShare = () => {
    Share.share({
      title: I18n.t('drillEditor.sharePlaceholder'),
      message: '----- ENCODED DRILL -------\n' + JSON.stringify(currentDrillState) + '\n---------------------------',
    }).catch(err => console.log(err));
  };

  const openDrill = item => {
    setDrillTitle(item.title);
    navigation.setOptions({ headerTitle: item.title });
    setDrillTempTitle(item.title);
    saveDrillState(item.drill);
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

    saveDrillState(emptyDrill);
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
            openDrill={item => openDrill(item)}
            deleteDrill={item => deleteDrill(item)}
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

        <AnimationEditor onAnimationChange={saveDrillState} animation={currentDrillState} />
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
