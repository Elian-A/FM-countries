import { useGetAllCountries } from "@/hooks/countries";
import CountryCard from "./CountryCard";
const CountriesList = () => {
  const { data: countries, isLoading, isError } = useGetAllCountries();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  return (
    <div>
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
