
import "../images/home.css"
const Home=()=>{
    return(
        <>
        
  return (
    <section id="home" className="mt-5 pt-4">
      <div id="organicCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#organicCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#organicCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#organicCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6" className="d-block w-100" alt="Organic Vegetables" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Fresh Organic Vegetables</h2>
              <p>Direct from farms to your kitchen.</p>
              <a href="#" className="btn btn-success">Shop Now</a>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc" className="d-block w-100" alt="Fruits" />
            <div className="carousel-caption d-none d-md-block">
              <h2>100% Natural Fruits</h2>
              <p>Rich in taste, rich in health.</p>
              <a href="#" className="btn btn-outline-light">Explore</a>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1590080875831-a70c2835e62b" className="d-block w-100" alt="Organic Store" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Healthy Life Starts Here</h2>
              <p>Choose Organic, Choose Better Living.</p>
              <a href="#" className="btn btn-success">Get Started</a>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#organicCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#organicCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );




        </>
    )
}
export default Home;