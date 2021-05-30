import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import I18n from '../../utils/i18n';
import theme from '../../styles/theme.style';
import { showSuccess } from '../../utils/flashMessage';
import { deleteDrill } from '../../Store/Actions/drillAction';
import { DrillTypes } from '../../Fixtures/config';
import customDrillsImage from '../../../assets/customDrills.jpg';

const DrillList = (props) => {
  const { navigation, drillsToDisplay } = props;
  const onDrillPress = props.onDrillPress || ((item) => navigation.navigate('DrillPage', { id: item.id }));

  const renderDrill = ({ item }) => {
    const { id, title, type, custom, image, goals, author } = item;

    const onPressDeleteButton = () => {
      showSuccess(I18n.t('drills.drillList.deleteSuccess', { title }));
      props.deleteDrill(id);
    };

    const onPressEditButton = () => {
      props.navigation.navigate('DrillEditorPage', { currentDrill: item });
    };

    const imageMainData = type === DrillTypes.FRISBEE ? 'minimalPlayersNumber' : 'durationInMinutes';
    const imageMainDataLegend = type === DrillTypes.FRISBEE ? 'players' : 'min';
    const customStyle = custom ? styles.custom : undefined;
    const imageSource = custom && image === undefined ? customDrillsImage : { uri: image };
    return (
      <TouchableOpacity style={[styles.item, customStyle, props.ItemComponentStyle]} onPress={() => onDrillPress(item)}>
        <ImageBackground source={imageSource} style={styles.image} imageStyle={styles.imageOpacity}>
          <Text style={{ ...styles.imageText, ...styles.imageTextMain }}>{item[imageMainData]}</Text>
          <Text style={styles.imageText}>{imageMainDataLegend}</Text>
        </ImageBackground>
        <View style={styles.itemContentContainer}>
          <Text style={styles.source}>{author}</Text>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.numberOfPlayers}>
            {goals
              .map((goal) =>
                I18n.t(`data.fitnessGoals.${goal}`, { defaults: [{ scope: `data.frisbeeGoals.${goal}` }] }),
              )
              .join(', ')}
          </Text>
        </View>
        {custom && (
          <View style={styles.toolbar}>
            <TouchableOpacity onPress={onPressEditButton} style={styles.toolbarItem} testID="editButton">
              <Ionicons name="pencil" color={theme.MAIN_COLOR} size={22} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressDeleteButton} style={styles.toolbarItem} testID="deleteButton">
              <Ionicons name="trash-outline" color={theme.MAIN_COLOR} size={22} />
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      {...props}
      data={drillsToDisplay}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderDrill}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const mapDispatchToProps = { deleteDrill };

export default connect(null, mapDispatchToProps)(DrillList);

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 40,
  },
  item: {
    height: 80,
    flexDirection: 'row',
    marginBottom: 20,
  },
  custom: {
    backgroundColor: theme.MAIN_COLOR_TRANSPARENT,
    borderRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgb(0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOpacity: {
    borderRadius: 5,
    opacity: 0.5,
  },
  imageText: {
    textAlign: 'center',
    color: theme.COLOR_SECONDARY_LIGHT,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  imageTextMain: {
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  itemContentContainer: {
    flex: 1,
    padding: 5,
    paddingBottom: 10,
    paddingRight: 10,
  },
  title: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_MEDIUM,
    flexWrap: 'wrap',
  },
  source: {
    flex: 2,
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  numberOfPlayers: {
    flex: 2,
    color: theme.COLOR_SECONDARY,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  toolbar: {
    justifyContent: 'space-evenly',
  },
  toolbarItem: {
    padding: 10,
  },
});
