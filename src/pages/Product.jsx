import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [selectedProtein, setSelectedProtein] = useState([]);
  // const [selectedSideDishes, setSelectedSideDishes] = useState([]);
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // const scrollContainerRef = useRef(null);
  // const [canScrollLeft, setCanScrollLeft] = useState(false);
  // const [canScrollRight, setCanScrollRight] = useState(false);

  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;

  //   const updateScrollButtons = () => {
  //     if (scrollContainer) {
  //       setCanScrollLeft(scrollContainer.scrollLeft > 0);
  //       setCanScrollRight(
  //         scrollContainer.scrollWidth >
  //           scrollContainer.clientWidth + scrollContainer.scrollLeft
  //       );
  //     }

  //   };

  //   if (scrollContainer) {
  //     // Attach scroll event listener
  //     scrollContainer.addEventListener('scroll', updateScrollButtons);

  //     // Initial check
  //     updateScrollButtons();
  //   }

  //   // Cleanup
  //   return () => {
  //     if (scrollContainer) {
  //       scrollContainer.removeEventListener('scroll', updateScrollButtons);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    // Fetch product data and set initial price
    const fetchProductData = async () => {
      products.map((item) => {
        if (item._id === productId) {
          setProductData(item);
          setImage(item.image[0]);
          if (item.price) {
            setTotalPrice(item.price || 0); // Use 0 if price is undefined
          } // Initialize with base price
          return null;
        }
      });
    };

    fetchProductData();
  }, [productId, products]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let price = productData?.price || 0; // Ensure base price is defined
      console.log('Base Price:', price);

      // Add size price
      if (size) {
        const selectedSize = productData.containerSizes.find((s) => s.size === size);
        if (selectedSize) {
          price += selectedSize.price;
          console.log('Selected Size Price:', selectedSize.price);
        }
      }

      // Add selected proteins' prices
      if (selectedProtein.length > 0) {
        const proteinsTotal = selectedProtein.reduce(
          (acc, protein) => acc + (protein.price || 0),
          0
        );
        price += proteinsTotal;
        console.log('Selected Proteins Total Price:', proteinsTotal);
      }

      console.log('Total Price:', price);
      setTotalPrice(price);
    };

    if (productData) {
      calculateTotalPrice();
    }
  }, [size, selectedProtein, productData]);

  // const handleSideDishSelection = (sideDish) => {
  //   setSelectedSideDishes((prev) =>
  //     prev.includes(sideDish)
  //       ? prev.filter((s) => s !== sideDish)
  //       : [...prev, sideDish]
  //   );
  // };

  const handleAddToCart = () => {
    if (!size) {
      alert('Please select a size.');
      return;
    }
    addToCart({
      productId: productData._id,
      name: productData.name,
      size,
      protein: selectedProtein,
      // sideDishes: selectedSideDishes,
      spiceLevel: selectedSpiceLevel,
      totalPrice,
    });
    alert('Item added to cart!');
  };

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Images */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-start sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <div
                key={index}
                className={`relative w-[75px] h-[75px] sm:w-full sm:h-[100px] mb-2 md:mx-0 mx-2 flex-shrink-0 cursor-pointer   ${
                  item === image ? 'border-2 border-black rounded-md' : 'hover:opacity-80'
                }`}
                onClick={() => setImage(item)}
              >
                <img
                  src={item}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
          {/* <div> */}
          <div className="w-full sm:w-[80%] max-w-[600px] mx-auto">
            <div className="relative w-full h-[400px]">
              <img
                className="w-full h-full object-cover rounded-md"
                src={image}
                alt="Selected Product Image"
              />
            </div>
          </div>
          {/* <div className="my-8">
              <p>Select Protein</p>
              <div className="flex gap-2 flex-wrap">
                {productData.proteins.map((protein) => (
                  <h1
                    onClick={() => setSelectedProtein(protein)}
                    className={`border py-2 px-8 bg-gray-100 ${
                      selectedProtein?._id === protein._id
                        ? 'border-orange-500'
                        : ''
                    }`}
                    key={protein._id}
                  >
                    {protein.name} (+£{protein.price})
                  </h1>
                ))}
              </div>
            </div> */}
          {/* </div> */}
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
              <p className="mt-5 text-3xl font-medium">
               <span className='font-light text-xl'>min</span> {currency}
                {productData.price}
              </p>

              <p className="mt-5 text-gray-500 md:w-4/5">
                {productData.description}
              </p>
              {/* Select Protein */}
              <div className="my-8">
                <p>Select Extra Protein</p>
                <div className="relative max-w-[600px]">
                 
                  {/* Scrollable Container */}
                  <div
                    // ref={scrollContainerRef}
                    id="protein-scroll-container"
                    className="grid md:grid-rows-4 grid-rows-1 md:grid-flow-col grid-flow-row gap-2 overflow-x-auto max-w-full whitespace-nowrap"
                    style={{
                      // maxHeight: '26rem', // Approximately 3 rows with spacing
                      overflowY: 'hidden', // Disable vertical scroll
                    }}
                  >
                    {productData.proteins.map((protein) => (
                      <div
                        onClick={() => {
                          setSelectedProtein((prev) => {
                            // Check if the protein is already selected
                            if (prev.some((item) => item._id === protein._id)) {
                              // Remove it if it's already selected
                              return prev.filter(
                                (item) => item._id !== protein._id
                              );
                            } else {
                              // Add it if it's not selected
                              return [...prev, protein];
                            }
                          });
                        }}
                        className={`border py-1 px-4 bg-gray-100 cursor-pointer rounded-md ${
                          selectedProtein.some(
                            (item) => item._id === protein._id
                          )
                            ? 'border-orange-500'
                            : ''
                        }`}
                        key={protein._id}
                      >
                        <div className="">
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-sm">
                              {protein.name} <br /> +£{protein.price}{' '}
                            </p>
                            {/* Icon Button */}
                            <button
                              className={` px-2 rounded-full z-10 bg-white text-xl font-light duration-300 transition-transform ${
                                selectedProtein.some(
                                  (item) => item._id === protein._id
                                )
                                  ? 'transform scale-100 transition-all duration-300 ease-in-out animate-rotate-360'
                                  : 'transform scale-100'
                              }`}
                            >
                              {/* Change Icon Dynamically */}
                              {selectedProtein.some(
                                (item) => item._id === protein._id
                              ) ? (
                                <p className="text-orange-500 ">✓</p> // Tick icon when selected
                              ) : (
                                <p className="text-orange-500 ">+</p> // Plus icon when unselected
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                
                </div>
              </div>

              {/* Select Spice Level */}
              <div className="my-8">
                <p>Select Spice Level</p>
                <div className="flex gap-2 flex-wrap">
                  {productData.spiceLevels.map((level) => (
                     <div
                     key={level}
                     onClick={() => setSelectedSpiceLevel(level)} 
                   >
                     <div
                       className={`flex items-center justify-center px-3 py-1 cursor-pointer rounded  `}
                       style={{
                         backgroundColor: selectedSpiceLevel === level
                           ? 'red'
                           : '#e2e8f0',
                         transition: 'background-color 0.3s ease-in-out',
                         borderRadius: '0.375rem',
                         cursor: 'pointer',
                       }}
                     >
                       {/* Render chili icons based on the spice level */}
                       {Array.from({ length: level }, (_, i) => (
                         <span key={i} className="text-red-500 text-lg">
                           🌶️
                         </span>
                       ))}
                       {/* Add a placeholder for level 0 (mild) */}
                       {level === 0 && <p className="text-gray-600">Mild</p>}
                     </div>
                   </div>
                  ))}
                </div>
              </div>
                
              {/* Select Size */}
              <div className="my-8">
                <p>Select Size</p>
                <div className="flex gap-2 flex-wrap">
                  {productData.containerSizes.map((item) => (
                    <button
                      onClick={() => setSize(item.size)}
                      className={`border py-2 px-4  rounded-md ${
                        item.size === size ? 'border-orange-500  border-2' : 'bg-gray-100'
                      }`}
                      key={item.size}
                    >
                      {item.size} <br/> (£{item.price})
                    </button>
                  ))}
                </div>
              </div>
              <p>Total Price: { currency} {totalPrice }</p> <br/>
              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
              >
                ADD TO CART
              </button>
            </div>
            {/* <div className="flex-1">
              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
              >
                ADD TO CART
              </button>
            </div> */}
          </div>

          {/* Select Side Dishes */}
          {/* <div className="my-8">
            <p>Select Side Dishes</p>
            <div className="flex gap-2 flex-wrap">
              {productData.sideDishes.map((sideDish) => (
                <div
                  key={sideDish._id}
                  onClick={() => handleSideDishSelection(sideDish)}
                  className={`px-3 py-2 border cursor-pointer rounded ${
                    selectedSideDishes.includes(sideDish)
                      ? 'bg-orange-100 border-orange-500'
                      : 'bg-gray-100'
                  }`}
                >
                  {sideDish.name} (+£{sideDish.price})
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Select Protein */}
        {/* <div className="flex-1">
          <div className="my-8">
            <p>Select Protein</p>
            <div className="flex gap-2 flex-col">
              {productData.proteins.map((protein) => (
                <button
                  onClick={() => setSelectedProtein(protein)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    selectedProtein?._id === protein._id
                      ? 'border-orange-500'
                      : ''
                  }`}
                  key={protein._id}
                >
                  {protein.name} (+£{protein.price})
                </button>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      {/* Related Products */}
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
