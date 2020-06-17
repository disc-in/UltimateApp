import {
  DrillTypes,
  Intensities,
  Levels,
  FrisbeeGoals,
  FitnessGoals,
  SeasonTimings,
  EquipmentLabels,
  IllustrationType,
} from './config';

import { dictionary, essentials, tactics } from './theory.fr';

import animationSquare from './Animation/AnimationSquare';
import animationGoToTen from './Animation/AnimationGoToTen';
import throwingMachine from './Animation/ThrowingMachine';
import giveAndGo from './Animation/GiveAndGo';
import threePerson from './Animation/ThreePerson';
import redemption from './Animation/Redemption';
import dwarDuel from './Animation/DwarfDuel';
import backdoor from './Animation/Backdoor';
import powerReset from './Animation/PowerReset';
import resetOpen from './Animation/ResetOpen';
import upline from './Animation/Upline';
import around from './Animation/Around';
import resetBreak from './Animation/ResetBreak';
import ladder from './Animation/Ladder';
import giveAndGoRace from './Animation/GiveAndGoRace';
import blockTheUnder from './Animation/BlockTheUnder';
import blockEverything from './Animation/BlockEverything';
import defensiveUnder from './Animation/DefensiveUnder';
import defenseDeep from './Animation/DefenseDeep';
import threeVersusTwo from './Animation/ThreeVersusTwo';
import train from './Animation/Train';
import trainRace from './Animation/TrainRace';
import triangleDeath from './Animation/TriangleDeath';
import oneFakeTrain from './Animation/OneFakeTrain';
import twoFakeTrain from './Animation/TwoFakeTrain';
import breakSide from './Animation/BreakSide';
import goaltimate from './Animation/Goaltimate';
import bigEight from './Animation/BigEight';
import theM from './Animation/TheM';
import dishiesChain from './Animation/DishiesChain';
import dishiesPoach from './Animation/DishiesPoach';

const stabilityDrill = {
  id: 1,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Stabilité hors saison 1',
  image: 'https://zupimages.net/up/20/19/75s2.jpg',
  description:
    "C'est la première séance du programme. Nous commençons par de la stabilité pour construire la base nécessaire pour le reste de la saison",
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'Kettlebell - Dumbbell',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FitnessGoals.LEGS, FitnessGoals.UPPER],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 2,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 3,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 4,
      title: 'Single Arm Dumbbell Bench Press (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 5,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 6,
      title: 'Single Leg Vertical Jump (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
      sounds: false,
      repetition: '5',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 7,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 8,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 9,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 10,
      title: 'Single Arm Dumbbell Bench Press (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 11,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 12,
      title: 'Single Leg Vertical Jump (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
      sounds: false,
      repetition: '5',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 13,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 14,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 14,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 15,
      title: 'Single Arm Dumbbell Bench Press (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 16,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 17,
      title: 'Single Leg Vertical Jump (Right)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
      sounds: false,
      repetition: '5',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 18,
      title: 'Split Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406746924',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 19,
      title: 'Dumbbell Hip Thrust',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747302',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 20,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 21,
      title: 'Single Arm Dumbbell Bench Press (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747599',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 22,
      title: 'Dual Gorilla Kettlebell Rows',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747038',
      sounds: false,
      repetition: '12',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 23,
      title: 'Single Leg Vertical Jump (Left)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747769',
      sounds: false,
      repetition: '5',
      rest: 'As required',
      instruction: '',
    },
  ],
};

const strengthDrill = {
  id: 2,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Force hors-saison 1',
  image: 'https://zupimages.net/up/20/19/qxbk.jpg',
  description: 'La première séance de force de la saison',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.FULL,
  equipment: 'Kettlebell - Dumbbell - Tow bar',
  durationInMinutes: 15,
  intensity: Intensities.HIGH,
  goals: [FitnessGoals.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 2,
      title: 'Single Leg Box Jump (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747656',
      sounds: false,
      repetition: '6',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 3,
      title: 'Single Leg Dumbbell Romanian Deadlift (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747707',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 4,
      title: 'Pull Ups',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747791',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 5,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 6,
      title: 'Single Leg Box Jump (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747656',
      sounds: false,
      repetition: '6',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 7,
      title: 'Single Leg Dumbbell Romanian Deadlift (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747707',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 8,
      title: 'Pull Ups',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747791',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 9,
      title: 'Goblet Cossack Squats',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747476',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 10,
      title: 'Single Leg Box Jump (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747656',
      sounds: false,
      repetition: '6',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 11,
      title: 'Single Leg Dumbbell Romanian Deadlift (Alternate)',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747707',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 12,
      title: 'Pull Ups',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406747791',
      sounds: false,
      repetition: '8',
      rest: '90 s',
      instruction: '',
    },
  ],
};

const speedDrill = {
  id: 3,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Vitesse hors-saison 1',
  image: 'https://zupimages.net/up/20/19/vt6g.jpg',
  description: 'Idéal pour reprendre les séances physiques avec une première séance orientée vitesse.',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'Aucun',
  durationInMinutes: 30,
  intensity: Intensities.HIGH,
  goals: [FitnessGoals.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Dynamic Marchs',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406764988',
      sounds: false,
      repetition: '2',
      rest: 'Walk back',
      instruction: '',
    },
    {
      id: 2,
      title: 'Wall Fire',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406764961',
      sounds: false,
      repetition: '3',
      rest: 'As required',
      instruction: '',
    },
    {
      id: 3,
      title: 'A Skips - 15 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406760709',
      sounds: false,
      repetition: '3',
      rest: 'Walk Back',
      instruction: '',
    },
    {
      id: 4,
      title: 'B Skips - 15 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406760726',
      sounds: false,
      repetition: '3',
      rest: 'Walk Back',
      instruction: '',
    },
    {
      id: 5,
      title: 'Bounding - 25 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406764918',
      sounds: false,
      repetition: '2',
      rest: 'Walk Back',
      instruction: '',
    },
    {
      id: 6,
      title: 'Sprint - 10 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406765010',
      sounds: false,
      repetition: '4',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 7,
      title: 'Sprint - 30 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406765010',
      sounds: false,
      repetition: '4',
      rest: '90 s',
      instruction: '',
    },
    {
      id: 8,
      title: 'Sprint - 50 m',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406765010',
      sounds: false,
      repetition: '3',
      rest: '90 s',
      instruction: '',
    },
  ],
};

const conditioningDrill = {
  id: 4,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Endurance hors-saison 1',
  image: 'https://zupimages.net/up/20/19/kj0f.jpg',
  description: 'Suivez la vidéo pour cette première séance de reprise',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'Aucun',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FitnessGoals.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Suivez la vidéo',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '406556796',
      sounds: true,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const warmupGameDrill = {
  id: 5,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Échauffment pour un match',
  image: 'https://zupimages.net/up/20/19/f2bd.jpg',
  description: 'Suivez les exercices de la vidéo pour préparer les organismes à une sénce à intensité de match',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'Aucun',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FitnessGoals.WARM_UP],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Suivez la vidéo',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '413628757',
      sounds: true,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const warmupDrill = {
  id: 6,
  type: DrillTypes.FITNESS,
  author: 'Moby',
  title: 'Échauffment basique',
  image: 'https://zupimages.net/up/20/19/va5f.jpg',
  description: "Suivez la vidéo pour préparer le corps à l'effort",
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'Aucun',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FitnessGoals.WARM_UP],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Echauffement basique',
      illustrationType: IllustrationType.VIMEO,
      sounds: true,
      illustrationSource: '415430252',
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const conditioningFullbodyDrill = {
  id: 7,
  type: DrillTypes.FITNESS,
  author: 'Pamela Reif',
  title: 'Endurance',
  image: 'https://zupimages.net/up/20/19/kj0f.jpg',
  description: "Suivez la vidéo pour travailler sur l'ensemble du corps ",
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'Aucun',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FitnessGoals.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Suivez là',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '416604913',
      sounds: true,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const basicThrowsDrill = {
  id: 1001,
  type: DrillTypes.FRISBEE,
  author: 'Rowan McDonnell',
  title: 'Lancers de base',
  image: 'https://zupimages.net/up/20/19/zgxt.jpg',
  description: 'Exercices de lancer simples pour apprendre à lancer le frisbee',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque pour 2 joueurs',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'La Machine à lancer',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: throwingMachine,
      repetition: '',
      rest: '',
      instruction: 'En binôme, les joueurs lancent des revers et coup droits pendant 5 minutes.',
    },
    {
      id: 2,
      title: 'Montante - descendante',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: ladder,
      repetition: '',
      rest: '',
      instruction:
        'Les joueurs se font face en binôme, sur deux lignes pour se faire des passes. Le coach décide quel lancer ils font. Si le disque tombe, le binôme correspondant se déplace tout à droite de la ligne. A la fin du temps, la paire la plus à gauche gagne !',
    },
  ],
};

const breakDrill = {
  id: 1023,
  type: DrillTypes.FRISBEE,
  author: 'Martin',
  title: 'Cuts vers le côté fermé',
  image: 'https://zupimages.net/up/20/19/83fx.jpg',
  description: "Pour apprendre à jouer dans le côté fermé, et empêcher l'adversaire de le faire !",
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '6 disques - 6 plots',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.BREAK, FrisbeeGoals.MARK],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: breakSide,
      instruction:
        "Deux lignes de joueurs se font face, à environ 20 mètres de distance. Une force est décidée pour l'exercice. Le premier joueur d'une ligne est le lanceur, il est défendu par une marque qui applique la force. Le premier joueur de l'autre ligne faire un cut vers le lanceur dans le côté ouvert, puis quand le lanceur faire une feinte, il faire un contre-cut horizontal vers le côté fermé. Le lanceur doit alors casser sa marque pour réussir sa passe dans le côté fermé. Le lanceur fait ensuite le cut suivant vers l'autre ligne. La marque devient le prochain lanceur et le joueur suivant devient la marque. Les joueurs en attente doivent avoir quelques disques.",
    },
    {
      id: 2,
      title: 'La Grande Muraille de Chine',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: breakSide,
      instruction:
        "Si l'on veut faire travailler la marque, on peut insister sur le fait de ne jamais se prendre 2 fois de suite le même break. Il s'agit d'observer quelle est la passe préférentielle de l'attaquant et de tout faire pour la bloquer. On peut compter les points en valorisant les marques qui ont provoqué une passe ratée ou hors-timing",
    },
  ],
};

const threeColumnsLongDrill = {
  id: 1025,
  type: DrillTypes.FRISBEE,
  author: 'Martin',
  title: '3 columns long shot',
  image: 'https://zupimages.net/up/20/19/330p.jpg',
  description: 'Basic long passes drill. You want your players to alternate between throwing, running and passing',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc for 3 players - 3 cones',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '90s',
      instruction:
        "1- The cutter run as fast as possible then he claps the second mate's hand. \n 2- Cut under and long ",
    },
  ],
};

const twoColumnsLongDrill = {
  id: 1026,
  type: DrillTypes.FRISBEE,
  author: 'Martin',
  title: '2 columns with defense',
  image: 'https://zupimages.net/up/20/19/fvm4.jpg',
  description:
    'Basic long passes drill. You want your players to alternate between throwing, running and passing, with offense and defense',
  minimalPlayersNumber: 18,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc for 3 players - 3 cones',
  durationInMinutes: 30,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '90s',
      instruction: '',
    },
  ],
};

const treasureHuntDrill = {
  id: 1009,
  type: DrillTypes.FRISBEE,
  author: 'PUC Ultimate',
  title: 'Treasure Hunt',
  image: 'https://zupimages.net/up/20/19/z7lq.jpg',
  description:
    '2 teams are fighting. The objective is to bring the 5 Frisbees back into a square delimited by the cones.\nPlayers are not allowed to walk with the Frisbee. When a Frisbee falls or is intercepted, it must be brought back to the starting point by the attacking team. The first team that "saves" all its frisbees wins.',
  minimalPlayersNumber: 10,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '10 discs - 10 cones',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.PLAY],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Basic Version',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        'Goals: Bringing all the disc in the square. \nA player can play in offense on his side or go on the other side to play defense.\nIf there is a turnover, the frisbee goes back to the starting line.\nFirst team that saves all the discs win!',
    },
  ],
};

const kyeDrill = {
  id: 1010,
  type: DrillTypes.FRISBEE,
  author: 'Kye',
  title: '3 vs 2',
  image: 'https://zupimages.net/up/20/19/zgxt.jpg',
  description: "Situation de match. L'équipe de 2 reste en défense s'ils arrivent à provoquer un turnover.",
  minimalPlayersNumber: 5,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque - 2 plots',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE, FrisbeeGoals.PLAY, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '3 versus 2',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: threeVersusTwo,
      repetition: '',
      rest: '',
      instruction:
        "La défense applique une force middle. Les attaquants ont seulement le droit de faire 2 cuts pour avoir le disque. Ils peuvent recevoir une passe de continuité en profondeur ou revenir vers le lanceur. L'objectif de l'exercice est d'apprendre à placer très vite sa marque et d'utiliser son corps et sa position pour contrôler les cuts des attaquants.",
    },
  ],
};

const bigEightDrill = {
  id: 1011,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'The big 8',
  image: 'https://zupimages.net/up/20/19/5209.jpg',
  description: 'Making a pass circuit where each player will try to work on their throws',
  minimalPlayersNumber: 16,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 discs - 8 cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Le grand 8',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: bigEight,
      repetition: '',
      rest: '',
      instruction:
        'Here is the rotation: \nHandler in the middle \nReset going for the backdoor \nFirst of the stack following in the break \nLast of the stack going long \nSame but in opposite position ',
    },
  ],
};

const trainDrill = {
  id: 1002,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Le train',
  image: 'https://zupimages.net/up/20/19/ac8s.jpg',
  description: 'Idéal pour travailler la continuité sur un stack vertical',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Le train classique',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: train,
      repetition: '',
      rest: '',
      instruction:
        "Mettre en place un stack vertcal de 5 attaquants, un lanceur et un handler de soutien. Choisir une force. Le dernier attaquant du stack déclenche un appel en longue tout en regardant le lanceur. Quand le lanceur fait une feinte, l'attaquant fait un contre-cut dans l'espace ouvert et reçoit le disque. L'attaquant suivant doit commencer son cut en longue pour être à pleine vitesse quand le précédent attrape le disque. Le reste du stack se replace à hauteur pour assurer la continuité, le lanceur devient handler de soutien et le soutien devient premier du stack. Répéter sur la longueur du terrain.",
    },
    {
      id: 2,
      title: 'Les aventuriers du rail',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: trainRace,
      repetition: '',
      rest: '',
      instruction:
        "Deux équipes effectuent le même exercice. Elles commencent au même niveau et font la course sur la longueur du terrain. Vous pouvez décider d'un nombre de passes à réaliser ou d'une distance à parcourir La première équipe qui y arrive gagne !",
    },
  ],
};

const goaltimateDrill = {
  id: 1004,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Goaltimate',
  image: 'https://zupimages.net/up/20/19/gce7.jpg',
  description:
    'The object is to score points by throwing a disc to a teammate in a small scoring area, through a large semicircular hoop called the goal.',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 10 cones or 1 goal',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.DEFENSE, FrisbeeGoals.PLAY, FrisbeeGoals.PLAY],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Goaltimate rules',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: goaltimate,
      repetition: '',
      rest: '',
      instruction:
        '4 on 4 \nStall count of 5 \nWhenever a turnover happens, the new offensive team must ‘clear’ the disc by taking it into the clear box, and can then attack the goal.\nOne point for a completed pass that travels through the hoop and is caught in the end zone by your teammate',
    },
    {
      id: 2,
      title: 'Présentation du goaltimate',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '416849035',
      sounds: true,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const giveAndGoDrill = {
  id: 1013,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Give and Go',
  image: 'https://zupimages.net/up/20/19/s9fe.jpg',
  description: 'Suivez votre disque après la passe aussi vite que possible',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque - 12 plots',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Le Une-deux',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: giveAndGo,
      repetition: '',
      rest: '',
      instruction: "Les joueurs doivent réaliser l'exercice aussi vite que possible. Attention à éviter les travels",
    },
    {
      id: 2,
      title: 'Ça compte !',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: giveAndGoRace,
      repetition: '',
      rest: '',
      instruction: 'Une course entre 2 équipes. La première à 25 passes gagne !',
    },
  ],
};

const aussieDrill = {
  id: 1008,
  type: DrillTypes.FRISBEE,
  author: 'Matt Hill',
  title: 'Aussie games',
  image: 'https://zupimages.net/up/20/19/78g2.png',
  description: 'You can run with the disc',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '4 discs - 20 cones',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.COMMUNICATION, FrisbeeGoals.PLAY],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: "initiation ludique à l'ultimate",
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        '2 teams plays against each others.There are 2 territories for each team and they play with 4 discs.\nTo score a point, a player has to bring a disc in one of the endzone of the opponent team. A player can run with a disc. If a player, get touch in the territory of the other team or the disc is intercepted or touch the ground, he looses the possession. In his territory, he is invincible. First team to 5 wins! ',
    },
  ],
};

const bolognaMDrill = {
  id: 1024,
  type: DrillTypes.FRISBEE,
  author: 'Bologna',
  title: 'The M',
  image: 'https://zupimages.net/up/20/19/akuy.jpg',
  description: 'Follow the M',
  minimalPlayersNumber: 10,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '5 disc - 6 cones',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.ADVANCED,
  steps: [
    {
      id: 1,
      title: 'Le grand M',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: theM,
      repetition: '',
      rest: '',
      instruction: 'Working on the reset from the front of the stack',
    },
  ],
};

const goToTenDrill = {
  id: 1014,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Go to 10',
  image: 'https://zupimages.net/up/20/19/rcyt.jpg',
  description: 'First team with 10 completes passes win',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 4 cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.PLAY, FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Passe à 10',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationGoToTen,
      repetition: '',
      rest: '',
      instruction: 'First team with 10 completes passes win. Stall to 6.',
    },
  ],
};

const endzoneDameDrill = {
  id: 1015,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Endzone Game',
  image: 'https://zupimages.net/up/20/19/cd36.jpg',
  description: 'Game to 5. If you score, your team stay in offense',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 4 cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.PLAY, FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Endzone Game',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        'Game to 5. If you score, your team stay in offense.\nThe player who caught the disc in the endzone has to keep the disc to start the next offense ',
    },
    {
      id: 2,
      title: 'Endzone finition',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction: 'Everybody start behing the disc.\nGame to 5',
    },
  ],
};

const bulldogDrill = {
  id: 1016,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'British Bulldog',
  image: 'https://zupimages.net/up/20/19/tf79.jpg',
  description:
    'The bulldogs stand in the middle of the play area. All remaining players stand at one end of the area (home). The aim of the game is to run from one end of the field of play to the other, without being caught by the bulldogs. When a player is caught, they become a bulldog themselves.',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '4 cones',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.DEFENSE, FrisbeeGoals.PLAY, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: "L'épervier",
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        'The bulldogs try to catch the remaining players. The aim of the game is to run from one end of the field of play to the other, without being caught.\nWhen a player is caught, he must hold hands with one another and form a line of 3 bulldogs.\n If there is more than 3 bulldogs, they split in more than one line',
    },
  ],
};

const menageATroisDrill = {
  id: 1003,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Ménage à trois',
  image: 'https://zupimages.net/up/20/19/ai3z.jpg',
  description: "Le lanceur essaie de faire sa passe au receveur en s'aidant de n'importe quelle feinte",
  minimalPlayersNumber: 3,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disque',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.DEFENSE, FrisbeeGoals.BREAK],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Marque à plat',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: threePerson,
      repetition: '',
      rest: '',
      instruction:
        "Le défenseur place une marque à plat (marque straight). Il fait 3 passages en défense avant d'être remplacé.",
    },
    {
      id: 2,
      title: 'Rédemption',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: redemption,
      repetition: '',
      rest: '',
      instruction:
        "Même placement que pour un ménage à trois classique, mais avec des joueurs en attente derrière le lanceur et le receveur. L'ordre est recevoir-lancer-défendre, puis le joueur se place à la fin de la file. Le lanceur doit réussir sa passe pour que le receveur attrape le frisbee en gardant 1 pied au sol. S'il n'y arrive pas, il doit ensuite provoquer une erreur lorsqu'il est en défense, sous peine d'être éliminé ! Le jeu continue jusqu'à ce qu'il n'y ait plus que 2 joueurs en jeu.",
    },
  ],
};

const dwarfDuelDrill = {
  id: 1012,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Le duel des nains',
  image: 'https://zupimages.net/up/20/19/3m3k.jpg',
  description: 'Interdiction de sauter, tout est dans le positionnement !',
  minimalPlayersNumber: 3,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque - 2 plots',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Le duel',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: dwarDuel,
      repetition: '',
      rest: '',
      instruction:
        "Le coach ou un joueur expérimenté lance des longues.\nQuand l'attaquant commence à courir, le défenseur peur se déplacer. Aucun des deux joueurs n'a le droit de sauter pour attraper le frisbee.",
    },
  ],
};

const dishieChainDrill = {
  id: 1017,
  type: DrillTypes.FRISBEE,
  author: 'Mooncatcher',
  title: 'Dishie Chain',
  image: 'https://zupimages.net/up/20/19/stdq.jpg',
  description: 'Basic long passes drill. You want your players to alternate between throwing, running and passing',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 2 cones',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'La chaine des catapultes',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: dishiesChain,
      repetition: '',
      rest: '',
      instruction:
        '2 columns: \n2 players from the same column go in direction of the thrower. When of them receive the disc.\n The thrower is looking ot make a dishie when the other cutter is going long.\n The cutter catching the long throw becomes the new first thrower for the other column',
    },
    {
      id: 2,
      title: 'Eclater un poach',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: dishiesPoach,
      repetition: '',
      rest: '',
      instruction: 'Add a defensive player to work on the poach with a side stack',
    },
  ],
};

const breakDanceDrill = {
  id: 1018,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Break Dance',
  image: 'https://zupimages.net/up/20/19/agsd.jpg',
  description: 'Making a christmas tree in the break',
  minimalPlayersNumber: 12,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '5 discs - 10 cones',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.ADVANCED,
  steps: [
    {
      id: 1,
      title: 'Break continuity',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        'The cutter try to work on their timing to start their almort horizontal cut. The player goes to the next cones after his throws ',
    },
    {
      id: 2,
      title: 'The race',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction:
        'The 2 teams are racing. \nWhen the disc reach the last player, he has to run as fast as possible to start a new serie. \nFirst team that make the complete rotation win!',
    },
  ],
};

const triangleOfDeathdrill = {
  id: 1019,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Le Triangle de la mort',
  image: 'https://zupimages.net/up/20/19/kmlc.jpg',
  description: 'Lancer 10 longues à la suite aussi loin et aussi vite que possible',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '10 disque - 3 plots',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'La catapulte',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: triangleDeath,
      repetition: '',
      rest: '',
      instruction:
        "Installer un petit triangle de 3 plots à environ 3 mètres de distance, pointe vers le terrain. On lanceur commence à une extrémité. Un joueur se place à quelques mètres en retrait avec une dizaine de disques. Les autres joueurs forment un stack vertical.\n\nLe lanceur court vers la point du triangle puis vers l'autre extrémité, reçoit une petite passe flottante du joueur en retrait et lance une longue sur le premier cutter. Il fait ensuite immédiatement la même chose de l'autre côté. A répéter une dizaine de fois d'affilée, ou jusqu'à ce que tous les attaquants aient reçu un disque.",
    },
  ],
};

const chevronDrill = {
  id: 1022,
  type: DrillTypes.FRISBEE,
  author: 'Author',
  title: 'Passes en chevrons',
  image: 'https://zupimages.net/up/20/19/1y4x.jpg',
  description: 'Faire des cuts dans le bon timing, attraper puis lancer immédiatement',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque - 2 plots',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.CUTTING, FrisbeeGoals.CATCH, FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const trainOfFakeDrill = {
  id: 1020,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Le Train des feintes',
  image: 'https://zupimages.net/up/20/19/ac8s.jpg',
  description: 'Idéal pour travailler la continuité sur un stack vertical',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Le train classique',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: train,
      repetition: '',
      rest: '',
      instruction:
        "Mettre en place un stack vertical de 5 attaquants, un lanceur et un handler de soutien. Choisir une force. Le dernier attaquant du stack déclenche un appel en longue tout en regardant le lanceur. Quand le lanceur fait une feinte, l'attaquant fait un contre-cut dans l'espace ouvert et reçoit le disque. L'attaquant suivant doit commencer son cut en longue pour être à pleine vitesse quand le précédent attrape le disque. Le reste du stack se replace à hauteur pour assurer la continuité, le lanceur devient handler de soutien et le soutien devient premier du stack. Répéter sur la longueur du terrain.",
    },
    {
      id: 2,
      title: 'Avec 1 feinte',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: oneFakeTrain,
      repetition: '',
      rest: '',
      instruction:
        "Mettre en place un train classique. Cette fois, le lanceur peut décider de faire une deuxième feinte quand le cutter fait son deuxième appel. Si c'est le cas, le cutter libère l'espace et retourne dans le stack en 2e position. Le lanceur regarde alors le handler de soutien qui fait un appel vers l'avant et reçoit la passe. L'exercice continue.",
    },
    {
      id: 3,
      title: 'Avec 2 feintes',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: twoFakeTrain,
      repetition: '',
      rest: '',
      instruction:
        "Mettre en place un train classique. Cette fois, quand le soutien fait son cut vers l'avant, le lanceur peut faire une deuxième feinte. Si c'est le cas, le premier joueur du stack fait un cut pour recevoir un dump. L'exercice continue.",
    },
  ],
};

const resetOpenDrill = {
  id: 1005,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Reset Open',
  image: 'https://zupimages.net/up/20/19/tzk3.jpg',
  description: 'Faire des cuts dans le bon timing, attraper puis lancer immédiatement',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disque',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.CUTTING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Par derrière',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: backdoor,
      repetition: '',
      rest: '',
      instruction:
        "Le lanceur est défendu par une marque qui applique une force et son handler de soutien se place à 45° derrière lui, du côté ouvert.\nLe lanceur  commence par regarder vers l'avant pour simuler une situationde jeu, avant de se tourner vers son soutien et d'établir un contact visuel avec lui. Ensuite, le soutien fait un cut derrière le lanceur et reçoit le disque.\nLe disque est alors renvoyé au lanceur pour refaire l'exercice de l'autre côté en inversant la force.",
    },
    {
      id: 2,
      title: 'Power position',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: powerReset,
      repetition: '',
      rest: '',
      instruction:
        "Le placement est le même que pour la première version. Cette fois, quand le contact visuel est établi, le soutien fait un cut vers l'avant et reçoit une passe devant lui.",
    },
    {
      id: 3,
      title: 'Situation de match',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: resetOpen,
      repetition: '',
      rest: '',
      instruction:
        "Le placement est le même. La défense sur le soutien est à 100%. L'attaquant doit choisir une des deux options de cut pour se démarquer. Il ne peut faire qu'une feinte. Chaque équipe de 2 faire le même nombre d'essais, et celle qui réussi le plus de passes gagne !",
    },
  ],
};

const resetBreakDrill = {
  id: 1006,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Reset Break',
  image: 'https://zupimages.net/up/20/19/w90f.jpg',
  description: 'Faire des cuts dans le bon timing, attraper puis lancer immédiatement',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disque',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.CUTTING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'The 45° Upline',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: upline,
      repetition: '',
      rest: '',
      instruction:
        "Le lanceur est défendu par une marque qui applique une force et son handler de soutien se place à sa hauteur, du côté fermé.\n. Le soutien se déplace tranquillement vers l'avant jusqu'à se trouver à 45° par rapport au lanceur. Quand le lanceur établit le contact visuel, le soutien fait un cut incisif vers l'avant.\nUne fois la passe réalisée, le disque est renvoyé au lanceur et l'exercice est répété plusieurs fois, en changeant la force.",
    },
    {
      id: 2,
      title: 'The Easy Reset',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: around,
      repetition: '',
      rest: '',
      instruction:
        "Le placement est le même. Quane le contact visuel est établi, le lanceur contourne sa marque par l'arrière pour faire sa passe au soutien. La passe doit arriver à peu près à hauteur du lanceur, là où le soutien se trouvait initialement. C'est la passe qui déclenche le cut du soutien.",
    },
    {
      id: 3,
      title: 'Situation de match',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: resetBreak,
      repetition: '',
      rest: '',
      instruction:
        "Le placement est le même. La défense est à 100%. Le soutien doit choisir une des deux solutions pour faire son cut et recevoir le disque. Le soutien ne peut changer de direction qu'une fois. Chaque équipe de 2 faire le même nombre d'essais, et celle qui réussi le plus de passes gagne !",
    },
  ],
};

const youShallNotPassDrill = {
  id: 1007,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Vous ne passerez pas',
  image: 'https://zupimages.net/up/20/19/90z6.jpg',
  description: "Utiliser son corps pour empêcher l'attaquant de recevoir le disque",
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disque - 4 plots',
  durationInMinutes: 12,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Bloquer les passes courtes',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: blockTheUnder,
      repetition: '',
      rest: '',
      instruction:
        "L'attaquant et le défenseur courrent vers le carré central puis vers le fond du terrain. L'attaquant doit faire un contre-cut vers le disque pour recevoir une passe dans le carré. Il ne peut pas rechanger de direction. Le défenseur doit se positionner pour empêcher l'attaquant de le dépasser pour atteindre le carré. Le lanceur ne peut pas lancer sur le premier cut en longue",
    },
    {
      id: 2,
      title: 'Bloquez tout !',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: blockEverything,
      repetition: '',
      rest: '',
      instruction: "Même exercice, mais le lanceur a le droit de lancer la longue si c'est pertinent",
    },
    {
      id: 3,
      title: 'Comptez les points',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: blockEverything,
      repetition: '',
      rest: '',
      instruction:
        "Faites deux équipes et mette en place l'exercice précédent. Cette fois, si une passe n'est pas réussie, la défense marque un point. Inversez attaque et défense après un certain nombre d'essais. L'équipe qui a le plus de points gagne !",
    },
  ],
};

const defensePositionDrill = {
  id: 1021,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Positionnement défensif',
  image: 'https://zupimages.net/up/20/19/zigu.jpg',
  description: "Se positionner correctement en fonction de la stratégie de l'équipe",
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disque - 5 plots',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Bloquer les passes courtes',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: defensiveUnder,
      repetition: '',
      rest: '',
      instruction:
        "Un lanceur est en place avec une marque qui applique une force. Un receveur commence à n'importe quel plot, avec un défenseur qui se place à 45° devant lui, dans le côté ouvert. Le receveur court vers les cones dans n'importe quel ordre et le défenseur doit maintenir son positionnement par rapport au receveur en permanence.",
    },
    {
      id: 2,
      title: 'Bloquer les passes longues',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: defenseDeep,
      repetition: '',
      rest: '',
      instruction: 'Même exercice. Cette fois, le défenseur doit toujours se positionner à 45° derrière le receveur.',
    },
  ],
};

const normalGame = {
  id: 2001,
  type: DrillTypes.GAME,
  author: 'Martin',
  title: 'Match 7 contre 7',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    "Un match reste un des meilleurs moyens de pratiquer et de s'amuser. Idéal pour terminer un entraînement car c'est l'occasion pour les joueurs de mettre en application ce qu'ils ont pu apprendre précédemment. Il est important de rappeler aux joueurs les situations qu'on cherche à retrouver dans le match (par exemple jouer dans le break si on fait une séane sur le break) car ils oublient toujours tout ça dans la folie du jeu.",
  minimalPlayersNumber: 14,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 cones - 1 disc',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FitnessGoals.CORE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Match classique',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '',
      instruction: '',
    },
  ],
};

const game3v3 = {
  id: 2002,
  type: DrillTypes.GAME,
  author: 'Martin',
  title: 'Match 3 contre 3',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    "Une bonne alternative pour donner du temps de jeu aux joueurs s'ils sont très nombreux ou si l'on veut qu'ils touchent beaucoup le frisbee. Cela peut être très physique donc il ne faut pas hésiter à faire des pauses toutes les 5 à 10 minutes.",
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 cones - 1 disc',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.PLAY],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Match 3 vs 3',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '',
      instruction: '',
    },
  ],
};

const longShotGame = {
  id: 2003,
  type: DrillTypes.GAME,
  author: 'Martin',
  title: 'Match spécial longues',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    "Un match classique à 7 contre 7 sur grand terrain. Seule exception : une équipe marque 2 points s'il y a eu une longue réussie sur l'attaque qui a mené au point !",
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 cones - 1 disc',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.PLAY, FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Match spécial Longues',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: animationSquare,
      repetition: '1',
      rest: '',
      instruction: '2 points if there was a successful long shot on the offense that lead to scoring!',
    },
  ],
};

const dumpSwingTraining = {
  id: 1,
  title: 'Dump & Swing',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: 'Faire vivre le disque pour créer des espaces',
  drills: [warmupDrill],
};

const firstWeekFitnessTraining = {
  id: 2,
  title: 'Fitness 1e semaine',
  image: 'https://zupimages.net/up/20/19/9fcj.jpg',
  description: "L'heure de la reprise a sonné",
  drills: [stabilityDrill, strengthDrill, speedDrill, conditioningDrill],
};

const coed2MarkTraining = {
  id: 3,
  title: "J'aime la D",
  image: 'https://zupimages.net/up/20/19/su0s.jpg',
  description: 'Progresser à la marque, générer des passes dangereuses',
  drills: [warmupGameDrill, kyeDrill, breakDrill, normalGame],
};

const coed2LongTraining = {
  id: 4,
  title: 'Longues are Coming',
  image: 'https://zupimages.net/up/20/19/aapn.jpg',
  description: "S'entraîner à tirer des longues",
  drills: [warmupGameDrill, threeColumnsLongDrill, longShotGame],
};

const coed2Long2Training = {
  id: 5,
  title: 'La longue est mon arme',
  image: 'https://zupimages.net/up/20/19/v8f4.jpg',
  description: "S'entraîner à tirer des longues",
  drills: [warmupDrill, triangleOfDeathdrill, twoColumnsLongDrill, longShotGame],
};

const firstChildTraining = {
  id: 6,
  title: 'Première fois',
  image: 'https://zupimages.net/up/20/19/a7io.png',
  description: "Découvrir l'ultimate en s'amusant",
  drills: [warmupDrill, basicThrowsDrill, dwarfDuelDrill, game3v3],
};

const secondChildTraining = {
  id: 7,
  title: 'Les bases de la défense',
  image: 'https://zupimages.net/up/20/19/dgwo.jpg',
  description: 'Mettre en place les bons réflexes défensifs tout en touchant beaucoup de disque',
  drills: [warmupDrill, aussieDrill, menageATroisDrill, game3v3],
};

const thirdChildTraining = {
  id: 8,
  title: 'Chasse aux trésors',
  image: 'https://zupimages.net/up/20/19/c9i6.jpg',
  description: "Idéal pour découvrir les bases de l'ultimate en s'amusant",
  drills: [warmupDrill, bulldogDrill, goToTenDrill, treasureHuntDrill, game3v3],
};

const secondWeekFitnessTraining = {
  id: 9,
  title: 'Fitness 2e semaine',
  image: 'https://zupimages.net/up/20/19/9fcj.jpg',
  description: "C'est la deuxième semaine de la saison, c'est l'heure de travailler son endurance",
  drills: [conditioningFullbodyDrill, conditioningDrill],
};

const secondInintiationAdultTraining = {
  id: 10,
  title: 'Défense & Longues',
  image: 'https://zupimages.net/up/20/19/cd36.jpg',
  description: '',
  drills: [warmupDrill, menageATroisDrill, threeColumnsLongDrill, normalGame],
};

const thirdInintiationAdultTraining = {
  id: 11,
  title: "S'adapter au terrain",
  image: 'https://zupimages.net/up/20/19/hrqz.jpg',
  description: "S'adapter à l'espace disponible sur le terrain tout en s'amusant",
  drills: [warmupDrill, goaltimateDrill, triangleOfDeathdrill, normalGame],
};

const initiationVerticalTraining = {
  id: 12,
  title: 'Stack vertical',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: "Faire progresser l'équipe sur le stack vertical",
  drills: [warmupDrill, trainDrill, bigEightDrill, normalGame],
};

const secondVerticalTraining = {
  id: 13,
  title: 'Le pouvoir du break',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: "Continuer de faire progresser l'équipe sur le stack vertical",
  drills: [warmupDrill, resetBreakDrill, trainOfFakeDrill, game3v3, normalGame],
};

const defenseBaseTraining = {
  id: 14,
  title: 'Positionnement défensif',
  image: 'https://zupimages.net/up/20/19/skjl.jpg',
  description: "Utiliser son corps et son cerveau pour gêner l'attaque",
  drills: [warmupGameDrill, defensePositionDrill, youShallNotPassDrill, breakDrill, normalGame],
};

export default {
  theory: {
    dictionary,
    essentials,
    tactics,
  },
  favoriteDrills: [],
  completeTrainings: [],
  drills: [
    // Fitness
    stabilityDrill,
    strengthDrill,
    speedDrill,
    conditioningDrill,
    warmupGameDrill,
    warmupDrill,
    conditioningFullbodyDrill,
    // Frisbee
    basicThrowsDrill,
    trainDrill,
    menageATroisDrill,
    goaltimateDrill,
    resetOpenDrill,
    resetBreakDrill,
    youShallNotPassDrill,
    aussieDrill,
    treasureHuntDrill,
    kyeDrill,
    bigEightDrill,
    dwarfDuelDrill,
    giveAndGoDrill,
    goToTenDrill,
    endzoneDameDrill,
    bulldogDrill,
    dishieChainDrill,
    breakDanceDrill,
    triangleOfDeathdrill,
    trainOfFakeDrill,
    defensePositionDrill,
    chevronDrill,
    breakDrill,
    bolognaMDrill,
    threeColumnsLongDrill,
    twoColumnsLongDrill,

    // Games
    normalGame,
    game3v3,
    longShotGame,
  ],
  trainings: [
    dumpSwingTraining,
    firstWeekFitnessTraining,
    coed2MarkTraining,
    coed2LongTraining,
    coed2Long2Training,
    firstChildTraining,
    secondChildTraining,
    thirdChildTraining,
    secondWeekFitnessTraining,
    secondInintiationAdultTraining,
    thirdInintiationAdultTraining,
    initiationVerticalTraining,
    secondVerticalTraining,
    defenseBaseTraining,
  ],
  programs: [
    {
      id: 1,
      title: 'Initiation u13',
      trainings: [firstChildTraining, secondChildTraining, thirdChildTraining],
    },
    {
      id: 2,
      title: 'Initiation adultes',
      trainings: [firstChildTraining, secondInintiationAdultTraining, thirdInintiationAdultTraining],
    },
    {
      id: 3,
      title: 'Reprise fitness',
      trainings: [firstWeekFitnessTraining, secondWeekFitnessTraining],
    },
    {
      id: 4,
      title: 'Stack vertical',
      trainings: [initiationVerticalTraining, secondVerticalTraining, dumpSwingTraining],
    },
    {
      id: 5,
      title: 'Longues',
      trainings: [coed2LongTraining, coed2Long2Training],
    },
    {
      id: 6,
      title: 'Défense de fer',
      trainings: [defenseBaseTraining, coed2MarkTraining],
    },
  ],
};
