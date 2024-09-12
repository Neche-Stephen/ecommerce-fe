import React from 'react';
import { Link } from 'react-router-dom';
import TwoWorkers from '../../assets/landingPage/workers.png';
import check from '../../assets/landingPage/icon.svg';
import arrowRight from '../../assets/landingPage/arrow-right.svg';

function Content2() {
  return (
    <>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
        <br />
        <br />
        <div>
          <img src={TwoWorkers} alt="Two workers pointing at something" className="rounded-lg" />
        </div>
        <div>
          <br />
          <br />
          <h3 className='text-4xl font-bold mb-6'>Key Features</h3>
          <p className='text-lg mb-4'>
          We’ve carefully crafted Ecommerce to deliver the best online shopping experience<br /> focusing on convenience, speed, and user satisfaction.
          </p>
          <ul>
            <li className='flex items-center'>
              <img src={check} alt="check" className='mr-2' />Seamless Product Search
            </li>
            <li className='flex items-center'>
              <img src={check} alt="check" className='mr-2' />Secure Checkout
            </li>
            <li className='flex items-center'>
              <img src={check} alt="check" className='mr-2' />Personalized Shopping Recommendations
            </li>
            {/* <li className='flex items-center'>
              <img src={check} alt="check" className='mr-2' />Team Collaboration
            </li> */}
            <li className='flex items-center'>
              <img src={check} alt="check" className='mr-2' />User-Friendly Interface
            </li>
          </ul>
          <div className='mr-6 font-bold p-6'>
            <Link to="/" className="flex items-center font-bold"> {/* Use Link component here */}
              Make your first sale
              <img src={arrowRight} alt="An arrow" className="ml-2" />
            </Link>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Content2;
