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
      countity: "(14 items)",
          link: "/Filter", 
    },
    {
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Shirt.jpg?updatedAt=1758749400477",
      title: "Shirts Printer",
      countity: "(20 items)",
          link: "/Filter", 
    },
    {
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Laptop%20Cover.jpg?updatedAt=1758749284098",
      title: "Laptop Sticker",
      countity: "(21 items)",
          link: "/Filter", 
    },
     {
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-phone%20cover%20.png?updatedAt=1758749550916",
      title: "Phone Sticker",
      countity: "(20 items)",
          link: "/Filter"
    },
    {
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Tree%20Frames-2000.jpeg?updatedAt=1758443173160",
      title: "TREE FRAME",
      countity: "(18 items)",
          link: "/Filter"
    },{
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Glass%20Shields.png?updatedAt=1758444793845",
      title: "Glass Shield",
      countity: "(13 items)",
           link: "/Filter",
    },{
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Cap%20Vip%20DTF%20Print.jpeg?updatedAt=1758445159890",
      title: "Cap VIP Print",
      countity: "(11 items)",
            link: "/Filter",
    },
    {
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Puzzle%20Game%20Customized.jpg?updatedAt=1758445835091",
      title: "Puzzle Game ",
      countity: "(13 items)",
          link: "/Filter",
    },{
      img: "https://5.imimg.com/data5/SELLER/Default/2022/11/FQ/EV/EF/41051893/corporate-wooden-dairy-500x500.jpg",
      title: "Wooden Diary ",
      countity: "(12 items)",
          link: "/Filter",
    },{
      img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Mobile%20Case-900.png?updatedAt=1758438498738", 
      title: "Mobile Case",
      countity: "(14 items)",
          link: "/Filter", 
    }
  ];
  const product = [
    {
      title: "Latest Custom Printing ",
      price: "$1.6",
      img: "https://5.imimg.com/data5/SELLER/Default/2021/5/DD/DF/FB/13591262/t-shirt-and-mug-printing-250x250.png",
     
         bg: "rgb(136, 163, 128)", // green
    },
    {
      title: "Custom T-Shirts Collection",
      price: "$0.8",
      img: "https://static-prod.logosoftwear.com/img/landing-pages/tshirts/custom-short-sleeve-t-shirts-1x.png",
      bg: "rgb(195, 43, 55)", // red
    },
    {
      title: " Branded Corporate Gifts ",
      price: "$0.88",
      img: "https://www.nicepng.com/png/full/766-7662819_promo-branded-corporate-gifts.png",
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
    name: "Calligraphy Metal",
    price: 6372,
    discount: "-$5.00",
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Calligraphy%20Metal.jpg?updatedAt=1758439339594",
  },
  {
    id: 2,
    name: "Flag Office Table",
    price: 650,
    oldPrice: 24,
    discount: "-8%",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Flag%20office%20Table-.png?updatedAt=1758438883256",
  },
  {
    id: 3,
    name: "Customize Name Bracelet",
    price: 720,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://m.media-amazon.com/images/I/51DzuSqqy+L._UY1100_.jpg",
  },
  {
    id: 4,
    name: "Mega Power Light Lamps",
    price: 1800,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://artisticgifts.in/cdn/shop/files/1_ed6844a4-127b-407f-b556-7808ab1154dc.jpg?v=1758998889",
  },
  {
    id: 5,
    name: "Logo Stamp for Business",
    price: 350,
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Stamp%20Customized-0.0.jpg?updatedAt=1758443351190",
  },
  {
    id: 6,
    name: "Temperature Coffee Mug",
    price: 1340
,
    discount: "-$6.00",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Temprature%20Coffee%20Mug%20Customized%20-1500.png?updatedAt=1758442622257",
  },
];
   const fourthdroducts = [
  {
    id: 1,
    name: " Customize Wooden Diary",
    price: 1157,
    discount: "-$5.00",
    rating: 2,
     stock: true, // ✅ In Stock
    img: "https://5.imimg.com/data5/SELLER/Default/2022/11/FQ/EV/EF/41051893/corporate-wooden-dairy-500x500.jpg",
  },
  {
    id: 2,
    name: "Wooden Keychain With Name",
    price: 180,
    oldPrice: 24,
    discount: "-8%",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/Inkcreadablecollection(Wood%20Keychain)-200.png?updatedAt=1758435169252",
  },
  {
    id: 3,
    name: "Wooden Pen Stand For Office",
    price: 1345,
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollections-Wood%20pen%20Case%20Customized-%201500.jpg?updatedAt=1758436793024",
  },
  {
    id: 4,
    name: " Customize wooden photo print",
    price: 1430,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://onlineframing.in/cdn/shop/files/91Cn45DcPOL._SX569_ce792210-36cd-4e7a-8257-c4a48f8eaf95.jpg?v=1738562460",
  },
  {
    id: 5,
    name: " Calendar Wooden Pen Stand",
    price: 1330,
    rating: 2,
     stock: true, // ✅ In Stock
    img: "https://5.imimg.com/data5/SELLER/Default/2025/3/498717270/QB/XA/IN/159852611/calendar-wooden-pen-stand-500x500.jpg",
  },
  {
    id: 6,
    name: " Customize MODA Full Face 13-Piece",
    price: 1100,
    discount: "-$6.00",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://helloprint.pk/cdn/shop/files/Logo-Company-Name-Rectangle-Tissue-Box-Covers-Wood-with-tissue_medium.jpg?v=1733502300",
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

  {/* Wrapper for responsiveness */}
  <div className="d-none d-md-block">
    {/* Desktop: Normal Grid */}
    <div className="row text-center mt-4">
      {shopbycategory.map((item, index) => (
        <div
          key={index}
          className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex flex-column align-items-center"
        >
          <Link to={item.link}>
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

  {/* Mobile: Horizontal Scroll */}
  <div className="d-flex d-md-none overflow-auto mt-4 pb-2" style={{ gap: "12px" }}>
    {shopbycategory.map((item, index) => (
      <div
        key={index}
        className="flex-shrink-0 d-flex flex-column align-items-center"
        style={{ width: "140px" }}
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
        <h6 className="fw-bold mt-2 mb-1 text-center">{item.title}</h6>
        <small className="text-muted">{item.countity}</small>
      </div>
    ))}
  </div>
</div>


   {/* ----------------------3 Cards Section ------------------ */}
<div className="mx-4 my-5">
  {/* Desktop / Tablet Grid */}
  <div className="row g-3 d-none d-md-flex">
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

  {/* Mobile: Horizontal Scroll Slider */}
  <div className="d-flex d-md-none overflow-auto g-3 pb-2" style={{ gap: "12px" }}>
    {product.map((item, index) => (
      <div
        key={index}
        className="flex-shrink-0"
        style={{ width: "280px" }} // Fixed card width for slider
      >
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


  {/* ----------------------customized printed products------------------ */}
        <div className="mx-4 my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold mb-4">Customized Printed Products</h3>
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
              Rs.{product.price.toFixed(2)}
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
        <h3 className="fw-bold mb-4"> Customized Wooden Products</h3>
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
              RS.{product.price.toFixed()}
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
          src="https://printo-s3.dietpixels.net/site/20220809_125517202008_aca30d_Drinkwares_4.jpg?quality=70&format=webp&w=1920"
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
        <h3 className="fw-bold mb-4">Modern and Stylish Printing</h3>
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
                    Rs.{product.price.toFixed()}
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
