import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
// import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_food}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Dammy&apos;s kitchen and catering services was established as the
            company , The company is renowned for its strict compliance to Food
            Safety and Hygiene Standards in addition to providing excellent
            customer services.The ability to providing our services along the
            length and breadth of the country meant that we are not restricted
            either by distance or location.
          </p>
          <p>
            {' '}
            Our team of dedicated chefs are very creative with unwavering
            passion for cooking authentic Nigeria cuisine. The technical skills
            and cooking techniques demonstrated on a day-day basis in our
            kitchen is a testament to the cooking abilities of our chefs
          </p>
          <b className="text-gray-800">Unique Selling Points</b>
          <p>
            To explain why our customers loves our food and services, in our
            recent polls these are some of the reasons given. <br/> The food tasted
            very fresh and authentic<br/> The manager was very trustworthy and
            helpful <br/>The staffs were smartly dressed and very cautious <br/>The food
            presentation was excellent Catering staff arrived at the event on
            time. <br/>The venue was sparkling clean after the event.<br/> There was more
            than enough food for the event.<br/> The food tasted very delicious
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            We meticulously select and vet each order to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            ordering has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      {/* <NewsletterBox /> */}
    </div>
  );
};

export default About;
