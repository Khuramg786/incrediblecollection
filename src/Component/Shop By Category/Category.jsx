import React from "react";
import { Link } from "react-router-dom";
const  Category =()=>{
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
    return(
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
       <div className="row text-center mt-4 d-flex flex-wrap justify-content-center">
  {shopbycategory.map((item, index) => (
    <div
      key={index}
      className="mb-4"
      style={{
        flex: "0 0 calc(100% / 10)", // exactly 7 items per row
        maxWidth: "calc(100% / 7)",
      }}
    >
       <Link to="/Filter" >
      <div
        className="rounded-circle border p-3 d-flex justify-content-center align-items-center mx-auto"
        style={{ width: "120px", height: "120px" }}
      >
        <img src={item.img} className="img-fluid zoom-img" alt={item.title} />
      </div>
</Link>
      <h6 className="fw-bold mt-2 mb-1">{item.title}</h6>
      <small className="text-muted d-block">{item.countity}</small>
    </div>
  ))}
</div>
      </div>
    )
}
export default Category;