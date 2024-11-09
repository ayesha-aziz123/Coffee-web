import Image from "next/image";


const Cofees = () => {
  return (
    <section className="cofees" id="cofees">
      <h2 className="heading">Coffees</h2>
      <div className="cofees-container">
        <div className="cofees-box">
          <Image src={"/cup.jpg"} height={500} width={500} alt="" />
          <div className="cofees-info">
            <h4>Cofee 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, accusantium. Illo, facere eius! Quibusdam repellendus
              a impedit facere dolorem distinctio!
            </p>
          </div>
        </div>

        <div className="cofees-box">
          <Image src={"/cup2.png"} height={500} width={500} alt="dbcn" />
          <div className="cofees-info">
            <h4>Cofee 2</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, accusantium. Illo, facere eius! Quibusdam repellendus
              a impedit facere dolorem distinctio!
            </p>
          </div>
        </div>
        <div className="cofees-box">
          <Image src={"/cup3.jpg"} height={500} width={500} alt="dbcn" />
          <div className="cofees-info">
            <h4>Cofee 3</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, accusantium. Illo, facere eius! Quibusdam repellendus
              a impedit facere dolorem distinctio!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cofees;
