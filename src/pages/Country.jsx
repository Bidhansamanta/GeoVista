import { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchFilter from "../components/SearchFilter";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All Regions");

  async function getApi() {
    try {
      const res = await fetch("https://countries.dev/countries?limit=148");
      const data = await res.json();
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  if (!country) {
    return (
      <h2 className="text-center text-xl mt-10">
        <i class="fa-duotone fa-solid fa-spinner-third"></i>
      </h2>
    );
  }


  const searchCountry = (country) => {
    if(search){
      return country.name.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  const filterRegion = (country) => {
    if(filter === "All Regions") return true;
    return country.region === filter;
  }

  const filterCountry = country.filter((country) => searchCountry(country) && filterRegion(country));

  return (
    <>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-8">
        {filterCountry.map((item) => (
          <Card key={item.alpha2Code} item={item} />
        ))}
      </div>
    </>
  );
};

export default Country;
