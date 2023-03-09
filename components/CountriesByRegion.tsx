import { Country, useGetCountriesByRegion } from "@/hooks/countries";
import { filterStore } from "@/store/filter";
import { filterCountries } from "@/utils/filterCountries";
import { FC } from "react";
import CountryCard from "./CountryCard";

const CountriesByRegion: FC<{
  region: string;
  serverFetchedCountries: Country[];
}> = ({ region, serverFetchedCountries }) => {
  const {
    data: countries,
    isError,
    isLoading,
  } = useGetCountriesByRegion(region, serverFetchedCountries);
  const searchFilter = filterStore((store) => store.search);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  const filteredCountries =
    searchFilter !== "" ? filterCountries(searchFilter, countries) : countries;

  return (
    <div className="countriesGrid">
      {filteredCountries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountriesByRegion;
