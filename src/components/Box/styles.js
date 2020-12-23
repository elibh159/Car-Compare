import styled, { css } from "styled-components";
import { Colors } from "../../constants/colors";


export const Box = styled.div`
  display:flex;
  justify-content: space-around;
  border: 0;
  padding: 11px 15px;
  background: ${Colors.blue};
  color: ${Colors.white};
  margin:10px 50px ;
  ${({ additionalStyle }) => additionalStyle};

  ${props => props.prominent && css`
    background: ${Colors.yellow};
    color: ${Colors.blue};
    width:50%;
    display: flex;
    border: 0;
    padding: 11px 15px;
    margin: 10px 20px;
    width: 39%;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: space-between;
    font-weight: bold;
  `}
`;
export const Div = styled.div`
  padding:0px 20px;
  width:25%;
  display: flex;
  flex-direction: column;
  text-align:center;

  ${props => props.prominent && css`
  padding: 10px 10px;
  width: 38%;
  display: flex;
  flex-direction: unset;
  text-align: center;
  `}
`;

export const Label = styled.label`
  color:${Colors.grey2};
  font-weight: bold;
  font-size:13px;
`;

export const Span = styled.span`
`;

