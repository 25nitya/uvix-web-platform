import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-36 text-white sm:px-8 md:pt-44">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Contact UVIX
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Let&apos;s build something meaningful.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Have a project in mind, a technical challenge to solve, or an idea
            you want to explore? Tell us a little about it.
          </p>
        </section>

        {/* Contact information and form */}
        <section className="mt-16 grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="text-2xl font-semibold">Start a conversation</h2>

            <p className="mt-4 max-w-md leading-7 text-gray-400">
              Share your goals and requirements. The next step is understanding
              the problem and identifying the right approach.
            </p>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-sm text-gray-500">What we can discuss</p>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li>AI and machine learning solutions</li>
                <li>Web and software development</li>
                <li>Cloud infrastructure and cybersecurity</li>
                <li>Product engineering and consulting</li>
              </ul>
            </div>

            <Link
              href="/services"
              className="mt-8 inline-block text-sm text-gray-400 transition hover:text-white"
            >
              Explore our services →
            </Link>
          </div>

          <div className="border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl font-semibold">Tell us about your project</h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Complete the fields below to prepare your enquiry.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-white/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-gray-300"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-white/40"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Company <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-white/40"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm text-gray-300"
                >
                  What do you need help with?
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                  className="w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-white/40"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="ai">AI &amp; Machine Learning</option>
                  <option value="software">Software &amp; Product Development</option>
                  <option value="cloud">Cloud &amp; Infrastructure</option>
                  <option value="security">Cybersecurity</option>
                  <option value="other">Other / Not sure yet</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your goals, requirements, or challenges..."
                  required
                  className="w-full resize-y border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-white/40"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:bg-gray-200 sm:w-auto"
              >
                Enquiry form preview →
              </button>

              <p className="text-xs leading-5 text-gray-500">
                
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}