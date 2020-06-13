import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../Store/testStore';

import ConnectedDictionaryPage, { DictionaryPage } from './DictionaryPage';

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
