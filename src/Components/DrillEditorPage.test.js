import React from 'react';
import { create, act } from 'react-test-renderer';

import DrillEditorPage from './DrillEditorPage';

describe('<DrillEditorPage />', () => {
  it('renders correctly', async () => {
    const tree = create(<DrillEditorPage />).toJSON();
    await act(async () => expect(tree).toMatchSnapshot());
  });
});
