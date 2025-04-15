import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import { assets } from '../assets/assets';
import SEO from '../components/Seo';
// import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <>
      <SEO
        title="DammysKitchen | Nigerian Food Delivery in London"
        description="Craving Nigerian food? DammysKitchen delivers fresh, authentic meals across London. Order online now!"
        url="https://dammyskitchen.vercel.app"
      />

      <div>
        <Hero />
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
          <div>
            <img
              src={assets.items_banner}
              className="w-[80%] m-auto mb-5"
              alt="Home Banner"
            />
          </div>
        </div>
        {/* <NewsletterBox/> */}
      </div>
    </>
  );
};

export default Home;
