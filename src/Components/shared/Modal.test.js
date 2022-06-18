import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import Modal from './Modal';

beforeEach(() => jest.useFakeTimers()); // for Modal behaviour

describe('<Modal />', () => {
  it('renders correctly', () => {
    const onClose = jest.fn();
    const { toJSON } = render(
      <Modal visible title="My Title" onClose={onClose}>
        <Text>Hello</Text>
      </Modal>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
