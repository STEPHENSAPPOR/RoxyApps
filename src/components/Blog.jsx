import seeImage from "../assets/images/see.webp";
import goodImage from "../assets/images/good.webp";

const blogPosts = [
  {
    title: 'Create Beautiful Website In Less Than An Hour',
    author: 'Ham Brook',
    date: 'Jan 18, 2019',
    category: 'News',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit, ipsum tenetur!',
    image: seeImage,
  },
  {
    title: 'Create Beautiful Website In Less Than An Hour',
    author: 'James Phelps',
    date: 'Jan 18, 2019',
    category: 'News',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit, ipsum tenetur!',
    image: goodImage,
  },
  {
    title: 'Create Beautiful Website In Less Than An Hour',
    author: 'James Phelps',
    date: 'Jan 18, 2019',
    category: 'News',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit, ipsum tenetur!',
    image: goodImage,
  },
];

const Blog = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 pb-2 flex justify-center items-center">
        BLOG
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#FF9800]">{post.title}</h3>
              <div className="text-gray-500 text-sm mb-2">
                <span>{post.author}</span> • <span>{post.date}</span> • <span className="text-[#FF9800]">{post.category}</span>
              </div>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
