import React, { Component, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import theme from '../styles/theme.style';
import Program from './programs/Program';
import Button from './shared/Button';
import ListItem from './shared/ListItem';
import doneImage from '../../assets/button_validation_dark_theme.png';
import toDoImage from '../../assets/button_validation_light.png';
import arrowDark from '../../assets/arrow_dark.png';

export const ProgramListPage = props => {
  const { navigation, programs } = props;

  const [activeSections, setActiveSections] = useState([undefined]);

  const setSections = sections => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <View>
          <Program program={section} />
        </View>
      </Animatable.View>
    );
  };

  const renderTraining = ({ item }) => {
    const training = item;
    const program = programs[activeSections];
    const onTrainingPress = () => navigation.navigate('TrainingPage', { training, program });

    // const isDone =
    //   completeTrainings.find(complete => program.id === complete.program.id && training.id === complete.training.id) !==
    //   undefined;
    return (
      <View>
        <TouchableOpacity style={styles.training} onPress={onTrainingPress}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleAccordion}>{item.title}</Text>
          </View>
          <View style={styles.containerAccordion}>
            <Image style={styles.todoState} source={toDoImage} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <View style={styles.accordion}>
          <FlatList
            style={styles.green}
            data={section.trainings}
            keyExtractor={item => item.id.toString()}
            renderItem={renderTraining}
          />
        </View>
      </Animatable.View>
    );
  };

  return (
    <View style={styles.programPage}>
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Accordion
              activeSections={activeSections}
              sections={programs}
              touchableComponent={TouchableOpacity}
              expandMultiple={false}
              renderHeader={renderHeader}
              renderContent={renderContent}
              duration={400}
              onChange={setSections}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.seeAllContainer}>
        <Button
          onPress={() => props.navigation.navigate('TrainingListPage')}
          text="See all trainings"
          buttonLight="true"
          style={styles.allTrainings}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    programs: state.programs,
  };
};

export default connect(mapStateToProps)(ProgramListPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  programPage: {
    height: '100%',
  },
  accordion: {
    backgroundColor: theme.BACKGROUND_COLOR,
    height: '100%',
  },
  training: {
    padding: 10,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
  titleContainer: {
    flexBasis: '70%',
    paddingLeft: 30,
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
  titleAccordion: {
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  todoState: {
    height: 30,
    aspectRatio: 1 / 1,
  },
  cta: {
    height: 20,
    aspectRatio: 109 / 239,
  },
  containerAccordion: {
    flexBasis: '20%',
    alignItems: 'center',
  },
  allTrainings: {
    fontSize: theme.FONT_SIZE_SMALL,
    alignSelf: 'center',
    width: 'auto',
    marginVertical: 10,
  },
  seeAllContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(241, 241, 241, 0.2)',
    bottom: 10,
    width: '100%',
  },
  green: {
    backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
  },
});
