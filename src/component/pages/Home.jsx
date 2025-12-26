// Add components
import Slider from "../layout/Slider.jsx";
import Card from "../layout/Card.jsx";
import Header from "../Ui/Header.jsx";
import Footer from "../Ui/Footer.jsx";
import products from "../data/products.js";
// Add images
import star from "../../assets/images/star.svg";
import Button from "../button/Button.jsx";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      <Slider />
      <main className="main">
        <div className="cards">
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
              oldPrice={product.oldPrice}
              description={product.description}
              star={star}
              reviews="1,752"
            />
          ))}
        </div>
        {/* Back to top */}
        <Button />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
