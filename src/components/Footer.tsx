import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="container-fluid bg-color  text-white text-center" id="aboutus">
      <div className="row py-5 mx-5 px-5">
        <div className="col-lg-3">
          <h1 style={{fontWeight: "900"}}>E-commerce Website</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            eligendi debitis voluptas vel nemo minus!
          </p>
        </div>
        <div className="col-lg-3">
          <h1 style={{fontWeight: "900"}}>Shopping</h1>
          <p style={{ cursor: "pointer" }}>Gift Cards</p>
          <p style={{ cursor: "pointer" }}>Return Policy</p>
          <p style={{ cursor: "pointer" }}>Shipping Methods</p>
          <p style={{ cursor: "pointer" }}>Furniture Assembling</p>
        </div>
        <div className="col-lg-3 ">
          <h1 style={{fontWeight: "900"}}>About Us</h1>
          <p style={{ cursor: "pointer" }}>Privacy Policy</p>
          <p style={{ cursor: "pointer" }}>Terms of Use</p>
          <p style={{ cursor: "pointer" }}>Why Buy Direct</p>
          <p style={{ cursor: "pointer" }}>Newsletter</p>
        </div>
        <div className="col-lg-3">
          <h1 style={{fontWeight: "900"}}>Contact Us</h1>
          <p style={{ cursor: "pointer" }}>
            <FaPhone /> +389/72-111-222
          </p>
          <p style={{ cursor: "pointer" }}>
            <MdMailOutline /> example@ecommerce.com
          </p>
          <p style={{ cursor: "pointer" }}>
            <FaLocationArrow /> Location
          </p>
        </div>
      </div>
    </div>
  );
};
