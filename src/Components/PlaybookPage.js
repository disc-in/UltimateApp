import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../styles/theme.style';
import { renamePlay, deletePlay } from '../Store/Actions/playAction';
import I18n from '../utils/i18n';
import { showSuccess } from '../utils/flashMessage';
import Drill from './animation/Drill';

const newPlay = {
  uuid: undefined,
  animation: new Drill(),
  title: I18n.t('playEditorPage.untitledPlay'),
};

export const PlaybookPage = (props) => {
  const Play = ({ play, editHandler }) => {
    const [title, setTitle] = useState(play.title);
    const [isEditing, setEdit] = useState(false);

    const handleEdit = () => {
      props.renamePlay(play.uuid, title);
      setEdit(false);
    };

    const deletionConfirmation = (play) => {
      Alert.alert(play.title, I18n.t('playbookPage.deleteConfirmation'), [
        {
          text: I18n.t('shared.cancel'),
          style: 'cancel',
        },
        {
          text: I18n.t('playbookPage.delete'),
          style: 'destructive',
          onPress: () => {
            props.deletePlay(play.uuid);
            showSuccess(I18n.t('playbookPage.deleteSuccess', { title: play.title }));
          },
        },
      ]);
    };
    return (
      <View style={styles.play}>
        <TouchableOpacity
          style={styles.titleContainer}
          onPress={() => {
            props.navigation.navigate('PlayEditorPage', { currentPlay: play });
          }}
        >
          {isEditing ? (
            <TextInput autoFocus value={title} onChangeText={setTitle} onSubmitEditing={handleEdit} />
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
        </TouchableOpacity>
        {isEditing ? (
          <TouchableOpacity onPress={handleEdit} style={styles.iconsContainer}>
            <MaterialCommunityIcons style={styles.icon} name="check" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setEdit(true)} style={styles.iconsContainer}>
            <MaterialCommunityIcons style={styles.icon} name="pencil" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.iconsContainer}
          onPress={() => {
            deletionConfirmation(play);
          }}
        >
          <MaterialCommunityIcons style={styles.icon} name="trash-can" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.playbookPage}>
      <FlatList
        data={props.customPlays}
        keyExtractor={(item) => item.title}
        ListEmptyComponent={() => (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>{I18n.t('playbookPage.empty')}</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity
            style={styles.footer}
            onPress={() => {
              props.navigation.navigate('PlayEditorPage', { currentPlay: newPlay });
            }}
          >
            <View style={styles.createContainer}>
              <MaterialCommunityIcons style={styles.createIcon} name="plus" />
            </View>
          </TouchableOpacity>
        )}
        renderItem={({ item }) => <Play play={item} />}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    customPlays: state.customPlays,
  };
};

const mapDispatchToProps = { renamePlay, deletePlay };

export default connect(mapStateToProps, mapDispatchToProps)(PlaybookPage);

const styles = StyleSheet.create({
  playbookPage: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  empty: {
    marginTop: '30%',
    padding: 30,
  },
  emptyText: {
    textAlign: 'center',
  },
  play: {
    flex: 1,
    flexDirection: 'row',
  },
  titleContainer: {
    height: 60,
    padding: 10,
    paddingLeft: 20,
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  iconsContainer: {
    height: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: theme.COLOR_PRIMARY,
    fontSize: theme.FONT_SIZE_LARGE,
  },
  footer: {
    height: 50,
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: theme.MAIN_COLOR,
    borderWidth: StyleSheet.hairlineWidth,
  },
  createIcon: {
    fontSize: 40,
    fontWeight: 'bold',
    color: theme.MAIN_COLOR,
  },
});
