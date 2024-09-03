import landingImage from "../assets/images/landing.jpeg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
  const [text] = useTypewriter({
    words: ['RoxyApps'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });

  return (
    <div
      className="relative h-screen bg-cover bg-center mt-12"
      style={{ backgroundImage: `url(${landingImage})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white p-6 max-w-lg sm:p-8 md:max-w-xl lg:max-w-2xl animate-fade-in-out">
          <h2 className="text-4xl font-bold mb-4 text-[#FF9800] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span>{text}</span>
            <Cursor cursorBlinking={true} cursorStyle="|" cursorColor="#166664" />
          </h2>
          <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Software company that provides digital solutions for existing business processes.
            Our solutions cut across web, mobile, and desktop platforms.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <button className="px-6 py-2 bg-[#FF9800] text-white rounded-full hover:bg-[#e68900] transition duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
