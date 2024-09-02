import { ShieldCheckIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';

const Services = () => {
  return (
    <div className="relative mt-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold pt-4">
          SERVICES
        </h2>
      </div>

      {/* Main Section */}
      <div className="bg-gradient-to-r from-purple-500 to-orange-400 rounded-lg p-6 sm:p-10 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left Section: Text and Button */}
          <div className="max-w-md mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
              Our Services For Technology You Need
            </h3>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500">
              Load More
            </button>
          </div>

          {/* Right Section: Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Service 1 */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-lg flex-shrink-0">
                <ShieldCheckIcon className="w-8 h-8 text-black" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold">Cyber Security</h4>
                <p className="text-xs sm:text-sm md:text-base">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-lg flex-shrink-0">
                <ComputerDesktopIcon className="w-8 h-8 text-black" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold">IT Consultant</h4>
                <p className="text-xs sm:text-sm md:text-base">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-lg flex-shrink-0">
                <ShieldCheckIcon className="w-8 h-8 text-black" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold">Cyber Security</h4>
                <p className="text-xs sm:text-sm md:text-base">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-white rounded-lg flex-shrink-0">
                <ComputerDesktopIcon className="w-8 h-8 text-black" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-semibold">IT Consultant</h4>
                <p className="text-xs sm:text-sm md:text-base">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
