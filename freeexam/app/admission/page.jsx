"use client";

import Link from "next/link";

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center text-purple-700 mb-12">
        Admission Exams
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Science */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-green-600 mb-8">
            Science
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <Link href="/exam/physics">
              <button className="bg-green-100 hover:bg-green-200 p-4 rounded-2xl w-full">
                Physics
              </button>
            </Link>

            <Link href="/exam/chemistry">
              <button className="bg-green-100 hover:bg-green-200 p-4 rounded-2xl w-full">
                Chemistry
              </button>
            </Link>

            <Link href="/exam/biology">
              <button className="bg-green-100 hover:bg-green-200 p-4 rounded-2xl w-full">
                Biology
              </button>
            </Link>

            <Link href="/exam/math">
              <button className="bg-green-100 hover:bg-green-200 p-4 rounded-2xl w-full">
                Math
              </button>
            </Link>
          </div>
        </div>

        {/* Arts */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-pink-600 mb-8">
            Arts
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <Link href="/exam/bangla">
              <button className="bg-pink-100 hover:bg-pink-200 p-4 rounded-2xl w-full">
                Bangla
              </button>
            </Link>

            <Link href="/exam/english">
              <button className="bg-pink-100 hover:bg-pink-200 p-4 rounded-2xl w-full">
                English
              </button>
            </Link>

            <Link href="/exam/gk">
              <button className="bg-pink-100 hover:bg-pink-200 p-4 rounded-2xl w-full col-span-2">
                GK
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}