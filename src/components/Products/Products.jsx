
import "./Products.css";

// Import your product images
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png"; // Health Supreme image
import product6 from "../../assets/product6.png";

const Products = () => {
  const categories = [
    "ALL",
    "Health Supreme",
    "CRM 365",
    "OSDA",
    "Marketplace E-Commerce Platform",
    "Sports Training App",
    "Fitness",
  ];

  const products = [
    { img: product1 },
    { img: product2 },
    { img: product3 },
    { img: product4 },
    { img: product5, title: "Health Supreme" }, // special card
    { img: product6 },
  ];

  return (
    <section className="products-section">
      <h2 className="products-title">Products</h2>

      <div className="product-categories">
        {categories.map((item, index) => (
          <span
            key={index}
            className={`category ${item === "ALL" ? "active" : ""}`}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="product-grid">
        {products.map((item, index) => (
          <div
            key={index}
            className={`product-item ${
              item.title === "Health Supreme" ? "highlight-card" : ""
            }`}
          >
            <img src={item.img} alt={`product-${index + 1}`} />

            {/* Custom design for the 5th card */}
            {item.title === "Health Supreme" && (
              <>
                <div className="card-overlay"></div>
                <div className="focus-brackets">
                  <span className="tl"></span>
                  <span className="tr"></span>
                  <span className="bl"></span>
                  <span className="br"></span>
                </div>
                <div className="card-text">
                  <h3>{item.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas et mi condimentum
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
