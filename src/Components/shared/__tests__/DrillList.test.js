import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { Alert } from 'react-native';

import { createDrill } from '../../../Fixtures/TestFixtures';
import store from '../../../Store/testStore';

import ConnectedDrillList, { DrillList } from '../DrillList';

describe('<DrillList />', () => {
  const drill = createDrill({ id: 1 });
  const customDrill = createDrill({ id: 2, custom: true });
  const drills = [drill, customDrill];
  const deleteDrill = jest.fn();

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

  it('does not trigger delete on cancel', async () => {
    jest.spyOn(Alert, 'alert');
    const { getByTestId, getByDisplayValue } = render(
      <Provider store={store}>
        <DrillList drillsToDisplay={drills} deleteDrill={deleteDrill} />
      </Provider>,
    );

    fireEvent.press(getByTestId('deleteButton'));

    // Opens confirmation Alert
    expect(Alert.alert).toHaveBeenCalled();

    // Press Cancel
    expect(Alert.alert.mock.calls[0][2][0].text).toEqual('Cancel');
    Alert.alert.mock.calls[0][2][0].onPress();

    expect(deleteDrill).not.toHaveBeenCalled();
  });

  it('triggers delete on confirmation', async () => {
    jest.spyOn(Alert, 'alert');
    const { getByTestId, getByDisplayValue } = render(
      <Provider store={store}>
        <DrillList drillsToDisplay={drills} deleteDrill={deleteDrill} />
      </Provider>,
    );

    fireEvent.press(getByTestId('deleteButton'));

    // Opens confirmation Alert
    expect(Alert.alert).toHaveBeenCalled();

    // Press Cancel
    expect(Alert.alert.mock.calls[0][2][1].text).toEqual('Delete');
    Alert.alert.mock.calls[0][2][1].onPress();

    expect(deleteDrill).toHaveBeenCalledWith(customDrill.id);
  });
});
