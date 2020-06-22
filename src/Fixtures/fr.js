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
import discGolfAnimation from './Animation/DiscGolf';
import dDCAnimation from './Animation/DDC';
import horizontalTimingAnimation from './Animation/HorizontalTiming';
import horizontalTimingOpenAnimation from './Animation/HorizontalTimingOpen';
import threeHorizontal from './Animation/ThreeHorizontal';
import threeHorizontalGame from './Animation/ThreeHorizontalGame';
import theDual from './Animation/TheDual';
import theDualFake from './Animation/theDualFake';
import treasureHunt from './Animation/TreasureHunt';
import bulldogAnimation from './Animation/Bulldogs';
import aussieRules from './Animation/AussieRules';
import cardinalAnimation from './Animation/Cardinal';
import horizontalToVerticalAnimation from './Animation/HorizontalToVertical';
import horizontalDiamond from './Animation/HorizontalDiamond';
import iso from './Animation/Iso';
import horizontalTrapOpen from './Animation/HorizontalTrapOpen';
import horizontalTrapBreak from './Animation/HorizontalTrapBreak';
import horizontalTrapGame from './Animation/HorizontalTrapGame';
import hoTrapFar from './Animation/HoTrapFar';
import hoTrapDirect from './Animation/HoTrapDirect';
import hoTrapGame from './Animation/HoTrapGame';
import hoHandler from './Animation/HoHandler';
import hoHandlerBreak from './Animation/HoHandlerBreak';
import hoHandlerGame from './Animation/HoHandlerGame';
import breakDanceAnimation from './Animation/BreakDance';
import breakRace from './Animation/BreakRace';
import longCheck from './Animation/LongCheck';
import throwCatch from './Animation/ThrowCatch';
import threeGame from './Animation/ThreeGame';
import normalGameAnimation from './Animation/NormalGame';
import endzoneAnimation from './Animation/Endzone';
import endzoneFinition from './Animation/EndzoneFinition';
import stopFlowAnimation from './Animation/StopFlow';
import theTunnelAnimation from './Animation/TheTunnel';
import leopard from './Animation/Leopard';
import cupSwingingAnimation from './Animation/CupSwinging';
import zoneGameAnimation from './Animation/ZoneGame';
import diagonalOpenAnimation from './Animation/DiagonalOpen';
import diagonalPowerAnimation from './Animation/DiagonalPower';
import diagonalOverAnimation from './Animation/DiagonalOver';
import diagonalGameAnimation from './Animation/DiagonalGame';
import diagonaldualOpen from './Animation/DiagonalOpenTwo';
import diagonaldualBreak from './Animation/DiagonalDuelBreak';
import diagonalDualGame from './Animation/DiagonalDualGame';
import splitIsoAnimation from './Animation/SplitIso';
import splitGameDual from './Animation/SplitGameDual';
import splitToVerticalAnimation from './Animation/SplitToVertical';
import splitWindmill from './Animation/SplitWindmill';
import sideFlow from './Animation/SideFlow';
import sideWindmill from './Animation/SideWindmill';

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
  id: 1002,
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

const treasureHuntDrill = {
  id: 1003,
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
      illustrationSource: treasureHunt,
      repetition: '',
      rest: '',
      instruction:
        'Goals: Bringing all the disc in the square. \nA player can play in offense on his side or go on the other side to play defense.\nIf there is a turnover, the frisbee goes back to the starting line.\nFirst team that saves all the discs win!',
    },
  ],
};

const kyeDrill = {
  id: 1004,
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
  id: 1005,
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
  id: 1006,
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

const giveAndGoDrill = {
  id: 1007,
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
      illustrationSource: aussieRules,
      repetition: '',
      rest: '',
      instruction:
        '2 teams plays against each others.There are 2 territories for each team and they play with 4 discs.\nTo score a point, a player has to bring a disc in one of the endzone of the opponent team. A player can run with a disc. If a player, get touch in the territory of the other team or the disc is intercepted or touch the ground, he looses the possession. In his territory, he is invincible. First team to 5 wins! ',
    },
  ],
};

const bolognaMDrill = {
  id: 1009,
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
  id: 1010,
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

const endzoneGameDrill = {
  id: 1011,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Endzone Game',
  image: 'https://zupimages.net/up/20/25/71b2.jpg',
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
      illustrationSource: endzoneAnimation,
      repetition: '',
      rest: '',
      instruction:
        'Game to 5. If you score, your team stay in offense.\nThe player who caught the disc in the endzone has to keep the disc to start the next offense ',
    },
    {
      id: 2,
      title: 'Endzone finition',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: endzoneFinition,
      repetition: '',
      rest: '',
      instruction: 'Everybody start behing the disc.\nGame to 5',
    },
  ],
};

const bulldogDrill = {
  id: 1012,
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
      illustrationSource: bulldogAnimation,
      repetition: '',
      rest: '',
      instruction:
        'The bulldogs try to catch the remaining players. The aim of the game is to run from one end of the field of play to the other, without being caught.\nWhen a player is caught, he must hold hands with one another and form a line of 3 bulldogs.\n If there is more than 3 bulldogs, they split in more than one line',
    },
  ],
};

const menageATroisDrill = {
  id: 1013,
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
  id: 1014,
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
  id: 1015,
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
  id: 1016,
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
      illustrationSource: breakDanceAnimation,
      repetition: '',
      rest: '',
      instruction:
        'The cutter try to work on their timing to start their almort horizontal cut. The player goes to the next cones after his throws ',
    },
    {
      id: 2,
      title: 'The race',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: breakRace,
      repetition: '',
      rest: '',
      instruction:
        'The 2 teams are racing. \nWhen the disc reach the last player, he has to run as fast as possible to start a new serie. \nFirst team that make the complete rotation win!',
    },
  ],
};

const triangleOfDeathdrill = {
  id: 1017,
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

const trainOfFakeDrill = {
  id: 1018,
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
  id: 1019,
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
  id: 1020,
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
  id: 1021,
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
  id: 1022,
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

const discGolf = {
  id: 1023,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Disc Golf',
  image: 'https://zupimages.net/up/20/25/f4bu.jpg',
  description:
    'The rules. Disc Golf is played like traditional golf, but with disc golf discs instead of balls and clubs',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc per Player',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: discGolfAnimation,
      repetition: '',
      rest: '',
      instruction:
        'The rules. Disc Golf is played like traditional golf, but with disc golf discs instead of balls and clubs. One throw (stroke) is counted each time the disc is thrown and when a penalty is incurred. The goal is to play each hole in the fewest strokes possible.',
    },
  ],
};

const dDC = {
  id: 1024,
  type: DrillTypes.FRISBEE,
  author: '',
  title: 'DDC',
  image: 'https://zupimages.net/up/20/25/t73e.jpg',
  description: 'Double disc court is a frisbee sport which combines quickness, strategy, and throwing ability.',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '2 discs - 8 cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.COMMUNICATION, FrisbeeGoals.CATCH],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: dDCAnimation,
      repetition: '',
      rest: '',
      instruction:
        "DDC is played by two teams of two players each. The courts are 13 meters square and 17 meters apart. You get one point for a throw that lands and stays in the opponents' court, or if an opponent drops your throw. Your opponents get one point if your throw touches outside their court. If you can arrange it so that the other team is touching both discs at the same time, you get two points. That is called 'doubling' your opponents.",
    },
    {
      id: 2,
      title: 'DDC Video',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: '429982987',
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const horizontalTiming = {
  id: 1025,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Horizontal Timing',
  image: 'https://zupimages.net/up/20/25/zn5l.jpg',
  description: 'Complete drill to work on the timing of the cutter and handler in a horizontal stack',
  minimalPlayersNumber: 5,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Break is succeed',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: horizontalTimingAnimation,
      repetition: '',
      rest: '',
      instruction:
        'The cutter stands 10m downfield of the handler. The rotation  after 2 tries is Mark > Central handler > Reset > Cutter in the open side > Cutter in the break side',
    },
    {
      id: 2,
      title: 'Play in the open side',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: horizontalTimingOpenAnimation,
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const game3v3Horizontal = {
  id: 1026,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Diamond Cut',
  image: 'hhttps://zupimages.net/up/20/25/2vga.jpg',
  description: 'work of freeing up spaces in a horizontal stack',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc - 8 cones',
  durationInMinutes: 15,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Deeply aggressive',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: threeHorizontal,
      repetition: '',
      rest: '',
      instruction:
        'Two teams compete against each other. They alternate positions every 2 throws. The goal is to score a point with a maximum of 2 passes. The cutter in the open side starts to move and the cutter has to adapt by making a opposite cut. ',
    },
    {
      id: 2,
      title: 'Game situation',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: threeHorizontalGame,
      repetition: '',
      rest: '',
      instruction: 'Same drill. When a team manages to score, they stay in offense. First team to 10 wins.',
    },
  ],
};

const theDuel = {
  id: 1027,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Nothing like a duel',
  image: 'https://zupimages.net/up/20/19/cd36.jpg',
  description: 'Nothing better than a duel to work on the different aspects of the game',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc ',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.CATCH],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'One direction',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: theDual,
      repetition: '',
      rest: '',
      instruction:
        "The cutter after initating can't make any fake. The thrower has to react quickly. Rotate every Three throws ",
    },
    {
      id: 2,
      title: 'With a fake',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: theDualFake,
      repetition: '',
      rest: '',
      instruction:
        'Same situation as the precedent drill but if the thrower make a fake the cutter has to change his direction ',
    },
  ],
};

const cardinal = {
  id: 1028,
  type: DrillTypes.FRISBEE,
  author: 'Edwin',
  title: 'Cardinal Point',
  image: 'https://zupimages.net/up/20/25/xtik.png',
  description: 'Learning to throw in any position',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc ',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: cardinalAnimation,
      repetition: '',
      rest: '',
      instruction:
        'Kung-fu throwing : imagine a compass with your pivot foot at the center. Pivot N and throw. Pivot NE and throw. Pivot E and throw and so on around the compass. Go four times around, twice throwing forehands and twice throwing backhands.',
    },
  ],
};

const horizontalToVertical = {
  id: 1029,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Horizontal Flow',
  image: 'https://zupimages.net/up/20/25/kecr.jpg',
  description: 'Learning to create a powerful flow from a static position.',
  minimalPlayersNumber: 7,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc ',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Windmill',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: horizontalToVerticalAnimation,
      repetition: '',
      rest: '',
      instruction:
        "Starting at the brick mark, the goal is to make a quick transition from a 4 middles and 3 handlers position to a 'Classic ' 5 middles and 2 handler position. The first plays can be called a Windmill.  When the flow is create start again by switching the position.",
    },
    {
      id: 2,
      title: 'Diamond',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: horizontalDiamond,
      repetition: '',
      rest: '',
      instruction:
        'Same Goal but this time, the play starts with a diamond in the middle. The player in the open side initiates.',
    },
    {
      id: 3,
      title: 'Iso',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: iso,
      repetition: '',
      rest: '',
      instruction:
        "Same Goal but this time, the play starts with 'Iso' on a designed player (Number 3 in the animation). The goal of the Iso is to use the fear of a deep throw to gain a lot of field on the first pass.",
    },
  ],
};

const horizontalTrap = {
  id: 1030,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Trap with the Open',
  image: 'https://zupimages.net/up/20/25/zkfl.jpg',
  description: 'Learning to use the horizontal stack to get out of the line with the cutter in the open side',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc ',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Diamond in the Open side',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: horizontalTrapOpen,
      repetition: '',
      rest: '',
      instruction:
        'Situation to play with a horizontal stack when the player are trap on the line. The 2 players can only cut between the 4 cones. The closest player from the line initiates and the other player do the opposite. The goal of the offensive player is to gain as many meters as possible in 2 throws.',
    },
    {
      id: 2,
      title: 'Break is working',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: horizontalTrapBreak,
      repetition: '',
      rest: '',
      instruction: "Same situation but now we allow the break on the mark. It's still the same player that initiate",
    },
    {
      id: 3,
      title: 'Game situation',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: horizontalTrapGame,
      repetition: '',
      rest: '',
      instruction:
        '3 players play against each others. The goal of the offense is to score a goal in maximum 2 passes. If the team succeed, they stay in offense.',
    },
  ],
};

const horizontalTrapOutside = {
  id: 1031,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Trap with the Break',
  image: 'https://zupimages.net/up/20/25/zkfl.jpg',
  description: 'Learning to use the horizontal stack to get out of the line with the cutter in the break side',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc ',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Going long',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: hoTrapFar,
      repetition: '',
      rest: '',
      instruction:
        'In this situation, the 2 offensive players are the 2 players in the break side of a horizontal stack. They can only touch the frisbee inside the 4 cones and they are trying to gain as many meters as they can in 2 passes. In this drill, the first player go deep and come back at the fake of the thrower. The second player do the continuity',
    },
    {
      id: 2,
      title: 'Horizontal cut',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: hoTrapDirect,
      repetition: '',
      rest: '',
      instruction:
        'Same situation but now the first player fake going deep for few steps and go directly in the open side. The second player do the continuity deep.',
    },
    {
      id: 3,
      title: 'Game situation',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: hoTrapGame,
      repetition: '',
      rest: '',
      instruction:
        '3 players play against each others. The goal of the offense is to score a goal in maximum 2 passes. If the team succeed, they stay in offense.',
    },
  ],
};

const horizontalHandler = {
  id: 1032,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Trap with the handlers',
  image: 'https://zupimages.net/up/20/25/zkfl.jpg',
  description: 'Learning to use the horizontal stack to get out of the line with the handler',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc ',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Upline cut',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: hoHandler,
      repetition: '',
      rest: '',
      instruction:
        'The stall is raising. The reset handler advances to form an angle then initiate upline to get the disc. The player number 4 always do the continuity. The second option is to play with the second handler with an around break then to play immediately in the break side. Rotate every 3 throws',
    },
    {
      id: 2,
      title: 'Adaptation',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: hoHandlerBreak,
      repetition: '',
      rest: '',
      instruction:
        'Same situation but now the reset handler is making a cut in the break side. The other handler do the opposite move. The player number 4 always do the continuity.',
    },
    {
      id: 3,
      title: 'Game situation',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: hoHandlerGame,
      repetition: '',
      rest: '',
      instruction:
        '4 players play against each others. The goal of the offense is to succeed  2 complete passes. If the team succeed, they stay in offense.',
    },
  ],
};

const checkLong = {
  id: 1033,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Long is your new weapon',
  image: 'https://zupimages.net/up/20/25/pzn1.jpg',
  description: 'Learning to throw deep as a cutter and to get information as a cutter',
  minimalPlayersNumber: 3,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc ',
  durationInMinutes: 15,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Time to go long',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: longCheck,
      repetition: '',
      rest: '',
      instruction:
        'When the long thrower is changing direction the cutter go long as fast as possible. The goal is to make the longest complete pass',
    },
  ],
};

const throwCatchThrow = {
  id: 1034,
  type: DrillTypes.FRISBEE,
  author: 'Edwin',
  title: 'Double Disc',
  image: 'https://zupimages.net/up/20/25/gf41.jpg',
  description: 'Work by pair. The goal is to improve your trhowing and catching speed',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '2 discs ',
  durationInMinutes: 12,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CATCH],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: throwCatch,
      repetition: '',
      rest: '',
      instruction:
        'The receiver already has a disc in its hands.  The goal is to never have two discs simultaneously in your hands. When the receiver is about to receive the other disc he throws in the air (to himself) his disc, he catches the other disc, throws it, catch his disc. If this is succeeded, then he throws his disc to the other player that already has his one disc in its hands.',
    },
  ],
};

const stopFlow = {
  id: 1035,
  type: DrillTypes.FRISBEE,
  author: 'Colony',
  title: 'Stoping the Flow',
  image: 'https://zupimages.net/up/20/19/cd36.jpg',
  description: 'Learn to quickly identify dangerous option and deny it.',
  minimalPlayersNumber: 5,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 discs ',
  durationInMinutes: 12,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: stopFlowAnimation,
      repetition: '',
      rest: '',
      instruction:
        "The defenders of the furst throw are not looking at the disc and they can't make a defense a the first throw. When the throw is made, the second cutter has to make a straight cut. The first defender try to block the continuity ",
    },
  ],
};

const theTunnel = {
  id: 1036,
  type: DrillTypes.FRISBEE,
  author: 'CUSB',
  title: 'The tunnel',
  image: 'https://zupimages.net/up/20/25/742g.jpeg',
  description: 'Warm up drill to focus on the reactivity in defense.',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '4 cones ',
  durationInMinutes: 12,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: theTunnelAnimation,
      repetition: '',
      rest: '',
      instruction:
        'One offensive player against a defender. The goal of the offensive player is to cross the bottom line first or to touch the farthest cones before the defender reach the cone innermost ',
    },
  ],
};

const sprintDefense = {
  id: 1037,
  type: DrillTypes.FRISBEE,
  author: 'Lucky Grass',
  title: "The leopard's defense",
  image: 'https://zupimages.net/up/20/25/5pqg.jpg',
  description: 'Warm up drill to focus on the reactivity in defense.',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '2 cones ',
  durationInMinutes: 8,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: leopard,
      repetition: '',
      rest: '',
      instruction:
        'One offensive player against a defender. The goal of the offensive player is touch the outside cone before that the defender touch the inside one. They both have to touch the inside cone before switching their direction. The defensive player can start running when the both feet of the attacker left the ground.',
    },
  ],
};

const cupSwinging = {
  id: 1038,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Swinging with the cup',
  image: 'https://zupimages.net/up/20/25/019o.jpg',
  description: 'Practicing the defense against the swing as a 3 players cup',
  minimalPlayersNumber: 7,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc ',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: cupSwingingAnimation,
      repetition: '',
      rest: '',
      instruction:
        'The 3 players cup as to move together to deny the throw to the cutter. The handlers can only make a flat throw to the cutter. Their goal is to swing quickly to get around the cup. ',
    },
  ],
};

const zoneGame = {
  id: 1039,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Try to beat our zone',
  image: 'https://zupimages.net/up/20/25/fnkl.jpg',
  description: 'Trying to score a point against the zone defense with as few attempts as possible',
  minimalPlayersNumber: 14,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc - 8 cones',
  durationInMinutes: 25,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE, FrisbeeGoals.COMMUNICATION, FrisbeeGoals.PLAY],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: zoneGameAnimation,
      repetition: '',
      rest: '',
      instruction:
        'The offense team tries to score a point against a zone defense. If there is a turn-over, the disc go back to the offense at the last complete catch and the offense team try again. They have to score with as few attempts as possible ',
    },
    {
      id: 2,
      title: 'Zone Video',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: '431159653',
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const goaltimateDrill = {
  id: 1040,
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
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.DEFENSE, FrisbeeGoals.PLAY],
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
      title: 'Goaltimate video',
      illustrationType: IllustrationType.VIMEO,
      illustrationSource: '416849035',
      repetition: '',
      rest: '',
      instruction: '',
    },
  ],
};

const diagonalToVertical = {
  id: 1041,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Diagonal to Vertical',
  image: 'https://zupimages.net/up/20/25/iqn0.jpg',
  description: 'Train the team to make the perfect transition from a diagonal stack to a vertical flow',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc ',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Forcing close side',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: diagonalOpenAnimation,
      repetition: '',
      rest: '',
      instruction:
        'Working on making a quick transition from diagonal to Vertcial Flow. The 2 players in the open side has to clear, in the break side, to free the space for the others. The player cutter goes deep and come back if there is a fake. The handler in the break side become a cutter.',
    },
    {
      id: 2,
      title: 'Forcing far side',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: diagonalPowerAnimation,
      repetition: '',
      rest: '',
      instruction:
        'Same start but the force is different. The two deepest player go in the break side. The first cutter has to cut to gain a power position. The following cutter go deep and then it become a classic train situation. ',
    },
    {
      id: 3,
      title: 'The Overhead solution',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: diagonalOverAnimation,
      repetition: '',
      rest: '',
      instruction:
        'The defensive player is forcing the far side. The goal is to practice the overhead throw and its continuity',
    },
    {
      id: 4,
      title: 'Adapting',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: diagonalGameAnimation,
      repetition: '',
      rest: '',
      instruction: 'The defensive player will choose any force and the cutter has to adpat as quickly as possible',
    },
  ],
};

const diagonalIso = {
  id: 1042,
  type: DrillTypes.FRISBEE,
  author: 'Mooncatchers',
  title: 'Diagonal Iso',
  image: 'https://zupimages.net/up/20/25/vozh.jpg',
  description: 'Train the team to make the perfect transition from a diagonal stack to a vertical flow',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc ',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Diagonal Iso',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: diagonaldualOpen,
      repetition: '',
      rest: '',
      instruction:
        'The two cutters can only run between the cones and the line. The player more in the middle has initiate and the other one adapts. Try to find the perfect angle to have a good timing',
    },
    {
      id: 2,
      title: 'The Overhead Solution',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: diagonaldualBreak,
      repetition: '',
      rest: '',
      instruction:
        'Same start but now the thrower is making an overhead in the break side. The throw has to be futher than the first cone. THe second cutter try to make the perfect continuity',
    },
    {
      id: 3,
      title: 'Game situation',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: diagonalDualGame,
      repetition: '',
      rest: '',
      instruction:
        'Game situation. The cutter can only run in the open side and in the far break side. To succeed, the offensive team has to score a point in maximum 2 passes.If they score, they stay in offense',
    },
  ],
};

const splitIso = {
  id: 1043,
  type: DrillTypes.FRISBEE,
  author: 'Mooncatchers',
  title: 'Split Iso',
  image: 'https://zupimages.net/up/20/25/k6hi.jpg',
  description: 'Train the team to make the perfect transition from a diagonal stack to a vertical flow',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc ',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Open Split Iso',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: splitIsoAnimation,
      repetition: '',
      rest: '',
      instruction:
        'The two cutters can only run between the cones and the line. The closest cutter from the handler initiates. Try to find the perfect angle to have a good timing',
    },
    {
      id: 2,
      title: 'Game situation',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: splitGameDual,
      repetition: '',
      rest: '',
      instruction:
        'Game situation. The offensive players can only run between the cones. To succeed, the offensive team has to score a point in maximum 2 passes.If they score, they stay in offense',
    },
  ],
};

const splitToVertical = {
  id: 1044,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Split to Vertical',
  image: 'https://zupimages.net/up/20/25/uqd5.jpg',
  description: 'Train the team to make the perfect transition from a split stack to a vertical flow',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc ',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'With the open side cutters',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: splitToVerticalAnimation,
      repetition: '',
      rest: '',
      instruction:
        'Working on a quick transition from a split stack to a vertical flow. Here the plays made with the cutter in the open side',
    },
    {
      id: 2,
      title: 'With the break side cutters',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: splitWindmill,
      repetition: '',
      rest: '',
      instruction: 'Same situation, but now the cutters in the open side clear and the other cutter get involve',
    },
  ],
};

const sideToVertical = {
  id: 1045,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Side to Vertical',
  image: 'https://zupimages.net/up/20/25/zpuq.jpg',
  description: 'Train the team to make the perfect transition from a side stack to a vertical flow',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc ',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Iso on the free Side',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: sideFlow,
      repetition: '',
      rest: '',
      instruction:
        'Working on a quick transition from a side stack to a vertical flow. Here the plays made with the cutter creating a double iso on the free side.',
    },
    {
      id: 2,
      title: 'Windmill',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: sideWindmill,
      repetition: '',
      rest: '',
      instruction:
        'Everybody from the side stack float to the other side, a designated  player stay and get the disc. this position should open a deep throw continuity',
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
      illustrationSource: threeGame,
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

const lineGame = {
  id: 2004,
  type: DrillTypes.GAME,
  author: 'Moby',
  title: 'Breaking the mark oriented game',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    'Just a classical game on the whole field. Only exception: After a turn-over, the offensive player has to start from the closest sideline.',
  minimalPlayersNumber: 8,
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
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: normalGameAnimation,
      repetition: '1',
      rest: '',
      instruction: 'After a turn-over, the disc has to start from the sideline.',
    },
  ],
};

const longestGame = {
  id: 2005,
  type: DrillTypes.GAME,
  author: 'Moby',
  title: 'The disc is gold',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    'Just a classical game on the whole field. Uses a stopwatch to calculate the time spent for a team to score a point. The team that took the longest time to score a point without a turnover gains 3 more points at the end of the game.',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 cones - 1 disc - 1 stopwatch',
  durationInMinutes: 15,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.PLAY, FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'The longest point',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: normalGameAnimation,
      repetition: '1',
      rest: '',
      instruction:
        'Classical game. The team that took the longest time to score a point without a turnover gains 3 more points at the end of the game.',
    },
  ],
};

const trainingGame = {
  id: 2006,
  type: DrillTypes.GAME,
  author: 'Moby',
  title: 'The disc is gold',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description: 'Just a classical game on the whole field. ',
  minimalPlayersNumber: 8,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '8 cones - 1 disc - 1 stopwatch',
  durationInMinutes: 15,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.PLAY, FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Practice your new stack',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: normalGameAnimation,
      repetition: '1',
      rest: '',
      instruction:
        'Classical game. After a turn-over, the offensive team has to start from a stack practice in the training',
    },
  ],
};

const initiationVerticalTraining = {
  id: 1,
  title: 'Stack vertical',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: "Faire progresser l'équipe sur le stack vertical",
  drills: [warmupDrill, trainDrill, resetOpenDrill, resetBreakDrill, game3v3],
};

const secondVerticalTraining = {
  id: 2,
  title: 'Le pouvoir du break',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: "Continuer de faire progresser l'équipe sur le stack vertical",
  drills: [warmupDrill, trainOfFakeDrill, bigEightDrill, game3v3, normalGame],
};

const dumpSwingTraining = {
  id: 3,
  title: 'Dump & Swing',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: 'Faire vivre le disque pour créer des espaces',
  drills: [warmupDrill, trainOfFakeDrill, dishieChainDrill, endzoneGameDrill, longestGame],
};

const firstChildTraining = {
  id: 4,
  title: 'Première fois',
  image: 'https://zupimages.net/up/20/19/a7io.png',
  description: "Découvrir l'ultimate en s'amusant",
  drills: [warmupDrill, basicThrowsDrill, dwarfDuelDrill, game3v3],
};

const secondChildTraining = {
  id: 5,
  title: 'Les bases de la défense',
  image: 'https://zupimages.net/up/20/19/dgwo.jpg',
  description: 'Mettre en place les bons réflexes défensifs tout en touchant beaucoup de disque',
  drills: [warmupDrill, aussieDrill, cardinal, checkLong, game3v3],
};

const thirdChildTraining = {
  id: 6,
  title: 'Chasse aux trésors',
  image: 'https://zupimages.net/up/20/19/c9i6.jpg',
  description: "Idéal pour découvrir les bases de l'ultimate en s'amusant",
  drills: [warmupDrill, menageATroisDrill, bulldogDrill, goToTenDrill, treasureHuntDrill, game3v3],
};

const secondInintiationAdultTraining = {
  id: 7,
  title: 'Défense & Longues',
  image: 'https://zupimages.net/up/20/19/cd36.jpg',
  description: '',
  drills: [warmupDrill, menageATroisDrill, checkLong, trainDrill, normalGame],
};

const thirdInintiationAdultTraining = {
  id: 8,
  title: "S'adapter au terrain",
  image: 'https://zupimages.net/up/20/19/hrqz.jpg',
  description: "S'adapter à l'espace disponible sur le terrain tout en s'amusant",
  drills: [warmupDrill, throwCatchThrow, goaltimateDrill, triangleOfDeathdrill, normalGame],
};
const defenseBaseTraining = {
  id: 9,
  title: 'Defense Positioning',
  image: 'https://zupimages.net/up/20/19/skjl.jpg',
  description: 'Practice your defense.',
  drills: [warmupGameDrill, defensePositionDrill, youShallNotPassDrill, breakDrill, normalGame],
};
const LearningByPlaying = {
  id: 10,
  title: 'Learning to throw',
  image: 'https://zupimages.net/up/20/19/skjl.jpg',
  description: 'Practice your throw by playing game.',
  drills: [warmupGameDrill, discGolf, dDC, theTunnel],
};
const initiationHorizontal = {
  id: 11,
  title: 'Horizontal Cut',
  image: 'https://zupimages.net/up/20/19/skjl.jpg',
  description: 'Practice how to cut in a horizontal stack',
  drills: [warmupGameDrill, theDuel, game3v3Horizontal, normalGame],
};
const horizontalFlow = {
  id: 12,
  title: 'Horizontal Flow',
  image: 'https://zupimages.net/up/20/19/skjl.jpg',
  description: 'Practice how to generate a flow with all the team',
  drills: [warmupGameDrill, horizontalTiming, horizontalToVertical, longShotGame],
};

const horizontalLine = {
  id: 13,
  title: 'Horizontal Trap',
  image: 'https://zupimages.net/up/20/19/skjl.jpg',
  description: 'Practice how to generate a flow with all the teamget out of the line with a Ho stack',
  drills: [warmupGameDrill, horizontalTrap, horizontalTrapOutside, horizontalHandler, lineGame],
};

const coed2MarkTraining = {
  id: 14,
  title: 'Build your Defense',
  image: 'https://zupimages.net/up/20/19/su0s.jpg',
  description:
    "This training session aims at practicing your mark skills. Don't be broken to easily, generate dangerous passes",
  drills: [warmupGameDrill, kyeDrill, breakDrill, normalGame],
};

const defenseSecond = {
  id: 15,
  title: 'Stop the Flow',
  image: 'https://zupimages.net/up/20/19/su0s.jpg',
  description: 'This training will help to stop the flow',
  drills: [warmupGameDrill, theTunnel, resetBreakDrill, youShallNotPassDrill, normalGame],
};

const defenseThird = {
  id: 16,
  title: 'No more Reset',
  image: 'https://zupimages.net/up/20/19/su0s.jpg',
  description: 'Learn to use your body to stop the flow',
  drills: [warmupGameDrill, kyeDrill, stopFlow, dwarfDuelDrill, normalGame],
};

const playingToLearn = {
  id: 17,
  title: 'Ultimate Games',
  image: 'https://zupimages.net/up/20/19/su0s.jpg',
  description: 'Playing games to learn the basics',
  drills: [warmupGameDrill],
};

const zoneCup = {
  id: 18,
  title: 'Initiation Cup',
  image: 'https://zupimages.net/up/20/19/su0s.jpg',
  description: 'First practice to learn the cup of the zone defense',
  drills: [bulldogDrill, warmupGameDrill, cupSwinging, zoneGame],
};

const sideStackTraining = {
  id: 19,
  title: 'Initation to Side Stack',
  image: 'https://zupimages.net/up/20/19/su0s.jpg',
  description: 'First practice to learn the basics of Side Stack',
  drills: [warmupGameDrill, horizontalTrapOutside, sideToVertical, trainingGame],
};

const splitStackTraining = {
  id: 20,
  title: 'Initiation to Split Stack',
  image: 'https://zupimages.net/up/20/19/su0s.jpg',
  description: 'First practice to learn the basics of Split Stack',
  drills: [warmupGameDrill, horizontalTrapOutside, splitIso, splitToVertical, trainingGame],
};

const diagonalStackTraining = {
  id: 21,
  title: 'Initiation to Diagonal Stack',
  image: 'https://zupimages.net/up/20/19/su0s.jpg',
  description: 'First practice to learn the diagonal Stack',
  drills: [warmupGameDrill, horizontalTrapOutside, diagonalIso, diagonalToVertical, trainingGame],
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
    endzoneGameDrill,
    bulldogDrill,
    dishieChainDrill,
    breakDanceDrill,
    triangleOfDeathdrill,
    trainOfFakeDrill,
    defensePositionDrill,
    breakDrill,
    bolognaMDrill,
    discGolf,
    dDC,
    horizontalTiming,
    game3v3Horizontal,
    theDuel,
    cardinal,
    horizontalToVertical,
    horizontalHandler,
    horizontalTrapOutside,
    horizontalTrap,
    checkLong,
    throwCatchThrow,
    stopFlow,
    theTunnel,
    sprintDefense,
    cupSwinging,
    zoneGame,
    diagonalToVertical,
    diagonalIso,
    splitIso,
    splitToVertical,
    sideToVertical,

    // Games
    normalGame,
    game3v3,
    longShotGame,
    lineGame,
    longestGame,
    trainingGame,
  ],
  trainings: [
    dumpSwingTraining,
    coed2MarkTraining,
    firstChildTraining,
    secondChildTraining,
    thirdChildTraining,
    secondInintiationAdultTraining,
    thirdInintiationAdultTraining,
    initiationVerticalTraining,
    secondVerticalTraining,
    defenseBaseTraining,
    horizontalFlow,
    LearningByPlaying,
    initiationHorizontal,
    horizontalLine,
    defenseSecond,
    defenseThird,
    playingToLearn,
    zoneCup,
    sideStackTraining,
    splitStackTraining,
    diagonalStackTraining,
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
      title: 'Stack Vertical',
      trainings: [initiationVerticalTraining, secondVerticalTraining, dumpSwingTraining],
    },
    {
      id: 4,
      title: 'Stack Horizontal',
      trainings: [initiationHorizontal, horizontalFlow, horizontalLine],
    },
    {
      id: 5,
      title: 'Defense individuel',
      trainings: [defenseBaseTraining, defenseSecond, defenseThird],
    },
    {
      id: 6,
      title: 'Defense de Zone',
      trainings: [zoneCup],
    },
    {
      id: 7,
      title: 'Stack sur le côté',
      trainings: [sideStackTraining],
    },
    {
      id: 8,
      title: 'Stack en U',
      trainings: [splitStackTraining],
    },
    {
      id: 9,
      title: 'Stack diagonal',
      trainings: [diagonalStackTraining],
    },
  ],
};
