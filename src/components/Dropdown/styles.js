import styled from "styled-components";
import { Colors } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  flex: 1;
  position:relative;

   span {
    font-size: 11px;
    white-space: nowrap;
    margin-bottom: 10px;
  }

   select {
    height: 40px;
    background: transparent;
    color: ${Colors.white};
    border: 1px solid ${Colors.grey};
    font-size: 14px;
    position: relative;
  }

  ${(props) => props.additioanlStyle}
}
`;
