import Image from 'next/image'; 


import { InputContainer, InputText, IconContainer, UserIcon } from './styles'; 

interface InputProps {
    placeholder: string; 
    name: string; 
    inputRef?: any; 
}

export function Input({ placeholder, name, inputRef }: InputProps): JSX.Element {
    return (
        <InputContainer>
        <IconContainer>
            <UserIcon />
        </IconContainer>
            
            <InputText placeholder={placeholder} name={name} ref={inputRef} />
        </InputContainer>
    )
}