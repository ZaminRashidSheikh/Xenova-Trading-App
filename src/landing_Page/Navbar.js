import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom" style={{ backgroundColor: "#FFF" }}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center ps-3" to="/">
          <img
            src="media/images/Xenova.png"
            alt="Xenova Logo"
            height="70"
            className="me-2"
          />
          <span className="fw-bold fs-4">Xenova</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links + Buttons */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
          {/* Center Nav Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item px-2">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link active" to="/product">Product</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link active" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link active" to="/support">Support</Link>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className=" ms-5 d-flex flex-column flex-lg-row align-items-center text-center gap-2 my-3 my-lg-0">
            <button className="btn btn-outline-secondary btn-sm px-3" onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            {!token ? (
              <>
                <Link className="btn btn-outline-primary btn-sm px-4" to="/login">
                  Login
                </Link>
                <Link className="btn btn-primary btn-sm px-4" to="/signup">
                  Sign Up
                </Link>
              </>
            ) : (
              <button className="btn btn-danger btn-sm px-4" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
