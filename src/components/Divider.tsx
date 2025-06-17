import { View, ViewProps } from "react-native";

export default function Divider({ ...rest }: ViewProps) {
  return <View className={`w-full h-0.5 bg-gray-200 ${rest.className}`} />;
}
