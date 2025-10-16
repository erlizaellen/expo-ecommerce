import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],

  addItem: (product: any) => {
    set((state: any) => {
      const isAddedBefore = state.items.find(
        (item: any) => item.product.id === product.id
      );

      if (isAddedBefore) {
        const index = state.items.findIndex(
          (item: any) => item.product.id === isAddedBefore.product.id
        );

        state.items[index] = {
          product: isAddedBefore.product,
          quantity: isAddedBefore.quantity + 1,
        };

        return {
          items: [...state.items],
        };
      } else {
        return { items: [...state.items, { product, quantity: 1 }] };
      }
    });
  },

  emptyCart: () => set({ items: [] }),
}));
