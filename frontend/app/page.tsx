import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="flex min-h-screen items-center px-6 pt-20">
        <div className="mx-auto w-full max-w-7xl">

          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
            AI • Software • Engineering
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            We build technology
            <span className="block text-zinc-500">
              that moves businesses forward.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            UVIX TECHNOLOGIES combines AI, software engineering, cloud,
            cybersecurity, and data to build scalable digital products
            and intelligent business solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="/contact"
              className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Start a Project
            </a>

            <a
              href="/case-studies"
              className="rounded-full border border-zinc-700 px-7 py-3.5 text-center text-sm font-medium text-white transition hover:bg-zinc-900"
            >
              Explore Our Work
            </a>

          </div>

        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* CTA */}
      <section className="border-t border-zinc-800 px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Let's build
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Have a challenge worth solving?
          </h2>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Talk to UVIX TECHNOLOGIES
          </a>

        </div>

      </section>

    </main>
  );
}

