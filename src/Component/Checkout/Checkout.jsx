import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaLock, FaTruck } from "react-icons/fa";
import CartPage from "../Addtocard/Addcard";
const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // get product

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h3 className="text-danger">⚠ No product selected</h3>
        <button
          className="btn btn-primary mt-3 px-4 fw-bold"
          onClick={() => navigate("/")}
        >
          Back to Shop
        </button>
      </div>
    );
  }

  // ✅ If your product has multiple images, use them, else fallback to single
  const images = product.images || [product.img || product.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  // ✅ Discount price
  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 border-0" style={{ borderRadius: "16px" }}>
        <div className="row g-4">
          {/* LEFT: Product Image + Thumbnails */}
          <div className="col-md-6 d-flex">
            {/* Thumbnails */}
            <div className="d-flex flex-column me-3" style={{ gap: "10px", width: "80px" }}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumb ${index + 1}`}
                  className={`img-thumbnail p-1 ${
                    selectedImage === img ? "border border-2 border-success" : ""
                  }`}
                  style={{ cursor: "pointer", height: "70px", width: "70px", objectFit: "contain" }}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-grow-1 text-center">
              <img
                src={selectedImage}
                alt={product.name}
                className="rounded"
                style={{ width: "100%", maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* RIGHT: Product Details */}
          <div className="col-md-6">
            <h2 className="fw-bold">{product.name}</h2>
            <h6 className="text-muted">{product.shop}</h6>

            {/* ⭐ Rating */}
            <div className="mb-2">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`bi ${i < product.rating ? "bi-star-fill text-warning" : "bi-star text-muted"}`}
                ></i>
              ))}
            </div>

            {/* Product info list */}
            <ul className="list-unstyled">
              {product.color && <li><strong>Color:</strong> {product.color}</li>}
              {product.ram && <li><strong>RAM:</strong> {product.ram}</li>}
              <li>
                <strong>Status:</strong>{" "}
                {product.stock ? (
                  <span className="text-success">In Stock ✅</span>
                ) : (
                  <span className="text-danger">Out of Stock ❌</span>
                )}
              </li>
            </ul>

            {/* ✅ Price */}
            <div className="d-flex align-items-center my-3">
              <h3 className="text-success fw-bold mb-0">Rs.{discountedPrice.toFixed()}</h3>
              {product.discount > 0 && (
                <p className="text-decoration-line-through text-muted ms-3 mb-0 fs-5">
                  Rs.{product.price.toFixed()}
                </p>
              )}
            </div>

            {/* Buttons */}
           <div className="d-flex gap-2 mt-4 flex-wrap">
  {/* 🛒 Proceed to Pay */}
  <button
    className="btn btn-success fw-bold w-50 text-truncate"
    style={{ fontSize: "clamp(12px, 2vw, 18px)" }}
    onClick={() => navigate("/CartPage", { state: { product } })}
  >
    <i className="bi bi-cart-check-fill me-2"></i> Proceed to Pay
  </button>

  {/* ⬅ Continue Shopping */}
  <button
    className="btn btn-outline-secondary fw-bold w-50 text-truncate"
    style={{ fontSize: "clamp(12px, 2vw, 18px)" }}
    onClick={() => navigate("/")}
  >
    <i className="bi bi-arrow-left me-2"></i> Continue Shopping
  </button>
</div>


            
<p className="mt-4 small text-muted">
  <FaLock className="me-2" /> 100% Safe Payment | <FaTruck className="ms-2 me-2" /> Fast Delivery
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
