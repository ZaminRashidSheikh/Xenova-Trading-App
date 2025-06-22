import React from 'react';

function NotFound() {
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
            404 Not Found
          </h1>
          <p className='mb-4'>
            Sorry the page you are looking for doesn't exist
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
