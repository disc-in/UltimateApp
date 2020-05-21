import { Intensities, Levels, FrisbeeGoals, FitnessGoals, SeasonTimings, EquipmentLabels } from '../../Fixtures';

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
  homePage: {
    frisbeeDrills: 'Exercices de Frisbee',
    fitnessDrills: 'Exercices de Fitness',
    programs: "Programmes d'entraînement",
    editor: 'Editeur de drills',
  },
  animationEditor: {
    comingSoon: {
      title: "C'est pour bientôt !",
      content:
        "Vous pourrez bientôt ajouter des exercices, séances et programmes d'entraînements.\nPour l'instant, vous pouvez nous envoyer par mail votre nouvel exercice.",
      cancel: 'Annuler',
      cta: "Envoyer à l'équipe",
    },
    sharePlaceholder: "Pouvez-vous ajouter cet exercices à l'application?",
  },
  drillIllustration: {
    finish: 'Terminer',
    noContent: 'Pas de contenu pour cet exercice',
    redoMessage: "Vous avez terminé l'exercice !",
  },
  drillListPage: {
    availableDrills: {
      one: '1 exercice disponible',
      other: '{{count}} exercices disponibles',
    },
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
  programListPage: {
    allTrainings: 'Tous les entraînements',
  },
  trainingListPage: {
    availableTrainings: {
      one: '{{count}} entraînement disponible',
      other: '{{count}} entraînements disponibles',
    },
    players: '{{count}}+ joueurs',
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
