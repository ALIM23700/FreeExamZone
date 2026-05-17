"use client";

import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-5xl grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div>
          <h1 className="text-5xl font-bold text-blue-700 mb-6">
            Contact Us
          </h1>

          <p className="text-gray-600 text-lg leading-8">
            Have questions about exams, mock tests, or your account?
            Feel free to contact FreeExamZone anytime.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaEnvelope className="text-blue-700 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Email
                </h3>

                <p className="text-gray-600">
                  abdulalim23700@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-4 rounded-full">
                <FaWhatsapp className="text-green-600 text-xl" />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  WhatsApp
                </h3>

                <p className="text-gray-600">
                  01791723700
                </p>
              </div>
            </div>

          </div>

          {/* Social */}
          <div className="flex gap-5 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full">
              <FaFacebookF />
            </button>

            <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full">
              <FaYoutube />
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full">
              <FaWhatsapp />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <form className="space-y-6">

            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-bold transition">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}