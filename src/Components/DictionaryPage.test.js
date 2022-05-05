import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import store from '../Store/testStore';

import ConnectedDictionaryPage from './DictionaryPage';

describe('<DictionaryPage />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <ConnectedDictionaryPage />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
