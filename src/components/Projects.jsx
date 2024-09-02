import Card from "./Card";
import restaurantImage from "../assets/images/restaurant.jpg";
import churchImage from "../assets/images/church.jpg";
import crimeImage from "../assets/images/crime.jpg"; // Corrected variable name
import inventoryImage from "../assets/images/inventory.jpg"; // Corrected variable name and image URL
import bankingImage from "../assets/images/banking.jpg";
import managementImage from "../assets/images/management.png";
// import schoolImage from "../assets/images/school.jpg";

const Projects = () => {
  const cards = [
    {
      image: restaurantImage, // Correctly reference the imported image
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
    {
      image: managementImage,
      title: 'School Management System',
      description: 'A system for managing school operations and student records.',
    },
  ];

  return (
    <div className="p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2 flex justify-center items-center">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card 
            key={index} 
            image={card.image} 
            title={card.title} 
            description={card.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
