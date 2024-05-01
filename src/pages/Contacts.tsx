import contact from "@/assets/Contact us.gif";
export const Contacts = () => {
  return (
    <div className="container mx-auto px-4 py-28">
      <div className="md:flex md:items-center md:justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 md:text-center md:mb-0 mb-8">
          <img
            src={contact}
            alt="Profile"
            className="mx-auto w-250 h-250 rounded-full"
          />
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-secondary-800">
              Contact Information
            </h2>
            <ul className="mt-2 text-secondary-600">
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-secondary-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18v-6M12 8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
                </svg>
                sachitdahal33@gmail.com
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-secondary-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18v-6M12 8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
                </svg>
                +977 9803033781
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-secondary-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18v-6M12 8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
                </svg>
                Baluwatar, Kathmandu
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <hr className="my-6 md:hidden" />
          <div className="bg-secondary-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Contact me</h2>
            <p className="text-secondary-400 mb-4">
              If you have any questions or inquiries, feel free to get in touch
              using the contact form below:
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-secondary-69">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input mt-1 block w-full bg-secondary-700 text-secondary-200 border border-secondary-600 rounded-md py-2 px-4"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-secondary-69">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input mt-1 block w-full bg-secondary-700 text-secondary-200 border border-secondary-600 rounded-md py-2 px-4"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-secondary-69">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="form-textarea mt-1 block w-full bg-secondary-700 text-secondary-200 border border-secondary-600 rounded-md py-2 px-4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-secondary-900 text-white py-2 px-4 rounded-md hover:bg-secondary-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
