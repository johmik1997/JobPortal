import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // to show success/error

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:3500/send/contact", { // your backend endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setStatus(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            You Will Grow, You Will Succeed. We Promise That
          </h2>
          <p className="text-gray-600">
            TalentHub is dedicated to connecting talented professionals with top employers. 
            Whether you have questions about job postings, hiring, or career advice, we’re ready to assist.
          </p>

          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-primary" />
              <div>
                <p className="font-semibold text-gray-800">Call for inquiry</p>
                <p className="text-gray-600">+257 388-6895</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-primary" />
              <div>
                <p className="font-semibold text-gray-800">Send us email</p>
                <p className="text-gray-600">support@talenthub.com</p>
              </div>
            </div>

            {/* Opening hours */}
            <div className="flex items-center space-x-3">
              <FaClock className="text-primary" />
              <div>
                <p className="font-semibold text-gray-800">Opening hours</p>
                <p className="text-gray-600">Mon - Fri: 10AM - 6PM</p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-primary" />
              <div>
                <p className="font-semibold text-gray-800">Office</p>
                <p className="text-gray-600">
                  19 North Road Piscataway, NY 08854
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-6">
            Send us your message
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-md font-semibold hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-gray-700">{status}</p>}
        </div>
      </div>
    </section>
  );
}
