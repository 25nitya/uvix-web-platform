"use client";

import { useState } from "react";
import Link from "next/link";
import { serviceCategories } from "@/data/services";

export default function ServicesSection() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            Services
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Technology built around your business.
          </h2>
        </div>

        {/* Categories */}
        <div className="border-t border-white/20">
          {serviceCategories.map((category, index) => {
            const isOpen = openCategory === index;

            return (
              <div key={category.number} className="border-b border-white/20">

                {/* Category Header */}
                <button
                  onClick={() =>
                    setOpenCategory(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between py-8 text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-gray-500">
                      {category.number}
                    </span>

                    <h3 className="text-2xl font-medium md:text-4xl">
                      {category.title}
                    </h3>
                  </div>

                  <span className="text-3xl font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="grid gap-8 pb-10 pl-12 md:grid-cols-2">

                    <p className="max-w-md text-gray-400">
                      {category.description}
                    </p>

                    <div className="grid gap-3">
                      {category.services.map((service) => (
                        <div
                          key={service}
                          className="border-b border-white/10 py-3 text-lg text-gray-200"
                        >
                          {service}
                        </div>
                      ))}
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All */}
        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
          >
            View all services →
          </Link>
        </div>

      </div>
    </section>
  );
}