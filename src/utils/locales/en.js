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
      undefined: 'Unkown',
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
    drillEditorPage: 'New Drill',
    drillEditorAnimationPage: 'Animation',
    fitnessPage: 'Fitness',
    filters: 'Filters',
    programListPage: {
      frisbee: 'Practice programs',
      noEquipment: 'Bodyweight programs',
      fullEquipment: 'Gym programs',
    },
    playbookPage: 'My Playbook',
    playEditorPage: 'New Play',
    drillImporterPage: 'Import a drill',
    playImporterPage: 'Import a play',
    dictionaryPage: 'Dictionary',
    essentialPage: 'Basics',
    tacticsPage: 'Tactics',
  },
  shared: {
    back: 'Back',
    cancel: 'Cancel',
    yes: 'Yes',
    no: 'No',
    delete: 'Delete',
    form: {
      animationInput: {
        add: 'Add',
        edit: 'Edit',
        clear: 'Remove',
      },
    },
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
    playbook: 'My Playbook',
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
  playbookPage: {
    empty: 'Your playbook is empty!',
    untitledPlay: 'Unnamed play',
  },
  importerPage: {
    identifierPlaceholder: 'Use an identifier…',
    customPlays: {
      loading: 'I am fetching the play you want to import it… 🏃',
      incentive: 'You are about to import and save the play {{title}}',
      question: 'Are you sure?',
      downloadError:
        "I could not find the play you are looking for. Are you sure you're not trying to import a drill instead?",
    },
    customDrills: {
      loading: 'I am fetching the drill you want to import it… 🏃',
      incentive: 'You are about to import and save the drill {{title}}',
      question: 'Are you sure?',
      downloadError:
        "I could not find the drill you are looking for. Are you sure you're not trying to import a play instead?",
    },
  },
  editor: {
    playTitle: {
      placeholder: 'Enter new name',
      alreadyExists: 'This name already exists',
      empty: 'You cannot set an empty name',
      deleteConfirmation: 'Do you really want to delete this play?',
      deleteSuccess: "The play '{{title}}' has been deleted.",
    },
    sharePlay: {
      shareTitle: 'Sharing {{title}}',
      shareMessage: 'Use the following identifier to import my awesome play in Disc In: {{identifier}}',
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
    drillList: {
      deleteConfirmation: 'Do you really want to delete this drill?',
      deleteSuccess: 'The drill "{{title}}" has been deleted.',
    },
    fitnessDrillIllustration: {
      start: 'Start',
    },
    shareDrill: {
      title: 'Share {{drillTitle}}',
      content: 'Check this drill on Disc In with the identifier: {{identifier}}',
      description: 'Drill: {{description}}…',
      error: 'It looks like there was an error sharing this drill',
    },
  },
  aboutPage: {
    copyright: '2020 - {{endYear}}',
    about: {
      header: 'About',
      text: "'Disc In' is an application made by ultimate coaches for ultimate coaches. It is free and shall remain this way.",
    },
    acknowledgements: {
      header: 'Acknowledgements',
      text: "A big thanks to everybody who helps make 'Disc In' great!",
      linkText: 'Contributors',
      linkUrl: 'https://github.com/disc-in/UltimateApp#-thanks',
    },
    contributing: {
      header: 'Contributions',
      text: 'You can contribute by adding drills and programs, new videos, translating to other languages, etc. There are dozens of ways to improve the app. Feel free to contact us!',
    },
    feedback: {
      header: 'Feedback',
      text: "If you perhaps don't have time to contribute, but you have ideas or feedback to improve the app, please send us a message!",
      cta: 'Send feedback',
      subject: 'Feedback concerning Disc In',
    },
    other: {
      header: 'Other projects',
      text: 'In addition to this application, we also work on the Timeout Ultimate application, which enables you to learn the rules',
      linkText: 'Timeout Ultimate',
    },
  },
  dictionaryPage: {
    translation: 'Translation: ',
  },
  drillListPage: {
    searchPlaceholder: 'Search for a drill…',
    availableDrills: {
      zero: '{{count}} drill available',
      one: '{{count}} drill available',
      other: '{{count}} drills available',
    },
    filter: 'Filter',
  },
  drillEditorPage: {
    validations: {
      alreadyExists: 'Already exists',
      empty: 'Cannot be empty',
    },
    labels: {
      author: 'Author',
      title: 'Title',
      image: 'Image URL',
      description: 'Description',
      minimalPlayersNumber: 'Minimal number of players',
      inGame: 'In game',
      equipment: 'Equipment',
      durationInMinutes: 'Duration (minutes)',
      intensity: 'Intensity',
      goals: 'Goals',
      level: 'Level',
      stepsHeader: 'Variants',
      steps: {
        header: 'Variant {{count}}',
        title: 'Title',
        instruction: 'Instructions',
        animation: 'Animation',
        vimeoId: 'Vimeo Identifier',
        youtube: 'Youtube link',
      },
    },
    errors: {
      title: {
        empty: 'The title cannot be blank',
        alreadyExists: 'This title is already taken',
      },
      goals: {
        empty: 'Choose at least 1 goal',
      },
      steps: {
        empty: 'Your drill must contain at least 1 variant',
      },
    },
    cta: 'Save',
    saveSuccess: 'The drill "{{title}}" has been saved.',
  },
  drillPage: {
    minutes: 'minutes',
    players: 'players',
    level: 'level',
    start: 'Start',
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
    custom: 'My drills only',
    level: 'Level',
    intensity: 'Intensity',
    equipment: 'Equipment',
    seasonTiming: 'Season Timing',
    goals: 'Goals',
    duration: 'Duration',
    durationLabel: 'How much time do you have? {{duration}} mins',
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
