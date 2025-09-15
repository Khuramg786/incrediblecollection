import React from "react";
const Banner=()=>{
    return(
        <>
     <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
   <div class="carousel-item active position-relative">
  <img src="https://ik.imagekit.io/b6iqka2sz/second.jpeg?updatedAt=1757845220722" 
       class="d-block w-100" alt="..."/>
 <div class="position-absolute top-50 start-50 translate-middle-y  text-black p-5">
  <h1 class="fw-bold display-4">Custom Printing Solutions</h1>
  <h2 class="fw-semibold">Elevate Your Brand</h2>
  <p class="fs-5">
    From business cards to premium merchandise,<br/> we bring your ideas to life 
    with high-quality custom prints.<br/> Perfect for startups, events, and businesses 
    that want to stand out.
  </p>
  <button class="btn btn-dark btn-lg mt-3 fw-bold">Shop Now</button>
</div>

</div>


    <div class="carousel-item position-relative">
      <img src="https://ik.imagekit.io/b6iqka2sz/3rd.jpeg?updatedAt=1757844134394" 
           class="d-block w-100" alt="..."/>
    <div class="position-absolute top-50 end-0 translate-middle-y  text-black p-5">
  <h1 class="fw-bold display-4">Luxury Makeup Brushes</h1>
  <h2 class="fw-semibold">Blend Like a Pro</h2>
  <p class="fs-5">
    Discover ultra-soft, high-quality brushes designed <br/>
    for flawless application and long-lasting beauty. <br/>
    Perfect for beginners and professionals who demand perfection.
  </p>
  <button class="btn btn-dark btn-lg mt-3 fw-bold">Shop Now</button>
</div>

    </div>

    <div class="carousel-item position-relative">
      <img src="https://ik.imagekit.io/b6iqka2sz/fdfd.jpeg?updatedAt=1757842763225" 
           class="d-block w-100" alt="..."/>
      <div class="position-absolute top-50 end-0 translate-middle-y  text-black p-5">
  <h1 class="fw-bold display-4">Custom Cup Printing</h1>
  <h2 class="fw-semibold">Sip in Style</h2>
  <p class="fs-5">
    Create personalized cups with vibrant, long-lasting prints <br/>
    that make every sip memorable. <br/>
    Perfect for cafes, events, gifts, and brands that want to stand out.
  </p>
  <button class="btn btn-dark btn-lg mt-3 fw-bold">Order Now</button>
</div>

    </div>
  </div>

  <button class="carousel-control-prev d-flex align-items-center justify-content-center" 
          type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next d-flex align-items-center justify-content-center" 
          type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        </>
    )
}
export default Banner;