import React from 'react';
import { Button } from './styles';

const Index = ({ children, additionalStyle, ...props }) => (
  <Button additionalStyle={additionalStyle} {...props}>
    {children}
  </Button>
);
export default Index;