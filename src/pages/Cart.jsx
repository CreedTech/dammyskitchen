import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];

      Object.entries(cartItems).forEach(([productId, cartItem]) => {
        Object.entries(cartItem).forEach(([key, itemDetails]) => {
          const size = itemDetails.size;
          const protein = itemDetails.protein;
          const spiceLevel = itemDetails.spiceLevel;
          const quantity = itemDetails.quantity;
          const totalPrice = itemDetails.totalPrice;

          const productData = products.find(
            (product) => product._id === productId
          );

          if (productData && quantity > 0) {
            tempData.push({
              _id: productId,
              size,
              protein,
              spiceLevel,
              quantity,
              totalPrice,
              productData,
            });
          }
        });
      });

      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {/* Check if cartData is an array and has items */}
        {Array.isArray(cartData) && cartData.length > 0 ? (
          cartData.map((item, index) => {
            const {
              productData,
              size,
              protein,
              spiceLevel,
              quantity,
              totalPrice,
            } = item;

            return (
              <div
                key={index}
                className="py-8 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt={productData.name}
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {totalPrice}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1  rounded-md md:block hidden">
                        {size.size}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1  cursor-not-allowed rounded-md md:block hidden">
                        Spice:{' '}
                        {spiceLevel > 0 ? '🌶️'.repeat(spiceLevel) : 'Mild'}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(
                          item._id,
                          size.size,
                          protein.map((p) => p.name).join(', '),
                          spiceLevel,
                          Number(e.target.value),
                          totalPrice
                        )
                  }
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded-md"
                  type="number"
                  min={1}
                  defaultValue={quantity}
                />
                <img
                  onClick={() =>
                    updateQuantity(
                      item._id,
                      size.size,
                      protein.map((p) => p.name).join(', '),
                      spiceLevel,
                      0,
                      totalPrice
                    )
                  }
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt="Delete"
                />

                <div className="flex flex-col gap-4 items-start">
                  <p className=" sm:py-1  rounded-md md:hidden block">
                    <span className="text-base font-semibold">
                      Container Size:
                    </span>{' '}
                    {size.size}
                  </p>
                  <p className=" sm:py-1  cursor-not-allowed rounded-md md:hidden block">
                    <span className="text-base font-semibold">Spice:</span>{' '}
                    {spiceLevel > 0 ? '🌶️'.repeat(spiceLevel) : 'Mild'}
                  </p>
                  <p className="text-base font-semibold">Extra Proteins</p>
                  <div className="grid md:grid-cols-3 grid-cols-1  md:max-w-[600px]">
                    {protein.map((proteinItem, proteinIndex) => (
                      <span
                        key={proteinIndex}
                        className="px-2 py-2 sm:px-3 sm:py-1  border bg-slate-50 cursor-not-allowed "
                      >
                        <div className="flex  flex-row justify-between items-center">
                          <span>{proteinItem.name}</span>

                          <span>
                            {currency}
                            {proteinItem.price}
                          </span>
                        </div>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
