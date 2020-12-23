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

  ${props => props.prominent && css`
    background: ${Colors.yellow};
    color: ${Colors.blue};
    width: 44%;
    font-weight: bold;
    float: right;
    margin: 2%;
    padding: 5px;
    display:grid;

    label{
      color:${Colors.black};
      padding-right:5px;
    }
    div{
      padding: 10px 10px;
    width:100%;
    text-align:left;
    flex-direction: unset;
    }
  `}
`;
export const Div = styled.div`
  padding:0px 20px;
  width:25%;
  display: flex;
  flex-direction: column;
  text-align:center;
`;

export const Label = styled.label`
  color:${Colors.grey2};
  font-weight: bold;
  font-size:13px;
`;

export const Span = styled.span`
`;

