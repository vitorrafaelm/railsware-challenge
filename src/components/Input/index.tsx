import { ReactNode } from "react";

import { InputContainer, InputText } from "./styles";

interface InputProps {
  placeholder: string;
  name: string;
  inputRef?: any;
  width: number;
  height: number;
  Icon?: ReactNode;
  textIdent: number;
}

export function Input({
  placeholder,
  name,
  inputRef,
  width,
  height,
  textIdent,
  Icon
}: InputProps): JSX.Element {
  return (
    <InputContainer>
      
        {Icon}

      <InputText
        width={width}
        height={height}
        placeholder={placeholder}
        name={name}
        ref={inputRef}
        textIdent={textIdent}
      />
    </InputContainer>
  );
}
