// src/App.tsx
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import AuthForm from "./pages/Signup";
import LoginForm from "./pages/Login";
import CartPage from "./pages/Cart";

import { CartItem } from "./types";
import { BannerComponent } from "./components/Banner";
import { FaQComp } from "./pages/FaQ";
import { SofaComp } from "./components/SofaSection";
import { Footer } from "./components/Footer";
import { CategoryComp } from "./components/CategorySection";

const App: React.FC = () => {
  const initialLoggedInState = localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialLoggedInState);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Initialize cart items from local storage on app load
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Handler for logging in
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handler for logging out
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCartItems([]); // Clear cart items in state
    localStorage.removeItem("isLoggedIn"); // Remove isLoggedIn from local storage
    localStorage.removeItem("cartItems"); // Remove cart items from local storage
  };

  // Check local storage on initial load
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn && storedLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Save isLoggedIn state to local storage when it changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  // Update local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout}>
              <BannerComponent />
              <SofaComp />
              <CategoryComp />
            </Layout>
          }
        />
        {/* Route for the homepage */}
        <Route
          path="/Home"
          element={
            <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout}>
              <HomePage
                isLoggedIn={isLoggedIn}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </Layout>
          }
        />

        {/* Route for the Signup page */}
        <Route path="/Signup" element={<AuthForm />} />

        {/* Route for the Login page */}
        <Route
          path="/Login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout}>
                <LoginForm onLogin={handleLogin} />
              </Layout>
            )
          }
        />

        {/* Route for the Cart page */}
        <Route
          path="/cart"
          element={
            isLoggedIn ? (
              <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout}>
                <CartPage
                  isLoggedIn={isLoggedIn}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  handleLogout={handleLogout}
                />
              </Layout>
            ) : (
              <Navigate to="/Login" replace />
            )
          }
        />

        {/* Route for the FAQ page */}
        <Route
          path="/FAQ"
          element={
            <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout}>
              <BannerComponent/>
              <FaQComp />
            </Layout>
          }
        />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
