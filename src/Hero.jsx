import heroImg from "./assets/undraw_next-js_hy59.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            sapiente temporibus fugit alias! Voluptatem fugit voluptates facere
            facilis saepe,
          </p>
          <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
