const Footer = () => {
  return (
    <>
      <footer className="bg-gray-400 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
                Geo<span className="text-blue-800">Vista</span>
              </h1>

              <p className="mt-2 text-sm sm:text-base text-gray-800 max-w-md">
                Explore the world, discover countries, and learn something new
                about every corner of our planet.
              </p>
            </div>

            <div className="flex items-center gap-5 text-xl">
              <a
                href="https://github.com/Bidhansamanta"
                className="text-gray-600 hover:text-black transition duration-300"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/feed/foryou/"
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="https://www.instagram.com/mr._bidhan_7998?bqrl=aW8yb3ByNzloeG4z"
                className="text-gray-600 hover:text-pink-600 transition duration-300"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.facebook.com/share/1CCfNGw4sV/"
                className="text-gray-600 hover:text-blue-600 transition duration-300"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
            <p className="text-xs sm:text-sm text-gray-800">
              &copy; {new Date().getFullYear()} GeoVista. All rights reserved.
            </p>

            <p className="text-xs sm:text-sm text-gray-800">
              Made with <i className="fa-solid fa-heart text-red-500"></i> for
              world explorers.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
