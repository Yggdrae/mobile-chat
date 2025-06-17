import { TextProps } from "react-native";

export default function Text({ ...rest }: TextProps) {
  return <Text className={`${rest.className}`} {...rest} />;
}
