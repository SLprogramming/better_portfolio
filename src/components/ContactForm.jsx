import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div id="Contact" className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-2">Contact</h2>
      <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>

      {/* Contact Info */}
      <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col md:flex-row justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-yellow-500 text-2xl  border-1 p-2 rounded-full "> <MapPin size={20}/></span>
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600">No.10B, Thukha Street, Hlaing Township, Yangon.</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-yellow-500 text-2xl border-1 p-2 rounded-full"><Phone size={20} /></span>
          <div>
            <h3 className="font-semibold">Call Us</h3>
            <p className="text-gray-600">+959 421019280</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-yellow-500 text-2xl border-1 p-2 rounded-full"><Mail size={20}/></span>
          <div>
            <h3 className="font-semibold">Email Us</h3>
            <p className="text-gray-600">thaeoosupyae@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 border rounded-md w-full"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 border rounded-md w-full"
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="p-3 border rounded-md w-full mb-4"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows="5"
          className="p-3 border rounded-md w-full mb-4"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-3 rounded-md w-full md:w-auto mx-auto"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
