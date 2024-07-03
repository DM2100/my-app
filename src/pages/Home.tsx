// import React, { useState } from "react";
// import { BannerComponent } from "../components/Banner";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBed, faChair as faChairSolid, faCouch, faLightbulb } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";

// interface Props {
//   isLoggedIn: boolean;
//   cartItems: { name: string, image: string, price: number, quantity: number }[];
//   setCartItems: React.Dispatch<React.SetStateAction<{ name: string, image: string, price: number, quantity: number }[]>>;
// }

// const HomePage: React.FC<Props> = ({ isLoggedIn, cartItems, setCartItems }) => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const navigate = useNavigate();

//   // Dummy furniture data
//   const furnitureData = [
//     {
//       category: "Chair",
//       images: ["/images/chair1.jpg", "/images/chair2.jpg", "/images/chair3.jpg"],
//       oldPrice: ["$120", "$120", "$120"],
//       newPrice: [100, 100, 100],
//     },
//     {
//       category: "Lamp",
//       images: ["/images/standinglamp.jpg", "/images/lamp2.jpg", "/images/lamp3.jpg"],
//       oldPrice: ["$120", "$120", "$120"],
//       newPrice: [100, 100, 100],
//     },
//     {
//       category: "Couch",
//       images: ["/images/couch1.jpg", "/images/couch2.jpg", "/images/couch3.jpg"],
//       oldPrice: ["$120", "$120", "$120"],
//       newPrice: [100, 100, 100],
//     },
//     {
//       category: "Bed",
//       images: ["/images/bed1.jpg", "/images/bed2.jpg", "/images/bed3.jpg"],
//       oldPrice: ["$120", "$120", "$120"],
//       newPrice: [100, 100, 100],
//     },
//   ];

//   const handleCategoryClick = (category: string) => {
//     setSelectedCategory(category);
//   };

//   const addToCart = (itemName: string, itemImage: string, itemPrice: number) => {
//     if (!isLoggedIn) {
//       alert("Please log in or sign up to add items to your cart.");
//     } else {
//       setCartItems(prevItems => [...prevItems, { name: itemName, image: itemImage, price: itemPrice, quantity: 1 }]);
//       alert("Item added to cart!");
//     }
//   };

//   const viewCart = () => {
//     if (!isLoggedIn) {
//       alert("Please log in or sign up to view your cart.");
//     } else if (cartItems.length === 0) {
//       alert("Your cart is empty.");
//     } else {
//       navigate("/cart");
//     }
//   };

//   return (
//     <div>
//       <BannerComponent />
//       <div className="container">
//         <h1 className="text-center my-4 py-3" style={{ fontSize: "80px", color: "#273469", fontWeight: "700" }}>
//           Shop By Category
//         </h1>
//         <div className="icons justify-content-center align-items-center text-center">
//           <div className="row py-3 my-5">
//             {furnitureData.map((item) => (
//               <div className="col-lg-3 col-md-6" key={item.category}>
//                 {item.category === "Chair" && (
//                   <FontAwesomeIcon
//                     icon={faChairSolid}
//                     style={{
//                       fontSize: "80px",
//                       color: "#273469",
//                       borderRadius: "50%",
//                       cursor: "pointer",
//                       border: selectedCategory === "Chair" ? "2px solid black" : "none",
//                       padding: "15px",
//                     }}
//                     onClick={() => handleCategoryClick("Chair")}
//                   />
//                 )}
//                 {item.category === "Lamp" && (
//                   <FontAwesomeIcon
//                     icon={faLightbulb}
//                     style={{
//                       fontSize: "80px",
//                       color: "#273469",
//                       borderRadius: "50%",
//                       cursor: "pointer",
//                       border: selectedCategory === "Lamp" ? "2px solid black" : "none",
//                       padding: "15px",
//                     }}
//                     onClick={() => handleCategoryClick("Lamp")}
//                   />
//                 )}
//                 {item.category === "Couch" && (
//                   <FontAwesomeIcon
//                     icon={faCouch}
//                     style={{
//                       fontSize: "80px",
//                       color: "#273469",
//                       borderRadius: "50%",
//                       cursor: "pointer",
//                       border: selectedCategory === "Couch" ? "2px solid black" : "none",
//                       padding: "15px",
//                     }}
//                     onClick={() => handleCategoryClick("Couch")}
//                   />
//                 )}
//                 {item.category === "Bed" && (
//                   <FontAwesomeIcon
//                     icon={faBed}
//                     style={{
//                       fontSize: "80px",
//                       color: "#273469",
//                       borderRadius: "50%",
//                       cursor: "pointer",
//                       border: selectedCategory === "Bed" ? "2px solid black" : "none",
//                       padding: "15px",
//                     }}
//                     onClick={() => handleCategoryClick("Bed")}
//                   />
//                 )}
//                 <p className={`mt-2 icon-text ${selectedCategory === item.category ? "active" : ""}`}>
//                   {item.category}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="container mb-5 pb-5">
//         <div className="row justify-content-center align-items-center">
//           {furnitureData.map((item) => (
//             <React.Fragment key={item.category}>
//               {(!selectedCategory || selectedCategory === item.category) &&
//                 item.images.map((image, index) => (
//                   <div
//                     className="col-lg-3 col-md-6 mb-4"
//                     key={image}
//                     style={{ height: "550px" }}
//                   >
//                     <img
//                       src={image}
//                       alt={item.category}
//                       className="img-fluid"
//                       style={{ maxWidth: "100%", height: "80%", objectFit: "cover" }}
//                     />
//                     <div className="text-center">
//                       {item.oldPrice[index] && item.newPrice[index] && (
//                         <p className="mt-3">
//                           <span
//                             style={{ textDecoration: "line-through", color: "red", fontSize: "24px", fontWeight: "bold" }}
//                           >
//                             {item.oldPrice[index]}
//                           </span>{" "}
//                           <span style={{ fontSize: "28px", fontWeight: "bold" }}>
//                             ${item.newPrice[index]}
//                           </span>
//                         </p>
//                       )}
//                       <button className="card-btn" onClick={() => addToCart(item.category, image, item.newPrice[index])}>
//                         Add To Cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from "react";
import { BannerComponent } from "../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faChair as faChairSolid, faCouch, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../types"; // Assuming CartItem is imported from types.ts or similar

interface Props {
  isLoggedIn: boolean;
  cartItems: CartItem[]; // Define cartItems here
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const HomePage: React.FC<Props> = ({ isLoggedIn, cartItems, setCartItems }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  // Dummy furniture data
  const furnitureData = [
    {
      category: "Chair",
      images: ["/images/chair1.jpg", "/images/chair2.jpg", "/images/chair3.jpg"],
      oldPrice: ["$200", "$200", "$200"],
      newPrice: [100, 100, 100],
    },
    {
      category: "Lamp",
      images: ["/images/standinglamp.jpg", "/images/lamp2.jpg", "/images/lamp3.jpg"],
      oldPrice: ["$160", "$160", "$160"],
      newPrice: [80, 80, 80],
    },
    {
      category: "Couch",
      images: ["/images/couch1.jpg", "/images/couch2.jpg", "/images/couch3.jpg"],
      oldPrice: ["$120", "$120", "$120"],
      newPrice: [60, 60, 60],
    },
    {
      category: "Bed",
      images: ["/images/bed1.jpg", "/images/bed2.jpg", "/images/bed3.jpg"],
      oldPrice: ["$1700", "$1700", "$1700"],
      newPrice: [850, 850, 850],
    },
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const addToCart = (itemName: string, itemImage: string, itemPrice: number) => {
    if (!isLoggedIn) {
      alert("Please log in or sign up to add items to your cart.");
    } else {
      setCartItems(prevItems => [...prevItems, { name: itemName, image: itemImage, price: itemPrice, quantity: 1 }]);
      alert("Item added to cart!");
    }
  };

  const viewCart = () => {
    if (!isLoggedIn) {
      alert("Please log in or sign up to view your cart.");
    } else if (cartItems.length === 0) {
      alert("Your cart is empty.");
    } else {
      navigate("/cart");
    }
  };

  return (
    <div>
      <BannerComponent />
      <div className="container">
        <h1 className="text-center  styled-category-text my-4 py-3" style={{ fontSize: "80px", color: "#273469", fontWeight: "700" }}>
          Shop By Category
        </h1>
        <div className="icons justify-content-center align-items-center text-center">
          <div className="row py-3 my-5">
            {furnitureData.map((item) => (
              <div className="col-lg-3 col-md-6" key={item.category}>
                {item.category === "Chair" && (
                  <FontAwesomeIcon
                    icon={faChairSolid}
                    style={{
                      fontSize: "80px",
                      color: "#273469",
                      borderRadius: "50%",
                      cursor: "pointer",
                      border: selectedCategory === "Chair" ? "2px solid black" : "none",
                      padding: "15px",
                    }}
                    onClick={() => handleCategoryClick("Chair")}
                  />
                )}
                {item.category === "Lamp" && (
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    style={{
                      fontSize: "80px",
                      color: "#273469",
                      borderRadius: "50%",
                      cursor: "pointer",
                      border: selectedCategory === "Lamp" ? "2px solid black" : "none",
                      padding: "15px",
                    }}
                    onClick={() => handleCategoryClick("Lamp")}
                  />
                )}
                {item.category === "Couch" && (
                  <FontAwesomeIcon
                    icon={faCouch}
                    style={{
                      fontSize: "80px",
                      color: "#273469",
                      borderRadius: "50%",
                      cursor: "pointer",
                      border: selectedCategory === "Couch" ? "2px solid black" : "none",
                      padding: "15px",
                    }}
                    onClick={() => handleCategoryClick("Couch")}
                  />
                )}
                {item.category === "Bed" && (
                  <FontAwesomeIcon
                    icon={faBed}
                    style={{
                      fontSize: "80px",
                      color: "#273469",
                      borderRadius: "50%", 
                      cursor: "pointer",
                      border: selectedCategory === "Bed" ? "2px solid black" : "none",
                      padding: "15px",
                    }}
                    onClick={() => handleCategoryClick("Bed")}
                  />
                )}
                <p className={`mt-2 icon-text ${selectedCategory === item.category ? "active" : ""}`}>
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mb-5 pb-5">
        <div className="row justify-content-center align-items-center">
          {furnitureData.map((item) => (
            <React.Fragment key={item.category}>
              {(!selectedCategory || selectedCategory === item.category) &&
                item.images.map((image, index) => (
                  <div
                    className="col-lg-3 col-md-6 mb-4"
                    key={image}
                    style={{ height: "550px" }}
                  >
                    <img
                      src={image}
                      alt={item.category}
                      className="img-fluid img-hover-3d"
                      style={{ maxWidth: "100%", height: "80%", objectFit: "cover" }}
                    />
                    <div className="text-center">
                      {item.oldPrice[index] && item.newPrice[index] && (
                        <p className="mt-3">
                          <span
                            style={{ textDecoration: "line-through", color: "red", fontSize: "24px", fontWeight: "bold" }}
                          >
                            {item.oldPrice[index]}
                          </span>{" "}
                          <span style={{ fontSize: "28px", fontWeight: "bold" }}>
                            ${item.newPrice[index]}
                          </span>
                        </p>
                      )}
                      <button className="card-btn" onClick={() => addToCart(item.category, image, item.newPrice[index])}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
