import React from "react";
const Footer =()=>{
    return(
        <>
         <footer className=" text-white text-center p-4 mt-5" style={{ background: "linear-gradient(to left, #c9930f, rgba(201,147,15,0))" }}>
      {/* Top Menu */}
      <div className="mb-3 fw-bold">
        <a href="#" className="text-white text-decoration-none mx-2">
          HOME
        </a>
        |
        <a href="#" className="text-white text-decoration-none mx-2">
          CONTACT US
        </a>
        |
        <a href="#" className="text-white text-decoration-none mx-2">
          Products
        </a>
        |
        <a href="#" className="text-white text-decoration-none mx-2">
         Accessories
        </a>
        |
        <a href="#" className="text-white text-decoration-none mx-2">
          New products
        </a>
        |
        <a href="#" className="text-white text-decoration-none mx-2">
          Terms and conditions of use
        </a>
      </div>

        <div className="row text-center text-md-start align-items-center">
          
     {/* Company Logo */}
<div className="col-md-3 mb-3 d-flex align-items-center">
  <img
    src="https://ik.imagekit.io/b6iqka2sz/logojjj.png?updatedAt=1757702051692"
    alt="Company Logo"
    style={{ maxHeight: "150px", width: "auto", marginLeft: "40px", cursor: "pointer" }}
  />
</div>


 {/* App Download */}
          <div className="col-md-5 mb-3 text-center text-md-end">
            <p className="mb-2">Download the free APP</p>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 flex-wrap">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                height="45"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                height="45"
              />
              <img
                src="https://thesun.my/base-portlet/webrsrc/theme/ef42d55a70095e7e6192be26e9969101.png"
                alt="AppGallery"
                height="45"
              />
            </div>
          </div>
          {/* Social Media Icons */}
         <div className="col-md-4 mb-3 d-flex justify-content-center gap-3 flex-wrap">
  <a href="https://www.facebook.com/profile.php?id=61580362841352" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
      alt="Facebook"
      className="rounded-circle"
      width="35"
      height="35"
    />
  </a>
  
  <a href="https://www.instagram.com/incrediblecollection0/" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
      alt="Instagram"
      className="rounded-circle"
      width="35"
      height="35"
    />
  </a>
  <a href="https://x.com/incredible79682" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
      alt="Twitter"
      className="rounded-circle"
      width="35"
      height="35"
    />
  </a>

  <a href="https://www.tiktok.com/@incredible.collec09?_t=ZN-8zuQ4WZKFkc&_r=1" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn-icons-png.flaticon.com/512/3046/3046122.png"
      alt="TikTok"
      className="rounded-circle"
      width="35"
      height="35"
    />
  </a>
  

</div>


         
     
      </div>
    </footer>
        </>
    )
}
export default Footer;