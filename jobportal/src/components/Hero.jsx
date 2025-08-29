import React from "react";
const Hero = ({ title, subtitle, bgImage, details, showSearch = false }) => {
  return (
    <section
      className="relative bg-cover bg-center  py-40 text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        {title && <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">{title}</h1>}
        {subtitle && <p className="text-xl text-gray-200 mb-2">{subtitle}</p>}
        {details && <p className="text-md text-gray-200 mb-6">{details}</p>}

        {showSearch && (
          <div className="flex justify-center max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Job Title, Company, or Keyword"
              className="w-2/3 p-3 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-r-lg font-semibold transition shadow-md">
              Search Job
            </button>
          </div>
        )}
      </div>
    </section>
  );
};


export default Hero;
