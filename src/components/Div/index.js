import { Div } from './styles';

const Index = ({ children, ...props }) => (
  <Div  {...props}>
    {children}
  </Div>
);

export default Index;
