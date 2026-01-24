import { useState } from "react";
import { supabase } from "../supabase";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  console.log("Submitting form:", form);

  const { data, error } = await supabase
    .from("contacts")
    .insert([form])
    .select(); // <-- IMPORTANT

  console.log("Supabase data:", data);
  console.log("Supabase error:", error);

  if (error) {
    setStatus(error.message); // <-- SHOW REAL ERROR
  } else {
    setStatus("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
  }
};

  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact <span className="text-blue-500">Us</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow grid gap-6"
        >
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border rounded-xl px-4 py-3"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="border rounded-xl px-4 py-3"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="border rounded-xl px-4 py-3"
          ></textarea>

          <button className="bg-blue-600 text-white py-3 rounded-xl font-semibold">
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-600">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
