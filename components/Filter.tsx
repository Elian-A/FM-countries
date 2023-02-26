import { filterStore } from "@/store/filter";
import { ChangeEventHandler } from "react";
import { useStore } from "zustand";

const Filter = () => {
  const { setRegion, setSearch } = useStore(filterStore);
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
  const handleRegion: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setRegion(e.target.value);
  };
  return (
    <form className="">
      <input
        type="text"
        placeholder="Search for a country"
        onChange={handleSearch}
      />
      <select name="region" id="region" onChange={handleRegion}>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </form>
  );
};

export default Filter;
