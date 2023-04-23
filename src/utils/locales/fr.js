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
      [Levels.BEGINNER]: 'Débutant',
      [Levels.INTERMEDIATE]: 'Intermédiaire',
      [Levels.ADVANCED]: 'Avancé',
      undefined: 'Inconnu',
    },
    frisbeeGoals: {
      [FrisbeeGoals.DEFENSE]: 'Défense',
      [FrisbeeGoals.WARM_UP]: 'Échauffement',
      [FrisbeeGoals.HANDLING]: 'Handling',
      [FrisbeeGoals.CUTTING]: 'Cutting',
      [FrisbeeGoals.THROWING]: 'Lancers',
      [FrisbeeGoals.CATCH]: 'Catch',
      [FrisbeeGoals.GAMES]: 'Jeux',
      [FrisbeeGoals.JUNIOR]: 'Junior',
    },
    fitnessGoals: {
      [FitnessGoals.LEGS]: 'Bas du corps',
      [FitnessGoals.UPPER]: 'Haut du corps',
      [FitnessGoals.FULL_BODY]: 'Complet',
      [FitnessGoals.CORE]: 'Tronc',
      [FitnessGoals.CONDITIONING]: 'Endurance',
      [FitnessGoals.WARM_UP]: 'Échauffement',
    },
    seasonTimings: {
      [SeasonTimings.OFF_SEASON]: 'Hors saison',
      [SeasonTimings.PRE_SEASON]: 'Pré saison',
      [SeasonTimings.IN_SEASON]: 'En saison',
      [SeasonTimings.ANYTIME]: 'Peu importe',
    },
    equipmentLabels: {
      [EquipmentLabels.NONE]: 'Aucun',
      [EquipmentLabels.BASIC]: 'Basique',
      [EquipmentLabels.FULL]: 'Complet',
    },
    intensities: {
      [Intensities.LOW]: 'Basse',
      [Intensities.MODERATE]: 'Modérée',
      [Intensities.HIGH]: 'Haute',
    },
    animationBackgrounds: {
      [AnimationBackgrounds.RECTANGLE]: 'Rectangle',
      [AnimationBackgrounds.ENDZONE]: 'Endzone',
      [AnimationBackgrounds.THREE_QUARTERS_FIELD]: '3/4 terrain',
      [AnimationBackgrounds.EMPTY]: 'Vide',
    },
  },
  navigation: {
    homePage: 'Disc In',
    aboutPage: 'À propos de Disc In',
    drillListPage: 'Exercices de {{type}}',
    drillEditorPage: 'Nouvel Exercice',
    drillEditorAnimationPage: 'Animation',
    drillPage: 'Exercice',
    fitnessPage: 'Fitness',
    filters: 'Filtres',
    programListPage: {
      frisbee: "Programmes d'entraînement",
      noEquipment: 'Entraînements poids du corps',
      fullEquipment: 'Entraînements en salle',
    },
    playbookPage: 'Mon Playbook',
    playEditorPage: 'Nouvelle tactique',
    drillImporterPage: 'Importer un exercice',
    playImporterPage: 'Importer une tactique',
    dictionaryPage: 'Lexique',
    essentialPage: 'Les bases du jeu',
    tacticsPage: 'Tactiques',
  },
  shared: {
    back: 'Retour',
    cancel: 'Annuler',
    yes: 'Oui',
    no: 'Non',
    form: {
      animationInput: {
        add: 'Ajouter',
        edit: 'Modifier',
        clear: 'Supprimer',
      },
    },
  },
  utils: {
    snackbar: {
      success: 'Succès 👍',
      error: 'Oh non… 😥',
    },
  },
  homePage: {
    frisbeeTab: 'Frisbee',
    fitnessTab: 'Fitness',
    theoryTab: 'Théorie',
    playbook: 'Mon Playbook',
    drills: 'Exercices',
    adult: 'Adultes',
    junior: 'Juniors',
    programs: 'Programmes',
    leanTitle: 'Exercices',
    leanSubtitle: 'Tous nos exercises pour garder la forme !',
    bodyweightTitle: 'Sans matériel',
    bodyweightSubtitle: 'Des programmes conçus pour plusieurs semaines',
    gymTitle: 'En salle',
    gymSubtitle: 'Des programmes conçus pour plusieurs semaines avec du matériel',
    dictionary: 'Lexique',
    essential: 'Les bases du jeu',
    tactics: 'Tactiques',
  },
  playbookPage: {
    empty: 'Votre playbook est vide !',
    untitledPlay: 'Play sans titre',
  },
  importerPage: {
    customPlays: {
      loading: 'On dirait que vous voulez importer un play, je vais le chercher... 🏃',
      incentive: 'Vous allez enregistrer le play "{{title}}"',
      question: 'Êtes-vous sûr.e ?',
      downloadError: "Je n'ai pas pu retrouver ce play...",
    },
    customDrills: {
      loading: 'On dirait que vous voulez importer un exercice, je vais le chercher... 🏃',
      incentive: 'Vous allez enregistrer l\'exercice "{{title}}"',
      question: 'Êtes-vous sûr.e ?',
      downloadError: "Je n'ai pas pu retrouver cet exercice...",
    },
  },
  editor: {
    playTitle: {
      placeholder: 'Entrez un nom',
      alreadyExists: 'Ce nom existe déjà',
      empty: 'Le nom ne peut pas être vide',
      delete: 'Supprimer',
      deleteConfirmation: 'Voulez-vous vraiment supprimer ce play ?',
      deleteSuccess: 'Le play "{{title}}" a été supprimé.',
    },
    sharePlay: {
      shareTitle: 'Partager {{title}}',
      shareMessage: 'Utilise cet identifiant pour télécharger mon super play dans Disc In : {{uuid}}',
      shareError: 'Une erreur est survenue',
    },
  },
  drills: {
    description: {
      goal: 'Thèmes',
      equipment: 'Matériel',
      description: 'Description',
      inGame: 'En Match',
    },
    drillList: {
      deleteSuccess: 'L\'exercice "{{title}}" a été supprimé.',
    },
    fitnessDrillIllustration: {
      start: 'Start',
    },
    shareDrill: {
      title: 'Partager {{drillTitle}}',
      content: {
        zero: "Regarde cet exo sur Disc In avec l'identifiant {{uuid}}",
      },
      description: 'Exercice : {{description}}…',
      error: 'Une erreur est survenue',
    },
  },
  aboutPage: {
    copyright: '2020 - {{endYear}}',
    about: {
      header: 'À propos',
      text: "'Disc In' est une application conçue par des entraîneurs d'ultimate et pour des entraîneurs d'ultimate. Elle est et restera gratuite.",
    },
    acknowledgements: {
      header: 'Remerciements',
      text: 'Un grand merci à tous ceux qui ont aidé à faire de Disc In une super appplication !',
      linkText: 'Contributeurs',
      linkUrl: 'https://github.com/disc-in/UltimateApp#-thanks',
    },
    contributing: {
      header: 'Contribuer',
      text: "Ajouts d'exercices et de programmes, nouvelles vidéos, traductions, etc. Il y a des dizaines de manières d'améliorer Disc In. Contactez-nous !",
    },
    feedback: {
      header: 'Feedback',
      text: "Nous serions ravis de connaitre vos idées pour améliorer l'application.\n\nVoulez-vous nous envoyer un message ?",
      cta: 'Nous contacter',
      subject: 'A propos de Disc In',
    },
  },
  dictionaryPage: {
    translation: 'Traduction : ',
  },
  drillListPage: {
    searchPlaceholder: 'Rechercher un exo…',
    availableDrills: {
      one: '1 exercice disponible',
      other: '{{count}} exercices disponibles',
    },
    filter: 'Filtrer',
  },
  drillEditorPage: {
    validations: {
      alreadyExists: 'Existe déjà',
      empty: 'Ne peut pas être vide',
    },
    labels: {
      author: 'Auteur',
      title: 'Titre',
      image: "URL de l'image",
      description: 'Description',
      minimalPlayersNumber: 'Nombre minimal de joueurs',
      inGame: 'Utilité en match',
      equipment: 'Équipement',
      durationInMinutes: 'Durée (minutes)',
      intensity: 'Intensité',
      goals: 'Thèmes',
      level: 'Niveau',
      stepsHeader: 'Variantes',
      steps: {
        header: 'Variante {{count}}',
        title: 'Titre',
        instruction: 'Instructions',
        animation: 'Animation',
        vimeoId: 'Identifiant Vimeo',
        youtube: 'Lien vidéo Youtube',
      },
    },
    errors: {
      title: {
        empty: 'Le titre ne peut pas être vide',
        alreadyExists: 'Ce titre est déjà pris',
      },
      goals: {
        empty: 'Choisissez au moins 1 thème',
      },
      steps: {
        empty: 'Votre exercice doit contenir au moins 1 variante',
      },
    },
    cta: 'Enregistrer',
    saveSuccess: 'L\'exercice "{{title}}" a été enregistré.',
  },
  drillPage: {
    minutes: 'minutes',
    players: 'joueurs',
    level: 'niveau',
    start: 'Start',
  },
  drillPageMinimal: {
    finish: "Terminer l'entraînement !",
    next: 'Exercice suivant',
  },
  essentialsPage: {
    chooseTopic: 'Choisis un sujet :',
  },
  fitnessFilters: {
    favorites: 'Seulement mes favoris',
    custom: 'Seulement mes exos',
    level: 'Niveau',
    intensity: 'Intensité',
    equipment: 'Matériel',
    seasonTiming: 'Temporalité',
    goals: 'Thèmes',
    duration: 'durée',
    durationLabel: 'Combien de temps as-tu ? {{duration}} mins',
    cta: {
      zero: 'Aucun exercice',
      one: 'Voir {{count}} exercice',
      other: 'Voir {{count}} exercices',
    },
  },
  frisbeeFilters: {
    numberOfPlayersLabel: 'Nombre de joueurs : {{number}}',
  },
  trainingPage: {
    start: "Commencer l'entraînement",
  },
  vimeoVideo: {
    loading: 'Chargement…',
    error: 'Oups ! Une erreur est survenue pendant le chargement de la vidéo',
  },
  programs: {
    program: {
      completion: '{{done}}/{{total}}',
    },
  },
  tacticsPage: {
    chooseTopic: 'Choisis un sujet :',
  },
  videoPage: {
    share: 'Partager',
    shareContent: 'Voici une superbe vidéo trouvée sur Disc In :\n{{url}} ',
    error: 'Le partage de cette vidéo a échoué',
  },
};
