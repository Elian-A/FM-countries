import { useGetAllCountries } from "@/hooks/countries";
import { filterStore } from "@/store/filter";
import { filterCountries } from "@/utils/filterCountries";
import CountryCard from "./CountryCard";
const Countries = () => {
  const { data: countries, isLoading, isError } = useGetAllCountries();
  const searchFilter = filterStore((store) => store.search);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  const filteredCountries =
    searchFilter !== "" ? filterCountries(searchFilter, countries) : countries;

  return (
    <div>
      {filteredCountries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default Countries;
