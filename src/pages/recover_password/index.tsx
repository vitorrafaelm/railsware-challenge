import Image from "next/image";
import Link from "next/link";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import {
  PageContainer,
  Content,
  Text,
  FormContainer,
  ButtonContainer,
  AlternativeText,
  LoginText,
  IconContainer,
  UserIcon,
} from "./styles";

export default function RecoverPassword(): JSX.Element {
  return (
    <PageContainer>
      <Content>
        <Image src="/assets/forgotPassword.svg" width={212} height={212} />

        <Text>Forgot Password</Text>

        <FormContainer>
          <Input
            placeholder="example@email.com"
            name="email"
            width={344}
            height={50}
            textIdent={40}
            Icon={
              <IconContainer>
                <UserIcon />
              </IconContainer>
            }
          />

          <ButtonContainer>
            <Button
              width={344}
              height={50}
              borderRadius={5}
              backgroundColor="#1A4F8B"
              type="button"
              title="RESET"
            />
          </ButtonContainer>

          <AlternativeText>
            Already have an account?
            <Link href="/login" passHref>
              <LoginText>Login here</LoginText>
            </Link>
          </AlternativeText>
        </FormContainer>
      </Content>
    </PageContainer>
  );
}
