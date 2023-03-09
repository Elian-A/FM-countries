import {
  getAllCountries,
  getCountriesByRegion,
  getCountry,
} from "@/api/countries";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const countryParser = z.object({
  name: z.object({
    common: z.string(),
    official: z.string(),
    nativeName: z
      .object({})
      .catchall(
        z.object({
          common: z.string(),
          official: z.string(),
        })
      )
      .optional(),
  }),
  flags: z.object({
    png: z.string().url(),
    svg: z.string().url(),
    alt: z.string().optional(),
  }),
  population: z.number(),
  region: z.string(),
  subregion: z.string().optional(),
  capital: z.string().array().optional(),
  tld: z.string().array().optional(),
  currencies: z
    .object({})
    .catchall(
      z.object({
        name: z.string(),
        symbol: z.string().optional(),
      })
    )
    .optional(),
  languages: z.object({}).catchall(z.string()).optional(),
  borders: z.string().array().optional(),
});

const countriesParser = z.array(countryParser);

export type Country = z.infer<typeof countryParser>;

export const useGetAllCountries = (countries: Country[]) =>
  useQuery(
    ["countries"],
    async () => {
      const res = await getAllCountries();
      const parsedRes = countriesParser.parse(res.data);
      return parsedRes;
    },
    { initialData: countries }
  );

export const useGetCountriesByRegion = (
  region: string,
  serverFetchedCoutntries: Country[]
) =>
  useQuery(
    ["countries", region],
    async () => {
      const res = await getCountriesByRegion(region);
      const parsedRes = countriesParser.parse(res.data);
      return parsedRes;
    },
    { initialData: serverFetchedCoutntries }
  );

export const useGetCountry = (name: string) =>
  useQuery(["country", name], async () => {
    const res = await getCountry(name);
    const parsedRes = countryParser.parse(res.data[0]);
    return parsedRes;
  });
