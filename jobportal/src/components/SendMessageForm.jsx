import React from "react";
import { useState } from "react";
const SendMessageForm = () => {
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
    <aside className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-bold mb-4">Send Us Message</h3>
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
        
    </aside>
  );
};

export default SendMessageForm;
