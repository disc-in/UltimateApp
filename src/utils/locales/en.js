import {
  Intensities,
  Levels,
  FrisbeeGoals,
  FitnessGoals,
  SeasonTimings,
  EquipmentLabels,
  AnimationBackgrounds,
} from '../../Fixtures/config';

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
    animationBackgrounds: {
      [AnimationBackgrounds.RECTANGLE]: 'Rectangle',
      [AnimationBackgrounds.ENDZONE]: 'Endzone',
      [AnimationBackgrounds.THREE_QUARTERS_FIELD]: '3/4 field',
      [AnimationBackgrounds.EMPTY]: 'Empty',
    },
  },
  navigation: {
    homePage: 'Disc In',
    drillListPage: '{{type}} drills',
    filters: 'Filters',
    programListPage: {
      frisbee: 'Practice programs',
      noEquipment: 'Bodyweight programs',
      fullEquipment: 'Gym programs',
    },
    drillPageMinimal: '{{training}} drills',
    animationEditorPage: 'New Drill',
    dictionaryPage: 'Dictionary',
    essentialPage: 'Basics',
    tacticsPage: 'Tactics',
  },
  shared: {
    back: 'Back',
  },
  homePage: {
    frisbeeTab: 'Frisbee',
    fitnessTab: 'Fitness',
    theoryTab: 'Theory',
    editor: 'Editor',
    drills: 'Drills',
    programs: 'Practice Programs',
    leanTitle: 'All workouts',
    leanSubtitle: 'Browse all our workouts to get fit!',
    bodyweightTitle: 'Bodyweight only',
    bodyweightSubtitle: 'A program to prepare your body all year long, no equipment required',
    gymTitle: 'Hit the gym',
    gymSubtitle: 'A program using more specific equipment over the season',
    dictionary: 'Dictionary',
    essential: 'Basics',
    tactics: 'Tactics',
  },
  drillEditor: {
    untitledDrill: 'Unnamed drill',
    drillManager: {
      askOverwrite: 'A drill with this title already exist. Do you want to overwrite it?',
      overwrite: 'Overwrite',
      save: 'Save',
      rename: 'Rename',
      new: 'New',
      clickHereToRename: 'Click here to enter the new name',
      share: 'Contribute',
      alreadyUsedTitle: 'This title is already used by another drill',
      savedDrills: 'Saved drills',
      empty: "You haven't saved any drills yet",
      saveModificationsTitle: 'Do you want to save the current drill?',
      saveModificationsText:
        "The drill '{{title}}' has been modified.\n\nDo you want to save these modifications before closing it?",
      cancel: 'Cancel',
      yes: 'Yes',
      delete: 'Delete',
      no: 'No',
      deleteConfirmation: 'Do you really want to delete this drill?',
    },
    comingSoon: {
      title: 'Coming soon',
      content:
        'Soon you will be able to create drills, training sessions and programs.\nFor now you can only send your new drill to an ultimate app dev.',
      cancel: 'Cancel',
      cta: 'Send the drill to a dev',
    },
    sharePlaceholder: 'Please add this drill to UltimateApp',
  },
  feedback: {
    alert: {
      title: 'Get in touch!',
      content:
        'We are always looking for ideas and feedback to improve the app.\n\nWould you like to send us a message?',
      cancel: 'Cancel',
      cta: 'Send',
    },
    subject: 'Feedback concerning Disc In',
  },
  fitnessDrillIllustration: {
    redoMessage: 'You have completed the drill!',
  },
  dictionaryPage: {
    translation: 'Translation: ',
  },
  drillListPage: {
    availableDrills: {
      zero: '{{count}} drill available',
      one: '{{count}} drill available',
      other: '{{count}} drills available',
    },
    filter: 'FILTER',
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
  essentialsPage: {
    chooseTopic: 'Choose a topic:',
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
  tacticsPage: {
    chooseTopic: 'Choose a topic:',
  },
};
