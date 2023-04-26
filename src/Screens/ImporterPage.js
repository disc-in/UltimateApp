import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';

import theme from '../styles/theme.style';
import I18n from '../utils/i18n';
import { download } from '../utils/firebase';
import { generateUuid } from '../utils/random';
import { savePlay } from '../Store/Actions/playAction';
import { saveDrill } from '../Store/Actions/drillAction';
import Button from '../Components/shared/Button';

export const ImporterPage = (props) => {
  const { navigation } = props;
  const namespace = props.route.params.source;

  const [identifier, setIdentifier] = useState();
  const [loading, setLoading] = useState(false);
  const [importedRecord, setImportedRecord] = useState();
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const record = await download(namespace, identifier);

      if (record === null || record === undefined) {
        setError(I18n.t(`importerPage.${namespace}.downloadError`));
      } else {
        setImportedRecord(record);
      }
    } catch (error) {
      setError(I18n.t(`importerPage.${namespace}.downloadError`));
    }
  };

  const save = () => {
    // Override id/uuid so that plays/drills are different in your store even if yo download twice the same drill
    if (namespace === 'customPlays') {
      const importedPlay = { ...importedRecord, uuid: generateUuid() };
      props.savePlay(importedPlay);
      navigation.navigate('PlayEditorPage', { currentPlay: importedPlay });
    } else if (namespace === 'customDrills') {
      const importedDrill = { ...importedRecord, id: generateUuid() };
      props.saveDrill(importedDrill);
      navigation.navigate('DrillPage', { id: importedDrill.id });
    }
  };

  const cancel = () => {
    setIdentifier();
    setLoading(false);
    setImportedRecord();
    setError();
  };

  return (
    <View style={styles.importerPage}>
      {importedRecord ? (
        <View>
          <Text style={styles.text}>
            {I18n.t(`importerPage.${namespace}.incentive`, { title: importedRecord.title })}
          </Text>
          <Text style={styles.text}>{I18n.t(`importerPage.${namespace}.question`)}</Text>
          <View style={styles.ctaArea}>
            <Button style={styles.cta} text={I18n.t('shared.yes')} onPress={save} />
            <Button style={styles.cta} text={I18n.t('shared.cancel')} onPress={cancel} light />
          </View>
        </View>
      ) : loading ? (
        <>
          <MaterialCommunityIcons name="download" size={72} />
          <Text style={styles.text}>{I18n.t(`importerPage.${namespace}.loading`)}</Text>
          {error && <Text style={styles.error}>{error}</Text>}
        </>
      ) : (
        <Input
          autoFocus
          value={identifier}
          onChangeText={setIdentifier}
          placeholder={I18n.t('importerPage.identifierPlaceholder')}
          testID="identifierInput"
          rightIcon={{
            type: 'material-community',
            name: 'check',
            testID: 'identifierInputSubmit',
            onPress: () => {
              setLoading(true);
              fetchData();
            },
          }}
        />
      )}
    </View>
  );
};

const mapDispatchToProps = { savePlay, saveDrill };

export default connect(null, mapDispatchToProps)(ImporterPage);

const styles = StyleSheet.create({
  importerPage: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginBottom: 20,
  },
  error: {
    color: 'red',
  },
  ctaArea: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cta: {
    width: 100,
  },
});
