import React from 'react';
import { create } from 'react-test-renderer';
import { connect, Provider } from 'react-redux';
import { render, fireEven } from '@testing-library/react-native';

import store from '../Store/testStore';
import Drill from './animation/Drill';

import ConnectedPlaybookPage, { PlaybookPage } from './PlaybookPage';

describe('<PlaybookPage />', () => {
  const play = {
    uuid: undefined,
    animation: new Drill(),
    title: 'title',
  };

  it('renders correctly when empty', () => {
    const tree = create(
      <Provider store={store}>
        <ConnectedPlaybookPage />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with plays', () => {
    const MockedConnectedPlaybookPage = connect(() => ({ customPlays: [play] }))(PlaybookPage);

    const tree = create(
      <Provider store={store}>
        <MockedConnectedPlaybookPage />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links to drill page', async () => {
    const navigation = { navigate: jest.fn() };

    const MockedConnectedPlaybookPage = connect(() => ({ customPlays: [play] }))(PlaybookPage);
    const { getByText } = render(
      <Provider store={store}>
        <MockedConnectedPlaybookPage navigation={navigation} />
      </Provider>,
    );
    await fireEvent.press(getByText(play.title));

    expect(navigation.navigate).toBeCalledWith('PlayEditorPage', { currentPlay: play });
  });
});
