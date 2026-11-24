import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mary Clier | Personal Site",
  description: "A personal site built with Next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">

        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <h2 className="text-xl font-bold">
              My Personal Site
            </h2>

            <div className="flex gap-6">
              <Link href="/" className="hover:text-blue-200 transition">
  Home
</Link>

<Link href="/about" className="hover:text-blue-200 transition">
  About
</Link>

<Link href="/projects" className="hover:text-blue-200 transition">
  Projects
</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
          <p>
            © 2026 My Personal Website. All rights reserved.
          </p>
        </footer>

      </body>
    </html>
  );
}