import create from "zustand";

export const useNavbarDrawerStore = create((set) => ({
  isNavbarDrawerOpen: false,
  toggleNavbarDrawerOpen: () => set((state) => ({ isNavbarDrawerOpen: !state.isNavbarDrawerOpen })),
}));
