import React, { useState, useEffect } from "react";
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
import { FaQComp } from "./pages/FaQ";
import { BannerComponent } from "./components/Banner";
import { SofaComp } from "./components/SofaSection";
import { CategoryComp } from "./components/CategorySection";


const App: React.FC = () => {
  const initialLoggedInState = localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialLoggedInState);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCartItems([]);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("cartItems");
  };

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn && storedLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

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
          <Route path="/Signup" element={<AuthForm onLogin={handleLogin} />} />
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
          <Route
            path="/FAQ"
            element={
              <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout}>
                <BannerComponent />
                <FaQComp />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
  
  );
};

export default App;
