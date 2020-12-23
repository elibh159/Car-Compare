import styled, { css } from "styled-components";
export const Div = styled.div`
  display:block;
  ${props => props.hidden && css`
  display:none;
  transition: all 2s;
`}
`;