import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8">

      <section className="py-16 text-center">

        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Hello, my name is Your Name!
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Welcome to my personal website!
          I am a student learning web development
          and programming using Next.js.
          I enjoy exploring technology, learning
          new skills, and creating websites.
        </p>

        <Link
          href="/projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          See my projects
        </Link>

      </section>

    </main>
  );
}