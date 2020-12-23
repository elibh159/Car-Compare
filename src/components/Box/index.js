import { Box, Label, Span, Div } from "./styles";

const Index = ({ additionalStyle, name, price, model, color, prominent }) => (
  <Box additionalStyle={additionalStyle} prominent={prominent}>
    <Div>
      <Label>Name:</Label>
      <Span>{name}</Span>
    </Div>
    <Div>
      <Label>Model:</Label>
      <Span>{model}</Span>
    </Div>
    <Div>
      <Label>Color:</Label>
      <Span>{color}</Span>
    </Div>
    <Div>
      <Label>Price:</Label>
      <Span>{price}</Span>
    </Div>
  </Box>
);
export default Index;
