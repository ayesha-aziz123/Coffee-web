const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Us</span>
      </h2>

      <form>
        <div className="input-box">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input-box">
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Subject" />
        </div>

        <textarea name="" id="" rows={8} placeholder="Your Meassage">
        </textarea>
          <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
