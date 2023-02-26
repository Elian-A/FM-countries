import Filter from "@/components/Filter";
import Layout from "@/components/Layout";
import { useGetAllCountries } from "@/hooks/countries";
import { NextPage } from "next";
import Image from "next/image";
const Home: NextPage = () => {
  const { data: countries, isLoading, isError } = useGetAllCountries();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  return (
    <Layout title="What in the world | Home">
      <Filter />
      <div>
        {countries.map((country) => {
          const {
            name,
            flags,
            population,
            capital: capitals,
            region,
          } = country;
          const alt = flags.png && `The ${name.common} flag`;

          return (
            <div key={name.common}>
              <div className="relative h-32">
                <Image src={flags.png} alt={alt} fill />
              </div>
              <div>
                <h3>{name.common}</h3>
                <ul>
                  <li>
                    <p>
                      <b>Population: </b>
                      {population}
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>capital: </b>
                      {capitals ? capitals.join(",") : "Not found"}
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>region: </b>
                      {region}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
export default Home;
