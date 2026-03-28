import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, insights, and stories from the Febalty team.",
};

const posts = [
  {
    title: "5 Tips for Thriving in a New City",
    excerpt: "Moving to a new place can feel overwhelming. Here are our top strategies for settling in fast and building meaningful connections.",
    date: "March 28, 2026",
    category: "Lifestyle",
    readTime: "4 min read",
  },
  {
    title: "The Productivity Trap: Why Doing More Is Not the Answer",
    excerpt: "Most people think productivity means cramming more into your day. We break down why working smarter beats working harder every time.",
    date: "March 25, 2026",
    category: "Productivity",
    readTime: "6 min read",
  },
  {
    title: "Building Your Network From Scratch",
    excerpt: "Starting fresh does not mean starting alone. Learn how to build a powerful network even when you do not know anyone in town.",
    date: "March 20, 2026",
    category: "Community",
    readTime: "5 min read",
  },
  {
    title: "Welcome to Febalty",
    excerpt: "We are excited to officially launch. Learn about our mission, what we offer, and how we plan to help people thrive in their new environments.",
    date: "March 15, 2026",
    category: "News",
    readTime: "3 min read",
  },
];

const categoryColors: Record<string, string> = {
  Lifestyle: "bg-purple-100 text-purple-700",
  Productivity: "bg-blue-100 text-blue-700",
  Community: "bg-green-100 text-green-700",
  News: "bg-primary-light text-primary",
};

export default function Blog() {
  return (
    <>
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Insights and stories</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Tips, strategies, and real talk about navigating life and leveling up.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <article
                key={post.title}
                className={`bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-xl transition-all duration-300 group ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className={`bg-gradient-to-br from-secondary/5 to-primary/5 flex items-center justify-center ${i === 0 ? "h-64" : "h-48"}`}>
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                      {post.category}
                    </span>
                    <span className="text-muted-light text-sm">{post.readTime}</span>
                  </div>
                  <h2 className={`font-bold text-secondary mb-3 group-hover:text-primary transition-colors ${i === 0 ? "text-2xl" : "text-xl"}`}>
                    {post.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-light">{post.date}</span>
                    <span className="text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
