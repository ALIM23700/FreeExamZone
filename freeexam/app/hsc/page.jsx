"use client";

import Link from "next/link";

export default function HSCPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center text-orange-600 mb-12">
        HSC Exams
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">

        <Link href="/exam/hsc-science">
          <div className="bg-white hover:scale-105 transition cursor-pointer rounded-3xl shadow-xl p-14 text-center">
            <h2 className="text-4xl font-bold text-green-600">
              Science
            </h2>
          </div>
        </Link>

        <Link href="/exam/hsc-arts">
          <div className="bg-white hover:scale-105 transition cursor-pointer rounded-3xl shadow-xl p-14 text-center">
            <h2 className="text-4xl font-bold text-pink-600">
              Arts
            </h2>
          </div>
        </Link>

        <Link href="/exam/hsc-commerce">
          <div className="bg-white hover:scale-105 transition cursor-pointer rounded-3xl shadow-xl p-14 text-center">
            <h2 className="text-4xl font-bold text-blue-600">
              Commerce
            </h2>
          </div>
        </Link>

      </div>
    </div>
  );
}