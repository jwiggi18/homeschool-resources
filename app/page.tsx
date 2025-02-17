export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#c2c991] to-[#637f4f] flex flex-col items-center justify-center text-gray-800">

      {/* GIF Header (Using Giphy URL) */}
      <div className="w-full h-72 overflow-hidden">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExem8zdGJoc3dvcnlscmJhbW83aDJlbDFrNGlkeDRja3l3amtvM2Q2ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JaS7ZfYp1CCli/giphy.gif"
          alt="Soothing water brook"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <section className="text-center px-6 py-16">
        <h1 className="text-5xl font-bold text-[#1c1f14] drop-shadow-lg">
          Empower Your Homeschooling Journey
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Find curated homeschooling resources by grade, subject, and learning style.
          Designed to help parents and educators create engaging lessons with ease.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a href="/grades" className="px-6 py-3 bg-[#4f6b8e] text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Browse by Grade
          </a>
          <a href="/subjects" className="px-6 py-3 bg-[#5f738c] text-white font-semibold rounded-lg hover:bg-indigo-600 transition">
            Explore Subjects
          </a>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="grid md:grid-cols-3 gap-6 px-6 py-12 w-full max-w-6xl">

        {/* Card 1 */}
        <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 text-center">
          <h3 className="text-xl font-semibold text-blue-900">Diverse Learning Styles</h3>
          <p className="text-gray-600 mt-2">Find resources tailored to different learning preferences.</p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 text-center">
          <h3 className="text-xl font-semibold text-blue-900">Curated Content</h3>
          <p className="text-gray-600 mt-2">High-quality, vetted educational materials for all subjects.</p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 text-center">
          <h3 className="text-xl font-semibold text-blue-900">Flexible & Free</h3>
          <p className="text-gray-600 mt-2">Most resources are free or low-cost for homeschooling families.</p>
        </div>

      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-white text-center">
        <p>© 2025 Homeschooling Resources. All Rights Reserved.</p>
      </footer>

    </main>
  );
}
