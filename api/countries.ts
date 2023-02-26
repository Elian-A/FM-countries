import axios from "axios";

const countries = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getAllCountries = async () => await countries.get("/all");
