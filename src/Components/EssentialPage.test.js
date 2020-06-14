import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../Store/testStore';

import ConectedEssentialPage, { EssentialPage } from './EssentialPage';

beforeEach(() => jest.useFakeTimers()); // for Modal behaviour

describe('<EssentialPage />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConectedEssentialPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
