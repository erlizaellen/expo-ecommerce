import { OtpInput } from "react-native-otp-entry";
import { Box } from "./ui/box";
import { Button, ButtonText } from "./ui/button";
import { Heading } from "./ui/heading";
import { VStack } from "./ui/vstack";

interface IOTP {
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
}

const OTP: React.FC<IOTP> = ({ setCurrentComponent }) => {
  return (
    <Box className="border-outline-300 border rounded-lg">
      <Box className="p-8">
        <Heading>Enter the code we've sent your email address.</Heading>

        <VStack className="mt-4" space="lg">
          <OtpInput
            focusColor="blue"
            numberOfDigits={6}
            onTextChange={(text) => console.log(text)}
          />

          <Button
            className="bg-blue-500"
            onPress={() => setCurrentComponent("Profile")}
          >
            <ButtonText>Continue</ButtonText>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default OTP;
