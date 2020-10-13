import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

import Modal from './Modal';

beforeEach(() => jest.useFakeTimers()); // for Modal behaviour

describe('<Modal />', () => {
  it('renders correctly', () => {
    const onClose = jest.fn();
    const tree = renderer
      .create(
        <Modal visible title="My Title" onClose={onClose}>
          <Text>Hello</Text>
        </Modal>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
