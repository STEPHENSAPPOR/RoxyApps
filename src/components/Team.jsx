import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import steveImage from "../assets/images/steve.jpeg";

const teamMembers = [
  {
    name: 'Samuel Twum',
    role: 'Chief Executive Officer',
    imgSrc: steveImage,
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Samuel Somuah',
    role: 'Senior Software Engineer',
    imgSrc: steveImage,
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Stephen Sappor',
    role: 'Front-end Web Developer',
    imgSrc: steveImage,
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
];

const Team = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      <h2 className="text-center text-3xl font-semibold mb-8">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center w-full sm:w-80 md:w-64 lg:w-80">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
            <p className="text-[#FF9800]">{member.role}</p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl sm:text-2xl" />
              </a>
              <a
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl sm:text-2xl" />
              </a>
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl sm:text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
