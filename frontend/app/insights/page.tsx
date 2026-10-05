import Link from "next/link";
import { insights } from "@/data/insights";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="mb-24">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
            Insights
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Engineering knowledge
            <span className="block text-zinc-500">
              for the intelligent future.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            Technical guides, research, architecture, and engineering
            perspectives from the world of AI, software, cloud, data,
            and cybersecurity.
          </p>
        </section>

        {/* Insights */}
        <section>
          <div className="mb-8 flex items-end justify-between border-b border-white/20 pb-5">
            <h2 className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Latest insights
            </h2>

            <span className="hidden text-sm text-gray-600 sm:block">
              {insights.length} articles
            </span>
          </div>

          <div>
            {insights.map((article) => (
              <article
                key={article.number}
                className="group border-b border-white/10 py-10"
              >
                <Link
                  href={`/insights/${article.slug}`}
                  className="grid gap-8 md:grid-cols-[80px_1fr_180px] md:items-start"
                >
                  <span className="text-sm text-gray-600">
                    {article.number}
                  </span>

                  <div>
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                      {article.type}
                    </p>

                    <h3 className="max-w-3xl text-2xl font-medium tracking-tight transition group-hover:text-gray-400 md:text-4xl">
                      {article.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500">
                      {article.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {article.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="text-sm text-gray-600 transition group-hover:text-white">
                    Read article →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 border-t border-white/10 pt-16">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Have a technical challenge?
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Let's turn complex problems into working technology.
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-gray-200"
          >
            Talk to UVIX
          </Link>
        </section>
      </div>
    </main>
  );
}