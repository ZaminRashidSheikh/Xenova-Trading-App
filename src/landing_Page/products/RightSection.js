import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container mt-5 p-2">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6 p-3">
          <h2 className="fw-bold">{productName}</h2>
          <p className="text-muted">{productDescription}</p>

          <div className="d-flex align-items-center mb-3">
            <a href={learnMore}>Learn More</a>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 p-3 text-center">
          <img src={imageURL} className="img-fluid" alt="Product" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
