import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import I18n from '../utils/i18n';
import theme from '../styles/theme.style';
import Program from './programs/Program';
import arrowDark from '../../assets/arrow_dark.png';

export const ProgramListPage = props => {
  const { navigation, programs } = props;

  const activeProgramId = programs.findIndex(program => program.id === props.activeProgram);
  const [activeSections, setActiveSections] = useState([activeProgramId]);

  const setSections = sections => {
    setActiveSections(sections);
  };

  const renderHeader = (section, _, isActive) => {
    return <Program program={section} />;
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
      <TouchableOpacity style={[styles.training, isDone ? styles.trainingDone : null]} onPress={onTrainingPress}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.trainingTitle}>
            {index + 1} - {training.title}
          </Text>
          <Text style={styles.trainingDescription}>{training.description}</Text>
        </View>
        <View style={styles.arrowDoneContainer}>
          <View style={styles.flexRow}>
            {isDone && (
              <MaterialCommunityIcons
                style={styles.todoState}
                name="check-circle"
                color={theme.COLOR_PRIMARY}
                size={26}
              />
            )}
            <View>
              <Image style={styles.cta} source={arrowDark} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <FlatList
        contentContainerStyle={styles.trainingsList}
        data={section.trainings}
        keyExtractor={item => item.id.toString()}
        renderItem={renderTraining}
      />
    );
  };

  return (
    <View style={styles.programListPage}>
      <ScrollView>
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
      </ScrollView>
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
  programListPage: {
    height: '100%',
    paddingVertical: 10,
  },
  accordion: {
    height: '100%',
  },
  trainingsList: {
    marginBottom: 10,
  },
  training: {
    padding: 10,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.COLOR_PRIMARY_LIGHT,
    borderBottomColor: theme.COLOR_SECONDARY_LIGHT,
    borderBottomWidth: 1,
  },
  trainingDone: {
    backgroundColor: '#f5fbfc',
  },
  todoState: {
    marginHorizontal: 20,
  },
  descriptionContainer: {
    flexBasis: '75%',
  },
  trainingTitle: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    color: theme.COLOR_PRIMARY,
  },
  trainingDescription: {
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.COLOR_PRIMARY,
  },
  cta: {
    height: 20,
    aspectRatio: 109 / 239,
  },
  arrowDoneContainer: {
    position: 'absolute',
    right: 30,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
