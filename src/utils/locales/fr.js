import { Intensities, Levels, FrisbeeGoals, FitnessGoals, SeasonTimings, EquipmentLabels } from '../../Fixtures/config';

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
    animationEditorPage: 'Nouvel exo (expérimental)',
    dictionaryPage: 'Lexique',
    essentialPage: 'Les bases du jeu',
    tacticsPage: 'Tactiques',
  },
  shared: {
    back: 'Retour',
  },
  homePage: {
    frisbeeTab: 'Frisbee',
    fitnessTab: 'Fitness',
    theoryTab: 'Theorie',
    editor: 'Editeur',
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
  animationEditor: {
    comingSoon: {
      title: "C'est pour bientôt !",
      content:
        "Vous pourrez bientôt ajouter des exercices, séances et programmes d'entraînements.\nPour l'instant, vous pouvez nous envoyer par mail votre nouvel exercice.",
      cancel: 'Annuler',
      cta: "Envoyer à l'équipe",
    },
    sharePlaceholder: "Pouvez-vous ajouter cet exercices à l'application ?",
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
  drillListPage: {
    availableDrills: {
      one: '1 exercice disponible',
      other: '{{count}} exercices disponibles',
    },
    filter: 'FILTRE',
  },
  drillPage: {
    minutes: 'minutes',
    players: 'joueurs',
    level: 'niveau',
    start: 'Start',
    goal: 'Objectifs',
    equipment: 'Matériel',
    description: 'Description',
  },
  drillPageMinimal: {
    headerTitle: 'Exercices de {{trainingTitle}}',
    details: 'DÉTAILS',
    finish: "Terminer l'entraînement !",
    next: 'Exercice suivant',
  },
  fitnessFilters: {
    favorites: 'Seulement mes favoris',
    level: 'Niveau',
    intensity: 'Intensité',
    equipment: 'Matériel',
    seasonTiming: 'Temporalité',
    goals: 'Objectifs',
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
    loading: 'Chargement...',
    error: 'Oups ! Une erreur est survenue pendant le chargement de la vidéo',
  },
  programs: {
    program: {
      completion: '{{done}}/{{total}} entraînements',
    },
  },
};
