import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <>
      <section className="w-full min-h-screen bg-gray-300 px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center leading-tight mb-10 sm:mb-14">
          Here are the Interesting Facts <br /> we're pround of
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {countryFacts.map((country) => {
            const { id, countryName, population, capital, interestingFact } =
              country;

            return (
              <div
                key={id}
                className="bg-gray-400 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="p-5 sm:p-6">
                  <p className="text-xl sm:text-2xl font-bold text-blue-700 mb-5 border-b border-gray-100 pb-3">
                    {countryName}
                  </p>

                  <div className="space-y-4">
                    <p className="text-sm sm:text-base text-gray-800 flex flex-col sm:flex-row sm:gap-2">
                      <span className="font-semibold text-gray-900 min-w-fit">
                        Capital:
                      </span>
                      {capital}
                    </p>

                    <p className="text-sm sm:text-base text-gray-800 flex flex-col sm:flex-row sm:gap-2">
                      <span className="font-semibold text-gray-900 min-w-fit">
                        Population:
                      </span>
                      {population.toLocaleString()}
                    </p>

                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                      <span className="font-semibold text-gray-900 block mb-2">
                        Interesting Facts:
                      </span>
                      {interestingFact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;