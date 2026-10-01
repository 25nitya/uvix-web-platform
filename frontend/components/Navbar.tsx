"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          UVIX TECHNOLOGIES
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/services" className="text-sm text-gray-300 hover:text-white">
            Services
          </Link>

          <Link href="/industries" className="text-sm text-gray-300 hover:text-white">
            Industries
          </Link>

          <Link href="/case-studies" className="text-sm text-gray-300 hover:text-white">
            Case Studies
          </Link>

          <Link href="/insights" className="text-sm text-gray-300 hover:text-white">
            Insights
          </Link>

          <Link href="/careers" className="text-sm text-gray-300 hover:text-white">
            Careers
          </Link>
        </div>

        {/* Contact */}
        <Link
          href="/contact"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          Let's Talk
        </Link>

      </div>
    </nav>
  );
}