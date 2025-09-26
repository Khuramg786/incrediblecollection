import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const Contactus = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              {/* Title */}
              <h1 className="text-center mb-4 fw-bold">
                Contact <span style={{color:"#d8b254"}}>Our Store</span>
              </h1>
              <p className="text-center text-muted mb-5">
                Have a question about your order, product, or return? Fill out
                the form below or reach us directly.
              </p>

              <div className="row g-4">
                {/* Contact Form */}
               <div className="col-lg-6">
  <form>
    <div className="mb-3">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Your Name"
      />
    </div>
    <div className="mb-3">
      <input
        type="email"
        className="form-control form-control-lg"
        placeholder="Your Email"
      />
    </div>
    <div className="mb-3">
      <input
        type="tel"
        className="form-control form-control-lg"
        placeholder="Your Phone"
      />
    </div>
    <div className="mb-3">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Order ID (if any)"
      />
    </div>
    <div className="mb-3">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Subject"
      />
    </div>
    <div className="mb-3">
      <textarea
        className="form-control form-control-lg"
        rows="5"
        placeholder="Your Message"
      ></textarea>
    </div>

    {/* Center button */}
    <div className="text-center">
      <button
        type="submit"
        className="btn btn-dark btn-lg fw-bold w-75 shadow-sm"
      >
        Send Message
      </button>
    </div>
  </form>
</div>


                {/* Store Info */}
                <div className="col-lg-6">
                  <div className="bg-light p-4 rounded-3 h-100 shadow-sm">
                    <h3 className="fw-semibold mb-3">Our Store Info</h3>
                    <p className="mb-2">📍 123 E-Shop Plaza, London, UK</p>
                    <p className="mb-2">📞 +44 7762 917277</p>
                    <p className="mb-2">📞 +923019854185</p>
                    <p className="mb-4">📧 incrediblecollection0@gmail.com</p>

                    <h5 className="fw-semibold mb-3">Follow us</h5>
                    <div className="d-flex gap-3 fs-2 mb-4">
                      <a href="https://www.facebook.com/profile.php?id=61580362841352" target="_blank" rel="noreferrer">
                        <FaFacebook style={{ color: "#1877F2" }} />
                      </a>
                      <a href="https://www.instagram.com/incrediblecollection0/" target="_blank" rel="noreferrer">
                        <FaInstagram style={{ color: "#E4405F" }} />
                      </a>
                         <a
        href="https://www.tiktok.com/@incredible.collec09?_t=ZN-8zuQ4WZKFkc&_r=1"
        target="_blank"
        rel="noreferrer"
        className="text-dark fs-3"
      >
        <FaTiktok />
      </a>
                  
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedin style={{ color: "#0077B5" }} />
                      </a>
                   
                      <a href="https://wa.me/923019854185" target="_blank" rel="noreferrer">
                        <FaWhatsapp style={{ color: "#25D366" }} />
                      </a>
                    </div>

                    {/* Google Map */}
                    <div>
                      <iframe
                        title="store-location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19815.5430169238!2d-0.1340!3d51.5090!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad91f3d8a5b%3A0xa4e6f7f3bb1b1a0!2sLondon!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-3 shadow-sm"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              {/* End row */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
