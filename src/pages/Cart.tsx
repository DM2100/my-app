

import React, { useEffect, useState } from "react";
import { CartItem } from "../types"; // Adjust as per your actual type definition

interface CartPageProps {
  isLoggedIn: boolean;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  handleLogout: () => void;
  cartItems: CartItem[];
}

const CartPage: React.FC<CartPageProps> = ({ isLoggedIn, setCartItems, handleLogout }) => {
  const [cartItemsFromStorage, setCartItemsFromStorage] = useState<CartItem[]>([]);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItemsFromStorage(JSON.parse(storedCartItems));
    }
  }, []);

  // Update local storage and state when cart items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItemsFromStorage));
    setCartItems(cartItemsFromStorage);
  }, [cartItemsFromStorage, setCartItems]);

  const increaseQuantity = (index: number) => {
    const newCartItems = [...cartItemsFromStorage];
    newCartItems[index].quantity += 1;
    setCartItemsFromStorage(newCartItems);
  };

  const decreaseQuantity = (index: number) => {
    const newCartItems = [...cartItemsFromStorage];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItemsFromStorage(newCartItems);
    }
  };

  const deleteItem = (index: number) => {
    const newCartItems = cartItemsFromStorage.filter((_, i) => i !== index);
    setCartItemsFromStorage(newCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItemsFromStorage.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <div className="container my-5 styled-card-container py-5">
        {cartItemsFromStorage.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          <>
            <h1>Your Cart</h1>
            <ul className="list-group">
              {cartItemsFromStorage.map((item, index) => (
                <li key={index} className="list-group-item position-relative">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={item.image} alt={`Cart item ${index + 1}`} style={{ maxWidth: "250px", maxHeight: "250px" }} />
                    </div>
                    <div className="col-md-8">
                      <h5>{item.name}</h5>
                      <p>Price: ${item.price}</p>
                      <div className="d-flex align-items-center">
                        <button className="styled-button-decrease" onClick={() => decreaseQuantity(index)}>-</button>
                        <span className="mx-3">{item.quantity}</span>
                        <button className="styled-button-increase" onClick={() => increaseQuantity(index)}>+</button>
                      </div>
                      <p>Total: ${item.price * item.quantity}</p>
                      <button
                        className="btn btn-danger position-absolute"
                        style={{ top: "10px", right: "10px" }}
                        onClick={() => deleteItem(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h3 className="mt-4 total-price">Total Price: ${calculateTotalPrice()}</h3>
            <button className="pay-btn-styled">Pay Now</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
