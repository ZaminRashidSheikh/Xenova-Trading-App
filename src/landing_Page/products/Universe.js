import React from "react";
import { Link } from 'react-router-dom';
function Universe() {
  return (
    <div className="container mt-5 p-2">
      <div className="row text-center align-items-center">
        {/* Heading */}
        <div className="col-12 mb-4">
          <h1>The Xenova Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        {/* Platforms */}
        <div className="col-4 p-3">
          <img src="media/images/Weather-App.png" style={{ width: "30%" }} alt="Weather App" className="img-fluid" />
          <p className="text-muted">
            At Xenova, we're not just building a trading platform — we're building other applications like Web Weather Application. 
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="media/images/Facial_Recog.png" style={{ width: "30%" }} alt="Facial Recog" />
          <p className="text-muted">
            Our intelligent system leverages advanced machine learning algorithms to identify and authenticate users through facial data
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="media/images/trading7.png" style={{ width: "30%" }} alt="Trading 7" className="img-fluid" />
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="media/images/trading3.jpg" style={{ width: "30%" }} alt="Tijori" />
          <p className="text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="media/images/trading2.jpg" style={{ width: "30%" }} alt="Streak 2" />
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 p-3">
          <img src="media/images/trading4.avif" style={{ width: "30%" }} alt="Ditto" />
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Button */}

        <div className="col-12 mt-4">
          <Link to='/signup'>
          <button className="btn btn-success px-4 py-2 fs-5">Sign Up</button> </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
