import React, { useState } from 'react';
import { connect } from 'react-redux';

import { DrillTypes } from '../Fixtures/config';
import ProgramList from './programs/ProgramList';

export const ProgramListPage = props => {
  const { navigation, programs, fitnessPrograms, activeProgram, completeTrainings, route } = props;

  // TODO: There should be a difference regarding equipment as well. Maybe extract this to another component
  // So that pages components are simple?
  const displayedPrograms = route.params.type === DrillTypes.FRISBEE ? programs : fitnessPrograms;

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
    programs: state.programs,
    fitnessPrograms: state.fitnessPrograms,
    completeTrainings: state.completeTrainings,
  };
};

export default connect(mapStateToProps)(ProgramListPage);
