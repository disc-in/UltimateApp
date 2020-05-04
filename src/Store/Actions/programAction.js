export const completeTraining = ({ training, program }) => ({
  type: 'COMPLETE_TRAINING',
  value: { training, program },
});
