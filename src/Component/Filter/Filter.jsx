import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
// ✅ Sample Products
const productsData = [
  {
    id: 1,
    name: "MUG PRINTING",
    shop: "SEND IMAGES ",
    price: 0.0,
    discount: 10,
    color: "Gray",
    size: "5-6",
    rating: 5,
    stock: true,
    image:
      "https://stationeria.pk/cdn/shop/products/photo-magic-mug_personal_1-600x600_2048x.jpg?v=1594477715",
  },
  {
    id: 2,
    name: "custom screen printed t shirts products",
    shop: "SEND IMAGES",
    price: 0.0,
    discount: 15,
    color: "White",
    size: "5-8",
    rating: 2,
    stock: true,
    image:
      "https://i.ebayimg.com/thumbs/images/g/vJMAAeSwytponf1l/s-l1200.jpg",
  },
  {
    id: 3,
    name: "Brown Corporate Wooden Dairy, For Gifts,",
    shop: "SmartShop",
    price: 0.0,
    discount: 0,
    color: "Black",
    size: "N/A",
    rating: 1,
    stock: true,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/11/FQ/EV/EF/41051893/corporate-wooden-dairy-500x500.jpg",
  },
  {
    id: 4,
    name: "Original Best Bracelet for Unisex Material ",
    shop: "Send Name",
    price: 0.0,
    discount: 0,
    color: "White",
    size: "N/A",
    rating: 6,
    stock: false,
    image:
      "https://customizekaralo.in/cdn/shop/files/Sameer_Silver.webp?v=1751974867",
  },
  {
    id: 5,
    name: "Refand Makeup Brushes",
    shop: "Brush Set 16 Pcs",
    price: 0.0,
    discount: 8,
    rating: 3,
    color: "Gray",
    size: "N/A",
    stock: true,
    image:
      "https://m.media-amazon.com/images/I/513RUgD3FhL.jpg",
  },
  {
    id: 6,
    name: " Buy Ktrs Enterprise Die-Cast Car 1:24 Metal Cars ",
    shop: "Avilable",
    price: 0.0,
    discount: 8,
    color: "White",
    size: "N/A",
    rating: 4,
    stock: true,
    image: "https://www.jiomart.com/images/product/original/rvwakne8uk/ktrs-enterprise-die-cast-car-1-24-metal-cars-alloy-pull-back-car-metal-die-cast-pull-back-with-openable-doors-unbreakable-light-music-car-toys-g-patton-product-images-orvwakne8uk-p606560787-0-202312060321.jpg?im=Resize=(1000,1000)",
  },
  {
    id: 7,
    name: "Ducare Black Pencil Pro ",
    shop: "11-Piece",
    price: 0.0,
    discount: 8,
    color: "Blue",
    size: "N/A",
    rating: 2,
    stock: true,
    image:
      "https://image.cdn.ishopastro.com/eyJidWNrZXQiOiJwcm9kLW1lZGlhLW15c2hvcGFzdHJvLWNvbSIsImtleSI6IjQ2MDY4NzQ3ODY3MDIyMC9tZWRpYS9pbWFnZS9iODM2NDBjODU1MjAzNDE3Njc2MDMwMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjg1MH0sInJvdGF0ZSI6bnVsbH19?w=850",
  },
  {
    id: 7,
    name: "Professional Makeup Brush ",
    shop: "Avilable",
    price: 0.0,
    discount: 8,
    color: "Blue",
    size: "N/A",
    stock: true,
    rating: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVp4Hvvo8riDFJKancpt9mxeo-l0EAu31fw&s",
  },
  {
    id: 7,
    name: "Jessup Vegan Makeup Brushes Set Professional",
    shop: "Available",
    price: 0.0,
    discount: 8,
    color: "Blue",
    size: "N/A",
    rating: 3,
    stock: true,
    image:
      "https://discountstore.pk/cdn/shop/files/71d2qszyr4L.jpg?v=1730980645",
  },
  {
    id: 7,
    name: "Discord Car",
    shop: "Avilable",
    price: 0.0,
    discount: 8,
    color: "Blue",
    size: "N/A",
    rating: 4,
    stock: true,
    image:
      "https://t4.ftcdn.net/jpg/07/42/50/05/360_F_742500551_Ae2dvu7igt9oyf09DxFEfBrXYhuLrq4w.jpg",
  },
  {
    id: 7,
    name: "Toyota Land Cruiser Silver",
    shop: "Avilable",
    price: 0.0,
    discount: 8,
    color: "Blue",
    size: "N/A",
    rating: 5,
    stock: true,
    image:
      "https://atlas-content-cdn.pixelsquid.com/assets_v2/273/2735978488279340733/jpeg-600/G03.jpg?modifiedAt=1",
  },
  {
    id: 8,
    name: "Die-Cast Model Car Silver",
    shop: "Avilable",
    price: 0.0,
    discount: 8,
    color: "Blue",
    size: "N/A",
    rating: 5,
    stock: true,
    image:
      "https://m.media-amazon.com/images/I/51VIh8VrPTL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 9,
    name: "Bestie Toys  Silver",
    shop: "Avilable",
    price: 0.0,
    discount: 8,
    color: "Blue",
    size: "N/A",
    rating: 5,
    stock: true,
    image:
      "https://rukminim2.flixcart.com/image/704/844/xif0q/vehicle-pull-along/8/e/4/1-32-scale-exclusive-alloy-metal-pull-back-die-cast-car-model-original-imah6uffvmjdyytf.jpeg?q=90&crop=false",
  },
   {
    id: 9,
    name: "Sports Toy Car Metal Pull Back Diecast Car",
    shop: "Avilable",
    price: 0.0,
    discount: 8,
    color: "Blue",
    size: "N/A",
    rating: 5,
    stock: true,
    image:
      "https://m.media-amazon.com/images/I/71uIgbr8yEL._UF1000,1000_QL80_.jpg",
  },
     {
    id: 10,
    name: "1:32 Metal Lyka Hypersport Diecast Car",
    shop: "Avilable",
    price: 0.0,
    discount: 8,
    color: "Blue",
    size: "N/A",
    rating: 5,
    stock: true,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/6/426935227/FU/OV/ZV/95601433/1-32-metal-lyka-hypersport-diecast-car-opening-doors-vehicle-toy-car-6-inches-music-and-lights-500x500.jpg",
  },
   {
    id: 11,
    name: "1:32 Metal Lyka Hypersport Diecast Car",
    shop: "Avilable",
    price: 0.0,
    discount: 8,
    color: "Blue",
    size: "N/A",
    rating: 5,
    stock: true,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81aY8FT25lL.jpg",
  },
  
];

const Filter = () => {
  const [filters, setFilters] = useState({
    stock: false,
    color: "",
    size: "",
  });
  const [sort, setSort] = useState("relevance");
  const [openFilter, setOpenFilter] = useState(""); // Track dropdown
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Apply Filters
  const filteredProducts = productsData.filter((product) => {
    if (filters.stock && !product.stock) return false;
    if (filters.color && product.color !== filters.color) return false;
    if (filters.ram && product.size !== filters.size) return false;
    return true;
  });

  // Apply Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "priceLowHigh")
      return (
        a.price - (a.price * a.discount) / 100 -
        (b.price - (b.price * b.discount) / 100)
      );
    if (sort === "priceHighLow")
      return (
        (b.price - (b.price * b.discount) / 100) -
        (a.price - (a.price * a.discount) / 100)
      );
    return 0;
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Toggle dropdown
  const toggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? "" : filterName);
  };

  return (
    <div
      className="container-fluid mt-3"
      style={{ minHeight: "100vh", background: "#fdfdfd" }}
    >
      <div className="row">
        {/* Sidebar Filters */}
        <div
          className="col-md-3 p-3 d-flex flex-column"
          style={{
            background: "linear-gradient(145deg, #ffffff, #f3f3f3)",
            borderRadius: "15px",
            boxShadow: "8px 8px 20px #d1d9e6, -8px -8px 20px #ffffff",
            minHeight: "85vh",
            position: "relative",
          }}
        >
          <h5 className="mb-3">Filter By</h5>

          {/* Availability */}
          <div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleFilter("stock")}
            >
              <h6 className="mb-0">Availability</h6>
              {openFilter === "stock" ? <FaMinus /> : <FaPlus />}
            </div>
            {openFilter === "stock" && (
              <div className="mt-2">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="inStock"
                    checked={filters.stock}
                    onChange={(e) =>
                      setFilters({ ...filters, stock: e.target.checked })
                    }
                  />
                  <label className="form-check-label" htmlFor="inStock">
                    In Stock
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Color */}
          <div className="mt-3">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleFilter("color")}
            >
              <h6 className="mb-0">Color</h6>
              {openFilter === "color" ? <FaMinus /> : <FaPlus />}
            </div>
            {openFilter === "color" && (
              <div className="mt-2">
                {["Gray", "White", "Black", "Blue"].map((c) => (
                  <div className="form-check" key={c}>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="color"
                      checked={filters.color === c}
                      onChange={() => setFilters({ ...filters, color: c })}
                    />
                    <label className="form-check-label">{c}</label>
                  </div>
                ))}
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="color"
                    checked={filters.color === ""}
                    onChange={() => setFilters({ ...filters, color: "" })}
                  />
                  <label className="form-check-label">All</label>
                </div>
              </div>
            )}
          </div>

          {/* RAM */}
          <div className="mt-3">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleFilter("ram")}
            >
              <h6 className="mb-0">Size</h6>
              {openFilter === "size" ? <FaMinus /> : <FaPlus />}
            </div>
            {openFilter === "ram" && (
              <div className="mt-2">
                {["5-6 ", "	8-15 ", "	8-15 ", "N/A"].map((r) => (
                  <div className="form-check" key={r}>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="ram"
                      checked={filters.ram === r}
                      onChange={() => setFilters({ ...filters, ram: r })}
                    />
                    <label className="form-check-label">{r}</label>
                  </div>
                ))}
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="ram"
                    checked={filters.ram === ""}
                    onChange={() => setFilters({ ...filters, ram: "" })}
                  />
                  <label className="form-check-label">All</label>
                </div>
              </div>
            )}
          </div>

          {/* ✅ Bottom Images */}
          <div className="mt-auto ">
            <img
              src="https://www.lenovo-online.co.za/cdn/shop/files/mobile-carousel-banner-100_f4d7c3b0-2e26-48ba-9290-605158d1fee5.jpg?v=1753946830&width=3000"
              alt="Bottom Img 1"
              style={{
                width: "100%",       // ✅ Full width
                borderRadius: "10px",
                boxShadow: "4px 4px 12px rgba(0,0,0,0.1)",
                marginBottom: "15px", // ✅ spacing between images
              }}
            />
          </div>

          {/* <div className="mt-auto">
  <img
    src="https://haroontraders.pk/cdn/shop/files/HP_LAPTOPS_SMALL_BANNER_1066x.jpg?v=1723123785"
    alt="Bottom Img 2"
    style={{
      width: "100%",       // ✅ Full width
      borderRadius: "10px",
      boxShadow: "4px 4px 12px rgba(0,0,0,0.1)",
    }}
  />
</div> */}

        </div>


        {/* Product List */}
        <div className="col-md-9">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5>{sortedProducts.length} Products</h5>
            <select
              className="form-select w-auto"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setCurrentPage(1); // reset pagination on sort
              }}
            >
              <option value="relevance">Relevance</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* Products */}
          <div className="row">
            {currentProducts.map((product) => {
              const discountedPrice =
                product.price - (product.price * product.discount) / 100;
              return (
                <div className="col-md-3 mb-4" key={product.id}>
                  <div
                    className="card h-100"
                    style={{
                      height: "400px",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    {product.discount > 0 && (
                      <span className="badge bg-danger position-absolute m-2">
                        -{product.discount}%
                      </span>
                    )}
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                      style={{ height: "150px", objectFit: "contain" }}
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h6 className="card-title text-truncate">{product.name}</h6>

                        {/* 🏪 Shop + ⭐ Rating in one line */}
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <p className="text-muted mb-0">{product.shop}</p>
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`bi ${i < product.rating ? "bi-star-fill text-warning" : "bi-star text-muted"
                                  }`}
                              ></i>
                            ))}
                          </div>
                        </div>

                        {/* 💲 Price Section */}
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="text-primary mb-0">${discountedPrice.toFixed(2)}</h5>
                          {product.discount > 0 && (
                            <p className="text-decoration-line-through mb-0 text-muted">
                              ${product.price}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span
                          className={`badge ${product.stock ? "bg-success" : "bg-danger"
                            }`}
                        >
                          {product.stock ? "In Stock" : "Out of Stock"}
                        </span>
                        <Link
                          to="/Checkout"
                          state={{ product }} // ✅ send product data
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
              );
            })}
          </div>


        </div>
        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""
                  }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${currentPage === totalPages ? "disabled" : ""
                }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Filter;
