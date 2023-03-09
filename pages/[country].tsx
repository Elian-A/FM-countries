import { getCountry } from "@/api/countries";
import Layout from "@/components/Layout";
import { Country, useGetCountry } from "@/hooks/countries";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import countriesNames from "../countriesNames.json";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CountryInfo from "@/components/CountryInfo";

const CountryPage: NextPage<{ serverSideFetchedCountry: Country }> = ({
  serverSideFetchedCountry,
}) => {
  const { query } = useRouter();
  const {
    data: country,
    isError,
    isLoading,
  } = useGetCountry(
    serverSideFetchedCountry.name.common,
    serverSideFetchedCountry
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  const { name, flags: flag } = country;
  const alt = flag.alt ? flag.alt : `The ${name.common} flag`;

  return (
    <Layout title={`Where in the world? | ${name.common}`}>
      <div>
        <Link href="/">&lt;- Back</Link>
      </div>
      <div>
        <div className="relative h-32">
          <Image src={flag.png} alt={alt} fill priority />
        </div>
        <CountryInfo country={country} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: countriesNames.map((name) => ({ params: { country: name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getCountry(context.params?.country as string);
  const country = data.data[0];
  return { props: { serverSideFetchedCountry: country } };
};

export default CountryPage;
