
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiGet } from "@/lib/api";

interface ServiceCategory {
  id: number;
  title: string;
  slug: string;
  description: string;
  offerings: string[];
  sortOrder: number;
}

export default function ServicesPage() {
  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await apiGet<ServiceCategory[]>("/services");
        setServiceCategories(data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
        setError("Unable to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-400">
            Services
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Technology solutions
            <span className="block text-zinc-500">
              built for real business challenges.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            From AI and software development to cloud infrastructure and
            cybersecurity, we design and build technology that helps
            businesses scale.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {loading && (
            <p className="py-10 text-gray-400">Loading services...</p>
          )}

          {error && (
            <p className="py-10 text-red-400">{error}</p>
          )}

          {!loading && !error && (
            <div className="space-y-0">
              {serviceCategories.map((category, index) => (
                <div
                  key={category.id}
                  className="border-b border-white/10 py-14"
                >
                  <div className="grid gap-10 md:grid-cols-[120px_1fr_1.5fr]">
                    <span className="text-sm text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-3xl font-medium md:text-4xl">
                      {category.title}
                    </h2>

                    <div>
                      <p className="max-w-xl text-lg leading-8 text-gray-400">
                        {category.description}
                      </p>

                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {category.offerings.map((offering) => (
                          <div
                            key={offering}
                            className="border border-white/10 px-5 py-4 text-gray-200 transition hover:border-white/30"
                          >
                            {offering}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
            Have a technology challenge?
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Tell us what you're building. We'll explore the right technology
            approach for your business.
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
