import React, { useState } from "react";
import "../styles/ContactForm.css";

const servicesOptions = [
  "Select Your Service",
  "Cable Tv",
  "Cable Internet",
  "Satellite Tv",
  "Satellite Internet",
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",

    selectedService: servicesOptions[0],
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    // You can add your own logic here to handle form submission
  };

  return (
    <div>
      {/* <h1>Contact Us</h1> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Type Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Type Your Phone No"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Type Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="services">Services</label>
          <select
            id="services"
            name="selectedService"
            placeholder="Select Your Service"
            value={formData.selectedService}
            onChange={handleChange}
          >
            {servicesOptions.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
