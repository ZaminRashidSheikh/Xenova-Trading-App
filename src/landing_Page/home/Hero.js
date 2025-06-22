import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <img
            src='media/images/trading1.jpg'
            alt="Hero Image"
            className='img-fluid mb-4'
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }} // 👈 controls image size
          />
          <h1 className='mb-3'>
            Invest in Zamin's Trading Application
          </h1>
          <p className='mb-4'>
            An online platform to invest in stocks, mutual funds and more.
          </p>

          {/* 👇 LINK to /signup route */}
          <Link to="/signup">
            <button className='btn btn-success px-4 py-2 fs-5'>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
