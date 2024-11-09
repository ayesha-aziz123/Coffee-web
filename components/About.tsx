import Link from "next/link";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="heading">
          About <span>Us</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          nihil, earum commodi dolor at soluta doloremque temporibus, dicta
          dolorem consequuntur unde explicabo illo vitae mollitia optio porro
          nemo obcaecati delectus.
        </p>
        <Link className="btn" href={"/"}>
          Read More
        </Link>
      </div>
    </section>
  );
};

export default About;
