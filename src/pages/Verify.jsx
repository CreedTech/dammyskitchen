// import React from 'react'
// import { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { useSearchParams } from 'react-router-dom'
// import { useEffect } from 'react'
// import {toast} from 'react-toastify'
// import axios from 'axios'

// const Verify = () => {

//     const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
//     const [searchParams, setSearchParams] = useSearchParams()

//     const success = searchParams.get('success')
//     const orderId = searchParams.get('orderId')

//     const verifyPayment = async () => {
//         try {

//             if (!token) {
//                 return null
//             }

//             const response = await axios.post(backendUrl + '/api/order/verifyStripe', { success, orderId }, { headers: { token } })

//             if (response.data.success) {
//                 setCartItems({})
//                 navigate('/orders')
//             } else {
//                 navigate('/cart')
//             }

//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     useEffect(() => {
//         verifyPayment()
//     }, [token])

//     return (
//         <div>

//         </div>
//     )
// }

// export default Verify

import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  // The verifyPayment function is now redundant, since the payment is verified via webhook.
  useEffect(() => {
    console.log('Success:', success); // Log success value
    console.log('Order ID:', orderId);
    if (success === 'true') {
      // Payment was successful
      toast.success('Payment successful!');

      // Optionally, you can clear the cart and redirect to the orders page
      setCartItems({});
      navigate('/orders');
    } else {
      // Payment failed
      toast.error('Payment failed, please try again.');

      // Redirect to cart or another relevant page
      navigate('/cart');
    }
  }, [success, orderId, navigate, setCartItems]);

  return (
    <div>
      {/* You can show a loading message while waiting for the response */}
      {success === null && <div>Verifying payment...</div>}
    </div>
  );
};

export default Verify;
