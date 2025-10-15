import ProductList from "@/components/ProductList";
import TrendingProducts from "@/components/TrendingProducts";
import { Box } from "@/components/ui/box";

const HomeScreen = () => {
  return (
    <Box className="pt-12 pb-2.5 px-4 md:px-0 bg-white flex-1 overflow-auto">
      <TrendingProducts />

      <ProductList />
    </Box>
  );
};

export default HomeScreen;
