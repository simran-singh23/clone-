import { Link, useParams } from "react-router-dom";

const footerContent = {
  about: {
    eyebrow: "Get to Know Us",
    title: "About Our Storefront Experience",
    description:
      "This page introduces the shopping experience, key categories, and the customer-first approach behind the storefront.",
    highlights: [
      "Browse curated sections like electronics, fashion, groceries, and daily deals.",
      "Use account, cart, and order pages to explore the full shopping flow.",
      "Jump back into support or product discovery from quick navigation cards below.",
    ],
    stats: [
      { label: "Popular sections", value: "8+" },
      { label: "Support shortcuts", value: "24/7" },
      { label: "Shopping flow", value: "End-to-end" },
    ],
  },
  careers: {
    eyebrow: "Get to Know Us",
    title: "Careers and Opportunities",
    description:
      "Learn about roles across customer support, operations, product curation, and growth for an online marketplace team.",
    highlights: [
      "Explore roles in design, logistics, engineering, and customer support.",
      "Understand the impact each team has on faster shopping and smoother support.",
      "Review a simple hiring journey with application, screening, and onboarding steps.",
    ],
    stats: [
      { label: "Team paths", value: "4" },
      { label: "Hiring stages", value: "3" },
      { label: "Work style", value: "Hybrid-ready" },
    ],
  },
  press: {
    eyebrow: "Get to Know Us",
    title: "Press and Media Updates",
    description:
      "A clean landing space for featured announcements, milestones, and product or service highlights.",
    highlights: [
      "Share launch notes for new categories and shopping improvements.",
      "Highlight customer service improvements and delivery-focused updates.",
      "Keep media contacts and brand assets easy to find.",
    ],
    stats: [
      { label: "Announcements", value: "Latest" },
      { label: "Media assets", value: "Ready" },
      { label: "Response time", value: "< 24 hrs" },
    ],
  },
  facebook: {
    eyebrow: "Connect with Us",
    title: "Follow Us on Facebook",
    description:
      "Discover updates, featured products, offers, and support pointers shared through the Facebook community.",
    highlights: [
      "Check seasonal offers, festive drops, and featured collections.",
      "Find support reminders that route customers to the right help page fast.",
      "Stay updated with store announcements and community-driven highlights.",
    ],
    stats: [
      { label: "Community feed", value: "Active" },
      { label: "Offer updates", value: "Weekly" },
      { label: "Support tips", value: "Included" },
    ],
  },
  twitter: {
    eyebrow: "Connect with Us",
    title: "Real-Time Updates on Twitter",
    description:
      "Use this space for quick service announcements, launch updates, and fast-moving highlights.",
    highlights: [
      "Share real-time updates for events, sales, and service notices.",
      "Promote new launches in short, easy-to-scan posts.",
      "Direct customers toward the right page for help, orders, or returns.",
    ],
    stats: [
      { label: "Update speed", value: "Fast" },
      { label: "Launch posts", value: "Short-form" },
      { label: "Service notices", value: "Live" },
    ],
  },
  instagram: {
    eyebrow: "Connect with Us",
    title: "Visual Stories on Instagram",
    description:
      "A visual-first page for lifestyle features, category inspiration, and seasonal collections.",
    highlights: [
      "Showcase trending products through a scroll-friendly visual layout.",
      "Promote fashion, home, and electronics collections with strong imagery.",
      "Use story highlights to guide customers to support and deals pages.",
    ],
    stats: [
      { label: "Visual campaigns", value: "Featured" },
      { label: "Story highlights", value: "Organized" },
      { label: "Trend focus", value: "High" },
    ],
  },
  affiliate: {
    eyebrow: "Make Money with Us",
    title: "Affiliate Program Overview",
    description:
      "Understand how creators, reviewers, and niche publishers can promote products and earn through recommendations.",
    highlights: [
      "Create product-focused content for gadgets, home picks, and style edits.",
      "Use trusted recommendations to drive customers into relevant shopping pages.",
      "Track performance with simple reporting and campaign-level insights.",
    ],
    stats: [
      { label: "Creator fit", value: "Beginner-friendly" },
      { label: "Categories", value: "Multi-niche" },
      { label: "Insights", value: "Trackable" },
    ],
  },
  advertise: {
    eyebrow: "Make Money with Us",
    title: "Advertise Your Brand",
    description:
      "Promote products through placements built around discovery, relevance, and high-intent shopping moments.",
    highlights: [
      "Feature sponsored placements across high-traffic shopping sections.",
      "Target customers by category interest and active browsing behavior.",
      "Measure campaign visibility and engagement with simple summaries.",
    ],
    stats: [
      { label: "Ad surfaces", value: "Multi-page" },
      { label: "Targeting", value: "Category-based" },
      { label: "Reporting", value: "Simple" },
    ],
  },
  returns: {
    eyebrow: "Let Us Help You",
    title: "Returns and Refund Guidance",
    description:
      "Everything customers usually need to understand return windows, refund steps, and issue resolution.",
    highlights: [
      "Start a return from your orders page and choose the item to send back.",
      "Review refund timing, pickup eligibility, and replacement options.",
      "Switch to customer service if you need help with damaged or missing items.",
    ],
    stats: [
      { label: "Return flow", value: "3 steps" },
      { label: "Pickup support", value: "Available" },
      { label: "Escalation path", value: "Customer Service" },
    ],
  },
};

function FooterInfoPage() {
  const { slug } = useParams();
  const content = footerContent[slug] ?? {
    eyebrow: "Footer Page",
    title: "Page Not Found",
    description:
      "The footer item you opened does not have a dedicated page yet, but you can continue exploring the store and support sections.",
    highlights: [
      "Return to the home page to continue browsing products.",
      "Visit customer service for account, order, or payment help.",
      "Use the footer navigation to open another information page.",
    ],
    stats: [
      { label: "Status", value: "Unavailable" },
      { label: "Alternative", value: "Customer Service" },
      { label: "Navigation", value: "Footer links" },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            {content.eyebrow}
          </p>
          <h1 className="max-w-3xl text-3xl font-bold md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200 md:text-base">
            {content.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/service"
              className="rounded-full bg-yellow-400 px-5 py-2.5 font-semibold text-black transition hover:bg-yellow-300"
            >
              Open Customer Service
            </Link>
            <Link
              to="/"
              className="rounded-full border border-white/30 px-5 py-2.5 font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-[1.6fr_1fr]">
        <div className="rounded-3xl bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">
            What you can do here
          </h2>
          <div className="mt-6 grid gap-4">
            {content.highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Quick Snapshot</h2>
            <div className="mt-5 space-y-4">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-slate-900 p-4 text-white"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-amber-50 p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Explore More</h2>
            <div className="mt-5 grid gap-3 text-sm">
              <Link
                to="/orders"
                className="rounded-2xl border border-amber-200 bg-white px-4 py-3 text-slate-700 transition hover:border-amber-400 hover:text-slate-900"
              >
                Track or review your orders
              </Link>
              <Link
                to="/pay"
                className="rounded-2xl border border-amber-200 bg-white px-4 py-3 text-slate-700 transition hover:border-amber-400 hover:text-slate-900"
              >
                Manage payment and checkout details
              </Link>
              <Link
                to="/sell"
                className="rounded-2xl border border-amber-200 bg-white px-4 py-3 text-slate-700 transition hover:border-amber-400 hover:text-slate-900"
              >
                Explore selling and business options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterInfoPage;
