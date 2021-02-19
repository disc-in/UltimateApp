import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';
import { renamePlay, deletePlay } from '../../Store/Actions/playAction';
import { showSuccess } from '../../utils/flashMessage';
import I18n from '../../utils/i18n';

export const PlayTitle = ({ play, onPress, customPlays, renamePlay, deletePlay, safe, unsavedPlay, style }) => {
  const [title, setTitle] = useState(play.title);
  const [error, setError] = useState();
  const [isEditing, setEdit] = useState(false);

  const handleEdit = () => {
    if (!error) {
      renamePlay(play.uuid, title);
      setEdit(false);
    }
  };

  const handleChange = (value) => {
    setTitle(value);
    if (value.length === 0) {
      setError(I18n.t('editor.playTitle.empty'));
    } else if (
      customPlays.filter((existingPlay) => existingPlay.uuid != play.uuid && existingPlay.title === value).length > 0
    ) {
      setError(I18n.t('editor.playTitle.alreadyExists'));
    } else {
      setError();
    }
  };

  const deletionConfirmation = (play) => {
    Alert.alert(play.title, I18n.t('editor.playTitle.deleteConfirmation'), [
      {
        text: I18n.t('shared.cancel'),
        style: 'cancel',
        onPress: () => {},
      },
      {
        text: I18n.t('editor.playTitle.delete'),
        style: 'destructive',
        onPress: () => {
          deletePlay(play.uuid);
          showSuccess(I18n.t('editor.playTitle.deleteSuccess', { title: play.title }));
        },
      },
    ]);
  };

  const unsavedAsterisk = unsavedPlay ? '* ' : '';

  return (
    <View style={[styles.play, style]}>
      <TouchableOpacity style={styles.titleContainer} onPress={onPress}>
        {isEditing ? (
          <>
            <TextInput
              autoFocus
              style={styles.titleInput}
              placeholder={I18n.t('editor.playTitle.placeholder')}
              value={title}
              onChangeText={handleChange}
              onSubmitEditing={handleEdit}
              onBlur={handleEdit}
            />
            {error && <Text style={styles.error}>{error}</Text>}
          </>
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

const mapStateToProps = (state) => {
  return {
    customPlays: state.customPlays,
  };
};

const mapDispatchToProps = { renamePlay, deletePlay };

export default connect(mapStateToProps, mapDispatchToProps)(PlayTitle);

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
  error: {
    fontStyle: 'italic',
    color: 'red',
  },
});
