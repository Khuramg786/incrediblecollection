import React, { useEffect, useState } from "react";
import "./Deal.css";

const Deail = () => {
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
        "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-New%20metal%20boday%20model%20car.jpg?updatedAt=1758751376003",
      button: "ADD TO CART",
    },
    {
      id: 2,
      title: "Promotional Gifts,Promotional ",
      oldPrice: 878,
      newPrice: 0.0,
      discount: "-12%",
      rating: 3,
      stock: 122,
      image:
        "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Promotional%20fashion%20sale%20cap%20set.avif?updatedAt=1758751472854",
      button: "ADD TO CART",
    },
    {
      id: 3,
      title: "Promotional Gifts Printing Services",
      oldPrice: 200,
      newPrice: 0.0,
      discount: "-6.0%",
      rating: 5,
      stock: 124,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/1/375860249/UZ/QY/BE/118563100/promotional-gifts-printing-services.jpg",
      button: "ADD TO CART",
    },
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 705,
    hours: 10,
    minutes: 15,
    seconds: 0,
  });

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // WhatsApp handler
  const handleWhatsApp = (product) => {
    const phoneNumber = "+923019854185";
    const message = `Hello, I want to order: ${product.title} - Price: $${product.newPrice}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mx-4 my-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h3>Deal Of The Day</h3>
        <hr className="border-primary border-2 flex-grow-1 mx-2" />
        <a href="#" className="fw-bold text-decoration-none">
          ALL SALE PRODUCTS
        </a>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4">
            <div className="deal-card shadow-lg h-100">
              <div className="d-flex flex-column flex-sm-row align-items-center h-100">
                {/* Image */}
                <div className="p-3 text-center">
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

                {/* Content */}
                <div className="p-3 text-center text-sm-start">
                  <h6 className="card-title">{product.title}</h6>
                  <div
                    className="mb-2 fs-4 fw-bold"
                    style={{ color: "#ffc107" }}
                  >
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </div>

                  <p className="mb-1">
                    <del className="text-muted">{product.oldPrice}</del>{" "}
                    <span className="text-primary fw-bold">
                      Rs.{product.newPrice}
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
                  <div className="d-flex justify-content-center justify-content-sm-start gap-1 mb-2">
                    <div className="time-box">{timeLeft.days}d</div>
                    <div className="time-box">{timeLeft.hours}h</div>
                    <div className="time-box">{timeLeft.minutes}m</div>
                    <div className="time-box">{timeLeft.seconds}s</div>
                  </div>

                  {/* WhatsApp Button */}
                  <button
                    className="btn btn-dark w-100 fw-bold"
                    onClick={() => handleWhatsApp(product)}
                  >
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
