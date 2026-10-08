import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Category, ColorMode } from "@/lib/elements";
import { ELEMENTS } from "@/lib/elements";

export type View = "table" | "quiz";

type TableState = {
  selectedZ: number | null;
  query: string;
  colorMode: ColorMode;
  temperatureK: number;
  categoryFilter: Category | null;
  view: View;
  sheetOpen: boolean;
  favorites: number[];
  quizBest: number;
  setSelectedZ: (z: number | null) => void;
  setSheetOpen: (open: boolean) => void;
  setQuery: (q: string) => void;
  setColorMode: (m: ColorMode) => void;
  setTemperatureK: (k: number) => void;
  setCategoryFilter: (c: Category | null) => void;
  setView: (v: View) => void;
  toggleFavorite: (z: number) => void;
  setQuizBest: (n: number) => void;
  surprise: () => void;
};

export const useTable = create<TableState>()(
  persist(
    (set, get) => ({
      selectedZ: 26,
      query: "",
      colorMode: "category",
      temperatureK: 298,
      categoryFilter: null,
      view: "table",
      favorites: [],
      quizBest: 0,
      sheetOpen: false,
      setSelectedZ: (z) => set({ selectedZ: z, sheetOpen: z != null }),
      setSheetOpen: (open) => set({ sheetOpen: open }),
      setQuery: (q) => set({ query: q }),
      setColorMode: (m) => set({ colorMode: m }),
      setTemperatureK: (k) => set({ temperatureK: k }),
      setCategoryFilter: (c) => set({ categoryFilter: c }),
      setView: (v) => set({ view: v }),
      toggleFavorite: (z) => {
        const cur = get().favorites;
        set({
          favorites: cur.includes(z) ? cur.filter((n) => n !== z) : [...cur, z],
        });
      },
      setQuizBest: (n) => {
        if (n > get().quizBest) set({ quizBest: n });
      },
      surprise: () => {
        const pick = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
        if (pick) set({ selectedZ: pick.z, view: "table", query: "", sheetOpen: true });
      },
    }),
    {
      name: "elementa-v1",
      partialize: (s) => ({
        favorites: s.favorites,
        quizBest: s.quizBest,
      }),
    },
  ),
);
