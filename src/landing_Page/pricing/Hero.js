import React from "react";

function Hero() {
  return (
    <div className="container pt-5 mt-5 mb-5">
      {/* Heading Section */}
      <div className="row px-3 px-md-5 mb-5 border-bottom text-center">
        <div className="col-12">
          <h1>Pricing</h1>
          <h3 className="text-muted mt-3 fs-4">
            Free Equity Investment and flat ₹20 intraday and F&O trades
          </h3>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row px-3 px-md-5 text-center">
        <div className="col-12 col-md-4 py-4">
          <img
            src="media/images/pricing-eq.svg"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
            alt="Equity"
          />
          <h1 className="fs-4">Equity Delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 py-4">
          <img
            src="media/images/other-trades.svg"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
            alt="F&O"
          />
          <h1 className="fs-4">Intraday & F&O</h1>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order across equity, currency, and commodity trades. ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 py-4">
          <img
            src="media/images/pricing-eq (1).svg"
            className="img-fluid"
            style={{ maxWidth: "120px" }}
            alt="Mutual Funds"
          />
          <h1 className="fs-4">Free Direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
