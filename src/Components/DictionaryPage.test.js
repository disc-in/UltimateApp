import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../Store/testStore';

import ConnectedDictionaryPage from './DictionaryPage';

beforeEach(() => jest.useFakeTimers()); // for Modal behaviour

describe('<DictionaryPage />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedDictionaryPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
