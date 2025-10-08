
import Carousel from "react-bootstrap/Carousel";
import ban1 from "../images/carousel-1.jpg";
import ban2 from "../images/carousel-2.jpg";
// import ban3 from "../images/carousel-3.jpg";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <Carousel fade interval={3000} className="organic-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={ban1} alt="Fresh Organic Vegetables" />
          <Carousel.Caption>
            <h3>Fresh Organic Vegetables</h3>
            <p>Eat healthy, live healthy — delivered fresh from local farms every day.</p>
            <button className="carousel-btn">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={ban2} alt="Natural & Chemical-Free" />
          <Carousel.Caption>
            <h3>100% Natural & Chemical-Free</h3>
            <p>We bring you products grown with love and free from harmful pesticides.</p>
            <button className="carousel-btn">Explore More</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={ban2} alt="Healthy Lifestyle Starts Here" />
          <Carousel.Caption>
            <h3>Healthy Lifestyle Starts Here</h3>
            <p>Switch to organics today — because nature knows best.</p>
            <button className="carousel-btn">Get Started</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
