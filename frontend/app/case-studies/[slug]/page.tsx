
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import { caseStudyDetails } from "@/data/caseStudyDetails";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const details =
    caseStudyDetails[slug as keyof typeof caseStudyDetails];

  if (!details) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-32 pt-32 text-white sm:px-8 md:pb-40 md:pt-40">
      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <Link
          href="/case-studies"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          ← All Case Studies
        </Link>

        {/* Hero */}
        <section className="mt-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            {study.industry}
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            {study.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">
            {study.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {study.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section className="mt-20 border-t border-white/10 pt-10">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Project Overview
          </p>

          <p className="mt-5 max-w-4xl text-xl leading-9 text-gray-300">
            {details.overview}
          </p>
        </section>

        {/* Problem */}
        <section className="mt-16 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-[200px_1fr]">
          <h2 className="text-2xl font-semibold">The Challenge</h2>

          <p className="text-lg leading-8 text-gray-400">
            {details.problem}
          </p>
        </section>

        {/* Solution */}
        <section className="mt-16 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-[200px_1fr]">
          <h2 className="text-2xl font-semibold">The Solution</h2>

          <p className="text-lg leading-8 text-gray-400">
            {details.solution}
          </p>
        </section>

        {/* Architecture */}
        <section className="mt-16 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-[200px_1fr]">
          <h2 className="text-2xl font-semibold">Architecture</h2>

          <div>
            <p className="text-lg leading-8 text-gray-400">
              {details.architecture}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {study.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/10 px-3 py-2 text-sm text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering Considerations */}
        <section className="mt-16 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-semibold">
            Key Engineering Considerations
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {details.considerations.map((item, index) => (
              <div
                key={item}
                className="border border-white/10 p-5"
              >
                <p className="text-sm text-gray-500">
                  0{index + 1}
                </p>

                <p className="mt-3 text-lg text-gray-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mt-16 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-semibold">
            Related Services
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {study.services.map((service) => (
              <span
                key={service}
                className="border border-white/10 px-4 py-2 text-sm text-gray-300"
              >
                {service}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 border-t border-white/10 pb-16 pt-12 md:mt-32 md:pb-24">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Your next project
          </p>

          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Have a similar challenge?
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Let's explore how the right technology and engineering
            approach could help your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Start a Conversation →
          </Link>
        </section>
      </div>
    </main>
  );
}

