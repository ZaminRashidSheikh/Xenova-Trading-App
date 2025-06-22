import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 pt-5">
      {/* Heading */}
      <div className="text-center mb-4 border-bottom pb-3">
        <h1 className="fs-3">Brokerage & Charges</h1>
        <p className="text-muted">Understand all applicable charges</p>
      </div>

      {/* Row with Brokerage and List of Charges side-by-side */}
      <div className="row px-3 px-md-5 text-start">
        {/* Left Section */}
        <div className="col-md-8 border-top py-4">
          <a href="#" className="text-decoration-none text-primary">
            <h3 className="fs-5" style={{marginLeft:"7%"}}>Brokerage Calculator</h3>
          </a>
          <ul className="mt-3 text-muted" style={{lineHeight:"2"}}>
            <li>Call & Trade RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract note will be sent via email.</li>
            <li>
              Physical copies of contract notes:
              <br /> For NRI account (PSI): ₹200 or 0.5% per executed order.
            </li>
            <li>
              If the account is in debt balance, any order placed will be charged ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-md-4 border-top py-4 d-flex align-items-start justify-content-center">
          <a href="#" className="text-decoration-none text-primary">
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
