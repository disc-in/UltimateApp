import animationMenageATrois from './AnimationMenageATrois';
import animationSquare from './AnimationSquare';
import { DrillTypes, Intensities, GoalsFrisbee, GoalsFitness, Levels, SeasonTimings, EquipmentLabels } from './index';

export const createDrill = (override = {}) => {
  return {
    id: 1,
    type: DrillTypes.FITNESS,
    source: 'Author',
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
    video: 'https://www.youtube.com/embed/JkVHrA5o23o',
    /* animation:, */
    steps: [
      {
        title: 'Warmup',
        subtitle: 'This is a subtitle',
      },
      {
        title: 'Do the drill',
        subtitle: 'This is a subtitle',
      },
      {
        title: 'Last step',
        subtitle: 'This is a subtitle',
      },
    ],
    ...override,
  };
};

export default {
  favoriteDrills: [],
  drills: [
    {
      id: 1,
      type: DrillTypes.FITNESS,
      source: 'Author',
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
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 2,
      type: DrillTypes.FITNESS,
      source: 'Author',
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
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
      /* animation:, */
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 3,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      minimalPlayersNumber: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */

      durationInMinutes: 30,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
    {
      id: 4,
      type: DrillTypes.TECHNICAL,
      source: 'Author',
      title: 'Frisbee Drill Title',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      minimalPlayersNumber: 2,
      equipmentLabel: '',
      equipment: 'Equipment needs for the drill',
      /* [
        {
          count: 1,
          type: 'Disc',
        },
        {
          count: 2,
          type: 'Cone',
        },
      ], */
      durationInMinutes: 30,
      intensity: Intensities.LOW,
      goals: [GoalsFrisbee.DEFENSE],
      seasonTiming: '',
      level: Levels.BEGINNER,
      /* video:, */
      animation: animationSquare,
      steps: [],
    },
  ],
  trainings: [
    {
      id: 1,
      source: 'Rise Up',
      title: 'Dump & Swing',
      image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      drills: [2, 3],
    },
  ],
};
