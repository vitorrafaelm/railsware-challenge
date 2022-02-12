import styled from "styled-components";
import User from "../../../public/assets/Contacts.svg";

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

export const IconContainer = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 19rem;
  margin-top: 0.7rem;
`;

export const UserIcon = styled(User)``;

export const InputText = styled.input`
  width: 344px;
  height: 50px;

  background: #ffffff;
  border: 1px solid #c3c3c3;
  border-radius: 5px;

  outline: 0;
  text-indent: 2.5rem;

  :focus {
    border: 1px solid #1a4f8b;
  }

  & ${UserIcon}:focus {
    color: #1a4f8b;
  }

  :focus::-webkit-input-placeholder {
    color: #1a4f8b;
  }
`;
