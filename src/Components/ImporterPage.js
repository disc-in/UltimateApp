import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import theme from '../styles/theme.style';
import I18n from '../utils/i18n';
import { download } from '../utils/firebase';
import { savePlay } from '../Store/Actions/playAction';
import CtaButton from './shared/Button';

export const ImporterPage = (props) => {
  const { navigation, route } = props;

  const [importedPlay, setImportedPlay] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const play = await download(route.params.uuid);
        setImportedPlay(play);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const save = () => {
    props.savePlay(importedPlay);
    navigation.navigate('PlayEditorPage');
  };

  const cancel = () => {
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.importerPage}>
      {importedPlay ? (
        <View>
          <Text>{I18n.t('importerPage.incentive', { title: importedPlay.title })}</Text>
          <Text>{I18n.t('importerPage.question')}</Text>
          <Text>{importedPlay?.title}</Text>
          <CtaButton text={I18n.t('shared.yes')} onPress={save} />
          <CtaButton text={I18n.t('shared.cancel')} onPress={cancel} buttonLight />
        </View>
      ) : (
        <Text>{I18n.t('importerPage.loading')}</Text>
      )}
    </View>
  );
};

const mapDispatchToProps = { savePlay };

export default connect(null, mapDispatchToProps)(ImporterPage);

const styles = StyleSheet.create({
  importerPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flex: 1,
  },
});
