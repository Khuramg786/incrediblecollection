import React, { useEffect, useState } from "react";
import "./Deal.css"; 

const Deail = () => {
  // Product data
  const products = [
    {
      id: 1,
      title: "Diecast 1/24 Scale Cars Pro",
      oldPrice: 900,
      newPrice: 0.0,
      discount: "-10%",
      rating: 5,
      stock: 323,
      image:
        "https://dukaan.b-cdn.net/700x700/webp/media/ad31ee9b-a372-49c0-9c75-fa38714b4587.jpg",
      button: "ADD TO CART",
    },
    {
      id: 2,
      title: "Promotional Gifts,Promotional ",
      oldPrice: 878,
      newPrice: 772.64,
      discount: "-12%",
      rating: 3,
      stock: 122,
      image:
        "https://sc04.alicdn.com/kf/H8d669624b2e3483d8faf297cce4d3085K.jpg",
      button: "ADD TO CART",
    },
    {
      id: 3,
      title: "Full Makeup Kit with Applicator",
      oldPrice: 200,
      newPrice: 194,
      discount: "-$6.00",
      rating: 5,
      stock: 124,
      image:
        "https://m.media-amazon.com/images/I/71gi11m8qHL._SL1500_.jpg",
      button: "ADD TO CART",
    },
  ];

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 705,
    hours: 10,
    minutes: 15,
    seconds: 0,
  });

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-4 my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Deal Of The Day</h3>
         <hr className="border-primary border-2 w-50" />
        <a href="#" className="fw-bold text-decoration-none">
          ALL SALE PRODUCTS
        </a>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="deal-card shadow-lg">
              <div className="row g-0 align-items-center">
                {/* Image on Left */}
                <div className="col-5 text-center p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                  <span className="badge bg-danger mt-2">
                    {product.discount}
                  </span>
                </div>

                {/* Content on Right */}
                <div className="col-7 p-3">
                  <h6 className="card-title">{product.title}</h6>
                  <div className="mb-2 fs-4 fw-bold" style={{color:"#ffc107"}}>
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </div>

                  <p className="mb-1">
                    <del className="text-muted">${product.oldPrice}</del>{" "}
                    <span className="text-primary fw-bold">
                      ${product.newPrice}
                    </span>
                  </p>

                  <p className="mb-1">
                    Available:{" "}
                    <span className="fw-bold text-danger">{product.stock}</span>{" "}
                    items
                  </p>
                  <div className="progress mb-2" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${(product.stock / 400) * 100}%` }}
                    ></div>
                  </div>

                  {/* Countdown */}
                  <div className="d-flex gap-1 mb-2">
                    <div className="time-box">{timeLeft.days}d</div>
                    <div className="time-box">{timeLeft.hours}h</div>
                    <div className="time-box">{timeLeft.minutes}m</div>
                    <div className="time-box">{timeLeft.seconds}s</div>
                  </div>

                  <button className="btn btn-dark w-100 fw-bold">
                    {product.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deail;
