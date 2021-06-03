import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { createDrill } from '../../Fixtures/TestFixtures';
import store from '../../Store/testStore';

import ConnectedDrillList, { DrillList } from './DrillList';

describe('<DrillList />', () => {
  const drill = createDrill({ id: 1 });
  const customDrill = createDrill({ id: 2, custom: true });
  const drills = [drill, customDrill];

  it('renders correctly', async () => {
    const { toJSON } = await waitFor(() =>
      render(
        <Provider store={store}>
          <ConnectedDrillList drillsToDisplay={drills} />
        </Provider>,
      ),
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('can edit a custom drill', async () => {
    const navigate = jest.fn();
    const navigation = { navigate };

    const { getByTestId } = render(
      <Provider store={store}>
        <DrillList drillsToDisplay={drills} navigation={navigation} />
      </Provider>,
    );

    fireEvent.press(getByTestId('editButton'));
    await waitFor(() => expect(navigate).toBeCalledWith('DrillEditorPage', { currentDrill: customDrill }));
  });

  it('can delete a custom drill', async () => {
    const deleteDrill = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <DrillList drillsToDisplay={drills} deleteDrill={deleteDrill} />
      </Provider>,
    );

    fireEvent.press(getByTestId('deleteButton'));
    await waitFor(() => expect(deleteDrill).toBeCalledWith(customDrill.id));
  });
});
