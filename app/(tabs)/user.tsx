import ForgotPassword from "@/components/ForgotPassword";
import OTP from "@/components/OTP";
import Profile from "@/components/Profile";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { Box } from "@/components/ui/box";
import { useState } from "react";

const UserScreen = () => {
  const [currentComponent, setCurrentComponent] = useState("Profile");

  return (
    <Box className="flex-1 pt-8 bg-white">
      {currentComponent === "SignIn" ? (
        <SignIn setCurrentComponent={setCurrentComponent} />
      ) : undefined}
      {currentComponent === "SignUp" ? (
        <SignUp setCurrentComponent={setCurrentComponent} />
      ) : undefined}
      {currentComponent === "ForgotPassword" ? (
        <ForgotPassword setCurrentComponent={setCurrentComponent} />
      ) : undefined}
      {currentComponent === "OTP" ? (
        <OTP setCurrentComponent={setCurrentComponent} />
      ) : undefined}
      {currentComponent === "Profile" ? (
        <Profile setCurrentComponent={setCurrentComponent} />
      ) : undefined}
    </Box>
  );
};

export default UserScreen;
