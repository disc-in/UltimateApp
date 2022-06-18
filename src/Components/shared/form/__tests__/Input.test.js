import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TouchableOpacity } from 'react-native';

import Input from '../Input';

describe('Input', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <Formik initialValues={{ title: 'My title' }}>
        <Input fieldName="title" label="Title" />
      </Formik>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when required', () => {
    const { toJSON } = render(
      <Formik initialValues={{ title: 'My title' }}>
        <Input fieldName="title" label="Title" required />
      </Formik>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when multiline', () => {
    const { toJSON } = render(
      <Formik initialValues={{ title: 'My title' }}>
        <Input fieldName="title" label="Title" multiline />
      </Formik>,
    );
    expect(toJSON()).toMatchSnapshot();
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

    fireEvent.changeText(getByTestId('input-title'), 'new title');

    expect(getByDisplayValue('new title')).toBeDefined();

    await waitFor(() => {
      fireEvent.press(getByTestId('submit'));
    });

    expect(getByText('Invalid title')).not.toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });
});
