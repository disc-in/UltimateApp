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

import { dictionary, essentials, tactics } from './theory.en';

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
  title: 'Stability Off-season 1',
  image: 'https://zupimages.net/up/20/19/75s2.jpg',
  description:
    "It's the first session of our program, we start with stability drill to build solid base for the rest of the season",
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
  title: 'Strenght Off-season 1',
  image: 'https://zupimages.net/up/20/19/qxbk.jpg',
  description: 'The first strength practice of the season',
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
  title: 'Speed Off-season 1',
  image: 'https://zupimages.net/up/20/19/vt6g.jpg',
  description:
    "It's the first session of our program, we start with speed drill to build solid base for the rest of the season",
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
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
  title: 'Conditioning Off-season 1',
  image: 'https://zupimages.net/up/20/19/kj0f.jpg',
  description: 'Try to follow her for your conditioning',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FitnessGoals.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Follow her',
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
  title: 'Warm-up Game ready',
  image: 'https://zupimages.net/up/20/19/f2bd.jpg',
  description: 'Try to follow him for your warm-up',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FitnessGoals.WARM_UP],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Follow him',
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
  title: 'Warm-up Ultimate',
  image: 'https://zupimages.net/up/20/19/va5f.jpg',
  description: 'Try to follow him for your warm-up',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FitnessGoals.WARM_UP],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Ultimate warm-up',
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
  title: 'Conditioning Full-body',
  image: 'https://zupimages.net/up/20/19/kj0f.jpg',
  description: 'Try to follow her for your conditioning',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'None',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FitnessGoals.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Follow her',
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
  title: 'Basic Throws',
  image: 'https://zupimages.net/up/20/19/zgxt.jpg',
  description: 'Basic drills to learn how to throw',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc for 2 players',
  durationInMinutes: 20,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Throwing Machine',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: throwingMachine,
      repetition: '',
      rest: '',
      instruction: 'With a partner, the players throw backhands and forehands for 5 minutes.',
    },
    {
      id: 2,
      title: 'The Throwing Olympics Ladder',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: ladder,
      repetition: '',
      rest: '',
      instruction:
        'Players stand in two lines facing a partner and pass back and forth. The coach decides what throw they do. If the disc falls, the pair moves to the right most spot in the line. The pair at the left when the time is over wins!',
    },
  ],
};

const breakDrill = {
  id: 1002,
  type: DrillTypes.FRISBEE,
  author: 'Martin',
  title: 'Cuts to the Break Side',
  image: 'https://zupimages.net/up/20/19/83fx.jpg',
  description: 'Cutting from the open side to the break side. The drill is both for the thrower and the mark.',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '6 discs - 2 cones',
  durationInMinutes: 20,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.BREAK, FrisbeeGoals.MARK],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Open to Break',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: breakSide,
      instruction:
        'Two lines of players face each other, about 30 meters apart. A force is decided for the exercise. At the front of one line is a player with a disc, and a mark maintaining the force. The front of the other line cuts towards the thrower on the open side, and when the thrower fakes, cuts horizontally from the open side towards the break side. The thrower then must break the mark to throw to the cutter. The thrower then makes the next cut, towards the other side. The mark becomes a thrower, and the next in line becomes the mark. Players in line should have discs.',
    },
    {
      id: 2,
      title: 'Great Wall of China',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: breakSide,
      instruction:
        "If you want to work on improving the mark, you may insist so that the defender may not be broken twice in a row with the same pass. You want them to identify the thrower's favorite throw and block it",
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
  description: 'The team with two players stays on defense if they successfully force a turnover',
  minimalPlayersNumber: 5,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 2 cones',
  durationInMinutes: 15,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE, FrisbeeGoals.PLAY, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: threeVersusTwo,
      repetition: '',
      rest: '',
      instruction:
        "The defense forces middle. The offensive cutters are only allowed to make two cuts to get the disc. They may either catch a continuation pass, or cutting under. The goal of the drill is for the defense to learn how to quickly set up a mark and to use their bodies and positioning downfield to control the offense's cuts.",
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
      title: '',
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
  title: 'The Train',
  image: 'https://zupimages.net/up/20/19/ac8s.jpg',
  description: 'This is a drill which works on the flow of a vertical stack',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING, FrisbeeGoals.COMMUNICATION],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Normal train',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: train,
      repetition: '',
      rest: '',
      instruction:
        'Set up a vertical stack of 5 cutters with a thrower and a dump and decide on a force. The last cutter in the stack cuts deep while looking at the thrower. When the thrower fakes, the receiver cuts back in on the open side and receives the disc. The next player in the stack must begin their deep cut so as to be hitting full speed when the previous cutter catches the disc. The rest of the stack re-positions farther downfield, the thrower becomes the dump, the previous dump becomes the front of the stack. Repeat for the length of the field.',
    },
    {
      id: 2,
      title: 'Racing train',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: trainRace,
      repetition: '',
      rest: '',
      instruction:
        'Racing train: Divide into two teams. Begin in the same place and complete the train as a race. Decide on a set number of passes, the team that completes this many passes first wins!',
    },
  ],
};

const giveAndGoDrill = {
  id: 1007,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Give-N-Go',
  image: 'https://zupimages.net/up/20/19/s9fe.jpg',
  description: 'Follow your disc as fast as possible',
  minimalPlayersNumber: 2,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 12 cones',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Give-N-Go',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: giveAndGo,
      repetition: '',
      rest: '',
      instruction: 'Try to do this give and go drill as fast as possible. Make sure not to travel.',
    },
    {
      id: 2,
      title: 'Make It Count',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: giveAndGoRace,
      repetition: '',
      rest: '',
      instruction: 'A race between 2 teams. First to 25 wins!',
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
      title: '',
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
      title: '',
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
      title: '',
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
      instruction: 'Same Rules as before. The difference is that everybody start behind the disc.\nGame to 5',
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
      title: '',
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
  title: 'Three-person drill',
  image: 'https://zupimages.net/up/20/19/ai3z.jpg',
  description: 'The thrower tries to reach the target by using any fake possible',
  minimalPlayersNumber: 3,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.DEFENSE, FrisbeeGoals.BREAK],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Flat mark',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: threePerson,
      repetition: '',
      rest: '',
      instruction: 'The defensive player does a flat mark, five times before switching roles.',
    },
    {
      id: 2,
      title: 'Redemption',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: redemption,
      repetition: '',
      rest: '',
      instruction:
        'The set-up is the same as three-person drill, but with lines behind the thrower and receiver. The order is receiving the disc, throwing, and then following the disc to mark. After marking, the player goes to the back of the line. The thrower must throw a pass that the receiver can catch within one pivot. If they do not, they must then force the next thrower to throw a bad pass, or else they are out of the game! The game continues until one player wins.',
    },
  ],
};

const dwarfDuelDrill = {
  id: 1014,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Dwarf Duel',
  image: 'https://zupimages.net/up/20/19/3m3k.jpg',
  description: 'Duel without jumping, all about positioning',
  minimalPlayersNumber: 3,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 2 cones',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: dwarDuel,
      repetition: '',
      rest: '',
      instruction:
        'The coach (or an experienced player) throws hucks.\nWhen the offensive player starts to run, the defensive player can move. Neither player can jump to catch the disc',
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
      title: 'Focus on Offense',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: dishiesChain,
      repetition: '',
      rest: '',
      instruction:
        '2 columns: \n2 players from the same column go in direction of the thrower. When of them receive the disc.\n The thrower is looking ot make a dishie when the other cutter is going long.\n The cutter catching the long throw becomes the new first thrower for the other column',
    },
    {
      id: 2,
      title: 'Adding a poach',
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
  title: 'The Triangle of Death',
  image: 'https://zupimages.net/up/20/19/kmlc.jpg',
  description: 'Throwing 10 hucks in a row as far and as fast as possible',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '10 disc - 3 cones',
  durationInMinutes: 20,
  intensity: Intensities.HIGH,
  goals: [FrisbeeGoals.THROWING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: triangleDeath,
      repetition: '',
      rest: '',
      instruction:
        'Set up a small triangle of cones about 3 meters apart, pointing downfield. One thrower begins on one side. One player stands about 3 meters behind the triangle with a large pile of discs. The rest of the team sets up in a vertical stack (this can be more than 5 players).\n\nThe thrower cuts to the peak of the triangle and then to the other side, receives a dishy pass from player behind the triangle, and throws a huck to a cutter from the back of the stack. The thrower immediately remakes their cut in the opposite direction, receiving a dishy and throwing a huck. Repeat either 10 times, or until all cutters have received a pass.',
    },
  ],
};

const trainOfFakeDrill = {
  id: 1018,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'The Fake Train',
  image: 'https://zupimages.net/up/20/19/ac8s.jpg',
  description: 'This is a drill which works on the flow of a vertical stack',
  minimalPlayersNumber: 6,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.THROWING, FrisbeeGoals.CUTTING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 1,
      title: 'Normal train',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: train,
      repetition: '',
      rest: '',
      instruction:
        'Set up a vertical stack of 5 cutters with a thrower and a dump and decide on a force. The last cutter in the stack cuts deep while looking at the thrower. When the thrower fakes, the receiver cuts back in on the open side and receives the disc. The next player in the stack must begin their deep cut so as to be hitting full speed when the previous cutter catches the disc. The rest of the stack re-positions farther downfield, the thrower becomes the dump, the previous dump becomes the front of the stack. Repeat for the length of the field.',
    },
    {
      id: 2,
      title: 'With One fake',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: oneFakeTrain,
      repetition: '',
      rest: '',
      instruction:
        'Set up the normal train drill. This time, however, the thrower can choose to make a second fake while the cutters is cutting in. If they do, the cutters clears to the second position in the stack (from the front), the thrower looks at the dump, the dump cuts upline and receives a pass. The drill continues.',
    },
    {
      id: 3,
      title: 'With two fakes',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: twoFakeTrain,
      repetition: '',
      rest: '',
      instruction:
        'Set up the One Fake Train Drill. This time, when the reset cuts upline, the thrower can again fake. If they do, the front of the stack cuts back and receives a dump in the reset position. The drill continues.',
    },
  ],
};

const resetOpenDrill = {
  id: 1019,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Reset Open',
  image: 'https://zupimages.net/up/20/19/tzk3.jpg',
  description: 'Cutting with good timing; throwing immediately after catching',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.CUTTING, FrisbeeGoals.HANDLING],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'The Backdoor',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: backdoor,
      repetition: '',
      rest: '',
      instruction:
        "The thrower stands with a defender setting a force, and the reset handler sets up at a 45° angle behind the thrower, on the open side.\nThe thrower begins by looking up field, before turning and making eye contact with the reset. When eye contact is established, the reset makes a backdoor cut and receives a pass.\nThe disc is then sent back to the thrower, the thrower's defender switches the force, and the cut is made again in the opposite direction.",
    },
    {
      id: 2,
      title: 'Power Reset',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: powerReset,
      repetition: '',
      rest: '',
      instruction:
        'The set-up is the same as in "The Backdoor." This time, when eye contact is made, the reset cuts up-field and receives a pass in front of them.',
    },
    {
      id: 3,
      title: 'Game Situation',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: resetOpen,
      repetition: '',
      rest: '',
      instruction:
        'The set-up is the same as in "the Backdoor." The defense on the reset is real, and the reset must choose one of the two directions to cut to receive a pass. The reset is not allowed more than one juke. Each team does the same number of attempts, whichever team completes the most passes wins!',
    },
  ],
};

const resetBreakDrill = {
  id: 1020,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Reset Break',
  image: 'https://zupimages.net/up/20/19/w90f.jpg',
  description: 'Cutting with good timing; throwing immediately after catching',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc',
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
        'A thrower holds a disc with a defender who marks with a force. The reset handler begins in line horizontally with the thrower, on the break side.\nThe reset moves slowly upfield until they are at a 45° from the thrower. When the thrower makes eye contact, the reset makes a decisive upline cut.\nThe disc is then sent back to the thrower, and exercise is repeated with the opposite force.',
    },
    {
      id: 2,
      title: 'The Easy Reset',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: around,
      repetition: '',
      rest: '',
      instruction:
        'Same set-up as "The 45° Upline." When eye contact is made, the thrower throws around the mark with the goal that the reset catches about where they had started before moving up field. The reset only moves once the pass is thrown. Switch sides.',
    },
    {
      id: 3,
      title: 'Game Situation',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: resetBreak,
      repetition: '',
      rest: '',
      instruction:
        'Same set-up as "The 45° Upline." The defense on the reset is real, and the reset must choose one of the two directions to cut to receive a pass. The reset is not allowed more than one juke. Each team does the same number of attempts, whichever team completes the most passes wins!',
    },
  ],
};

const youShallNotPassDrill = {
  id: 1021,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'You Shall Not Pass',
  image: 'https://zupimages.net/up/20/19/90z6.jpg',
  description: 'Using your body to prevent your opponent from getting to the disc',
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.BASIC,
  equipment: '1 disc - 4 cones',
  durationInMinutes: 12,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Blocking the Under',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: blockTheUnder,
      repetition: '',
      rest: '',
      instruction:
        'Set up both an offense line and a defense line. One attacker and one defender each run to the box then cut deep at the same time. The offensive player must cut back towards the thrower to try to catch the disc in the box, they are only allowed to change their direction this one time. The defender must position themself so that the offense cannot pass them to return to the box. The thrower may only throw to under cuts.',
    },
    {
      id: 2,
      title: 'Blocking Everything',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: blockEverything,
      repetition: '',
      rest: '',
      instruction:
        'The same exercise as "Blocking the Under," but the thrower is allowed to throw both deep and under.',
    },
    {
      id: 3,
      title: 'Make It Count',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: blockEverything,
      repetition: '',
      rest: '',
      instruction:
        'Divide into two teams and do the "Block Everything" drill. This time, if the pass is not completed, the defense gets a point. The first team to 10 wins!',
    },
  ],
};

const defensePositionDrill = {
  id: 1022,
  type: DrillTypes.FRISBEE,
  author: 'Moby',
  title: 'Defense Positioning',
  image: 'https://zupimages.net/up/20/19/zigu.jpg',
  description: "Maintaining good positioning and adapting to the team's defense",
  minimalPlayersNumber: 4,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: '1 disc - 5 cones',
  durationInMinutes: 10,
  intensity: Intensities.MODERATE,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: SeasonTimings.ANYTIME,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 1,
      title: 'Positioning Under',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: defensiveUnder,
      repetition: '',
      rest: '',
      instruction:
        'A thrower stands with a mark and a force. An offensive receiver begins at any cone, with a defensive player positioning at a 45° angle on the open side between the receiver and the thrower. The receiver runs between the cones in any order, and the defensive player must maintain their positioning relative to the receiver at all times.',
    },
    {
      id: 2,
      title: 'Positioning Deep',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: defenseDeep,
      repetition: '',
      rest: '',
      instruction:
        'The drill is the same as "Positioning Under", except that the defensive player positions downfield of the receiver.',
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
  image: 'https://zupimages.net/up/20/25/2vga.jpg',
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
        'In this situation, the 2 offensive players are the 2 players in the break side of a stack (any kind). They can only touch the frisbee inside the 4 cones and they are trying to gain as many meters as they can in 2 passes. In this drill, the first player go deep and come back at the fake of the thrower. The second player do the continuity',
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
        'Working on making a quick transition from diagonal to Vertical Flow. The 2 players in the open side has to clear, in the break side, to free the space for the others. The player cutter goes deep and come back if there is a fake. The handler in the break side become a cutter.',
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
  title: '7v7 game',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    "It's always interesting to have a time to play in game conditions towards the end of a training. That's the perfect moment to use what players have learnt during the training. Keep in mind that players always FORGET everything when they start playing, so remind them what we're to concentrate on",
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
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: normalGameAnimation,
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
  title: '3v3 games',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    "The perfect setup if you have a LOT of players or want your players to touch a lot of frisbees in a short time. This can be quite exhausting so don't forget to set breaks every 5 to 10 minutes.",
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
      title: '',
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
  title: 'Hucks oriented game',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    'Just a classical game on the whole field. Only exception: a team scores 2 points if there was a successful long shot on the offense that lead to scoring!',
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
      title: '',
      illustrationType: IllustrationType.ANIMATION,
      illustrationSource: normalGameAnimation,
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
  title: 'Vertical Stack',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: 'Learning the basic of a Vertical Stack',
  drills: [warmupDrill, trainDrill, resetOpenDrill, resetBreakDrill, game3v3],
};

const secondVerticalTraining = {
  id: 2,
  title: 'The Break Power',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: 'How to use the break side in a Vertical Stack',
  drills: [warmupDrill, trainOfFakeDrill, bigEightDrill, game3v3, normalGame],
};

const dumpSwingTraining = {
  id: 3,
  title: 'Dump & Swing',
  image: 'https://zupimages.net/up/20/19/frj2.jpg',
  description: "Working on keeping the disc 'alive' with a vertical stack",
  drills: [warmupDrill, trainOfFakeDrill, dishieChainDrill, endzoneGameDrill, longestGame],
};

const firstChildTraining = {
  id: 4,
  title: 'First Time',
  image: 'https://zupimages.net/up/20/19/a7io.png',
  description: 'Training will allow the players to learn the basics of ultimate while having fun',
  drills: [warmupDrill, basicThrowsDrill, dwarfDuelDrill, game3v3],
};

const secondChildTraining = {
  id: 5,
  title: 'Defense Basics',
  image: 'https://zupimages.net/up/20/19/dgwo.jpg',
  description: 'Training will allow the players to learn the basics of ultimate while having fun',
  drills: [warmupDrill, aussieDrill, cardinal, checkLong, game3v3],
};

const thirdChildTraining = {
  id: 6,
  title: 'Treasure Hunt',
  image: 'https://zupimages.net/up/20/19/c9i6.jpg',
  description: 'Help players learn the basics of ultimate while having fun',
  drills: [warmupDrill, menageATroisDrill, bulldogDrill, goToTenDrill, treasureHuntDrill, game3v3],
};

const secondInintiationAdultTraining = {
  id: 7,
  title: 'Defense & Longs',
  image: 'https://zupimages.net/up/20/19/cd36.jpg',
  description: 'Players will work on defense and long throws',
  drills: [warmupDrill, menageATroisDrill, checkLong, trainDrill, normalGame],
};

const thirdInintiationAdultTraining = {
  id: 8,
  title: 'Adapt to the Field',
  image: 'https://zupimages.net/up/20/19/hrqz.jpg',
  description: 'Players will learn to adapt to the size of the field',
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
    // Fitness

    // Frisbee
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
      title: 'Initiation U13',
      trainings: [firstChildTraining, secondChildTraining, thirdChildTraining],
    },
    {
      id: 2,
      title: 'Initiation Adult',
      trainings: [firstChildTraining, secondInintiationAdultTraining, thirdInintiationAdultTraining],
    },
    {
      id: 3,
      title: 'Learning by Playing',
      trainings: [LearningByPlaying, playingToLearn],
    },
    {
      id: 4,
      title: 'Vertical Stack',
      trainings: [initiationVerticalTraining, secondVerticalTraining, dumpSwingTraining],
    },
    {
      id: 5,
      title: 'Horizontal Stack',
      trainings: [initiationHorizontal, horizontalFlow, horizontalLine],
    },
    {
      id: 6,
      title: 'Individual Defense',
      trainings: [defenseBaseTraining, defenseSecond, defenseThird],
    },
    {
      id: 7,
      title: 'Zone Defense',
      trainings: [zoneCup],
    },
    {
      id: 8,
      title: 'Side Stack',
      trainings: [sideStackTraining],
    },
    {
      id: 9,
      title: 'Split Stack',
      trainings: [splitStackTraining],
    },
    {
      id: 10,
      title: 'Diagonal Stack',
      trainings: [diagonalStackTraining],
    },
  ],
};
