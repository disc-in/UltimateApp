import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NavigationContext } from '@react-navigation/native';

import store from '../../Store/testStore';
import { createDrill } from '../../Fixtures/TestFixtures';
import { DrillTypes, Intensities, Levels, FrisbeeGoals } from '../../Fixtures/config';

import ConnectedDrillEditorPage, { DrillEditorPage } from '../DrillEditorPage';

import * as random from '../../utils/random';
jest.spyOn(random, 'generateUuid').mockImplementation(() => '123456');
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.setTimeout(30000);

describe('<DrillEditorPage />', () => {
  // fake NavigationContext value data
  const navContext = {
    isFocused: () => true,
    // addListener returns an unscubscribe function.
    addListener: jest.fn(() => jest.fn()),
  };

  it('renders correctly when creating a new drill', async () => {
    const navigation = { setOptions: jest.fn() };
    const { toJSON } = render(
      <Provider store={store}>
        <NavigationContext.Provider value={navContext}>
          <ConnectedDrillEditorPage route={{}} navigation={navigation} />
        </NavigationContext.Provider>
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when creating an existing drill', async () => {
    const navigation = { setOptions: jest.fn() };
    const route = {
      params: {
        currentDrill: createDrill(),
      },
    };
    const { toJSON } = render(
      <Provider store={store}>
        <NavigationContext.Provider value={navContext}>
          <ConnectedDrillEditorPage route={route} navigation={navigation} />
        </NavigationContext.Provider>
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('can fill the form and create the drill', async () => {
    let createdDrill;
    const saveDrill = jest.fn((drill) => (createdDrill = drill));
    const navigate = jest.fn();
    const navigation = { navigate, setOptions: jest.fn() };

    const { getByTestId, getAllByTestId } = render(
      <NavigationContext.Provider value={navContext}>
        <DrillEditorPage route={{}} customDrills={[]} saveDrill={saveDrill} navigation={navigation} />
      </NavigationContext.Provider>,
    );

    fireEvent.changeText(getByTestId('input-author'), 'Martin');
    fireEvent.changeText(getByTestId('input-title'), 'My Title');
    fireEvent.changeText(getByTestId('input-image'), 'https://zupimages.net/up/20/51/x23u.jpg');
    fireEvent.changeText(getByTestId('input-description'), 'This is the description');
    fireEvent.changeText(getByTestId('input-minimalPlayersNumber'), '4');
    fireEvent.changeText(getByTestId('input-inGame'), 'This is how you will use it to win a game');
    fireEvent.changeText(getByTestId('input-equipment'), '1 disc');
    fireEvent.changeText(getByTestId('input-durationInMinutes'), '10');
    fireEvent.press(getByTestId(`input-intensity-${Intensities.LOW}`));
    fireEvent.press(getByTestId(`input-goals-${FrisbeeGoals.JUNIOR}`));
    fireEvent.press(getByTestId(`input-goals-${FrisbeeGoals.THROWING}`));
    fireEvent.press(getByTestId(`input-level-${Levels.BEGINNER}`));

    fireEvent.changeText(getByTestId('input-steps[0].title'), 'The first variant');
    fireEvent.changeText(getByTestId('input-steps[0].instruction'), 'Do it this way');
    fireEvent.changeText(getByTestId('input-steps[0].vimeoId'), '123456789');
    fireEvent.changeText(getByTestId('input-steps[0].youtube'), 'https://youtu.be/4_yLG_-5YQs');

    // Adding 2 steps then removing the last one
    fireEvent.press(getByTestId('addStep'));
    fireEvent.press(getByTestId('addStep'));
    fireEvent.press(getAllByTestId('removeStep')[2]);

    fireEvent.press(getByTestId('submitButton'));

    const expectedDrill = {
      id: expect.any(String),
      type: DrillTypes.FRISBEE,
      custom: true,
      visibleInList: true,
      author: 'Martin',
      title: 'My Title',
      image: 'https://zupimages.net/up/20/51/x23u.jpg',
      description: 'This is the description',
      minimalPlayersNumber: '4',
      inGame: 'This is how you will use it to win a game',
      // equipmentLabel: undefined, // Not filled
      equipment: '1 disc',
      durationInMinutes: '10',
      intensity: Intensities.LOW,
      goals: [FrisbeeGoals.JUNIOR, FrisbeeGoals.THROWING],
      // seasonTiming: undefined, // Not filled
      level: Levels.BEGINNER,
      steps: [
        {
          id: 0,
          title: 'The first variant',
          animation: undefined,
          vimeoId: '123456789',
          youtube: 'https://youtu.be/4_yLG_-5YQs',
          instruction: 'Do it this way',
        },
        {
          id: 1,
          title: '',
          animation: undefined,
          vimeoId: undefined,
          youtube: undefined,
          instruction: undefined,
        },
      ],
    };
    await waitFor(() => {
      expect(saveDrill).toHaveBeenCalledWith(expectedDrill);
    });
    expect(navigate).toHaveBeenCalledWith('DrillPage', { id: createdDrill.id });
  });

  it('cannot create a drill with missing fields', async () => {
    let createdDrill;
    const saveDrill = jest.fn((drill) => (createdDrill = drill));
    const navigate = jest.fn();
    const navigation = { navigate, setOptions: jest.fn() };

    const { getByTestId, getByText } = render(
      <NavigationContext.Provider value={navContext}>
        <DrillEditorPage route={{}} customDrills={[]} saveDrill={saveDrill} navigation={navigation} />
      </NavigationContext.Provider>,
    );

    // Testing title, goals and steps which are required

    fireEvent.press(getByTestId(`input-goals-${FrisbeeGoals.JUNIOR}`));
    fireEvent.changeText(getByTestId('input-title'), 'My Title');
    fireEvent.press(getByTestId('removeStep'));
    fireEvent.press(getByTestId('submitButton'));

    // Does not submit because no step
    expect(saveDrill).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();

    fireEvent.press(getByTestId('addStep'));
    fireEvent.press(getByTestId(`input-goals-${FrisbeeGoals.JUNIOR}`)); // Toggle off
    fireEvent.press(getByTestId('submitButton'));

    // Does not submit because no goal
    expect(saveDrill).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();

    fireEvent.changeText(getByTestId('input-title'), '');
    fireEvent.press(getByTestId(`input-goals-${FrisbeeGoals.JUNIOR}`)); // Toggle on
    fireEvent.press(getByTestId('submitButton'));

    // Does not submit because no title
    expect(saveDrill).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();

    fireEvent.changeText(getByTestId('input-title'), 'My Title');

    fireEvent.press(getByTestId('submitButton'));

    const expectedDrill = {
      id: expect.any(String),
      type: DrillTypes.FRISBEE,
      custom: true,
      visibleInList: true,
      author: '',
      title: 'My Title',
      image: undefined,
      description: undefined,
      minimalPlayersNumber: 2,
      inGame: undefined,
      equipment: undefined,
      durationInMinutes: undefined,
      intensity: undefined,
      goals: [FrisbeeGoals.JUNIOR],
      level: undefined,
      steps: [
        {
          id: 0,
          title: '',
          animation: undefined,
          vimeoId: undefined,
          youtube: undefined,
          instruction: undefined,
        },
      ],
    };
    await waitFor(() => {
      expect(saveDrill).toHaveBeenCalledWith(expectedDrill);
    });
    expect(navigate).toHaveBeenCalledWith('DrillPage', { id: createdDrill.id });
  });
});
