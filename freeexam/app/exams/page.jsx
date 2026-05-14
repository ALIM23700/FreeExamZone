"use client";

import Link from "next/link";

export default function ExamsPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">

        {/* Admission */}
        <Link href="/admission">
          <div className="bg-white hover:scale-105 transition cursor-pointer rounded-3xl shadow-xl p-16 text-center">
            <h1 className="text-5xl font-bold text-purple-700">
              Admission
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Medical, Engineering, University Admission Exams
            </p>
          </div>
        </Link>

        {/* HSC */}
        <Link href="/hsc">
          <div className="bg-white hover:scale-105 transition cursor-pointer rounded-3xl shadow-xl p-16 text-center">
            <h1 className="text-5xl font-bold text-orange-600">
              HSC
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              HSC Subject Based Exams & MCQ Practice
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}