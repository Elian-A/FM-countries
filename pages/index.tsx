import CountriesList from "@/components/CountriesList";
import Filter from "@/components/Filter";
import Layout from "@/components/Layout";
import { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <Layout title="What in the world | Home">
      <Filter />
      <CountriesList />
    </Layout>
  );
};
export default Home;
