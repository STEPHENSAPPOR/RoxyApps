import { FaInstagram, FaTwitter } from 'react-icons/fa';
import steveImage from "../assets/images/steve.jpeg";

const teamMembers = [
  {
    name: 'Samuel Twum',
    title: 'Chief Executive Officer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: steveImage,
    instagram: 'https://instagram.com/samuel_twum',
    twitter: 'https://twitter.com/samuel_twum',
  },
  {
    name: 'Divine Asiedu',
    title: 'Senior Software Engineer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: steveImage,
    instagram: 'https://instagram.com/divine_asiedu',
    twitter: 'https://twitter.com/divine_asiedu',
  },
  {
    name: 'Stephen Sappor',
    title: 'Front-end Developer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    image: steveImage,
    instagram: 'https://instagram.com/stephen_sappor',
    twitter: 'https://twitter.com/stephen_sappor',
  },
];

const Team = () => {
  return (
    <div className="flex flex-col items-center mt-5 px-4 sm:px-6 lg:px-8">
      {/* TEAM Header */}
      <div className="w-full flex justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 pb-2 w-full text-center">
          TEAM
        </h2>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center p-4 shadow-lg rounded-lg">
            <div className="w-32 h-32 mx-auto relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mt-4">{member.name}</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2">{member.title}</p>
            <p className="text-gray-500 mb-4">{member.description}</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl sm:text-2xl hover:text-pink-500 transition-colors duration-300" />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl sm:text-2xl hover:text-blue-500 transition-colors duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
