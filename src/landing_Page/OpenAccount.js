import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
  return (
    <div className="container py-5 mt-5"> {/* Added mt-5 here */}
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          {/* <img 
              src='media/images/image1.png' 
              alt="Hero Image" 
              className='img-fluid mb-4' 
          /> */}
          <h1 className='mb-3'>
            Open a Xenova Account
          </h1>
          <p className='mb-4'>
            An online platform to invest in stocks, mutual funds and more.
          </p>
          <Link to='/signup'>
          <button className='btn btn-success px-4 py-2 fs-5'>
            Sign Up Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
