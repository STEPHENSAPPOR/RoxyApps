import { FaInstagram, FaTwitter } from 'react-icons/fa';
import steveImage from "../assets/images/steve.jpeg";

const teamMembers = [
  {
    name: 'Samuel Twum',
    title: 'Chief Executive Officer',
    image: steveImage,
    instagram: 'https://instagram.com/samuel_twum',
    twitter: 'https://twitter.com/samuel_twum',
  },
  {
    name: 'Divine Asiedu',
    title: 'Senior Software Engineer',
    image: steveImage,
    instagram: 'https://instagram.com/divine_asiedu',
    twitter: 'https://twitter.com/divine_asiedu',
  },
  {
    name: 'Stephen Sappor',
    title: 'Front-end Developer',
    image: steveImage,
    instagram: 'https://instagram.com/stephen_sappor',
    twitter: 'https://twitter.com/stephen_sappor',
  },
];

const Team = () => {
  return (
    <div className="flex flex-col items-center mt-10 px-4 sm:px-6 lg:px-8">
      {/* TEAM Header */}
      <div className="w-full flex justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 border-b-2 border-gray-300 pb-2 w-full text-center">
          TEAM
        </h2>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative w-full h-64 sm:h-72 md:h-80">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white rounded-lg transition-opacity duration-300 p-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#FF9800]">{member.name}</h2>
              <p className="text-sm sm:text-base md:text-lg">{member.title}</p>
              <div className="flex space-x-4 mt-4">
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-xl sm:text-2xl hover:text-pink-500 transition-colors duration-300" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-xl sm:text-2xl hover:text-blue-500 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
