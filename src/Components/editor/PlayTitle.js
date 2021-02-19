import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';
import { renamePlay, deletePlay } from '../../Store/Actions/playAction';
import { showSuccess } from '../../utils/flashMessage';
import I18n from '../../utils/i18n';

export const PlayTitle = ({ play, onPress, renamePlay, deletePlay, safe, unsavedPlay, style }) => {
  const [title, setTitle] = useState(play.title);
  const [isEditing, setEdit] = useState(false);

  const handleEdit = () => {
    renamePlay(play.uuid, title);
    setEdit(false);
  };

  const deletionConfirmation = (play) => {
    Alert.alert(play.title, I18n.t('playbookPage.deleteConfirmation'), [
      {
        text: I18n.t('shared.cancel'),
        style: 'cancel',
        onPress: () => {},
      },
      {
        text: I18n.t('playbookPage.delete'),
        style: 'destructive',
        onPress: () => {
          deletePlay(play.uuid);
          showSuccess(I18n.t('playbookPage.deleteSuccess', { title: play.title }));
        },
      },
    ]);
  };

  const unsavedAsterisk = unsavedPlay ? '* ' : '';

  return (
    <View style={[styles.play, style]}>
      <TouchableOpacity style={styles.titleContainer} onPress={onPress}>
        {isEditing ? (
          <TextInput
            autoFocus
            style={styles.titleInput}
            value={title}
            onChangeText={setTitle}
            onSubmitEditing={handleEdit}
            onBlur={handleEdit}
          />
        ) : (
          <Text numberOfLines={1} style={styles.title}>
            {unsavedAsterisk}
            {title}
          </Text>
        )}
      </TouchableOpacity>
      {isEditing ? (
        <TouchableOpacity onPress={handleEdit} style={styles.iconsContainer} testID="update">
          <MaterialCommunityIcons style={styles.icon} name="check-bold" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setEdit(true)} style={styles.iconsContainer} testID="edit">
          <MaterialCommunityIcons style={styles.icon} name="pencil" />
        </TouchableOpacity>
      )}
      {!safe && (
        <TouchableOpacity
          style={styles.iconsContainer}
          testID="delete"
          onPress={() => {
            deletionConfirmation(play);
          }}
        >
          <MaterialCommunityIcons style={styles.icon} name="trash-can" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const mapDispatchToProps = { renamePlay, deletePlay };

export default connect(null, mapDispatchToProps)(PlayTitle);

const styles = StyleSheet.create({
  play: {
    flex: 1,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  titleInput: {
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    padding: 5,
  },
  iconsContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_LARGE,
  },
});
