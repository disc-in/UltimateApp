import programReducer from './programReducer';
import { createTraining, createProgram } from '../../Fixtures/TestFixtures';

describe('programReducer', () => {
  const training = createTraining({ id: 1 });
  const program = createProgram({ id: 1, trainings: [training] });
  const initialState = [{ training, program }];

  describe('When handling COMPLETE_TRAINING', () => {
    it('does nothing when there is a completion on an already completed training within the program', () => {
      expect(programReducer(initialState, { type: 'COMPLETE_TRAINING', value: { training, program } })).toEqual([
        { training, program },
      ]);
    });

    it('adds the completion when there is a completion on an already completed training but in another program', () => {
      const otherProgram = createProgram({ id: 2, trainings: [training] });
      expect(
        programReducer(initialState, { type: 'COMPLETE_TRAINING', value: { training, program: otherProgram } }),
      ).toEqual([
        { training, program },
        { training, program: otherProgram },
      ]);
    });

    it('adds the completion when there is a completion on new training', () => {
      const otherTraining = createTraining({ id: 2 });
      const otherProgram = createProgram({ id: 2, trainings: [otherTraining] });
      expect(
        programReducer(initialState, {
          type: 'COMPLETE_TRAINING',
          value: { training: otherTraining, program: otherProgram },
        }),
      ).toEqual([
        { training, program },
        { training: otherTraining, program: otherProgram },
      ]);
    });
  });

  it('when handling a unknown action type it does not change the state', () => {
    expect(programReducer(initialState, { type: 'UKNOWN', value: {} })).toEqual([{ training, program }]);
  });

  it('has a default state', () => {
    expect(programReducer(undefined, { type: 'unknown' })).toEqual([]);
  });
});
