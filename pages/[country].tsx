import Layout from "@/components/Layout";
import { useGetCountry } from "@/hooks/countries";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Country: NextPage = () => {
  const { query } = useRouter();
  const {
    data: country,
    isError,
    isLoading,
  } = useGetCountry(query.country as string);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  const {
    name,
    flags: flag,
    population,
    region,
    subregion,
    borders,
    capital,
    currencies,
    languages,
    tld,
  } = country;
  const { common, nativeName } = name;
  const alt = flag.alt ? flag.alt : `The ${common} flag`;

  return (
    <Layout title={`Where in the world? | ${common}`}>
      <div>
        <Link href="/">&lt;- Back</Link>
      </div>
      <div>
        <div className="relative h-32">
          <Image src={flag.png} alt={alt} fill priority />
        </div>
        <div>
          <h2>{common}</h2>
          <div>
            <ul>
              <li>
                <p>
                  <b>Native Name: </b>
                  <span>
                    {nativeName
                      ? Object.values(nativeName)[0].common
                      : "No native name found"}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <b>Population: </b>
                  <span>{population} </span>
                </p>
              </li>
              <li>
                <p>
                  <b>Region: </b>
                  <span>{region} </span>
                </p>
              </li>
              <li>
                <p>
                  <b>Sub Region: </b>
                  <span>{subregion ? subregion : "No subregion found"} </span>
                </p>
              </li>
              <li>
                <p>
                  <b>Capital: </b>
                  <span>
                    {capital ? capital.join(", ") : "No capital found"}
                  </span>
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  <b>Top Level Domain: </b>
                  <span>{tld ? tld : "No top level domain found"} </span>
                </p>
              </li>
              <li>
                <p>
                  <b>Currencies: </b>
                  <span>
                    {currencies
                      ? Object.values(currencies)[0].name
                      : "No currencies found"}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <b>Languages: </b>
                  <span>
                    {languages
                      ? Object.values(languages).join(", ")
                      : "No language found"}
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <span>
              <b>Border Countries: </b>
              {borders
                ? borders.map((border) => <div key={border}>{border}</div>)
                : "No border countries found"}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Country;
