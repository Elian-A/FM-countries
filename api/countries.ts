import axios from "axios";

const countries = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getAllCountries = async () => await countries.get("/all");

export const getCountriesByRegion = async (region: string) =>
  await countries.get(`/region/${region}`);

export const getCountry = async (name: string) =>
  await countries.get(`/name/${name}`);
