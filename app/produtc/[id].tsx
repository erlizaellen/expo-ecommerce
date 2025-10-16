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
import { useCart } from "@/store/cartStore";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const addItem = useCart((state) => state.addItem);
  const toast = useToast();

  const productById = products.find((product) => String(product.id) === id);

  // ✅ CRIAMOS UMA ÚNICA FUNÇÃO, MAIS SIMPLES E DIRETA
  const handleAddToCart = (product: any) => {
    // 1. Adiciona o item ao carrinho INCONDICIONALMENTE
    addItem(product);

    // 2. Mostra a notificação de sucesso
    toast.show({
      placement: "top",
      duration: 2000, // Duração mais curta é melhor para UX
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id;
        return (
          <Toast
            nativeID={uniqueToastId}
            action="success"
            variant="solid"
            className="mt-8"
          >
            <ToastTitle>Produto adicionado!</ToastTitle>
            <ToastDescription>O item foi adicionado ao seu carrinho.</ToastDescription>
          </Toast>
        );
      },
    });
  };

  if (!productById) {
    return (
      <Card className="flex-1 p-4">
        <Heading size="3xl" className="text-red-500">
          Produto não encontrado!
        </Heading>
      </Card>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: productById.title }} />

      <Card className="p-5 rounded-lg flex-1">
        <Image
          source={{ uri: productById.image }}
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
            // ✅ CHAMAMOS A NOVA FUNÇÃO SIMPLIFICADA AQUI
            onPress={() => handleAddToCart(productById)}
          >
            <ButtonText size="sm">Adicionar ao carrinho</ButtonText>
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default ProductDetailsScreen;