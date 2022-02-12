import styled from "styled-components";

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

export const BoxForgotPassword = styled.section`
  display: flex;
  justify-content: flex-end;

  padding-top: 0.5rem;
  cursor: pointer;
`;

export const ForgotPasswordText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #1a4f8b;
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

  color: #b0b0b0;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    margin-top: 2rem;
`; 
