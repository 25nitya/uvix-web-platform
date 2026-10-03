import Link from "next/link";
import { serviceCategories } from "@/data/services";

export default function ServicesPage() {
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
          <div className="space-y-0">
            {serviceCategories.map((category) => (
              <div
                key={category.number}
                className="border-b border-white/10 py-14"
              >
                <div className="grid gap-10 md:grid-cols-[120px_1fr_1.5fr]">
                  <span className="text-sm text-gray-500">
                    {category.number}
                  </span>

                  <h2 className="text-3xl font-medium md:text-4xl">
                    {category.title}
                  </h2>

                  <div>
                    <p className="max-w-xl text-lg leading-8 text-gray-400">
                      {category.description}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {category.services.map((service) => (
                        <div
                          key={service}
                          className="border border-white/10 px-5 py-4 text-gray-200 transition hover:border-white/30"
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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