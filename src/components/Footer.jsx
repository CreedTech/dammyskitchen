import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img
            src={assets.logo}
            className="mb-5 w-32"
            alt="DammyKitchen Logo"
          />
          <p className="w-full md:w-2/3 text-gray-600">
            Dammy&apos;s kitchen &Catering and Events Ltd is a catering company
            in UK which specialise in Nigeria cuisine most especially Nigerian
            cuisine. As a business, the company caters for events such as
            weddings, birthdays, corporate events,
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
            <li>
              {' '}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/collection">Our Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>@dammy&apos;s kitchen </li>
            <li>
              {' '}
              <a href="mailto:Damilolabisola85@gmail.com">
                Damilolabisola85@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright {new Date().getFullYear()} @dammys kitchen - All Right
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
