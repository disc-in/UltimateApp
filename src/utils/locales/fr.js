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
      [SeasonTimings.ANYTIME]: "N'importe",
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
    drillListPage: 'Exercices de {{type}}',
    filters: 'Filtres',
    programListPage: {
      frisbee: "Programmes d'entraînement",
      noEquipment: 'Entraînements poids du corps',
      fullEquipment: 'Entraînements en salle',
    },
    playEditorPage: 'Nouvelle tactique',
    importerPage: 'Importer une tactique',
    dictionaryPage: 'Lexique',
    essentialPage: 'Les bases du jeu',
    tacticsPage: 'Tactiques',
  },
  shared: {
    back: 'Retour',
    cancel: 'Annuler',
    yes: 'Oui',
    no: 'Non',
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
    editor: 'Éditeur',
    drills: 'Exercices',
    programs: "Programmes d'entraînement",
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
  playEditorPage: {
    untitledPlay: 'Tactique sans titre',
  },
  importerPage: {
    loading: 'On dirait que vous voulez importer une tactique, je vais la chercher... 🏃',
    incentive: 'Vous allez enregistrer la tactique "{{title}}"',
    question: 'Êtes-vous sûr(e) ?',
  },
  editor: {
    saveModificationsTitle: 'Voulez-vous sauvegarder les modifications ?',
    saveModificationsText:
      'L\'exercice "{{title}}" a été modifié.\n\nSouhaitez-vous conserver ces modifications avant de le fermer ?',
    savedPlaysList: {
      title: 'Tactiques sauvegardées',
      empty: "Vous n'avez pas encore sauvegardé de tactiques",
      delete: 'Supprimer',
      deleteConfirmation: 'Voulez-vous vraiment supprimer cette tactique ?',
      deleteSuccess: 'La tactique "{{title}}" a été supprimée.',
    },
    currentPlayManager: {
      save: 'Sauvegarder',
      saveSuccess: 'La tactique "{{title}}" a été sauvegardée',
      rename: 'Renommer',
      new: 'Nouveau',
      share: 'Partager',
      shareTitle: 'Partager {{title}}',
      shareMessage: 'Utilise ce lien pour télécharger ma super tactique dans Disc In : {{url}}',
      shareError: 'Une erreur est survenue',
    },
    renamePlayModal: {
      placeholder: 'Appuyer ici pour renommer',
      alreadyExists: 'Ce nom existe déjà',
      empty: 'Le nom ne peut pas être vide',
      renameSuccess: 'La tactique a été renommée avec succès',
      cta: 'Valider',
    },
  },
  drills: {
    description: {
      goal: 'Thèmes',
      equipment: 'Matériel',
      description: 'Description',
      inGame: 'En Match',
    },
    fitnessDrillIllustration: {
      redoMessage: "Tu as terminé l'exercice !",
    },
  },
  feedback: {
    alert: {
      title: 'Contactez-nous !',
      content:
        'Nous serions ravis de connaitre vos opinions pour améliorer notre application.\n\nVoulez-vous nous envoyer un message ?',
      cancel: 'Annuler',
      cta: 'Envoyer',
    },
    subject: "Retours sur l'app Disc In",
  },
  dictionaryPage: {
    translation: 'Traduction : ',
  },
  drillListPage: {
    availableDrills: {
      one: '1 exercice disponible',
      other: '{{count}} exercices disponibles',
    },
    theme: '{{theme}}',
    all: 'TOUS LES SUJETS',
    custom: 'PERSONNALISÉ',
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
    level: 'Niveau',
    intensity: 'Intensité',
    equipment: 'Matériel',
    seasonTiming: 'Temporalité',
    goals: 'Thèmes',
    duration: 'durée',
    durationLabel: 'Combien de temps as-tu ?   {{duration}} mins',
    cta: {
      zero: 'Aucun exercice correspondant',
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
};
