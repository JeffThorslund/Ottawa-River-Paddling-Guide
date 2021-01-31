import React from 'react';
import { Field } from 'formik';

// A min/max input component.
export const Range = ({ name }) => (
  <>
    <label htmlFor="levelRange">River Name</label>
    <Field id="range.0" name={`${name}.0`} placeholder="0" />
    <Field id="range.1" name={`${name}.1`} placeholder="1" />
  </>
);

export const Dragger = () => null;