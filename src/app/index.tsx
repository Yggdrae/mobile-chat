import { Button, Image, Text, View } from "react-native";
import Divider from "../components/Divider";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center bg-white pt-8">
      <Image
        source={require("../../assets/conversation.png")}
        alt=""
        className="w-[600] h-[600]"
      />
      <Text className="text-4xl">Bem-vindo!</Text>
      <Text className="text-4xl">Já possui uma conta?</Text>
      <Button title="Fazer Login" />
      <Divider className="my-4" />
      <Button title="Fazer Cadastro" />
    </View>
  );
}
