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
            UVIX TECHNOLOGIES combines AI, software engineering, cloud, cybersecurity,
            and data to build scalable digital products and intelligent
            business solutions.
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


      {/* Services Preview */}
      <section className="border-t border-zinc-800 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            What we do
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            From ideas to intelligent digital products.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-2 lg:grid-cols-3">

            <div className="bg-black p-8">
              <p className="text-sm text-zinc-500">01</p>
              <h3 className="mt-6 text-2xl font-medium">
                AI & Machine Learning
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                AI-powered applications, intelligent automation, LLM
                solutions, and machine learning systems.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-zinc-500">02</p>
              <h3 className="mt-6 text-2xl font-medium">
                Software Engineering
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Scalable web platforms, APIs, enterprise applications,
                and custom software products.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-zinc-500">03</p>
              <h3 className="mt-6 text-2xl font-medium">
                Cloud & DevOps
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Cloud-native infrastructure, deployment automation,
                scalability, and reliable production systems.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-zinc-500">04</p>
              <h3 className="mt-6 text-2xl font-medium">
                Cybersecurity
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Secure applications, identity, access control, and
                security-focused engineering.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-zinc-500">05</p>
              <h3 className="mt-6 text-2xl font-medium">
                Data Engineering
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Data platforms, pipelines, analytics infrastructure,
                and data-driven solutions.
              </p>
            </div>

            <div className="bg-black p-8">
              <p className="text-sm text-zinc-500">06</p>
              <h3 className="mt-6 text-2xl font-medium">
                Product Engineering
              </h3>
              <p className="mt-4 leading-7 text-zinc-400">
                End-to-end product development from architecture and
                design to deployment and scale.
              </p>
            </div>

          </div>

        </div>

      </section>


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