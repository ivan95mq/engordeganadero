
import { create } from 'zustand';

interface UserState {
    userId: number | null;
    setUserId: (id: number) => void;
    clearUserId: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    userId: null,
    setUserId: (id: number) => set({ userId: id }),
    clearUserId: () => set({ userId: null }),
}));
