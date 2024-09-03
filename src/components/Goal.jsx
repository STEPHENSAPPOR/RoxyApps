const Goal = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold pt-4">
          About Us
        </h2>
      </div>
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First Grid Item */}
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg text-center bg-gradient-to-r from-purple-500 to-orange-400 animate-pulse">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">
              To be a leading player in delivering world class software to meet the ever increasing IT dependent economy Africa is growing to become.
            </p>
          </div>
          {/* Second Grid Item */}
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg text-center bg-gradient-to-r from-purple-500 to-orange-400 animate-pulse">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">
              To migrate small and medium scale businesses in Ghana to digitised platforms with working software which enhances their business operation and makes them relevant and competitive in their respective markets locally and globally.
            </p>
          </div>
          {/* Third Grid Item */}
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg text-center bg-gradient-to-r from-purple-500 to-orange-400 animate-pulse">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ingenuity</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">
              Room for innovation and creativity and deliver value to clients.
            </p>
          </div>
          {/* Fourth Grid Item */}
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg text-center bg-gradient-to-r from-purple-500 to-orange-400 animate-pulse">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Excellence</h3>
            <p className="text-sm sm:text-base md:text-lg text-white">
              Quality software developed with novel technology and devoid of errors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;
