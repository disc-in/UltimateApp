import animationMenageATrois from './AnimationMenageATrois';
import animationSquare from './AnimationSquare';

export default {
  drills: [
    {
      id: 1,
      type: 'fitness', // vs technical vs collectif
      source: 'Rise Up',
      title: 'Hot Box',
      img: 'https://gazettesports.fr/wp-content/uploads/2018/11/ultimate_frisbee_gloves.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 900, // seconds
      goals: ['Catch', 'Handling'],
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
      type: 'technical', // vs technical vs collectif
      source: 'Flikulti',
      title: 'Defense Positioning',
      img: 'https://gazettesports.fr/wp-content/uploads/2018/11/ultimate_frisbee_gloves.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
      nbPlayers: 2,
      duration: 1200, // seconds
      goals: ['Catch', 'Handling'],
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
  ],
};
