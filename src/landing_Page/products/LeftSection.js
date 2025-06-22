import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 p-2">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 p-3 text-center">
          <img src={imageURL} className="img-fluid" alt="Product" />
        </div>

        {/* Text Section */}
        <div className="col-md-6 p-3">
          <h2 className="fw-bold">{productName}</h2>
          <p className="text-muted">{productDescription}</p>

          <div className="d-flex align-items-center mb-3">
            <a href={tryDemo} className="btn btn-primary me-3">Try Demo</a>
            <a href={learnMore} className="btn btn-outline-secondary">Learn More</a>
          </div>

          <div className="d-flex gap-3">
            <a href={googlePlay}>
              <img src="media/images/google-play-badge.svg" alt="Google Play" height="40" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstore-badge.svg" alt="App Store" height="40" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
