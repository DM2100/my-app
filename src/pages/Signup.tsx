import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      // Display alert after successful registration
      window.alert("Signed up successfully!");
      console.log("Signed up successfully!", userCredential.user);

      // Navigate to the Home page
      navigate("/Home");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error signing up:", error.message);
        window.alert("Error signing up: " + error.message);
      } else {
        console.error("Unknown error signing up:", error);
        window.alert("An unknown error occurred during sign-up.");
      }
    }
  };

  const handleRegisterClick = async () => {
    // Check if email and password fields are filled
    if (!registerEmail || !registerPassword) {
      window.alert("Email and password fields are required!");
      return;
    }

    try {
      await register();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error handling registration:", error.message);
      } else {
        console.error("Unknown error handling registration:", error);
      }
    }
  };

  return (
    <div className="container register">
      <form className="form">
        <h2 className="text-register">Sign Up</h2>
        <input
          required
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          required
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button
          type="button"
          className="submit-btn"
          onClick={handleRegisterClick}
        >
          Sign Up
        </button>
        <p className="reg-text">
          Already have an account? <Link to="/Login">Log in!</Link>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
