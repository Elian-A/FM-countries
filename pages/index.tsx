import Countries from "@/components/Countries";
import CountriesByRegion from "@/components/CountriesByRegion";
import Filter from "@/components/Filter";
import Layout from "@/components/Layout";
import { filterStore } from "@/store/filter";
import { getAllCountries } from "../api/countries";
import { NextPage } from "next";
import { Country } from "@/hooks/countries";
const Home: NextPage<{ countries: Country[] }> = ({ countries }) => {
  const region = filterStore((state) => state.region);
  return (
    <Layout title="What in the world | Home">
      <Filter />
      {region !== "" ? (
        <CountriesByRegion region={region} serverFetchedCountries={countries} />
      ) : (
        <Countries serverFetchedCountries={countries} />
      )}
    </Layout>
  );
};
export default Home;

export async function getStaticProps() {
  const data = await getAllCountries();
  const countries = data.data as Country[];
  const firstTwentyCountries = countries.filter((_, idx) => idx < 20);
  return { props: { countries: firstTwentyCountries } };
}
