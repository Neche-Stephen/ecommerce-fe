import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import signUpForm from '../../assets/landingPage/form.png';
import check from '../../assets/landingPage/icon.svg';
import arrowRight from '../../assets/landingPage/arrow-right.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


function HowitWorks() {
  return (
    <>
      <section className='bg-customBlue py-20'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
          <div>
            <h2 className='text-4xl font-bold mb-6'>About</h2>
            <p className='text-lg mb-4'>Ecommerce was born out of a simple idea: to make online shopping more human.</p>
            <div className='p-6'>
              <Link to="/signup" className="flex items-center font-bold"> {/* Use Link component here */}
                Make your first purchase
                <img src={arrowRight} alt="An arrow" className="ml-2" />
              </Link>

              <div className="bg-white text-black py-10 ">
                <div className="  mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-6">About the Developer</h2>
                  <div className="border border-black rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold">Chinecherem (Stephen) Ubawike</h3>
                    <p className="text-gray-600 mb-4">Frontend & Backend Developer</p>
                    <p className="text-gray-800 mb-6">
                      I am the sole developer behind this e-commerce platform. With a passion for creating intuitive and efficient web applications, I built Ecommerce as a streamlined solution for modern-day shopping. This project represents both my technical expertise and my commitment to building solutions that make life easier for users.
                    </p>
                    <div className="flex space-x-4">
                      <a href="https://linkedin.com/in/chinecherem-ubawike" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-colors">
                        <i className="fab fa-linkedin text-2xl"></i> {/* Font Awesome LinkedIn Icon */}
                        
                      </a>
                      <a href="https://github.com/Neche-Stephen" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-colors">
                        <i className="fab fa-github text-2xl"></i> {/* Font Awesome GitHub Icon */}
                      </a>
                      <a href="https://twitter.com/CUbawike" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black transition-colors">
                        <i className="fab fa-twitter text-2xl"></i> {/* Font Awesome Twitter Icon */}
                      </a>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <a href="https://github.com/Neche-Stephen/ecommerce-fe" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-black text-black font-semibold rounded hover:bg-black hover:text-white transition-colors">
                      View Project on GitHub
                    </a>
                  </div>
                </div>
             </div>
            </div>
          </div>
          <br />
          <br />
          <div>
            <img src={signUpForm} alt="A picture of the signup form" className='rounded-lg' />
          </div>
        </div>
      </section>
    </>
  );
}

export default HowitWorks;
