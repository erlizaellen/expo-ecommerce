import { Card } from "@/components/ui/card";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { products } from "@/utils/lib";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";
import { useState } from "react";
import { useCart } from "@/store/cartStore";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const addItem = useCart((state: any) => state.addItem);

  const productById = products.find((product) => String(product.id) === id);

  const toast = useToast();
  const [toastId, setToastId] = useState(0);

  const handleToast = (product: any) => {
    if (!toast.isActive(String(toastId))) {
      showNewToast(product);
    }
  };
  const showNewToast = (product: any) => {
    addItem(product);

    const newId = Math.random();
    setToastId(newId);
    toast.show({
      id: String(newId),
      placement: "top",
      duration: 4000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast
            nativeID={uniqueToastId}
            action="success"
            variant="solid"
            className="mt-8"
          >
            <ToastTitle>Item added to your cart!</ToastTitle>
            <ToastDescription>
              The item has been added to your cart!
            </ToastDescription>
          </Toast>
        );
      },
    });
  };

  if (!productById) {
    return (
      <>
        <Card className="flex-1 p-4">
          <Heading size="3xl" className="text-red-500">
            Product not found!
          </Heading>
        </Card>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: productById.title }} />

      <Card className="p-5 rounded-lg flex-1">
        <Image
          source={{
            uri: productById.image,
          }}
          className="mb-6 h-[240px] w-full rounded-md"
          alt="image"
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700 capitalize">
          {productById.category}
        </Text>
        <VStack className="mb-6">
          <Heading size="md" className="mb-4">
            {productById.title}
          </Heading>
          <Text size="sm">{productById.description}</Text>
        </VStack>
        <Box className="flex-col sm:flex-row">
          <Button
            className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1 bg-blue-500"
            onPress={() => handleToast(productById)}
          >
            <ButtonText size="sm">Add to cart</ButtonText>
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default ProductDetailsScreen;
