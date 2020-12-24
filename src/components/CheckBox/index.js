import React from 'react';
import { FormGroup, Label, Input, CheckMark } from './styles';

const index = ({ onChange, checked, title, name }) => (
  <FormGroup>
    <Label>
      <Input
        name={name}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <CheckMark />
      {' '}
      {title}
    </Label>
  </FormGroup>
);
export default index;