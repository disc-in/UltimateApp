import animationSquare from './AnimationSquare';
import {
  DrillTypes,
  Intensities,
  GoalsFrisbee,
  GoalsFitness,
  Levels,
  SeasonTimings,
  EquipmentLabels,
  IllustrationType,
} from './index';

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
    goals: [GoalsFitness.FULL_BODY],
    seasonTiming: SeasonTimings.OFF_SEASON,
    level: Levels.BEGINNER,
    steps: [
      {
        title: 'Warmup',
        subtitle: 'This is a subtitle',
        illustrationType: IllustrationType.YOUTUBE,
        illustrationSource: 'https://www.youtube.com/embed/JkVHrA5o23o',
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
    title: 'Beginner',
    trainings: [createTraining()],
    ...override,
  };
};

export default {
  favoriteDrills: [],
  drills: [
    {
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
      goals: [GoalsFitness.FULL_BODY],
      seasonTiming: SeasonTimings.OFF_SEASON,
      level: Levels.BEGINNER,
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
          illustrationType: IllustrationType.YOUTUBE,
          illustrationSource: 'https://www.youtube.com/embed/JkVHrA5o23o',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
          illustrationType: IllustrationType.YOUTUBE,
          illustrationSource: 'https://www.youtube.com/embed/JkVHrA5o23o',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
          illustrationType: IllustrationType.YOUTUBE,
          illustrationSource: 'https://www.youtube.com/embed/JkVHrA5o23o',
        },
      ],
    },
    {
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
      goals: [GoalsFitness.LEGS],
      seasonTiming: SeasonTimings.IN_SEASON,
      level: Levels.INTERMEDIATE,
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
          illustrationType: IllustrationType.YOUTUBE,
          illustrationSource: 'https://www.youtube.com/embed/JkVHrA5o23o',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
          illustrationType: IllustrationType.YOUTUBE,
          illustrationSource: 'https://www.youtube.com/embed/JkVHrA5o23o',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
          illustrationType: IllustrationType.YOUTUBE,
          illustrationSource: 'https://www.youtube.com/embed/JkVHrA5o23o',
        },
      ],
    },
    {
      id: 3,
      type: DrillTypes.TECHNICAL,
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
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      steps: [
        {
          illustrationType: IllustrationType.ANIMATION,
          illustrationSource: animationSquare,
        },
      ],
    },
    {
      id: 4,
      type: DrillTypes.TECHNICAL,
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
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      steps: [
        {
          illustrationType: IllustrationType.ANIMATION,
          illustrationSource: animationSquare,
        },
      ],
    },
  ],
  trainings: [
    {
      id: 1,
      illustrationSource: 'Rise Up',
      title: 'Dump & Swing',
      image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      drills: [2, 3],
    },
  ],
  programs: [
    {
      id: 1,
      title: 'Beginner',
      trainings: [1],
    },
  ],
};
