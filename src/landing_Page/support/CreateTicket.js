import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row mt-5 px-3 px-md-5 mb-5">
        <h1 className="fs-5 fs-md-3" style={{fontWeight:"bold"}}>
          To Create a Ticket, select a relevant topic
        </h1>

        {/* Column 1 */}
        <div className="col-12 col-md-4 mt-5">
          <h4><i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Resident individual</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Minor</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Non Resident Indian (NRI)</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Company, Partnership, HUF and LLP</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Glossary</a>
        </div>

        {/* Column 2 */}
        <div className="col-12 col-md-4 mt-5">
          <h4><i className="fa fa-plus-circle" aria-hidden="true"></i> Your Xenova Account</h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Your Profile</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Account modification</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Client Master Report (CMR) and DP</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Nomination</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Transfer and conversion of securities</a>
        </div>

        {/* Column 3 */}
        <div className="col-12 col-md-4 mt-5">
          <h4><i className="fa fa-plus-circle" aria-hidden="true"></i> Stocks Info</h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>IPO</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Trading FAQs</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Margin Trading Facility (MTF) and Margins</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Charts and orders</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Alerts and Nudges</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>General</a>
        </div>

        {/* Column 4 */}
        <div className="col-12 col-md-4 mt-5">
          <h4><i className="fa fa-plus-circle" aria-hidden="true"></i> Funds</h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Add money</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Withdraw money</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Add bank accounts</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>eMandates</a>
        </div>

        {/* Column 5 */}
        <div className="col-12 col-md-4 mt-5">
          <h4><i className="fa fa-plus-circle" aria-hidden="true"></i>Account Statement</h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Portfolio</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Corporate actions</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Funds statement</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Reports</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Profile</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Segments</a>
        </div>

        {/* Column 6 */}
        <div className="col-12 col-md-4 mt-5">
          <h4><i className="fa fa-plus-circle" aria-hidden="true"></i>Xenova Power</h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Mutual funds</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>National Pension Scheme (NPS)</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Features on Coin</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>Payments and Orders</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2" }}>General</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
