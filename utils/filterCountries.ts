import { Country } from "@/hooks/countries";

export const filterCountries = (filter: string, countries: Country[]) =>
  countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );
