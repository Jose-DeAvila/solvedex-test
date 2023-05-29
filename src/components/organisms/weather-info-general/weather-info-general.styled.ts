import styled, { keyframes } from "styled-components";

export const WeatherInfoGeneralStyled = styled.ul`
  background: ${props => props.theme.palette.thirdColor};
  padding: 5rem 1.875rem 2.5rem 1.875rem;
  border-radius: ${props => props.theme.borderRadius};
  width: 100%;
  position: relative;
`;

const moveUpAndDown = keyframes`
  to {
    transform: translateY(-.5rem);
  }
`;

export const ImageStyled = styled.img`
  position: absolute;
  top: -30%;
  right: 0;
  width: 12.5rem;
  max-width: 18rem;
  animation: ${moveUpAndDown} 1s ease-in-out infinite alternate;
`;
