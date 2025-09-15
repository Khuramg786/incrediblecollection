import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(2);
  const [cartTotal, setCartTotal] = useState(51.16);

  // dropdownData.js
  const Data = [
    {
      title: "WooD Frame ",
      items: ["Thermopol Safety Box", "Metal Pen", "Rolex Cufflinks ", "Wood Keychain"],
    },
    {
      title: "Metal Keychain ",
      items: ["Mate Mug ", "Imp Refilling", "Challa Ring", "Brocken Heart"],
    },
    {
      title: "Imported Wood Pen",
      items: ["Dairy Album", "Tumbler Hot and Cold", "Shirt White polister", "Tree Frame"],
    },
    {
      title: "Mobile case ",
      items: ["Stamp Customized", "Temprature Coffee", "Long Leather Wallet", "Small Mug 60z"],
    },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-dark text-white text-center py-1">
        Tell a friends about Printing Service & get 30% off your next order.
      </div>

      {/* Contact + Settings */}
      <div
        style={{
          background: "linear-gradient(to left, #c9930f, rgba(201,147,15,0))",
        }}
        className="text-white px-3 d-flex justify-content-between align-items-center py-1"
      >
        <Link to="/">
          <img
            src="https://ik.imagekit.io/b6iqka2sz/logo.........png?updatedAt=1757704294568"
            alt="Incredible Collection Logo"
            style={{
              maxHeight: "100px",
              width: "auto",
              marginLeft: "40px",
              cursor: "pointer",
            }}
          />
        </Link>

        <div className="text-dark fw-bold">
          <i className="bi bi-envelope "></i> incrediblecollection0@gmail.com
          &nbsp; | &nbsp;
          <i className="bi bi-telephone"></i> &nbsp;(+92) 3019854185
        </div>

        {/* Right: Icons + Account */}
        <div className="d-flex align-items-center">
          <div className="d-flex ms-3 align-items-center">
            {/* Wishlist */}
            <i className="bi bi-heart me-3 position-relative px-2">
              <span className="badge bg-primary position-absolute top-0 start-100 translate-middle rounded-pill">
                0
              </span>
            </i>

            {/* Refresh */}
            <i className="bi bi-arrow-repeat me-3 position-relative px-2">
              <span className="badge bg-primary position-absolute top-0 start-100 translate-middle rounded-pill">
                0
              </span>
            </i>

            {/* Cart */}
            <i className="bi bi-cart position-relative px-2">
              <span className="badge bg-primary position-absolute top-0 start-100 translate-middle rounded-pill">
                {cartCount}
              </span>
            </i>
          </div>

          {/* Account */}
          <a href="#" className="text-white text-decoration-none px-3">
            <i className="bi bi-person"></i> Account Log in
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{ background: "#b88917" }}
      >
        <div className="container-fluid">
          {/* Browse All Category - Left */}
          <div className="me-4">
            <ul className="navbar-nav">
              <li className="nav-item dropdown position-static">
                <a
                  className="nav-link text-white fs-5 d-flex align-items-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Browse All Category
                  <i className="bi bi-chevron-down ms-4 drop"></i>
                  &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;
                </a>

                {/* Full-Width Dropdown with Only Text */}
                <div
                  className="dropdown-menu mt-0 p-4 shadow-lg"
                  style={{ width: "17%" }}
                >
                  <div className="row">
                    <div className="col-md-3">
                      <h6 className="fw-bold">Printing</h6>
                      <Link className="dropdown-item" to="/Filter">
                        Shirts Printer
                      </Link>
                      <Link className="dropdown-item" to="/Filter">
                        Laptop Sticker
                      </Link>
                      <Link className="dropdown-item" to="/Filter">
                        Phone Sticker
                      </Link>
                      <Link className="dropdown-item" to="/Filter">
                        Diecast Car Metal
                      </Link>
                      <Link className="dropdown-item" to="/Filter">
                        Smart Watches
                      </Link>
                      <Link className="dropdown-item" to="/Filter">
                        Makeup Brush
                      </Link>
                      <Link className="dropdown-item" to="/Filter">
                        Makeup Sponge
                      </Link>
                      <Link className="dropdown-item" to="/Filter">
                        Diecast Car
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Toggle for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Other Menu Links - Right Side */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-1 ">
              <li className="nav-item">
                <a
                  className="nav-link text-white fs-5"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  <span className="badge bg-danger">SALE</span> &nbsp;Products
                  Print<i className="bi bi-chevron-down ms-1 drop"></i>
                </a>
                {/* Dynamic Dropdown using map */}
                <div className="dropdown-menu w-100 mt-0 p-4 shadow-lg">
                  <div className="row">
                    {Data.map((category, index) => (
                      <div className="col-md-3" key={index}>
                        <h6 className="fw-bold">{category.title}</h6>
                        {category.items.map((item, i) => (
                          <Link className="dropdown-item" to="/Filter" key={i}>
                            {item}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li className="nav-item px-3">
                <Link className="nav-link text-white fs-5" to="/Filter">
                  <span className="badge bg-warning text-dark">HOT</span> Makeup
                  Brush <i className="bi bi-chevron-down ms-1 drop"></i>
                </Link>
              </li>

              <li className="nav-item px-3">
                <Link className="nav-link text-white fs-5" to="/Filter">
                  <span className="badge bg-success">NEW</span> Diecast Car{" "}
                  <i className="bi bi-chevron-down ms-1 drop"></i>
                </Link>
              </li>

              <li className="nav-item px-3">
                <Link className="nav-link text-white fs-5" to="/Filter">
                  Contact Us
                </Link>
              </li>

              <li className="nav-item px-3">
                <Link className="nav-link text-white fs-5" to="/Filter">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
