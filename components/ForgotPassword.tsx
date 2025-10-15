import { Pressable } from "react-native";
import { Box } from "./ui/box";
import { FormControl } from "./ui/form-control";
import { Heading } from "./ui/heading";
import { Input, InputField, InputSlot } from "./ui/input";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";
import { Button, ButtonText } from "./ui/button";

interface IForgotPassword {
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
}

const ForgotPassword: React.FC<IForgotPassword> = ({ setCurrentComponent }) => {
  return (
    <FormControl className="p-4 border rounded-lg border-outline-300">
      <VStack space="xl">
        <Heading className="text-typography-900 leading-2">
          Forgot Password
        </Heading>
        <VStack space="xs">
          <Text className="text-typography-500 leading-1">Email</Text>
          <Input>
            <InputField type="text" />
          </Input>

          <Pressable onPress={() => setCurrentComponent("SignIn")}>
            <Text className="text-blue-500">Sign In</Text>
          </Pressable>
        </VStack>

        <Button
          className="bg-blue-500"
          onPress={() => setCurrentComponent("SignIn")}
        >
          <ButtonText className="text-typography-0 text-center flex-1">
            Send
          </ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
};

export default ForgotPassword;
