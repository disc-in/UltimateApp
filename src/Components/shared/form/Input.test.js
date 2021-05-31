import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TouchableOpacity } from 'react-native';

import Input from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Formik initialValues={{ title: 'My title' }}>
          <Input fieldName="title" label="Title" />
        </Formik>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when required', () => {
    const tree = renderer
      .create(
        <Formik initialValues={{ title: 'My title' }}>
          <Input fieldName="title" label="Title" required />
        </Formik>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when multiline', () => {
    const tree = renderer
      .create(
        <Formik initialValues={{ title: 'My title' }}>
          <Input fieldName="title" label="Title" multiline />
        </Formik>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when there is an error', async () => {
    const { toJSON, getByTestId, getByDisplayValue, getByText } = render(
      <Formik
        initialValues={{ title: 'My title' }}
        validationSchema={Yup.object({ title: Yup.string().required().min(1000, 'Invalid title') })}
      >
        {({ handleSubmit }) => (
          <>
            <Input fieldName="title" label="Title" />
            <TouchableOpacity onPress={handleSubmit} testID="submit" />
          </>
        )}
      </Formik>,
    );

    expect(getByDisplayValue('My title')).toBeDefined();

    await waitFor(() => {
      fireEvent.changeText(getByTestId('input'), 'new title');
    });

    expect(getByDisplayValue('new title')).toBeDefined();

    await waitFor(() => {
      fireEvent.press(getByTestId('submit'));
    });

    expect(getByText('Invalid title')).not.toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });
});
