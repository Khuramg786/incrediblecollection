import React from "react";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="https://ik.imagekit.io/b6iqka2sz/second.jpeg?updatedAt=1757845220722"
              className="d-block w-100 img-fluid"
              alt="Custom Printing"
            />

            {/* Desktop Text (absolute overlay) */}
            <div className="d-none d-md-block position-absolute top-50 start-50 translate-middle-y text-black p-5 text-center">
              <h1 className="fw-bold display-4">Custom Printing Solutions</h1>
              <h2 className="fw-semibold">Elevate Your Brand</h2>
              <p className="fs-5">
                From business cards to premium merchandise, we bring your ideas
                to life with high-quality custom prints. Perfect for startups,
                events, and businesses that want to stand out.
              </p>
              <button className="btn btn-dark btn-lg mt-3 fw-bold">
                Shop Now
              </button>
            </div>

            {/* Mobile Text (below image, visible only on small screens) */}
            <div className="d-block d-md-none text-black p-3 text-center bg-white">
              <h2 className="fw-bold fs-4">Custom Printing</h2>
              <p className="fs-6">
                High-quality custom prints for startups, events & businesses.
              </p>
              <button className="btn btn-dark btn-sm mt-2 fw-bold">
                Shop Now
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          {/* <div className="carousel-item">
            <img
              src="https://ik.imagekit.io/b6iqka2sz/3rd.jpeg?updatedAt=1757844134394"
              className="d-block w-100 img-fluid"
              alt="Luxury Brushes"
            />

              <div className="d-none d-md-block position-absolute top-50 start-50 translate-middle-y text-black p-5 text-center">
              <h1 className="fw-bold display-4">Luxury Makeup Brushes</h1>
              <h2 className="fw-semibold">Blend Like a Pro</h2>
              <p className="fs-5">
                Discover ultra-soft, high-quality brushes designed for flawless
                application and long-lasting beauty.
              </p>
              <button className="btn btn-dark btn-lg mt-3 fw-bold">
                Shop Now
              </button>
            </div>

            <div className="d-block d-md-none text-black p-3 text-center bg-white">
              <h2 className="fw-bold fs-4">Luxury Brushes</h2>
              <p className="fs-6">
                Ultra-soft brushes for flawless application.
              </p>
              <button className="btn btn-dark btn-sm mt-2 fw-bold">
                Shop Now
              </button>
            </div>
          </div> */}

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="https://ik.imagekit.io/b6iqka2sz/fdfd.jpeg?updatedAt=1757842763225"
              className="d-block w-100 img-fluid"
              alt="Custom Cups"
            />

             <div className="d-none d-md-block position-absolute top-50 start-50 translate-middle-y text-black p-5 text-center">
              <h1 className="fw-bold display-4">Custom Cup Printing</h1>
              <h2 className="fw-semibold">Sip in Style</h2>
              <p className="fs-5">
                Create personalized cups with vibrant, long-lasting prints for
                cafes, events, gifts, and brands that want to stand out.
              </p>
              <button className="btn btn-dark btn-lg mt-3 fw-bold">
                Order Now
              </button>
            </div>

            <div className="d-block d-md-none text-black p-3 text-center bg-white">
              <h2 className="fw-bold fs-4">Custom Cups</h2>
              <p className="fs-6">Stylish printed cups for cafes & events.</p>
              <button className="btn btn-dark btn-sm mt-2 fw-bold">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
