import React from "react";

export const CategoryComp = () => {
  // Sample image data
  const images = [
    {
      id: 1,
      src: "./images/chair1.jpg",
      alt: "Chair 1",
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: 2,
      src: "./images/chair2.jpg",
      alt: "Chair 2",
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: 3,
      src: "./images/sofa1.jpg",
      alt: "Sofa 1",
      oldPrice: 120,
      newPrice: 100,
    },
    {
      id: 4,
      src: "./images/sofa2.jpg",
      alt: "Sofa 2",
      oldPrice: 120,
      newPrice: 100,
    },
  ];

  return (
    <div className="container styled-category-comp my-5 py-5 ">
      <div className="section mt-3 pt-5">
        <h1 className="text-center" style={{ fontWeight: "700" }}>
          Best Seller
        </h1>
        <p className="text-center" style={{ fontSize: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          voluptas.
        </p>
      </div>
      <div className="row">
        {images.map((image) => (
          <div className="col-lg-3" key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="img-fluid"
              style={{ height: "80%" }}
            />
            <div className="text-center mt-2">
              <h3>Vintage Fashion</h3>
              <p style={{ color: "red", textDecoration: "line-through" }}>
                ${image.oldPrice}
              </p>
              <p style={{ fontSize: "25px" }}>${image.newPrice}</p>
              <div className="color-options">
                <span style={{ backgroundColor: "gray" }}></span>
                <span style={{ backgroundColor: "black" }}></span>
                <span style={{ backgroundColor: "blue" }}></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
