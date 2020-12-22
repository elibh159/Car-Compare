import React from 'react';
import { MyContainer } from './styles';

const Index = ({ children, additionalStyle, ...props }) => (
  <MyContainer additionalStyle={additionalStyle} {...props}>
    {children}
  </MyContainer>
);
export default Index;