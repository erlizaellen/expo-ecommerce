import { Icon } from "@/components/ui/icon";
import { Tabs } from "expo-router";
import { Home, ShoppingCart, User } from "lucide-react-native";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => <Icon as={Home} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: () => <Icon as={ShoppingCart} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon: () => <Icon as={User} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
