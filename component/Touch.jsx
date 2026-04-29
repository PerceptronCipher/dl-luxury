"use client";
import { MapPin, Phone, Mail, Hourglass, Send } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const Touch = () => {
  // Using a simple object for form state in this example
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { message } = formData;

    const subject = encodeURIComponent("New Message");
    const body = encodeURIComponent(message);

    const mailtoLink = `mailto:info@dluxuryco.org?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-stone-50" id="contact">
      <Reveal>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-16">
          {/* --- Left Column: Header & Contact Cards --- */}
          <div className="md:w-1/2 lg:w-[45%] flex flex-col justify-between">
            {/* Header text from the previous component */}
            <div className="text-center md:text-left mb-12 md:mb-0">
              <h2 className="font-bold pb-4 text-amber-500 uppercase tracking-wider text-sm">
                Get in Touch
              </h2>
              <p className="text-stone-900 text-5xl font-extrabold pb-6 leading-tight">
                Let’s Connect
              </p>
              <p className="text-stone-600 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                We are here to answer your questions and provide the best
                solutions for your needs.
              </p>
            </div>

            {/* New Stacked Contact Cards (from image) */}
            <div className="space-y-6 md:mt-12">
              {/* HEAD OFFICE */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-100 hover:shadow-lg transition duration-300">
                <MapPin
                  size={28}
                  className="text-amber-500 mt-1 flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-xl text-stone-900 mb-1">
                    Head Office
                  </div>
                  <div className="text-stone-600 leading-relaxed">
                    Ilorin, Kwara State, Nigeria
                  </div>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-100 hover:shadow-lg transition duration-300">
                <Phone
                  size={28}
                  className="text-amber-500 mt-1 flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-xl text-stone-900 mb-1">
                    Phone
                  </div>
                  <a
                    href="tel:+2348061234567"
                    className="text-stone-600 hover:text-amber-600 transition"
                  >
                    +234 8083165652
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-100 hover:shadow-lg transition duration-300">
                <Mail size={28} className="text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-xl text-stone-900 mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:info@dluxury.co"
                    className="text-stone-600 hover:text-amber-600 transition"
                  >
                    info@dluxuryco.org
                  </a>
                </div>
              </div>

              {/* WORKING HOURS */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-stone-100 hover:shadow-lg transition duration-300">
                <Hourglass
                  size={28}
                  className="text-amber-500 mt-1 flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-xl text-stone-900 mb-1">
                    Working Hours
                  </div>
                  <div className="text-stone-600 leading-relaxed">
                    Mon - Sat: 8:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: The Form Card (from image) --- */}
          <div className="md:w-1/2 lg:w-[55%] flex">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-white p-8 md:p-12 rounded-3xl border border-stone-100 shadow-xl flex flex-col justify-between"
            >
              {/* Input Grid (Responsive) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* Name */}
                <div className="sm:col-span-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-200 focus:border-amber-300 transition text-lg"
                  />
                </div>
                {/* Email */}
                <div className="sm:col-span-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-200 focus:border-amber-300 transition text-lg"
                  />
                </div>
                {/* Message */}
                <div className="col-span-1 sm:col-span-2">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="10"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-200 focus:border-amber-300 transition text-lg resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button (Image style) */}
              <button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white text-xl shadow-md group"
              >
                Send Message
                <Send
                  size={24}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Touch;
