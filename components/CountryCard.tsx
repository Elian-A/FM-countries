import { Country } from "@/hooks/countries";
import Image from "next/image";
import React, { FC } from "react";

const CountryCard: FC<{ country: Country }> = ({ country }) => {
  const { name, flags, population, capital: capitals, region } = country;
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
};

export default CountryCard;
