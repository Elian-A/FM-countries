import { getCountry } from "@/api/countries";
import Layout from "@/components/Layout";
import { Country, useGetCountry } from "@/hooks/countries";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import countriesNames from "../countriesNames.json";
import Image from "next/image";
import Link from "next/link";
import CountryInfo from "@/components/CountryInfo";
import Arrow from "@/components/Svg/Arrow";

const CountryPage: NextPage<{ serverSideFetchedCountry: Country }> = ({
  serverSideFetchedCountry,
}) => {
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
      <div className="px-6 flex flex-col gap-16 py-10 min-h-main">
        <div className="px-5 py-2 bg-theme-element shadow-lg w-fit">
          <Link href="/" className="flex items-center gap-2">
            <Arrow /> Back
          </Link>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative w-full max-w-[450px] mx-auto h-56 lg:max-w-[600px] lg:h-[400px]">
            <Image src={flag.png} alt={alt} fill priority />
          </div>
          <CountryInfo country={country} />
        </div>
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
