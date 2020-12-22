import { Box, Label, Span, Div } from "./styles";

const Index = ({ additionalStyle, name, price, model, color }) => (
  <Box additionalStyle={additionalStyle}>
    <Div>
      <Label>Car Name:</Label>
      <Span>{name}</Span>
    </Div>
    <Div>
      <Label>Car Model:</Label>
      <Span>{model}</Span>
    </Div>
    <Div>
      <Label>Car Color:</Label>
      <Span>{color}</Span>
    </Div>
    <Div>
      <Label>Car Price:</Label>
      <Span>${price}</Span>
    </Div>
  </Box>
);
export default Index;
