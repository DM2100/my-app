export const BannerComponent = () => {
  return (
    <div className="banner-section" style={{ position: "relative" }}>
      <img
        src="./images/banner1.jpg"
        alt=""
        style={{ width: "100%", height: "75vh" }}
      />
      <div
        className="banner-text px-3 py-3 mx-5"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1 className="text-white ">Welcome to Our Website</h1>
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          magni reiciendis distinctio neque, aspernatur sit consequatur
          molestias laborum. Beatae, maiores?
        </p>
      </div>
      <button className="styled-btn1 mt-1">Shop Now</button>
    </div>
  );
};
