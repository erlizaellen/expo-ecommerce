import { create } from "zustand";

// 1. Você define a "planta" dos seus dados
type Product = {
  id: number | string;
  title: string;
  price: number;
  image: string;
  // ... e outras propriedades que um produto possa ter
};

type CartItem = {
  product: Product;
  quantity: number;
};

// 2. Você define a "planta" do seu armazém (o estado completo)
type CartState = {
  items: CartItem[];
  addItem: (product: Product) => void;
  emptyCart: () => void;
};


// 3. ✅ A SOLUÇÃO: Você passa essa "planta" para o create
// Ao fazer create<CartState>, o TypeScript automaticamente sabe que o 
// parâmetro 'state' dentro do 'set' será do tipo 'CartState'.
export const useCart = create<CartState>((set) => ({
  items: [],
  emptyCart: () => set({ items: [] }),

  addItem: (product) =>
    set((state) => { // Agora o TypeScript sabe que 'state' tem 'items'
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { items: updatedItems };
      }

      return { items: [...state.items, { product, quantity: 1 }] };
    }),
}));