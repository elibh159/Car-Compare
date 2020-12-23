import { Container } from "./styles";

const index = ({
  title,
  onChange,
  value,
  additioanlStyle,
  options,
  palceHolder,
  required,
  name }) => (
  <Container additioanlStyle={additioanlStyle}>
    <span>{title}</span>
    <select name={name} onChange={onChange} value={value} required={required}>
      <option value="" disabled >{palceHolder}</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  </Container>
);
export default index;