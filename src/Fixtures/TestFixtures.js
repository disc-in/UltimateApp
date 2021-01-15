import animationSquare from './Animation/AnimationSquare';
import { DrillTypes, Intensities, FrisbeeGoals, FitnessGoals, Levels, SeasonTimings, EquipmentLabels } from './config';

export const createDrill = (override = {}) => {
  return {
    id: 1,
    type: DrillTypes.FITNESS,
    author: 'Author',
    title: 'Fitness Drill Title',
    image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
    description: 'Description of the drill',
    minimalPlayersNumber: 1,
    equipmentLabel: EquipmentLabels.NONE,
    equipment: 'Equipment needs for the drill',
    durationInMinutes: 10,
    intensity: Intensities.LOW,
    goals: [FitnessGoals.FULL_BODY],
    seasonTiming: SeasonTimings.OFF_SEASON,
    level: Levels.BEGINNER,
    steps: [
      {
        title: 'Warmup',
        subtitle: 'This is a subtitle',
        vimeoId: '462695757',
      },
    ],
    ...override,
  };
};

export const createTraining = (override = {}) => {
  return {
    id: 1,
    source: '** Ultimate App **',
    title: 'First practice',
    image: 'https://cdn3.sportngin.com/attachments/photo/be7e-106813275/Screen_Shot_2018-07-19_at_3.53.39_PM_large.png',
    description: 'This training session aims at..',
    drills: [createDrill()],
    ...override,
  };
};

export const createProgram = (override = {}) => {
  return {
    id: 1,
    type: DrillTypes.FITNESS,
    equipmentLabel: EquipmentLabels.NONE,
    title: 'Beginner',
    trainings: [createTraining()],
    ...override,
  };
};

const fitnessDrill1 = {
  id: 1,
  type: DrillTypes.FITNESS,
  author: 'Author',
  title: 'Fitness Drill Title',
  image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
  description: 'Description of the drill',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.NONE,
  equipment: 'Equipment needs for the drill',
  durationInMinutes: 10,
  intensity: Intensities.LOW,
  goals: [FitnessGoals.FULL_BODY],
  seasonTiming: SeasonTimings.OFF_SEASON,
  level: Levels.BEGINNER,
  steps: [
    {
      id: 0,
      title: 'Warmup',
      subtitle: 'This is a subtitle',
      vimeoId: '462695757',
    },
    {
      id: 1,
      title: 'Do the drill',
      subtitle: 'This is a subtitle',
      vimeoId: '462695757',
    },
    {
      id: 2,
      title: 'Last step',
      subtitle: 'This is a subtitle',
      vimeoId: '462695757',
    },
  ],
};

const fitnessDrill2 = {
  id: 2,
  type: DrillTypes.FITNESS,
  author: 'Author',
  title: 'Fitness Drill Title',
  image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
  description: 'Description of the drill',
  minimalPlayersNumber: 1,
  equipmentLabel: EquipmentLabels.FULL,
  equipment: 'Equipment needs for the drill',
  durationInMinutes: 10,
  intensity: Intensities.HIGH,
  goals: [FitnessGoals.LEGS],
  seasonTiming: SeasonTimings.IN_SEASON,
  level: Levels.INTERMEDIATE,
  steps: [
    {
      id: 0,
      title: 'Warmup',
      subtitle: 'This is a subtitle',
      vimeoId: '462695757',
    },
    {
      id: 1,
      title: 'Do the drill',
      subtitle: 'This is a subtitle',
      vimeoId: '462695757',
    },
    {
      id: 2,
      title: 'Last step',
      subtitle: 'This is a subtitle',
      vimeoId: '462695757',
    },
  ],
};

const frisbeeDrill1 = {
  id: 3,
  type: DrillTypes.FRISBEE,
  author: 'Author',
  title: 'Frisbee Drill Title',
  image: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
  minimalPlayersNumber: 2,
  equipmentLabel: '',
  equipment: 'Equipment needs for the drill',
  durationInMinutes: 30,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: '',
  level: Levels.BEGINNER,
  steps: [
    {
      id: 0,
      animation: animationSquare,
    },
  ],
};

const frisbeeDrill2 = {
  id: 4,
  type: DrillTypes.FRISBEE,
  author: 'Author',
  title: 'Frisbee Drill Title',
  image:
    'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
  minimalPlayersNumber: 2,
  equipmentLabel: '',
  equipment: 'Equipment needs for the drill',
  durationInMinutes: 30,
  intensity: Intensities.LOW,
  goals: [FrisbeeGoals.DEFENSE],
  seasonTiming: '',
  level: Levels.BEGINNER,
  steps: [
    {
      id: 0,
      vimeoId: '462695757',
    },
  ],
};

const training = {
  id: 1,
  illustrationSource: 'Rise Up',
  title: 'Dump & Swing',
  image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
  drills: [fitnessDrill2, frisbeeDrill1],
};

const training2 = {
  id: 2,
  illustrationSource: 'Rise Up',
  title: 'Training 2',
  image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
  drills: [frisbeeDrill1, frisbeeDrill2],
};

export default {
  theory: {
    dictionary: [
      {
        id: 1,
        title: 'B',
        data: [
          {
            id: 0,
            text: 'Break',
            definition:
              'When Forcing you are making the player holding the disc throw a certain direction. A break is when your attempt fails and they throw the direction you are guarding against. A teammate may yell “no break!” if there is an opposing player wide open on the guarded side, this means try extra hard to guard that side.',
          },
          {
            id: 1,
            text: 'Brick',
            definition:
              'Happens when a freshly pulled disc goes out-of-bounds. The receiving team take the disc to the brick-mark which is centrally located and 20 yards in-field from the first end zone line. A brick is signified by clapping hands once over head or by calling “Brick.”',
          },
        ],
      },
    ],
    essentials: [
      {
        title: 'Cutting',
        pages: [
          {
            id: 1,
            title: 'How to make a perfect cut?',
            text: 'Rise Up Ultimate',
            video: '424000350',
            youtube: 'https://youtu.be/CqpPfVZ1HeI',
          },
        ],
      },
      {
        title: 'Throwing',
        pages: [
          {
            id: 1,
            title: 'How to make a perfect throw?',
            text: 'Rise Up Ultimate',
            video: '424000350',
            youtube: 'https://youtu.be/CqpPfVZ1HeI',
          },
        ],
      },
    ],
    tactics: [
      {
        title: 'Vertical Stack',
        pages: [
          {
            id: 1,
            title: 'How does vertical stacks work?',
            text: 'That Drone Guy Ty',
            video: '424002454',
            youtube: 'https://youtu.be/CqpPfVZ1HeI',
          },
        ],
      },
      {
        title: 'Horizontal Stack',
        pages: [
          {
            id: 1,
            title: 'How does vertical stacks work?',
            text: 'That Drone Guy Ty',
            video: '424002454',
            youtube: 'https://youtu.be/CqpPfVZ1HeI',
          },
        ],
      },
    ],
  },
  favoriteDrills: [],
  completeTrainings: [],
  drills: [fitnessDrill1, fitnessDrill2, frisbeeDrill1, frisbeeDrill2],
  programs: [
    {
      id: 1,
      type: DrillTypes.FITNESS,
      equipmentLabel: EquipmentLabels.NONE,
      title: 'Beginner',
      trainings: [training, training2],
    },
  ],
};
