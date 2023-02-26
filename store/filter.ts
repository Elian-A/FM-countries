import { create } from "zustand";

interface CountriesFilter {
  search: string;
  region: string;
  setSearch: (searchFilter: string) => void;
  setRegion: (regionFilter: string) => void;
}

export const filterStore = create<CountriesFilter>((set) => ({
  search: "",
  region: "",
  setRegion: (regionFilter) =>
    set((store) => ({
      region: regionFilter,
    })),
  setSearch: (searchFilter) =>
    set((store) => ({
      search: searchFilter,
    })),
}));
