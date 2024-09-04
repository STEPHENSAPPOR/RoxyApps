import { Code, Smartphone, Computer, Cloud } from 'lucide-react';

const services = [
  {
    icon: <Code size={40} />,
    title: 'Web Development',
    description: 'We create stunning and functional websites tailored to your business needs, ensuring a seamless user experience across all devices.',
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Mobile App Development',
    description: 'Our team builds high-performance mobile applications that provide engaging user experiences on both iOS and Android platforms.',
  },
  {
    icon: <Computer size={40} />,
    title: 'Desktop Software Solutions',
    description: 'We offer customized desktop software solutions designed to optimize and enhance your business processes.',
  },
  {
    icon: <Cloud size={40} />,
    title: 'Cloud Integration',
    description: 'We provide cloud-based solutions to improve the efficiency and scalability of your business operations, with secure and reliable data storage.',
  },
];

const Services = () => {
  return (
    <div className=" text-black py-16 px-8 mt-9">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:mr-8">
          <h3 className="text-[#FF9800] uppercase tracking-widest">Our Services</h3>
          <h2 className="text-4xl font-bold mt-2">What We Do?</h2>
          <p className="mt-4 text-gray-600">
            At RoxyApps Limited, we provide innovative digital solutions to streamline and enhance your business processes. From web and mobile development to cloud integration, we’ve got you covered.
          </p>
          <div className="mt-12">
            <button className="px-8 py-4 bg-[#FF9800] text-white rounded-full transition-all duration-300">
              View All Services
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white text-gray-900 p-4 rounded-lg shadow-md flex items-start">
                <div className="mr-3 text-blue-400">
                  <div className="bg-[#FF9800] text-white p-3 rounded-full shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-md font-semibold mb-1">{service.title}</h3>
                  <p className="text-gray-500 text-xs">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
