import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_food} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tellus nascetur mattis, iaculis nam faucibus eu etiam praesent nisl malesuada risus facilisis, nec felis sem vulputate placerat dictumst maecenas potenti vehicula. Eleifend in litora congue dictum vel aliquam morbi maecenas cum, lectus sociis </p>
              <p> placerat mollis parturient elementum conubia habitant ad et. Tortor cras turpis penatibus donec nisi venenatis nostra ultrices viverra, vel himenaeos erat imperdiet montes conubia condimentum per magnis nec, gravida in congue phasellus tincidunt hendrerit morbi mus.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tellus nascetur mattis, iaculis nam faucibus eu etiam praesent nisl malesuada risus facilisis, nec felis sem vulputate placerat dictumst maecenas potenti vehicula. Eleifend in litora </p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each order to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, ordering has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
