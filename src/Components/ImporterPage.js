import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    navigation.navigate('PlayEditorPage', { currentPlay: importedPlay });
  };

  const cancel = () => {
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.importerPage}>
      <MaterialCommunityIcons name="download" size={72} />
      {importedPlay ? (
        <View>
          <Text style={styles.text}>{I18n.t('importerPage.incentive', { title: importedPlay.title })}</Text>
          <Text style={styles.text}>{I18n.t('importerPage.question')}</Text>
          <View style={styles.ctaArea}>
            <CtaButton style={styles.cta} text={I18n.t('shared.yes')} onPress={save} />
            <CtaButton style={styles.cta} text={I18n.t('shared.cancel')} onPress={cancel} buttonLight />
          </View>
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
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  text: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginBottom: 5,
  },
  ctaArea: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cta: {
    width: 120,
  },
});
