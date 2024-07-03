// import React from "react";

export const BannerComponent = () => {
  return (
    <div className="banner-section" style={{ position: "relative" }}>
      <img
        src="./images/banner1.jpg"
        alt="Banner"
        className="banner-image"
      />
      <div className="banner-text">
        <h1 className="text-white">Welcome to Our Website</h1>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          magni reiciendis distinctio neque, aspernatur sit consequatur
          molestias laborum. Beatae, maiores?
        </p>
        <button className="styled-btn1 mt-3">Shop Now</button>
      </div>
    </div>
  );
};
