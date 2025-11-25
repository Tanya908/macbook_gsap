import { create } from "zustand";

type MacbookState = {
    color: string;
    scale: number;
    setColor: (color: string) => void;
    setScale: (scale: number) => void;
    reset: () => void;
};

const useMacbookStore = create<MacbookState>((set) => ({
    color: "#2e2c2e",
    scale: 0.08,

    setColor: (color) => set({ color }),
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: "#2e2c2e", scale: 0.08 }),
}));

export default useMacbookStore;
