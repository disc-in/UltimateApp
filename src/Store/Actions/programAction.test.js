import { completeTraining } from './programAction';
import { createTraining, createProgram } from '../../Fixtures/TestFixtures';

describe('completeTraining', () => {
  const training = createTraining();
  const program = createProgram({ trainings: [training] });

  it('renders correctly', () => {
    expect(completeTraining({ training, program })).toEqual({
      type: 'COMPLETE_TRAINING',
      value: { training, program },
    });
  });
});
