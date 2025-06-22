import React from 'react';

function Team() {
  return (
    <div className="container">
      <div className="row mt-5 px-3 px-md-5 mb-4 border-top">
        <h2 className="text-center ms-5  fw-bold">People</h2>
      </div>
      <div className="row align-items-center px-3 px-md-5 mb-5 text-muted">
        <div className="col-12 col-md-6 py-3 text-center">
          <img
            src="media/images/Zamin.jpeg"
            alt="Zamin"
            className="img-fluid"
            style={{ borderRadius: '45%', maxWidth: '80%' }}
          />
          <h4>Zamin Rashid Sheikh</h4>
          <h5>Software Engineer at Google</h5>
        </div>
        <div className="col-12 col-md-6 py-3">
          <p>
            In addition, we run several open online educational and community initiatives
            to empower retail traders and investors across the country.
          </p>
          <p>
            At Xenova, we're not just building a trading platform — we're building a
            complete ecosystem for the future of investing. Through our initiatives and
            partnerships, we support fintech innovations that aim to increase
            participation in Indian capital markets. From launching new features to
            refining the user experience, we’re constantly evolving to meet the needs of
            modern traders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
