import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      if (!loginEmail) {
        alert("Please enter your email.");
        return;
      }

      if (!loginPassword) {
        alert("Please enter your password.");
        return;
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      console.log("Logged in successfully:", userCredential.user);

      onLogin();
      navigate("/Home");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("auth/user-not-found") || error.message.includes("auth/wrong-password")) {
          alert("Incorrect email or password. Please try again.");
        } else {
          alert("Error logging in: " + error.message);
        }
      } else {
        alert("An unknown error occurred during login.");
      }
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="container register">
      <form className="form">
        <h2 className="text-register">Log in</h2>
        <input
          required
          type="text"
          placeholder="Email"
          onChange={(event) => setLoginEmail(event.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Password"
          onChange={(event) => setLoginPassword(event.target.value)}
        />
        <button type="button" className="submit-btn" onClick={login}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
