
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";

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

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-40 text-white">
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
        </section>

        {/* Services */}
        <section className="mt-20 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-semibold">
            Services
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

        {/* Technology Stack */}
        <section className="mt-16 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-semibold">
            Technology Stack
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
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

        {/* Project CTA */}
        <section className="mt-20 border-t border-white/10 pt-12">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Have a similar challenge?
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            Let's explore how the right technology and engineering
            approach can help solve your business problem.
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

