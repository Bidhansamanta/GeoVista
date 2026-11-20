import { NavLink } from "react-router-dom";

const Card = ({ item }) => {
  const { name, capital, population, region, flags } = item;

  return (
    <div className="bg-gray-300 rounded-2xl  shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-gray-400 w-full">
      {/* Flag */}
      <div className="w-full h-50 sm:h-52 overflow-hidden bg-gray-100">
        <img
          src={flags.svg}
          alt={name}
          className="w-full h-full object-cover p-4 shadow-lg"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6">
        {/* Country Name */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          {name}
        </h2>

        {/* Country Details */}
        <div className="space-y-3 text-sm sm:text-base text-gray-600">
          <p>
            <span className="font-semibold text-gray-800">Capital: </span>
            {capital}
          </p>

          <p>
            <span className="font-semibold text-gray-800">Population: </span>
            {population.toLocaleString()}
          </p>

          <p>
            <span className="font-semibold text-gray-800">Region: </span>
            {region}
          </p>
          <NavLink to={`/country/${name}`}>
            <button className="bg-blue-600 px-4 py-2 text-white rounded-lg">
              Read More <i className="fa-solid fa-arrow-right"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
