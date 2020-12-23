import styled from 'styled-components';
import { Colors } from "../../constants/colors";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
  flex: 1;

`;

export const Label = styled.label`
  font-size: 17px;
  font-weight:bold;
  color:${Colors.black};
  display: flex;
  justify-content:flex-start;
  flex:1;
  cursor:pointer;

/* When the checkbox is checked, add a grey background */
  input:checked ~ span{
  background-color: ${Colors.grey2};
  }

/* Show the checkmark when checked */
  input:checked ~ span:after {
  display: block;
  }

/* Style the checkmark/indicator */
  span::after {
  left: 4px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid ${Colors.blue};
  margin:3px;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
`;

/* Hide the browser's default checkbox */
export const Input = styled.input`
  position:absolute;
  opacity:0;
  cursor:pointer;
  width:0px;
  height:0px;
`;

/* Create a custom checkbox */
export const CheckMark = styled.span`
  position: relative;
  top: 4px;
  left: 0;
  margin-right:10px;
  height: 15px;
  width: 15px;
  background-color: ${Colors.white};
  border:1px solid ${Colors.blue};
  padding:3px;
  /* Create the checkmark/indicator (hidden when not checked) */
  &::after{
    content: "";
    position: absolute;
    display: none;
  }
`;
