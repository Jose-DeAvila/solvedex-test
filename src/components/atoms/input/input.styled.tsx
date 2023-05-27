import styled from 'styled-components';

export const MainInput = styled.input`
  background-color: ${props => props.theme.palette.secondColor};
  color: ${props => props.theme.palette.textColor};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.25rem 1.875rem;
  border: none;
  outline: none;
  font-weight: 200;
  width: 100%;
`;