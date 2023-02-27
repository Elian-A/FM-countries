import { useGetCountriesByRegion } from "@/hooks/countries";
import { FC } from "react";
import CountryCard from "./CountryCard";

const CountriesByRegion: FC<{ region: string }> = ({ region }) => {
  const {
    data: countries,
    isError,
    isLoading,
  } = useGetCountriesByRegion(region);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  return (
    <div>
      {countries?.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountriesByRegion;
