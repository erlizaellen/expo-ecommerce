import {
  Blinds,
  ChevronRight,
  HeadsetIcon,
  MessageCircleQuestionIcon,
  Settings,
  Tablets,
  User,
} from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, ScrollView } from "react-native";
import LogoutAlertDialog from "./LogoutAlertDialog";
import { Avatar, AvatarFallbackText, AvatarImage } from "./ui/avatar";
import { Button, ButtonText } from "./ui/button";
import { Divider } from "./ui/divider";
import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { Icon } from "./ui/icon";
import { Link, LinkText } from "./ui/link";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";

interface IProfile {
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
}

const Profile: React.FC<IProfile> = ({ setCurrentComponent }) => {
  const [openLogoutAlertDialog, setOpenLogoutAlertDialog] = useState(false);

  return (
    <ScrollView>
      <VStack className="px-5 py-4 flex-1" space="lg">
        <Heading className="mb-1">Profile</Heading>
        <HStack className="justify-between items-center">
          <HStack space="md">
            <Avatar className="bg-primary-500">
              <AvatarFallbackText>Erliza Ellen</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "",
                }}
              />
            </Avatar>
            <VStack>
              <Text>Erliza Ellen</Text>
              <Link>
                <LinkText
                  size="sm"
                  className="text-typography-500 no-underline hover:text-typography-500 active:text-typography-500"
                >
                  Show Profile
                </LinkText>
              </Link>
            </VStack>
          </HStack>
          <Pressable>
            <Icon as={ChevronRight} />
          </Pressable>
        </HStack>
        <Divider className="my-2" />
        <VStack space="lg">
          <HStack className="justify-between">
            <HStack space="md">
              <Icon as={User} />
              <Text>Personal Info</Text>
            </HStack>
            <Pressable>
              <Icon as={ChevronRight} />
            </Pressable>
          </HStack>
          <HStack className="justify-between">
            <HStack space="md">
              <Icon as={Settings} />
              <Text>Account</Text>
            </HStack>
            <Pressable>
              <Icon as={ChevronRight} />
            </Pressable>
          </HStack>
        </VStack>

        <Divider className="my-2" />
        <VStack space="lg">
          <Heading className="mb-1">Privacy Policy</Heading>
          <HStack className="justify-between">
            <HStack space="md">
              <Icon as={Blinds} />
              <Text>Terms and Conditions</Text>
            </HStack>
            <Pressable>
              <Icon as={ChevronRight} />
            </Pressable>
          </HStack>
          <HStack className="justify-between">
            <HStack space="md">
              <Icon as={Tablets} />
              <Text>Terms of Services</Text>
            </HStack>
            <Pressable>
              <Icon as={ChevronRight} />
            </Pressable>
          </HStack>
        </VStack>
        <Divider className="my-2" />
        <VStack space="lg">
          <Heading className="mb-1">Support</Heading>
          <HStack className="justify-between">
            <HStack space="md">
              <Icon as={MessageCircleQuestionIcon} />
              <Text>Get Help</Text>
            </HStack>
            <Pressable>
              <Icon as={ChevronRight} />
            </Pressable>
          </HStack>
          <HStack className="justify-between">
            <HStack space="md">
              <Icon as={HeadsetIcon} />
              <Text>Contact Support</Text>
            </HStack>
            <Pressable>
              <Icon as={ChevronRight} />
            </Pressable>
          </HStack>
        </VStack>
        <Divider className="my-2" />
        <Button
          action="secondary"
          variant="outline"
          onPress={() => {
            setOpenLogoutAlertDialog(true);
          }}
        >
          <ButtonText>Logout</ButtonText>
        </Button>
      </VStack>

      <LogoutAlertDialog
        setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
        openLogoutAlertDialog={openLogoutAlertDialog}
        setCurrentComponent={setCurrentComponent}
      />
    </ScrollView>
  );
};

export default Profile;
