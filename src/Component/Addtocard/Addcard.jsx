import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const newProduct = location.state?.product;

  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showPayment, setShowPayment] = useState(false); // ✅ Popup state

  const shipping = 7;

  // ✅ Add product if coming from Checkout
  useEffect(() => {
    if (newProduct) {
      setCart((prevCart) => {
        const exists = prevCart.find((item) => item.id === newProduct.id);
        if (exists) {
          return prevCart.map((item) =>
            item.id === newProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [
            ...prevCart,
            {
              ...newProduct,
              quantity: 1,
              oldPrice: newProduct.oldPrice || newProduct.price,
              discount: newProduct.discount || 0,
              image: newProduct.image || newProduct.img,
            },
          ];
        }
      });
    }
  }, [newProduct]);

  // ✅ Update quantity
  const updateQuantity = (id, qty) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  // ✅ Remove item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ✅ Apply promo code
  const applyPromo = () => {
    if (promoCode === "GET25OFF") {
      setDiscount(25);
    } else {
      setDiscount(0);
      alert("Invalid Promo Code");
    }
  };

  // ✅ Totals
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛒 Shopping Cart</h2>
      <div className="row">
        {/* Left: Cart Items */}
        <div className="col-md-8">
          <div className="card p-3">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center justify-content-between border-bottom py-3"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "80px", marginRight: "15px" }}
                    />
                    <div>
                      <h6 className="fw-bold">{item.name}</h6>
                      {item.color && <p>Color: {item.color}</p>}
                      {item.ram && <p>RAM: {item.ram}</p>}
                      {item.storage && <p>Storage: {item.storage}</p>}
                      <p>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "gray",
                          }}
                        >
                          ${item.oldPrice.toFixed(2)}
                        </span>{" "}
                        <span style={{ color: "red" }}>- {item.discount}%</span>{" "}
                        <span
                          style={{ color: "blue", fontWeight: "bold" }}
                        >
                          ${item.price.toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Quantity + Price + Remove */}
                  <div className="d-flex align-items-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      style={{
                        width: "60px",
                        marginRight: "15px",
                        textAlign: "center",
                      }}
                    />
                    <h6
                      style={{
                        marginRight: "15px",
                        color: "blue",
                        fontWeight: "bold",
                      }}
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </h6>
                    <FaTrash
                      style={{ cursor: "pointer", color: "black" }}
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <h5 className="text-center text-muted">Your cart is empty 🛍</h5>
            )}
          </div>

          {/* Continue shopping */}
          <button
            className="btn btn-link mt-3"
            onClick={() => navigate("/")}
          >
            ← Continue Shopping
          </button>
        </div>

        {/* Right: Summary */}
        <div className="col-md-4">
          <div className="card p-3">
            <h5 className="fw-bold">📋 Order Summary</h5>
            <hr />
            <div className="d-flex justify-content-between">
              <span className="fw-bold">{cart.length} items</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between pt-3">
              <span className="fw-bold">Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="d-flex justify-content-between text-success">
                <span>Discount ({discount}%)</span>
                <span>- ${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <hr />
            <div className="d-flex justify-content-between pt-3 pb-3">
              <span className="fw-bold">Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Promo Code */}
            <div className="mt-3 d-flex">
              <input
                type="text"
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="form-control me-2"
                style={{ flex: 1 }}
              />
              <button
                className="btn btn-primary fw-bold"
                onClick={applyPromo}
              >
                Apply
              </button>
            </div>

            {/* Checkout button */}
            <div className="d-flex justify-content-center">
                   {/* Checkout button */}
            <button
  className="btn w-75 mt-3"
  style={{
    fontWeight: "bold",
    fontSize: "16px",
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "8px",
  }}
  onClick={() => {
    const orderDetails = cart
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} = $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("%0A"); // WhatsApp line break

    const message = `Hello, I want to confirm my order:%0A${orderDetails}%0A%0ATotal: $${total.toFixed(
      2
    )}`;

    window.open(
      `https://wa.me/923019854185?text=${message}`,
      "_blank"
    );
  }}
>
  PROCEED TO CHECKOUT
</button>
            </div>
          </div>
        </div>
      </div>

     {/* ✅ Payment Popup Modal */}
{showPayment && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
  >
    <div className="bg-white p-4 rounded shadow" style={{ width: "400px" }}>
      <h5 className="fw-bold mb-3">💳 Select Payment Method</h5>
      <ul className="list-group mb-3">
        <li className="list-group-item">
          <b>EasyPaisa</b> <br />
          Account: <span className="text-success">0300-1234567</span>
        </li>
        <li className="list-group-item">
          <b>JazzCash</b> <br />
          Account: <span className="text-success">0301-9876543</span>
        </li>
        <li className="list-group-item">
          <b>Meezan Bank</b> <br />
          IBAN: <span className="text-success">PK90MEZN0000123456789</span>
        </li>
      </ul>

      {/* ✅ Dynamic message after confirm */}
      {showPayment === "confirmed" && (
        <p className="text-success fw-bold mt-2" style={{ fontSize: "14px" }}>
          ✅ Please share the screenshot of your payment method to verify the payment and confirm your product order.
        </p>
      )}

      <div className="d-flex justify-content-end">
        <button
          className="btn btn-secondary me-2"
          onClick={() => setShowPayment(false)}
        >
          Close
        </button>
        <button
          className="btn btn-success"
          onClick={() => setShowPayment("confirmed")} // 👈 Change state
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default CartPage;
