import Countries from "@/components/Countries";
import CountriesByRegion from "@/components/CountriesByRegion";
import Filter from "@/components/Filter";
import Layout from "@/components/Layout";
import { filterStore } from "@/store/filter";
import { NextPage } from "next";
const Home: NextPage = () => {
  const region = filterStore((state) => state.region);
  return (
    <Layout title="What in the world | Home">
      <Filter />
      {region !== "" ? <CountriesByRegion region={region} /> : <Countries />}
    </Layout>
  );
};
export default Home;
