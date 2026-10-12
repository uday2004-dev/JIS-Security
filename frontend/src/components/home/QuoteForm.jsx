import { useState } from "react";
import axios from "axios";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      setStatus(response.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        location: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-yellow-500 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em]">
            Request A Quote
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Tell Us What You Need
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-3xl bg-white p-6 shadow-xl sm:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-yellow-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-yellow-500"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-yellow-500"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-yellow-500"
            >
              <option value="">Select Service</option>
              <option value="Security Services">Security Services</option>
              <option value="Housekeeping">Housekeeping</option>
              <option value="Facility Management">
                Facility Management
              </option>
              <option value="Corporate Staffing">Corporate Staffing</option>
              <option value="Manpower Support">Manpower Support</option>
            </select>

            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Your Location"
              required
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-yellow-500 md:col-span-2"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-yellow-500 md:col-span-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>

          {status && (
            <p className="mt-4 text-center text-sm font-medium">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;