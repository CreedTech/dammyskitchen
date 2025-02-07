import { useState, useContext } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoadingOverlay from '../components/LoadingOverlay';
// import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  const { backendUrl } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      // Send the form data to the backend
      const response = await axios.post(`${backendUrl}/api/v1/quote`, formData);
      // const result = await response.json();
      if (response.data.success) {
        toast.success('Quote request sent and saved successfully');
      } else {
        console.log(response.data.message);
        toast.error('Failed to send the quote request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error processing your request');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="Contact Image"
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
         <LoadingOverlay isLoading={loading} />
        {/* {loading && <LoadingOverlay />} */}
        <form
          className="w-full sm:w-1/2 flex flex-col gap-4 mx-auto my-6 border p-3"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full outline-none border p-2"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full outline-none border p-2"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full outline-none border p-2"
            type="tel"
            placeholder="Enter your Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full outline-none border p-2"
            placeholder="Enter your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
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
