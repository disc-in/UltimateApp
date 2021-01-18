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
      [FrisbeeGoals.WARM_UP]: 'Warm-up',
      [FrisbeeGoals.HANDLING]: 'Handling',
      [FrisbeeGoals.CUTTING]: 'Cutting',
      [FrisbeeGoals.THROWING]: 'Throwing',
      [FrisbeeGoals.CATCH]: 'Catching',
      [FrisbeeGoals.GAMES]: 'Games',
      [FrisbeeGoals.JUNIOR]: 'Junior',
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
    aboutPage: 'About Disc In',
    drillListPage: '{{type}} drills',
    drillPage: 'Drill',
    filters: 'Filters',
    programListPage: {
      frisbee: 'Practice programs',
      noEquipment: 'Bodyweight programs',
      fullEquipment: 'Gym programs',
    },
    playEditorPage: 'New Play',
    importerPage: 'Import a play',
    dictionaryPage: 'Dictionary',
    essentialPage: 'Basics',
    tacticsPage: 'Tactics',
  },
  shared: {
    back: 'Back',
    cancel: 'Cancel',
    yes: 'Yes',
    no: 'No',
  },
  utils: {
    snackbar: {
      success: 'Success 👍',
      error: 'Oh no… 😥',
    },
  },
  homePage: {
    frisbeeTab: 'Frisbee',
    fitnessTab: 'Fitness',
    theoryTab: 'Theory',
    editor: 'My Playbook',
    drills: 'Drills',
    adult: 'Senior',
    junior: 'Junior',
    programs: 'Programs',
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
  playEditorPage: {
    untitledPlay: 'Unnamed play',
  },
  importerPage: {
    loading: 'It looks like you want to import a play, I am going to fetch it... 🏃',
    incentive: 'You are about to import and save the play {{title}}',
    question: 'Are you sure?',
    downloadError: 'I could not find the play you are looking for',
  },
  editor: {
    saveModificationsTitle: 'Do you want to save the current play?',
    saveModificationsText:
      "The play '{{title}}' has been modified.\n\nDo you want to save these modifications before closing it?",
    saveSuccess: "The play has been saved as '{{title}}'",
    savedPlaysList: {
      title: 'My Playbook',
      empty: "You haven't saved any plays yet",
      delete: 'Delete',
      deleteConfirmation: 'Do you really want to delete this play?',
      deleteSuccess: "The play '{{title}}' has been deleted.",
    },
    renamePlayModal: {
      placeholder: 'Click here to enter the new name',
      alreadyExists: 'This name already exists',
      empty: 'You cannot set an empty name',
      renameSuccess: 'The play was successfully renamed!',
      cta: 'Apply',
    },
    sharePlay: {
      shareTitle: 'Sharing {{title}}',
      shareMessage: 'Use the following link to import my awesome play in Disc In: {{url}}',
      shareError: 'It looks like there was an error sharing your play',
    },
  },
  drills: {
    description: {
      goal: 'Good for',
      equipment: 'Equipment',
      description: 'Description',
      inGame: 'In Game',
    },
    fitnessDrillIllustration: {
      redoMessage: 'You have completed the drill!',
    },
  },
  aboutPage: {
    copyright: '2020 - {{endYear}}',
    version: 'version {{version}}, release-channel {{channel}}',
    about: {
      header: 'About',
      text:
        "'Disc In' is an application made by ultimate coaches for ultimate coaches. It is free and shall remain this way.",
    },
    acknowledgements: {
      header: 'Acknowledgements',
      text: "A big thanks to everybody who helps make 'Disc In' great!",
      linkText: 'Contributors',
      linkUrl: 'https://github.com/disc-in/UltimateApp#-thanks',
    },
    contributing: {
      header: 'Contributions',
      text:
        'You can contribute by adding drills and programs, new videos, translating to other languages, etc. There are dozens of ways to improve the app. Feel free to contact us!',
    },
    feedback: {
      header: 'Feedback',
      text:
        "If you perhaps don't have time to contribute, but you have ideas or feedback to improve the app, please send us a message!",
      cta: 'Send feedback',
      subject: 'Feedback concerning Disc In',
    },
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
    filter: 'Filter',
  },
  drillPage: {
    minutes: 'minutes',
    players: 'players',
    level: 'level',
    start: 'Start',
    shareTitle: 'Share {{drillTitle}}',
    shareContent: 'Check this drill on Disc In: {{url}}\n{{stringYoutube}}',
  },
  drillPageMinimal: {
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
    cta: {
      zero: '{{count}} available drills',
      one: 'See {{count}} drill',
      other: 'See {{count}} drills',
    },
  },
  frisbeeFilters: {
    numberOfPlayersLabel: 'Number of players: {{number}}',
  },
  trainingPage: {
    start: 'Start training',
  },
  vimeoVideo: {
    loading: 'Loading…',
    error: 'Oopsie! There was an error loading the video…',
  },
  programs: {
    program: {
      completion: '{{done}}/{{total}}',
    },
  },
  tacticsPage: {
    chooseTopic: 'Choose a topic:',
  },
  videoPage: {
    share: 'Share',
    shareContent: "Here's a great video found on Disc In :\n{{url}} ",
    error: 'There was a problem while sharing the link',
  },
};
