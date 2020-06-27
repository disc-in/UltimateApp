import React, { useState } from 'react';
import { connect } from 'react-redux';

import { DrillTypes } from '../Fixtures/config';
import ProgramList from './programs/ProgramList';

export const ProgramListPage = props => {
  const { navigation, frisbeePrograms, fitnessPrograms, activeProgram, completeTrainings, route } = props;

  // TODO: There should be a difference regarding equipment as well.
  let displayedPrograms;

  // Try to find programs using activeProgram
  if (activeProgram) {
    if (frisbeePrograms.includes(activeProgram)) displayedPrograms = frisbeePrograms;
    if (fitnessPrograms.includes(activeProgram)) displayedPrograms = fitnessPrograms;
  }
  // Find programs from type
  if (!displayedPrograms) {
    displayedPrograms = route.params.type === DrillTypes.FRISBEE ? frisbeePrograms : fitnessPrograms;
  }

  return (
    <ProgramList
      navigation={navigation}
      displayedPrograms={displayedPrograms}
      activeProgram={activeProgram}
      completeTrainings={completeTrainings}
    />
  );
};

const mapStateToProps = state => {
  return {
    frisbeePrograms: state.programs,
    fitnessPrograms: state.fitnessPrograms,
    completeTrainings: state.completeTrainings,
  };
};

export default connect(mapStateToProps)(ProgramListPage);
