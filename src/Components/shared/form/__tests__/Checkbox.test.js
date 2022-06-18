import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TouchableOpacity } from 'react-native';

import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  const values = ['red', 'blue'];
  const labels = ['I prefer red', 'I prefer blue'];

  it('renders correctly', () => {
    const { toJSON } = render(
      <Formik initialValues={{ title: ['My title'] }}>
        <Checkbox fieldName="title" label="Title" labels={labels} values={values} />
      </Formik>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when there is an error', async () => {
    const { toJSON, getByTestId, getByText } = render(
      <Formik
        initialValues={{ title: ['blue'] }}
        validationSchema={Yup.object({ title: Yup.array(Yup.string().oneOf(['blue'], 'Invalid title')) })}
      >
        {({ handleSubmit }) => (
          <>
            <Checkbox fieldName="title" label="Title" labels={labels} values={values} />
            <TouchableOpacity onPress={handleSubmit} testID="submit" />
          </>
        )}
      </Formik>,
    );

    fireEvent.press(getByText('I prefer red'));

    await waitFor(() => {
      fireEvent.press(getByTestId('submit'));
    });

    expect(getByText('Invalid title')).not.toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });
});
