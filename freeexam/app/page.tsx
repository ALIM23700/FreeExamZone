export default function Home() {
  const exams = [
    {
      title: "Medical Admission Exam",
      category: "Admission",
      students: "12,000+ Students",
    },
    {
      title: "Engineering Admission Exam",
      category: "Admission",
      students: "9,500+ Students",
    },
    {
      title: "HSC ICT Model Test",
      category: "HSC",
      students: "5,000+ Students",
    },
    {
      title: "HSC Physics MCQ",
      category: "HSC",
      students: "7,200+ Students",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-blue-600">
          FreeExamZone
        </h1>

        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <a href="#">Home</a>
          <a href="#">Exams</a>
          <a href="#">HSC</a>
          <a href="#">Admission</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Practice Free Exams Anytime
        </h2>

        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
          FreeExamZone helps HSC and Admission students prepare with unlimited
          free mock tests and real exam experiences.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">
          <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition">
            Start Free Exam
          </button>

          <button className="border border-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-700 transition">
            Explore Exams
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold">
            Why Students Choose Us
          </h3>

          <p className="text-gray-600 mt-4 text-lg">
            Everything you need for HSC and Admission preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4">
              Free Unlimited Exams
            </h4>

            <p className="text-gray-600 leading-7">
              Take unlimited exams completely free.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4">
              Live Ranking System
            </h4>

            <p className="text-gray-600 leading-7">
              Compete with thousands of students.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4">
              Admission + HSC Support
            </h4>

            <p className="text-gray-600 leading-7">
              Dedicated exams for university admission and HSC students.
            </p>
          </div>
        </div>
      </section>

      {/* Exams Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h3 className="text-4xl font-bold">
              Popular Exams
            </h3>

            <p className="text-gray-600 mt-3">
              Start practicing with our most popular exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exams.map((exam, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
                  {exam.category}
                </span>

                <h4 className="text-2xl font-bold mt-5">
                  {exam.title}
                </h4>

                <p className="text-gray-600 mt-3">
                  {exam.students}
                </p>

                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                  Give Exam
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 bg-gradient-to-r from-indigo-700 to-blue-700 text-white text-center">
        <h3 className="text-5xl font-bold">
          Ready To Boost Your Preparation?
        </h3>

        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
          Join thousands of HSC and Admission students already practicing on
          FreeExamZone.
        </p>

        <button className="mt-10 bg-white text-blue-700 px-10 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition">
          Create Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-2xl font-bold text-white">
              FreeExamZone
            </h4>

            <p className="mt-4 text-gray-400 leading-7">
              A free online exam platform for HSC and Admission students.
            </p>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-4">
              Platform
            </h5>

            <ul className="space-y-3">
              <li>Mock Tests</li>
              <li>Leaderboard</li>
              <li>MCQ Practice</li>
              <li>Live Exams</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-4">
              Categories
            </h5>

            <ul className="space-y-3">
              <li>HSC</li>
              <li>Medical</li>
              <li>Engineering</li>
              <li>University Admission</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-white mb-4">
              Contact
            </h5>

            <ul className="space-y-3">
              <li>Email: support@freeexamzone.com</li>
              <li>Facebook</li>
              <li>YouTube</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © 2026 FreeExamZone. All rights reserved.
        </div>
      </footer>
    </div>
  );
}