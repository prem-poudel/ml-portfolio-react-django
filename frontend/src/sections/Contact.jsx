import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("https://ml-portfolio-react-django.onrender.com/api/contact/send/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setSubmitMessage(data.message);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    }
    catch (err) {
      setSubmitMessage("Failed to send message. Please try again later.");
    }
    setTimeout(() => {
      setSubmitMessage("");
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-20 text-gray-800"
    >
      <div className="relative w-full max-w-md sm:max-w-xl lg:max-w-2xl">
        {/* Notification */}
        {submitMessage && (
          <div className="absolute w-fit max-w-xs sm:max-w-sm p-3 bg-teal-500 rounded shadow-lg -top-20 right-0 text-white transition-opacity duration-300 ease-in-out opacity-90 text-sm sm:text-base">
            {submitMessage}
          </div>
        )}

        <div>
          <SectionTitle title="Contact" subtitle="Feel free to reach out!" />
          <p className="text-base sm:text-lg mb-6 text-center sm:text-left">
            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. Let's connect!
          </p>

          <form onSubmit={handleSubmit} className="text-white space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-md transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
