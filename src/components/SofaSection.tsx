import React from "react";

export const SofaComp = () => {
  return (
    <div className="container my-5 py-5 align-items-center">
      <div className="row">
        <div className="col-lg-4">
          <div className="position-relative mx-1">
            <img src="./images/lamb1.jpg" alt="" style={{ width: "448px" }} />
            <div
              className="text-center"
              style={{
                width: "400px",
                position: "absolute",
                bottom: "130px",
                left: "20px",
                right: "0",
                color: "#fafafa",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <button
              className=" styled-btn2"
              style={{
                position: "absolute",
                bottom: "70px",
                left: "21px",
                right: "",
                color: "#fafafa",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="position-relative mt-2 mx-4">
            <img src="./images/sofa3.jpg" alt="" style={{ width: "400px" }} />
            <div
              className="text-center"
              style={{
                width: "370px",
                position: "absolute",
                bottom: "130px",
                left: "20px",
                right: "0",
                color: "#fafafa",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <button
              className=" styled-btn2"
              style={{
                position: "absolute",
                bottom: "60px",
                left: "23px",
                right: "",
                color: "#fafafa",
              }}
            >
              Shop Now
            </button>
          </div>
          <div className="position-relative mt-2 mx-4">
            <img src="./images/sofa4.jpg" alt="" style={{ width: "400px" }} />
            <div
              className="text-center"
              style={{
                width: "370px",
                position: "absolute",
                bottom: "130px",
                left: "20px",
                right: "0",
                color: "#fafafa",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <button
              className=" styled-btn2"
              style={{
                position: "absolute",
                bottom: "60px",
                left: "23px",
                right: "",
                color: "#fafafa",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="position-relative">
            <img
              src="./images/standinglamp.jpg"
              alt=""
              style={{ width: "400px" }}
            />
            <div
              className="text-center"
              style={{
                width: "370px",
                position: "absolute",
                bottom: "230px",
                left: "10px",
                right: "0",
                color: "#fafafa",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h3>Lorem ipsum dolor sit amet.</h3>
              
            </div>
            <button
              className="styled-btn2"
              style={{
                position: "absolute",
                bottom: "170px",
                left: "10px",
                right: "",
                color: "#fafafa",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
