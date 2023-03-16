import { filterStore } from "@/store/filter";
import { ChangeEventHandler } from "react";
import Lupe from "./Svg/Lupe";

const Filter = () => {
  const { setRegion, setSearch } = filterStore((state) => ({
    setRegion: state.setRegion,
    setSearch: state.setSearch,
  }));
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleRegion: ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault();
    setRegion(e.target.value);
  };
  return (
    <form className="flex gap-10 flex-col sm:flex-row px-5 md:px-24 pt-6 pb-9">
      <div className="relative">
        <label htmlFor="search" className="absolute top-1/4 left-8">
          <Lupe />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search for a country..."
          onChange={handleSearch}
          className="bg-theme-element text-theme-text pl-20 py-4 shadow-md rounded-md text-small w-full md:w-[500px]"
        />
      </div>
      <select
        name="region"
        id="region"
        onChange={handleRegion}
        className="font-semibold rounded-md w-max bord px-5 py-3 sm:ml-auto shadow-md bg-theme-element"
      >
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
