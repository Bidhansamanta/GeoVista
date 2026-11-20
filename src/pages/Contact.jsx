import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-gray-200 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Contact Us
            </h2>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Have a question or want to know more about the world? Feel free to
              contact us. We would love to hear from you.
            </p>

            <div className="hidden lg:flex mt-8 items-center gap-3 text-blue-700">
              <NavLink
                to="/"
                className="inline-flex items-center gap-3  hover:text-blue-900"
              >
                <i className="fa-solid fa-globe text-4xl"></i>

                <span className="text-lg font-semibold">
                  Explore the world with GeoVista
                </span>
              </NavLink>
            </div>
          </div>

          <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 p-5 sm:p-8 lg:p-10">
            <form className="flex flex-col gap-5">
              <input
                type="text"
                required
                placeholder="Enter your name"
                autoComplete="false"
                name="username"
                className="w-full px-4 sm:px-5 py-3.5 sm:py-4 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-sm sm:text-base text-gray-800 placeholder-gray-400"
              />

              <input
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="false"
                name="email"
                className="w-full px-4 sm:px-5 py-3.5 sm:py-4 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-sm sm:text-base text-gray-800 placeholder-gray-400"
              />

              <textarea
                name="message"
                rows="10"
                required
                autoComplete="false"
                placeholder="Enter your message"
                className="w-full px-4 sm:px-5 py-3.5 sm:py-4 border border-gray-200 rounded-xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 resize-y min-h-[160px]"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-3.5 sm:py-4 px-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-base sm:text-lg rounded-xl shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Send
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
