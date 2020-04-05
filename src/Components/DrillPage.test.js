import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, fireEvent } from 'react-native-testing-library';
import store from '../Store/testStore';
import { createDrill } from '../Fixtures/TestFixtures';

import ConnectedDrillPage, { DrillPage } from './DrillPage';

const storeInstance = store;

describe('<DrillPage />', () => {
  const drill = createDrill();
  const route = {
    params: {
      drill,
    },
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
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
