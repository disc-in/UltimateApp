import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Store/testStore';

import ConnectedProgramPage from './ProgramsPage';

describe('<ProgramsPage />', () => {
  it('renders correctly when connected', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ConnectedProgramPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
