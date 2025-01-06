import Title from '../components/Title';
import { assets } from '../assets/assets';
// import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Reach Out to Us</p>
          {/* <p className=' text-gray-500'>1304 Lorem Address <br /> Suite 350, London, UK</p> */}
          <p className=" text-gray-500">
            Media: @dammy&apos;s kitchen <br /> Email:{' '}
            <a href="mailto:Damilolabisola85@gmail.com">
              Damilolabisola85@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className=" text-center">
        <p className="text-2xl font-medium text-gray-800">Request A Quote</p>
        {/* <p className='text-gray-400 mt-3'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      </p> */}
        <form className="w-full sm:w-1/2 flex flex-col gap-4 mx-auto my-6 border p-3">
          <input
            className="w-full outline-none border p-2"
            type="text"
            placeholder="Enter your name"
            required
          />
          <input
            className="w-full outline-none border p-2"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            className="w-full outline-none border p-2"
            type="tel"
            placeholder="Enter your Phone Number"
            required
          />
          <textarea
            className="w-full outline-none border p-2"
            placeholder="Enter your Message"
            required
            name="message"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white text-xs px-10 py-4 self-center"
          >
            Request
          </button>
        </form>
      </div>
      {/* <NewsletterBox /> */}
    </div>
  );
};

export default Contact;
