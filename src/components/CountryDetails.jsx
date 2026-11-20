import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function getCountry() {
      try {
        const res = await fetch("https://countries.dev/countries?limit=148");

        const data = await res.json();

        const selectedCountry = data.find((item) => item.name === id);

        setCountry(selectedCountry);
      } catch (error) {
        console.log(error);
      }
    }

    getCountry();
  }, [id]);

  if (!country) {
    return (
      <h2 className="text-center text-xl mt-10">
        <i className="fa-duotone fa-solid fa-spinner-third"></i>
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Country Flag */}
        <div>
          <img
            src={country.flags.svg}
            alt={country.name}
            className="w-full p-20 rounded-xl shadow-lg"
          />
        </div>

        {/* Country Information */}
        <div>
          <h1 className="text-3xl font-bold mb-6">{country.name}</h1>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Capital:</strong> {country.capital}
            </p>

            <p>
              <strong>Region:</strong> {country.region}
            </p>

            <p>
              <strong>Sub Region:</strong> {country.subregion}
            </p>

            <p>
              <strong>Population:</strong>{" "}
              {country.population?.toLocaleString()}
            </p>

            <p>
              <strong>Area:</strong> {country.area?.toLocaleString()} km²
            </p>

            <p>
              <strong>Native Name:</strong> {country.nativeName}
            </p>

            <p>
              <strong>Alpha 2 Code:</strong> {country.alpha2Code}
            </p>

            <p>
              <strong>Alpha 3 Code:</strong> {country.alpha3Code}
            </p>

            <p>
              <strong>Languages:</strong>{" "}
              {country.languages?.map((lang) => lang.name).join(", ")}
            </p>

            <p>
              <strong>Timezones:</strong> {country.timezones?.join(", ")}
            </p>

            <p>
              <strong>Currency:</strong>{" "}
              {country.currencies?.map((currency) => currency.name).join(", ")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <NavLink to="/country">
          <button className="bg-blue-300 shadow-md  px-4 py-2 text-black rounded-lg cursor-pointer "> 
            Go Back
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default CountryDetails;
