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
      img: "https://photos3.walmart.com/prism/themes/wmceramicmugs-21.themepack/wmt_weloveyoudad_7x3_11oz_bluehandle.mug/_hd_product_01.jpg", 
      title: "Cup Print",
      countity: "(14 items)"
    },
    {
      img: "https://3.imimg.com/data3/XK/CJ/MY-3357813/2-500x500.jpg",
      title: "Shirts Printer",
      countity: "(20 items)"
    },
    {
      img: "https://m.media-amazon.com/images/I/415Y2EKHxWL._AC_.jpg",
      title: "Laptop Sticker",
      countity: "(21 items)"
    },
     {
      img: "https://bsg-i.nbxc.com/product/0a/c2/a4/2cb9227c4d0f35a67c62048043.jpg@4e_500w_500h.src%7C95Q.webp",
      title: "Phone Sticker",
      countity: "(20 items)"
    },
    {
      img: "https://m.media-amazon.com/images/I/81byuBO9qmL._UF1000,1000_QL80_.jpg",
      title: "Diecast Car Metal",
      countity: "(18 items)"
    },{
      img: "https://m.media-amazon.com/images/I/813rDc56ZRL._UF1000,1000_QL80_.jpg",
      title: "Smart Watches",
      countity: "(13 items)"
    },{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOp9gnX-hRBlZvuJigHZpMiKcPxtSCPHGSoyqJ74a0DSqQruJFp9Tc86H0qgVW7l2YJ0&usqp=CAU",
      title: "Cosmetics",
      countity: "(11 items)"
    },
    {
      img: "https://m.media-amazon.com/images/I/71AEbODrs9L._SL1500_.jpg",
      title: "Makeup Brush",
      countity: "(13 items)"
    },{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvOSTztPqHKysjg5oRDJ3v8cQDpmtRyz00w&s",
      title: "Makeup Sponge ",
      countity: "(12 items)"
    },{
      img: "https://www.dturman.com/cdn/shop/files/photo1691770537_15_-PhotoRoom.jpg?v=1756302978&width=1946", 
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
    shop: "Proper Brand Design Is Important",
    price: 0.0,
    discount: "-$00.00",
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://cobranded.com.au/wp-content/uploads/2024/07/promotional-products-sydney.jpg",
  },
  {
    id: 2,
    shop: "Laptop & Keyboard Stickers Model Persian",
    price: 0.0,
    oldPrice: 24,
    discount: "-8%",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukzTKQ7iLSCw5rp1_98W50pecBJp4Y2IvWaF4RTeDHBaGlVGn2p_BxwEY_IvlAVWbvzo&usqp=CAU",
  },
  {
    id: 3,
    shop: "Iphone Skin Sticker & Iron On Patch ",
   price: 0.0,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://ae-pic-a1.aliexpress-media.com/kf/Ha4c74b4fe6b04884b83ae0a077073cfc0/YCSTICKER-Luxury-Protective-3M-Vinyl-Skin-Decal-Wrap-Film-Premium-Ultra-Slim-Cover-Back-Sticker-3D.jpg_640x640Q90.jpg_.webp",
  },
  {
    id: 4,
    shop: "GFTBX Personalized Photo Wooden Diary",
    // name: "Noise ColorFit Ultra 3 Bluetooth Calling Smartwatch",
 price: 0.0,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://i.etsystatic.com/24564691/r/il/86f6fb/3119327852/il_570xN.3119327852_5g14.jpg",
  },
  {
    id: 5,
    shop: "Rolex crown bracelet new arrivals",
    name: "LG 8 kg Fully Automatic Top Load Washing Machine",
    price: 0.0,
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://digidukaan.s3.ap-south-1.amazonaws.com/113294346481790094.jpg",
  },
  {
    id: 6,
    shop: "High Quality Printing Services ",
    // name: "iPhone 13, 128GB, Pink - Unlocked Premium",
    price: 0.0,
    discount: "-$6.00",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://addhouse.ae/wp-content/uploads/2024/04/website-banner-1.webp",
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
    shop: "Diecast 1/24 Scale Cars",
    price: 0.0,
    discount: "-$5.00",
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://dukaan.b-cdn.net/700x700/webp/media/ad31ee9b-a372-49c0-9c75-fa38714b4587.jpg",
  },
  {
    id: 2,
    shop: "Die-cast Metal",
    price: 0.0,
    oldPrice: 24,
    discount: "-8%",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://m.media-amazon.com/images/I/71OvY43aCtL.jpg",
  },
  {
    id: 3,
    shop: "KIDAMI Die Cast Metal ",
    price: 0.0,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://images-na.ssl-images-amazon.com/images/I/81aY8FT25lL.jpg",
  },
  {
    id: 4,
    shop: "Jada 2012 Diecast Car",
    name: "Noise ColorFit Ultra 3 Bluetooth Calling Smartwatch",
    price: 0.0,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://i.ebayimg.com/images/g/9XwAAOSwFLNnLZmp/s-l1200.jpg",
  },
  {
    id: 5,
    shop: "BDTCTK Off-Road  Diecast",
    name: "LG 8 kg Fully Automatic Top Load Washing Machine",
    price: 0.0,
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://m.media-amazon.com/images/I/71sisLAniwL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    shop: "Apple iphone 13",
    name: "iPhone 13, 128GB, Pink - Unlocked Premium",
    price: 0.0,
    discount: "-$6.00",
    rating: 3,
     stock: false, // ✅ In Stock
    img: "https://m.media-amazon.com/images/I/61AEjPn60rL._UF1000,1000_QL80_.jpg",
  },
];
   const fourthdroducts = [
  {
    id: 1,
    shop: " Big Size Makeup Brushes",
    price: 0.0,
    discount: "-$5.00",
    rating: 2,
     stock: true, // ✅ In Stock
    img: "https://ae01.alicdn.com/kf/Sb602d421d6c8495296c163b5ee809d74h.jpg_640x640q90.jpg",
  },
  {
    id: 2,
    shop: "Silicone Face Mask Brush ",
    price: 0.0,
    oldPrice: 24,
    discount: "-8%",
    rating: 3,
     stock: true, // ✅ In Stock
    img: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/j/09/dd4c0869-8510-4ec2-bde1-5c157d7d26c0.jpg",
  },
  {
    id: 3,
    shop: "20Pcs Makeup Brushes ",
    price: 225,
    rating: 5,
     stock: true, // ✅ In Stock
    img: "https://glamwarehouse.com.au/cdn/shop/files/S79c3c16078014f90bb83a2c69d2e2e1bz.webp?v=1713152307&width=1946",
  },
  {
    id: 4,
    shop: " Sparkling Makeup Brush",
    price: 0.0,
    rating: 4,
     stock: true, // ✅ In Stock
    img: "https://m.media-amazon.com/images/I/71gDLsBlp2S._SL1500_.jpg",
  },
  {
    id: 5,
    shop: "Makeup Brush Set Black Cone",
    price: 0.0,
    rating: 2,
     stock: true, // ✅ In Stock
    img: "https://images-na.ssl-images-amazon.com/images/I/41hWg5AV6lL.jpg",
  },
  {
    id: 6,
    shop: "MODA  Full Face 13-Piece",
    name: "iPhone 13, 128GB, Pink - Unlocked Premium",
    price: 194,
    discount: "-$6.00",
    rating: 3,
     stock: false, // ✅ In Stock
    img: "https://images-na.ssl-images-amazon.com/images/I/71GsZ1+GUuL._AC_UL600_SR600,600_.jpg",
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
          <h6 className="text-muted">{product.shop}</h6>

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

            <Link to="/Checkout" state={{ product }}>
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
          <h6 className="text-muted">{product.shop}</h6>

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

            <Link to="/Checkout" state={{ product }}>
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
          src="https://m.media-amazon.com/images/I/51Xu56nJr4L._UF1000,1000_QL80_.jpg"
          alt="Controller"
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
          src="https://colortrack.ae/wp-content/uploads/2020/02/gift.png"
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
          height: "350px", // fixed card height
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
            height: "160px", // fixed image height
            objectFit: "contain", // keeps aspect ratio (no stretch)
          }}
        />

        <div
          className="card-body text-center"
          style={{ flex: "1 1 auto", overflow: "hidden" }}
        >
          <h6 className="text-muted">{product.shop}</h6>

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
            className={`badge ${product.stock ? "bg-success" : "bg-danger"}`}
          >
            {product.stock ? "In Stock" : "Out of Stock"}
          </span>

          {/* Price + Order Now */}
          <div className="d-flex justify-content-between align-items-center mt-2">
            <h6 className="fw-bold text-black mb-0">
              ${product.price.toFixed(2)}
            </h6>

            <Link to="/Checkout" state={{ product }}>
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
