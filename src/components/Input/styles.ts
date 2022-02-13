import styled from "styled-components";

interface InputProps {
  width: number;
  height: number;
  textIdent: number;
}

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  :focus {
    border: 1px solid #1a4f8b;
  }

  ::selection {
    border: 1px solid #1a4f8b;
  }
`;

export const InputText = styled.input<InputProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  background: #ffffff;
  border: 1px solid #c3c3c3;
  border-radius: 5px;

  outline: 0;
  text-indent: ${({ textIdent }) => textIdent}px;

  :focus {
    border: 1px solid #1a4f8b;
  }

  ::-webkit-input-placeholder {
    font-family: "Roboto";
    font-weight: 400;
  }

  :focus::-webkit-input-placeholder {
    color: #1a4f8b;
  }
`;
