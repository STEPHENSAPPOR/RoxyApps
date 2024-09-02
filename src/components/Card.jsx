import PropTypes from 'prop-types';

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-slate-200 rounded-lg shadow-md overflow-hidden mt-5 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-gray-800 sm:text-xl md:text-2xl">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
