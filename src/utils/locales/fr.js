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
      [FrisbeeGoals.MARK]: 'Marque',
      [FrisbeeGoals.HANDLING]: 'Handling',
      [FrisbeeGoals.CUTTING]: 'Cutting',
      [FrisbeeGoals.THROWING]: 'Lancers',
      [FrisbeeGoals.BREAK]: 'Casser la marque',
      [FrisbeeGoals.COMMUNICATION]: 'Communication',
      [FrisbeeGoals.CATCH]: 'Catch',
      [FrisbeeGoals.PLAY]: 'Temps de jeu',
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
    drillPageMinimal: '{{training}} - exercices',
    animationEditorPage: 'Nouvel exercice',
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
  animationEditorPage: {
    untitledDrill: 'Exercice sans titre',
  },
  editor: {
    saveModificationsTitle: 'Voulez-vous sauvegarder les modifications ?',
    saveModificationsText:
      'L\'exercice "{{title}}" a été modifié.\n\nSouhaitez-vous conserver ces modifications avant de le fermer ?',
    savedDrillsList: {
      title: 'Exercices sauvegardés',
      empty: "Vous n'avez pas encore sauvegardé d'exercices",
      delete: 'Supprimer',
      deleteConfirmation: 'Voulez-vous vraiment supprimer cet exercice ?',
    },
    currentDrillManager: {
      save: 'Sauvegarder',
      saveSuccess: 'L\'exo "{{title}}" a été sauvegardé',
      rename: 'Renommer',
      new: 'Nouveau',
      share: 'Contribuer',
      sharePlaceholder: "Pouvez-vous ajouter cet exercice à l'application ?",
    },
    renameDrillModal: {
      placeholder: 'Appuyer ici pour renommer',
      alreadyExists: 'Ce nom existe déjà',
      empty: 'Le nom ne peut pas être vide',
      renameSuccess: "L'exo a été renommé avec succès",
      cta: 'Valider',
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
  fitnessDrillIllustration: {
    redoMessage: "Tu as terminé l'exercice !",
  },
  dictionaryPage: {
    translation: 'Traduction : ',
  },
  drillListPage: {
    availableDrills: {
      one: '1 exercice disponible',
      other: '{{count}} exercices disponibles',
    },
    filter: 'FILTRER',
  },
  drillPage: {
    minutes: 'minutes',
    players: 'joueurs',
    level: 'niveau',
    start: 'Start',
    goal: 'Thèmes',
    equipment: 'Matériel',
    description: 'Description',
  },
  drillPageMinimal: {
    headerTitle: 'Exercices de {{trainingTitle}}',
    details: 'DÉTAILS',
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
      completion: '{{done}}/{{total}} entraînements',
    },
  },
  tacticsPage: {
    chooseTopic: 'Choisis un sujet :',
  },
};
