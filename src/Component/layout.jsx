import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar/navbar.jsx";
import Footer from "./Footer/Footer.jsx";
export default function Layout() {
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
          borderRadius: "50%",   // Full circle
          width: "60px",         // Equal width & height
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          animation: "bounce 2s infinite"
        }}
      >
        <i className="bi bi-whatsapp" style={{ fontSize: "32px", color: "white" }}></i>
      </a>
      {/* <h2>My Website</h2> */}
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}
