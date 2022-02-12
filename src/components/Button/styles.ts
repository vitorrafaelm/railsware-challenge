import styled from "styled-components";

interface ButtonProps {
  width: number;
  height: number;
  backgroundColor: string;
  borderRadius: number; 
}

export const MainButton = styled.button<ButtonProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  background: ${({ backgroundColor }) => backgroundColor};
  border-radius:  ${({ borderRadius }) => borderRadius}px;

  outline: 0;
  border: 0;

  cursor: pointer;
`;

export const Text = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -0.408px;
  text-transform: uppercase;

  color: #ffffff;
`;
