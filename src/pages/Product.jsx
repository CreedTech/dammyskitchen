import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [selectedProtein, setSelectedProtein] = useState('');
  const [selectedSideDishes, setSelectedSideDishes] = useState([]);
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState(0);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  const handleSideDishSelection = (sideDish) => {
    setSelectedSideDishes((prev) =>
      prev.includes(sideDish)
        ? prev.filter((s) => s !== sideDish) // Remove if already selected
        : [...prev, sideDish] // Add if not selected
    );
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*----------- Product Data-------------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*---------- Product Images------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnail Section */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-start sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <div
                key={index}
                className={`relative w-[75px] h-[75px] sm:w-full sm:h-[100px] mb-3 flex-shrink-0 cursor-pointer ${
                  item === image ? 'border-2 border-black' : 'hover:opacity-80'
                }`}
                onClick={() => setImage(item)}
              >
                <img
                  src={item}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image Section */}
          <div className="w-full sm:w-[80%] max-w-[600px] mx-auto">
            <div className="relative w-full h-[400px]">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt="Selected Product Image"
              />
            </div>
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          {/* Select Size */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? 'border-orange-500' : ''
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Select Protein */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Protein</p>
            <div className="flex gap-2">
              {productData.proteins.map((protein) => (
                <button
                  onClick={() => setSelectedProtein(protein.name)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    protein.name === selectedProtein ? 'border-orange-500' : ''
                  }`}
                  key={protein._id}
                >
                  {protein.name} (+${protein.price})
                </button>
              ))}
            </div>
          </div>

          {/* Select Side Dishes */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Side Dishes</p>
            <div className="flex gap-2 flex-wrap">
              {productData.sideDishes.map((sideDish) => (
                <div
                  key={sideDish._id}
                  onClick={() => handleSideDishSelection(sideDish.name)}
                  className={`px-3 py-2 border cursor-pointer rounded ${
                    selectedSideDishes.includes(sideDish.name)
                      ? 'bg-orange-100 border-orange-500'
                      : 'bg-gray-100'
                  }`}
                >
                  {sideDish.name} (+${sideDish.price})
                </div>
              ))}
            </div>
          </div>

          {/* Select Spice Level */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Spice Level</p>
            <div className="flex gap-2">
              {productData.spiceLevels.map((level) => (
                <button
                  onClick={() => setSelectedSpiceLevel(level)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    level === selectedSpiceLevel ? 'border-orange-500' : ''
                  }`}
                  key={level}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() =>
              addToCart(productData._id, size, selectedProtein, selectedSideDishes, selectedSpiceLevel)
            }
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Cash on delivery is available on this food.</p>
          </div>
        </div>
      </div>

      {/* --------- Display Related Products ---------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
