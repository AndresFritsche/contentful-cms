import { useFetchServices } from "./fetchServices";

const Services = () => {
  const { loading, services } = useFetchServices();

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Services</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {services.map((service) => {
          const { id, img, url, title, description } = service;
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} className="img" />
              <h5>{title}</h5>
              <p>{description}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Services;