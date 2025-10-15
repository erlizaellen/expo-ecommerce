import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useState } from "react";
import { Pressable } from "react-native";

interface ISignUp {
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
}

const SignUp: React.FC<ISignUp> = ({ setCurrentComponent }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  return (
    <FormControl className="p-4 border rounded-lg border-outline-300">
      <VStack space="xl">
        <Heading className="text-typography-900 leading-2">Sign Up</Heading>
        <VStack space="xs">
          <Text className="text-typography-500 leading-1">Email</Text>
          <Input>
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text className="text-typography-500 leading-1">Password</Text>
          <Input className="text-center">
            <InputField type={showPassword ? "text" : "password"} />
            <InputSlot className="pr-3" onPress={handleState}>
              {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
              <InputIcon
                as={showPassword ? EyeIcon : EyeOffIcon}
                className="text-blue-500"
              />
            </InputSlot>
          </Input>

          <Pressable
            className="mt-2"
            onPress={() => setCurrentComponent("SignIn")}
          >
            <Text className="text-blue-500">Sign In</Text>
          </Pressable>
        </VStack>

        <Button
          className="bg-blue-500"
          onPress={() => setCurrentComponent("SignIn")}
        >
          <ButtonText className="text-typography-0 text-center flex-1">
            Sign Up
          </ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
};

export default SignUp;
