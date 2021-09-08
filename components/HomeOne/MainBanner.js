import Link from "next/link";

const MainBanner = () => {
  return (
    <section className="main-banner-area main-banner-area-one">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div
            className="col-12 m-0 p-0"
            style={{
              position: "relative",
              right: "0",
              bottom: "0",
              minHeight: "100%",
              minWidth: "100%",
            }}
          >
            <video
              autoPlay
              muted
              loop
              id="myVideo"
              style={{ width: "100%", height: "100%", opacity: "0.6" }}
            >
              <source src="/videoes/banner.mp4" type="video/mp4" />
            </video>
            <div
              className="banner-text d-flex flex-column"
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",

                width: "100%",
                padding: "20px",
              }}
            >
              <h1 style={{ textShadow: " 2px 2px 2px rgba(150, 150, 150, 1)" }}>
                Specialized Artificial Intelligence Startup
              </h1>
              <p style={{ textShadow: " 2px 2px 2px rgba(150, 150, 150, 1)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida risus commodo
              </p>

              <div className="banner-btn">
                <Link href="/about-1">
                  <a className="default-btn">Learn More</a>
                </Link>

                <Link href="/contact">
                  <a className="default-btn">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="over-shape">
        <img src="/images/home-one/shape/animate1.png" alt="Image" />
        <img src="/images/home-one/shape/animate2.png" alt="Image" />
        <img src="/images/home-one/shape/animate3.png" alt="Image" />
      </div>

      <div className="white-shape">
        <img src="/images/home-one/bottom-shape.png" alt="Image" />
      </div>
    </section>
  );
};

export default MainBanner;
