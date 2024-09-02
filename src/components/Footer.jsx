import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <section className="bg-[#222222] p-6 md:p-8 text-center mt-8">
      <div className="mb-8">
        <h2 className="text-[#f8f6f7] text-sm md:text-base">
          Want to know about our offers first?
        </h2>
        <h1 className="text-white text-xl md:text-3xl my-3">
          Subscribe to our newsletter
        </h1>
        <form className="flex flex-col md:flex-row justify-center my-4">
          <input
            type="email"
            placeholder="Your email ..."
            className="p-2 w-full md:w-64 border-none rounded-l-md outline-none text-base mb-2 md:mb-0"
            required
          />
          <button
            type="submit"
            className="p-2 bg-[#123834] text-white text-base rounded-md cursor-pointer w-full md:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 text-white">
        <div className="flex flex-col items-center text-sm md:text-base">
          <Phone className="text-[#f8f6f7] mb-2" size={20} />
          <p>+233 501 214 141<br /><span>+233 273 772 879</span></p>
        </div>
        <div className="flex flex-col items-center text-sm md:text-base">
          <MapPin className="text-[#f8f6f7] mb-2" size={20} />
          <p>Roxy Apps<br />P.O Box AN 6651<br />Accra - North, Ghana</p>
        </div>
        <div className="flex flex-col items-center text-sm md:text-base">
          <Mail className="text-[#f8f6f7] mb-2" size={20} />
          <p>info@roxyapps.com</p>
        </div>
        <div className="flex flex-col items-center text-sm md:text-base">
          <Clock className="text-[#f8f6f7] mb-2" size={20} />
          <p>24hrs</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
