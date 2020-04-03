import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, fireEvent } from 'react-native-testing-library';
import store from '../Store/configureStore';

import ConnectedDrillPage, { DrillPage } from './DrillPage';

const storeInstance = store;

describe('<DrillPage />', () => {
  const drill = {
    id: 10,
    type: 'fitness', // vs technical
    source: 'Rise Up',
    title: 'Hot Box',
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
  };
  const route = {
    params: {
      drill,
    },
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={storeInstance}>
          <ConnectedDrillPage route={route} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to video view', async () => {
    const navigation = { navigate: jest.fn() };
    const { container, getByText } = render(<DrillPage route={route} navigation={navigation} />);

    await fireEvent.press(getByText('Video'));

    expect(navigation.navigate).toBeCalledWith('DrillAnimationPage', { drill });
  });
});
