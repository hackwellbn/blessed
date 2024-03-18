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
    <div className="contact-section" id="contacts">
      <div className="contact-text-area">
        <h1>Hit Us up</h1>
        <p>
          For any inquiries, feedback, or collaboration opportunities, feel free
          to get in touch with us. Our dedicated team is here to assist You can
          reach us through the contact form. We look forward to hearing from you
          and providing the best assistance for your needs.
        </p>
        <p>
          Get in touch with us to discuss your welding needs or request a quote.
        </p>
      </div>

      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <div className="form-section">
            <div className="name-section">
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="enter your username"
                required
              />
              <br />

              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="enter your email address"
                required
              />
              <br />
            </div>
            <div className="tel-section">
              <label htmlFor="phone"></label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="enter your phone number"
                required
              />
              <br />
              <select
                id="countySelect"
                name="county"
                className="select-element"
              >
                <option value="Baringo">selectcounty</option>
                <option value="Baringo">Baringo</option>
                <option value="Bomet">Bomet</option>
                <option value="Bungoma">Bungoma</option>
                <option value="Busia">Busia</option>
                <option value="Elgeyo Marakwet">Elgeyo Marakwet</option>
                <option value="Embu">Embu</option>
                <option value="Garissa">Garissa</option>
                <option value="Homa Bay">Homa Bay</option>
                <option value="Isiolo">Isiolo</option>
                <option value="Kajiado">Kajiado</option>
                <option value="Kakamega">Kakamega</option>
                <option value="Kericho">Kericho</option>
                <option value="Kiambu">Kiambu</option>
                <option value="Kilifi">Kilifi</option>
                <option value="Kirinyaga">Kirinyaga</option>
                <option value="Kisii">Kisii</option>
                <option value="Kisumu">Kisumu</option>
                <option value="Kitui">Kitui</option>
                <option value="Kwale">Kwale</option>
                <option value="Laikipia">Laikipia</option>
                <option value="Lamu">Lamu</option>
                <option value="Machakos">Machakos</option>
                <option value="Makueni">Makueni</option>
                <option value="Mandera">Mandera</option>
                <option value="Marsabit">Marsabit</option>
                <option value="Meru">Meru</option>
                <option value="Migori">Migori</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Murang'a">Murang'a</option>
                <option value="Nairobi">Nairobi</option>
                <option value="Nakuru">Nakuru</option>
                <option value="Nandi">Nandi</option>
                <option value="Narok">Narok</option>
                <option value="Nyamira">Nyamira</option>
                <option value="Nyandarua">Nyandarua</option>
                <option value="Nyeri">Nyeri</option>
                <option value="Samburu">Samburu</option>
                <option value="Siaya">Siaya</option>
                <option value="Taita Taveta">Taita Taveta</option>
                <option value="Tana River">Tana River</option>
                <option value="Tharaka-Nithi">Tharaka-Nithi</option>
                <option value="Trans Nzoia">Trans Nzoia</option>
                <option value="Turkana">Turkana</option>
                <option value="Uasin Gishu">Uasin Gishu</option>
                <option value="Vihiga">Vihiga</option>
                <option value="Wajir">Wajir</option>
                <option value="West Pokot">West Pokot</option>
              </select>
              <div className="select-arrow"></div>
            </div>
          </div>
          {/* </form> */}
          <label for="message1"></label>
          <textarea
            id="message1"
            name="enter your message"
            rows="4"
            cols="50"
          ></textarea>
          <br />
          <div class="h-captcha" data-captcha="true"></div>
          <button className="btn">submit</button>

          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
