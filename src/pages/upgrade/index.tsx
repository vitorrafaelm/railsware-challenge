import Image from "next/image";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import {
  PageContainer,
  Content,
  Text,
  FormContainer,
  ButtonContainer,
  AlternativeText,
  FormGroupContainer,
  BoxHelp,
  FormGroup,
} from "./styles";

export default function Upgrade(): JSX.Element {
  return (
    <PageContainer>
      <Content>
        <Text>Get Pro Account!</Text>

        <Image src="/assets/upgrade.svg" width={212} height={212} />

        <FormContainer>
          <Input
            placeholder="Card Number"
            name="card_number"
            width={344}
            height={50}
            textIdent={10}
          />

          <FormGroupContainer>
            <FormGroup>
              <Input
                placeholder="MM/YY"
                name="expiration_date"
                width={165}
                height={50}
                textIdent={10}
              />
              <Input
                placeholder="CVV"
                name="secutiry_code"
                width={165}
                height={50}
                textIdent={10}
              />
            </FormGroup>

            <BoxHelp>
              <AlternativeText>What's this?</AlternativeText>
            </BoxHelp>
          </FormGroupContainer>

          <Input
            placeholder="ZIP/Postal Code"
            name="CEP"
            width={344}
            height={50}
            textIdent={10}
          />

          <ButtonContainer>
            <Button
              width={344}
              height={50}
              borderRadius={5}
              backgroundColor="#BF1541"
              type="button"
              title="UPGRADE"
            />
          </ButtonContainer>
        </FormContainer>
      </Content>
    </PageContainer>
  );
}
