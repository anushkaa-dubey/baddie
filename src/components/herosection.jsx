const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>Every Night Is Girls Night</h1>
          <p>
          Na na na, diva is a female version of a hustla
          Of a hustla, of a, of a hustla
          Na na na, diva is a female version of a hustla
          Of a hustla, of a, of a hustla

          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/baddie.jpeg" alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;