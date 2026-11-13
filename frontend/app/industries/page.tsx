
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet } from "@/lib/api";

interface Industry {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string | null;
  solutions: string[];
  sortOrder: number;
}

export default function IndustriesPage() {
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [openIndustry, setOpenIndustry] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchIndustries() {
      try {
        const data = await apiGet<Industry[]>("/industries");
        setIndustries(data);
      } catch (err) {
        console.error("Failed to fetch industries:", err);
        setError("Unable to load industries. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchIndustries();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-400">
            Industries
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Technology designed
            <span className="block text-zinc-500">
              around your industry.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            We combine industry understanding with software engineering,
            AI, cloud, and data to solve complex business challenges.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {loading && (
            <p className="py-10 text-gray-400">
              Loading industries...
            </p>
          )}

          {error && (
            <p className="py-10 text-red-400">
              {error}
            </p>
          )}

          {!loading && !error && (
            <div className="border-t border-white/20">
              {industries.map((industry, index) => {
                const isOpen = openIndustry === industry.id;

                return (
                  <div
                    key={industry.id}
                    className="border-b border-white/20"
                  >
                    <button
                      onClick={() =>
                        setOpenIndustry(isOpen ? null : industry.id)
                      }
                      className="flex w-full items-center justify-between py-8 text-left"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-sm text-gray-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h2 className="text-2xl font-medium md:text-4xl">
                          {industry.name}
                        </h2>
                      </div>

                      <span className="text-3xl font-light">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="grid gap-8 pb-10 pl-12 md:grid-cols-2">
                        <p className="max-w-md text-lg leading-8 text-gray-400">
                          {industry.description}
                        </p>

                        <div className="grid gap-3">
                          {industry.solutions.map((solution) => (
                            <div
                              key={solution}
                              className="border-b border-white/10 py-3 text-lg text-gray-200"
                            >
                              {solution}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Let's build
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Building for your industry?
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Tell us about your challenge and let's explore what technology
            can do for your business.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
