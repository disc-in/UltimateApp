import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import theme from '../styles/theme.style';
import Program from './programs/Program';
import Button from './shared/Button';
import doneImage from '../../assets/button_validation_dark_theme.png';
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

  const renderTraining = ({ item, index }) => {
    const training = item;
    const program = programs[activeSections];
    const onTrainingPress = () => navigation.navigate('TrainingPage', { training, program });

    const isDone = program
      ? props.completeTrainings.find(
          complete => program.id === complete.program.id && training.id === complete.training.id,
        ) !== undefined
      : false;

    return (
      <View>
        <TouchableOpacity style={isDone ? styles.trainingDone : styles.training} onPress={onTrainingPress}>
          <View style={styles.descriptionContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.drillText}>{index + 1}- </Text>
              <Text style={styles.drillText}>{item.title}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.arrowDoneContainer}>
            <View style={styles.flexRow}>
              <View style={styles.containerAccordion}>
                <Image style={styles.todoState} source={isDone ? doneImage : null} />
              </View>
              <View style={styles.container}>
                <Image style={styles.cta} source={arrowDark} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.lines} />
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
            style={styles.flatList}
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
          <View style={styles.bottomPage} />
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
    completeTrainings: state.completeTrainings,
  };
};

export default connect(mapStateToProps)(ProgramListPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  programPage: {
    height: '100%',
  },
  accordion: {
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    height: '100%',
  },
  training: {
    padding: 10,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
  },
  trainingDone: {
    padding: 10,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5fbfc',
  },
  titleContainer: {
    flexBasis: '70%',
    flexDirection: 'row',
  },
  title: {
    fontSize: theme.FONT_SIZE_LARGE,
  },
  todoState: {
    height: 20,
    aspectRatio: 1 / 1,
    marginHorizontal: 10,
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
  flatList: {
    paddingVertical: 10,
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
  },
  bottomPage: {
    height: 80,
  },
  drillText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    color: theme.COLOR_PRIMARY,
  },
  drillTextDone: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    color: theme.COLOR_PRIMARY,
  },
  description: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.COLOR_PRIMARY,
  },
  descriptionContainer: {
    flexBasis: '75%',
  },
  lines: {
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 1,
  },
  arrowDoneContainer: {
    position: 'absolute',
    right: 20,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
