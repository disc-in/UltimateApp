import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../styles/theme.style';
import Program from './Program';

const ProgramList = (props) => {
  const { navigation, displayedPrograms, activeProgram, completeTrainings } = props;

  const activeProgramId = displayedPrograms.findIndex((program) => program.id === activeProgram);
  const [activeSections, setActiveSections] = useState([activeProgramId]);

  const setSections = (sections) => {
    setActiveSections(sections);
  };

  const renderHeader = (section, _, isActive) => {
    return <Program program={section} />;
  };

  const renderTraining = ({ item, index }) => {
    const training = item;
    const program = displayedPrograms[activeSections];
    const onTrainingPress = () => navigation.navigate('TrainingPage', { training, program });

    const isDone = program
      ? completeTrainings.find(
          (complete) => program.id === complete.program.id && training.id === complete.training.id,
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
          {isDone && <MaterialCommunityIcons name="check-circle" color={theme.COLOR_PRIMARY} size={26} />}
          <MaterialCommunityIcons name="chevron-right" color={theme.COLOR_PRIMARY} size={26} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <FlatList data={section.trainings} keyExtractor={(item) => item.id.toString()} renderItem={renderTraining} />
    );
  };

  return (
    <View style={styles.programList}>
      <Accordion
        activeSections={activeSections}
        sections={displayedPrograms}
        touchableComponent={TouchableOpacity}
        expandMultiple={false}
        renderHeader={renderHeader}
        renderContent={renderContent}
        duration={400}
        onChange={setSections}
        containerStyle={styles.accordionContainerStyle}
      />
    </View>
  );
};

export default ProgramList;

const styles = StyleSheet.create({
  programList: {
    height: '100%',
  },
  accordionContainerStyle: {
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
  descriptionContainer: {
    flexBasis: '80%',
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
  arrowDoneContainer: {
    flexBasis: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
