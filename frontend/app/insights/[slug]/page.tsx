
import { insights } from "@/data/insights";
import { insightArticles } from "@/data/insightArticles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;

  const article = insights.find(
    (article) => article.slug === slug
  );

  const content =
    insightArticles[slug as keyof typeof insightArticles];

  if (!article) {
    return (
      <main className="min-h-screen bg-black px-6 pt-32 text-white">
        <h1 className="text-4xl font-bold">
          Article not found
        </h1>
      </main>
    );
  }

  if (!content) {
    return (
      <main className="min-h-screen bg-black px-6 pt-32 text-white">
        <h1 className="text-4xl font-bold">
          Article content not available
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 pt-32 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
          {article.type}
        </p>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
          {article.title}
        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-400">
          {article.description}
        </p>

        <p className="mt-10 text-lg leading-8 text-gray-300">
          {content.introduction}
        </p>

        <div className="mt-16 space-y-12">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {section.heading}
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-400">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

