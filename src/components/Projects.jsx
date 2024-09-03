import restaurantImage from "../assets/images/restaurant.jpg";
import churchImage from "../assets/images/church.jpg";
import crimeImage from "../assets/images/crime.jpg";
import inventoryImage from "../assets/images/inventory.jpg";
import bankingImage from "../assets/images/banking.jpg";

const Projects = () => {
  const cards = [
    {
      image: restaurantImage,
      title: 'Swageat Restaurant and Delivery Service',
      description: 'A desktop application for managing restaurant orders and deliveries.',
    },
    {
      image: churchImage,
      title: 'Church Management System',
      description: 'A system for managing church activities and member information.',
    },
    {
      image: crimeImage,
      title: 'Crime Reporting Tool',
      description: 'A tool for reporting and tracking criminal activities.',
    },
    {
      image: inventoryImage,
      title: 'Inventory Management System',
      description: 'An application for managing inventory and stock levels.',
    },
    {
      image: bankingImage,
      title: 'Sika Fie Banking System',
      description: 'A desktop application for banking operations and financial management.',
    },
  ];

  return (
    <div className="p-6 mt-5">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 border-b-2 border-gray-300 pb-2 text-center">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="relative group transition-transform duration-300 transform hover:scale-105 row-span-2 col-span-2 animate-ping">
          <img src={cards[0].image} alt={cards[0].title} className="object-cover w-full h-full rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center p-4 rounded-lg">
            <h3 className="text-[#FF9800] text-xl font-bold text-center">{cards[0].title}</h3>
            <p className="text-white text-sm mt-2 text-center">{cards[0].description}</p>
          </div>
        </div>
        {cards.slice(1).map((card, index) => (
          <div key={index} className="relative group transition-transform duration-300 transform hover:scale-105 animate-ping">
            <img src={card.image} alt={card.title} className="object-cover w-full h-full rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center p-4 rounded-lg">
              <h3 className="text-[#FF9800] text-lg font-bold text-center">{card.title}</h3>
              <p className="text-white text-sm mt-2 text-center">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
