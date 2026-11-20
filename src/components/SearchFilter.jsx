const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-6">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <input
          type="text"
          value={search}
          placeholder="Search country name..."
          className="w-full sm:flex-1 px-5 py-3 rounded-xl border border-gray-300 bg-white shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-gray-400 text-gray-700 placeholder:text-gray-400"
          onChange={handleInputChange}
        />

        <div className="w-full sm:w-56 shrink-0">
          <select
            name="region"
            id="region"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-700 outline-none cursor-pointer transition-all duration-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="">All Regions</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
