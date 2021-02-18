import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../Store/testStore';

import PlaybookPage from './PlaybookPage';

describe('<PlaybookPage />', () => {
  it('renders correctly', () => {
    const tree = create(
      <Provider store={store}>
        <PlaybookPage />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
// TODO: Add test case with empty state
// TODO: Add test case with navigation to play editor
