import styled from "styled-components";
import { Colors } from "../../constants/colors";


export const MyContainer = styled.div`
  max-width: 900px;
  background: ${Colors.white};
  margin: 25px auto;
  padding: 30px;

  ${({ additionalStyle }) => additionalStyle};
`;