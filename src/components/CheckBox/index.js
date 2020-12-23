import React from 'react';
import { FormGroup, Label, Input, CheckMark } from './styles';

const index = ({ onChange, checked, title, name }) => (
  <FormGroup>
    <Label>
      <Input
        name={name}
        type="checkbox"
        onChange={(event) => {
          onChange(event.target.checked, event.target.name);
        }}
        checked={checked}
      />
      <CheckMark />
      {' '}
      {title}
    </Label>
  </FormGroup>
);
export default index;