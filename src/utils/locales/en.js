import { Intensities, Levels, FrisbeeGoals, FitnessGoals, SeasonTimings, EquipmentLabels } from '../../Fixtures/config';

export default {
  data: {
    levels: {
      [Levels.BEGINNER]: 'Beginner',
      [Levels.INTERMEDIATE]: 'Intermediate',
      [Levels.ADVANCED]: 'Advanced',
    },
    frisbeeGoals: {
      [FrisbeeGoals.DEFENSE]: 'Defense',
      [FrisbeeGoals.MARK]: 'Mark',
      [FrisbeeGoals.HANDLING]: 'Handling',
      [FrisbeeGoals.CUTTING]: 'Cutting',
      [FrisbeeGoals.THROWING]: 'Throwing',
      [FrisbeeGoals.BREAK]: 'Breaking the mark',
      [FrisbeeGoals.COMMUNICATION]: 'Communication',
      [FrisbeeGoals.CATCH]: 'Catching',
      [FrisbeeGoals.PLAY]: 'Playing time',
    },
    fitnessGoals: {
      [FitnessGoals.LEGS]: 'Legs',
      [FitnessGoals.UPPER]: 'Upper',
      [FitnessGoals.FULL_BODY]: 'Full body',
      [FitnessGoals.CORE]: 'Core',
      [FitnessGoals.CONDITIONING]: 'Conditioning',
      [FitnessGoals.WARM_UP]: 'Warm-up',
    },
    seasonTimings: {
      [SeasonTimings.OFF_SEASON]: 'Off-season',
      [SeasonTimings.PRE_SEASON]: 'Pre-season',
      [SeasonTimings.IN_SEASON]: 'In-season',
      [SeasonTimings.ANYTIME]: 'Anytime',
    },
    equipmentLabels: {
      [EquipmentLabels.NONE]: 'None',
      [EquipmentLabels.BASIC]: 'Basic',
      [EquipmentLabels.FULL]: 'Full',
    },
    intensities: {
      [Intensities.LOW]: 'Low',
      [Intensities.MODERATE]: 'Moderate',
      [Intensities.HIGH]: 'High',
    },
  },
  homePage: {
    frisbeeTab: 'Frisbee',
    fitnessTab: 'Fitness',
    theory: 'Theory',
    drills: 'Drills',
    programs: 'Practice Programs',
    leanTitle: 'Lean Fit',
    leanSubtitle: 'Get lean and fit over 6 weeks with a balanced plan that builds endurance',
    bodyweightTitle: 'Bodywaight only',
    bodyweightSubtitle: 'Push your strenght and improve muscle tone over the season - all without weights',
    gymTitle: 'Gym Strong',
    gymSubtitle: 'Build full-body strenght with a focus on weight training over the season',
  },
  animationEditor: {
    comingSoon: {
      title: 'Coming soon',
      content:
        'Soon you will be able to create drills, training sessions and programs.\nFor now you can only send your new drill to an ultimate app dev.',
      cancel: 'Cancel',
      cta: 'Send the drill to a dev',
    },
    sharePlaceholder: 'Please add this drill to UltimateApp',
  },
  drillIllustration: {
    finish: 'Finish',
    noContent: 'No visual content for this drill',
    redoMessage: 'You have completed the drill!',
  },
  drillListPage: {
    availableDrills: {
      zero: '{{count}} drill available',
      one: '{{count}} drill available',
      other: '{{count}} drills available',
    },
  },
  drillPage: {
    minutes: 'minutes',
    players: 'players',
    level: 'level',
    start: 'Start',
    goal: 'Good for',
    equipment: 'Equipment',
    description: 'Description',
  },
  drillPageMinimal: {
    headerTitle: '{{trainingTitle}} Drills',
    details: 'DETAILS',
    finish: 'Finish Training!',
    next: 'Next drill',
  },
  fitnessFilters: {
    favorites: 'Favorites only',
    level: 'Level',
    intensity: 'Intensity',
    equipment: 'Equipment',
    seasonTiming: 'Season Timing',
    goals: 'Goals',
    duration: 'Duration',
    durationLabel: 'How much time do you have?   {{duration}} mins',
  },
  frisbeeFilters: {
    numberOfPlayersLabel: 'Number of players: {{number}}',
  },
  programListPage: {
    allTrainings: 'See all trainings',
  },
  trainingListPage: {
    availableTrainings: {
      zero: '{{count}} training session available',
      one: '{{count}} training session available',
      other: '{{count}} training sessions available',
    },
    players: '{{count}}+ players',
  },
  trainingPage: {
    start: 'Start training',
  },
  vimeoVideo: {
    loading: 'Loading...',
    error: 'Oopsie! There was an error loading the video...',
  },
  programs: {
    program: {
      completion: '{{done}}/{{total}} trainings',
    },
  },
};
