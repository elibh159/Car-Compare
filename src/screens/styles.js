import styled, { css } from "styled-components";
import { Colors } from "../constants/colors";

export const Div = styled.div`
  display:block;
  transition: all 2s;
  
  ${props => props.hidden && css`
  display:none;
  opacity: 0;
  transition: all 2s;
`}
${props => props.danger && css`
  color:${Colors.red};
  font-weight: bold;
  border: ${Colors.red} 1px solid;
  text-align: center;
  font-size: 18px;
  opacity: 1;
  transition: opacity 2s;
`}
`;