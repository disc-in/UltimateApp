import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { deletePlay } from '../Store/Actions/playAction';
import I18n from '../utils/i18n';
import theme from '../styles/theme.style';

// Footer de la flatlist pour créer un nouveau
// Grid components

export const PlaybookPage = (props) => {
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
          showSuccess(I18n.t('playbookPage.deleteSuccess', { title: play.title }), modalFlash.current);
        },
      },
    ]);
  };

  return (
    <View style={styles.playbookPage}>
      <FlatList
        data={props.customPlays}
        keyExtractor={(item) => item.title}
        ListEmptyComponent={() => (
          <View>
            <Text>{I18n.t('playbookPage.empty')}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.play}>
            <TouchableOpacity
              style={styles.titleContainer}
              onPress={() => {
                props.navigation.navigate('PlayEditorPage', { currentPlay: item });
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconsContainer}>
              <MaterialCommunityIcons style={styles.icon} name="pencil" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconsContainer}
              onPress={() => {
                deletionConfirmation(item);
              }}
            >
              <MaterialCommunityIcons style={styles.icon} name="trash-can" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    customPlays: state.customPlays,
  };
};

const mapDispatchToProps = { deletePlay };

export default connect(mapStateToProps, mapDispatchToProps)(PlaybookPage);

const styles = StyleSheet.create({
  playbookPage: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
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
});
