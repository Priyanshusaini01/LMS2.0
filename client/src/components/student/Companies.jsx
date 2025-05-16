import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
  return (
    <div className="pt-16">
      <p className="text-base text-gray-500">Trusted by learners from</p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5">
        <img className='md:w-28 w-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" />
        <img className='md:w-28 w-20' src={assets.walmart_logo} alt="Walmart" />
        <img className='md:w-24 w-20' src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" />
        <img className='md:w-24 w-20' src={assets.adobe_logo} alt="Adobe" />
        <img className='md:w-24 w-20' src={assets.paypal_logo} alt="Paypal" />
      </div>
    </div>
  );
};

export default Companies;
