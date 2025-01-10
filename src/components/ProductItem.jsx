import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
      <div className=" overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] object-cover rounded-sm"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-base">{name}</p>
      <p className=" text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
