import styled from "styled-components";
import User from "../../../public/assets/Contacts.svg";

export const PageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #ffffff;
`;

export const Content = styled.section`
  display: flex;
  align-items: flex-start;
  align-items: center;

  flex-direction: column;

  height: 100vh;
  padding-top: 2rem;
`;

export const Text = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #000000;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;

  flex-direction: column;
  margin-top: 0.5rem;

  div + div {
    margin-top: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3rem;
`;

export const AlternativeText = styled.span`
  margin-top: 3rem;

  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  text-align: center;

  margin-top: 10rem;

  color: #b0b0b0;
`;

export const LoginText = styled.a`
    margin-left: 0.5rem;
    color: #1A4F8B; 
`; 

export const IconContainer = styled.div<{ margin?: string}>`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: ${({ margin }) => margin ? margin : '19rem'};
  margin-top: 0.7rem;
`;


export const UserIcon = styled(User)`
`;
