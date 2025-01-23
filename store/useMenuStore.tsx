import { create } from 'zustand';

// 状態の型を定義
interface MenuState {
  isOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  openMobileMenu: () => set((state) => ({ isOpen: !state.isOpen })), // state の型が明示的に指定されます
  closeMobileMenu: () => set({ isOpen: false }),
}));