import { View, ViewProps } from "react-native";

export default function VStack({ children, ...rest }: ViewProps) {
  return <View className={`flex flex-col ${rest.className}`}>{children}</View>;
}
