import React from 'react';

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      {/* Support Header with Flexbox */}
      <div className="row px-5 pt-5 mb-0">
        <div id="supportWrapper" className="d-flex justify-content-between align-items-center w-100">
          <h4 className="fs-5 fs-md-3" style={{ fontWeight: "bold" }}>
            Support Portal
          </h4>
          <a href="">Track Tickets</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="row p-5 mx-5">
        {/* Left Column */}
        <div className="col-12 col-md-6 p-4">
          <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder='Example @zamin' />
          <br /><br />
          <a href=''>Track account opening</a> <br />
          <a href=''>Track segment activation</a> <br />
          <a href=''>Intraday margins Kite user manual</a>
        </div>

        {/* Right Column */}
        <div className="col-12 col-md-6 p-4">
          <h1 className='fs-4'>Featured</h1>
          <ol>
            <li><a href=''>Current Takeovers</a></li>
            <li><a href=''>Latest Intraday leverages</a></li>
          </ol>
        </div>
      </div>

    </section>
  );
}

export default Hero;
