import React from 'react';
import renderer from 'react-test-renderer';

import Filters from './Filters';

describe('<Filters />', () => {
  it('renders correctly', () => {
    const drills = [
      {
        id: 10,
        type: 'fitness', // vs technical
        source: 'Rise Up',
        title: 'Hot Box',
        image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
        minimalPlayersNumber: 2,
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
    ];
    const tree = renderer
      .create(<Filters initialData={drills} onConfirm={jest.fn()} onFiltered={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
