import React from "react";
import "./Contacts.css";
const Contacts = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a49903d3-0d96-476f-8a22-ef25be1e2ec7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact-us" id="contact-us">
      <h3>Hit us up</h3>
      <p>
        Decades of dedication define our ethos: surpassing expectations,
        delivering top-tier fabrication promptly. Collaborating closely with
        clients, ensuring trust and reliability. Our partners share our
        commitment to excellence.
      </p>
      <section className="contact-us-container">
        <div className="contact-us-cards">
          <div className="contact-us-content">
            <h1 className="contact-us-heading">Get in touch</h1>
            <p className="contact-us-text">
              Get in touch with us to discuss your welding needs or request a
              quote.
            </p>
            <hr className=" divider" style={{ margin: "20px auto" }} />
            <h2> contact information</h2>
            <div className="call-col">
              <div className="call-icon">
                <i class="fas fa-phone"></i>
                <p className="phone-number">+234 803 234 5678</p>
              </div>
              <div className="emails info">
                <i class="fas fa-envelope"></i>
                <p className="email-address">info@blessedfabricators.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-cards">
          <div className="contact-us-content">
            <form onSubmit={onSubmit}>
              <div className="input-contacts">
                <div>
                  <input
                    type="text"
                    name="firsName"
                    id=""
                    placeholder="FirstName"
                  />
                  <input type="text" placeholder="lastName" />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="phone"
                    required
                  />
                  <input type="email" placeholder="email" />
                </div>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  placeholder="CompanyName"
                />
              </div>
              <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type="submit">Submit</button>
              </div>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
