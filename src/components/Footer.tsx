import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export const Footer = () => {
  return (
    <div
      className="container-fluid bg-color  text-white text-center mt-5 pt-5"
      id="aboutus"
    >
      <div className="row py-5 mx-5 px-5">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h1 className="footer-heading" style={{ fontWeight: "900" }}>
            E-commerce Website
          </h1>
          <p className="footer-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            eligendi debitis voluptas vel nemo minus!
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h1 className="footer-heading" style={{ fontWeight: "900" }}>
            Shopping
          </h1>
          <p className="footer-list" style={{ cursor: "pointer" }}>
            Gift Cards
          </p>
          <p className="footer-list" style={{ cursor: "pointer" }}>
            Return Policy
          </p>
          <p  className="footer-list" style={{ cursor: "pointer" }}>Shipping Methods</p>
          <p className="footer-list" style={{ cursor: "pointer" }}>Furniture Assembling</p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h1 className="footer-heading" style={{ fontWeight: "900" }}>About Us</h1>
          <p className="footer-list" style={{ cursor: "pointer" }}>Privacy Policy</p>
          <p className="footer-list" style={{ cursor: "pointer" }}>Terms of Use</p>
          <p  className="footer-list"style={{ cursor: "pointer" }}>Why Buy Direct</p>
          <p  className="footer-list"style={{ cursor: "pointer" }}>Newsletter</p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h1 className="footer-heading" style={{ fontWeight: "900" }}>Contact Us</h1>
          <p className="footer-list" style={{ cursor: "pointer" }}>
            <FaPhone /> +389/72-111-222
          </p>
          <p className="footer-list" style={{ cursor: "pointer" }}>
            <MdMailOutline  style={{fontSize: "24px"}}/> example@ecommerce.com
          </p>
          <p  className="footer-list" style={{ cursor: "pointer" }}>
            <FaLocationArrow /> Location
          </p>
        </div>
      </div>
    </div>
  );
};
