import { MainButton, Text } from "./styles";

interface ButtonProps {
  title: string;
  width: number;
  height: number;
  type?: "submit" | "button" | "reset" | undefined;
  backgroundColor: string;
  borderRadius: number;
}

export function Button({
  title,
  width,
  height,
  type,
  backgroundColor,
  borderRadius,
}: ButtonProps): JSX.Element {
  return (
    <MainButton
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      type={type}
    >
      <Text>{title}</Text>
    </MainButton>
  );
}
