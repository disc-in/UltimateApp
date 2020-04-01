import animationMenageATrois from './AnimationMenageATrois';
import animationSquare from './AnimationSquare';

export const DrillTypes = {
  FITNESS: 'fitness',
  TECHNICAL: 'technical',
};

export const Intensities = {
  LOW: 'Low',
  MODERATE: 'Moderate',
  HIGH: 'High',
};

export const Goals = {
  DEFENSE: 'Defense',
  HANDLING: 'Handling',
  CUTTING: 'Cutting',
  THROWING: 'Throwing',
  COMMUNICATION: 'Communication',
  CATCH: 'Catch',
  LEGS: 'Legs',
  UPPER: 'Upper',
  FULLBODY: 'Full body',
  CORE: 'CORE',
  CONDITIONING: 'Conditioning',
};

export const Levels = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
};

export const SeasonTimings = {
  OFFSEASON: 'Off-season',
  PRESEASON: 'Pre-season',
  INSEASON: 'In-season',
  ANYTIME: 'Anytime',
};

export const EquipmentLabels = {
  NOEQUIPMENT: 'No Equipment',
  BASIC: 'Basic Equipment',
  FULLEQUIPMENT: 'Full equipment',
};

export default {
  favoritesDrill: [],
  drills: [
    {
      id: 1,
      type: DrillTypes.FITNESS,
      source: 'MadFit ',
      title: 'Full body HIIT',
      image: 'https://i.insider.com/5a454d9a4aa6b519158b727e?width=600&format=jpeg&auto=webp',
      description:
        'A 20 minute APARTMENT FRIENDLY full body hiit workout AT HOME! Low impact, no jumping, equipment free, and NO REPEAT! ',
      nbPlayers: 1,
      equipmentLabel: EquipmentLabels.NOEQUIPMENT,
      equipment: 'None',
      durationInMinutes: 22,
      goals: [goals.DEFENSE],
      level: levels.BEGINNER,
      video: 'https://www.youtube.com/embed/JkVHrA5o23o',
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
      type: DrillTypes.TECHNICAL,
      source: 'Flikulti',
      title: 'Defense Positioning',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: [goals.DEFENSE, goals.HANDLING],
      level: levels.BEGINNER,
      animation: animationSquare,
      steps: [],
    },
    {
      id: 3,
      type: DrillTypes.FITNESS,
      source: 'Fraser Wilson',
      title: 'Abs Workout',
      image: 'https://assets.afcdn.com/story/20180529/1160936_w980h638c1cx622cy473cxt0cyt0cxb2121cyb1414.jpg',
      description: 'A full body workout that you can do whenever and wherever you like!!',
      nbPlayers: 1,
      equipment: EquipmentLabels.NOEQUIPMENT,
      durationInMinutes: 10,
      goals: ['Abdos'],
      level: 'Beginner',
      video: 'https://www.youtube.com/embed/uUKAYkQZXko',
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
      id: 4,
      type: DrillTypes.TECHNICAL,
      source: 'Rise up',
      title: 'Backhand',
      image: 'https://conseils.casalsport.com/wp-content/uploads/2019/05/ultimate-frisbee-sport.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 15,
      goals: ['Technical'],
      level: 'Beginner',
      animation: animationSquare,
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 5,
      type: DrillTypes.TECHNICAL,
      source: 'Moby book',
      title: '3 vs 2',
      image: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
      animation: animationSquare,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 5,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 20,
      goals: ['Defense', 'Fast break'],
      level: 'intermediate',
      steps: [],
    },
    {
      id: 6,
      type: DrillTypes.TECHNICAL,
      source: 'Haude et Djé',
      title: 'Treasure hunt',
      image:
        'https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/05/node_528988/1877948/public/2020/03/05/B9722816509Z.1_20200305151253_000%2BG2AFL39TF.1-0.jpg?itok=jAQBQG6y1583417579',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 10,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 18,
      goals: ['Offense', 'Handling'],
      level: 'Beginner',
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 7,
      type: DrillTypes.TECHNICAL,
      source: 'Moby book',
      title: 'The big 8',
      image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 12,
      goals: ['Throwing', 'Offense'],
      level: 'intermediate',
      animation: animationSquare,
      steps: [],
    },
    {
      id: 8,
      type: DrillTypes.TECHNICAL,
      source: 'Kie',
      title: 'Force middle',
      image:
        'https://cms.qz.com/wp-content/uploads/2015/08/h_00486649-e1438606606764.jpg?quality=75&strip=all&w=1600&h=900',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 20,
      goals: ['Defense', 'Positionning'],
      level: 'intermediate',
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 9,
      type: DrillTypes.TECHNICAL,
      source: 'Mooncatchers',
      title: 'Long & dishies',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 6,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 14,
      goals: ['Catch', 'Throwing'],
      level: 'intermediate',
      steps: [],
    },
    {
      id: 10,
      type: DrillTypes.FITNESS,
      source: 'Rise Up',
      title: 'Bodyweight Only Benchmark',
      image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 1,
      equipment: 'No equipment',
      durationInMinutes: 15,
      goals: ['Endurance'],
      level: 'Intermediate',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
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
      id: 11,
      type: DrillTypes.FITNESS,
      source: 'Rise Up',
      title: 'Runner Warm-up',
      image: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'No equipment',
      durationInMinutes: 10,
      goals: ['Endurance'],
      level: 'Beginner',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
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
      id: 12,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Brillant Speed',
      image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'No equipment',
      durationInMinutes: 15,
      goals: ['Endurance'],
      level: 'Intermediate',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
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
      id: 13,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Extend your range',
      image: 'https://thedolcediet.com/wp-content/uploads/2017/06/stretch.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'None',
      durationInMinutes: 15,
      goals: ['Mobility'],
      level: 'Beginner',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
      steps: [],
    },
    {
      id: 14,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Ferocious 15',
      image: 'https://i.insider.com/5a454d9a4aa6b519158b727e?width=600&format=jpeg&auto=webp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 1,
      equipment: 'Basic Equipment',
      durationInMinutes: 15,
      goals: ['Strenght'],
      level: 'Advanced',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
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
      id: 15,
      type: DrillTypes.TECHNICAL,
      source: 'Flikulti',
      title: 'Defense Positioning',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: ['Defense', 'Handling'],
      level: 'Beginner',
      animation: animationSquare,
      steps: [],
    },
    {
      id: 16,
      type: DrillTypes.TECHNICAL,
      source: 'Rise up',
      title: 'Backhand',
      image: 'https://conseils.casalsport.com/wp-content/uploads/2019/05/ultimate-frisbee-sport.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 15,
      goals: ['Technical'],
      level: 'Beginner',
      animation: animationSquare,
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 17,
      type: DrillTypes.TECHNICAL,
      source: 'Moby book',
      title: '3 vs 2',
      image: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
      animation: animationSquare,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 5,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 20,
      goals: ['Defense', 'Fast break'],
      level: 'intermediate',
      steps: [],
    },
    {
      id: 18,
      type: DrillTypes.TECHNICAL,
      source: 'Haude et Djé',
      title: 'Treasure hunt',
      image:
        'https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/05/node_528988/1877948/public/2020/03/05/B9722816509Z.1_20200305151253_000%2BG2AFL39TF.1-0.jpg?itok=jAQBQG6y1583417579',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 10,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 18,
      goals: ['Offense', 'Handling'],
      level: 'Beginner',
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 19,
      type: DrillTypes.TECHNICAL,
      source: 'Moby book',
      title: 'The big 8',
      image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 12,
      goals: ['Throwing', 'Offense'],
      level: 'intermediate',
      animation: animationSquare,
      steps: [],
    },
    {
      id: 20,
      type: DrillTypes.TECHNICAL,
      source: 'Kie',
      title: 'Force middle',
      image:
        'https://cms.qz.com/wp-content/uploads/2015/08/h_00486649-e1438606606764.jpg?quality=75&strip=all&w=1600&h=900',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 20,
      goals: ['Defense', 'Positionning'],
      level: 'intermediate',
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 21,
      type: DrillTypes.TECHNICAL,
      source: 'Mooncatchers',
      title: 'Long & dishies',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 6,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 14,
      goals: ['Catch', 'Throwing'],
      level: 'intermediate',
      steps: [],
    },
    {
      id: 22,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Triple Threat',
      image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'Full Equipment',
      durationInMinutes: 15,
      goals: ['Strenght'],
      level: 'Advanced',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
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
      id: 23,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Fleet of Foot',
      image: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 1,
      equipment: 'Basic Equipment',
      durationInMinutes: 30,
      goals: ['Catch', 'Handling'],
      level: 'Intermediate',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
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
      id: 24,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Lifted by Lunges',
      image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'Basic Equipment',
      durationInMinutes: 30,
      goals: ['Strenght'],
      level: 'intermediate',
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
      id: 25,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Controlled Blast',
      image: 'https://thedolcediet.com/wp-content/uploads/2017/06/stretch.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'No Equipment',
      durationInMinutes: 45,
      goals: ['Endurance'],
      level: 'Intermediate',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
      steps: [],
    },
    {
      id: 26,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Planch',
      image: 'https://i.insider.com/5a454d9a4aa6b519158b727e?width=600&format=jpeg&auto=webp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 1,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 8,
      goals: ['abdos', 'Handling'],
      level: 'intermediate',
      animation: animationMenageATrois,
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
      id: 27,
      type: DrillTypes.TECHNICAL,
      source: 'Flikulti',
      title: 'Defense Positioning',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: ['Defense', 'Handling'],
      level: 'Beginner',
      animation: animationSquare,
      steps: [],
    },
    {
      id: 28,
      type: DrillTypes.FITNESS,
      source: 'Nike training club',
      title: 'Upper body',
      image: 'https://assets.afcdn.com/story/20180529/1160936_w980h638c1cx622cy473cxt0cyt0cxb2121cyb1414.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
      video: 'https://www.youtube.com/embed/mmq5zZfmIws',
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
      id: 29,
      type: DrillTypes.TECHNICAL,
      source: 'Rise up',
      title: 'Backhand',
      image: 'https://conseils.casalsport.com/wp-content/uploads/2019/05/ultimate-frisbee-sport.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 15,
      goals: ['Technical'],
      level: 'Beginner',
      animation: animationSquare,
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 30,
      type: DrillTypes.TECHNICAL,
      source: 'Moby book',
      title: '3 vs 2',
      image: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
      animation: animationSquare,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 5,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 20,
      goals: ['Defense', 'Fast break'],
      level: 'intermediate',
      steps: [],
    },
    {
      id: 31,
      type: DrillTypes.TECHNICAL,
      source: 'Haude et Djé',
      title: 'Treasure hunt',
      image:
        'https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/05/node_528988/1877948/public/2020/03/05/B9722816509Z.1_20200305151253_000%2BG2AFL39TF.1-0.jpg?itok=jAQBQG6y1583417579',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 10,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 18,
      goals: ['Offense', 'Handling'],
      level: 'Beginner',
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 32,
      type: DrillTypes.TECHNICAL,
      source: 'Moby book',
      title: 'The big 8',
      image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 12,
      goals: ['Throwing', 'Offense'],
      level: 'intermediate',
      animation: animationSquare,
      steps: [],
    },
    {
      id: 33,
      type: DrillTypes.TECHNICAL,
      source: 'Kie',
      title: 'Force middle',
      image:
        'https://cms.qz.com/wp-content/uploads/2015/08/h_00486649-e1438606606764.jpg?quality=75&strip=all&w=1600&h=900',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 20,
      goals: ['Defense', 'Positionning'],
      level: 'intermediate',
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 34,
      type: DrillTypes.TECHNICAL,
      source: 'Mooncatchers',
      title: 'Long & dishies',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 6,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 14,
      goals: ['Catch', 'Throwing'],
      level: 'intermediate',
      steps: [],
    },
    {
      id: 35,
      type: DrillTypes.FITNESS,
      source: 'Rise Up',
      title: 'Full body',
      image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 15,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
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
      id: 36,
      type: DrillTypes.FITNESS,
      source: 'Rise Up',
      title: 'Squat Upper body',
      image: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
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
      id: 37,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Combat duel',
      image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
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
      id: 38,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Yoga etirement',
      image: 'https://thedolcediet.com/wp-content/uploads/2017/06/stretch.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
      steps: [],
    },
    {
      id: 39,
      type: DrillTypes.FITNESS,
      source: 'Jimmy Mickle ',
      title: 'Planch',
      image: 'https://i.insider.com/5a454d9a4aa6b519158b727e?width=600&format=jpeg&auto=webp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 1,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 8,
      goals: ['abdos', 'Handling'],
      level: 'intermediate',
      animation: animationMenageATrois,
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
      id: 40,
      type: DrillTypes.TECHNICAL,
      source: 'Flikulti',
      title: 'Defense Positioning',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: ['Defense', 'Handling'],
      level: 'Beginner',
      animation: animationSquare,
      steps: [],
    },
    {
      id: 41,
      type: DrillTypes.FITNESS,
      source: 'Nike training club',
      title: 'Upper body',
      image: 'https://assets.afcdn.com/story/20180529/1160936_w980h638c1cx622cy473cxt0cyt0cxb2121cyb1414.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
      video: 'https://www.youtube.com/embed/mmq5zZfmIws',
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
      id: 42,
      type: DrillTypes.TECHNICAL,
      source: 'Rise up',
      title: 'Backhand',
      image: 'https://conseils.casalsport.com/wp-content/uploads/2019/05/ultimate-frisbee-sport.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 15,
      goals: ['Technical'],
      level: 'Beginner',
      animation: animationSquare,
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 43,
      type: DrillTypes.TECHNICAL,
      source: 'Moby book',
      title: '3 vs 2',
      image: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
      animation: animationSquare,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 5,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 20,
      goals: ['Defense', 'Fast break'],
      level: 'intermediate',
      steps: [],
    },
    {
      id: 44,
      type: DrillTypes.TECHNICAL,
      source: 'Haude et Djé',
      title: 'Treasure hunt',
      image:
        'https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/05/node_528988/1877948/public/2020/03/05/B9722816509Z.1_20200305151253_000%2BG2AFL39TF.1-0.jpg?itok=jAQBQG6y1583417579',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 10,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 18,
      goals: ['Offense', 'Handling'],
      level: 'Beginner',
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 45,
      type: DrillTypes.TECHNICAL,
      source: 'Moby book',
      title: 'The big 8',
      image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 12,
      goals: ['Throwing', 'Offense'],
      level: 'intermediate',
      animation: animationSquare,
      steps: [],
    },
    {
      id: 46,
      type: DrillTypes.TECHNICAL,
      source: 'Kie',
      title: 'Force middle',
      image:
        'https://cms.qz.com/wp-content/uploads/2015/08/h_00486649-e1438606606764.jpg?quality=75&strip=all&w=1600&h=900',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 20,
      goals: ['Defense', 'Positionning'],
      level: 'intermediate',
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
        },
      ],
    },
    {
      id: 47,
      type: DrillTypes.TECHNICAL,
      source: 'Mooncatchers',
      title: 'Long & dishies',
      image:
        'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 6,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 14,
      goals: ['Catch', 'Throwing'],
      level: 'intermediate',
      steps: [],
    },
    {
      id: 48,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Full body',
      image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 15,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
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
      id: 49,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Squat Upper body',
      image: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
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
      id: 50,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Combat duel',
      image: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
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
      id: 51,
      type: DrillTypes.FITNESS,
      source: '',
      title: 'Yoga etirement',
      image: 'https://thedolcediet.com/wp-content/uploads/2017/06/stretch.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 10,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
      video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
      steps: [],
    },
  ],

  training: [
    {
      id: 1,
      source: 'Rise Up',
      title: 'Dump & Swing',
      image: 'https://theaudl.com/sites/default/files/04282017%E2%80%94Minnesota%E2%80%94Cousins.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 15,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
      drills: [1, 2, 3, 4],
    },
    {
      id: 2,
      source: '** Ultimate App **',
      title: 'First practice',
      image:
        'https://cdn3.sportngin.com/attachments/photo/be7e-106813275/Screen_Shot_2018-07-19_at_3.53.39_PM_large.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      equipment: 'One disc, 2 cones, 3 players',
      durationInMinutes: 15,
      goals: ['Catch', 'Handling'],
      level: 'intermediate',
      drills: [5, 6, 7, 8],
    },
  ],
};
