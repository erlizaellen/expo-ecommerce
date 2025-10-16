import React from "react";
import { ScrollView } from "react-native";
import { Box } from "./ui/box";
import { Heading } from "./ui/heading";
import { HStack } from "./ui/hstack";
import { Image } from "./ui/image";
import { Text } from "./ui/text"; // Assumindo que você tenha um componente de Texto
import { VStack } from "./ui/vstack"; // Assumindo que você tenha um componente VStack

const products = [
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD IPS Ultra-Thin",
    price: 599,
    image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD",
    price: 109,
    // Usando uma imagem de placeholder, já que a original estava quebrada
    image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    // Usando uma imagem de placeholder
    image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
  },
  {
    id: 14,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    price: 999.99,
    // Usando uma imagem de placeholder
    image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Bracelet",
    price: 695,
    // Usando uma imagem de placeholder
    image: "https://i5.walmartimages.com/asr/5c1b9a89-8394-4168-98d1-c02687907b9e_1.337529cbe4a36b58d343ab5c72eb37c8.jpeg",
  },
];

const TrendingProducts = () => {
  return (
    <Box className="w-full mt-2">
      <Heading size="xl" className="mb-2 px-4">
        Produtos em Alta
      </Heading>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }} // Use contentContainerStyle para espaçamento interno
      >
        <HStack space="md">
          {products.map((product) => {
            return (
              // Usando um VStack para organizar o conteúdo verticalmente
              <VStack
                key={product.id} // Use o product.id, que é único, para a key
                className="border-outline-100 border rounded-md p-2"
                style={{ width: 200 }} // Dê uma largura fixa para cada card
              >
                <Image
                  source={{ uri: product.image }} // Passe a fonte (source) como um objeto com uma URI
                  alt={product.title} // Use o título do produto para melhor acessibilidade
                  className="w-full h-48 rounded-md"
                  resizeMode="cover"
                />
                <Text className="font-bold mt-2" numberOfLines={2}>
                  {product.title}
                </Text>
                <Text className="font-semibold color-primary-500">
                  ${product.price}
                </Text>
              </VStack>
            );
          })}
        </HStack>
      </ScrollView>
    </Box>
  );
};

export default TrendingProducts;