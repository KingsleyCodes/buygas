export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-orange-500">
          Tailwind is working 🎉
        </h1>

        <p className="text-gray-300">
          If you see colors, spacing, and fonts, Tailwind is set up correctly.
        </p>

        <button className="px-6 py-3 bg-orange-500 text-black rounded-lg font-semibold hover:bg-orange-600 transition">
          Test Button
        </button>
      </div>
    </main>
  );
}
