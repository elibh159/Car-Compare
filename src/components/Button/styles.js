import styled, { css } from "styled-components";
import { Colors } from "../../constants/colors";


export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 11px 15px;
  margin: 10px 25px;
  width: 200px;
  background: ${Colors.blue};
  color: ${Colors.white};
  ${({ additionalStyle }) => additionalStyle};
  ${(props) => {
    var res = "";
    if (props.hidden && css) res += `dispay:none;`;

    if (props.danger && css) res += `background:${Colors.red}`;
    else if (props.secondary && css) res += `background:${Colors.grey}`;
    else if (props.success && css) res += `background:${Colors.green}`;
    return res;
  }}
`;
