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

  gap: 2rem;
`;

export const FormGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`; 

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const BoxHelp = styled.section`
  display: flex;
  justify-content: flex-end;

  position: relative;

  cursor: pointer;
`;

export const AlternativeText = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  /* line-height: 19px; */

  position: absolute;
  padding: 0.3rem;

  color: #767676;
`;
