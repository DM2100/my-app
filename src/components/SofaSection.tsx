
export const SofaComp = () => {
  return (
    <div className="container my-5 py-5 align-items-center styled-sofa-comp px-5">
     <h1 className="text-center mb-3" style={{ fontWeight: "700" }} >Furniture Section</h1>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="position-relative mx-1 mb-4 img-container">
            <img
              src="./images/nathan3.jpg"
              alt="Standing Lamp"
              className="img-fluid"
            />
            <div className="overlay-text">
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <button className="styled-btn2">Shop Now</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="position-relative mx-1 mb-4 img-container">
            <img
              src="./images/nathan2.jpg"
              alt="Standing Lamp"
              className="img-fluid"
            />
            <div className="overlay-text">
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <button className="styled-btn2">Shop Now</button>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="position-relative mx-1 mb-4 img-container">
            <img
              src="./images/nathan1.jpg"
              alt="Standing Lamp"
              className="img-fluid"
            />
            <div className="overlay-text">
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <button className="styled-btn2">Shop Now</button>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="position-relative   mb-4 img-container">
            <img src="./images/sofa3.jpg" alt="Sofa" className="img-fluid" />
            <div className="overlay-text">
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <button className="styled-btn2">Shop Now</button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="position-relative mb-4 img-container">
              <img src="./images/nathan4.jpg" alt="Sofa" className="img-fluid" />
              <div className="overlay-text">
                <h3>Lorem ipsum dolor sit amet.</h3>
              </div>
              <button className="styled-btn2">Shop Now</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="position-relative mb-4 img-container">
              <img src="./images/sofa4.jpg" alt="Sofa" className="img-fluid" />
              <div className="overlay-text">
                <h3>Lorem ipsum dolor sit amet.</h3>
              </div>
              <button className="styled-btn2">Shop Now</button>
            </div>
          </div>
      </div>
    </div>
  );
};
