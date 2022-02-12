import Image from "next/image";
import Link from 'next/link'; 

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import {
  PageContainer,
  Content,
  Text,
  FormContainer,
  BoxForgotPassword,
  ForgotPasswordText,
  ButtonContainer,
  AlternativeText, 
  ButtonGroup,
} from "./styles";

export default function Login(): JSX.Element {
  return (
    <PageContainer>
      <Content>
        <Image src="/assets/Login-illustration.svg" width={212} height={212} />

        <Text>Welcome Back!</Text>

        <FormContainer>
          <Input placeholder="example@email.com" name="email" />
          <Input placeholder="example@email.com" name="email" />

          <BoxForgotPassword>
            <Link href="/recover_password" passHref>
              <ForgotPasswordText>Forgot Password</ForgotPasswordText>
            </Link>
            
          </BoxForgotPassword>

          <ButtonContainer>
            <Button width={344} height={50} borderRadius={5} backgroundColor="#1A4F8B" type="button" title="LOG IN" />

            <AlternativeText>Or connect with social</AlternativeText>

            <ButtonGroup>
                <Button width={165} height={40} borderRadius={5} backgroundColor="#385C8E" type="button" title="Facebook" />
                <Button width={165} height={40} borderRadius={5} backgroundColor="#F14436" type="button" title="Google" />
            </ButtonGroup>
          </ButtonContainer>
        </FormContainer>
      </Content>
    </PageContainer>
  );
}
