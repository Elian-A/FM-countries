import { Country } from "@/hooks/countries";
import { FC } from "react";

const CountryInfo: FC<{ country: Country }> = ({ country }) => {
  const {
    name,
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
  return (
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
              <span>{capital ? capital.join(", ") : "No capital found"}</span>
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
  );
};

export default CountryInfo;
