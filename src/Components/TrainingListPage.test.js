import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Store/configureStore';

import ConnectedTrainingListPage, { TrainingListPage } from './TrainingListPage';

const storeInstance = store;

describe('<TrainingListPage />', () => {
  it('renders correctly when connected', () => {
    const tree = renderer
      .create(
        <Provider store={storeInstance}>
          <ConnectedTrainingListPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a training', () => {
    const trainings = [
      {
        id: 1,
        source: 'Rise Up',
        title: 'Dump & Swing',
        image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque dignissim felis, at tristique mi efficitur a. Nulla pellentesque odio nunc, ut sodales ex pulvinar at. In hac habitasse platea dictumst. Pellentesque sodales nisl lorem, ac lacinia nisl lacinia eu. Proin lacinia viverra mauris, et pharetra ipsum tempus eget. Ut maximus sapien in hendrerit ultricies. Maecenas vel diam tincidunt, consequat nunc a, mattis eros. Curabitur a eros a nulla malesuada gravida. Donec massa quam, suscipit eget efficitur et, euismod sed nulla. Morbi mattis et magna a aliquam. Fusce pellentesque vel erat eget',
        drills: [7, 3],
      },
    ];
    const drills = [
      {
        id: 10,
        type: 'fitness',
        source: 'Rise Up',
        title: 'Hot Box',
        image: 'http://www.liberte-fitness.fr/sites/default/files/styles/slider/public/news/tone.jpg?itok=505bme2a',
        description: 'Hi',
        nbPlayers: 2,
        equipment: 'One disc, 2 cones, 3 players',
        durationInMinutes: 15,
        goals: ['Catch', 'Handling'],
        level: 'intermediate',
        video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        steps: [],
      },
      {
        id: 3,
        type: 'fitness',
        source: 'Rise Up',
        title: 'Hot Box',
        image: 'https://thedolcediet.com/wp-content/uploads/2017/06/stretch.jpg',
        description: 'this is a description',
        nbPlayers: 2,
        equipment: 'One disc, 2 cones, 3 players',
        durationInMinutes: 10,
        goals: ['Catch', 'Handling'],
        level: 'intermediate',
        video: 'https://www.youtube.com/embed/oN1bzPCKkGE',
        steps: [],
      },
      {
        id: 7,
        type: 'technical',
        source: 'Moby book',
        title: 'The big 8',
        image: 'https://d3j2bju5c7tc02.cloudfront.net/2016_44/backhand.jpg',
        description: 'Nice',
        nbPlayers: 2,
        equipment: 'One disc, 2 cones, 3 players',
        durationInMinutes: 12,
        goals: ['Throwing', 'Offense'],
        level: 'intermediate',
        video: 'test video',
        steps: [],
      },
    ];
    const tree = renderer.create(<TrainingListPage allDrills={drills} trainings={trainings} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
