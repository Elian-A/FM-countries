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
  const topItemList = [
    {
      title: "Native Name",
      value: nativeName
        ? Object.values(nativeName)[0].common
        : "No native name found",
    },
    {
      title: "Population",
      value: population.toLocaleString(),
    },
    {
      title: "Region",
      value: region,
    },
    {
      title: "Sub Region",
      value: subregion ? subregion : "No subregion found",
    },
    {
      title: "Capital",
      value: capital ? capital.join(", ") : "No capital found",
    },
  ];
  const bottomItemList = [
    {
      title: "Top Level Domain",
      value: tld ? tld : "No top level domain found",
    },
    {
      title: "Currencies",
      value: currencies
        ? Object.values(currencies)[0].name
        : "No currencies found",
    },
    {
      title: "Languages",
      value: languages
        ? Object.values(languages).join(", ")
        : "No language found",
    },
  ];
  return (
    <div className="grid gap-6">
      <h2 className="font-bold text-3xl">{common}</h2>
      <div className="grid gap-10 lg:grid-cols-2">
        <ul className="grid gap-2">
          {topItemList.map(({ title, value }) => (
            <li key={title} className="flex gap-2 text-lg">
              <span className="font-semibold">{title}:</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
        <ul className="flex gap-2 flex-col">
          {bottomItemList.map(({ title, value }) => (
            <li key={title} className="flex h-fit gap-2 text-lg">
              <span className="font-semibold">{title}:</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-4">
        <h3 className="text-xl font-semibold">Border Countries: </h3>
        <div className="flex flex-wrap gap-3">
          {borders
            ? borders.map((border) => (
                <div key={border} className="px-8 py-1 h-fit bg-theme-element">
                  {border}
                </div>
              ))
            : "No border countries found"}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
