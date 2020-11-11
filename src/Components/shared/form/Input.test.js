import React from 'react';
import renderer from 'react-test-renderer';
import { Formik } from 'formik';

import Input from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Formik initialValues={{ title: 'Muy title' }}>
          <Input fieldName="title" label="Title" />
        </Formik>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
