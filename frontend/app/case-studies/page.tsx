import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-400">
            Case Studies
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Technology in action.
            <span className="block text-zinc-500">
              Problems solved through engineering.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            Explore how technology, engineering, and AI can be combined to
            solve complex business challenges.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                key={study.number}
                className="group border border-white/10 p-8 transition hover:border-white/30 md:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {study.number}
                  </span>

                  <span className="text-sm text-gray-500">
                    {study.industry}
                  </span>
                </div>

                <h2 className="mt-16 text-3xl font-medium tracking-tight md:text-4xl">
                  {study.title}
                </h2>

                <p className="mt-6 text-base leading-7 text-gray-400">
                  {study.description}
                </p>

                <div className="mt-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-500">
                    Services
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="border border-white/10 px-3 py-1.5 text-sm text-gray-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-500">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-sm text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <span className="text-sm text-white transition group-hover:text-gray-400">
                    View case study →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Your challenge
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Have a problem worth solving?
          </h2>

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