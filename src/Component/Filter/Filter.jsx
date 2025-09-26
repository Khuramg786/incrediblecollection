import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ Sample Products
const productsData = [
  {
    id: 1,
    name: "Customize Wooden Diary",
    shop: "Shop the Brown Corporate Wooden Diary from 5*7-Inchez. Premium quality 5*7 inch office notebook with high-quality pages. Perfect for professionals & students. Order online now!",
    price: 1300,
    discount: 11,
    color: "Black",
    rating: 3,
    stock: true,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/11/FQ/EV/EF/41051893/corporate-wooden-dairy-500x500.jpg",
  },
  {
    id: 2,
    name: "Metal Pen Keychain Gift Set ",
    shop: "Discover the Metal Pen Keychain Gift Set from Customized Pen. Perfect for gifting or office use. Premium metal keychain with high-quality pen. Buy online today!",
    price: 600,
    discount: 10,
    color: "black",
    size: "Large",
    rating: 3,
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/Metal%20Pen%20&%20Metral%20Kechai(450).png?updatedAt=1758434172852",
  },
  {
    id: 3,
    name: "Cufflinks Premium Name Engraved",
    shop: "Get the Premium Name Engraved Cufflinks from Customized Rolex. Personalized luxury accessory for gifting or personal style. High-quality craftsmanship. Shop online now!",
    price: 1300,
    discount: 10,
    color: "black",
    size: "Large",
    rating: 4,
    stock: true,
    image:
      "https://ik.imagekit.io/jkths6fjn/Rolex%20Cufflinks%20Customizd%20(850).png?updatedAt=1758434875954",
  },
  {
    id: 4,
    name: "Wooden Keychain With Name",
    shop: "Shop Wooden Keychains With Name from Customized Keychain. Unique, stylish, and perfect as personalized gifts. Premium quality keychains available online. Order today!",
    price: 200,
    discount: 10,
    color: "green",
    size: "Large",
    rating: 4,
    stock: true,
    image:
      "https://ik.imagekit.io/jkths6fjn/Inkcreadablecollection(Wood%20Keychain)-200.png?updatedAt=1758435169252",
  },
  {
    id: 5,
    name: "Personalized Premium Metal Keychain",
    shop: "Explore Personalized Premium Metal Keychain from Customized Keychain. Perfect custom gift, high-quality metal keychain for daily use. Order online today!",
    price: 340,
    discount: 10,
    rating: 3,
    color: "black",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/Inkcreadablecollection-Metal%20Keychain%20Customized%20-250.png?updatedAt=1758435380840",
  },
  {
    id: 6,
    name: "Meta Mug ",
    shop: "Buy the Meta Mug from Customized Mug. Personalized coffee mug with premium quality for gifting or daily use. Unique designs available online. Shop now!",
    price: 1200,
    discount: 10,
    rating: 4,
    color: "black",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Mate%20Mug%20Customized-1200.png?updatedAt=1758435664908",
  },
  {
    id: 7,
    name: "Challa Ring ",
    shop: "Shop the Challa Ring from Customized Ring. Custom engraved ring, perfect as a unique gift or stylish accessory. High-quality materials. Buy online now!",
    price: 350,
    discount: 10,
    rating: 4,
    color: "black",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Challa%20Ring%20Customized-350.png?updatedAt=1758436018841",
  },
  {
    id: 8,
    name: "Brocken heart and ring ",
    shop: "Get the Broken Heart and Ring set from Customized Heart. Perfect romantic gift for loved ones. Premium quality, customizable design. Shop online now!",
    price: 1200,
    discount: 10,
    rating: 3,
    color: "black",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Brocken%20Heart%20&%20Ring%20Customized%20-%201200.jpg?updatedAt=1758436467677",
  },
  {
    id: 9,
    name: "Wooden Pen Stand For Office",
    shop: "Shop Wooden Pen Stand For Office from Customized Stand/Pen. Premium desk organizer for professional and home use. High-quality wood, stylish design. Order now!",
    price: 1500,
    discount: 10,
    rating: 3,
    color: "Grey",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollections-Wood%20pen%20Case%20Customized-%201500.jpg?updatedAt=1758436793024",
  }, {
    id: 10,
    name: "Hot and Cold Tumbler with Free Name 500ml-",
    shop: "Buy Hot and Cold Tumbler 500ml from Customized Tumbler. Personalized drinkware for hot or cold beverages, with free name customization. Shop online today!",
    price: 2300,
    discount: 10,
    rating: 4,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Tumbler%20Hote%20and%20Cold%20Customized%20-1650.jpeg?updatedAt=1758437313560",
  },
  {
    id: 18,
    name: "Calligraphy Metal  ",
    shop: "Discover Calligraphy Metal from Customized Calligraphy. Elegant wall art, premium quality, perfect for home, office, or gifting. Shop online now!",
    price: 7080,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Calligraphy%20Metal.jpg?updatedAt=1758439339594",
  },
  {
    id: 11,
    name: "Apron Customized",
    shop: "Shop Customized Apron for home and professional use. Premium quality, washable and stylish apron, perfect as a personalized gift. Order online today!",
    price: 700,
    discount: 10,
    rating: 2,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Apron%20Customized%20-700.jpg?updatedAt=1758437558052",
  },
  {
    id: 12,
    name: "Album Invelp VIP Locket ",
    shop: "Discover the Album Invelp VIP Locket from Customized Album. Perfect personalized gift, high-quality materials, ideal for photos & memories. Buy online now!",
    price: 1276,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Album%20Invelp%20VIP%20Locket%20Customized-%201265.jpg?updatedAt=1758437810797",
  },
  {
    id: 13,
    name: "Mobile Case ",
    shop: "Shop Customized Mobile Case. Unique, high-quality phone cover, fully personalized design. Perfect gift for friends and family. Order online today!",
    price: 900,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Mobile%20Case-900.png?updatedAt=1758438498738",
  },
  {
    id: 14,
    name: "Eidi Envelop Customized",
    shop: "Buy Customized Eidi Envelop. Perfect for gifting money during celebrations, premium quality, fully personalized design. Shop online today! ",
    price: 500,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Eidi%20Envelopes-500.jpg?updatedAt=1758438716329",
  },
  {
    id: 15,
    name: "Flag Office Table",
    shop: "Shop Flag Office Table from Customized Flag. Premium desk accessory for offices, personalized flag stand for meetings & decoration. Order now!",
    price: 27,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Flag%20office%20Table-.png?updatedAt=1758438883256",
  },
  {
    id: 16,
    name: "Sigrate Case Box ",
    shop: "Buy Customized Sigrate Case Box. High-quality, personalized cigarette holder, perfect for gifting or personal use. Order online today!",
    price: 1300,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Sigrate%20Case%20Box%20Customized.jpg?updatedAt=1758439163215",
  },
  {
    id: 17,
    name: "Temperature Display Coffee Mug ",
    shop: "Shop Temperature Display Coffee Mug from Customized. Smart coffee mug with temperature display, personalized gift, premium quality. Buy online today!",
    price: 1489,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Temprature%20Coffee%20Mug%20Customized%20-1500.png?updatedAt=1758442622257",
  },
  {
    id: 19,
    name: "Mega Power Light Base Acrylic Lamps",
    shop: "Customized Lamps – Premium acrylic light base, perfect for home decor, office ambiance, and gifting. Stylish, energy-efficient, and fully customizable. Buy online today!",
    price: 80,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Light%20Lamp%20Customized.jpg?updatedAt=1758442956217",
  },
  {
    id: 20,
    name: "PERSONALIZED TREE FRAME",
    shop: "Customized Tree Frame – Unique personalized tree frame for home, office, or gifting. Premium quality, elegant design, perfect for photos and memories. Order online now!",
    price: 2000,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Tree%20Frames-2000.jpeg?updatedAt=1758443173160",
  },
  {
    id: 21,
    name: "Logo Stamp for Business",
    shop: "Customized Stamp – Premium business logo stamp, fully customizable for offices, branding, and personal use. High-quality, durable, and professional. Buy now!",
    price: 90,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Stamp%20Customized-0.0.jpg?updatedAt=1758443351190",
  },
  {
    id: 22,
    name: "Mega Power Light Base Acrylic Lamps",
    shop: "Customized Lamps – Duplicate premium acrylic light base, energy-efficient, stylish home & office decor, perfect as a gift. Fully customizable and durable. Order today!",
    price: 0.0,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Light%20Lamp%20Customized.jpg?updatedAt=1758442956217",
  },
  {
    id: 23,
    name: "Customize Name Bracelet",
    shop: "More Types – Personalized name bracelet, premium quality, perfect as a unique gift. Elegant design, fully customizable, ideal for birthdays, anniversaries, or special occasions. Buy online now!",
    price: 800,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Bracelet-800.jpeg?updatedAt=1758443885310",
  },
  {
    id: 24,
    name: "Clock Customized",
    shop: "More Types – Premium customized clock, ideal for home and office decor. Unique, stylish, fully personalized with high-quality material. Perfect gift option. Order today!",
    price: 1000,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Customized%20Wooden%20Clock.jpg?updatedAt=1758444125557",
  },
  {
    id: 25,
    name: "House Name Plate Customized",
    shop: "More Types – Premium customized house name plate, stylish and durable. Perfect for home entrance decoration, gifting, and personal branding. Fully customizable. Buy now!",
    price: 2500,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-House%20Name%20Plate%20Customized.jpg?updatedAt=1758444402740",
  },
  {
    id: 26,
    name: "Pillow Customized",
    shop: "More Types – Personalized pillow, premium quality, soft and comfortable. Perfect for home decor, gifting, and unique personal touch. Fully customizable. Order online today!",
    price: 500,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Pillow%20Customized.jpg?updatedAt=1758444524321",
  },
  {
    id: 27,
    name: "Printed Glass Shield",
    shop: "More Types – High-quality printed glass shield, perfect for home or office decor. Durable, stylish, and customizable with unique designs. Ideal for gifting. Buy online now!",
    price: 500.00,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Glass%20Shields.png?updatedAt=1758444793845",
  },

  {
    id: 28,
    name: "Printed Glass Shield",
    shop: "More Types – Premium printed glass shield, stylish and durable, perfect for home, office, and gifting. High-quality customization with unique designs. Buy online today!",
    price: 500.00,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Glass%20Shields.png?updatedAt=1758444793845",
  },
  {
    id: 29,
    name: "Visiting Card Business",
    shop: "More Types – Customized visiting cards for business and personal branding. Premium quality, professional design, ideal for networking, marketing, and corporate events. Order online now!",
    price: 20,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Bussiness%20card.jpg?updatedAt=1758445037906",
  },
  {
    id: 30,
    name: "Cap VIP DTF Print",
    shop: "More Types – Personalized VIP DTF print caps, high-quality and comfortable. Perfect for promotions, gifts, and fashion statements. Fully customizable. Buy online today!",
    price: 700,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Cap%20Vip%20DTF%20Print.jpeg?updatedAt=1758445159890",
  },
  {
    id: 31,
    name: "Wadding Dupatta",
    shop: "More Types – Premium wadding dupatta, soft and elegant, perfect for weddings, special events, and gifting. High-quality fabric with customizable designs. Order online now!",
    price: 1500,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Wedding%20Dupatta.jpg?updatedAt=1758445292865",
  },
  {
    id: 32,
    name: "Ribbon Patti Customized",
    shop: "More Types – Customized ribbon patti, ideal for decorations, gifts, and crafting. High-quality, colorful, and fully personalized. Perfect for events, parties, and home decor. Buy online today!",
    price: 80,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Ribbon%20Patti%20Customized.jpg?updatedAt=1758445463899",
  },
  {
    id: 33,
    name: "Number Plate Customized",
    shop: "More Types",
    price: 600,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Number%20Plate%20Customized.jpg?updatedAt=1758445668277",
  },
  {
    id: 34,
    name: "Puzzle Game Customized",
    shop: "More Types",
    price: 300,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Puzzle%20Game%20Customized.jpg?updatedAt=1758445835091",
  },
  {
    id: 33,
    name: "Car Hanger  Customized",
    shop: "More Types",
    price: 1400,
    discount: 10,
    rating: 5,
    color: "White",
    size: "Large",
    stock: true,
    image: "https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Car%20Hanger%20Customized.jpg?updatedAt=1758445981673",
  },
];

// ✅ Filter Component
const Filter = () => {
  const [filters, setFilters] = useState({
    stock: false,
    color: "",
    size: "",
    priceRange: "",
  });
  const [sort, setSort] = useState("relevance");
  const [openFilter, setOpenFilter] = useState(""); // Track dropdown
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(""); // ✅ Search state
  const productsPerPage = 8;

  // Apply Filters
  const filteredProducts = productsData.filter((product) => {
    if (filters.stock && !product.stock) return false;
    if (filters.color && product.color !== filters.color) return false;
    if (filters.size && product.size !== filters.size) return false;

    // ✅ Price filter
    if (filters.priceRange) {
      const discountedPrice =
        product.price - (product.price * product.discount) / 100;
      if (filters.priceRange === "under20" && discountedPrice > 20) return false;
      if (filters.priceRange === "20to40" && (discountedPrice < 20 || discountedPrice > 40))
        return false;
      if (filters.priceRange === "above40" && discountedPrice < 40) return false;
    }

    if (
      search &&
      !product.name.toLowerCase().includes(search.toLowerCase()) &&
      !product.shop.toLowerCase().includes(search.toLowerCase())
    )
      return false;

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
          className="col-md-3 p-3 d-flex flex-column mb-3"
          style={{
            background: "linear-gradient(145deg, #ffffff, #f3f3f3)",
            borderRadius: "15px",
            boxShadow: "8px 8px 20px #d1d9e6, -8px -8px 20px #ffffff",
            minHeight: "85vh",
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

          {/* Size */}
          <div className="mt-3">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleFilter("size")}
            >
              <h6 className="mb-0">Size</h6>
              {openFilter === "size" ? <FaMinus /> : <FaPlus />}
            </div>
            {openFilter === "size" && (
              <div className="mt-2">
                {["Small", "Medium", "Large"].map((s) => (
                  <div className="form-check" key={s}>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="size"
                      checked={filters.size === s}
                      onChange={() => setFilters({ ...filters, size: s })}
                    />
                    <label className="form-check-label">{s}</label>
                  </div>
                ))}
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="size"
                    checked={filters.size === ""}
                    onChange={() => setFilters({ ...filters, size: "" })}
                  />
                  <label className="form-check-label">All</label>
                </div>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="mt-3">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() => toggleFilter("price")}
            >
              <h6 className="mb-0">Price</h6>
              {openFilter === "price" ? <FaMinus /> : <FaPlus />}
            </div>
            {openFilter === "price" && (
              <div className="mt-2">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="price"
                    checked={filters.priceRange === "under20"}
                    onChange={() =>
                      setFilters({ ...filters, priceRange: "under20" })
                    }
                  />
                  <label className="form-check-label">Under Rs.20</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="price"
                    checked={filters.priceRange === "20to40"}
                    onChange={() =>
                      setFilters({ ...filters, priceRange: "20to40" })
                    }
                  />
                  <label className="form-check-label">Rs.20 - Rs.40</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="price"
                    checked={filters.priceRange === "above40"}
                    onChange={() =>
                      setFilters({ ...filters, priceRange: "above40" })
                    }
                  />
                  <label className="form-check-label">Above Rs.40</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="price"
                    checked={filters.priceRange === ""}
                    onChange={() => setFilters({ ...filters, priceRange: "" })}
                  />
                  <label className="form-check-label">All</label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product List */}
        <div className="col-md-9">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
            <h5>{sortedProducts.length} Products</h5>

            {/* 🔍 Search Bar */}
            <div className="row mb-3 w-50">
              <div className="col-12 d-flex justify-content-center">
                <div
                  className="input-group w-100"
                  style={{
                    maxWidth: "700px",
                  }}
                >
                  <span
                    className="input-group-text"
                    style={{
                      borderRadius: "30px 0 0 30px",
                      backgroundColor: "#fff",
                      borderRight: "none",
                      padding: "12px 18px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    <i className="bi bi-search fs-5"></i>
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setCurrentPage(1);
                    }}
                    style={{
                      borderRadius: "0 30px 30px 0",
                      padding: "12px 10px",
                      fontSize: "1rem",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  />
                </div>
              </div>
            </div>

            <select
              className="form-select w-auto mt-2 mt-md-0"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="relevance">Relevance</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>

          {/* Products */}
          <div className="row">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => {
                const discountedPrice =
                  product.price - (product.price * product.discount) / 100;
                return (
                  <div className="col-6 col-md-3 mb-4" key={product.id}>
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
                        style={{ height: "200px", objectFit: "contain" }}
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                          <h6 className="card-title text-truncate">
                            {product.name}
                          </h6>
                          <p
                            className="text-muted mb-0"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {product.shop}
                          </p>

                          {/* ⭐ Rating */}
                          <div>
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`bi ${i < product.rating
                                    ? "bi-star-fill text-warning"
                                    : "bi-star text-muted"
                                  }`}
                              ></i>
                            ))}
                          </div>
                          {/* 💲 Price */}
                          <div className="d-flex justify-content-between align-items-center">
                            <h5 className="text-primary mb-0">
                              Rs.{discountedPrice.toFixed()}
                            </h5>
                            {product.discount > 0 && (
                              <p className="text-decoration-line-through mb-0 text-muted">
                                Rs.{product.price}
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
                );
              })
            ) : (
              <p className="text-center">No products found.</p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav>
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""
                    }`}
                >
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
