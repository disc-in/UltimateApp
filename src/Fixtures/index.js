import animationMenageATrois from './AnimationMenageATrois';
import animationSquare from './AnimationSquare';

export default {
  drills: [
    {
      id: 1,
      type: 'fitness', // vs technical vs collectif
      source: 'Jimmy Mickle ',
      title: 'Planch',
      img: 'https://i.insider.com/5a454d9a4aa6b519158b727e?width=600&format=jpeg&auto=webp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 1,
      duration: 8, // minutes
      goals: ['abdos', 'Handling'],
      level: ['intermediate'],
      steps: [
        {
          key: '1',
          title: 'Warmup',
          subtitle: 'This is a subtitle',
          video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        },
        {
          key: '2',
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
          animation: animationMenageATrois,
        },
        {
          key: '3',
          title: 'Last step',
          subtitle: 'This is a subtitle',
          webview: 'http://google.com',
        },
      ],
    },
    {
      id: 2,
      type: 'technical', // vs fitness vs collectif
      source: 'Flikulti',
      title: 'Defense Positioning',
      img: 'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 10, // minutes
      goals: ['Defense', 'Handling'],
      level: ['Beginner'],
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
          animation: animationSquare,
        },
      ],
    },
    {
      id: 3,
      type: 'fitness', // vs technical vs collectif
      source: 'Nike training club',
      title: 'Upper body',
      img: 'https://assets.afcdn.com/story/20180529/1160936_w980h638c1cx622cy473cxt0cyt0cxb2121cyb1414.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 10, // minutes
      goals: ['Catch', 'Handling'],
      level: ['intermediate'],
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
          video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
          animation: animationMenageATrois,
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
          webview: 'http://google.com',
        },
      ],
    },
    {
      id: 4,
      type: 'technical', // vs fitness vs collectif
      source: 'Rise up',
      title: 'Backhand',
      img: 'https://conseils.casalsport.com/wp-content/uploads/2019/05/ultimate-frisbee-sport.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 15, // minutes
      goals: ['Technical'],
      level: ['Beginner'],
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
          animation: animationSquare,
        },
      ],
    },
    {
      id: 5,
      type: 'technical', // vs fitness vs collectif
      source: 'Moby book',
      title: '3 vs 2',
      img: 'https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2019/07/AP19204604544330.jpg?w=1024&ssl=1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 5,
      duration: 20, // minutes
      goals: ['Defense', 'Fast break'],
      level: ['intermediate'],
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
          animation: animationSquare,
        },
      ],
    },
    {
      id: 6,
      type: 'technical', // vs fitness vs collectif
      source: 'Haude et Djé',
      title: 'Treasure hunt',
      img: 'https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/03/05/node_528988/1877948/public/2020/03/05/B9722816509Z.1_20200305151253_000%2BG2AFL39TF.1-0.jpg?itok=jAQBQG6y1583417579',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 10,
      duration: 18, // minutes
      goals: ['Offense', 'Handling'],
      level: ['Beginner'],
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
          animation: animationSquare,
        },
      ],
    },
    {
      id: 7,
      type: 'technical', // vs fitness vs collectif
      source: 'Moby book',
      title: 'The big 8',
      img: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 12, // minutes
      goals: ['Throwing', 'Offense'],
      level: ['intermediate'],
      steps: [
        {
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
          animation: animationSquare,
        },
      ],
    },
    {
      id: 8,
      type: 'technical', // vs fitness vs collectif
      source: 'Kie',
      title: 'Force middle',
      img: 'https://cms.qz.com/wp-content/uploads/2015/08/h_00486649-e1438606606764.jpg?quality=75&strip=all&w=1600&h=900',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 20, // minutes
      goals: ['Defense', 'Positionning'],
      level: ['intermediate'],
      steps: [
        {
          key: '1'
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
          animation: animationSquare,
        },
      ],
    },
    {
      id: 9,
      type: 'technical', // vs fitness vs collectif
      source: 'Mooncatchers',
      title: 'Long & dishies',
      img: 'https://www.plu.edu/recreations/wp-content/uploads/sites/197/2019/04/ultimate-frisbee-3-2-19-1122-scaled-1536x1163.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 6,
      duration: 14, // minutes
      goals: ['Catch', 'Throwing'],
      level: ['intermediate'],
      steps: [
        {
          key: '1',
          title: 'Only the animation',
          subtitle: 'This is a subtitle',
          animation: animationSquare,
        },
      ],
    },
    {
      id: 10,
      type: 'fitness', // vs technical vs collectif
      source: 'Rise Up',
      title: 'Hot Box',
      img: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 900, // seconds
      goals: ['Catch', 'Handling'],
      level: ['intermediate'],
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
          video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
          animation: animationMenageATrois,
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
          webview: 'http://google.com',
        },
      ],
    },
    {
      id: 11,
      type: 'fitness', // vs technical vs collectif
      source: 'Rise Up',
      title: 'Hot Box',
      img: 'https://www.planetfitness.co.za/wp-content/uploads/2019/04/SLP_6767-copy-768x430.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 900, // seconds
      goals: ['Catch', 'Handling'],
      level: ['intermediate'],
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
          video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
          animation: animationMenageATrois,
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
          webview: 'http://google.com',
        },
      ],
    },
    {
      id: 12,
      type: 'fitness', // vs technical vs collectif
      source: 'Rise Up',
      title: 'Hot Box',
      img: 'https://www.dialysistech.org/wp-content/uploads/2019/06/fitness.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 900, // seconds
      goals: ['Catch', 'Handling'],
      level: ['intermediate'],
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
          video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
          animation: animationMenageATrois,
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
          webview: 'http://google.com',
        },
      ],
    },
    {
      id: 13,
      type: 'fitness', // vs technical vs collectif
      source: 'Rise Up',
      title: 'Hot Box',
      img: 'https://thedolcediet.com/wp-content/uploads/2017/06/stretch.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 900, // seconds
      goals: ['Catch', 'Handling'],
      level: ['intermediate'],
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
          video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
          animation: animationMenageATrois,
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
          webview: 'http://google.com',
        },
      ],
    },
    {
      id: 14,
      type: 'collectif', // vs technical vs fitness
      source: 'Rise Up',
      title: 'Dump & Swing',
      img: 'https://theaudl.com/sites/default/files/04282017%E2%80%94Minnesota%E2%80%94Cousins.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 900, // seconds
      goals: ['Catch', 'Handling'],
      level: ['intermediate'],
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
          video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
          animation: animationMenageATrois,
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
          webview: 'http://google.com',
        },
      ],
    },
    {
      id: 15,
      type: 'collectif', // vs technical vs fitness
      source: '** Ultimate App **',
      title: 'First practice',
      img: 'https://cdn3.sportngin.com/attachments/photo/be7e-106813275/Screen_Shot_2018-07-19_at_3.53.39_PM_large.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 900, // seconds
      goals: ['Catch', 'Handling'],
      level: ['intermediate'],
      steps: [
        {
          title: 'Warmup',
          subtitle: 'This is a subtitle',
          video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        },
        {
          title: 'Do the drill',
          subtitle: 'This is a subtitle',
          animation: animationMenageATrois,
        },
        {
          title: 'Last step',
          subtitle: 'This is a subtitle',
          webview: 'http://google.com',
        },
      ],
    },
  ],
};