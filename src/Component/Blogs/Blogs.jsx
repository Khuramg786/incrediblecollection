import React from "react";

const Blog = () => {
  return (
    <div className="container my-5">
      {/* Main Heading */}
      <h1 className="text-center fw-bold mb-4">
        Customized Printing Products Insights & Trends
      </h1>

      {/* Intro Paragraph */}
      <p className="text-muted text-center fs-5 w-75 mx-auto">
        Welcome to <strong>InkcredibleCollection.store</strong> Blog! Our blog is
        dedicated to sharing the latest updates, creative ideas, and trends in{" "}
        <strong>customized printing products</strong>. From personalized gifts
        to branded merchandise, discover how unique printing solutions are
        changing the way people celebrate, promote, and express themselves.
      </p>

      {/* Section 1 */}
      <div className="my-2">
        <h2 className="fw-bold">Personalized Gifts: Memorable & Unique</h2>
        <p className="text-muted">
          Customized printing has made gift-giving more meaningful than ever.
          Products like printed mugs, cushions, photo frames, and t-shirts allow
          people to create one-of-a-kind presents that capture emotions,
          memories, and personal style. At{" "}
          <strong>InkcredibleCollection.store</strong>, we help you turn simple
          items into cherished keepsakes that leave a lasting impression.
        </p>
      </div>

      {/* Section 2 */}
      <div className="my-2">
        <h2 className="fw-bold">Branding with Customized Printing</h2>
        <p className="text-muted">
          Businesses today use customized printing products like stationery,
          corporate gifts, uniforms, and promotional items to strengthen their
          brand identity. These personalized solutions not only boost visibility
          but also create a professional image. With premium printing quality
          and innovative designs, companies can showcase their brand in a unique
          and memorable way.
        </p>
      </div>

      {/* Section 3 */}
      <div className="my-2">
        <h2 className="fw-bold">Wooden & Premium Customized Items</h2>
        <p className="text-muted">
          Beyond paper and fabric, customized printing now extends to wooden and
          premium products. From engraved wooden plaques to custom-printed
          organizers and décor items, these products blend durability with
          creativity. Perfect for gifting, events, or personal collections, they
          add elegance and uniqueness that stands out from regular prints.
        </p>
      </div>

      {/* Section 4 */}
      <div className="my-2">
        <h2 className="fw-bold">Everyday Lifestyle Products</h2>
        <p className="text-muted">
          Customized printing is not limited to gifts or business use. Items
          like printed phone cases, water bottles, tote bags, and stationery
          have become everyday essentials with a personal touch. They allow
          individuals to showcase their style, while also making practical items
          more enjoyable and unique.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="row mt-5">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div
            className="card shadow-lg border-0 h-100"
            style={{
              borderRadius: "15px",
              transform: "perspective(1000px) rotateX(2deg)",
            }}
          >
            <img
              src="https://ik.imagekit.io/b6iqka2sz/inkcrediblecollection-White%20Coffee%20Mug.jpg?updatedAt=1759433447006"
              className="card-img-top"
              alt="Custom Mugs"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Personalized Mugs</h5>
              <p className="card-text">
                Coffee tastes better in a mug designed just for you! Perfect for
                gifts, branding, or personal use.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div
            className="card shadow-lg border-0 h-100"
            style={{
              borderRadius: "15px",
              transform: "perspective(1000px) rotateY(2deg)",
            }}
          >
            <img
              src="https://ik.imagekit.io/b6iqka2sz/inkcrediblecollection-Custom%20T-shirts.jpg?updatedAt=1759433670439"
              className="card-img-top"
              alt="Custom T-Shirts"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Custom T-Shirts</h5>
              <p className="card-text">
                Wear your personality with stylish, printed t-shirts designed
                with your choice of graphics, text, or logos.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div
            className="card shadow-lg border-0 h-100"
            style={{
              borderRadius: "15px",
              transform: "perspective(1000px) rotateX(-2deg)",
            }}
          >
            <img
              src="https://ik.imagekit.io/b6iqka2sz/inkcrediblecollection-Engraved%20Wooden%20cards.png?updatedAt=1759433840671"
              className="card-img-top"
              alt="Wooden Engraving"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Wooden Engravings</h5>
              <p className="card-text">
                Add a touch of elegance with engraved wooden products — perfect
                for gifts, décor, or personal keepsakes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
