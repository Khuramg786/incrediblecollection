import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/navbar.jsx";
import Footer from "./Footer/Footer.jsx";

export default function Layout() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup automatically after 1 second
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      title: "Custom Printing Solutions",
      img: "https://sc04.alicdn.com/kf/H8d669624b2e3483d8faf297cce4d3085K.jpg",
      discount: "70% OFF",
    },
    {
      id: 2,
      title: "Classic Diecast Car Collection",
      img: "https://images-na.ssl-images-amazon.com/images/I/81aY8FT25lL.jpg",
      discount: "70% OFF",
    },
    {
      id: 3,
      title: "Best Makeup Brushes",
      img: "https://m.media-amazon.com/images/I/51Xu56nJr4L._UF1000,1000_QL80_.jpg",
      discount: "50% OFF",
    },
  ];

  return (
    <div>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/923019854185"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          right: "70px",
          bottom: "20px",
          zIndex: "1000",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
          animation: "bounce 2s infinite",
          transform: "translateZ(0)",
        }}
      >
        <i
          className="bi bi-whatsapp"
          style={{ fontSize: "32px", color: "white" }}
        ></i>
      </a>

     {showPopup && window.innerWidth >= 768 && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "2000",
      perspective: "1200px", // 3D depth
    }}
  >
    <div
      style={{
        background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
        padding: "25px",
        borderRadius: "16px",
        width: "90%",
        maxWidth: "650px",
        textAlign: "center",
        position: "relative",
        boxShadow:
          "0 20px 40px rgba(0,0,0,0.3), inset 0 -2px 8px rgba(0,0,0,0.1)",
        animation: "popupScale 0.6s ease-out",
      }}
    >
      <button
        onClick={() => setShowPopup(false)}
        style={{
          position: "absolute",
          top: "10px",
          right: "15px",
          background: "transparent",
          border: "none",
          fontSize: "22px",
          fontWeight: "bold",
          cursor: "pointer",
          color: "#444",
        }}
      >
        ✖
      </button>
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold",
          textShadow: "2px 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        🔥 Special Offer – Up to 70% OFF 🔥
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              borderRadius: "12px",
              padding: "15px",
              width: "160px",
              textAlign: "center",
              background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
              boxShadow:
                "6px 6px 12px rgba(0,0,0,0.2), -6px -6px 12px rgba(255,255,255,0.8)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <img
              src={p.img}
              alt={p.title}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            />
            <h4
              style={{
                fontSize: "15px",
                margin: "10px 0",
                fontWeight: "600",
              }}
            >
              {p.title}
            </h4>
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #ff3131, #ff914d)",
                color: "white",
                padding: "6px 12px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "13px",
                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
              }}
            >
              {p.discount}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)}


      <Navbar />
      <Outlet />
      <Footer />

      {/* Keyframes for popup animation */}
      <style>
        {`
          @keyframes popupScale {
            0% { transform: scale(0.7) rotateX(-20deg); opacity: 0; }
            100% { transform: scale(1) rotateX(0deg); opacity: 1; }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-12px); }
            60% { transform: translateY(-6px); }
          }
        `}
      </style>
    </div>
  );
}
