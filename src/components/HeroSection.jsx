import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <main className="w-full min-h-[calc(100vh-80px)] bg-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Explore the World, One Country at a Time.
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-black leading-relaxed max-w-xl mx-auto lg:mx-0">
            Discover the history, Culture, and beauty of every nation. Search,
            and filter through countries to find the details you need.
          </p>

          <button className="mt-7 sm:mt-8 inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 bg-blue-700 hover:bg-blue-800 text-white text-base sm:text-lg font-semibold rounded-xl shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-1">
            <NavLink to="/country">
              Start Exploring
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/main.jpg"
            alt="world beauty"
            className="w-full max-w-md lg:max-w-none h-64 sm:h-80 md:h-96 lg:h-[480px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl shadow-gray-200"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
