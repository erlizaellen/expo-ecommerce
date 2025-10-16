import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useCart } from "@/store/cartStore";
import { FlatList } from "react-native";

const CartScreen = () => {
  const items = useCart((state: any) => state.items);

  const emptyCart = useCart((state: any) => state.emptyCart);

  return (
    <FlatList
      contentContainerClassName="gap-2 p-2"
      data={items}
      renderItem={({ item }) => (
        <HStack className="bg-white p-3" space="md">
          <Image
            source={item.product.image}
            alt={`${item.product.title} image`}
          />

          <VStack space="sm">
            <Text bold>
              {item.quantity > 1 ? `${item.quantity}x ` : undefined}
              {item.product.title.length > 38
                ? item.product.title.slice(0, 38) + "..."
                : item.product.title}
            </Text>

            <Text bold>
              $
              {item.quantity > 1
                ? item.product.price * item.quantity
                : item.product.price}{" "}
              USD
            </Text>
          </VStack>

          <Text className="ml-auto">{item.product.quantity}</Text>
        </HStack>
      )}
      ListFooterComponent={() => {
        if (items.length > 0) {
          return (
            <Button className="bg-blue-500" onPress={() => emptyCart()}>
              <ButtonText>Checkout</ButtonText>
            </Button>
          );
        }
      }}
    />
  );
};

export default CartScreen;
