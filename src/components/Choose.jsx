import { Code, Smartphone, Cloud } from 'lucide-react';

const Choose = () => {
  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="relative p-8 bg-white rounded-lg shadow-lg">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#FF9800] p-4 rounded-full">
              <Code className="text-white text-3xl" />
            </div>
          </div>
          <h3 className="mt-10 text-xl font-semibold text-center">Expert Web Development</h3>
          <p className="mt-4 text-gray-600 text-center">
            Our team excels in creating custom web solutions tailored to your business needs, ensuring a responsive and user-friendly experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative p-8 bg-white rounded-lg shadow-lg">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#FF9800] p-4 rounded-full">
              <Smartphone className="text-white text-3xl" />
            </div>
          </div>
          <h3 className="mt-10 text-xl font-semibold text-center">Innovative Mobile Apps</h3>
          <p className="mt-4 text-gray-600 text-center">
            We develop high-performance mobile applications that provide engaging user experiences on both iOS and Android platforms.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative p-8 bg-white rounded-lg shadow-lg">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#FF9800] p-4 rounded-full">
              <Cloud className="text-white text-3xl" />
            </div>
          </div>
          <h3 className="mt-10 text-xl font-semibold text-center">Robust Cloud Solutions</h3>
          <p className="mt-4 text-gray-600 text-center">
            We provide secure and scalable cloud-based solutions that enhance your business operations and ensure reliable data storage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
