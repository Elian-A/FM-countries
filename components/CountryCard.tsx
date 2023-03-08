import { Country } from "@/hooks/countries";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const CountryCard: FC<{ country: Country }> = ({ country }) => {
  const { name, flags, population, capital: capitals, region } = country;
  const alt = flags.png && `The ${name.common} flag`;

  return (
    <div className="shadow-lg rounded-lg overflow-auto max-w-[300px]">
      <Link href={`/${name.common}`}>
        <div className="relative h-32">
          <Image src={flags.png} alt={alt} fill />
        </div>
      </Link>
      <div className="bg-theme-element px-5 pt-6 pb-11 grid gap-5">
        <h3 className="text-xl font-bold">{name.common}</h3>
        <ul className="grid gap-1">
          <li>
            <p>
              <span className="font-semibold">Population: </span>
              {population.toLocaleString()}
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Region: </span>
              {region}
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Capital: </span>
              {capitals ? capitals.join(",") : "Not found"}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
