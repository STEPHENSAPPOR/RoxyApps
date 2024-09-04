import seeImage from "../assets/images/see.webp";
import goodImage from "../assets/images/good.webp";

const blogPosts = [
  {
    title: 'Enhance Your Business with Tailored Digital Solutions',
    author: 'Tech Insight Team',
    date: 'Aug 15, 2024',
    category: 'Technology',
    description: 'Discover how RoxyApps Limited’s bespoke software solutions can transform your business processes, from web development to cloud integration.',
    image: seeImage,
  },
  {
    title: 'The Future of Mobile App Development',
    author: 'Emma Lawson',
    date: 'Sep 02, 2024',
    category: 'Mobile',
    description: 'Explore the latest trends and innovations in mobile app development and how RoxyApps Limited can help you stay ahead in the competitive market.',
    image: goodImage,
  },
  {
    title: 'Why Cloud Integration is Key for Modern Businesses',
    author: 'John Doe',
    date: 'Sep 10, 2024',
    category: 'Cloud',
    description: 'Learn about the benefits of cloud integration and how RoxyApps Limited’s cloud-based solutions can enhance your business operations.',
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
