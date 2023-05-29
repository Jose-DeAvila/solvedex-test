import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-size: calc(1rem + 2.5vw);
  font-weight: 200;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.theme.palette.textColor};
  cursor: pointer;
  border-bottom: 3px dotted ${props => props.theme.palette.textColor};
  padding: 0;
`