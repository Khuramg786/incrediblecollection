import React from "react";

const Blog = () => {
  return (
    <div className="container my-5">
      {/* Main Heading */}
      <h1 className="text-center fw-bold mb-4">E-commerce Insights & Trends</h1>

   {/* Intro Paragraph */}
<p className="text-muted text-center fs-5 w-75 mx-auto">
Welcome to <strong>InkcredibleCollection.store</strong> Blog! Our blog is
committed to providing you with the most up-to-date information on popular products,
innovative concepts, and customer favorites. From special printing products to
luxury collectibles and everyday beauty staples, we discover how
e-commerce is redefining the shopping experience. Keep watching for
inspiration, guidance, and product news that are most important to you.
</p>



   {/* Second Section */}
<div className="my-2">
  <h2 className="fw-bold">Die-Cast Cars: Collectibles & Creativity</h2>
  <p className="text-muted">
    Die-cast cars are not just small copies — they're gems
    that bring back memories and emotion. From copies of high-end automobiles to classic vintage cars,
    these products attract hobbyists as well as collectors. With
    <strong>InkcredibleCollection.store</strong>, we present collectors with
    rare and difficult-to-find die-cast cars collected from all over the world. This
category continues to be healthy as collectors look for unique, high-definition models
to share with their collections or gift to someone else. They are more than toys,
they are a representation of artisanship, history, and creativity that connect people
across the generations.
  </p>
</div>



{/* Third Section */}
<div className="my-2">
  <h2 className="fw-bold">Beauty Brushes: A Daily Essential</h2>
  <p className="text-muted">
  Beauty brushes are now a staple for all beauty lovers, professional or amateur. With the increasing demand for quality tools, manufacturers pay more heed to precision, longevity, and silky smooth application that takes the makeup experience to even greater levels. From foundation brushes to eye shadow palettes and contour kits, options are endless and continue
continuing to evolve. Consumers on <strong>InkcredibleCollection.store</strong> can browse
through a vast array of beauty brushes designed to suit every kind of style, skin
type, and price range. More than just instruments, the brushes have developed into
essentials when building confidence and obtaining ideal day-long looks.
  </p>
</div>



   {/* Third Section */}
<div className="my-2">
  <h2 className="fw-bold">Beauty Brushes: A Daily Essential</h2>
  <p className="text-muted">
  Beauty brushes are now essentials for all makeup enthusiasts, from newbies to
    professionals. With increasing demand for great quality tools, companies now
    emphasize precision, longevity, and smooth application that adds up to
    the overall makeup experience. From foundation brushes to eye shadow sets
    and contour kits, the options are limitless and ever-changing
growing. At <strong>InkcredibleCollection.store</strong>, consumers can easily
    compare, browse, and buy premium quality brushes that match their
    style, skin type, and budget. More than just tools, the brushes are now
    essentials in building self-confidence and quick daily makeups.
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
              src="https://ik.imagekit.io/jkths6fjn/Hcff4f47d223b4675b57c54287a30fc2cj.avif?updatedAt=1758755810491"
              className="card-img-top"
              alt="Printing Products"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Creative Printing</h5>
              <p className="card-text">
                Discover how personalized printing items like mugs, t-shirts,
                and cases are revolutionizing gifting and branding.
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
              src="https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Die%20Cast%20car.jpg?updatedAt=1758756027139"
              className="card-img-top"
              alt="Die-Cost Cars"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Die-Cost Car Models</h5>
              <p className="card-text">
                Explore the world of collectible die-cost cars loved by
                enthusiasts for their detail, design, and nostalgic value.
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
              src="https://ik.imagekit.io/jkths6fjn/inkcrediblecollection-Makeup%20Brushes.jpg?updatedAt=1758756162729"
              className="card-img-top"
              alt="Beauty Brush"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Beauty Brush Essentials</h5>
              <p className="card-text">
                Learn why professional-quality beauty brushes are a must-have
                in modern makeup routines for flawless results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
