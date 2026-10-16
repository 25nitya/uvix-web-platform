
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type ApplicationForm = {
  name: string;
  email: string;
  department: string;
  message: string;
};

const departments = [
  "Software Engineering",
  "AI & Machine Learning",
  "Cloud & Infrastructure",
  "Cybersecurity",
  "Product & Design",
  "Other",
];

const initialForm: ApplicationForm = {
  name: "",
  email: "",
  department: "",
  message: "",
};

export default function CareersPage() {
  const [filters, setFilters] = useState({
    department: "All departments",
    location: "All locations",
  });

  const [form, setForm] = useState<ApplicationForm>(initialForm);
  const [resume, setResume] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setFileError("");
    setSubmitted(false);

    if (!file) {
      setResume(null);
      return;
    }

    const allowedExtensions = /\.(pdf|doc|docx)$/i;
    const maxSize = 5 * 1024 * 1024;

    if (!allowedExtensions.test(file.name)) {
      setResume(null);
      setFileError("Choose a PDF, DOC, or DOCX file.");
      event.target.value = "";
      return;
    }

    if (file.size > maxSize) {
      setResume(null);
      setFileError("Your CV must be 5 MB or smaller.");
      event.target.value = "";
      return;
    }

    setResume(file);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!resume) {
      setFileError("Please select your CV to continue.");
      return;
    }

    // Frontend demonstration only.
    // No application or file is uploaded or saved.
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-black pb-24 pt-32 text-white sm:pt-40">
      {/* Careers hero */}
      <section className="px-6 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              Careers / Join our talent network
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-8xl">
              Your next idea could change everything.
            </h1>

            <div className="max-w-md lg:justify-self-end">
              <p className="leading-7 text-gray-400">
                Interested in building thoughtful technology? Explore
                opportunities at UVIX and introduce yourself for future roles.
              </p>

              <a
                href="#open-roles"
                className="mt-6 inline-flex border-b border-white/40 pb-2 text-sm transition hover:border-white"
              >
                Explore opportunities <span className="ml-3">↓</span>
              </a>
            </div>
          </div>

          <div className="mt-14 border-y border-white/10 py-5">
            <div className="grid gap-3 text-sm text-gray-400 sm:grid-cols-3">
              <p>01 / Engineering mindset</p>
              <p>02 / Practical innovation</p>
              <p>03 / Continuous learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="scroll-mt-24 px-6 pt-24 sm:px-8 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Opportunities
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Open positions
              </h2>
            </div>

            <p className="text-sm text-gray-500">
              0 open positions currently listed
            </p>
          </div>

          {/* Filters are ready for future job data */}
          <div className="mt-9 grid gap-4 border-y border-white/10 py-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="department-filter"
                className="mb-2 block text-xs text-gray-500"
              >
                Department
              </label>

              <select
                id="department-filter"
                value={filters.department}
                onChange={(event) =>
                  setFilters((previous) => ({
                    ...previous,
                    department: event.target.value,
                  }))
                }
                className="w-full border border-white/10 bg-black px-4 py-3 text-sm text-gray-300 outline-none focus:border-white/40"
              >
                <option>All departments</option>
                {departments.map((department) => (
                  <option key={department}>{department}</option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="location-filter"
                className="mb-2 block text-xs text-gray-500"
              >
                Work location
              </label>

              <select
                id="location-filter"
                value={filters.location}
                onChange={(event) =>
                  setFilters((previous) => ({
                    ...previous,
                    location: event.target.value,
                  }))
                }
                className="w-full border border-white/10 bg-black px-4 py-3 text-sm text-gray-300 outline-none focus:border-white/40"
              >
                <option>All locations</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>On-site</option>
              </select>
            </div>
          </div>

          {/* Empty state until verified vacancies are added */}
          <div className="mt-8 border border-white/10 bg-white/[0.02] px-6 py-12 sm:px-10 sm:py-16">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              No current openings
            </p>

            <h3 className="mt-5 max-w-2xl text-2xl font-medium leading-snug sm:text-3xl">
              There are no open roles right now, but your story doesn't end
              here.
            </h3>

            <p className="mt-4 max-w-2xl leading-7 text-gray-400">
              Tell us about your interests and experience through the form
              below. You can introduce yourself for consideration when suitable
              opportunities become available.
            </p>

            <a
              href="#application"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              Introduce yourself →
            </a>
          </div>

          <p className="mt-4 text-xs leading-5 text-gray-600">
            Department and location filters are prepared for future listings.
            They do not filter vacancies while none are published.
          </p>
        </div>
      </section>

      {/* Working principles */}
      <section className="mt-24 border-y border-white/10 bg-white/[0.02] px-6 py-16 sm:px-8 md:mt-32 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              What matters
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              The work matters. So does how we do it.
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-t border-white/10">
            <article className="py-6 sm:py-8">
              <p className="text-xs text-gray-500">01</p>
              <h3 className="mt-3 text-xl font-medium">Solve real problems</h3>
              <p className="mt-3 max-w-xl leading-7 text-gray-400">
                Start with the challenge, understand the context, and choose
                technology that fits the problem.
              </p>
            </article>

            <article className="py-6 sm:py-8">
              <p className="text-xs text-gray-500">02</p>
              <h3 className="mt-3 text-xl font-medium">Stay curious</h3>
              <p className="mt-3 max-w-xl leading-7 text-gray-400">
                Keep exploring, question assumptions, and look for better ways
                to build and deliver software.
              </p>
            </article>

            <article className="py-6 sm:py-8">
              <p className="text-xs text-gray-500">03</p>
              <h3 className="mt-3 text-xl font-medium">Build responsibly</h3>
              <p className="mt-3 max-w-xl leading-7 text-gray-400">
                Think about reliability, security, maintainability, and the
                people who will use the technology.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Talent network form */}
      <section id="application" className="scroll-mt-24 px-6 pt-24 sm:px-8 md:pt-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Candidate profile
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let's get to know you.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-gray-400">
              No vacancy to apply for today? You can still prepare your
              candidate profile for future opportunities.
            </p>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-sm font-medium">Before you continue</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                This is a demonstration form. Your information and CV will not
                be sent to UVIX or stored.
              </p>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-10">
            <h3 className="text-xl font-medium">Introduce yourself</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Fields marked with * are required.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="candidate-name" className="mb-2 block text-sm text-gray-300">
                    Full name *
                  </label>
                  <input
                    id="candidate-name"
                    name="name"
                    value={form.name}
                    onChange={handleFieldChange}
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full border border-white/10 bg-black px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-white/40"
                  />
                </div>

                <div>
                  <label htmlFor="candidate-email" className="mb-2 block text-sm text-gray-300">
                    Email address *
                  </label>
                  <input
                    id="candidate-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleFieldChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full border border-white/10 bg-black px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-white/40"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="candidate-department" className="mb-2 block text-sm text-gray-300">
                  Area of interest *
                </label>
                <select
                  id="candidate-department"
                  name="department"
                  value={form.department}
                  onChange={handleFieldChange}
                  required
                  className="w-full border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-white/40"
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  {departments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="resume" className="mb-2 block text-sm text-gray-300">
                  CV or resume * <span className="text-gray-500">(max 5 MB)</span>
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  required
                  onChange={handleResumeChange}
                  className="block w-full cursor-pointer border border-white/10 bg-black text-sm text-gray-400 file:mr-4 file:border-0 file:border-r file:border-white/10 file:bg-white/[0.06] file:px-4 file:py-3 file:text-sm file:text-white hover:file:bg-white/10"
                />

                {resume && (
                  <p className="mt-2 break-all text-xs text-gray-400">
                    Selected file: {resume.name}
                  </p>
                )}

                {fileError && (
                  <p role="alert" className="mt-2 text-sm text-red-400">
                    {fileError}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="candidate-message" className="mb-2 block text-sm text-gray-300">
                  A little about you
                </label>
                <textarea
                  id="candidate-message"
                  name="message"
                  value={form.message}
                  onChange={handleFieldChange}
                  rows={4}
                  placeholder="Your skills, interests, or the kind of work you'd like to do..."
                  className="w-full resize-y border border-white/10 bg-black px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-white/40"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition hover:bg-gray-200 sm:w-auto"
              >
                Preview candidate profile →
              </button>

              {submitted && (
                <div role="status" aria-live="polite" className="border border-white/15 p-4">
                  <p className="text-sm font-medium text-white">
                    Profile preview completed.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Your browser validated the form. Nothing was uploaded,
                    sent, or stored. A backend is required before this can
                    become a real application.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
