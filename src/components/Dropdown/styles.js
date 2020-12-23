import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  flex: 1;
  position:relative;
   span { 
    font-size: 17px;
    font-weight:bold;
    white-space: nowrap;
    margin-bottom: 10px;
    margin-top:15px;
  }

   select {
    height: 40px;
    background: transparent;
    color: ${Colors.black};
    border: 1px solid ${Colors.blue};
    font-size: 14px;
    position: relative;
  }
 
  ${(props) => props.additioanlStyle}
}
`;
