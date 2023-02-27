import { getAllCountries, getCountriesByRegion } from "@/api/countries";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const countryParser = z.object({
  name: z.object({
    common: z.string(),
    official: z.string(),
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
});

const countriesParser = z.array(countryParser);

export type Country = z.infer<typeof countryParser>;

export const useGetAllCountries = () =>
  useQuery(["countries"], async () => {
    const res = await getAllCountries();
    const parsedRes = countriesParser.parse(res.data);
    return parsedRes;
  });

export const useGetCountriesByRegion = (region: string) =>
  useQuery(["countries", region], async () => {
    const res = await getCountriesByRegion(region);
    const parsedRes = countriesParser.parse(res.data);
    return parsedRes;
  });
