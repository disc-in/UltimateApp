import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import store from '../../Store/testStore';

import ConectedEssentialPage from '../EssentialPage';

describe('<EssentialPage />', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <ConectedEssentialPage />
      </Provider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
