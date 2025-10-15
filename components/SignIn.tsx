import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";
import { useState } from "react";
import { Box } from "./ui/box";
import { Pressable } from "react-native";

interface ISignIn {
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
}

const SignIn: React.FC<ISignIn> = ({ setCurrentComponent }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  return (
    <FormControl className="p-4 border rounded-lg border-outline-300">
      <VStack space="xl">
        <Heading className="text-typography-900 leading-2">Sign In</Heading>
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

          <Box className="flex flex-row items-center justify-between mt-2">
            <Pressable onPress={() => setCurrentComponent("SignUp")}>
              <Text className="text-blue-500">Sign Up</Text>
            </Pressable>

            <Pressable onPress={() => setCurrentComponent("ForgotPassword")}>
              <Text className="text-blue-500">Forgot Password?</Text>
            </Pressable>
          </Box>
        </VStack>

        <Button
          className="bg-blue-500"
          onPress={() => setCurrentComponent("OTP")}
        >
          <ButtonText className="text-typography-0 text-center flex-1">
            Sign In
          </ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
};

export default SignIn;
