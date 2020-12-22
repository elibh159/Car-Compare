import React from "react";
import { Container } from "./styles";

const index = ({
  title,
  onChange,
  value,
  additioanlStyle,
  options,
  palceHolder,
  name }) => (
  <Container additioanlStyle={additioanlStyle}>
    <span>{title}</span>
    <select name={name} onChange={onChange} value={value}>
      <option value="" disabled selected>{palceHolder}</option>
      {options.map((o) => (
        <option value={o}>{o}</option>
      ))}
    </select>
  </Container>
);
export default index;