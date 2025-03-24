import { useState } from "react";
import contact from "@/assets/Contact us.gif";


export const Contacts = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataObj = new FormData(e.currentTarget);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-28">
      <div className="flex flex-col gap-8">
        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <img src={contact} alt="Profile" className="w-68 h-68 rounded-full shadow-lg object-cover" />
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold text-secondary-800">Contact Information</h2>
            <ul className="mt-3 space-y-4 text-secondary-600">
              <li className="flex items-center justify-center">
                <span className="mr-2">📧</span><a href="mailto:sachitdahal33@gmail.com" className="hover:underline">sachitdahal33@gmail.com</a>
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2">📞</span><a href="tel:+9779803033781" className="hover:underline">+977 9803033781</a>
              </li>
              <li className="flex items-center justify-center">
                <span className="mr-2">📍</span>Pasikot, Kathmandu
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-secondary-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-primary mb-6">Contact Me</h2>
          <p className="text-secondary-400 mb-6">If you have any questions or inquiries, feel free to get in touch:</p>

          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <div className="mb-6">
              <label htmlFor="name" className="block text-secondary-69">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input mt-2 block w-full bg-secondary-700 text-secondary-200 border border-secondary-600 rounded-md py-3 px-6"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-secondary-69">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input mt-2 block w-full bg-secondary-700 text-secondary-200 border border-secondary-600 rounded-md py-3 px-6"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-secondary-69">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="form-textarea mt-2 block w-full bg-secondary-700 text-secondary-200 border border-secondary-600 rounded-md py-3 px-6"
              ></textarea>
            </div>

  
            <div className="flex justify-center">
            <button
  type="submit"
  className="bg-primary text-white py-2 px-4 rounded-md hover:bg-red-400 hover:shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary-800"
>
  Submit
</button>

            </div>
          </form>

          {status === "success" && (
            <p className="text-green-500 mt-6">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-6">Error sending message. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
