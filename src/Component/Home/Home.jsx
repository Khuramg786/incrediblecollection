import React, { useEffect, useState } from 'react';
import Banner from "../Bannar/Bannar.jsx";
import Deail from "../Deailpage/Deail.jsx";
import axios from 'axios';
import { Link } from "react-router-dom";
import Filter from '../Filter/Filter.jsx';
import Checkout from '../Checkout/Checkout.jsx';
import "./Home.css"; 
const Home = () => {
  const shopbycategory = [
    {
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-MUG.jpg?updatedAt=1758748953499", 
      title: "MUG Print",
      countity: "(14 items)"
    },
    {
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Shirt.jpg?updatedAt=1758749400477",
      title: "Shirts Printer",
      countity: "(20 items)"
    },
    {
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Laptop%20Cover.jpg?updatedAt=1758749284098",
      title: "Laptop Sticker",
      countity: "(21 items)"
    },
     {
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-phone%20cover%20.png?updatedAt=1758749550916",
      title: "Phone Sticker",
      countity: "(20 items)"
    },
    {
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Die%20cast%20car.jpg?updatedAt=1758749637928",
      title: "Diecast Car Metal",
      countity: "(18 items)"
    },{
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-smart%20watches.jpg?updatedAt=1758749695177",
      title: "Smart Watches",
      countity: "(13 items)"
    },{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOp9gnX-hRBlZvuJigHZpMiKcPxtSCPHGSoyqJ74a0DSqQruJFp9Tc86H0qgVW7l2YJ0&usqp=CAU",
      title: "Cosmetics",
      countity: "(11 items)"
    },
    {
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-makeup%20brush.jpg?updatedAt=1758749848208",
      title: "Makeup Brush",
      countity: "(13 items)"
    },{
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-makup%20spon.jpeg?updatedAt=1758750052825",
      title: "Makeup Sponge ",
      countity: "(12 items)"
    },{
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Die-car%20metal.jpg?updatedAt=1758750149289", 
      title: "Diecast Car",
      countity: "(14 items)"
    }
  ];
  const product = [
    {
      title: "Latest Custom Printing ",
      price: "$10.00",
      img: "https://5.imimg.com/data5/SELLER/Default/2021/5/DD/DF/FB/13591262/t-shirt-and-mug-printing-250x250.png",
     
         bg: "rgb(136, 163, 128)", // green
    },
    {
      title: "Classic Diecast Car Collection",
      price: "$.27",
      img: "https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-tesla-model-s-red-transparent-background-png-image_10337020.png",
      bg: "rgb(195, 43, 55)", // red
    },
    {
      title: "Big Discounts on Cosmetic ",
      price: "$178.00",
      img: "https://png.pngtree.com/png-clipart/20241024/original/pngtree-luxury-cosmetic-products-illustration-free-photo-png-image_16480005.png",
     bg: "rgb(113, 71, 181)", // purple
    },
  ];
  const secondproducts = [
  {
    id: 1,
    name: "Proper Brand Design Is Important",
    price: 0.0,
    discount: "-$00.00",
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-printing%20prodcut.jpg?updatedAt=1758750352594",
  },
  {
    id: 2,
    name: "Laptop & Keyboard Stickers Model Persian",
    price: 0.0,
    oldPrice: 24,
    discount: "-8%",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-laptop%20cover%20best.jpeg?updatedAt=1758750404368",
  },
  {
    id: 3,
    name: "Iphone Skin Sticker & Iron On Patch ",
   price: 0.0,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-mobile%20cover.avif?updatedAt=1758750464741",
  },
  {
    id: 4,
    name: " Wooden Dairy  Personalized Photo "  ,
 price: 5.28,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-wooden%20dairy.webp?updatedAt=1758750516279",
  },
  {
    id: 5,
    name: "Rolex crown bracelet new arrivals",
    price: 0.0,
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-braslit.jpg?updatedAt=1758750571478",
  },
  {
    id: 6,
    name: "High Quality Printing Services ",
    price: 0.0,
    discount: "-$6.00",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-priting%20prodcuts.webp?updatedAt=1758750644753",
  },
];
   const features = [
    {
      icon: "bi-truck",
      title: "Free Shipping",
      subtitle: "For all Orders Over $100",
    },
    {
      icon: "bi-arrow-repeat",
      title: "30 Days Returns",
      subtitle: "For an Exchange Product",
    },
    {
      icon: "bi-wallet2",
      title: "Offers And Discounts",
      subtitle: "Payment Cards Accepted",
    },
    {
      icon: "bi-gift",
      title: "Special Gifts",
      subtitle: "Contact us Anytime",
    },
    {
      icon: "bi-headset",
      title: "Support 24/7",
      subtitle: "Contact us Anytime",
    },
  ];
 const thirdroducts = [
  {
    id: 1,
    name: "Diecast 1/24 Scale Cars",
    price: 0.0,
    discount: "-$5.00",
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-1-Dicast-car.webp?updatedAt=1758750698723",
  },
  {
    id: 2,
    name: "Die-cast Metal",
    price: 0.0,
    oldPrice: 24,
    discount: "-8%",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-2-Dicast-car.webp?updatedAt=1758750779525",
  },
  {
    id: 3,
    name: "KIDAMI Die Cast Metal ",
    price: 0.0,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-KIDAMI%20Die%20Cast%20Metal.jpg?updatedAt=1758750841663",
  },
  {
    id: 4,
    name: "Jada 2012 Diecast Car",
    price: 0.0,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Jada%202012%20Diecast%20Car.jpg?updatedAt=1758750907479",
  },
  {
    id: 5,
    name: "BDTCTK Off-Road  Diecast",
    price: 0.0,
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-BDTCTK%20Off-Road%20%20Diecast.jpg?updatedAt=1758750969933",
  },
  {
    id: 6,
    name: "Best Die-cast car",
    price: 0.0,
    discount: "-$6.00",
    rating: 3,
     stock: false, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-last.jpg?updatedAt=1758751053068",
  },
];
   const fourthdroducts = [
  {
    id: 1,
    name: " Big Size Makeup Brushes",
    price: 0.0,
    discount: "-$5.00",
    rating: 2,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-1pcs%20Big%20size%20makeup%20brushes.webp?updatedAt=1758751817122",
  },
  {
    id: 2,
    name: "Silicone Face Mask Brush ",
    price: 0.0,
    oldPrice: 24,
    discount: "-8%",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Silicone%20face%20bask%20brush%20for%20smooth%20skin.jpg?updatedAt=1758751896623",
  },
  {
    id: 3,
    name: "20Pcs Makeup Brushes ",
    price: 225,
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-%20best%20bursh.webp?updatedAt=1758751947528",
  },
  {
    id: 4,
    name: " Sparkling Makeup Brush",
    price: 0.0,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-%20Sparkling%20Makeup%20Brush.jpg?updatedAt=1758751999027",
  },
  {
    id: 5,
    name: "Makeup Brush Set Black Cone",
    price: 0.0,
    rating: 2,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Makeup%20Brush%20Set%20Black%20Cone.jpg?updatedAt=1758752055577",
  },
  {
    id: 6,
    name: "MODA  Full Face 13-Piece",
    price: 194,
    discount: "-$6.00",
    rating: 3,
     stock: false, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-MODA%20%20Full%20Face%2013-Piece.jpg?updatedAt=1758752129406",
  },
];
const chunkArray = (arr, size) =>
  arr.reduce((chunks, item, i) => {
    if (i % size === 0) chunks.push(arr.slice(i, i + size));
    return chunks;
  }, []);
    

  return (
    <div>


      <Banner />
      
      {/* ----------------------Shop By Category------------------ */}
      <div className="mx-4 my-5">
  <div className="d-flex align-items-center">
    <div>
      <h3 className="fw-bold mb-1">Shop By Category</h3>
      <p style={{ fontSize: "12px", margin: 0 }}>
        (printing, Costmatick, diecast car)
      </p>
    </div>
    <hr className="border-primary border-2 w-50 me-2" />
  </div>

  <div className="row text-center mt-4">
    {shopbycategory.map((item, index) => (
      <div
        key={index}
        className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex flex-column align-items-center"
      >
        <Link to="/Filter">
          <div
            className="rounded-circle border p-3 d-flex justify-content-center align-items-center mx-auto"
            style={{ width: "120px", height: "120px" }}
          >
            <img
              src={item.img}
              className="img-fluid zoom-img"
              alt={item.title}
              style={{ maxHeight: "100px", objectFit: "contain" }}
            />
          </div>
        </Link>
        <h6 className="fw-bold mt-2 mb-1">{item.title}</h6>
        <small className="text-muted d-block">{item.countity}</small>
      </div>
    ))}
  </div>
</div>


        {/* ----------------------3 carde create ------------------ */}
     <div className="mx-4 my-5">
  <div className="row g-3">
    {product.map((item, index) => (
      <div className="col-12 col-sm-6 col-md-4" key={index}>
        <div
          className="d-flex align-items-center rounded-3 p-4 text-white h-100"
          style={{ backgroundColor: item.bg, minHeight: "220px" }}
        >
          {/* Left image */}
          <div style={{ flex: "0 0 100px" }}>
            <img
              src={item.img}
              alt={item.title}
              className="img-fluid zoom-img"
              style={{
                maxHeight: "140px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right content */}
          <div className="ms-3">
            <h5 className="fw-bold">{item.title}</h5>
            <p className="mb-1">
              From <span className="fw-bold">{item.price}</span>
            </p>
            <a
              href="#"
              className="fw-bold text-white text-decoration-none"
            >
              <span
                className="btn btn-dark btn-sm rounded-circle me-2"
                style={{ width: "32px", height: "32px", padding: "0" }}
              >
                <i className="bi bi-arrow-right fs-5"></i>
              </span>
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


  {/* ----------------------Custom Printing Products------------------ */}
        <div className="mx-4 my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold mb-4">Custom Printing Products</h3>
       <hr className="border-primary border-2 w-50" />
        <a href="#" className="text-decoration-none fw-bold small">
          ALL NEW PRODUCTS
        </a>
      </div>
  <div className="row g-3">
  {secondproducts.map((product) => (
    <div className="col-md-4 col-lg-2" key={product.id}>
      <div className="card h-100 shadow-sm overflow-hidden">
        {product.discount && (
          <span className="badge bg-danger position-absolute m-2">
            {product.discount}
          </span>
        )}

        <img
          src={product.img}
          className="card-img-top p-3 zoom-img"
          alt={product.name}
        />

        <div className="card-body text-center">
          <h6 className="text-muted">{product.name}</h6>

          {/* ⭐ Rating */}
          <div className="mb-2">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`bi ${
                  i < product.rating
                    ? "bi-star-fill text-warning"
                    : "bi-star text-muted"
                }`}
              ></i>
            ))}
          </div>

          {/* ✅ Stock Status Badge */}
    <span className={`badge ${product.stock ? "bg-success" : "bg-danger"}`}>
      {product.stock ? "In Stock" : "Out of Stock"}
    </span>

          {/* Price + Order Now */}
          <div className="d-flex justify-content-between align-items-center mt-2">
            <h6 className="fw-bold text-black mb-0">
              ${product.price.toFixed(2)}
            </h6>

            <Link
                    to={`/checkout/${product.name
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    state={{ product }}
                  >
                    <button
                      className="btn btn-dark btn-sm fw-bold"
                      disabled={!product.stock}
                    >
                      Order Now
                    </button>
                  </Link>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



    </div>
 {/* ----------------------Deleviry card------------------ */}

<div className="text-white rounded p-4 my-4"  style={{background:"#c9930f"}}>
  <div className="d-flex justify-content-between text-center flex-wrap">
    {features.map((item, index) => (
      <div className="flex-fill px-3" key={index}>
        <i className={`bi ${item.icon} fs-2 mb-2`}></i>
        <h6 className="fw-bold mb-1">{item.title}</h6>
        <p className="mb-0 small">{item.subtitle}</p>
      </div>
    ))}
  </div>
</div>
{/* -----------------------------Big Discounts on Cosmetic Products---------------- */}
<div className="mx-4 my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold mb-4">Big Cosmetic Products</h3>
       <hr className="border-primary border-2 w-50" />
        <a href="#" className="text-decoration-none fw-bold small">
          ALL NEW PRODUCTS
        </a>
      </div>
  <div className="row g-3">
  {fourthdroducts.map((product) => (
    <div className="col-md-4 col-lg-2" key={product.id}>
      <div className="card h-100 shadow-sm overflow-hidden">
        {product.discount && (
          <span className="badge bg-danger position-absolute m-2">
            {product.discount}
          </span>
        )}

        <img
          src={product.img}
          className="card-img-top p-3 zoom-img"
          alt={product.name}
        />

        <div className="card-body text-center">
          <h6 className="text-muted">{product.name}</h6>

          {/* ⭐ Rating */}
          <div className="mb-2">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`bi ${
                  i < product.rating
                    ? "bi-star-fill text-warning"
                    : "bi-star text-muted"
                }`}
              ></i>
            ))}
          </div>

          {/* ✅ Stock Status Badge */}
    <span className={`badge ${product.stock ? "bg-success" : "bg-danger"}`}>
      {product.stock ? "In Stock" : "Out of Stock"}
    </span>

          {/* Price + Order Now */}
          <div className="d-flex justify-content-between align-items-center mt-2">
            <h6 className="fw-bold text-black mb-0">
              ${product.price.toFixed(2)}
            </h6>

            <Link
                    to={`/checkout/${product.name
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    state={{ product }}
                  >
                    <button
                      className="btn btn-dark btn-sm fw-bold"
                      disabled={!product.stock}
                    >
                      Order Now
                    </button>
                  </Link>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
{/* -------------------------- 2 main card bannar ------------------------- */}
<div className="mx-4 my-5">
  <div className="row g-3">
    {/* Promo Card 1 */}
    <div className="col-12 col-md-6">
      <div
        className="d-flex flex-column flex-sm-row align-items-center rounded p-4 h-100"
        style={{ backgroundColor: "#9160cc" }}
      >
        {/* Image */}
        <img
          src="https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Popular%20Bursh.jpg?updatedAt=1758752241812"
          alt="Popular Bursh "
          className="img-fluid rounded mb-3 mb-sm-0 me-sm-3"
          style={{
            maxWidth: "45%",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {/* Text Content */}
        <div className="text-white text-center text-sm-start">
          <h5 className="fw-bold fs-4 fs-md-3">
            Start Makers Makeup Brush Set Glamour
          </h5>
          <p className="mb-1">
            From <span className="fw-bold fs-5">$00.00</span>
          </p>
          <a href="#" className="btn fs-5 fw-bold text-decoration-none text-white">
            <i className="bi bi-arrow-right-circle-fill me-1"></i> SHOP NOW
          </a>
        </div>
      </div>
    </div>

    {/* Promo Card 2 */}
    <div className="col-12 col-md-6">
      <div
        className="d-flex flex-column flex-sm-row align-items-center rounded p-4 h-100"
        style={{ backgroundColor: "#f34c2b" }}
      >
        {/* Image */}
        <img
          src="https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-%20GIFT%20&%20PROMOTIONAL%20ITEMS%20PRINTING.png?updatedAt=1758752321739"
          alt="Gift Items"
          className="img-fluid rounded mb-3 mb-sm-0 me-sm-3"
          style={{
            maxWidth: "45%",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {/* Text Content */}
        <div className="text-white text-center text-sm-start">
          <h5 className="fw-bold fs-4 fs-md-3">
            GIFT & PROMOTIONAL ITEMS PRINTING
          </h5>
          <p className="mb-1">
            From <span className="fw-bold fs-5">$00.00</span>
          </p>
          <a href="#" className="btn fs-5 fw-bold text-decoration-none text-white">
            <i className="bi bi-arrow-right-circle-fill me-1"></i> SHOP NOW
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ----------------------------------------Diecast Car---------------- */}
 <div className="mx-4 my-4">
      {/* ----------------------------------------Diecast Car---------------- */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold mb-4">Diecast Car Products</h3>
        <hr className="border-primary border-2 w-50" />
        <a href="#" className="text-decoration-none fw-bold small">
          ALL NEW PRODUCTS
        </a>
      </div>

      <div className="row g-3">
        {thirdroducts.map((product) => (
          <div className="col-md-4 col-lg-2" key={product.id}>
            <div
              className="card h-100 shadow-sm overflow-hidden"
              style={{
                height: "350px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {product.discount && (
                <span className="badge bg-danger position-absolute m-2">
                  {product.discount}
                </span>
              )}

              <img
                src={product.img}
                className="card-img-top p-3"
                alt={product.name}
                style={{
                  height: "160px",
                  objectFit: "contain",
                }}
              />

              <div
                className="card-body text-center"
                style={{ flex: "1 1 auto", overflow: "hidden" }}
              >
                <h6 className="text-muted">{product.name}</h6>

                {/* ⭐ Rating */}
                <div className="mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bi ${
                        i < product.rating
                          ? "bi-star-fill text-warning"
                          : "bi-star text-muted"
                      }`}
                    ></i>
                  ))}
                </div>

                {/* ✅ Stock Status Badge */}
                <span
                  className={`badge ${
                    product.stock ? "bg-success" : "bg-danger"
                  }`}
                >
                  {product.stock ? "In Stock" : "Out of Stock"}
                </span>

                {/* Price + Order Now */}
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <h6 className="fw-bold text-black mb-0">
                    ${product.price.toFixed(2)}
                  </h6>

                  {/* ✅ Dynamic URL with slug */}
                  <Link
                    to={`/checkout/${product.name
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    state={{ product }}
                  >
                    <button
                      className="btn btn-dark btn-sm fw-bold"
                      disabled={!product.stock}
                    >
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
<Deail/>
    </div>
  );
};
export default Home;
